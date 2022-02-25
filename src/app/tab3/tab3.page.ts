import { Component, ChangeDetectorRef, OnInit, OnDestroy, NgZone, SimpleChange, SimpleChanges, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Platform } from '@ionic/angular';
// import * as Leaflet from 'leaflet';
import * as L from "leaflet";
import * as esri from "esri-leaflet";
import * as Geocoding from "esri-leaflet-geocoder";
import '@geoman-io/leaflet-geoman-free';
import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon.png';
import 'proj4leaflet';
import { Alert, Capabilities } from 'selenium-webdriver';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { BackgroundMode } from '@ionic-native/background-mode';
import { Storage } from '@ionic/storage-angular';
import { Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page implements AfterViewInit {
  weatherAlertSettings = {};
  showInstructions = true;
  map: L.Map;
  mapOptions: L.MapOptions = LMapOptions;
  userLocationMarker: L.Marker = null;
  _workingDetectionArea: L.Circle = null;
  _originalRadius: number = null;
  detectionAreas: {[key: number]: DetectionArea} = {};
  detectionAreasLayer: L.FeatureGroup = new L.FeatureGroup();
  NWSFL: esri.FeatureLayer = new esri.FeatureLayer({ url: WeatherServiceUrl });
  NWSRadarFL: esri.ImageMapLayer = new esri.ImageMapLayer({ url: WeatherServiceRadar });
  // Static data
  maxDetectionRange = 643738; // meters ~= 400 Miles
  notificationTimeout = 60000; // miliseconds
  // UI elements
  @ViewChild('detectionRange') detectionRangeEl;
  // Subscribe to router nav events
  subscription: Subscription;
  // API Key for leaflet geocoder, needs to be refreshed
  geocoderAPIToken: string = 'test';


  constructor(
    private cRef: ChangeDetectorRef,
    private router: Router,
    public storage: Storage,
    public platform: Platform,
    private httpClient: HttpClient
  ) {}


  async ngOnInit() {
    await this.storage.create();
    // Settings
    let storedSettings = await this.storage.get('weatherAlertSettings') || {};
    this.weatherAlertSettings = defaultWeatherAlertSettings;
    Object.keys(this.weatherAlertSettings).forEach(key => {
      if (storedSettings[key] !== undefined) {
        this.weatherAlertSettings[key] = storedSettings[key];
      }
    });
    await this.storage.set('weatherAlertSettings', this.weatherAlertSettings);
    this.NWSRadarFL.setOpacity(this.weatherAlertSettings['radarOpacity']);

    // Coming back from the settings page doesn't trigger any lifecycle methods
    // so we are subscribing to a router event
    this.subscription = this.router.events.subscribe(async (event) => {
      if (event instanceof NavigationEnd && event.url === '/tabs/tab3') {
        this.weatherAlertSettings = await this.storage.get('weatherAlertSettings');
        this.checkForWeatherAlerts();
        this.NWSRadarFL.setOpacity(this.weatherAlertSettings['radarOpacity']);
      }
    });
  }   

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit(): void {}

  get workingDetectionArea() { return this._workingDetectionArea; }

  set workingDetectionArea(area: L.Circle) {
    this._workingDetectionArea = area;
    if (this._workingDetectionArea) {
      this._workingDetectionArea.addTo(this.map);
      this._workingDetectionArea.on('click', this.detectionClickHandler.bind(this));
      this.detectionRangeEl.value = this._workingDetectionArea.getRadius();
      this.map.setMaxBounds(null);
      this.map.fitBounds(this._workingDetectionArea.getBounds());
    } else {
      this.map.setMaxBounds(DefaultMaxBounds);
    }
    this.cRef.detectChanges();
  }


  async onMapReady(map: L.Map) {
    this.map = map;
    this.NWSRadarFL.addTo(this.map);
    this.NWSFL.addTo(this.map);
    this.NWSFL.setWhere('0=1');
    this.NWSFL.setStyle(this.weatherEventFeatureFormat);
    this.NWSFL.bindPopup(WeatherAlertPopup);
    this.detectionAreasLayer.addTo(this.map);
    // Center map on user's location and start recurring update
    await this.updateUserLocationOnMap();
    this.map.setView(this.userLocationMarker.getLatLng(), 8);
    setInterval(this.updateUserLocationOnMap.bind(this), 10000);
    // Load any previously saved alert areas from disk
    await this.loadDetectionAreasFromStorage();
    // Zoom to fit any saved alert areas
    if (this.detectionAreasLayer.getBounds().isValid()) {
      this.map.fitBounds(this.detectionAreasLayer.getBounds());
    }
    // Immediately check for weather alerts
    this.checkForWeatherAlerts(this.notify.bind(this));
    // Start periodic weather check
    setInterval(this.checkForWeatherAlerts.bind(this, this.notify.bind(this)), 10000);
    // Bind map click handler
    this.map.on('click', this.mapClickHandler.bind(this));
    // Geocoding
    await this.refreshAPIKey(); // get initial api key
    setInterval(this.refreshAPIKey.bind(this), 60000); // refresh periodically
    var searchControl = Geocoding.geosearch({
      position: 'topright',
      placeholder: 'City, Address, County, Zip...',
      useMapBounds: false,
      providers: [Geocoding.arcgisOnlineProvider({
        apikey: this.geocoderAPIToken,
        nearby: {
          lat: 32.2988,
          lng: -90.1848
        }
      })]
    }).addTo(this.map);

    searchControl.on('results', (data => {
      console.log('data', data);
    }));
  }

  async refreshAPIKey(): Promise<null> {
    return new Promise((resolve, reject) => {
      let resp = this.httpClient.get(GeocodingTokenGenURL);
      resp.subscribe(data => {
        this.geocoderAPIToken = data['access_token'];
        resolve(null);
      });
    });
  }

  /**
   * Returns a promise that resolves with the user's current lat, long
   */
  async getLocationService(): Promise<L.LatLng> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve(new L.LatLng(resp.coords.latitude, resp.coords.longitude))
      });
    });
  }

  /**
   * 
   */
  async updateUserLocationOnMap() {
    let loc = await this.getLocationService();
    if (this.userLocationMarker) {
      this.userLocationMarker.setLatLng(loc);
    } else {
      this.userLocationMarker = L.marker(loc, {
        icon: new L.Icon({
          iconUrl: 'assets/tab3/user_location.png',
          iconSize: [25, 25]
        })
      }).addTo(this.map);
    }
  }


  mapClickHandler(evt) {
    if (this.workingDetectionArea) return;
    if (!DetectionAreaCenterMaxBounds.contains(evt.latlng)) return;
    this.workingDetectionArea = L.circle(evt.latlng, {
      radius: this.maxDetectionRange / 2,
      opacity: DetectionAreaOpacity,
      weight: DetectionAreaWeight
    });
    // this.cRef.detectChanges();
  }

  startDetectionAreaAtUsersLocation() {
    this.workingDetectionArea = L.circle(this.userLocationMarker.getLatLng(), {
      radius: this.maxDetectionRange / 2,
      opacity: DetectionAreaOpacity,
      weight: DetectionAreaWeight
    });
  }

  detectionClickHandler(evt) {
    if (this.workingDetectionArea) return;
    let layerId = this.detectionAreasLayer.getLayerId(evt.target);
    this._originalRadius = this.detectionAreas[layerId].circle.getRadius();
    this.workingDetectionArea = this.detectionAreas[layerId].circle;
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
    let allWeatherEventIds = [];
    Object.values(this.detectionAreas).forEach((area: DetectionArea) => {
      NWSQueries.push(new Promise((resolve, reject) => {
        let polygon = L.PM.Utils.circleToPolygon(area.circle);
        this.NWSFL.query().intersects(polygon).fields(['*']).returnGeometry(false).run((error, results) => {
          if (error) {
            console.log('Error with query: ' + error);
          } else if (results) {
            let enabledWeatherEvents = results.features.filter(event => {
              return this.weatherAlertSettings[event.properties.prod_type] || this.weatherAlertSettings['all'];
            });
            area.activeWeatherEvents = enabledWeatherEvents;
            let objectIds = enabledWeatherEvents.map(event => event.properties.objectid);
            allWeatherEventIds = [...new Set([...allWeatherEventIds, ...objectIds])];
          } else {
            area.activeWeatherEvents = [];
            area.lastNotificationEvents = [];
          }
          resolve(null);
        });
      }));
    });
    await Promise.all(NWSQueries);
    if (allWeatherEventIds.length > 0) {
      this.NWSFL.setWhere('OBJECTID in (' + allWeatherEventIds.join(',') + ')');
    } else {
      this.NWSFL.setWhere('0=1');
    }
    if (done) done();
  }


  private notify() {
    // Object.values(this.detectionAreas).forEach(async (area: DetectionArea) => {
    //   if (area.activeWeatherEvents && area.activeWeatherEvents.length > 0) {
    //     let lastNotification = new Date().getTime() - area.lastNotificationDate?.getTime();
    //     // if (!area.lastNotificationDate || lastNotification > this.notificationTimeout) {
    //     if (!area.lastNotificationDate) {
    //       area.lastNotificationEvents = [];
    //     }
    //     let unnotifiedEvents = area.activeWeatherEvents.filter(event => {
    //       return (!area.lastNotificationEvents.includes(event.properties.objectid));
    //     });
    //     let unnotifiedEventIds = unnotifiedEvents.map(event => event.properties.objectid);
    //     let isWarning = false;
    //     let isTornado = false;
    //     area.activeWeatherEvents?.forEach(event => {
    //       if (event.properties.sig === 'W') isWarning = true;
    //       if (event.properties.sig === 'W' && event.properties.phenom == 'TO') {
    //         isTornado = true;
    //       }
    //     });
    //     if (unnotifiedEvents.length > 0) {
    //       let sound = 'assets/weatherAlertSounds/watch';
    //       if (isWarning) sound = 'assets/weatherAlertSounds/warning';
    //       if (isTornado) sound = 'assets/weatherAlertSounds/tornadowarning';
    //       if (this.platform.is('android')) {sound += '.wav'} else {sound += '.caf'}

    //       let aud = new Audio();
    //       aud.src = sound;
    //       await aud.load();
    //       aud.play();

    //       LocalNotifications.schedule({
    //         title: 'MEMA Severe Weather Alert!',
    //         text: `There are severe weather events in your detection area(s)!`,
    //         foreground: true
    //       });
    //       area.lastNotificationDate = new Date();
    //       area.lastNotificationEvents = area.lastNotificationEvents.concat(unnotifiedEventIds);
    //       area.lastNotificationEvents = [...new Set([...area.lastNotificationEvents, ...unnotifiedEventIds])];
    //     }
    //   }
    // });
  }


  private weatherEventFeatureFormat(feature) {
    return {
      color: WeatherEventTypeColors[feature.properties.prod_type] || 'gray',
      weight: 1
    }
  }

  /**
   * Handles changes to alert radius slider.
   * @param {Event} e slider input change event
   */
  private detectionRangeChange(e) {
    this.workingDetectionArea.setRadius(e.target.value);
    this.map.fitBounds(this.workingDetectionArea.getBounds());
  }


  /**
   * Retrieve any saved alert areas from previous sessions and set state
   */
  private async loadDetectionAreasFromStorage() {
    let data = await this.storage.get('detectionData');
    if (data) {
      data.forEach(circleProps => {
        let circle = L.circle(circleProps.latLng, {
          radius: circleProps.radius,
          opacity: DetectionAreaOpacity,
          weight: DetectionAreaWeight
        })
        .addTo(this.detectionAreasLayer)
        .on('click', this.detectionClickHandler.bind(this));
        let newId = this.detectionAreasLayer.getLayerId(circle);
        this.detectionAreas[newId] = {circle: circle};
      });
    }
  }


  /**
   * Save alert areas to disk
   * @returns {Promise}
   */
  private async saveDetectionAreasToStorage() {
    let data = Object.values(this.detectionAreas).map((area: DetectionArea) => {
      return {
        latLng: area.circle.getLatLng(),
        radius: area.circle.getRadius()
      };
    });
    return this.storage.set('detectionData', data);
  }


  /**
   * Handles cancelling of edits to or creation of an alert area.
   */
  private cancelDetectionArea() {
    let id = this.detectionAreasLayer.getLayerId(this.workingDetectionArea);
    if (!this.detectionAreas[id]) {
      this.workingDetectionArea.remove();
    }
    this.workingDetectionArea = null;
    this.detectionAreas[id]?.circle.setRadius(this._originalRadius);
    if (this.detectionAreasLayer.getLayers().length > 0) {
      this.map.fitBounds(this.detectionAreasLayer.getBounds());
    }
  }


  /**
   * Save working alert area to its corresponding city and immediately checks
   * for weather alerts. Save to disk and turn on background mode
   */
  private async saveDetectionArea() {
    this.workingDetectionArea.addTo(this.detectionAreasLayer);
    let id = this.detectionAreasLayer.getLayerId(this.workingDetectionArea);
    this.detectionAreas[id] = {
      circle: this.workingDetectionArea,
      activeWeatherEvents: this.detectionAreas[id]?.activeWeatherEvents,
      lastNotificationDate: this.detectionAreas[id]?.lastNotificationDate,
      lastNotificationEvents: []
    };
    this.workingDetectionArea = null;
    this.checkForWeatherAlerts(this.notify.bind(this));
    await this.saveDetectionAreasToStorage();
    this.setBackgroundMode(true);
  }


  /**
   * Handles deletion of an alert area.
   */
  private async deleteDetectionArea() {
    let id = this.detectionAreasLayer.getLayerId(this.workingDetectionArea);
    this.detectionAreasLayer.removeLayer(id);
    delete this.detectionAreas[id];
    this.workingDetectionArea.remove();
    this.workingDetectionArea = null;
    this.checkForWeatherAlerts(this.notify.bind(this));
    await this.saveDetectionAreasToStorage();
  }
}

// Types
interface DetectionArea {
  circle: L.Circle,
  activeWeatherEvents?: any[],
  lastNotificationDate?: Date
  lastNotificationEvents?: number[]
}

// Constants
const DetectionAreaOpacity = 0.7;
const DetectionAreaWeight = 1;
const DefaultMaxBounds = new L.LatLngBounds([ [37, -92], [27, -87] ]);
const DetectionAreaCenterMaxBounds = new L.LatLngBounds([ [35, -91.655], [30.173943, -88.097888] ]);
const WeatherServiceUrl = 'https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/watch_warn_adv/MapServer/1';
const WeatherServiceRadar = 'https://idpgis.ncep.noaa.gov/arcgis/rest/services/radar/radar_base_reflectivity_time/ImageServer';
const GeocodingAppId: string = 'D2yZZl1X9RcNEUSe';
const GeocodingAppSecret: string = '76ecfaa3f366457d9a049d3a19dbb6f8';
const GeocodingTokenGenURL: string = `https://www.arcgis.com/sharing/oauth2/token?client_id=${GeocodingAppId}&grant_type=client_credentials&client_secret=${GeocodingAppSecret}&expiration=20000&f=pjson`

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
  maxBounds: DefaultMaxBounds,
  zoom: 6,
  minZoom: 5
};

const WeatherAlertPopup = function(layer) {
  let formattedProps = {
    prod_type: layer.feature.properties.prod_type,
    start: new Date(layer.feature.properties.issuance).toLocaleString(),
    end: new Date(layer.feature.properties.expiration).toLocaleString(),
    url: layer.feature.properties.url
  };
  return L.Util.template(
    `<table>
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

const defaultWeatherAlertSettings = {
  "radarOpacity": 0.5,
  "Hurricane Warning": true,
  "Hurricane Watch": true,
  "Tornado Warning": true,
  "Tornado Watch": true,
  "Tropical Storm Warning": true,
  "Tropical Storm Watch": true,
  "Flash Flood Watch": true,
  "Flash Flood Warning": true,
  "Severe Thunderstorm Watch": true,
  "Severe Thunderstorm Warning": true,
  "all": false
}

const WeatherEventTypeColors = {
  "Tsunami Warning": "#FD6347",
  "Tornado Warning": "#FF0000",
  "Extreme Wind Warning": "#FF8C00",
  "Severe Thunderstorm Warning": "#FFA500",
  "Flash Flood Warning": "#8B0000",
  "Flash Flood Statement": "#8B0000",
  "Severe Weather Statement": "#00FFFF",
  "Shelter In Place Warning": "#FA8072",
  "Evacuation Immediate": "#7FFF00",
  "Civil Danger Warning": "#FFB6C1",
  "Nuclear Power Plant Warning": "#4B0082",
  "Radiological Hazard Warning": "#4B0082",
  "Hazardous Materials Warning": "#4B0082",
  "Fire Warning": "#A0522D",
  "Civil Emergency Message": "#FFB6C1",
  "Law Enforcement Warning": "#C0C0C0",
  "Storm Surge Warning": "#B524F7",
  "Hurricane Force Wind Warning": "#CD5C5C",
  "Hurricane Warning": "#DC143C",
  "Typhoon Warning": "#DC143C",
  "Special Marine Warning": "#FFA500",
  "Blizzard Warning": "#FF4500",
  "Snow Squall Warning": "#C71585",
  "Ice Storm Warning": "#8B008B",
  "Winter Storm Warning": "#FF69B4",
  "High Wind Warning": "#DAA520",
  "Tropical Storm Warning": "#B22222",
  "Storm Warning": "#9400D3",
  "Tsunami Advisory": "#D2691E",
  "Tsunami Watch": "#FF00FF",
  "Avalanche Warning": "#1E90FF",
  "Earthquake Warning": "#8B4513",
  "Volcano Warning": "#2F4F4F",
  "Ashfall Warning": "#A9A9A9",
  "Coastal Flood Warning": "#228B22",
  "Lakeshore Flood Warning": "#228B22",
  "Flood Warning": "#00FF00",
  "High Surf Warning": "#228B22",
  "Dust Storm Warning": "#FFE4C4",
  "Blowing Dust Warning": "#FFE4C4",
  "Lake Effect Snow Warning": "#008B8B",
  "Excessive Heat Warning": "#C71585",
  "Tornado Watch": "#FFFF00",
  "Severe Thunderstorm Watch": "#DB7093",
  "Flash Flood Watch": "#2E8B57",
  "Gale Warning": "#DDA0DD",
  "Flood Statement": "#00FF00",
  "Wind Chill Warning": "#B0C4DE",
  "Extreme Cold Warning": "#0000FF",
  "Hard Freeze Warning": "#9400D3",
  "Freeze Warning": "#483D8B",
  "Red Flag Warning": "#FF1493",
  "Storm Surge Watch": "#DB7FF7",
  "Hurricane Watch": "#FF00FF",
  "Hurricane Force Wind Watch": "#9932CC",
  "Typhoon Watch": "#FF00FF",
  "Tropical Storm Watch": "#F08080",
  "Storm Watch": "#FFE4B5",
  "Hurricane Local Statement": "#FFE4B5",
  "Typhoon Local Statement": "#FFE4B5",
  "Tropical Storm Local Statement": "#FFE4B5",
  "Tropical Depression Local Statement": "#FFE4B5",
  "Avalanche Advisory": "#CD853F",
  "Winter Weather Advisory": "#7B68EE",
  "Wind Chill Advisory": "#AFEEEE",
  "Heat Advisory": "#FF7F50",
  "Urban and Small Stream Flood Advisory": "#00FF7F",
  "Small Stream Flood Advisory": "#00FF7F",
  "Arroyo and Small Stream Flood Advisory": "#00FF7F",
  "Flood Advisory": "#00FF7F",
  "Hydrologic Advisory": "#00FF7F",
  "Lakeshore Flood Advisory": "#7CFC00",
  "Coastal Flood Advisory": "#7CFC00",
  "High Surf Advisory": "#BA55D3",
  "Heavy Freezing Spray Warning": "#00BFFF",
  "Dense Fog Advisory": "#708090",
  "Dense Smoke Advisory": "#F0E68C",
  "Small Craft Advisory For Hazardous Seas": "#D8BFD8",
  "Small Craft Advisory for Rough Bar": "#D8BFD8",
  "Small Craft Advisory for Winds": "#D8BFD8",
  "Small Craft Advisory": "#D8BFD8",
  "Brisk Wind Advisory": "#D8BFD8",
  "Hazardous Seas Warning": "#D8BFD8",
  "Dust Advisory": "#BDB76B",
  "Blowing Dust Advisory": "#BDB76B",
  "Lake Wind Advisory": "#D2B48C",
  "Wind Advisory": "#D2B48C",
  "Frost Advisory": "#6495ED",
  "Ashfall Advisory": "#696969",
  "Freezing Fog Advisory": "#8080",
  "Freezing Spray Advisory": "#00BFFF",
  "Low Water Advisory": "#A52A2A",
  "Local Area Emergency": "#C0C0C0",
  "Avalanche Watch": "#F4A460",
  "Blizzard Watch": "#ADFF2F",
  "Rip Current Statement": "#40E0D0",
  "Beach Hazards Statement": "#40E0D0",
  "Gale Watch": "#FFC0CB",
  "Winter Storm Watch": "#4682B4",
  "Hazardous Seas Watch": "#483D8B",
  "Heavy Freezing Spray Watch": "#BC8F8F",
  "Coastal Flood Watch": "#66CDAA",
  "Lakeshore Flood Watch": "#66CDAA",
  "Flood Watch": "#2E8B57",
  "High Wind Watch": "#B8860B",
  "Excessive Heat Watch": "#800000",
  "Extreme Cold Watch": "#0000FF",
  "Wind Chill Watch": "#5F9EA0",
  "Lake Effect Snow Watch": "#87CEFA",
  "Hard Freeze Watch": "#41690",
  "Freeze Watch": "#00FFFF",
  "Fire Weather Watch": "#FFDEAD",
  "Extreme Fire Danger": "#E9967A",
  "911 Telephone Outage": "#C0C0C0",
  "Coastal Flood Statement": "#6B8E23",
  "Lakeshore Flood Statement": "#6B8E23",
  "Special Weather Statement": "#FFE4B5",
  "Marine Weather Statement": "#FFDAB9",
  "Air Quality Alert": "#808080",
  "Air Stagnation Advisory": "#808080",
  "Hazardous Weather Outlook": "#EEE8AA",
  "Hydrologic Outlook": "#90EE90",
  "Short Term Forecast": "#98FB98",
  "Administrative Message": "#C0C0C0",
  "Test": "#F0FFFF",
  "Child Abduction Emergency": "#FFFFFF",
  "Blue Alert": "#FFFFFF"
}