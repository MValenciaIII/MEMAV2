import { Component, ChangeDetectorRef, OnInit, OnDestroy, NgZone, SimpleChange, SimpleChanges, Input, ViewChild, AfterViewInit } from '@angular/core';
// import * as Leaflet from 'leaflet';
import { HttpClient } from "@angular/common/http";
import * as L from "leaflet";
import * as esri from "esri-leaflet";
import '@geoman-io/leaflet-geoman-free';
import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon.png';
import 'proj4leaflet';
import { Capabilities } from 'selenium-webdriver';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page implements AfterViewInit {
  map: L.Map;
  mapOptions: L.MapOptions = LMapOptions;
  maxAlertRange = 400; // Miles
  cityPoints: { [key: string]: CityPoint } = {};
  workingAlertArea: AlertArea = null;
  NWSFL: esri.FeatureLayer = new esri.FeatureLayer({ url: WeatherServiceUrl });
  @ViewChild('alertRange') alertRangeEl;

  constructor(private http: HttpClient, private cRef: ChangeDetectorRef ) {}

  ngOnInit() {}   
    
  ngAfterViewInit() {}

  getLocationService(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve({lng: resp.coords.longitude, lat: resp.coords.latitude})
      })
    })
  }
    
  onMapReady(map: L.Map) {
    this.map = map;
    this.NWSFL.addTo(this.map);
    this.NWSFL.setWhere('0=1');
    this.NWSFL.setStyle({ color: 'red' });
    this.getLocationService().then(resp => {
      this.map.setView(L.latLng(resp.lat, resp.lng), 8)
    });
    this.setCityPoints();
    setInterval(this.checkForWeatherAlerts.bind(this), 10000);
  }

  private async checkForWeatherAlerts() {
    let cities = Object.values(this.cityPoints).filter(point => (point.alertArea));
    if (cities.length == 0) return;
    cities.forEach(city => {
      this.NWSFL.query().intersects(city.alertArea.polygon).ids((error, ids) => {
        if (error) {
          console.log('Error with query: ' + error);
        } else if (ids) {
          city.weatherAlerts = ids;
          this.updateMapWeatherAlerts();
        }
      });
    });
  }

  private updateMapWeatherAlerts() {
    let citiesWithAlerts = Object.values(this.cityPoints).filter(city => (city.weatherAlerts));
    if (citiesWithAlerts.length == 0) {
      this.NWSFL.setWhere('0=1');
      return;
    }
    let alertObjectIds = [];
    citiesWithAlerts.forEach(city => {
      let uniqueAlerts = [...alertObjectIds, ...city.weatherAlerts];
      alertObjectIds = [... new Set(uniqueAlerts)];
    });
    this.NWSFL.setWhere('OBJECTID in (' + alertObjectIds.join(',') + ')');
  }

  private setCityPoints() {
    Object.entries(MSCityNames).forEach(city => {
      let [cityName, cityLatLng] = city;
      let cityIcon = new L.Icon({
        iconUrl: 'marker-icon.png',
        iconSize: [18, 30],
        iconAnchor: [10, 30]
      });
      this.cityPoints[cityName] = {
        marker: L.marker([cityLatLng[0], cityLatLng[1]], {
            title: cityName,
            icon: cityIcon
          }).addTo(this.map)
            .bindPopup(cityName)
            .on('click', this.cityOnClickHandler.bind(this, cityName))
      }
    });
  }

  // TODO:  If you cancel or select another city while editing
  // an already saved area, it doesn't revert back to the original radius
  private cityOnClickHandler(cityName: string, e: Event): void {
    if (this.cityPoints[cityName].alertArea) {
      this.workingAlertArea = this.cityPoints[cityName].alertArea;
      this.alertRangeEl.value = this.cityPoints[cityName].alertArea.alertRadius;
      this.map.fitBounds(this.workingAlertArea.circle.getBounds());
      this.cRef.detectChanges();
    }
    else {
      this.updateWorkingAlert(cityName, this.maxAlertRange / 2);
      this.alertRangeEl.value = this.maxAlertRange / 2;
    }
  }

  private alertRangeChange(e) {
    this.updateWorkingAlert(this.workingAlertArea.city, e.target.value);
  }

  private updateWorkingAlert(cityName, radiusMiles) {
    let radiusMeters = radiusMiles * 1609.34;

    if (!this.workingAlertArea || cityName !== this.workingAlertArea.city) {
      if (this.workingAlertArea && !this.cityPoints[this.workingAlertArea.city].alertArea) {
        this.workingAlertArea.circle.remove();
      }
      let latLng = new L.LatLng(MSCityNames[cityName][0], MSCityNames[cityName][1]); 
      this.workingAlertArea = {
        city: cityName,
        latlng: latLng,
        alertRadius: radiusMiles,
        circle: L.circle(latLng, {
          radius: radiusMeters
        }).addTo(this.map)
      }
      this.workingAlertArea.circle.on('click', this.cityOnClickHandler.bind(this, cityName));
    }
    else {
      this.workingAlertArea.alertRadius = radiusMiles;
      this.workingAlertArea.circle.setRadius(radiusMeters);
    }

    this.map.fitBounds(this.workingAlertArea.circle.getBounds());
    this.cRef.detectChanges();
  }

  private cancelAlertArea() {
    if (!this.cityPoints[this.workingAlertArea.city].alertArea) {
      this.workingAlertArea.circle.remove();
    }
    this.workingAlertArea = null;
  }

  private saveAlertArea() {
    this.cityPoints[this.workingAlertArea.city].alertArea = this.workingAlertArea;
    let polygon = L.PM.Utils.circleToPolygon(this.workingAlertArea.circle);
    this.cityPoints[this.workingAlertArea.city].alertArea.polygon = polygon;
    this.workingAlertArea = null;
  }

  private deleteAlertArea() {
    this.cityPoints[this.workingAlertArea.city].alertArea.circle.remove();
    this.cityPoints[this.workingAlertArea.city].alertArea = null;
    this.cityPoints[this.workingAlertArea.city].weatherAlerts = null;
    this.updateMapWeatherAlerts();
    this.workingAlertArea = null;
  }
}

interface CityPoint {
  marker: L.Marker,
  alertArea?: AlertArea // populated when alert area is saved
  weatherAlerts?: number[]
}

interface AlertArea {
  city: string,
  latlng: L.LatLng,
  alertRadius: number, // miles
  circle: L.Circle,
  polygon?: object // created when saved
}

const LMapOptions: L.MapOptions = {
  layers: [
    L.tileLayer(
      'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        attribution: 'Map data © OpenStreetMap contributors'
      }
    )
  ],
  zoom: 18
};

const MSCityNames: { [key: string]: number[] } = {
  'Gulfport': [30.3674, -89.0928],
  'Wiggins': [30.8582, -89.1353],
  'Hattiesburg': [31.3271, -89.2903],
  'Laurel': [31.6941, -89.1306],
  'McComb': [31.2438, -90.4532],
  'Natchez': [31.5604, -91.4032],
  'Brookhaven': [31.5791, -90.4407],
  'Magee': [31.8738, -89.7337],
  'Port Gibson': [31.9608, -90.9817],
  'Vicksburg': [32.3526, -90.8779],
  'Jackson': [32.2988, -90.1848],
  'Canton': [32.6126, -90.0368],
  'Forest': [32.3646, -89.4742],
  'Meridian': [32.3643, -88.7037],
  'Waynesboro': [31.6749, -88.6461],
  'Philadelphia': [32.7715, -89.1167],
  'Louisville': [33.1237, -89.0551],
  'Kosciusko': [33.1237, -89.0551],
  'Yazoo City': [32.8551, -90.4056],
  'Rolling Fork': [32.9065, -90.8782],
  'Greenville': [33.3997, -91.0377],
  'Indianola': [33.4510, -90.6551],
  'Greenwood': [33.5162, -90.1795],
  'Winona': [33.4821, -89.7281],
  'Starkville': [33.4504, -88.8184],
  'Durant': [33.0751, -89.8545],
  'Senatobia': [34.6176, -89.9687],
  'Southaven': [34.9919, -90.0023],
  'Columbus': [33.4957, -88.4273],
  'Amory': [33.9843, -88.4881],
  'Houston': [33.8984, -88.9992],
  'Grenada': [33.7690, -89.8084],
  'Cleveland': [33.7440, -90.7248],
  'Oxford': [34.3668, -89.5186],
  'Pontotoc': [34.2479, -88.9987],
  'Tupelo': [34.2576, -88.7034],
  'Booneville': [34.6582, -88.5667],
  'New Albany': [34.4943, -89.0078],
  'Corinth': [34.9343, -88.5223],
  'Iuka': [34.8118, -88.1900]
}

const WeatherServiceUrl = 'https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/watch_warn_adv/MapServer/1';