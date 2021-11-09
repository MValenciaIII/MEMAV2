import { Component, OnInit, OnDestroy, NgZone, SimpleChange, SimpleChanges, Input, ViewChild, AfterViewInit } from '@angular/core';
// import * as Leaflet from 'leaflet';
import { HttpClient } from "@angular/common/http";
import * as L from "leaflet";
import {latLng, MapOptions, tileLayer, Map, Marker, icon, Circle} from 'leaflet';
import * as turfcircle from '@turf/circle';
import booleanIntersects from '@turf/boolean-intersects';
import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon.png';
import 'proj4leaflet';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

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
export class Tab3Page implements AfterViewInit {
  rangeId: any;
  map: Map;
  mapOptions: MapOptions;
  geoRadiusLine: any;
  geoJSONCircle: any;
  polygons: any;
  CountyPoints: any;
  turfcircle: any;

  countySelection: string;
  @ViewChild('ranger') tab3Page: Tab3Page;
 
  constructor(
    private http: HttpClient,
    private nativeGeocoder: NativeGeocoder
  ) {}


//  map = L.map('map').setView(L.latLng(32.302898, -90.183487), 11);
//  group = L.layerGroup().addTo(this.map);



  ngOnInit(){

    this.getLocationService() 
    this.initializeMapOptions()

  }   
    
  ngAfterViewInit() {



  }


    getLocationService():Promise<any>{
      return new Promise((resolve, reject)=>{
        navigator.geolocation.getCurrentPosition(resp=>{
          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude})
        })
  
      })
    }
  //MAYBE START STORING VALUES OF RESP.LAT/LNG AND USE FOR CHECKING LAYER THEN REMOVEING IN ONMAPREADY
  
    
    onMapReady(map: Map) {
      this.map = map;
      this.getLocationService().then(resp=> {
        this.map.setView(L.latLng(resp.lat, resp.lng), 10)
      })
      //this.geoRadius(this.rangeId)
      this.getAlerts();
      // this.setCountiesPoints();
      this.setCityPoints();
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
        zoom: 10,
        center: L.latLng(0, 0)
        
      };

    }

//UPDATING A MAP RADIUS USING BUTTONS IN ANGULAR
//ANGULAR BUTTON 


    geoRadius() {
      //BUTTON RADIUS: REMOVE PREVIOUS LAYER WHEN NEW BUTTON IS PRESSED
      //SLIDER RADIUS: LEARN HOW TO UPDATE A RADIUS IMMEDIATELY WHEN RADIUS SLIDER IS MOVED
      //ALSO HOW TO SAVE RADIUS VALUE.

      // this.getLocationService().then(resp=>{
      
      //   this.rangeId = value
      //   let milesRadius = this.rangeId / 1609;
        
        
      //   if(this.rangeId === undefined) {

      //   this.geoRadiusLine = L.circle([resp.lat, resp.lng], { radius: 200 }).addTo(this.map);

        
      //   } 
      //     else if (this.rangeId > 0) {
            
      //       this.geoRadiusLine.setRadius(this.rangeId)


      //       //toGeoJSON is converting to a point instead of a POLYGON
      //       //Leaflet doesn't support converting Polygons
      //       //Need to find a plugin or replace the circle.
      //       console.log(this.geoRadiusLine)
      //       this.geoJSONCircle = this.circleToPolygon(this.geoRadiusLine)
      //       this.turfcircle = this.geoJSONCircle.toGeoJSON()
      //       console.log(this.turfcircle)
      //       // TEST TO EXTRACT POLYGON AND STORE 
      //       // https://medium.com/geoman-blog/how-to-handle-circles-in-geojson-d04dcd6cb2e6
      //       //

           
      //       //
      //       for (let i = 0; i < this.polygons.length; i++) {
      //         const element = this.polygons[i];
      //         let  doesIntersect = booleanIntersects(
      //           this.polygons[i].geometry,
      //           this.turfcircle.geometry
      //         )
      //         console.log(this.polygons[i], this.turfcircle)
      //         console.log(doesIntersect)
      //         if(doesIntersect == true) {
      //           console.log(element + `of ID = ${i} has an intersection!`)
      //         }
      //       }
      //     }
      // })
      console.log(this.countySelection)
      for (let i = 0; i < this.CountyPoints.length; i++){
        const element = this.CountyPoints[i];

        if (element.properties.CONAME == this.countySelection ) {

          if (this.geoRadiusLine === undefined){
            this.geoRadiusLine = L.circle([element.properties.Lat, element.properties.Lon], {radius: 16900}).addTo(this.map);
            this.map.panTo([element.properties.Lat, element.properties.Lon])
            var radiusNum = this.geoRadiusLine.getRadius()
            this.geoJSONCircle = this.circleToPolygon(this.geoRadiusLine)
            this.turfcircle = this.geoJSONCircle.toGeoJSON()
            this.geoRadiusLine.getLatLng();
          } else {
            console.log(true)
            this.geoRadiusLine.setLatLng([element.properties.Lat, element.properties.Lon])
            this.map.panTo([element.properties.Lat, element.properties.Lon])
            this.geoJSONCircle = this.circleToPolygon(this.geoRadiusLine)
            this.turfcircle = this.geoJSONCircle.toGeoJSON()

            this.geoRadiusLine.redraw();
          }
          debugger
        }
      }
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
      let poly = [];
        let response = this.http.get("https://api.weather.gov/alerts/active?area=MS").subscribe((json: any) => {
          console.log(json);
          this.json = json;
          if (this.json.features) {
            for (let i = 0; i < this.json.features.length; i++) {
              const element = this.json.features[i];
              console.log(element)
              
              poly.push(element) ;
              this.polygons = poly
              console.log(this.polygons)
              //I NEED TO PARSE THE POLYGONS IN THE RESPONSE INTO POSITIOSN, PATHOPTIONS, KEY
              //
              
              var pressOne = L.geoJSON(element).addTo(this.map);
              pressOne.bindPopup(`<p>County Affected: ${element.properties.areaDesc}</p>
              <p>Event: ${element.properties.event}</p>
              `)
            }
          }
        });
      }


      private async setCountiesPoints() {
        let countiesPointsArray = []
        let countiesPoints =  this.http.get('../../assets/MississippiCountiesPointsWGS84.geojson').subscribe((json: any) => {
          console.log(json)
          this.json = json;
          for (let i = 0; i < this.json.features.length; i++) {
            const element = this.json.features[i]

            countiesPointsArray.push(element);
            this.CountyPoints = countiesPointsArray
            var countiesList = L.geoJSON(element).addTo(this.map)
            countiesList.bindPopup(`<p>County Name: ${element.properties.CONAME}</p>`)
          }
        console.log(this.CountyPoints);

        })

      }
//FUNCTIONS FOR CONVERTING L.CIRCLE

      private async setCityPoints() {
        let options: NativeGeocoderOptions = {
          useLocale: true,
          maxResults: 5
        };
        MSCityNames.forEach(cityName => {
          this.nativeGeocoder.forwardGeocode(cityName, options)
            .then((result: NativeGeocoderResult[]) => {
              console.log('result', JSON.stringify(result[0]));
            })
            .catch((error: any) => {
              console.log('error', error);
            });
        });
      }

      public destinationVincenty(lonlat, brng, dist) { // rewritten to work with leaflet
        const VincentyConstants = {
          a: 6378137,
          b: 6356752.3142,
          f: 1 / 298.257223563
        };
      
        const {a, b, f} = VincentyConstants;
        const lon1 = lonlat.lng;
        const lat1 = lonlat.lat;
        const s = dist;
        const pi = Math.PI;
        const alpha1 = brng * pi / 180; // converts brng degrees to radius
        const sinAlpha1 = Math.sin(alpha1);
        const cosAlpha1 = Math.cos(alpha1);
        const tanU1 = (1 - f) * Math.tan(lat1 * pi / 180 /* converts lat1 degrees to radius */);
        const cosU1 = 1 / Math.sqrt((1 + tanU1 * tanU1));
        const sinU1 = tanU1 * cosU1;
        const sigma1 = Math.atan2(tanU1, cosAlpha1);
        const sinAlpha = cosU1 * sinAlpha1;
        const cosSqAlpha = 1 - sinAlpha * sinAlpha;
        const uSq = cosSqAlpha * (a * a - b * b) / (b * b);
        const A = 1 + uSq / 16384 * (4096 + uSq * (-768 + uSq * (320 - 175 * uSq)));
        const B = uSq / 1024 * (256 + uSq * (-128 + uSq * (74 - 47 * uSq)));
        let sigma = s / (b * A);
        let sigmaP = 2 * Math.PI;
      
        let cos2SigmaM;
        let sinSigma;
        let cosSigma;
        while (Math.abs(sigma - sigmaP) > 1e-12) {
          cos2SigmaM = Math.cos(2 * sigma1 + sigma);
          sinSigma = Math.sin(sigma);
          cosSigma = Math.cos(sigma);
          const deltaSigma = B * sinSigma * (cos2SigmaM + B / 4 * (cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM) -
            B / 6 * cos2SigmaM * (-3 + 4 * sinSigma * sinSigma) * (-3 + 4 * cos2SigmaM * cos2SigmaM)));
          sigmaP = sigma;
          sigma = s / (b * A) + deltaSigma;
        }
        const tmp = sinU1 * sinSigma - cosU1 * cosSigma * cosAlpha1;
        const lat2 = Math.atan2(sinU1 * cosSigma + cosU1 * sinSigma * cosAlpha1,
          (1 - f) * Math.sqrt(sinAlpha * sinAlpha + tmp * tmp));
        const lambda = Math.atan2(sinSigma * sinAlpha1, cosU1 * cosSigma - sinU1 * sinSigma * cosAlpha1);
        const C = f / 16 * cosSqAlpha * (4 + f * (4 - 3 * cosSqAlpha));
        const lam = lambda - (1 - C) * f * sinAlpha *
          (sigma + C * sinSigma * (cos2SigmaM + C * cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM)));
        // const revAz = Math.atan2(sinAlpha, -tmp);  // final bearing
        const lamFunc = lon1 + (lam * 180 / pi); // converts lam radius to degrees
        const lat2a = lat2 * 180 / pi; // converts lat2a radius to degrees
      
        return L.latLng(lamFunc, lat2a);
      }
      
public createGeodesicPolygon(origin, radius, sides, rotation) {
        let angle;
        let newLonlat;
        let geomPoint;
        const points = [];
      
        for (let i = 0; i < sides; i += 1) {
          angle = (i * 360 / sides) + rotation;
          newLonlat = this.destinationVincenty(origin, angle, radius);
          geomPoint = L.latLng(newLonlat.lng, newLonlat.lat);
          points.push(geomPoint);
        }
      
        return points;
      }

public circleToPolygon(circle, sides = 60) {
        const origin = circle.getLatLng();
        const radius = circle.getRadius();
        const polys = this.createGeodesicPolygon(origin, radius, sides, 0); // these are the points that make up the circle
        const polygon = [];
        for (let i = 0; i < polys.length; i += 1) {
          const geometry = [polys[i].lat, polys[i].lng];
          polygon.push(geometry);
        }
        return L.polygon(polygon, circle.options);
}
      
  }


const MSCityNames: string[] = [
  'Gulfport',
  'Wiggins',
  'Hattiesburg',
  'Laurel',
  'McComb',
  'Natchez',
  'Brookhaven',
  'Magee',
  'Port Gibson',
  'Vicksburg',
  'Jackson',
  'Canton',
  'Forest',
  'Meridian',
  'Waynesboro',
  'Philadelphia',
  'Louisville',
  'Kosciusko',
  'Yazoo City',
  'Rolling Fork',
  'Greenville',
  'Indianola',
  'Greenwood',
  'Winona',
  'Starkville',
  'Durant',
  'Senatobia',
  'Southaven',
  'Columbus',
  'Amory',
  'Houston',
  'Grenada',
  'Cleveland',
  'Oxford',
  'Pontotoc',
  'Tupelo',
  'Booneville',
  'New Albany',
  'Corinth',
  'Iuka'
];





