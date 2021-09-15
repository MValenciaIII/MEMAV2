import { Component, OnInit, OnDestroy, NgZone, SimpleChange, SimpleChanges, Input } from '@angular/core';
// import * as Leaflet from 'leaflet';
import { HttpClient } from "@angular/common/http";
import * as L from "leaflet";
import {latLng, MapOptions, tileLayer, Map, Marker, icon} from 'leaflet';
  import intersect from '@turf/intersect';
  import circle from '@turf/circle';
  import booleanIntersects from '@turf/boolean-intersects';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
//I NEED TO GET RADIUS TO SHOW
//NEED TO Get current location to set view in leaflet in angular
//I have current location how do i send it as a variable outside ngOnInit or alternative
//update noaa warnings if bad weather near by.
//also fix puzzle pieced map on load
export class Tab3Page {
  rangeId: any;
  map: Map;
  mapOptions: MapOptions;
  latitudeOne: any;
  longitudeOne: any;
  geoRadiusLine: any;
  geoJSONCircle: any;
  polygons: any;
  turfcircle: any;
  
 
  constructor(private http: HttpClient ) {
    var Functionone;
    
  }



//  map = L.map('map').setView(L.latLng(32.302898, -90.183487), 11);
//  group = L.layerGroup().addTo(this.map);



  ngOnInit(){

    this.getLocationService() 
    this.initializeMapOptions()

  }   
    
    ngOnChange(changes: SimpleChanges){
    }


    getLocationService():Promise<any>{
      return new Promise((resolve, reject)=>{
        navigator.geolocation.getCurrentPosition(resp=>{
          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude})
          this.latitudeOne = resp.coords.latitude
          this.longitudeOne = resp.coords.longitude
        })
  
      })
    }
  //MAYBE START STORING VALUES OF RESP.LAT/LNG AND USE FOR CHECKING LAYER THEN REMOVEING IN ONMAPREADY
  
    
    onMapReady(map: Map) {
      this.map = map;
      this.getLocationService().then(resp=> {
        this.map.setView(L.latLng(resp.lat, resp.lng), 18)
      })
      this.geoRadius(this.rangeId)
      this.getAlerts();
    }


//MISSISSIPPI AREA
    private initializeMapOptions() {

      this.mapOptions = {
        layers: [
          tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            {
              maxZoom: 18,
              attribution: 'Map data © OpenStreetMap contributors'
            })
        ],
        zoom: 18,
        //center: latLng(this.longitude, this.latitude),
        
      };

    }

//UPDATING A MAP RADIUS USING BUTTONS IN ANGULAR
//ANGULAR BUTTON 

    geoRadius(value) {
      //BUTTON RADIUS: REMOVE PREVIOUS LAYER WHEN NEW BUTTON IS PRESSED
      //SLIDER RADIUS: LEARN HOW TO UPDATE A RADIUS IMMEDIATELY WHEN RADIUS SLIDER IS MOVED
      //ALSO HOW TO SAVE RADIUS VALUE.
      this.getLocationService().then(resp=>{
      
        this.rangeId = value
        let milesRadius = this.rangeId / 1609;
        
        
        if(this.rangeId === undefined) {

        this.geoRadiusLine = L.circle([resp.lat, resp.lng], { radius: 200}).addTo(this.map);
        } 
          else if (this.rangeId > 0) {
            
            this.geoRadiusLine.setRadius(this.rangeId)
            this.geoJSONCircle = this.geoRadiusLine.toGeoJSON()
            this.turfcircle = this.geoJSONCircle
            console.log(this.turfcircle)
          }
      })
    }






    private addSampleMarker() {
      this.getLocationService().then(resp=> {
        const marker = new Marker([resp.lat, resp.lng])
        .setIcon( 
          icon({
            iconSize: [25, 41],
            iconAnchor: [13, 41],
            iconUrl: 'assets/marker-icon.png'
          }));
      marker.addTo(this.map);
      })
      
    }
    
    json;


//WEATHER POLOYON 
    private async getAlerts() {
      let poly;
      let turfCircle;
        let response = this.http.get("https://api.weather.gov/alerts/active?area=MS").subscribe((json: any) => {
          console.log(json);
          this.json = json;
          for (let i = 0; i < this.json.features.length; i++) {
            const element = this.json.features[i];
            console.log(element)
            
            poly = element.map(x => element.geometry.coordinates)
            poly = this.polygons;
            console.log(this.polygons)
            //I NEED TO PARSE THE POLYGONS IN THE RESPONSE INTO POSITIOSN, PATHOPTIONS, KEY
            //
            
            var pressOne = L.geoJSON(element).addTo(this.map);
            pressOne.bindPopup(`<p>County Affected: ${element.properties.areaDesc}</p>
            <p>Event: ${element.properties.event}</p>
            `)
          }
          
        });
      }
  }

