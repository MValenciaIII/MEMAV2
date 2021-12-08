import { Component, ChangeDetectorRef, OnInit, OnDestroy, NgZone, SimpleChange, SimpleChanges, Input, ViewChild, AfterViewInit } from '@angular/core';
// import * as Leaflet from 'leaflet';
import * as L from "leaflet";
import * as esri from "esri-leaflet";
import '@geoman-io/leaflet-geoman-free';
import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon.png';
import 'proj4leaflet';
import { Alert, Capabilities } from 'selenium-webdriver';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { BackgroundMode } from '@ionic-native/background-mode';
import { Storage } from '@ionic/storage-angular';

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


  constructor(private cRef: ChangeDetectorRef, public storage: Storage) {}


  async ngOnInit() {
    await this.storage.create();
  }   


  ngAfterViewInit() {}


  async onMapReady(map: L.Map) {
    this.map = map;
    this.NWSFL.addTo(this.map);
    this.NWSFL.setWhere('0=1');
    this.NWSFL.setStyle({ color: 'red', weight: 1 });
    this.NWSFL.bindPopup(WeatherAlertPopup);
    this.getLocationService().then(resp => {
      this.map.setView(L.latLng(resp.lat, resp.lng), 8)
    });
    this.setCityPoints();
    // Load any previously saved alert areas from disk
    await this.loadAlertAreasFromStorage();
    // Immediately check for weather alerts
    this.checkForWeatherAlerts(this.updateMapWeatherAlerts);
    // Start periodic weather check
    setInterval(this.checkForWeatherAlerts.bind(this, this.updateMapWeatherAlerts.bind(this)), 10000);
  }


  /**
   * Returns a promise that resolves with the user's current lat, long
   */
  getLocationService(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve({lng: resp.coords.longitude, lat: resp.coords.latitude})
      })
    })
  }


  /** */
  setBackgroundMode(on=false) {
    if (on && !BackgroundMode.isActive()) BackgroundMode.enable();
    if (!on && BackgroundMode.isActive()) BackgroundMode.disable();
  }


  /**
   * Queries NWS FeatureLayer for alert geometries that intersect each user
   * defined alert detection area and populates each city point with their OBJECTIDs.
   * @param {function?} done function to run when done
   * @returns void
   */
  private async checkForWeatherAlerts(done=null) {
    let NWSQueries: Promise<null>[] = [];
    this.citiesWithAlertAreas().forEach(city => {
      NWSQueries.push(new Promise((resolve, reject) => {
        this.NWSFL.query().intersects(city.alertArea.polygon).fields(['*']).run((error, resp) => {
          if (error) {
            console.log('Error with query: ' + error);
          } else if (resp) {
            city.weatherAlerts = (resp.features.length > 0)? resp.features : null;
          }
          resolve(null);
        });
      }));
    });
    Promise.all(NWSQueries).then(done?.bind(this));
  }


  /**
   * Displays weather alerts on map.
   * Updates where clause of NWS FeatureLayer to OBJECTIDs of all unique weather
   * alerts intersecting user defined detection areas.
   * @returns void
   */
  private updateMapWeatherAlerts() {
    let citiesWithAlerts = this.citiesWithActiveWeatherAlerts();
    if (citiesWithAlerts.length == 0) { this.NWSFL.setWhere('0=1'); return; }
    let alertEventIds = [];      // a unique id for each weather event (to reduce the number of 'weather events' when notifying the user)
    let alertAreaObjectIds = []; // ObjectIds of all alert polygons
    citiesWithAlerts.forEach(city => {
      let weatherEventObjectIds = city.weatherAlerts.map(w => w.properties.objectid);
      let weatherEventIds = city.weatherAlerts.map(w => w.properties.event);
      let alerts = [...alertAreaObjectIds, ...weatherEventObjectIds];
      let events = [...alertEventIds, ...weatherEventIds];
      alertAreaObjectIds = [... new Set(alerts)]; // only unique ids
      alertEventIds = [... new Set(events)];
    });
    this.NWSFL.setWhere('OBJECTID in (' + alertAreaObjectIds.join(',') + ')');
    if (alertEventIds.length > 0) {
      LocalNotifications.schedule({
        title: 'MEMA Severe Weather Alert!',
        text: `You have ${alertEventIds.length} severe weather events!`,
        foreground: true
      });
    }
  }


  /**
   * Place selectable city markers on the map.
   */
  private setCityPoints() {
    Object.entries(MSCityNames).forEach(city => {
      let [cityName, cityLatLng] = city;
      let cityIcon = new L.Icon({
        iconUrl: 'marker-icon.png',
        iconSize: [18, 30],
        iconAnchor: [10, 30]
      });
      let popup = L.popup({ offset: [0, -20] }).setContent(cityName);
      this.cityPoints[cityName] = {
        marker: L.marker([cityLatLng[0], cityLatLng[1]], {
                  title: cityName,
                  icon: cityIcon
                }).addTo(this.map)
                  .bindPopup(popup)
                  .on('click', this.cityOnClickHandler.bind(this, cityName))
      };
    });
  }
  
  
  /**
   * Handle click of city marker on the map or from the list view.
   * @param {string} cityName name of city
   * @param {Event} e click event (not used) 
   * @returns void
   */
  private cityOnClickHandler(cityName: string, e: Event): void {
    if (this.workingAlertArea) return;
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


  /**
   * Handles changes to alert radius slider.
   * @param {Event} e slider input change event
   */
  private alertRangeChange(e) {
    this.updateWorkingAlert(this.workingAlertArea.city, e.target.value);
  }


  /**
   * Updates the alert area that is currently being created/edited.
   * @param {string} cityName name of city
   * @param {number} radiusMiles radius in miles
   */
  private updateWorkingAlert(cityName, radiusMiles) {
    if (!this.workingAlertArea) {
      this.workingAlertArea = this.createAlertArea(cityName, radiusMiles);
    }
    else {
      this.workingAlertArea.alertRadius = radiusMiles;
      this.workingAlertArea.circle.setRadius(radiusMiles * 1609.34);
    }

    this.map.fitBounds(this.workingAlertArea.circle.getBounds());
    this.cRef.detectChanges();
  }


  /**
   * Creates an AlertArea, places it on the map and returns it
   * @param {string} cityName name of city
   * @param {number} radiusMiles radius in miles
   * @returns {AlertArea}
   */
  private createAlertArea(cityName, radiusMiles): AlertArea {
    let radiusMeters = radiusMiles * 1609.34; // convert to meters
    let latLng = new L.LatLng(MSCityNames[cityName][0], MSCityNames[cityName][1]); 
    let circle = L.circle(latLng, {
      radius: radiusMeters,
      opacity: 0.7,
      weight: 2
    })
    circle.addTo(this.map);
    circle.on('click', this.cityOnClickHandler.bind(this, cityName));
    let polygon = L.PM.Utils.circleToPolygon(circle);
    return {
      city: cityName,
      latlng: latLng,
      alertRadius: radiusMiles,
      circle: circle,
      polygon: polygon 
    }
  }


  /**
   * @returns {CityPoint[]} array of CityPoint(s) that have saved alert areas
   */
  private citiesWithAlertAreas() {
    return Object.values(this.cityPoints).filter(point => (point.alertArea));
  }


  /**
   * @returns {CityPoint[]} array of CityPoint(s) that have active weather alerts
   */
  private citiesWithActiveWeatherAlerts() {
    return Object.values(this.cityPoints).filter(city => (city.weatherAlerts));
  }


  private getBoundsOfAllAlertAreas() {
    
  }


  /**
   * Retrieve any saved alert areas from previous sessions and set state
   */
  private async loadAlertAreasFromStorage() {
    let stor = await this.storage.get('alertData');
    if (stor) {
      Object.entries(stor).forEach(([city, radius]) => {
        this.cityPoints[city].alertArea = this.createAlertArea(city, radius);
      });
    }
  }


  /**
   * Save alert areas to disk
   * @returns {Promise}
   */
  private async saveAlertAreasToStorage() {
    let data = {};
    this.citiesWithAlertAreas().forEach(point => {
      data[point.alertArea.city] = point.alertArea.alertRadius;
    });
    return this.storage.set('alertData', data);
  }


  /**
   * Handles cancelling of edits to or creation of an alert area.
   */
  private cancelAlertArea() {
    if (!this.cityPoints[this.workingAlertArea.city].alertArea) {
      this.workingAlertArea.circle.remove();
    }
    this.workingAlertArea = null;
  }


  /**
   * Save working alert area to its corresponding city and immediately checks
   * for weather alerts. Save to disk and turn on background mode
   */
  private async saveAlertArea() {
    this.cityPoints[this.workingAlertArea.city].alertArea = this.workingAlertArea;
    this.checkForWeatherAlerts(this.updateMapWeatherAlerts);
    this.workingAlertArea = null;
    await this.saveAlertAreasToStorage();
    this.setBackgroundMode(true);
  }


  /**
   * Handles deletion of an alert area.
   */
  private deleteAlertArea() {
    this.cityPoints[this.workingAlertArea.city].alertArea.circle.remove();
    this.cityPoints[this.workingAlertArea.city].alertArea = null;
    this.cityPoints[this.workingAlertArea.city].weatherAlerts = null;
    this.checkForWeatherAlerts(this.updateMapWeatherAlerts);
    this.workingAlertArea = null;
  }
}


/**
 * Represents each city point. Stores its map marker, user defined alert area
 * and any weather alert ids in that area.
 */
interface CityPoint {
  marker: L.Marker,
  alertArea?: AlertArea // populated when alert area is saved
  weatherAlerts?: any[]
}


/**
 * Represents a user defined alert area. Stores the name of the city, its 
 * lat/long, radius in miles, circle geometry and geojson polygon
 */
interface AlertArea {
  city: string,
  latlng: L.LatLng,
  alertRadius: number, // miles
  circle: L.Circle, // for displaying on the map
  polygon?: object // created when saved (NWS FeatureLayer cannot be queried with a L.Circle)
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


const WeatherAlertPopup = function(layer) {
  let formattedProps = {
    event: layer.feature.properties.event,
    prod_type: layer.feature.properties.prod_type,
    start: new Date(layer.feature.properties.issuance).toLocaleString(),
    end: new Date(layer.feature.properties.expiration).toLocaleString(),
    url: layer.feature.properties.url
  };
  return L.Util.template(
    `<table>
      <tr>
        <td style="white-space: nowrap;"><b>event: </b></td>
        <td style="text-align: right;">{event}</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;"><b>Alert Type: </b></td>
        <td style="text-align: right;">{prod_type}</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;"><b>Issued: </b></td>
        <td style="text-align: right;">{start}</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;"><b>Expires: </b></td>
        <td style="text-align: right;">{end}</td>
      </tr>
      <tr>
        <td style="white-space: nowrap;"><b>Link: </b></td>
        <td style="text-align: right;"><a href="{url}">View</a></td>
      </tr>
    </table>`,
    formattedProps
  );
}