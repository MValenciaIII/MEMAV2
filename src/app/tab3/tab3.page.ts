import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
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

  
 
  constructor(private http: HttpClient ) {


    
  }



//  map = L.map('map').setView(L.latLng(32.302898, -90.183487), 11);
//  group = L.layerGroup().addTo(this.map);



  ngOnInit(){


  this.getLocationService()
  this.initializeMapOptions()
  
        
    }      


    getLocationService():Promise<any>{
      return new Promise((resolve, reject)=>{
        navigator.geolocation.getCurrentPosition(resp=>{
          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude})
        })
  
      })
    }
  
  
    
    onMapReady(map: Map) {
      this.map = map;
      this.getLocationService().then(resp=> {
        this.map.setView(L.latLng(resp.lat, resp.lng), 18)
      })
      this.getAlerts();
      this.addSampleMarker();
      this.geoRadius();
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
        zoom: 18,
        //center: latLng(this.longitude, this.latitude),
        
      };

    }

//UPDATING A MAP RADIUS USING BUTTONS IN ANGULAR
//ANGULAR BUTTON 

    private geoRadius() {
      this.getLocationService().then(resp=>{
         const radius =  L.circle([resp.lat, resp.lng], 
          {
            radius: 200
          }).addTo(this.map)
      })
      
    }

     radiusChange(value :any)  {
       console.log(value)
      const radius = L.circle;
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
        let response = this.http.get("https://api.weather.gov/alerts/active?area=MS").subscribe((json: any) => {
          console.log(json);
          this.json = json;
          L.geoJSON(this.json).addTo(this.map);
        });
      }
  }

