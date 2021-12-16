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
  workingDetectionArea: L.Circle = null;
  detectionAreas: {[key: number]: L.Circle} = {};
  detectionAreasLayer: L.FeatureGroup = new L.FeatureGroup();
  NWSFL: esri.FeatureLayer = new esri.FeatureLayer({ url: WeatherServiceUrl });
  eventsNotifiedToUser: number[] = [];
  // Static data
  maxDetectionRange = 643738; // meters ~= 400 Miles
  // UI elements
  @ViewChild('detectionRange') detectionRangeEl;


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
    this.detectionAreasLayer.addTo(this.map);
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
    this.checkForWeatherAlerts();
    // Start periodic weather check
    setInterval(this.checkForWeatherAlerts.bind(this), 10000);
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
    this.workingDetectionArea = L.circle(evt.latlng, {
      radius: this.maxDetectionRange / 2,
      opacity: DetectionAreaOpacity,
      weight: DetectionAreaWeight
    })
    this.detectionRangeEl.value = this.maxDetectionRange / 2;
    this.workingDetectionArea.addTo(this.map);
    this.workingDetectionArea.on('click', this.detectionClickHandler.bind(this));
    this.map.fitBounds(this.workingDetectionArea.getBounds());
    this.cRef.detectChanges();
  }


  detectionClickHandler(evt) {
    if (this.workingDetectionArea) return;
    let layerId = this.detectionAreasLayer.getLayerId(evt.target);
    this.workingDetectionArea = this.detectionAreas[layerId];
    this.detectionRangeEl.value = this.workingDetectionArea.getRadius();
    this.cRef.detectChanges();
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
    Object.values(this.detectionAreas).forEach((circle: L.Circle) => {
      NWSQueries.push(new Promise((resolve, reject) => {
        let polygon = L.PM.Utils.circleToPolygon(circle);
        this.NWSFL.query().intersects(polygon).fields(['*']).ids((error, objectIds) => {
          if (error) {
            console.log('Error with query: ' + error);
          } else if (objectIds) {
            weatherAlertIds = [...new Set([...weatherAlertIds, ...objectIds])];
          }
          resolve(null);
        });
      }));
    });
    await Promise.all(NWSQueries);
    this.NWSFL.setWhere('OBJECTID in (' + weatherAlertIds.join(',') + ')');
    done?.bind(this);
  }


  private notify(alertEventIds) {
    // let unnotifiedEventIds = alertEventIds.filter(id => {
    //   return (!this.eventsNotifiedToUser.includes(id))
    // });
    // if (unnotifiedEventIds.length > 0) {
      LocalNotifications.schedule({
        title: 'MEMA Severe Weather Alert!',
        text: `You have ${alertEventIds.length} severe weather events!`,
        foreground: true
      });
    //   this.eventsNotifiedToUser.push(unnotifiedEventIds);
    // }
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
        this.detectionAreas[newId] = circle;
      });
    }
  }


  /**
   * Save alert areas to disk
   * @returns {Promise}
   */
  private async saveDetectionAreasToStorage() {
    let data = Object.values(this.detectionAreas).map(circle => {
      return {
        latLng: circle.getLatLng(),
        radius: circle.getRadius()
      };
    });
    console.log()
    return this.storage.set('detectionData', data);
  }


  /**
   * Handles cancelling of edits to or creation of an alert area.
   */
  private cancelDetectionArea() {
    let id = this.detectionAreasLayer.getLayerId(this.workingDetectionArea);
    if (!this.detectionAreas[id]) {
      this.workingDetectionArea.remove();
      delete this.detectionAreas[id];
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
    this.detectionAreas[id] = this.workingDetectionArea;
    this.workingDetectionArea = null;
    // this.checkForWeatherAlerts(this.updateMapWeatherAlerts);
    this.checkForWeatherAlerts();
    await this.saveDetectionAreasToStorage();
    this.setBackgroundMode(true);
  }


  /**
   * Handles deletion of an alert area.
   */
  private async deleteDetectionArea() {
    // this.checkForWeatherAlerts(this.updateMapWeatherAlerts);
    this.checkForWeatherAlerts();
    let id = this.detectionAreasLayer.getLayerId(this.workingDetectionArea);
    this.detectionAreasLayer.removeLayer(id);
    delete this.detectionAreas[id];
    this.workingDetectionArea = null;
    await this.saveDetectionAreasToStorage();
  }
}

// Constants
const DetectionAreaOpacity = 0.7;
const DetectionAreaWeight = 2;

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