import { Component, OnInit, OnDestroy } from '@angular/core';
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

  map: Map;
  mapOptions: MapOptions;
  //propertyList = [];
 
  constructor(private http: HttpClient) {}




//  map = L.map('map').setView(L.latLng(32.302898, -90.183487), 11);
//  group = L.layerGroup().addTo(this.map);



 async ngOnInit(){

    
    this.initializeMapOptions()
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.setGeoLocation.bind(this));
        }
        

  
    //this.map = new L.Map('map').setView([latitude, longitude], 16);


    
        
    }      

     setGeoLocation(position: { coords: { latitude: any; longitude: any; } }) {
      const {
        coords: { latitude, longitude },
      } = position;
  
      
    }
  
    
    onMapReady(map: Map) {
      this.map = map;
      this.getAlerts();
    }

//document.getElementById('radius').addEventListener('input', (event) => { this.changeRadius});

// changeRadius(event) {
//   var newRadius = event.target.value;

//   this.group.eachLayer(function(layer) {
//     if (layer instanceof L.Circle) {
//       layer.setRadius(newRadius);
//     }
//   });
  

  
// }
      // circle = L.circle([32.302898, -90.183487], {
      //   radius: 1000,
      // }).addTo(this.group);
      // marker = L.marker([32.302898, -90.183487]).addTo(this.group);

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
        zoom: 12,
        center: latLng(32.302898, -90.183487),
        
      };
    }
    
        json;
       

//WEATHER POLOYON 
    private async getAlerts() {
        let response = this.http.get("https://api.weather.gov/alerts/active?area=MS").subscribe((json: any) => {
          console.log(json);
          this.json = json;
          L.geoJSON(this.json).addTo(this.map);
        });
      }
  }

