import { Component, OnInit, OnDestroy } from '@angular/core';
// import * as Leaflet from 'leaflet';
import { HttpClient } from "@angular/common/http";
import * as L from "leaflet";
import {
  TileLayer,
  Marker,
  Popup,
  Circle,
  Polygon,
  GeoJSON,} from 'leaflet';
  import intersect from '@turf/intersect';
  import circle from '@turf/circle';
  import booleanIntersects from '@turf/boolean-intersects';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})


export class Tab3Page {
  constructor(private http: HttpClient) {}




 map = L.map('map').setView(L.latLng(32.302898, -90.183487), 11);
 group = L.layerGroup().addTo(this.map);
 
 


 ngOnInit(){


    
if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(this.setGeoLocation.bind(this));
    }
 }
 setGeoLocation(position: { coords: { latitude: any; longitude: any } }) {
  const {
     coords: { latitude, longitude },
  } = position;
 


  
document.getElementById('radius').addEventListener('input', (event) => { this.changeRadius});
 }
changeRadius(event) {
  var newRadius = event.target.value;

  this.group.eachLayer(function(layer) {
    if (layer instanceof L.Circle) {
      layer.setRadius(newRadius);
    }
  });
  

  
}
circle = L.circle([32.302898, -90.183487], {
  radius: 1000,
}).addTo(this.group);
marker = L.marker([32.302898, -90.183487]).addTo(this.group);

//MISSISSIPPI AREA
  json;
  options = {
    layers: [
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        tileSize: 512,
        zoomOffset: -1
      })
    ],
    zoom: 7,
    center: L.latLng(32.302898, -90.183487),
    radius: 5
  };

//WEATHER POLOYON 
  getAlerts(map: L.Map) {
    let response = this.http.get("https://api.weather.gov/alerts/active?area=MS").subscribe((json: any) => {
      console.log(json);
      this.json = json;
      L.geoJSON(this.json).addTo(map);
    });
    }
  }

