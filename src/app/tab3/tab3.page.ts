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
  userLocationMarker: L.Marker = null;
  _workingDetectionArea: L.Circle = null;
  detectionAreas: {[key: number]: DetectionArea} = {};
  detectionAreasLayer: L.FeatureGroup = new L.FeatureGroup();
  NWSFL: esri.FeatureLayer = new esri.FeatureLayer({ url: WeatherServiceUrl });
  // Static data
  maxDetectionRange = 643738; // meters ~= 400 Miles
  notificationTimeout = 60000; // miliseconds
  // UI elements
  @ViewChild('detectionRange') detectionRangeEl;


  constructor(private cRef: ChangeDetectorRef, public storage: Storage) {}


  async ngOnInit() {
    await this.storage.create();
  }   


  ngAfterViewInit() {}


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
    this.NWSFL.addTo(this.map);
    this.NWSFL.setWhere('0=1');
    this.NWSFL.setStyle({ color: 'red', weight: 1 });
    this.NWSFL.bindPopup(WeatherAlertPopup);
    this.detectionAreasLayer.addTo(this.map);
    // Take user to their current location
    this.updateUserLocationOnMap().then(_ => {
      this.map.setView(this.userLocationMarker.getLatLng(), 8);
    });
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
      this.userLocationMarker = L.marker(loc).addTo(this.map);
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


  detectionClickHandler(evt) {
    if (this.workingDetectionArea) return;
    let layerId = this.detectionAreasLayer.getLayerId(evt.target);
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
    let weatherAlertIds = [];
    Object.values(this.detectionAreas).forEach((area: DetectionArea) => {
      NWSQueries.push(new Promise((resolve, reject) => {
        let polygon = L.PM.Utils.circleToPolygon(area.circle);
        this.NWSFL.query().intersects(polygon).fields(['*']).ids((error, objectIds) => {
          if (error) {
            console.log('Error with query: ' + error);
          } else if (objectIds) {
            weatherAlertIds = [...new Set([...weatherAlertIds, ...objectIds])];
            area.weatherEvents = weatherAlertIds;
          }
          resolve(null);
        });
      }));
    });
    await Promise.all(NWSQueries);
    this.NWSFL.setWhere('OBJECTID in (' + weatherAlertIds.join(',') + ')');
    if (done) done();
  }


  private notify() {
    Object.values(this.detectionAreas).forEach((area: DetectionArea) => {
      if (area.weatherEvents && area.weatherEvents.length > 0) {
        let lastNotification = new Date().getTime() - area.lastNotify?.getTime();
        if (!area.lastNotify || lastNotification > this.notificationTimeout) {
          LocalNotifications.schedule({
            title: 'MEMA Severe Weather Alert!',
            text: `One of your detection areas has severe weather events!`,
            foreground: true
          });
          area.lastNotify = new Date();
        }
      }
    });
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
  }


  /**
   * Save working alert area to its corresponding city and immediately checks
   * for weather alerts. Save to disk and turn on background mode
   */
  private async saveDetectionArea() {
    this.workingDetectionArea.addTo(this.detectionAreasLayer);
    let id = this.detectionAreasLayer.getLayerId(this.workingDetectionArea);
    this.detectionAreas[id] = {circle: this.workingDetectionArea};
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
    this.workingDetectionArea = null;
    this.checkForWeatherAlerts(this.notify.bind(this));
    await this.saveDetectionAreasToStorage();
  }
}

// Types
interface DetectionArea {
  circle: L.Circle,
  weatherEvents?: number[],
  lastNotify?: Date
}

// Constants
const DetectionAreaOpacity = 0.7;
const DetectionAreaWeight = 2;
const DefaultMaxBounds = new L.LatLngBounds([ [37, -92], [27, -87] ]);
const DetectionAreaCenterMaxBounds = new L.LatLngBounds([ [35, -91.655], [30.173943, -88.097888] ]);

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
  minZoom: 4
};


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