import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Leaflet from 'leaflet';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  map: Leaflet.Map;
  marker: Leaflet.Marker; 
  circle: Leaflet.Circle;
  propertyList = [];

  constructor() { }

  ngOnInit(){
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(this.setGeoLocation.bind(this));
    }
 }

 setGeoLocation(position: { coords: { latitude: any; longitude: any } }) {
  const {
     coords: { latitude, longitude },
  } = position;

 
    this.map = new Leaflet.Map('mapId3').setView([latitude, longitude], 16);
    this.marker = new Leaflet.marker([latitude, longitude]).addTo(this.map)
    this.circle = new Leaflet.circle([latitude, longitude], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: '0.5',
      radius: 500
    }).addTo(this.map)
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1
    
    }).addTo(this.map);

 }

   
 

}
