(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.min.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.min.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=68)}([function(t,e,n){var r=n(136);t.exports=function(t,e,n){var i=null==t?undefined:r(t,e);return i===undefined?n:i}},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{"default":t}};Object.defineProperty(e,"__esModule",{value:!0});var i=n(7),a=n(10),o=r(n(146)),s=n(16),l=r(n(147));function h(t,e){var n=a.getCoords(t),r=a.getCoords(e);if(2!==n.length)throw new Error("<intersects> line1 must only contain 2 coordinates");if(2!==r.length)throw new Error("<intersects> line2 must only contain 2 coordinates");var o=n[0][0],s=n[0][1],l=n[1][0],h=n[1][1],u=r[0][0],c=r[0][1],f=r[1][0],p=r[1][1],d=(p-c)*(l-o)-(f-u)*(h-s),g=(f-u)*(s-c)-(p-c)*(o-u),m=(l-o)*(s-c)-(h-s)*(o-u);if(0===d)return null;var _=g/d,y=m/d;if(_>=0&&_<=1&&y>=0&&y<=1){var v=o+_*(l-o),b=s+_*(h-s);return i.point([v,b])}return null}e["default"]=function(t,e){var n={},r=[];if("LineString"===t.type&&(t=i.feature(t)),"LineString"===e.type&&(e=i.feature(e)),"Feature"===t.type&&"Feature"===e.type&&null!==t.geometry&&null!==e.geometry&&"LineString"===t.geometry.type&&"LineString"===e.geometry.type&&2===t.geometry.coordinates.length&&2===e.geometry.coordinates.length){var u=h(t,e);return u&&r.push(u),i.featureCollection(r)}var c=l["default"]();return c.load(o["default"](e)),s.featureEach(o["default"](t),(function(t){s.featureEach(c.search(t),(function(e){var i=h(t,e);if(i){var o=a.getCoords(i).join(",");n[o]||(n[o]=!0,r.push(i))}}))})),i.featureCollection(r)}},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e,n){var r=n(70),i=n(127)((function(t,e,n){r(t,e,n)}));t.exports=i},function(t,e,n){var r=n(29),i="object"==typeof self&&self&&self.Object===Object&&self,a=r||i||Function("return this")();t.exports=a},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e){var n=Array.isArray;t.exports=n},function(t,e,n){"use strict";function r(t,e,n){void 0===n&&(n={});var r={type:"Feature"};return(0===n.id||n.id)&&(r.id=n.id),n.bbox&&(r.bbox=n.bbox),r.properties=e||{},r.geometry=t,r}function i(t,e,n){return void 0===n&&(n={}),r({type:"Point",coordinates:t},e,n)}function a(t,e,n){void 0===n&&(n={});for(var i=0,a=t;i<a.length;i++){var o=a[i];if(o.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");for(var s=0;s<o[o.length-1].length;s++)if(o[o.length-1][s]!==o[0][s])throw new Error("First and last Position are not equivalent.")}return r({type:"Polygon",coordinates:t},e,n)}function o(t,e,n){if(void 0===n&&(n={}),t.length<2)throw new Error("coordinates must be an array of two or more positions");return r({type:"LineString",coordinates:t},e,n)}function s(t,e){void 0===e&&(e={});var n={type:"FeatureCollection"};return e.id&&(n.id=e.id),e.bbox&&(n.bbox=e.bbox),n.features=t,n}function l(t,e,n){return void 0===n&&(n={}),r({type:"MultiLineString",coordinates:t},e,n)}function h(t,e,n){return void 0===n&&(n={}),r({type:"MultiPoint",coordinates:t},e,n)}function u(t,e,n){return void 0===n&&(n={}),r({type:"MultiPolygon",coordinates:t},e,n)}function c(t,n){void 0===n&&(n="kilometers");var r=e.factors[n];if(!r)throw new Error(n+" units is invalid");return t*r}function f(t,n){void 0===n&&(n="kilometers");var r=e.factors[n];if(!r)throw new Error(n+" units is invalid");return t/r}function p(t){return 180*(t%(2*Math.PI))/Math.PI}function d(t){return!isNaN(t)&&null!==t&&!Array.isArray(t)&&!/^\s*$/.test(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.earthRadius=6371008.8,e.factors={centimeters:100*e.earthRadius,centimetres:100*e.earthRadius,degrees:e.earthRadius/111325,feet:3.28084*e.earthRadius,inches:39.37*e.earthRadius,kilometers:e.earthRadius/1e3,kilometres:e.earthRadius/1e3,meters:e.earthRadius,metres:e.earthRadius,miles:e.earthRadius/1609.344,millimeters:1e3*e.earthRadius,millimetres:1e3*e.earthRadius,nauticalmiles:e.earthRadius/1852,radians:1,yards:e.earthRadius/1.0936},e.unitsFactors={centimeters:100,centimetres:100,degrees:1/111325,feet:3.28084,inches:39.37,kilometers:.001,kilometres:.001,meters:1,metres:1,miles:1/1609.344,millimeters:1e3,millimetres:1e3,nauticalmiles:1/1852,radians:1/e.earthRadius,yards:1/1.0936},e.areaFactors={acres:247105e-9,centimeters:1e4,centimetres:1e4,feet:10.763910417,inches:1550.003100006,kilometers:1e-6,kilometres:1e-6,meters:1,metres:1,miles:386e-9,millimeters:1e6,millimetres:1e6,yards:1.195990046},e.feature=r,e.geometry=function(t,e,n){switch(void 0===n&&(n={}),t){case"Point":return i(e).geometry;case"LineString":return o(e).geometry;case"Polygon":return a(e).geometry;case"MultiPoint":return h(e).geometry;case"MultiLineString":return l(e).geometry;case"MultiPolygon":return u(e).geometry;default:throw new Error(t+" is invalid")}},e.point=i,e.points=function(t,e,n){return void 0===n&&(n={}),s(t.map((function(t){return i(t,e)})),n)},e.polygon=a,e.polygons=function(t,e,n){return void 0===n&&(n={}),s(t.map((function(t){return a(t,e)})),n)},e.lineString=o,e.lineStrings=function(t,e,n){return void 0===n&&(n={}),s(t.map((function(t){return o(t,e)})),n)},e.featureCollection=s,e.multiLineString=l,e.multiPoint=h,e.multiPolygon=u,e.geometryCollection=function(t,e,n){return void 0===n&&(n={}),r({type:"GeometryCollection",geometries:t},e,n)},e.round=function(t,e){if(void 0===e&&(e=0),e&&!(e>=0))throw new Error("precision must be a positive number");var n=Math.pow(10,e||0);return Math.round(t*n)/n},e.radiansToLength=c,e.lengthToRadians=f,e.lengthToDegrees=function(t,e){return p(f(t,e))},e.bearingToAzimuth=function(t){var e=t%360;return e<0&&(e+=360),e},e.radiansToDegrees=p,e.degreesToRadians=function(t){return t%360*Math.PI/180},e.convertLength=function(t,e,n){if(void 0===e&&(e="kilometers"),void 0===n&&(n="kilometers"),!(t>=0))throw new Error("length must be a positive number");return c(f(t,e),n)},e.convertArea=function(t,n,r){if(void 0===n&&(n="meters"),void 0===r&&(r="kilometers"),!(t>=0))throw new Error("area must be a positive number");var i=e.areaFactors[n];if(!i)throw new Error("invalid original units");var a=e.areaFactors[r];if(!a)throw new Error("invalid final units");return t/i*a},e.isNumber=d,e.isObject=function(t){return!!t&&t.constructor===Object},e.validateBBox=function(t){if(!t)throw new Error("bbox is required");if(!Array.isArray(t))throw new Error("bbox must be an Array");if(4!==t.length&&6!==t.length)throw new Error("bbox must be an Array of 4 or 6 numbers");t.forEach((function(t){if(!d(t))throw new Error("bbox must only contain numbers")}))},e.validateId=function(t){if(!t)throw new Error("id is required");if(-1===["string","number"].indexOf(typeof t))throw new Error("id must be a number or a string")},e.radians2degrees=function(){throw new Error("method has been renamed to `radiansToDegrees`")},e.degrees2radians=function(){throw new Error("method has been renamed to `degreesToRadians`")},e.distanceToDegrees=function(){throw new Error("method has been renamed to `lengthToDegrees`")},e.distanceToRadians=function(){throw new Error("method has been renamed to `lengthToRadians`")},e.radiansToDistance=function(){throw new Error("method has been renamed to `radiansToLength`")},e.bearingToAngle=function(){throw new Error("method has been renamed to `bearingToAzimuth`")},e.convertDistance=function(){throw new Error("method has been renamed to `convertLength`")}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(7);function i(t,e,n,r,i,a,o,s){var l,h,u,c,f={x:null,y:null,onLine1:!1,onLine2:!1};return 0===(l=(s-a)*(n-t)-(o-i)*(r-e))?null!==f.x&&null!==f.y&&f:(c=(n-t)*(h=e-a)-(r-e)*(u=t-i),h=((o-i)*h-(s-a)*u)/l,u=c/l,f.x=t+h*(n-t),f.y=e+h*(r-e),h>=0&&h<=1&&(f.onLine1=!0),u>=0&&u<=1&&(f.onLine2=!0),!(!f.onLine1||!f.onLine2)&&[f.x,f.y])}e["default"]=function(t){var e,n,a={type:"FeatureCollection",features:[]};if("LineString"===(n="Feature"===t.type?t.geometry:t).type)e=[n.coordinates];else if("MultiLineString"===n.type)e=n.coordinates;else if("MultiPolygon"===n.type)e=[].concat.apply([],n.coordinates);else{if("Polygon"!==n.type)throw new Error("Input must be a LineString, MultiLineString, Polygon, or MultiPolygon Feature or Geometry");e=n.coordinates}return e.forEach((function(t){e.forEach((function(e){for(var n=0;n<t.length-1;n++)for(var o=n;o<e.length-1;o++){if(t===e){if(1===Math.abs(n-o))continue;if(0===n&&o===t.length-2&&t[n][0]===t[t.length-1][0]&&t[n][1]===t[t.length-1][1])continue}var s=i(t[n][0],t[n][1],t[n+1][0],t[n+1][1],e[o][0],e[o][1],e[o+1][0],e[o+1][1]);s&&a.features.push(r.point([s[0],s[1]]))}}))})),a}},function(t,e,n){var r=n(19),i=n(84),a=n(85),o=r?r.toStringTag:undefined;t.exports=function(t){return null==t?t===undefined?"[object Undefined]":"[object Null]":o&&o in Object(t)?i(t):a(t)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(7);e.getCoord=function(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if("Feature"===t.type&&null!==t.geometry&&"Point"===t.geometry.type)return t.geometry.coordinates;if("Point"===t.type)return t.coordinates}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return t;throw new Error("coord must be GeoJSON Point or an Array of numbers")},e.getCoords=function(t){if(Array.isArray(t))return t;if("Feature"===t.type){if(null!==t.geometry)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")},e.containsNumber=function i(t){if(t.length>1&&r.isNumber(t[0])&&r.isNumber(t[1]))return!0;if(Array.isArray(t[0])&&t[0].length)return i(t[0]);throw new Error("coordinates must only contain numbers")},e.geojsonType=function(t,e,n){if(!e||!n)throw new Error("type and name required");if(!t||t.type!==e)throw new Error("Invalid input to "+n+": must be a "+e+", given "+t.type)},e.featureOf=function(t,e,n){if(!t)throw new Error("No feature passed");if(!n)throw new Error(".featureOf() requires a name");if(!t||"Feature"!==t.type||!t.geometry)throw new Error("Invalid input to "+n+", Feature with geometry required");if(!t.geometry||t.geometry.type!==e)throw new Error("Invalid input to "+n+": must be a "+e+", given "+t.geometry.type)},e.collectionOf=function(t,e,n){if(!t)throw new Error("No featureCollection passed");if(!n)throw new Error(".collectionOf() requires a name");if(!t||"FeatureCollection"!==t.type)throw new Error("Invalid input to "+n+", FeatureCollection required");for(var r=0,i=t.features;r<i.length;r++){var a=i[r];if(!a||"Feature"!==a.type||!a.geometry)throw new Error("Invalid input to "+n+", Feature with geometry required");if(!a.geometry||a.geometry.type!==e)throw new Error("Invalid input to "+n+": must be a "+e+", given "+a.geometry.type)}},e.getGeom=function(t){return"Feature"===t.type?t.geometry:t},e.getType=function(t,e){return"FeatureCollection"===t.type?"FeatureCollection":"GeometryCollection"===t.type?"GeometryCollection":"Feature"===t.type&&null!==t.geometry?t.geometry.type:t.type}},function(t,e,n){var r=n(72),i=n(73),a=n(74),o=n(75),s=n(76);function l(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}l.prototype.clear=r,l.prototype["delete"]=i,l.prototype.get=a,l.prototype.has=o,l.prototype.set=s,t.exports=l},function(t,e,n){var r=n(13);t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}},function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},function(t,e,n){var r=n(17)(Object,"create");t.exports=r},function(t,e,n){var r=n(98);t.exports=function(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(7);function i(t,e,n){if(null!==t)for(var r,a,o,s,l,h,u,c,f=0,p=0,d=t.type,g="FeatureCollection"===d,m="Feature"===d,_=g?t.features.length:1,y=0;y<_;y++){l=(c=!!(u=g?t.features[y].geometry:m?t.geometry:t)&&"GeometryCollection"===u.type)?u.geometries.length:1;for(var v=0;v<l;v++){var b=0,L=0;if(null!==(s=c?u.geometries[v]:u)){h=s.coordinates;var k=s.type;switch(f=!n||"Polygon"!==k&&"MultiPolygon"!==k?0:1,k){case null:break;case"Point":if(!1===e(h,p,y,b,L))return!1;p++,b++;break;case"LineString":case"MultiPoint":for(r=0;r<h.length;r++){if(!1===e(h[r],p,y,b,L))return!1;p++,"MultiPoint"===k&&b++}"LineString"===k&&b++;break;case"Polygon":case"MultiLineString":for(r=0;r<h.length;r++){for(a=0;a<h[r].length-f;a++){if(!1===e(h[r][a],p,y,b,L))return!1;p++}"MultiLineString"===k&&b++,"Polygon"===k&&L++}"Polygon"===k&&b++;break;case"MultiPolygon":for(r=0;r<h.length;r++){for(L=0,a=0;a<h[r].length;a++){for(o=0;o<h[r][a].length-f;o++){if(!1===e(h[r][a][o],p,y,b,L))return!1;p++}L++}b++}break;case"GeometryCollection":for(r=0;r<s.geometries.length;r++)if(!1===i(s.geometries[r],e,n))return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function a(t,e){var n;switch(t.type){case"FeatureCollection":for(n=0;n<t.features.length&&!1!==e(t.features[n].properties,n);n++);break;case"Feature":e(t.properties,0)}}function o(t,e){if("Feature"===t.type)e(t,0);else if("FeatureCollection"===t.type)for(var n=0;n<t.features.length&&!1!==e(t.features[n],n);n++);}function s(t,e){var n,r,i,a,o,s,l,h,u,c,f=0,p="FeatureCollection"===t.type,d="Feature"===t.type,g=p?t.features.length:1;for(n=0;n<g;n++){for(s=p?t.features[n].geometry:d?t.geometry:t,h=p?t.features[n].properties:d?t.properties:{},u=p?t.features[n].bbox:d?t.bbox:undefined,c=p?t.features[n].id:d?t.id:undefined,o=(l=!!s&&"GeometryCollection"===s.type)?s.geometries.length:1,i=0;i<o;i++)if(null!==(a=l?s.geometries[i]:s))switch(a.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":if(!1===e(a,f,h,u,c))return!1;break;case"GeometryCollection":for(r=0;r<a.geometries.length;r++)if(!1===e(a.geometries[r],f,h,u,c))return!1;break;default:throw new Error("Unknown Geometry Type")}else if(!1===e(null,f,h,u,c))return!1;f++}}function l(t,e){s(t,(function(t,n,i,a,o){var s,l=null===t?null:t.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return!1!==e(r.feature(t,i,{bbox:a,id:o}),n,0)&&void 0}switch(l){case"MultiPoint":s="Point";break;case"MultiLineString":s="LineString";break;case"MultiPolygon":s="Polygon"}for(var h=0;h<t.coordinates.length;h++){var u={type:s,coordinates:t.coordinates[h]};if(!1===e(r.feature(u,i),n,h))return!1}}))}function h(t,e){l(t,(function(t,n,a){var o=0;if(t.geometry){var s=t.geometry.type;if("Point"!==s&&"MultiPoint"!==s){var l,h=0,u=0,c=0;return!1!==i(t,(function(i,s,f,p,d){if(l===undefined||n>h||p>u||d>c)return l=i,h=n,u=p,c=d,void(o=0);var g=r.lineString([l,i],t.properties);if(!1===e(g,n,a,d,o))return!1;o++,l=i}))&&void 0}}}))}function u(t,e){if(!t)throw new Error("geojson is required");l(t,(function(t,n,i){if(null!==t.geometry){var a=t.geometry.type,o=t.geometry.coordinates;switch(a){case"LineString":if(!1===e(t,n,i,0,0))return!1;break;case"Polygon":for(var s=0;s<o.length;s++)if(!1===e(r.lineString(o[s],t.properties),n,i,s))return!1}}}))}e.coordEach=i,e.coordReduce=function(t,e,n,r){var a=n;return i(t,(function(t,r,i,o,s){a=0===r&&n===undefined?t:e(a,t,r,i,o,s)}),r),a},e.propEach=a,e.propReduce=function(t,e,n){var r=n;return a(t,(function(t,i){r=0===i&&n===undefined?t:e(r,t,i)})),r},e.featureEach=o,e.featureReduce=function(t,e,n){var r=n;return o(t,(function(t,i){r=0===i&&n===undefined?t:e(r,t,i)})),r},e.coordAll=function(t){var e=[];return i(t,(function(t){e.push(t)})),e},e.geomEach=s,e.geomReduce=function(t,e,n){var r=n;return s(t,(function(t,i,a,o,s){r=0===i&&n===undefined?t:e(r,t,i,a,o,s)})),r},e.flattenEach=l,e.flattenReduce=function(t,e,n){var r=n;return l(t,(function(t,i,a){r=0===i&&0===a&&n===undefined?t:e(r,t,i,a)})),r},e.segmentEach=h,e.segmentReduce=function(t,e,n){var r=n,i=!1;return h(t,(function(t,a,o,s,l){r=!1===i&&n===undefined?t:e(r,t,a,o,s,l),i=!0})),r},e.lineEach=u,e.lineReduce=function(t,e,n){var r=n;return u(t,(function(t,i,a,o){r=0===i&&n===undefined?t:e(r,t,i,a,o)})),r},e.findSegment=function(t,e){if(e=e||{},!r.isObject(e))throw new Error("options is invalid");var n,i=e.featureIndex||0,a=e.multiFeatureIndex||0,o=e.geometryIndex||0,s=e.segmentIndex||0,l=e.properties;switch(t.type){case"FeatureCollection":i<0&&(i=t.features.length+i),l=l||t.features[i].properties,n=t.features[i].geometry;break;case"Feature":l=l||t.properties,n=t.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":n=t;break;default:throw new Error("geojson is invalid")}if(null===n)return null;var h=n.coordinates;switch(n.type){case"Point":case"MultiPoint":return null;case"LineString":return s<0&&(s=h.length+s-1),r.lineString([h[s],h[s+1]],l,e);case"Polygon":return o<0&&(o=h.length+o),s<0&&(s=h[o].length+s-1),r.lineString([h[o][s],h[o][s+1]],l,e);case"MultiLineString":return a<0&&(a=h.length+a),s<0&&(s=h[a].length+s-1),r.lineString([h[a][s],h[a][s+1]],l,e);case"MultiPolygon":return a<0&&(a=h.length+a),o<0&&(o=h[a].length+o),s<0&&(s=h[a][o].length-s-1),r.lineString([h[a][o][s],h[a][o][s+1]],l,e)}throw new Error("geojson is invalid")},e.findPoint=function(t,e){if(e=e||{},!r.isObject(e))throw new Error("options is invalid");var n,i=e.featureIndex||0,a=e.multiFeatureIndex||0,o=e.geometryIndex||0,s=e.coordIndex||0,l=e.properties;switch(t.type){case"FeatureCollection":i<0&&(i=t.features.length+i),l=l||t.features[i].properties,n=t.features[i].geometry;break;case"Feature":l=l||t.properties,n=t.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":n=t;break;default:throw new Error("geojson is invalid")}if(null===n)return null;var h=n.coordinates;switch(n.type){case"Point":return r.point(h,l,e);case"MultiPoint":return a<0&&(a=h.length+a),r.point(h[a],l,e);case"LineString":return s<0&&(s=h.length+s),r.point(h[s],l,e);case"Polygon":return o<0&&(o=h.length+o),s<0&&(s=h[o].length+s),r.point(h[o][s],l,e);case"MultiLineString":return a<0&&(a=h.length+a),s<0&&(s=h[a].length+s),r.point(h[a][s],l,e);case"MultiPolygon":return a<0&&(a=h.length+a),o<0&&(o=h[a].length+o),s<0&&(s=h[a][o].length-s),r.point(h[a][o][s],l,e)}throw new Error("geojson is invalid")}},function(t,e,n){var r=n(82),i=n(89);t.exports=function(t,e){var n=i(t,e);return r(n)?n:undefined}},function(t,e,n){var r=n(9),i=n(2);t.exports=function(t){if(!i(t))return!1;var e=r(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},function(t,e,n){var r=n(4).Symbol;t.exports=r},function(t,e,n){var r=n(32);t.exports=function(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){var r=n(113),i=n(5),a=Object.prototype,o=a.hasOwnProperty,s=a.propertyIsEnumerable,l=r(function(){return arguments}())?r:function(t){return i(t)&&o.call(t,"callee")&&!s.call(t,"callee")};t.exports=l},function(t,e,n){var r=n(18),i=n(24);t.exports=function(t){return null!=t&&i(t.length)&&!r(t)}},function(t,e){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},function(t,e){var n=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&n.test(t))&&t>-1&&t%1==0&&t<e}},function(t,e,n){var r=n(9),i=n(5);t.exports=function(t){return"symbol"==typeof t||i(t)&&"[object Symbol]"==r(t)}},function(t,e,n){(function(e){t.exports=function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}
/**
   * splaytree v3.0.1
   * Fast Splay tree for Node and browser
   *
   * @author Alexander Milevski <info@w8r.name>
   * @license MIT
   * @preserve
   */var i=function Y(e,n){t(this,Y),this.next=null,this.key=e,this.data=n,this.left=null,this.right=null};function a(t,e){return t>e?1:t<e?-1:0}function o(t,e,n){for(var r=new i(null,null),a=r,o=r;;){var s=n(t,e.key);if(s<0){if(null===e.left)break;if(n(t,e.left.key)<0){var l=e.left;if(e.left=l.right,l.right=e,null===(e=l).left)break}o.left=e,o=e,e=e.left}else{if(!(s>0))break;if(null===e.right)break;if(n(t,e.right.key)>0){var h=e.right;if(e.right=h.left,h.left=e,null===(e=h).right)break}a.right=e,a=e,e=e.right}}return a.right=e.left,o.left=e.right,e.left=r.right,e.right=r.left,e}function s(t,e,n,r){var a=new i(t,e);if(null===n)return a.left=a.right=null,a;var s=r(t,(n=o(t,n,r)).key);return s<0?(a.left=n.left,a.right=n,n.left=null):s>=0&&(a.right=n.right,a.left=n,n.right=null),a}function l(t,e,n){var r=null,i=null;if(e){var a=n((e=o(t,e,n)).key,t);0===a?(r=e.left,i=e.right):a<0?(i=e.right,e.right=null,r=e):(r=e.left,e.left=null,i=e)}return{left:r,right:i}}function h(t,e,n,r,i){if(t){r("".concat(e).concat(n?"└── ":"├── ").concat(i(t),"\n"));var a=e+(n?"    ":"│   ");t.left&&h(t.left,a,!1,r,i),t.right&&h(t.right,a,!0,r,i)}}var u=function(){function e(){var n=arguments.length>0&&arguments[0]!==undefined?arguments[0]:a;t(this,e),this._root=null,this._size=0,this._comparator=n}return r(e,[{key:"insert",value:function(t,e){return this._size++,this._root=s(t,e,this._root,this._comparator)}},{key:"add",value:function(t,e){var n=new i(t,e);null===this._root&&(n.left=n.right=null,this._size++,this._root=n);var r=this._comparator,a=o(t,this._root,r),s=r(t,a.key);return 0===s?this._root=a:(s<0?(n.left=a.left,n.right=a,a.left=null):s>0&&(n.right=a.right,n.left=a,a.right=null),this._size++,this._root=n),this._root}},{key:"remove",value:function(t){this._root=this._remove(t,this._root,this._comparator)}},{key:"_remove",value:function(t,e,n){var r;return null===e?null:0===n(t,(e=o(t,e,n)).key)?(null===e.left?r=e.right:(r=o(t,e.left,n)).right=e.right,this._size--,r):e}},{key:"pop",value:function(){var t=this._root;if(t){for(;t.left;)t=t.left;return this._root=o(t.key,this._root,this._comparator),this._root=this._remove(t.key,this._root,this._comparator),{key:t.key,data:t.data}}return null}},{key:"findStatic",value:function(t){for(var e=this._root,n=this._comparator;e;){var r=n(t,e.key);if(0===r)return e;e=r<0?e.left:e.right}return null}},{key:"find",value:function(t){return this._root&&(this._root=o(t,this._root,this._comparator),0!==this._comparator(t,this._root.key))?null:this._root}},{key:"contains",value:function(t){for(var e=this._root,n=this._comparator;e;){var r=n(t,e.key);if(0===r)return!0;e=r<0?e.left:e.right}return!1}},{key:"forEach",value:function(t,e){for(var n=this._root,r=[],i=!1;!i;)null!==n?(r.push(n),n=n.left):0!==r.length?(n=r.pop(),t.call(e,n),n=n.right):i=!0;return this}},{key:"range",value:function(t,e,n,r){for(var i=[],a=this._comparator,o=this._root;0!==i.length||o;)if(o)i.push(o),o=o.left;else{if(a((o=i.pop()).key,e)>0)break;if(a(o.key,t)>=0&&n.call(r,o))return this;o=o.right}return this}},{key:"keys",value:function(){var t=[];return this.forEach((function(e){var n=e.key;return t.push(n)})),t}},{key:"values",value:function(){var t=[];return this.forEach((function(e){var n=e.data;return t.push(n)})),t}},{key:"min",value:function(){return this._root?this.minNode(this._root).key:null}},{key:"max",value:function(){return this._root?this.maxNode(this._root).key:null}},{key:"minNode",value:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this._root;if(t)for(;t.left;)t=t.left;return t}},{key:"maxNode",value:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this._root;if(t)for(;t.right;)t=t.right;return t}},{key:"at",value:function(t){for(var e=this._root,n=!1,r=0,i=[];!n;)if(e)i.push(e),e=e.left;else if(i.length>0){if(e=i.pop(),r===t)return e;r++,e=e.right}else n=!0;return null}},{key:"next",value:function(t){var e=this._root,n=null;if(t.right){for(n=t.right;n.left;)n=n.left;return n}for(var r=this._comparator;e;){var i=r(t.key,e.key);if(0===i)break;i<0?(n=e,e=e.left):e=e.right}return n}},{key:"prev",value:function(t){var e=this._root,n=null;if(null!==t.left){for(n=t.left;n.right;)n=n.right;return n}for(var r=this._comparator;e;){var i=r(t.key,e.key);if(0===i)break;i<0?e=e.left:(n=e,e=e.right)}return n}},{key:"clear",value:function(){return this._root=null,this._size=0,this}},{key:"toList",value:function(){return function(t){for(var e=t,n=[],r=!1,a=new i(null,null),o=a;!r;)e?(n.push(e),e=e.left):n.length>0?e=(e=o=o.next=n.pop()).right:r=!0;return o.next=null,a.next}(this._root)}},{key:"load",value:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[],n=arguments.length>2&&arguments[2]!==undefined&&arguments[2],r=t.length,i=this._comparator;if(n&&g(t,e,0,r-1,i),null===this._root)this._root=c(t,e,0,r),this._size=r;else{var a=d(this.toList(),f(t,e),i);r=this._size+r,this._root=p({head:a},0,r)}return this}},{key:"isEmpty",value:function(){return null===this._root}},{key:"toString",value:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:function(t){return String(t.key)},e=[];return h(this._root,"",!0,(function(t){return e.push(t)}),t),e.join("")}},{key:"update",value:function(t,e,n){var r=this._comparator,i=l(t,this._root,r),a=i.left,h=i.right;r(t,e)<0?h=s(e,n,h,r):a=s(e,n,a,r),this._root=function(t,e,n){return null===e?t:(null===t||((e=o(t.key,e,n)).left=t),e)}(a,h,r)}},{key:"split",value:function(t){return l(t,this._root,this._comparator)}},{key:"size",get:function(){return this._size}},{key:"root",get:function(){return this._root}}]),e}();function c(t,e,n,r){var a=r-n;if(a>0){var o=n+Math.floor(a/2),s=t[o],l=e[o],h=new i(s,l);return h.left=c(t,e,n,o),h.right=c(t,e,o+1,r),h}return null}function f(t,e){for(var n=new i(null,null),r=n,a=0;a<t.length;a++)r=r.next=new i(t[a],e[a]);return r.next=null,n.next}function p(t,e,n){var r=n-e;if(r>0){var i=e+Math.floor(r/2),a=p(t,e,i),o=t.head;return o.left=a,t.head=t.head.next,o.right=p(t,i+1,n),o}return null}function d(t,e,n){for(var r=new i(null,null),a=r,o=t,s=e;null!==o&&null!==s;)n(o.key,s.key)<0?(a.next=o,o=o.next):(a.next=s,s=s.next),a=a.next;return null!==o?a.next=o:null!==s&&(a.next=s),r.next}function g(t,e,n,r,i){if(!(n>=r)){for(var a=t[n+r>>1],o=n-1,s=r+1;;){do{o++}while(i(t[o],a)<0);do{s--}while(i(t[s],a)>0);if(o>=s)break;var l=t[o];t[o]=t[s],t[s]=l,l=e[o],e[o]=e[s],e[s]=l}g(t,e,n,s,i),g(t,e,s+1,r,i)}}var m=function(t,e){return t.ll.x<=e.x&&e.x<=t.ur.x&&t.ll.y<=e.y&&e.y<=t.ur.y},_=function(t,e){if(e.ur.x<t.ll.x||t.ur.x<e.ll.x||e.ur.y<t.ll.y||t.ur.y<e.ll.y)return null;var n=t.ll.x<e.ll.x?e.ll.x:t.ll.x,r=t.ur.x<e.ur.x?t.ur.x:e.ur.x;return{ll:{x:n,y:t.ll.y<e.ll.y?e.ll.y:t.ll.y},ur:{x:r,y:t.ur.y<e.ur.y?t.ur.y:e.ur.y}}},y=Number.EPSILON;y===undefined&&(y=Math.pow(2,-52));var v=y*y,b=function(t,e){if(-y<t&&t<y&&-y<e&&e<y)return 0;var n=t-e;return n*n<v*t*e?0:t<e?-1:1},L=function(){function e(){t(this,e),this.reset()}return r(e,[{key:"reset",value:function(){this.xRounder=new k,this.yRounder=new k}},{key:"round",value:function(t,e){return{x:this.xRounder.round(t),y:this.yRounder.round(e)}}}]),e}(),k=function(){function e(){t(this,e),this.tree=new u,this.round(0)}return r(e,[{key:"round",value:function(t){var e=this.tree.add(t),n=this.tree.prev(e);if(null!==n&&0===b(e.key,n.key))return this.tree.remove(t),n.key;var r=this.tree.next(e);return null!==r&&0===b(e.key,r.key)?(this.tree.remove(t),r.key):t}}]),e}(),M=new L,x=function(t,e){return t.x*e.y-t.y*e.x},w=function(t,e){return t.x*e.x+t.y*e.y},P=function(t,e,n){var r={x:e.x-t.x,y:e.y-t.y},i={x:n.x-t.x,y:n.y-t.y},a=x(r,i);return b(a,0)},C=function(t){return Math.sqrt(w(t,t))},E=function(t,e,n){var r={x:e.x-t.x,y:e.y-t.y},i={x:n.x-t.x,y:n.y-t.y};return w(i,r)/C(i)/C(r)},S=function(t,e,n){return 0===e.y?null:{x:t.x+e.x/e.y*(n-t.y),y:n}},O=function(t,e,n){return 0===e.x?null:{x:n,y:t.y+e.y/e.x*(n-t.x)}},B=function(){function e(n,r){t(this,e),n.events===undefined?n.events=[this]:n.events.push(this),this.point=n,this.isLeft=r}return r(e,null,[{key:"compare",value:function(t,n){var r=e.comparePoints(t.point,n.point);return 0!==r?r:(t.point!==n.point&&t.link(n),t.isLeft!==n.isLeft?t.isLeft?1:-1:D.compare(t.segment,n.segment))}},{key:"comparePoints",value:function(t,e){return t.x<e.x?-1:t.x>e.x?1:t.y<e.y?-1:t.y>e.y?1:0}}]),r(e,[{key:"link",value:function(t){if(t.point===this.point)throw new Error("Tried to link already linked events");for(var e=t.point.events,n=0,r=e.length;n<r;n++){var i=e[n];this.point.events.push(i),i.point=this.point}this.checkForConsuming()}},{key:"checkForConsuming",value:function(){for(var t=this.point.events.length,e=0;e<t;e++){var n=this.point.events[e];if(n.segment.consumedBy===undefined)for(var r=e+1;r<t;r++){var i=this.point.events[r];i.consumedBy===undefined&&n.otherSE.point.events===i.otherSE.point.events&&n.segment.consume(i.segment)}}}},{key:"getAvailableLinkedEvents",value:function(){for(var t=[],e=0,n=this.point.events.length;e<n;e++){var r=this.point.events[e];r!==this&&!r.segment.ringOut&&r.segment.isInResult()&&t.push(r)}return t}},{key:"getLeftmostComparator",value:function(t){var e=this,n=new Map,r=function(r){var i,a,o,s,l,h=r.otherSE;n.set(r,{sine:(i=e.point,a=t.point,o=h.point,s={x:a.x-i.x,y:a.y-i.y},l={x:o.x-i.x,y:o.y-i.y},x(l,s)/C(l)/C(s)),cosine:E(e.point,t.point,h.point)})};return function(t,e){n.has(t)||r(t),n.has(e)||r(e);var i=n.get(t),a=i.sine,o=i.cosine,s=n.get(e),l=s.sine,h=s.cosine;return a>=0&&l>=0?o<h?1:o>h?-1:0:a<0&&l<0?o<h?-1:o>h?1:0:l<a?-1:l>a?1:0}}}]),e}(),R=0,D=function(){function e(n,r,i,a){t(this,e),this.id=++R,this.leftSE=n,n.segment=this,n.otherSE=r,this.rightSE=r,r.segment=this,r.otherSE=n,this.rings=i,this.windings=a}return r(e,null,[{key:"compare",value:function(t,e){var n=t.leftSE.point.x,r=e.leftSE.point.x,i=t.rightSE.point.x,a=e.rightSE.point.x;if(a<n)return 1;if(i<r)return-1;var o=t.leftSE.point.y,s=e.leftSE.point.y,l=t.rightSE.point.y,h=e.rightSE.point.y;if(n<r){if(s<o&&s<l)return 1;if(s>o&&s>l)return-1;var u=t.comparePoint(e.leftSE.point);if(u<0)return 1;if(u>0)return-1;var c=e.comparePoint(t.rightSE.point);return 0!==c?c:-1}if(n>r){if(o<s&&o<h)return-1;if(o>s&&o>h)return 1;var f=e.comparePoint(t.leftSE.point);if(0!==f)return f;var p=t.comparePoint(e.rightSE.point);return p<0?1:p>0?-1:1}if(o<s)return-1;if(o>s)return 1;if(i<a){var d=e.comparePoint(t.rightSE.point);if(0!==d)return d}if(i>a){var g=t.comparePoint(e.rightSE.point);if(g<0)return 1;if(g>0)return-1}if(i!==a){var m=l-o,_=i-n,y=h-s,v=a-r;if(m>_&&y<v)return 1;if(m<_&&y>v)return-1}return i>a?1:i<a||l<h?-1:l>h?1:t.id<e.id?-1:t.id>e.id?1:0}}]),r(e,[{key:"replaceRightSE",value:function(t){this.rightSE=t,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}},{key:"bbox",value:function(){var t=this.leftSE.point.y,e=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:t<e?t:e},ur:{x:this.rightSE.point.x,y:t>e?t:e}}}},{key:"vector",value:function(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}},{key:"isAnEndpoint",value:function(t){return t.x===this.leftSE.point.x&&t.y===this.leftSE.point.y||t.x===this.rightSE.point.x&&t.y===this.rightSE.point.y}},{key:"comparePoint",value:function(t){if(this.isAnEndpoint(t))return 0;var e=this.leftSE.point,n=this.rightSE.point,r=this.vector();if(e.x===n.x)return t.x===e.x?0:t.x<e.x?1:-1;var i=(t.y-e.y)/r.y,a=e.x+i*r.x;if(t.x===a)return 0;var o=(t.x-e.x)/r.x,s=e.y+o*r.y;return t.y===s?0:t.y<s?-1:1}},{key:"getIntersection",value:function(t){var e=this.bbox(),n=t.bbox(),r=_(e,n);if(null===r)return null;var i=this.leftSE.point,a=this.rightSE.point,o=t.leftSE.point,s=t.rightSE.point,l=m(e,o)&&0===this.comparePoint(o),h=m(n,i)&&0===t.comparePoint(i),u=m(e,s)&&0===this.comparePoint(s),c=m(n,a)&&0===t.comparePoint(a);if(h&&l)return c&&!u?a:!c&&u?s:null;if(h)return u&&i.x===s.x&&i.y===s.y?null:i;if(l)return c&&a.x===o.x&&a.y===o.y?null:o;if(c&&u)return null;if(c)return a;if(u)return s;var f=function(t,e,n,r){if(0===e.x)return O(n,r,t.x);if(0===r.x)return O(t,e,n.x);if(0===e.y)return S(n,r,t.y);if(0===r.y)return S(t,e,n.y);var i=x(e,r);if(0==i)return null;var a={x:n.x-t.x,y:n.y-t.y},o=x(a,e)/i,s=x(a,r)/i;return{x:(t.x+s*e.x+(n.x+o*r.x))/2,y:(t.y+s*e.y+(n.y+o*r.y))/2}}(i,this.vector(),o,t.vector());return null===f?null:m(r,f)?M.round(f.x,f.y):null}},{key:"split",value:function(t){var n=[],r=t.events!==undefined,i=new B(t,!0),a=new B(t,!1),o=this.rightSE;this.replaceRightSE(a),n.push(a),n.push(i);var s=new e(i,o,this.rings.slice(),this.windings.slice());return B.comparePoints(s.leftSE.point,s.rightSE.point)>0&&s.swapEvents(),B.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),r&&(i.checkForConsuming(),a.checkForConsuming()),n}},{key:"swapEvents",value:function(){var t=this.rightSE;this.rightSE=this.leftSE,this.leftSE=t,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(var e=0,n=this.windings.length;e<n;e++)this.windings[e]*=-1}},{key:"consume",value:function(t){for(var n=this,r=t;n.consumedBy;)n=n.consumedBy;for(;r.consumedBy;)r=r.consumedBy;var i=e.compare(n,r);if(0!==i){if(i>0){var a=n;n=r,r=a}if(n.prev===r){var o=n;n=r,r=o}for(var s=0,l=r.rings.length;s<l;s++){var h=r.rings[s],u=r.windings[s],c=n.rings.indexOf(h);-1===c?(n.rings.push(h),n.windings.push(u)):n.windings[c]+=u}r.rings=null,r.windings=null,r.consumedBy=n,r.leftSE.consumedBy=n.leftSE,r.rightSE.consumedBy=n.rightSE}}},{key:"prevInResult",value:function(){return this._prevInResult!==undefined||(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null),this._prevInResult}},{key:"beforeState",value:function(){if(this._beforeState!==undefined)return this._beforeState;if(this.prev){var t=this.prev.consumedBy||this.prev;this._beforeState=t.afterState()}else this._beforeState={rings:[],windings:[],multiPolys:[]};return this._beforeState}},{key:"afterState",value:function(){if(this._afterState!==undefined)return this._afterState;var t=this.beforeState();this._afterState={rings:t.rings.slice(0),windings:t.windings.slice(0),multiPolys:[]};for(var e=this._afterState.rings,n=this._afterState.windings,r=this._afterState.multiPolys,i=0,a=this.rings.length;i<a;i++){var o=this.rings[i],s=this.windings[i],l=e.indexOf(o);-1===l?(e.push(o),n.push(s)):n[l]+=s}for(var h=[],u=[],c=0,f=e.length;c<f;c++)if(0!==n[c]){var p=e[c],d=p.poly;if(-1===u.indexOf(d))if(p.isExterior)h.push(d);else{-1===u.indexOf(d)&&u.push(d);var g=h.indexOf(p.poly);-1!==g&&h.splice(g,1)}}for(var m=0,_=h.length;m<_;m++){var y=h[m].multiPoly;-1===r.indexOf(y)&&r.push(y)}return this._afterState}},{key:"isInResult",value:function(){if(this.consumedBy)return!1;if(this._isInResult!==undefined)return this._isInResult;var t=this.beforeState().multiPolys,e=this.afterState().multiPolys;switch(U.type){case"union":var n=0===t.length,r=0===e.length;this._isInResult=n!==r;break;case"intersection":var i,a;t.length<e.length?(i=t.length,a=e.length):(i=e.length,a=t.length),this._isInResult=a===U.numMultiPolys&&i<a;break;case"xor":var o=Math.abs(t.length-e.length);this._isInResult=o%2==1;break;case"difference":var s=function(t){return 1===t.length&&t[0].isSubject};this._isInResult=s(t)!==s(e);break;default:throw new Error("Unrecognized operation type found ".concat(U.type))}return this._isInResult}}],[{key:"fromRing",value:function(t,n,r){var i,a,o,s=B.comparePoints(t,n);if(s<0)i=t,a=n,o=1;else{if(!(s>0))throw new Error("Tried to create degenerate segment at [".concat(t.x,", ").concat(t.y,"]"));i=n,a=t,o=-1}return new e(new B(i,!0),new B(a,!1),[r],[o])}}]),e}(),I=function(){function e(n,r,i){if(t(this,e),!Array.isArray(n)||0===n.length)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=r,this.isExterior=i,this.segments=[],"number"!=typeof n[0][0]||"number"!=typeof n[0][1])throw new Error("Input geometry is not a valid Polygon or MultiPolygon");var a=M.round(n[0][0],n[0][1]);this.bbox={ll:{x:a.x,y:a.y},ur:{x:a.x,y:a.y}};for(var o=a,s=1,l=n.length;s<l;s++){if("number"!=typeof n[s][0]||"number"!=typeof n[s][1])throw new Error("Input geometry is not a valid Polygon or MultiPolygon");var h=M.round(n[s][0],n[s][1]);h.x===o.x&&h.y===o.y||(this.segments.push(D.fromRing(o,h,this)),h.x<this.bbox.ll.x&&(this.bbox.ll.x=h.x),h.y<this.bbox.ll.y&&(this.bbox.ll.y=h.y),h.x>this.bbox.ur.x&&(this.bbox.ur.x=h.x),h.y>this.bbox.ur.y&&(this.bbox.ur.y=h.y),o=h)}a.x===o.x&&a.y===o.y||this.segments.push(D.fromRing(o,a,this))}return r(e,[{key:"getSweepEvents",value:function(){for(var t=[],e=0,n=this.segments.length;e<n;e++){var r=this.segments[e];t.push(r.leftSE),t.push(r.rightSE)}return t}}]),e}(),T=function(){function e(n,r){if(t(this,e),!Array.isArray(n))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new I(n[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(var i=1,a=n.length;i<a;i++){var o=new I(n[i],this,!1);o.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=o.bbox.ll.x),o.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=o.bbox.ll.y),o.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=o.bbox.ur.x),o.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=o.bbox.ur.y),this.interiorRings.push(o)}this.multiPoly=r}return r(e,[{key:"getSweepEvents",value:function(){for(var t=this.exteriorRing.getSweepEvents(),e=0,n=this.interiorRings.length;e<n;e++)for(var r=this.interiorRings[e].getSweepEvents(),i=0,a=r.length;i<a;i++)t.push(r[i]);return t}}]),e}(),j=function(){function e(n,r){if(t(this,e),!Array.isArray(n))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{"number"==typeof n[0][0][0]&&(n=[n])}catch(s){}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(var i=0,a=n.length;i<a;i++){var o=new T(n[i],this);o.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=o.bbox.ll.x),o.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=o.bbox.ll.y),o.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=o.bbox.ur.x),o.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=o.bbox.ur.y),this.polys.push(o)}this.isSubject=r}return r(e,[{key:"getSweepEvents",value:function(){for(var t=[],e=0,n=this.polys.length;e<n;e++)for(var r=this.polys[e].getSweepEvents(),i=0,a=r.length;i<a;i++)t.push(r[i]);return t}}]),e}(),A=function(){function e(n){t(this,e),this.events=n;for(var r=0,i=n.length;r<i;r++)n[r].segment.ringOut=this;this.poly=null}return r(e,null,[{key:"factory",value:function(t){for(var n=[],r=0,i=t.length;r<i;r++){var a=t[r];if(a.isInResult()&&!a.ringOut){for(var o=null,s=a.leftSE,l=a.rightSE,h=[s],u=s.point,c=[];o=s,s=l,h.push(s),s.point!==u;)for(;;){var f=s.getAvailableLinkedEvents();if(0===f.length){var p=h[0].point,d=h[h.length-1].point;throw new Error("Unable to complete output ring starting at [".concat(p.x,",")+" ".concat(p.y,"]. Last matching segment found ends at")+" [".concat(d.x,", ").concat(d.y,"]."))}if(1===f.length){l=f[0].otherSE;break}for(var g=null,m=0,_=c.length;m<_;m++)if(c[m].point===s.point){g=m;break}if(null===g){c.push({index:h.length,point:s.point});var y=s.getLeftmostComparator(o);l=f.sort(y)[0].otherSE;break}var v=c.splice(g)[0],b=h.splice(v.index);b.unshift(b[0].otherSE),n.push(new e(b.reverse()))}n.push(new e(h))}}return n}}]),r(e,[{key:"getGeom",value:function(){for(var t=this.events[0].point,e=[t],n=1,r=this.events.length-1;n<r;n++){var i=this.events[n].point,a=this.events[n+1].point;0!==P(i,t,a)&&(e.push(i),t=i)}if(1===e.length)return null;var o=e[0],s=e[1];0===P(o,t,s)&&e.shift(),e.push(e[0]);for(var l=this.isExteriorRing()?1:-1,h=this.isExteriorRing()?0:e.length-1,u=this.isExteriorRing()?e.length:-1,c=[],f=h;f!=u;f+=l)c.push([e[f].x,e[f].y]);return c}},{key:"isExteriorRing",value:function(){if(this._isExteriorRing===undefined){var t=this.enclosingRing();this._isExteriorRing=!t||!t.isExteriorRing()}return this._isExteriorRing}},{key:"enclosingRing",value:function(){return this._enclosingRing===undefined&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}},{key:"_calcEnclosingRing",value:function(){for(var t=this.events[0],e=1,n=this.events.length;e<n;e++){var r=this.events[e];B.compare(t,r)>0&&(t=r)}for(var i=t.segment.prevInResult(),a=i?i.prevInResult():null;;){if(!i)return null;if(!a)return i.ringOut;if(a.ringOut!==i.ringOut)return a.ringOut.enclosingRing()!==i.ringOut?i.ringOut:i.ringOut.enclosingRing();i=a.prevInResult(),a=i?i.prevInResult():null}}}]),e}(),G=function(){function e(n){t(this,e),this.exteriorRing=n,n.poly=this,this.interiorRings=[]}return r(e,[{key:"addInterior",value:function(t){this.interiorRings.push(t),t.poly=this}},{key:"getGeom",value:function(){var t=[this.exteriorRing.getGeom()];if(null===t[0])return null;for(var e=0,n=this.interiorRings.length;e<n;e++){var r=this.interiorRings[e].getGeom();null!==r&&t.push(r)}return t}}]),e}(),N=function(){function e(n){t(this,e),this.rings=n,this.polys=this._composePolys(n)}return r(e,[{key:"getGeom",value:function(){for(var t=[],e=0,n=this.polys.length;e<n;e++){var r=this.polys[e].getGeom();null!==r&&t.push(r)}return t}},{key:"_composePolys",value:function(t){for(var e=[],n=0,r=t.length;n<r;n++){var i=t[n];if(!i.poly)if(i.isExteriorRing())e.push(new G(i));else{var a=i.enclosingRing();a.poly||e.push(new G(a)),a.poly.addInterior(i)}}return e}}]),e}(),z=function(){function e(n){var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:D.compare;t(this,e),this.queue=n,this.tree=new u(r),this.segments=[]}return r(e,[{key:"process",value:function(t){var e=t.segment,n=[];if(t.consumedBy)return t.isLeft?this.queue.remove(t.otherSE):this.tree.remove(e),n;var r=t.isLeft?this.tree.insert(e):this.tree.find(e);if(!r)throw new Error("Unable to find segment #".concat(e.id," ")+"[".concat(e.leftSE.point.x,", ").concat(e.leftSE.point.y,"] -> ")+"[".concat(e.rightSE.point.x,", ").concat(e.rightSE.point.y,"] ")+"in SweepLine tree. Please submit a bug report.");for(var i=r,a=r,o=undefined,s=undefined;o===undefined;)null===(i=this.tree.prev(i))?o=null:i.key.consumedBy===undefined&&(o=i.key);for(;s===undefined;)null===(a=this.tree.next(a))?s=null:a.key.consumedBy===undefined&&(s=a.key);if(t.isLeft){var l=null;if(o){var h=o.getIntersection(e);if(null!==h&&(e.isAnEndpoint(h)||(l=h),!o.isAnEndpoint(h)))for(var u=this._splitSafely(o,h),c=0,f=u.length;c<f;c++)n.push(u[c])}var p=null;if(s){var d=s.getIntersection(e);if(null!==d&&(e.isAnEndpoint(d)||(p=d),!s.isAnEndpoint(d)))for(var g=this._splitSafely(s,d),m=0,_=g.length;m<_;m++)n.push(g[m])}if(null!==l||null!==p){var y=null;y=null===l?p:null===p||B.comparePoints(l,p)<=0?l:p,this.queue.remove(e.rightSE),n.push(e.rightSE);for(var v=e.split(y),b=0,L=v.length;b<L;b++)n.push(v[b])}n.length>0?(this.tree.remove(e),n.push(t)):(this.segments.push(e),e.prev=o)}else{if(o&&s){var k=o.getIntersection(s);if(null!==k){if(!o.isAnEndpoint(k))for(var M=this._splitSafely(o,k),x=0,w=M.length;x<w;x++)n.push(M[x]);if(!s.isAnEndpoint(k))for(var P=this._splitSafely(s,k),C=0,E=P.length;C<E;C++)n.push(P[C])}}this.tree.remove(e)}return n}},{key:"_splitSafely",value:function(t,e){this.tree.remove(t);var n=t.rightSE;this.queue.remove(n);var r=t.split(e);return r.push(n),t.consumedBy===undefined&&this.tree.insert(t),r}}]),e}(),F=void 0!==e&&e.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,V=void 0!==e&&e.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6,U=new(function(){function e(){t(this,e)}return r(e,[{key:"run",value:function(t,e,n){U.type=t,M.reset();for(var r=[new j(e,!0)],i=0,a=n.length;i<a;i++)r.push(new j(n[i],!1));if(U.numMultiPolys=r.length,"difference"===U.type)for(var o=r[0],s=1;s<r.length;)null!==_(r[s].bbox,o.bbox)?s++:r.splice(s,1);if("intersection"===U.type)for(var l=0,h=r.length;l<h;l++)for(var c=r[l],f=l+1,p=r.length;f<p;f++)if(null===_(c.bbox,r[f].bbox))return[];for(var d=new u(B.compare),g=0,m=r.length;g<m;g++)for(var y=r[g].getSweepEvents(),v=0,b=y.length;v<b;v++)if(d.insert(y[v]),d.size>F)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big). Please file a bug report.");for(var L=new z(d),k=d.size,x=d.pop();x;){var w=x.key;if(d.size===k){var P=w.segment;throw new Error("Unable to pop() ".concat(w.isLeft?"left":"right"," SweepEvent ")+"[".concat(w.point.x,", ").concat(w.point.y,"] from segment #").concat(P.id," ")+"[".concat(P.leftSE.point.x,", ").concat(P.leftSE.point.y,"] -> ")+"[".concat(P.rightSE.point.x,", ").concat(P.rightSE.point.y,"] from queue. ")+"Please file a bug report.")}if(d.size>F)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big). Please file a bug report.");if(L.segments.length>V)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments). Please file a bug report.");for(var C=L.process(w),E=0,S=C.length;E<S;E++){var O=C[E];O.consumedBy===undefined&&d.insert(O)}k=d.size,x=d.pop()}M.reset();var R=A.factory(L.segments);return new N(R).getGeom()}}]),e}());return{union:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return U.run("union",t,n)},intersection:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return U.run("intersection",t,n)},xor:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return U.run("xor",t,n)},difference:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return U.run("difference",t,n)}}}()}).call(this,n(152))},function(t,e,n){var r=n(17)(n(4),"Map");t.exports=r},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(83))},function(t,e,n){var r=n(90),i=n(97),a=n(99),o=n(100),s=n(101);function l(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}l.prototype.clear=r,l.prototype["delete"]=i,l.prototype.get=a,l.prototype.has=o,l.prototype.set=s,t.exports=l},function(t,e,n){var r=n(20),i=n(13);t.exports=function(t,e,n){(n!==undefined&&!i(t[e],n)||n===undefined&&!(e in t))&&r(t,e,n)}},function(t,e,n){var r=n(17),i=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t}catch(e){}}();t.exports=i},function(t,e,n){var r=n(112)(Object.getPrototypeOf,Object);t.exports=r},function(t,e){var n=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||n)}},function(t,e,n){(function(t){var r=n(4),i=n(115),a=e&&!e.nodeType&&e,o=a&&"object"==typeof t&&t&&!t.nodeType&&t,s=o&&o.exports===a?r.Buffer:undefined,l=(s?s.isBuffer:undefined)||i;t.exports=l}).call(this,n(21)(t))},function(t,e,n){var r=n(117),i=n(118),a=n(119),o=a&&a.isTypedArray,s=o?i(o):r;t.exports=s},function(t,e){t.exports=function(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]}},function(t,e,n){var r=n(123),i=n(125),a=n(23);t.exports=function(t){return a(t)?r(t,!0):i(t)}},function(t,e){t.exports=function(t){return t}},function(t,e,n){var r=n(6),i=n(137),a=n(138),o=n(141);t.exports=function(t,e){return r(t)?t:i(t,e)?[t]:a(o(t))}},function(t,e,n){var r=n(26);t.exports=function(t){if("string"==typeof t||r(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(16);e["default"]=function(t){var e=[Infinity,Infinity,-Infinity,-Infinity];return r.coordEach(t,(function(t){e[0]>t[0]&&(e[0]=t[0]),e[1]>t[1]&&(e[1]=t[1]),e[2]<t[0]&&(e[2]=t[0]),e[3]<t[1]&&(e[3]=t[1])})),e}},function(t){t.exports=JSON.parse('{"name":"@geoman-io/leaflet-geoman-free","version":"2.11.3","description":"A Leaflet Plugin For Editing Geometry Layers in Leaflet 1.0","keywords":["leaflet","geoman","polygon management","geometry editing","map data","map overlay","polygon","geojson","leaflet-draw","data-field-geojson","ui-leaflet-draw"],"files":["dist"],"main":"dist/leaflet-geoman.min.js","types":"dist/leaflet-geoman.d.ts","dependencies":{"@turf/boolean-contains":"6.3.0","@turf/kinks":"6.3.0","@turf/line-intersect":"6.3.0","@turf/line-split":"6.3.0","lodash":"4.17.21","polygon-clipping":"0.15.3"},"devDependencies":{"@babel/core":"7.14.0","@babel/preset-env":"7.14.1","@types/leaflet":"^1.7.0","babel-loader":"8.2.2","copy-webpack-plugin":"8.1.1","css-loader":"5.2.4","cypress":"6.9.1","cypress-wait-until":"1.7.1","eslint":"7.26.0","eslint-config-airbnb-base":"14.2.1","eslint-config-prettier":"8.3.0","eslint-plugin-cypress":"2.11.3","eslint-plugin-import":"2.22.1","file-loader":"6.2.0","leaflet":"1.7.1","mini-css-extract-plugin":"1.6.0","prettier":"2.2.1","prosthetic-hand":"1.3.1","terser-webpack-plugin":"^5.1.2","url-loader":"4.1.1","webpack":"5.36.2","webpack-cli":"4.7.0"},"peerDependencies":{"leaflet":"^1.2.0"},"scripts":{"start":"npm run dev","dev":"./node_modules/.bin/webpack --config=webpack.dev.js","test":"./node_modules/.bin/cypress run","cypress":"./node_modules/.bin/cypress open","build":"./node_modules/.bin/webpack --config=webpack.build.js","prepare":"npm run build","eslint-check":"eslint --print-config . | eslint-config-prettier-check","eslint":"eslint src/ --fix","prettier":"prettier --write \'{src,cypress}/**/*.{js,css}\'","lint":"npm run eslint && npm run prettier"},"repository":{"type":"git","url":"git://github.com/geoman-io/leaflet-geoman.git"},"author":{"name":"Sumit Kumar","email":"sumit@geoman.io","url":"http://geoman.io/leaflet-geoman"},"license":"MIT","bugs":{"url":"https://github.com/geoman-io/leaflet-geoman/issues"},"homepage":"https://geoman.io/leaflet-geoman","prettier":{"trailingComma":"es5","tabWidth":2,"semi":true,"singleQuote":true}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Click to place marker","firstVertex":"Click to place first vertex","continueLine":"Click to continue drawing","finishLine":"Click any existing marker to finish","finishPoly":"Click first marker to finish","finishRect":"Click to finish","startCircle":"Click to place circle center","finishCircle":"Click to finish circle","placeCircleMarker":"Click to place circle marker"},"actions":{"finish":"Finish","cancel":"Cancel","removeLastVertex":"Remove Last Vertex"},"buttonTitles":{"drawMarkerButton":"Draw Marker","drawPolyButton":"Draw Polygons","drawLineButton":"Draw Polyline","drawCircleButton":"Draw Circle","drawRectButton":"Draw Rectangle","editButton":"Edit Layers","dragButton":"Drag Layers","cutButton":"Cut Layers","deleteButton":"Remove Layers","drawCircleMarkerButton":"Draw Circle Marker","snappingButton":"Snap dragged marker to other layers and vertices","pinningButton":"Pin shared vertices together","rotateButton":"Rotate Layers"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Platziere den Marker mit Klick","firstVertex":"Platziere den ersten Marker mit Klick","continueLine":"Klicke, um weiter zu zeichnen","finishLine":"Beende mit Klick auf existierenden Marker","finishPoly":"Beende mit Klick auf ersten Marker","finishRect":"Beende mit Klick","startCircle":"Platziere das Kreiszentrum mit Klick","finishCircle":"Beende den Kreis mit Klick","placeCircleMarker":"Platziere den Kreismarker mit Klick"},"actions":{"finish":"Beenden","cancel":"Abbrechen","removeLastVertex":"Letzten Vertex löschen"},"buttonTitles":{"drawMarkerButton":"Marker zeichnen","drawPolyButton":"Polygon zeichnen","drawLineButton":"Polyline zeichnen","drawCircleButton":"Kreis zeichnen","drawRectButton":"Rechteck zeichnen","editButton":"Layer editieren","dragButton":"Layer bewegen","cutButton":"Layer schneiden","deleteButton":"Layer löschen","drawCircleMarkerButton":"Kreismarker zeichnen","snappingButton":"Bewegter Layer an andere Layer oder Vertexe einhacken","pinningButton":"Vertexe an der gleichen Position verknüpfen","rotateButton":"Layer drehen"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Clicca per posizionare un Marker","firstVertex":"Clicca per posizionare il primo vertice","continueLine":"Clicca per continuare a disegnare","finishLine":"Clicca qualsiasi marker esistente per terminare","finishPoly":"Clicca il primo marker per terminare","finishRect":"Clicca per terminare","startCircle":"Clicca per posizionare il punto centrale del cerchio","finishCircle":"Clicca per terminare il cerchio","placeCircleMarker":"Clicca per posizionare un Marker del cherchio"},"actions":{"finish":"Termina","cancel":"Annulla","removeLastVertex":"Rimuovi l\'ultimo vertice"},"buttonTitles":{"drawMarkerButton":"Disegna Marker","drawPolyButton":"Disegna Poligoni","drawLineButton":"Disegna Polilinea","drawCircleButton":"Disegna Cerchio","drawRectButton":"Disegna Rettangolo","editButton":"Modifica Livelli","dragButton":"Sposta Livelli","cutButton":"Ritaglia Livelli","deleteButton":"Elimina Livelli","drawCircleMarkerButton":"Disegna Marker del Cerchio","snappingButton":"Snap ha trascinato il pennarello su altri strati e vertici","pinningButton":"Pin condiviso vertici insieme"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Klik untuk menempatkan marker","firstVertex":"Klik untuk menempatkan vertex pertama","continueLine":"Klik untuk meneruskan digitasi","finishLine":"Klik pada sembarang marker yang ada untuk mengakhiri","finishPoly":"Klik marker pertama untuk mengakhiri","finishRect":"Klik untuk mengakhiri","startCircle":"Klik untuk menempatkan titik pusat lingkaran","finishCircle":"Klik untuk mengakhiri lingkaran","placeCircleMarker":"Klik untuk menempatkan penanda lingkarann"},"actions":{"finish":"Selesai","cancel":"Batal","removeLastVertex":"Hilangkan Vertex Terakhir"},"buttonTitles":{"drawMarkerButton":"Digitasi Marker","drawPolyButton":"Digitasi Polygon","drawLineButton":"Digitasi Polyline","drawCircleButton":"Digitasi Lingkaran","drawRectButton":"Digitasi Segi Empat","editButton":"Edit Layer","dragButton":"Geser Layer","cutButton":"Potong Layer","deleteButton":"Hilangkan Layer","drawCircleMarkerButton":"Digitasi Penanda Lingkaran","snappingButton":"Jepretkan penanda yang ditarik ke lapisan dan simpul lain","pinningButton":"Sematkan simpul bersama bersama"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Adaugă un punct","firstVertex":"Apasă aici pentru a adăuga primul Vertex","continueLine":"Apasă aici pentru a continua desenul","finishLine":"Apasă pe orice obiect pentru a finisa desenul","finishPoly":"Apasă pe primul obiect pentru a finisa","finishRect":"Apasă pentru a finisa","startCircle":"Apasă pentru a desena un cerc","finishCircle":"Apasă pentru a finisa un cerc","placeCircleMarker":"Adaugă un punct"},"actions":{"finish":"Termină","cancel":"Anulează","removeLastVertex":"Șterge ultimul Vertex"},"buttonTitles":{"drawMarkerButton":"Adaugă o bulină","drawPolyButton":"Desenează un poligon","drawLineButton":"Desenează o linie","drawCircleButton":"Desenează un cerc","drawRectButton":"Desenează un dreptunghi","editButton":"Editează straturile","dragButton":"Mută straturile","cutButton":"Taie straturile","deleteButton":"Șterge straturile","drawCircleMarkerButton":"Desenează marcatorul cercului","snappingButton":"Fixați marcatorul glisat pe alte straturi și vârfuri","pinningButton":"Fixați vârfurile partajate împreună"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Нажмите, чтобы нанести маркер","firstVertex":"Нажмите, чтобы нанести первый объект","continueLine":"Нажмите, чтобы продолжить рисование","finishLine":"Нажмите любой существующий маркер для завершения","finishPoly":"Выберите первую точку, чтобы закончить","finishRect":"Нажмите, чтобы закончить","startCircle":"Нажмите, чтобы добавить центр круга","finishCircle":"Нажмите, чтобы задать радиус","placeCircleMarker":"Нажмите, чтобы нанести круговой маркер"},"actions":{"finish":"Завершить","cancel":"Отменить","removeLastVertex":"Отменить последнее действие"},"buttonTitles":{"drawMarkerButton":"Добавить маркер","drawPolyButton":"Рисовать полигон","drawLineButton":"Рисовать кривую","drawCircleButton":"Рисовать круг","drawRectButton":"Рисовать прямоугольник","editButton":"Редактировать слой","dragButton":"Перенести слой","cutButton":"Вырезать слой","deleteButton":"Удалить слой","drawCircleMarkerButton":"Добавить круговой маркер","snappingButton":"Привязать перетаскиваемый маркер к другим слоям и вершинам","pinningButton":"Связать общие точки вместе"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Presiona para colocar un marcador","firstVertex":"Presiona para colocar el primer vértice","continueLine":"Presiona para continuar dibujando","finishLine":"Presiona cualquier marcador existente para finalizar","finishPoly":"Presiona el primer marcador para finalizar","finishRect":"Presiona para finalizar","startCircle":"Presiona para colocar el centro del circulo","finishCircle":"Presiona para finalizar el circulo","placeCircleMarker":"Presiona para colocar un marcador de circulo"},"actions":{"finish":"Finalizar","cancel":"Cancelar","removeLastVertex":"Remover ultimo vértice"},"buttonTitles":{"drawMarkerButton":"Dibujar Marcador","drawPolyButton":"Dibujar Polígono","drawLineButton":"Dibujar Línea","drawCircleButton":"Dibujar Circulo","drawRectButton":"Dibujar Rectángulo","editButton":"Editar Capas","dragButton":"Arrastrar Capas","cutButton":"Cortar Capas","deleteButton":"Remover Capas","drawCircleMarkerButton":"Dibujar Marcador de Circulo","snappingButton":"El marcador de Snap arrastrado a otras capas y vértices","pinningButton":"Fijar juntos los vértices compartidos"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Klik om een marker te plaatsen","firstVertex":"Klik om het eerste punt te plaatsen","continueLine":"Klik om te blijven tekenen","finishLine":"Klik op een bestaand punt om te beëindigen","finishPoly":"Klik op het eerst punt om te beëindigen","finishRect":"Klik om te beëindigen","startCircle":"Klik om het middelpunt te plaatsen","finishCircle":"Klik om de cirkel te beëindigen","placeCircleMarker":"Klik om een marker te plaatsen"},"actions":{"finish":"Bewaar","cancel":"Annuleer","removeLastVertex":"Verwijder laatste punt"},"buttonTitles":{"drawMarkerButton":"Plaats Marker","drawPolyButton":"Teken een vlak","drawLineButton":"Teken een lijn","drawCircleButton":"Teken een cirkel","drawRectButton":"Teken een vierkant","editButton":"Bewerk","dragButton":"Verplaats","cutButton":"Knip","deleteButton":"Verwijder","drawCircleMarkerButton":"Plaats Marker","snappingButton":"Snap gesleepte marker naar andere lagen en hoekpunten","pinningButton":"Speld gedeelde hoekpunten samen"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Cliquez pour placer un marqueur","firstVertex":"Cliquez pour placer le premier sommet","continueLine":"Cliquez pour continuer à dessiner","finishLine":"Cliquez sur n\'importe quel marqueur pour terminer","finishPoly":"Cliquez sur le premier marqueur pour terminer","finishRect":"Cliquez pour terminer","startCircle":"Cliquez pour placer le centre du cercle","finishCircle":"Cliquez pour finir le cercle","placeCircleMarker":"Cliquez pour placer le marqueur circulaire"},"actions":{"finish":"Terminer","cancel":"Annuler","removeLastVertex":"Retirer le dernier sommet"},"buttonTitles":{"drawMarkerButton":"Placer des marqueurs","drawPolyButton":"Dessiner des polygones","drawLineButton":"Dessiner des polylignes","drawCircleButton":"Dessiner un cercle","drawRectButton":"Dessiner un rectangle","editButton":"Éditer des calques","dragButton":"Déplacer des calques","cutButton":"Couper des calques","deleteButton":"Supprimer des calques","drawCircleMarkerButton":"Dessiner un marqueur circulaire","snappingButton":"Glisser le marqueur vers d\'autres couches et sommets","pinningButton":"Épingler ensemble les sommets partagés","rotateButton":"Tourner des calques"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"单击放置标记","firstVertex":"单击放置首个顶点","continueLine":"单击继续绘制","finishLine":"单击任何存在的标记以完成","finishPoly":"单击第一个标记以完成","finishRect":"单击完成","startCircle":"单击放置圆心","finishCircle":"单击完成圆形","placeCircleMarker":"点击放置圆形标记"},"actions":{"finish":"完成","cancel":"取消","removeLastVertex":"移除最后的顶点"},"buttonTitles":{"drawMarkerButton":"绘制标记","drawPolyButton":"绘制多边形","drawLineButton":"绘制线段","drawCircleButton":"绘制圆形","drawRectButton":"绘制长方形","editButton":"编辑图层","dragButton":"拖拽图层","cutButton":"剪切图层","deleteButton":"删除图层","drawCircleMarkerButton":"画圆圈标记","snappingButton":"将拖动的标记捕捉到其他图层和顶点","pinningButton":"将共享顶点固定在一起"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"單擊放置標記","firstVertex":"單擊放置第一個頂點","continueLine":"單擊繼續繪製","finishLine":"單擊任何存在的標記以完成","finishPoly":"單擊第一個標記以完成","finishRect":"單擊完成","startCircle":"單擊放置圓心","finishCircle":"單擊完成圓形","placeCircleMarker":"點擊放置圓形標記"},"actions":{"finish":"完成","cancel":"取消","removeLastVertex":"移除最後一個頂點"},"buttonTitles":{"drawMarkerButton":"放置標記","drawPolyButton":"繪製多邊形","drawLineButton":"繪製線段","drawCircleButton":"繪製圓形","drawRectButton":"繪製方形","editButton":"編輯圖形","dragButton":"移動圖形","cutButton":"裁切圖形","deleteButton":"刪除圖形","drawCircleMarkerButton":"畫圓圈標記","snappingButton":"將拖動的標記對齊到其他圖層和頂點","pinningButton":"將共享頂點固定在一起"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Clique para posicionar o marcador","firstVertex":"Clique para posicionar o primeiro vértice","continueLine":"Clique para continuar desenhando","finishLine":"Clique em qualquer marcador existente para finalizar","finishPoly":"Clique no primeiro ponto para fechar o polígono","finishRect":"Clique para finalizar","startCircle":"Clique para posicionar o centro do círculo","finishCircle":"Clique para fechar o círculo","placeCircleMarker":"Clique para posicionar o marcador circular"},"actions":{"finish":"Finalizar","cancel":"Cancelar","removeLastVertex":"Remover último vértice"},"buttonTitles":{"drawMarkerButton":"Desenhar um marcador","drawPolyButton":"Desenhar um polígono","drawLineButton":"Desenhar uma polilinha","drawCircleButton":"Desenhar um círculo","drawRectButton":"Desenhar um retângulo","editButton":"Editar camada(s)","dragButton":"Mover camada(s)","cutButton":"Recortar camada(s)","deleteButton":"Remover camada(s)","drawCircleMarkerButton":"Marcador de círculos de desenho","snappingButton":"Marcador arrastado para outras camadas e vértices","pinningButton":"Vértices compartilhados de pinos juntos"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Kliknij, aby ustawić znacznik","firstVertex":"Kliknij, aby ustawić pierwszy punkt","continueLine":"Kliknij, aby kontynuować rysowanie","finishLine":"Kliknij dowolny punkt, aby zakończyć","finishPoly":"Kliknij pierwszy punkt, aby zakończyć","finishRect":"Kliknij, aby zakończyć","startCircle":"Kliknij, aby ustawić środek koła","finishCircle":"Kliknij, aby zakończyć rysowanie koła","placeCircleMarker":"Kliknij, aby ustawić okrągły znacznik"},"actions":{"finish":"Zakończ","cancel":"Anuluj","removeLastVertex":"Usuń ostatni punkt"},"buttonTitles":{"drawMarkerButton":"Narysuj znacznik","drawPolyButton":"Narysuj wielokąt","drawLineButton":"Narysuj ścieżkę","drawCircleButton":"Narysuj koło","drawRectButton":"Narysuj prostokąt","editButton":"Edytuj","dragButton":"Przesuń","cutButton":"Wytnij","deleteButton":"Usuń","drawCircleMarkerButton":"Narysuj okrągły znacznik","snappingButton":"Snap przeciągnięty marker na inne warstwy i wierzchołki","pinningButton":"Sworzeń wspólne wierzchołki razem"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Klicka för att placera markör","firstVertex":"Klicka för att placera första hörnet","continueLine":"Klicka för att fortsätta rita","finishLine":"Klicka på en existerande punkt för att slutföra","finishPoly":"Klicka på den första punkten för att slutföra","finishRect":"Klicka för att slutföra","startCircle":"Klicka för att placera cirkelns centrum","finishCircle":"Klicka för att slutföra cirkeln","placeCircleMarker":"Klicka för att placera cirkelmarkör"},"actions":{"finish":"Slutför","cancel":"Avbryt","removeLastVertex":"Ta bort sista hörnet"},"buttonTitles":{"drawMarkerButton":"Rita Markör","drawPolyButton":"Rita Polygoner","drawLineButton":"Rita Linje","drawCircleButton":"Rita Cirkel","drawRectButton":"Rita Rektangel","editButton":"Redigera Lager","dragButton":"Dra Lager","cutButton":"Klipp i Lager","deleteButton":"Ta bort Lager","drawCircleMarkerButton":"Rita Cirkelmarkör","snappingButton":"Snäpp dra markören till andra lager och hörn","pinningButton":"Fäst delade hörn tillsammans"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Κάντε κλικ για να τοποθετήσετε Δείκτη","firstVertex":"Κάντε κλικ για να τοποθετήσετε το πρώτο σημείο","continueLine":"Κάντε κλικ για να συνεχίσετε να σχεδιάζετε","finishLine":"Κάντε κλικ σε οποιονδήποτε υπάρχον σημείο για να ολοκληρωθεί","finishPoly":"Κάντε κλικ στο πρώτο σημείο για να τελειώσετε","finishRect":"Κάντε κλικ για να τελειώσετε","startCircle":"Κάντε κλικ για να τοποθετήσετε κέντρο Κύκλου","finishCircle":"Κάντε κλικ για να ολοκληρώσετε τον Κύκλο","placeCircleMarker":"Κάντε κλικ για να τοποθετήσετε Κυκλικό Δείκτη"},"actions":{"finish":"Τέλος","cancel":"Ακύρωση","removeLastVertex":"Κατάργηση τελευταίου σημείου"},"buttonTitles":{"drawMarkerButton":"Σχεδίαση Δείκτη","drawPolyButton":"Σχεδίαση Πολυγώνου","drawLineButton":"Σχεδίαση Γραμμής","drawCircleButton":"Σχεδίαση Κύκλου","drawRectButton":"Σχεδίαση Ορθογωνίου","editButton":"Επεξεργασία Επιπέδων","dragButton":"Μεταφορά Επιπέδων","cutButton":"Αποκοπή Επιπέδων","deleteButton":"Κατάργηση Επιπέδων","drawCircleMarkerButton":"Σχεδίαση Κυκλικού Δείκτη","snappingButton":"Προσκόλληση του Δείκτη μεταφοράς σε άλλα Επίπεδα και Κορυφές","pinningButton":"Περικοπή κοινών κορυφών μαζί"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Kattintson a jelölő elhelyezéséhez","firstVertex":"Kattintson az első pont elhelyezéséhez","continueLine":"Kattintson a következő pont elhelyezéséhez","finishLine":"A befejezéshez kattintson egy meglévő pontra","finishPoly":"A befejezéshez kattintson az első pontra","finishRect":"Kattintson a befejezéshez","startCircle":"Kattintson a kör középpontjának elhelyezéséhez","finishCircle":"Kattintson a kör befejezéséhez","placeCircleMarker":"Kattintson a körjelölő elhelyezéséhez"},"actions":{"finish":"Befejezés","cancel":"Mégse","removeLastVertex":"Utolsó pont eltávolítása"},"buttonTitles":{"drawMarkerButton":"Jelölő rajzolása","drawPolyButton":"Poligon rajzolása","drawLineButton":"Vonal rajzolása","drawCircleButton":"Kör rajzolása","drawRectButton":"Négyzet rajzolása","editButton":"Elemek szerkesztése","dragButton":"Elemek mozgatása","cutButton":"Elemek vágása","deleteButton":"Elemek törlése","drawCircleMarkerButton":"Kör jelölő rajzolása","snappingButton":"Kapcsolja a jelöltőt másik elemhez vagy ponthoz","pinningButton":"Közös pontok összekötése"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Tryk for at placere en markør","firstVertex":"Tryk for at placere det første punkt","continueLine":"Tryk for at fortsætte linjen","finishLine":"Tryk på et eksisterende punkt for at afslutte","finishPoly":"Tryk på det første punkt for at afslutte","finishRect":"Tryk for at afslutte","startCircle":"Tryk for at placere cirklens center","finishCircle":"Tryk for at afslutte cirklen","placeCircleMarker":"Tryk for at placere en cirkelmarkør"},"actions":{"finish":"Afslut","cancel":"Afbryd","removeLastVertex":"Fjern sidste punkt"},"buttonTitles":{"drawMarkerButton":"Placer markør","drawPolyButton":"Tegn polygon","drawLineButton":"Tegn linje","drawCircleButton":"Tegn cirkel","drawRectButton":"Tegn firkant","editButton":"Rediger","dragButton":"Træk","cutButton":"Klip","deleteButton":"Fjern","drawCircleMarkerButton":"Tegn cirkelmarkør","snappingButton":"Fastgør trukket markør til andre elementer","pinningButton":"Sammenlæg delte elementer"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Klikk for å plassere punkt","firstVertex":"Klikk for å plassere første punkt","continueLine":"Klikk for å tegne videre","finishLine":"Klikk på et eksisterende punkt for å fullføre","finishPoly":"Klikk første punkt for å fullføre","finishRect":"Klikk for å fullføre","startCircle":"Klikk for å sette sirkel midtpunkt","finishCircle":"Klikk for å fullføre sirkel","placeCircleMarker":"Klikk for å plassere sirkel"},"actions":{"finish":"Fullfør","cancel":"Kanseller","removeLastVertex":"Fjern forrige punkt"},"buttonTitles":{"drawMarkerButton":"Tegn Punkt","drawPolyButton":"Tegn Flate","drawLineButton":"Tegn Linje","drawCircleButton":"Tegn Sirkel","drawRectButton":"Tegn rektangel","editButton":"Rediger Objekter","dragButton":"Dra Objekter","cutButton":"Kutt Objekter","deleteButton":"Fjern Objekter","drawCircleMarkerButton":"Tegn sirkel-punkt","snappingButton":"Fest dratt punkt til andre objekter og punkt","pinningButton":"Pin delte punkt sammen"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"کلیک برای جانمایی نشان","firstVertex":"کلیک برای رسم اولین رأس","continueLine":"کلیک برای ادامه رسم","finishLine":"کلیک روی هر نشان موجود برای پایان","finishPoly":"کلیک روی اولین نشان برای پایان","finishRect":"کلیک برای پایان","startCircle":"کلیک برای رسم مرکز دایره","finishCircle":"کلیک برای پایان رسم دایره","placeCircleMarker":"کلیک برای رسم نشان دایره"},"actions":{"finish":"پایان","cancel":"لفو","removeLastVertex":"حذف آخرین رأس"},"buttonTitles":{"drawMarkerButton":"درج نشان","drawPolyButton":"رسم چندضلعی","drawLineButton":"رسم خط","drawCircleButton":"رسم دایره","drawRectButton":"رسم چهارضلعی","editButton":"ویرایش لایه‌ها","dragButton":"جابجایی لایه‌ها","cutButton":"برش لایه‌ها","deleteButton":"حذف لایه‌ها","drawCircleMarkerButton":"رسم نشان دایره","snappingButton":"نشانگر را به لایه‌ها و رئوس دیگر بکشید","pinningButton":"رئوس مشترک را با هم پین کنید","rotateButton":"چرخش لایه"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Натисніть, щоб нанести маркер","firstVertex":"Натисніть, щоб нанести першу вершину","continueLine":"Натисніть, щоб продовжити малювати","finishLine":"Натисніть будь-який існуючий маркер для завершення","finishPoly":"Виберіть перший маркер, щоб завершити","finishRect":"Натисніть, щоб завершити","startCircle":"Натисніть, щоб додати центр кола","finishCircle":"Натисніть, щоб завершити коло","placeCircleMarker":"Натисніть, щоб нанести круговий маркер"},"actions":{"finish":"Завершити","cancel":"Відмінити","removeLastVertex":"Видалити попередню вершину"},"buttonTitles":{"drawMarkerButton":"Малювати маркер","drawPolyButton":"Малювати полігон","drawLineButton":"Малювати криву","drawCircleButton":"Малювати коло","drawRectButton":"Малювати прямокутник","editButton":"Редагувати шари","dragButton":"Перенести шари","cutButton":"Вирізати шари","deleteButton":"Видалити шари","drawCircleMarkerButton":"Малювати круговий маркер","snappingButton":"Прив’язати перетягнутий маркер до інших шарів та вершин","pinningButton":"Зв\'язати спільні вершини разом"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"İşaretçi yerleştirmek için tıklayın","firstVertex":"İlk tepe noktasını yerleştirmek için tıklayın","continueLine":"Çizime devam etmek için tıklayın","finishLine":"Bitirmek için mevcut herhangi bir işaretçiyi tıklayın","finishPoly":"Bitirmek için ilk işaretçiyi tıklayın","finishRect":"Bitirmek için tıklayın","startCircle":"Daire merkezine yerleştirmek için tıklayın","finishCircle":"Daireyi bitirmek için tıklayın","placeCircleMarker":"Daire işaretçisi yerleştirmek için tıklayın"},"actions":{"finish":"Bitir","cancel":"İptal","removeLastVertex":"Son köşeyi kaldır"},"buttonTitles":{"drawMarkerButton":"Çizim İşaretçisi","drawPolyButton":"Çokgenler çiz","drawLineButton":"Çoklu çizgi çiz","drawCircleButton":"Çember çiz","drawRectButton":"Dikdörtgen çiz","editButton":"Katmanları düzenle","dragButton":"Katmanları sürükle","cutButton":"Katmanları kes","deleteButton":"Katmanları kaldır","drawCircleMarkerButton":"Daire işaretçisi çiz","snappingButton":"Sürüklenen işaretçiyi diğer katmanlara ve köşelere yapıştır","pinningButton":"Paylaşılan köşeleri birbirine sabitle"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Kliknutím vytvoříte značku","firstVertex":"Kliknutím vytvoříte první objekt","continueLine":"Kliknutím pokračujte v kreslení","finishLine":"Kliknutí na libovolnou existující značku pro dokončení","finishPoly":"Vyberte první bod pro dokončení","finishRect":"Klikněte pro dokončení","startCircle":"Kliknutím přidejte střed kruhu","finishCircle":"Нажмите, чтобы задать радиус","placeCircleMarker":"Kliknutím nastavte poloměr"},"actions":{"finish":"Dokončit","cancel":"Zrušit","removeLastVertex":"Zrušit poslední akci"},"buttonTitles":{"drawMarkerButton":"Přidat značku","drawPolyButton":"Nakreslit polygon","drawLineButton":"Nakreslit křivku","drawCircleButton":"Nakreslit kruh","drawRectButton":"Nakreslit obdélník","editButton":"Upravit vrstvu","dragButton":"Přeneste vrstvu","cutButton":"Vyjmout vrstvu","deleteButton":"Smazat vrstvu","drawCircleMarkerButton":"Přidat kruhovou značku","snappingButton":"Navázat tažnou značku k dalším vrstvám a vrcholům","pinningButton":"Spojit společné body dohromady"}}')},function(t,e,n){var r=n(144),i=n(145);t.exports=function(t,e){return null!=t&&i(t,e,r)}},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{"default":t}};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n(42)),a=r(n(150)),o=r(n(151)),s=n(10);function l(t,e){var n,r=!1;for(n=0;n<t.coordinates.length;n++)if(m(t.coordinates[n],e.coordinates)){r=!0;break}return r}function h(t,e){for(var n=0,r=e.coordinates;n<r.length;n++){for(var i=r[n],a=!1,o=0,s=t.coordinates;o<s.length;o++){if(m(i,s[o])){a=!0;break}}if(!a)return!1}return!0}function u(t,e){for(var n=!1,r=0,i=e.coordinates;r<i.length;r++){var a=i[r];if(o["default"](a,t,{ignoreEndVertices:!0})&&(n=!0),!o["default"](a,t))return!1}return!!n}function c(t,e){for(var n=0,r=e.coordinates;n<r.length;n++){var i=r[n];if(!a["default"](i,t,{ignoreBoundary:!0}))return!1}return!0}function f(t,e){for(var n=!1,r=0,i=e.coordinates;r<i.length;r++){var a=i[r];if(o["default"]({type:"Point",coordinates:a},t,{ignoreEndVertices:!0})&&(n=!0),!o["default"]({type:"Point",coordinates:a},t,{ignoreEndVertices:!1}))return!1}return n}function p(t,e){var n=!1,r=0;if(!g(i["default"](t),i["default"](e)))return!1;for(;r<e.coordinates.length-1;r++){var o=_(e.coordinates[r],e.coordinates[r+1]);if(a["default"]({type:"Point",coordinates:o},t,{ignoreBoundary:!0})){n=!0;break}}return n}function d(t,e){if("Feature"===t.type&&null===t.geometry)return!1;if("Feature"===e.type&&null===e.geometry)return!1;if(!g(i["default"](t),i["default"](e)))return!1;for(var n=0,r=s.getGeom(e).coordinates;n<r.length;n++)for(var o=0,l=r[n];o<l.length;o++){var h=l[o];if(!a["default"](h,t))return!1}return!0}function g(t,e){return!(t[0]>e[0])&&(!(t[2]<e[2])&&(!(t[1]>e[1])&&!(t[3]<e[3])))}function m(t,e){return t[0]===e[0]&&t[1]===e[1]}function _(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2]}e["default"]=function(t,e){var n=s.getGeom(t),r=s.getGeom(e),i=s.getType(t),g=s.getType(e),_=s.getCoords(t),y=s.getCoords(e);switch(i){case"Point":switch(g){case"Point":return m(_,y);default:throw new Error("feature2 "+g+" geometry not supported")}case"MultiPoint":switch(g){case"Point":return l(n,r);case"MultiPoint":return h(n,r);default:throw new Error("feature2 "+g+" geometry not supported")}case"LineString":switch(g){case"Point":return o["default"](r,n,{ignoreEndVertices:!0});case"LineString":return f(n,r);case"MultiPoint":return u(n,r);default:throw new Error("feature2 "+g+" geometry not supported")}case"Polygon":switch(g){case"Point":return a["default"](r,n,{ignoreBoundary:!0});case"LineString":return p(n,r);case"Polygon":return d(n,r);case"MultiPoint":return c(n,r);default:throw new Error("feature2 "+g+" geometry not supported")}default:throw new Error("feature1 "+i+" geometry not supported")}},e.isPointInMultiPoint=l,e.isMultiPointInMultiPoint=h,e.isMultiPointOnLine=u,e.isMultiPointInPoly=c,e.isLineOnLine=f,e.isLineInPoly=p,e.isPolyInPoly=d,e.doBBoxOverlap=g,e.compareCoords=m,e.getMidpoint=_},function(t,e,n){t.exports=n(155)},function(t,e){Array.prototype.findIndex=Array.prototype.findIndex||function(t){if(null===this)throw new TypeError("Array.prototype.findIndex called on null or undefined");if("function"!=typeof t)throw new TypeError("callback must be a function");for(var e=Object(this),n=e.length>>>0,r=arguments[1],i=0;i<n;i++)if(t.call(r,e[i],i,e))return i;return-1},Array.prototype.find=Array.prototype.find||function(t){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof t)throw new TypeError("callback must be a function");for(var e=Object(this),n=e.length>>>0,r=arguments[1],i=0;i<n;i++){var a=e[i];if(t.call(r,a,i,e))return a}},"function"!=typeof Object.assign&&(Object.assign=function(t){"use strict";if(null==t)throw new TypeError("Cannot convert undefined or null to object");t=Object(t);for(var e=1;e<arguments.length;e++){var n=arguments[e];if(null!=n)for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}),[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach((function(t){t.hasOwnProperty("remove")||Object.defineProperty(t,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(t,e){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),r=n.length>>>0;if(0===r)return!1;var i,a,o=0|e,s=Math.max(o>=0?o:r-Math.abs(o),0);for(;s<r;){if((i=n[s])===(a=t)||"number"==typeof i&&"number"==typeof a&&isNaN(i)&&isNaN(a))return!0;s++}return!1}})},function(t,e,n){var r=n(71),i=n(31),a=n(102),o=n(104),s=n(2),l=n(38),h=n(37);t.exports=function u(t,e,n,c,f){t!==e&&a(e,(function(a,l){if(f||(f=new r),s(a))o(t,e,l,n,u,c,f);else{var p=c?c(h(t,l),a,l+"",t,e,f):undefined;p===undefined&&(p=a),i(t,l,p)}}),l)}},function(t,e,n){var r=n(11),i=n(77),a=n(78),o=n(79),s=n(80),l=n(81);function h(t){var e=this.__data__=new r(t);this.size=e.size}h.prototype.clear=i,h.prototype["delete"]=a,h.prototype.get=o,h.prototype.has=s,h.prototype.set=l,t.exports=h},function(t,e){t.exports=function(){this.__data__=[],this.size=0}},function(t,e,n){var r=n(12),i=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=r(e,t);return!(n<0)&&(n==e.length-1?e.pop():i.call(e,n,1),--this.size,!0)}},function(t,e,n){var r=n(12);t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?undefined:e[n][1]}},function(t,e,n){var r=n(12);t.exports=function(t){return r(this.__data__,t)>-1}},function(t,e,n){var r=n(12);t.exports=function(t,e){var n=this.__data__,i=r(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this}},function(t,e,n){var r=n(11);t.exports=function(){this.__data__=new r,this.size=0}},function(t,e){t.exports=function(t){var e=this.__data__,n=e["delete"](t);return this.size=e.size,n}},function(t,e){t.exports=function(t){return this.__data__.get(t)}},function(t,e){t.exports=function(t){return this.__data__.has(t)}},function(t,e,n){var r=n(11),i=n(28),a=n(30);t.exports=function(t,e){var n=this.__data__;if(n instanceof r){var o=n.__data__;if(!i||o.length<199)return o.push([t,e]),this.size=++n.size,this;n=this.__data__=new a(o)}return n.set(t,e),this.size=n.size,this}},function(t,e,n){var r=n(18),i=n(86),a=n(2),o=n(88),s=/^\[object .+?Constructor\]$/,l=Function.prototype,h=Object.prototype,u=l.toString,c=h.hasOwnProperty,f=RegExp("^"+u.call(c).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!a(t)||i(t))&&(r(t)?f:s).test(o(t))}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(19),i=Object.prototype,a=i.hasOwnProperty,o=i.toString,s=r?r.toStringTag:undefined;t.exports=function(t){var e=a.call(t,s),n=t[s];try{t[s]=undefined;var r=!0}catch(l){}var i=o.call(t);return r&&(e?t[s]=n:delete t[s]),i}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e,n){var r,i=n(87),a=(r=/[^.]+$/.exec(i&&i.keys&&i.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!a&&a in t}},function(t,e,n){var r=n(4)["__core-js_shared__"];t.exports=r},function(t,e){var n=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return n.call(t)}catch(e){}try{return t+""}catch(e){}}return""}},function(t,e){t.exports=function(t,e){return null==t?undefined:t[e]}},function(t,e,n){var r=n(91),i=n(11),a=n(28);t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(a||i),string:new r}}},function(t,e,n){var r=n(92),i=n(93),a=n(94),o=n(95),s=n(96);function l(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}l.prototype.clear=r,l.prototype["delete"]=i,l.prototype.get=a,l.prototype.has=o,l.prototype.set=s,t.exports=l},function(t,e,n){var r=n(14);t.exports=function(){this.__data__=r?r(null):{},this.size=0}},function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},function(t,e,n){var r=n(14),i=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(r){var n=e[t];return"__lodash_hash_undefined__"===n?undefined:n}return i.call(e,t)?e[t]:undefined}},function(t,e,n){var r=n(14),i=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return r?e[t]!==undefined:i.call(e,t)}},function(t,e,n){var r=n(14);t.exports=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&e===undefined?"__lodash_hash_undefined__":e,this}},function(t,e,n){var r=n(15);t.exports=function(t){var e=r(this,t)["delete"](t);return this.size-=e?1:0,e}},function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},function(t,e,n){var r=n(15);t.exports=function(t){return r(this,t).get(t)}},function(t,e,n){var r=n(15);t.exports=function(t){return r(this,t).has(t)}},function(t,e,n){var r=n(15);t.exports=function(t,e){var n=r(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this}},function(t,e,n){var r=n(103)();t.exports=r},function(t,e){t.exports=function(t){return function(e,n,r){for(var i=-1,a=Object(e),o=r(e),s=o.length;s--;){var l=o[t?s:++i];if(!1===n(a[l],l,a))break}return e}}},function(t,e,n){var r=n(31),i=n(105),a=n(106),o=n(109),s=n(110),l=n(22),h=n(6),u=n(114),c=n(35),f=n(18),p=n(2),d=n(116),g=n(36),m=n(37),_=n(120);t.exports=function(t,e,n,y,v,b,L){var k=m(t,n),M=m(e,n),x=L.get(M);if(x)r(t,n,x);else{var w=b?b(k,M,n+"",t,e,L):undefined,P=w===undefined;if(P){var C=h(M),E=!C&&c(M),S=!C&&!E&&g(M);w=M,C||E||S?h(k)?w=k:u(k)?w=o(k):E?(P=!1,w=i(M,!0)):S?(P=!1,w=a(M,!0)):w=[]:d(M)||l(M)?(w=k,l(k)?w=_(k):p(k)&&!f(k)||(w=s(M))):P=!1}P&&(L.set(M,w),v(w,M,y,b,L),L["delete"](M)),r(t,n,w)}}},function(t,e,n){(function(t){var r=n(4),i=e&&!e.nodeType&&e,a=i&&"object"==typeof t&&t&&!t.nodeType&&t,o=a&&a.exports===i?r.Buffer:undefined,s=o?o.allocUnsafe:undefined;t.exports=function(t,e){if(e)return t.slice();var n=t.length,r=s?s(n):new t.constructor(n);return t.copy(r),r}}).call(this,n(21)(t))},function(t,e,n){var r=n(107);t.exports=function(t,e){var n=e?r(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}},function(t,e,n){var r=n(108);t.exports=function(t){var e=new t.constructor(t.byteLength);return new r(e).set(new r(t)),e}},function(t,e,n){var r=n(4).Uint8Array;t.exports=r},function(t,e){t.exports=function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}},function(t,e,n){var r=n(111),i=n(33),a=n(34);t.exports=function(t){return"function"!=typeof t.constructor||a(t)?{}:r(i(t))}},function(t,e,n){var r=n(2),i=Object.create,a=function(){function t(){}return function(e){if(!r(e))return{};if(i)return i(e);t.prototype=e;var n=new t;return t.prototype=undefined,n}}();t.exports=a},function(t,e){t.exports=function(t,e){return function(n){return t(e(n))}}},function(t,e,n){var r=n(9),i=n(5);t.exports=function(t){return i(t)&&"[object Arguments]"==r(t)}},function(t,e,n){var r=n(23),i=n(5);t.exports=function(t){return i(t)&&r(t)}},function(t,e){t.exports=function(){return!1}},function(t,e,n){var r=n(9),i=n(33),a=n(5),o=Function.prototype,s=Object.prototype,l=o.toString,h=s.hasOwnProperty,u=l.call(Object);t.exports=function(t){if(!a(t)||"[object Object]"!=r(t))return!1;var e=i(t);if(null===e)return!0;var n=h.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&l.call(n)==u}},function(t,e,n){var r=n(9),i=n(24),a=n(5),o={};o["[object Float32Array]"]=o["[object Float64Array]"]=o["[object Int8Array]"]=o["[object Int16Array]"]=o["[object Int32Array]"]=o["[object Uint8Array]"]=o["[object Uint8ClampedArray]"]=o["[object Uint16Array]"]=o["[object Uint32Array]"]=!0,o["[object Arguments]"]=o["[object Array]"]=o["[object ArrayBuffer]"]=o["[object Boolean]"]=o["[object DataView]"]=o["[object Date]"]=o["[object Error]"]=o["[object Function]"]=o["[object Map]"]=o["[object Number]"]=o["[object Object]"]=o["[object RegExp]"]=o["[object Set]"]=o["[object String]"]=o["[object WeakMap]"]=!1,t.exports=function(t){return a(t)&&i(t.length)&&!!o[r(t)]}},function(t,e){t.exports=function(t){return function(e){return t(e)}}},function(t,e,n){(function(t){var r=n(29),i=e&&!e.nodeType&&e,a=i&&"object"==typeof t&&t&&!t.nodeType&&t,o=a&&a.exports===i&&r.process,s=function(){try{var t=a&&a.require&&a.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(e){}}();t.exports=s}).call(this,n(21)(t))},function(t,e,n){var r=n(121),i=n(38);t.exports=function(t){return r(t,i(t))}},function(t,e,n){var r=n(122),i=n(20);t.exports=function(t,e,n,a){var o=!n;n||(n={});for(var s=-1,l=e.length;++s<l;){var h=e[s],u=a?a(n[h],t[h],h,n,t):undefined;u===undefined&&(u=t[h]),o?i(n,h,u):r(n,h,u)}return n}},function(t,e,n){var r=n(20),i=n(13),a=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var o=t[e];a.call(t,e)&&i(o,n)&&(n!==undefined||e in t)||r(t,e,n)}},function(t,e,n){var r=n(124),i=n(22),a=n(6),o=n(35),s=n(25),l=n(36),h=Object.prototype.hasOwnProperty;t.exports=function(t,e){var n=a(t),u=!n&&i(t),c=!n&&!u&&o(t),f=!n&&!u&&!c&&l(t),p=n||u||c||f,d=p?r(t.length,String):[],g=d.length;for(var m in t)!e&&!h.call(t,m)||p&&("length"==m||c&&("offset"==m||"parent"==m)||f&&("buffer"==m||"byteLength"==m||"byteOffset"==m)||s(m,g))||d.push(m);return d}},function(t,e){t.exports=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}},function(t,e,n){var r=n(2),i=n(34),a=n(126),o=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return a(t);var e=i(t),n=[];for(var s in t)("constructor"!=s||!e&&o.call(t,s))&&n.push(s);return n}},function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},function(t,e,n){var r=n(128),i=n(135);t.exports=function(t){return r((function(e,n){var r=-1,a=n.length,o=a>1?n[a-1]:undefined,s=a>2?n[2]:undefined;for(o=t.length>3&&"function"==typeof o?(a--,o):undefined,s&&i(n[0],n[1],s)&&(o=a<3?undefined:o,a=1),e=Object(e);++r<a;){var l=n[r];l&&t(e,l,r,o)}return e}))}},function(t,e,n){var r=n(39),i=n(129),a=n(131);t.exports=function(t,e){return a(i(t,e,r),t+"")}},function(t,e,n){var r=n(130),i=Math.max;t.exports=function(t,e,n){return e=i(e===undefined?t.length-1:e,0),function(){for(var a=arguments,o=-1,s=i(a.length-e,0),l=Array(s);++o<s;)l[o]=a[e+o];o=-1;for(var h=Array(e+1);++o<e;)h[o]=a[o];return h[e]=n(l),r(t,this,h)}}},function(t,e){t.exports=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}},function(t,e,n){var r=n(132),i=n(134)(r);t.exports=i},function(t,e,n){var r=n(133),i=n(32),a=n(39),o=i?function(t,e){return i(t,"toString",{configurable:!0,enumerable:!1,value:r(e),writable:!0})}:a;t.exports=o},function(t,e){t.exports=function(t){return function(){return t}}},function(t,e){var n=Date.now;t.exports=function(t){var e=0,r=0;return function(){var i=n(),a=16-(i-r);if(r=i,a>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(undefined,arguments)}}},function(t,e,n){var r=n(13),i=n(23),a=n(25),o=n(2);t.exports=function(t,e,n){if(!o(n))return!1;var s=typeof e;return!!("number"==s?i(n)&&a(e,n.length):"string"==s&&e in n)&&r(n[e],t)}},function(t,e,n){var r=n(40),i=n(41);t.exports=function(t,e){for(var n=0,a=(e=r(e,t)).length;null!=t&&n<a;)t=t[i(e[n++])];return n&&n==a?t:undefined}},function(t,e,n){var r=n(6),i=n(26),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,o=/^\w*$/;t.exports=function(t,e){if(r(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!i(t))||(o.test(t)||!a.test(t)||null!=e&&t in Object(e))}},function(t,e,n){var r=n(139),i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,o=r((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(i,(function(t,n,r,i){e.push(r?i.replace(a,"$1"):n||t)})),e}));t.exports=o},function(t,e,n){var r=n(140);t.exports=function(t){var e=r(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}},function(t,e,n){var r=n(30);function i(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=t.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(i.Cache||r),n}i.Cache=r,t.exports=i},function(t,e,n){var r=n(142);t.exports=function(t){return null==t?"":r(t)}},function(t,e,n){var r=n(19),i=n(143),a=n(6),o=n(26),s=r?r.prototype:undefined,l=s?s.toString:undefined;t.exports=function h(t){if("string"==typeof t)return t;if(a(t))return i(t,h)+"";if(o(t))return l?l.call(t):"";var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}},function(t,e){var n=Object.prototype.hasOwnProperty;t.exports=function(t,e){return null!=t&&n.call(t,e)}},function(t,e,n){var r=n(40),i=n(22),a=n(6),o=n(25),s=n(24),l=n(41);t.exports=function(t,e,n){for(var h=-1,u=(e=r(e,t)).length,c=!1;++h<u;){var f=l(e[h]);if(!(c=null!=t&&n(t,f)))break;t=t[f]}return c||++h!=u?c:!!(u=null==t?0:t.length)&&s(u)&&o(f,u)&&(a(t)||i(t))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(7),i=n(10),a=n(16);e["default"]=function(t){if(!t)throw new Error("geojson is required");var e=[];return a.flattenEach(t,(function(t){!function(t,e){var n=[],a=t.geometry;if(null!==a){switch(a.type){case"Polygon":n=i.getCoords(a);break;case"LineString":n=[i.getCoords(a)]}n.forEach((function(n){(function(t,e){var n=[];return t.reduce((function(t,i){var a,o,s,l,h,u,c=r.lineString([t,i],e);return c.bbox=(o=i,s=(a=t)[0],l=a[1],h=o[0],u=o[1],[s<h?s:h,l<u?l:u,s>h?s:h,l>u?l:u]),n.push(c),i})),n})(n,t.properties).forEach((function(t){t.id=e.length,e.push(t)}))}))}}(t,e)})),r.featureCollection(e)}},function(t,e,n){var r=n(148),i=n(7),a=n(16),o=n(42)["default"],s=a.featureEach,l=(a.coordEach,i.polygon,i.featureCollection);function h(t){var e=r(t);return e.insert=function(t){if("Feature"!==t.type)throw new Error("invalid feature");return t.bbox=t.bbox?t.bbox:o(t),r.prototype.insert.call(this,t)},e.load=function(t){var e=[];return Array.isArray(t)?t.forEach((function(t){if("Feature"!==t.type)throw new Error("invalid features");t.bbox=t.bbox?t.bbox:o(t),e.push(t)})):s(t,(function(t){if("Feature"!==t.type)throw new Error("invalid features");t.bbox=t.bbox?t.bbox:o(t),e.push(t)})),r.prototype.load.call(this,e)},e.remove=function(t,e){if("Feature"!==t.type)throw new Error("invalid feature");return t.bbox=t.bbox?t.bbox:o(t),r.prototype.remove.call(this,t,e)},e.clear=function(){return r.prototype.clear.call(this)},e.search=function(t){var e=r.prototype.search.call(this,this.toBBox(t));return l(e)},e.collides=function(t){return r.prototype.collides.call(this,this.toBBox(t))},e.all=function(){var t=r.prototype.all.call(this);return l(t)},e.toJSON=function(){return r.prototype.toJSON.call(this)},e.fromJSON=function(t){return r.prototype.fromJSON.call(this,t)},e.toBBox=function(t){var e;if(t.bbox)e=t.bbox;else if(Array.isArray(t)&&4===t.length)e=t;else if(Array.isArray(t)&&6===t.length)e=[t[0],t[1],t[3],t[4]];else if("Feature"===t.type)e=o(t);else{if("FeatureCollection"!==t.type)throw new Error("invalid geojson");e=o(t)}return{minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}},e}t.exports=h,t.exports["default"]=h},function(t,e,n){"use strict";t.exports=i,t.exports["default"]=i;var r=n(149);function i(t,e){if(!(this instanceof i))return new i(t,e);this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&this._initFormat(e),this.clear()}function a(t,e,n){if(!n)return e.indexOf(t);for(var r=0;r<e.length;r++)if(n(t,e[r]))return r;return-1}function o(t,e){s(t,0,t.children.length,e,t)}function s(t,e,n,r,i){i||(i=g(null)),i.minX=Infinity,i.minY=Infinity,i.maxX=-Infinity,i.maxY=-Infinity;for(var a,o=e;o<n;o++)a=t.children[o],l(i,t.leaf?r(a):a);return i}function l(t,e){return t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY),t}function h(t,e){return t.minX-e.minX}function u(t,e){return t.minY-e.minY}function c(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function f(t){return t.maxX-t.minX+(t.maxY-t.minY)}function p(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function d(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function g(t){return{children:t,height:1,leaf:!0,minX:Infinity,minY:Infinity,maxX:-Infinity,maxY:-Infinity}}function m(t,e,n,i,a){for(var o,s=[e,n];s.length;)(n=s.pop())-(e=s.pop())<=i||(o=e+Math.ceil((n-e)/i/2)*i,r(t,o,e,n,a),s.push(e,o,o,n))}i.prototype={all:function(){return this._all(this.data,[])},search:function(t){var e=this.data,n=[],r=this.toBBox;if(!d(t,e))return n;for(var i,a,o,s,l=[];e;){for(i=0,a=e.children.length;i<a;i++)o=e.children[i],d(t,s=e.leaf?r(o):o)&&(e.leaf?n.push(o):p(t,s)?this._all(o,n):l.push(o));e=l.pop()}return n},collides:function(t){var e=this.data,n=this.toBBox;if(!d(t,e))return!1;for(var r,i,a,o,s=[];e;){for(r=0,i=e.children.length;r<i;r++)if(a=e.children[r],d(t,o=e.leaf?n(a):a)){if(e.leaf||p(t,o))return!0;s.push(a)}e=s.pop()}return!1},load:function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var e=0,n=t.length;e<n;e++)this.insert(t[e]);return this}var r=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===r.height)this._splitRoot(this.data,r);else{if(this.data.height<r.height){var i=this.data;this.data=r,r=i}this._insert(r,this.data.height-r.height-1,!0)}else this.data=r;return this},insert:function(t){return t&&this._insert(t,this.data.height-1),this},clear:function(){return this.data=g([]),this},remove:function(t,e){if(!t)return this;for(var n,r,i,o,s=this.data,l=this.toBBox(t),h=[],u=[];s||h.length;){if(s||(s=h.pop(),r=h[h.length-1],n=u.pop(),o=!0),s.leaf&&-1!==(i=a(t,s.children,e)))return s.children.splice(i,1),h.push(s),this._condense(h),this;o||s.leaf||!p(s,l)?r?(n++,s=r.children[n],o=!1):s=null:(h.push(s),u.push(n),n=0,r=s,s=s.children[0])}return this},toBBox:function(t){return t},compareMinX:h,compareMinY:u,toJSON:function(){return this.data},fromJSON:function(t){return this.data=t,this},_all:function(t,e){for(var n=[];t;)t.leaf?e.push.apply(e,t.children):n.push.apply(n,t.children),t=n.pop();return e},_build:function(t,e,n,r){var i,a=n-e+1,s=this._maxEntries;if(a<=s)return o(i=g(t.slice(e,n+1)),this.toBBox),i;r||(r=Math.ceil(Math.log(a)/Math.log(s)),s=Math.ceil(a/Math.pow(s,r-1))),(i=g([])).leaf=!1,i.height=r;var l,h,u,c,f=Math.ceil(a/s),p=f*Math.ceil(Math.sqrt(s));for(m(t,e,n,p,this.compareMinX),l=e;l<=n;l+=p)for(m(t,l,u=Math.min(l+p-1,n),f,this.compareMinY),h=l;h<=u;h+=f)c=Math.min(h+f-1,u),i.children.push(this._build(t,h,c,r-1));return o(i,this.toBBox),i},_chooseSubtree:function(t,e,n,r){for(var i,a,o,s,l,h,u,f,p,d;r.push(e),!e.leaf&&r.length-1!==n;){for(u=f=Infinity,i=0,a=e.children.length;i<a;i++)l=c(o=e.children[i]),p=t,d=o,(h=(Math.max(d.maxX,p.maxX)-Math.min(d.minX,p.minX))*(Math.max(d.maxY,p.maxY)-Math.min(d.minY,p.minY))-l)<f?(f=h,u=l<u?l:u,s=o):h===f&&l<u&&(u=l,s=o);e=s||e.children[0]}return e},_insert:function(t,e,n){var r=this.toBBox,i=n?t:r(t),a=[],o=this._chooseSubtree(i,this.data,e,a);for(o.children.push(t),l(o,i);e>=0&&a[e].children.length>this._maxEntries;)this._split(a,e),e--;this._adjustParentBBoxes(i,a,e)},_split:function(t,e){var n=t[e],r=n.children.length,i=this._minEntries;this._chooseSplitAxis(n,i,r);var a=this._chooseSplitIndex(n,i,r),s=g(n.children.splice(a,n.children.length-a));s.height=n.height,s.leaf=n.leaf,o(n,this.toBBox),o(s,this.toBBox),e?t[e-1].children.push(s):this._splitRoot(n,s)},_splitRoot:function(t,e){this.data=g([t,e]),this.data.height=t.height+1,this.data.leaf=!1,o(this.data,this.toBBox)},_chooseSplitIndex:function(t,e,n){var r,i,a,o,l,h,u,f,p,d,g,m,_,y;for(h=u=Infinity,r=e;r<=n-e;r++)i=s(t,0,r,this.toBBox),a=s(t,r,n,this.toBBox),p=i,d=a,g=void 0,m=void 0,_=void 0,y=void 0,g=Math.max(p.minX,d.minX),m=Math.max(p.minY,d.minY),_=Math.min(p.maxX,d.maxX),y=Math.min(p.maxY,d.maxY),o=Math.max(0,_-g)*Math.max(0,y-m),l=c(i)+c(a),o<h?(h=o,f=r,u=l<u?l:u):o===h&&l<u&&(u=l,f=r);return f},_chooseSplitAxis:function(t,e,n){var r=t.leaf?this.compareMinX:h,i=t.leaf?this.compareMinY:u;this._allDistMargin(t,e,n,r)<this._allDistMargin(t,e,n,i)&&t.children.sort(r)},_allDistMargin:function(t,e,n,r){t.children.sort(r);var i,a,o=this.toBBox,h=s(t,0,e,o),u=s(t,n-e,n,o),c=f(h)+f(u);for(i=e;i<n-e;i++)a=t.children[i],l(h,t.leaf?o(a):a),c+=f(h);for(i=n-e-1;i>=e;i--)a=t.children[i],l(u,t.leaf?o(a):a),c+=f(u);return c},_adjustParentBBoxes:function(t,e,n){for(var r=n;r>=0;r--)l(e[r],t)},_condense:function(t){for(var e,n=t.length-1;n>=0;n--)0===t[n].children.length?n>0?(e=t[n-1].children).splice(e.indexOf(t[n]),1):this.clear():o(t[n],this.toBBox)},_initFormat:function(t){var e=["return a"," - b",";"];this.compareMinX=new Function("a","b",e.join(t[0])),this.compareMinY=new Function("a","b",e.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}},function(t,e,n){t.exports=function(){"use strict";function t(t,e,n){var r=t[e];t[e]=t[n],t[n]=r}function e(t,e){return t<e?-1:t>e?1:0}return function(n,r,i,a,o){!function s(e,n,r,i,a){for(;i>r;){if(i-r>600){var o=i-r+1,l=n-r+1,h=Math.log(o),u=.5*Math.exp(2*h/3),c=.5*Math.sqrt(h*u*(o-u)/o)*(l-o/2<0?-1:1),f=Math.max(r,Math.floor(n-l*u/o+c)),p=Math.min(i,Math.floor(n+(o-l)*u/o+c));s(e,n,f,p,a)}var d=e[n],g=r,m=i;for(t(e,r,n),a(e[i],d)>0&&t(e,r,i);g<m;){for(t(e,g,m),g++,m--;a(e[g],d)<0;)g++;for(;a(e[m],d)>0;)m--}0===a(e[r],d)?t(e,r,m):(m++,t(e,m,i)),m<=n&&(r=m+1),n<=m&&(i=m-1)}}(n,r,i||0,a||n.length-1,o||e)}}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(10);function i(t,e,n){var r=!1;e[0][0]===e[e.length-1][0]&&e[0][1]===e[e.length-1][1]&&(e=e.slice(0,e.length-1));for(var i=0,a=e.length-1;i<e.length;a=i++){var o=e[i][0],s=e[i][1],l=e[a][0],h=e[a][1];if(t[1]*(o-l)+s*(l-t[0])+h*(t[0]-o)==0&&(o-t[0])*(l-t[0])<=0&&(s-t[1])*(h-t[1])<=0)return!n;s>t[1]!=h>t[1]&&t[0]<(l-o)*(t[1]-s)/(h-s)+o&&(r=!r)}return r}e["default"]=function(t,e,n){if(void 0===n&&(n={}),!t)throw new Error("point is required");if(!e)throw new Error("polygon is required");var a=r.getCoord(t),o=r.getGeom(e),s=o.type,l=e.bbox,h=o.coordinates;if(l&&!1===function(t,e){return e[0]<=t[0]&&e[1]<=t[1]&&e[2]>=t[0]&&e[3]>=t[1]}(a,l))return!1;"Polygon"===s&&(h=[h]);for(var u=!1,c=0;c<h.length&&!u;c++)if(i(a,h[c][0],n.ignoreBoundary)){for(var f=!1,p=1;p<h[c].length&&!f;)i(a,h[c][p],!n.ignoreBoundary)&&(f=!0),p++;f||(u=!0)}return u}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(10);function i(t,e,n,r){var i=n[0],a=n[1],o=t[0],s=t[1],l=e[0],h=e[1],u=l-o,c=h-s;return 0==(n[0]-o)*c-(n[1]-s)*u&&(r?"start"===r?Math.abs(u)>=Math.abs(c)?u>0?o<i&&i<=l:l<=i&&i<o:c>0?s<a&&a<=h:h<=a&&a<s:"end"===r?Math.abs(u)>=Math.abs(c)?u>0?o<=i&&i<l:l<i&&i<=o:c>0?s<=a&&a<h:h<a&&a<=s:"both"===r&&(Math.abs(u)>=Math.abs(c)?u>0?o<i&&i<l:l<i&&i<o:c>0?s<a&&a<h:h<a&&a<s):Math.abs(u)>=Math.abs(c)?u>0?o<=i&&i<=l:l<=i&&i<=o:c>0?s<=a&&a<=h:h<=a&&a<=s)}e["default"]=function(t,e,n){void 0===n&&(n={});for(var a=r.getCoord(t),o=r.getCoords(e),s=0;s<o.length-1;s++){var l=!1;if(n.ignoreEndVertices&&(0===s&&(l="start"),s===o.length-2&&(l="end"),0===s&&s+1===o.length-1&&(l="both")),i(o[s],o[s+1],a,l))return!0}return!1}},function(t,e){var n,r,i=t.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(t){if(n===setTimeout)return setTimeout(t,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(t){n=a}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(t){r=o}}();var l,h=[],u=!1,c=-1;function f(){u&&l&&(u=!1,l.length?h=l.concat(h):c=-1,h.length&&p())}function p(){if(!u){var t=s(f);u=!0;for(var e=h.length;e;){for(l=h,h=[];++c<e;)l&&l[c].run();c=-1,e=h.length}l=null,u=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function g(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];h.push(new d(t,e)),1!==h.length||u||s(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(69);var r=n(43),i=n(3),a=n.n(i),o=n(44),s=n(45),l=n(46),h=n(47),u=n(48),c=n(49),f=n(50),p=n(51),d=n(52),g=n(53),m=n(54),_={en:o,de:s,it:l,id:h,ro:u,ru:c,es:f,nl:p,fr:d,pt_br:n(55),zh:g,zh_tw:m,pl:n(56),sv:n(57),el:n(58),hu:n(59),da:n(60),no:n(61),fa:n(62),ua:n(63),tr:n(64),cz:n(65)};function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b={_globalEditModeEnabled:!1,enableGlobalEditMode:function(t){this._globalEditModeEnabled=!0,this.Toolbar.toggleButton("editMode",this.globalEditModeEnabled()),L.PM.Utils.findLayers(this.map).forEach((function(e){e.pm.enable(t)})),this.throttledReInitEdit||(this.throttledReInitEdit=L.Util.throttle(this.handleLayerAdditionInGlobalEditMode,100,this)),this._addedLayers=[],this.map.on("layeradd",this._layerAdded,this),this.map.on("layeradd",this.throttledReInitEdit,this),this._fireGlobalEditModeToggled(!0)},disableGlobalEditMode:function(){this._globalEditModeEnabled=!1,L.PM.Utils.findLayers(this.map).forEach((function(t){t.pm.disable()})),this.map.off("layeradd",this.throttledReInitEdit,this),this.Toolbar.toggleButton("editMode",this.globalEditModeEnabled()),this._fireGlobalEditModeToggled(!1)},globalEditEnabled:function(){return this.globalEditModeEnabled()},globalEditModeEnabled:function(){return this._globalEditModeEnabled},toggleGlobalEditMode:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.globalOptions;this.globalEditModeEnabled()?this.disableGlobalEditMode():this.enableGlobalEditMode(t)},handleLayerAdditionInGlobalEditMode:function(){var t=this,e=this._addedLayers;this._addedLayers=[],e.forEach((function(e){!!e.pm&&!e._pmTempLayer&&t.globalEditModeEnabled()&&e.pm.enable(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t.globalOptions))}))},_layerAdded:function(t){var e=t.layer;this._addedLayers.push(e)}},k={_globalDragModeEnabled:!1,enableGlobalDragMode:function(){var t=L.PM.Utils.findLayers(this.map);this._globalDragModeEnabled=!0,t.forEach((function(t){t.pm.enableLayerDrag()})),this.throttledReInitDrag||(this.throttledReInitDrag=L.Util.throttle(this.reinitGlobalDragMode,100,this)),this.map.on("layeradd",this.throttledReInitDrag,this),this.Toolbar.toggleButton("dragMode",this.globalDragModeEnabled()),this._fireGlobalDragModeToggled(!0)},disableGlobalDragMode:function(){var t=L.PM.Utils.findLayers(this.map);this._globalDragModeEnabled=!1,t.forEach((function(t){t.pm.disableLayerDrag()})),this.map.off("layeradd",this.throttledReInitDrag,this),this.Toolbar.toggleButton("dragMode",this.globalDragModeEnabled()),this._fireGlobalDragModeToggled(!1)},globalDragModeEnabled:function(){return!!this._globalDragModeEnabled},toggleGlobalDragMode:function(){this.globalDragModeEnabled()?this.disableGlobalDragMode():this.enableGlobalDragMode()},reinitGlobalDragMode:function(t){var e=t.layer;!!e.pm&&!e._pmTempLayer&&this.globalDragModeEnabled()&&(this.disableGlobalDragMode(),this.enableGlobalDragMode())}},M={_globalRemovalModeEnabled:!1,enableGlobalRemovalMode:function(){var t=this;this._globalRemovalModeEnabled=!0,this.map.eachLayer((function(e){t._isRelevantForRemoval(e)&&(e.pm.disable(),e.on("click",t.removeLayer,t))})),this.throttledReInitRemoval||(this.throttledReInitRemoval=L.Util.throttle(this.reinitGlobalRemovalMode,100,this)),this.map.on("layeradd",this.throttledReInitRemoval,this),this.Toolbar.toggleButton("removalMode",this.globalRemovalModeEnabled()),this._fireGlobalRemovalModeToggled(!0)},disableGlobalRemovalMode:function(){var t=this;this._globalRemovalModeEnabled=!1,this.map.eachLayer((function(e){e.off("click",t.removeLayer,t)})),this.map.off("layeradd",this.throttledReInitRemoval,this),this.Toolbar.toggleButton("removalMode",this.globalRemovalModeEnabled()),this._fireGlobalRemovalModeToggled(!1)},globalRemovalEnabled:function(){return this.globalRemovalModeEnabled()},globalRemovalModeEnabled:function(){return!!this._globalRemovalModeEnabled},toggleGlobalRemovalMode:function(){this.globalRemovalModeEnabled()?this.disableGlobalRemovalMode():this.enableGlobalRemovalMode()},reinitGlobalRemovalMode:function(t){var e=t.layer;this._isRelevantForRemoval(e)&&this.globalRemovalModeEnabled()&&(this.disableGlobalRemovalMode(),this.enableGlobalRemovalMode())},removeLayer:function(t){var e=t.target;this._isRelevantForRemoval(e)&&!e.pm.dragging()&&(e.removeFrom(this.map.pm._getContainingLayer()),e.remove(),e instanceof L.LayerGroup?(this._fireRemoveLayerGroup(e),this._fireRemoveLayerGroup(this.map,e)):(e.pm._fireRemove(e),e.pm._fireRemove(this.map,e)))},_isRelevantForRemoval:function(t){return t.pm&&!(t instanceof L.LayerGroup)&&(!L.PM.optIn&&!t.options.pmIgnore||L.PM.optIn&&!1===t.options.pmIgnore)&&!t._pmTempLayer&&t.pm.options.allowRemoval}},x={_globalRotateModeEnabled:!1,enableGlobalRotateMode:function(){var t=this;this._globalRotateModeEnabled=!0,L.PM.Utils.findLayers(this.map).filter((function(t){return t instanceof L.Polyline})).forEach((function(e){t._isRelevantForRotate(e)&&e.pm.enableRotate()})),this.throttledReInitRotate||(this.throttledReInitRotate=L.Util.throttle(this._reinitGlobalRotateMode,100,this)),this.map.on("layeradd",this.throttledReInitRotate,this),this.Toolbar.toggleButton("rotateMode",this.globalRotateModeEnabled()),this._fireGlobalRotateModeToggled()},disableGlobalRotateMode:function(){this._globalRotateModeEnabled=!1,L.PM.Utils.findLayers(this.map).filter((function(t){return t instanceof L.Polyline})).forEach((function(t){t.pm.disableRotate()})),this.map.off("layeradd",this.throttledReInitRotate,this),this.Toolbar.toggleButton("rotateMode",this.globalRotateModeEnabled()),this._fireGlobalRotateModeToggled()},globalRotateModeEnabled:function(){return!!this._globalRotateModeEnabled},toggleGlobalRotateMode:function(){this.globalRotateModeEnabled()?this.disableGlobalRotateMode():this.enableGlobalRotateMode()},_reinitGlobalRotateMode:function(t){var e=t.layer;this._isRelevantForRotate(e)&&this.globalRotateModeEnabled()&&(this.disableGlobalRotateMode(),this.enableGlobalRotateMode())},_isRelevantForRotate:function(t){return t.pm&&!(t instanceof L.LayerGroup)&&(!L.PM.optIn&&!t.options.pmIgnore||L.PM.optIn&&!1===t.options.pmIgnore)&&!t._pmTempLayer&&t.pm.options.allowRotation}};function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(Object(n),!0).forEach((function(e){C(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function C(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var E={_fireDrawStart:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Draw",e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.__fire(this._map,"pm:drawstart",{shape:this._shape,workingLayer:this._layer},t,e)},_fireDrawEnd:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Draw",e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.__fire(this._map,"pm:drawend",{shape:this._shape},t,e)},_fireCreate:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"Draw",n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};this.__fire(this._map,"pm:create",{shape:this._shape,marker:t,layer:t},e,n)},_fireCenterPlaced:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Draw",e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},n="Draw"===t?this._layer:undefined,r="Draw"!==t?this._layer:undefined;this.__fire(this._layer,"pm:centerplaced",{shape:this._shape,workingLayer:n,layer:r,latlng:this._layer.getLatLng()},t,e)},_fireCut:function(t,e,n){var r=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"Draw",i=arguments.length>4&&arguments[4]!==undefined?arguments[4]:{};this.__fire(t,"pm:cut",{shape:this._shape,layer:e,originalLayer:n},r,i)},_fireEdit:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this._layer,e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"Edit",n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};this.__fire(t,"pm:edit",{layer:this._layer,shape:this.getShape()},e,n)},_fireEnable:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Edit",e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.__fire(this._layer,"pm:enable",{layer:this._layer,shape:this.getShape()},t,e)},_fireDisable:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Edit",e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.__fire(this._layer,"pm:disable",{layer:this._layer,shape:this.getShape()},t,e)},_fireUpdate:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Edit",e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.__fire(this._layer,"pm:update",{layer:this._layer,shape:this.getShape()},t,e)},_fireMarkerDragStart:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:undefined,n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"Edit",r=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};this.__fire(this._layer,"pm:markerdragstart",{layer:this._layer,markerEvent:t,shape:this.getShape(),indexPath:e},n,r)},_fireMarkerDrag:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:undefined,n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"Edit",r=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};this.__fire(this._layer,"pm:markerdrag",{layer:this._layer,markerEvent:t,shape:this.getShape(),indexPath:e},n,r)},_fireMarkerDragEnd:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:undefined,n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:undefined,r=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"Edit",i=arguments.length>4&&arguments[4]!==undefined?arguments[4]:{};this.__fire(this._layer,"pm:markerdragend",{layer:this._layer,markerEvent:t,shape:this.getShape(),indexPath:e,intersectionReset:n},r,i)},_fireDragStart:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Edit",e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.__fire(this._layer,"pm:dragstart",{layer:this._layer,shape:this.getShape()},t,e)},_fireDrag:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"Edit",n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};this.__fire(this._layer,"pm:drag",P(P({},t),{},{shape:this.getShape()}),e,n)},_fireDragEnd:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Edit",e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.__fire(this._layer,"pm:dragend",{layer:this._layer,shape:this.getShape()},t,e)},_fireRemove:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:t,n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"Edit",r=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};this.__fire(t,"pm:remove",{layer:e,shape:this.getShape()},n,r)},_fireVertexAdded:function(t,e,n){var r=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"Edit",i=arguments.length>4&&arguments[4]!==undefined?arguments[4]:{};this.__fire(this._layer,"pm:vertexadded",{layer:this._layer,workingLayer:this._layer,marker:t,indexPath:e,latlng:n,shape:this.getShape()},r,i)},_fireVertexRemoved:function(t,e){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"Edit",r=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};this.__fire(this._layer,"pm:vertexremoved",{layer:this._layer,marker:t,indexPath:e,shape:this.getShape()},n,r)},_fireVertexClick:function(t,e){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"Edit",r=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};this.__fire(this._layer,"pm:vertexclick",{layer:this._layer,markerEvent:t,indexPath:e,shape:this.getShape()},n,r)},_fireIntersect:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"Edit",n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};this.__fire(this._layer,"pm:intersect",{layer:this._layer,intersection:t,shape:this.getShape()},e,n)},_fireLayerReset:function(t,e){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"Edit",r=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};this.__fire(this._layer,"pm:layerreset",{layer:this._layer,markerEvent:t,indexPath:e,shape:this.getShape()},n,r)},_fireSnapDrag:function(t,e){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"Snapping",r=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};this.__fire(t,"pm:snapdrag",e,n,r)},_fireSnap:function(t,e){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"Snapping",r=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};this.__fire(t,"pm:snap",e,n,r)},_fireUnsnap:function(t,e){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"Snapping",r=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};this.__fire(t,"pm:unsnap",e,n,r)},_fireRotationEnable:function(t,e){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"Rotation",r=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};this.__fire(t,"pm:rotateenable",{layer:this._layer,helpLayer:this._rotatePoly},n,r)},_fireRotationDisable:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"Rotation",n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};this.__fire(t,"pm:rotatedisable",{layer:this._layer},e,n)},_fireRotationStart:function(t,e){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"Rotation",r=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};this.__fire(t,"pm:rotatestart",{layer:this._rotationLayer,helpLayer:this._layer,startAngle:this._startAngle,originLatLngs:e},n,r)},_fireRotation:function(t,e,n){var r=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"Rotation",i=arguments.length>4&&arguments[4]!==undefined?arguments[4]:{};this.__fire(t,"pm:rotate",{layer:this._rotationLayer,helpLayer:this._layer,startAngle:this._startAngle,angle:this._rotationLayer.pm.getAngle(),angleDiff:e,oldLatLngs:n,newLatLngs:this._rotationLayer.getLatLngs()},r,i)},_fireRotationEnd:function(t,e,n){var r=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"Rotation",i=arguments.length>4&&arguments[4]!==undefined?arguments[4]:{};this.__fire(t,"pm:rotateend",{layer:this._rotationLayer,helpLayer:this._layer,startAngle:e,angle:this._rotationLayer.pm.getAngle(),originLatLngs:n,newLatLngs:this._rotationLayer.getLatLngs()},r,i)},_fireActionClick:function(t,e,n){var r=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"Toolbar",i=arguments.length>4&&arguments[4]!==undefined?arguments[4]:{};this.__fire(this._map,"pm:actionclick",{text:t.text,action:t,btnName:e,button:n},r,i)},_fireButtonClick:function(t,e){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"Toolbar",r=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};this.__fire(this._map,"pm:buttonclick",{btnName:t,button:e},n,r)},_fireLangChange:function(t,e,n,r){var i=arguments.length>4&&arguments[4]!==undefined?arguments[4]:"Global",a=arguments.length>5&&arguments[5]!==undefined?arguments[5]:{};this.__fire(this.map,"pm:langchange",{oldLang:t,activeLang:e,fallback:n,translations:r},i,a)},_fireGlobalDragModeToggled:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"Global",n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};this.__fire(this.map,"pm:globaldragmodetoggled",{enabled:t,map:this.map},e,n)},_fireGlobalEditModeToggled:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"Global",n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};this.__fire(this.map,"pm:globaleditmodetoggled",{enabled:t,map:this.map},e,n)},_fireGlobalRemovalModeToggled:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"Global",n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};this.__fire(this.map,"pm:globalremovalmodetoggled",{enabled:t,map:this.map},e,n)},_fireGlobalCutModeToggled:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Global",e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.__fire(this._map,"pm:globalcutmodetoggled",{enabled:!!this._enabled,map:this._map},t,e)},_fireGlobalDrawModeToggled:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Global",e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.__fire(this._map,"pm:globaldrawmodetoggled",{enabled:this._enabled,shape:this._shape,map:this._map},t,e)},_fireGlobalRotateModeToggled:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Global",e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};this.__fire(this.map,"pm:globalrotatemodetoggled",{enabled:this.globalRotateModeEnabled(),map:this.map},t,e)},_fireRemoveLayerGroup:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:t,n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"Edit",r=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};this.__fire(t,"pm:remove",{layer:e,shape:undefined},n,r)},_fireKeyeventEvent:function(t,e,n){var r=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"Global",i=arguments.length>4&&arguments[4]!==undefined?arguments[4]:{};this.__fire(this.map,"pm:keyevent",{event:t,eventType:e,focusOn:n},r,i)},__fire:function(t,e,n,r){var i=arguments.length>4&&arguments[4]!==undefined?arguments[4]:{};n=a()(n,i,{source:r}),L.PM.Utils._fireEvent(t,e,n)}},S={_lastEvents:{keydown:undefined,keyup:undefined,current:undefined},_initKeyListener:function(t){this.map=t,L.DomEvent.on(document,"keydown keyup",this._onKeyListener,this),L.DomEvent.on(document,"blur",this._onKeyListener,this)},_onKeyListener:function(t){var e="document";this.map.getContainer().contains(t.target)&&(e="map");var n={event:t,eventType:t.type,focusOn:e};this._lastEvents[t.type]=n,this._lastEvents.current=n,this.map.pm._fireKeyeventEvent(t,t.type,e)},getLastKeyEvent:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"current";return this._lastEvents[t]},isShiftKeyPressed:function(){var t;return null===(t=this._lastEvents.current)||void 0===t?void 0:t.event.shiftKey},isAltKeyPressed:function(){var t;return null===(t=this._lastEvents.current)||void 0===t?void 0:t.event.altKey},isCtrlKeyPressed:function(){var t;return null===(t=this._lastEvents.current)||void 0===t?void 0:t.event.ctrlKey},isMetaKeyPressed:function(){var t;return null===(t=this._lastEvents.current)||void 0===t?void 0:t.event.metaKey},getPressedKey:function(){var t;return null===(t=this._lastEvents.current)||void 0===t?void 0:t.event.key}},O=L.Class.extend({includes:[b,k,M,x,E],initialize:function(t){this.map=t,this.Draw=new L.PM.Draw(t),this.Toolbar=new L.PM.Toolbar(t),this.Keyboard=S,this.globalOptions={snappable:!0,layerGroup:undefined,snappingOrder:["Marker","CircleMarker","Circle","Line","Polygon","Rectangle"],panes:{vertexPane:"markerPane",layerPane:"overlayPane",markerPane:"markerPane"}},this.Keyboard._initKeyListener(t)},setLang:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"en",e=arguments.length>1?arguments[1]:undefined,n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"en",r=L.PM.activeLang;e&&(_[t]=a()(_[n],e)),L.PM.activeLang=t,this.map.pm.Toolbar.reinit(),this._fireLangChange(r,t,n,_[t])},addControls:function(t){this.Toolbar.addControls(t)},removeControls:function(){this.Toolbar.removeControls()},toggleControls:function(){this.Toolbar.toggleControls()},controlsVisible:function(){return this.Toolbar.isVisible},enableDraw:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Polygon",e=arguments.length>1?arguments[1]:undefined;"Poly"===t&&(t="Polygon"),this.Draw.enable(t,e)},disableDraw:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"Polygon";"Poly"===t&&(t="Polygon"),this.Draw.disable(t)},setPathOptions:function(t){var e=this,n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},r=n.ignoreShapes||[],i=n.merge||!1;this.map.pm.Draw.shapes.forEach((function(n){-1===r.indexOf(n)&&e.map.pm.Draw[n].setPathOptions(t,i)}))},getGlobalOptions:function(){return this.globalOptions},setGlobalOptions:function(t){var e=this,n=a()(this.globalOptions,t),r=!1;this.map.pm.Draw.CircleMarker.enabled()&&this.map.pm.Draw.CircleMarker.options.editable!==n.editable&&(this.map.pm.Draw.CircleMarker.disable(),r=!0),this.map.pm.Draw.shapes.forEach((function(t){e.map.pm.Draw[t].setOptions(n)})),r&&this.map.pm.Draw.CircleMarker.enable(),L.PM.Utils.findLayers(this.map).forEach((function(t){t.pm.setOptions(n)})),this.applyGlobalOptions(),this.globalOptions=n},applyGlobalOptions:function(){L.PM.Utils.findLayers(this.map).forEach((function(t){t.pm.enabled()&&t.pm.applyOptions()}))},globalDrawModeEnabled:function(){return!!this.Draw.getActiveShape()},globalCutModeEnabled:function(){return!!this.Draw.Cut.enabled()},enableGlobalCutMode:function(t){return this.Draw.Cut.enable(t)},toggleGlobalCutMode:function(t){return this.Draw.Cut.toggle(t)},disableGlobalCutMode:function(){return this.Draw.Cut.disable()},getGeomanLayers:function(){var t=arguments.length>0&&arguments[0]!==undefined&&arguments[0],e=L.PM.Utils.findLayers(this.map);if(!t)return e;var n=L.featureGroup();return n._pmTempLayer=!0,e.forEach((function(t){n.addLayer(t)})),n},getGeomanDrawLayers:function(){var t=arguments.length>0&&arguments[0]!==undefined&&arguments[0],e=L.PM.Utils.findLayers(this.map).filter((function(t){return!0===t._drawnByGeoman}));if(!t)return e;var n=L.featureGroup();return n._pmTempLayer=!0,e.forEach((function(t){n.addLayer(t)})),n},_getContainingLayer:function(){return this.globalOptions.layerGroup&&this.globalOptions.layerGroup instanceof L.LayerGroup?this.globalOptions.layerGroup:this.map},_isCRSSimple:function(){return this.map.options.crs===L.CRS.Simple}}),B=n(0),R=n.n(B),D=n(66),I=n.n(D);function T(t){var e=L.PM.activeLang;return I()(_,e)||(e="en"),R()(_[e],t)}function j(t){return!function e(t){return t.filter((function(t){return![null,"",undefined].includes(t)})).reduce((function(t,n){return t.concat(Array.isArray(n)?e(n):n)}),[])}(t).length}function A(t){return t.reduce((function(t,e){return 0!==e.length&&t.push(Array.isArray(e)?A(e):e),t}),[])}function G(t,e,n){for(var r,i,a,o=6378137,s=6356752.3142,l=1/298.257223563,h=t.lng,u=t.lat,c=n,f=Math.PI,p=e*f/180,d=Math.sin(p),g=Math.cos(p),m=(1-l)*Math.tan(u*f/180),_=1/Math.sqrt(1+m*m),y=m*_,v=Math.atan2(m,g),b=_*d,k=1-b*b,M=k*(o*o-s*s)/(s*s),x=1+M/16384*(4096+M*(M*(320-175*M)-768)),w=M/1024*(256+M*(M*(74-47*M)-128)),P=c/(s*x),C=2*Math.PI;Math.abs(P-C)>1e-12;){r=Math.cos(2*v+P),C=P,P=c/(s*x)+w*(i=Math.sin(P))*(r+w/4*((a=Math.cos(P))*(2*r*r-1)-w/6*r*(4*i*i-3)*(4*r*r-3)))}var E=y*i-_*a*g,S=Math.atan2(y*a+_*i*g,(1-l)*Math.sqrt(b*b+E*E)),O=l/16*k*(4+l*(4-3*k)),B=h+180*(Math.atan2(i*d,_*a-y*i*g)-(1-O)*l*b*(P+O*i*(r+O*a*(2*r*r-1))))/f,R=180*S/f;return L.latLng(B,R)}function N(t,e,n,r){for(var i,a,o=!(arguments.length>4&&arguments[4]!==undefined)||arguments[4],s=[],l=0;l<n;l+=1){if(o)i=G(t,360*l/n+r,e),a=L.latLng(i.lng,i.lat);else{var h=t.lat+Math.cos(2*l*Math.PI/n)*e,u=t.lng+Math.sin(2*l*Math.PI/n)*e;a=L.latLng(h,u)}s.push(a)}return s}function z(t,e,n,r){return function(t,e,n){e=(e+360)%360;var r=Math.PI/180,i=180/Math.PI,a=6378137,o=t.lng*r,s=t.lat*r,l=e*r,h=Math.sin(s),u=Math.cos(s),c=Math.cos(n/a),f=Math.sin(n/a),p=Math.asin(h*c+u*f*Math.cos(l)),d=o+Math.atan2(Math.sin(l)*f*u,c-h*Math.sin(p));return d=(d*=i)>180?d-360:d<-180?d+360:d,L.latLng([p*i,d])}(e,function(t,e,n){var r=t.latLngToContainerPoint(e),i=t.latLngToContainerPoint(n),a=180*Math.atan2(i.y-r.y,i.x-r.x)/Math.PI+90;return a+=a<0?360:0}(t,e,n),r)}function F(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:t.getLatLngs();return t instanceof L.Polygon?L.polygon(e).getLatLngs():L.polyline(e).getLatLngs()}function V(t,e){var n,r;if(null===(n=e.options.crs)||void 0===n||null===(r=n.projection)||void 0===r?void 0:r.MAX_LATITUDE){var i,a,o=null===(i=e.options.crs)||void 0===i||null===(a=i.projection)||void 0===a?void 0:a.MAX_LATITUDE;t.lat=Math.max(Math.min(o,t.lat),-o)}return t}function U(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?U(Object(n),!0).forEach((function(e){X(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function X(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var q=L.Control.extend({includes:[E],options:{position:"topleft"},initialize:function(t){this._button=Y(Y({},this.options),t)},onAdd:function(t){return this._map=t,this._map.pm.Toolbar.options.oneBlock?this._container=this._map.pm.Toolbar._createContainer(this.options.position):"edit"===this._button.tool?this._container=this._map.pm.Toolbar.editContainer:"options"===this._button.tool?this._container=this._map.pm.Toolbar.optionsContainer:"custom"===this._button.tool?this._container=this._map.pm.Toolbar.customContainer:this._container=this._map.pm.Toolbar.drawContainer,this.buttonsDomNode=this._makeButton(this._button),this._container.appendChild(this.buttonsDomNode),this._container},onRemove:function(){return this.buttonsDomNode.remove(),this._container},getText:function(){return this._button.text},getIconUrl:function(){return this._button.iconUrl},destroy:function(){this._button={},this._update()},toggle:function(t){return this._button.toggleStatus="boolean"==typeof t?t:!this._button.toggleStatus,this._applyStyleClasses(),this._button.toggleStatus},toggled:function(){return this._button.toggleStatus},onCreate:function(){this.toggle(!1)},_triggerClick:function(t){t&&t.preventDefault(),this._button.onClick(t,{button:this,event:t}),this._clicked(t),this._button.afterClick(t,{button:this,event:t})},_makeButton:function(t){var e=this,n=this.options.position.indexOf("right")>-1?"pos-right":"",r=L.DomUtil.create("div","button-container  ".concat(n),this._container),i=L.DomUtil.create("a","leaflet-buttons-control-button",r);i.setAttribute("role","button"),i.setAttribute("tabindex","0"),i.href="#";var a=L.DomUtil.create("div","leaflet-pm-actions-container ".concat(n),r),o=t.actions,s={cancel:{text:T("actions.cancel"),onClick:function(){this._triggerClick()}},finishMode:{text:T("actions.finish"),onClick:function(){this._triggerClick()}},removeLastVertex:{text:T("actions.removeLastVertex"),onClick:function(){this._map.pm.Draw[t.jsClass]._removeLastVertex()}},finish:{text:T("actions.finish"),onClick:function(e){this._map.pm.Draw[t.jsClass]._finishShape(e)}}};o.forEach((function(r){var i,o="string"==typeof r?r:r.name;if(s[o])i=s[o];else{if(!r.text)return;i=r}var l=L.DomUtil.create("a","leaflet-pm-action ".concat(n," action-").concat(o),a);if(l.setAttribute("role","button"),l.setAttribute("tabindex","0"),l.href="#",l.innerHTML=i.text,!t.disabled&&i.onClick){L.DomEvent.addListener(l,"click",(function(n){n.preventDefault();var r="",a=e._map.pm.Toolbar.buttons;for(var o in a)if(a[o]._button===t){r=o;break}e._fireActionClick(i,r,t)}),e),L.DomEvent.addListener(l,"click",i.onClick,e)}L.DomEvent.disableClickPropagation(l)})),t.toggleStatus&&L.DomUtil.addClass(r,"active");var l=L.DomUtil.create("div","control-icon",i);return t.title&&l.setAttribute("title",t.title),t.iconUrl&&l.setAttribute("src",t.iconUrl),t.className&&L.DomUtil.addClass(l,t.className),t.disabled||(L.DomEvent.addListener(i,"click",(function(){e._button.disableOtherButtons&&e._map.pm.Toolbar.triggerClickOnToggledButtons(e);var n="",r=e._map.pm.Toolbar.buttons;for(var i in r)if(r[i]._button===t){n=i;break}e._fireButtonClick(n,t)})),L.DomEvent.addListener(i,"click",this._triggerClick,this)),t.disabled&&(L.DomUtil.addClass(i,"pm-disabled"),L.DomUtil.addClass(l,"pm-disabled")),L.DomEvent.disableClickPropagation(i),r},_applyStyleClasses:function(){this._container&&(this._button.toggleStatus&&!1!==this._button.cssToggle?(L.DomUtil.addClass(this.buttonsDomNode,"active"),L.DomUtil.addClass(this._container,"activeChild")):(L.DomUtil.removeClass(this.buttonsDomNode,"active"),L.DomUtil.removeClass(this._container,"activeChild")))},_clicked:function(){this._button.doToggle&&this.toggle()}});function K(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function H(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?K(Object(n),!0).forEach((function(e){J(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function J(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Z(t){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}L.Control.PMButton=q;var $=L.Class.extend({options:{drawMarker:!0,drawRectangle:!0,drawPolyline:!0,drawPolygon:!0,drawCircle:!0,drawCircleMarker:!0,editMode:!0,dragMode:!0,cutPolygon:!0,removalMode:!0,rotateMode:!0,snappingOption:!0,drawControls:!0,editControls:!0,optionsControls:!0,customControls:!0,oneBlock:!1,position:"topleft",positions:{draw:"",edit:"",options:"",custom:""}},customButtons:[],initialize:function(t){this.init(t)},reinit:function(){var t=this.isVisible;this.removeControls(),this._defineButtons(),t&&this.addControls()},init:function(t){this.map=t,this.buttons={},this.isVisible=!1,this.drawContainer=L.DomUtil.create("div","leaflet-pm-toolbar leaflet-pm-draw leaflet-bar leaflet-control"),this.editContainer=L.DomUtil.create("div","leaflet-pm-toolbar leaflet-pm-edit leaflet-bar leaflet-control"),this.optionsContainer=L.DomUtil.create("div","leaflet-pm-toolbar leaflet-pm-options leaflet-bar leaflet-control"),this.customContainer=L.DomUtil.create("div","leaflet-pm-toolbar leaflet-pm-custom leaflet-bar leaflet-control"),this._defineButtons()},_createContainer:function(t){var e="".concat(t,"Container");return this[e]||(this[e]=L.DomUtil.create("div","leaflet-pm-toolbar leaflet-pm-".concat(t," leaflet-bar leaflet-control"))),this[e]},getButtons:function(){return this.buttons},addControls:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.options;"undefined"!=typeof t.editPolygon&&(t.editMode=t.editPolygon),"undefined"!=typeof t.deleteLayer&&(t.removalMode=t.deleteLayer),L.Util.setOptions(this,t),this.applyIconStyle(),this.isVisible=!0,this._showHideButtons()},applyIconStyle:function(){var t=this.getButtons(),e={geomanIcons:{drawMarker:"control-icon leaflet-pm-icon-marker",drawPolyline:"control-icon leaflet-pm-icon-polyline",drawRectangle:"control-icon leaflet-pm-icon-rectangle",drawPolygon:"control-icon leaflet-pm-icon-polygon",drawCircle:"control-icon leaflet-pm-icon-circle",drawCircleMarker:"control-icon leaflet-pm-icon-circle-marker",editMode:"control-icon leaflet-pm-icon-edit",dragMode:"control-icon leaflet-pm-icon-drag",cutPolygon:"control-icon leaflet-pm-icon-cut",removalMode:"control-icon leaflet-pm-icon-delete"}};for(var n in t){var r=t[n];L.Util.setOptions(r,{className:e.geomanIcons[n]})}},removeControls:function(){var t=this.getButtons();for(var e in t)t[e].remove();this.isVisible=!1},toggleControls:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.options;this.isVisible?this.removeControls():this.addControls(t)},_addButton:function(t,e){return this.buttons[t]=e,this.options[t]=this.options[t]||!1,this.buttons[t]},triggerClickOnToggledButtons:function(t){var e=["snappingOption"];for(var n in this.buttons)!e.includes(n)&&this.buttons[n]!==t&&this.buttons[n].toggled()&&this.buttons[n]._triggerClick()},toggleButton:function(t,e){var n=!(arguments.length>2&&arguments[2]!==undefined)||arguments[2];return"editPolygon"===t&&(t="editMode"),"deleteLayer"===t&&(t="removalMode"),n&&this.triggerClickOnToggledButtons(this.buttons[t]),!!this.buttons[t]&&this.buttons[t].toggle(e)},_defineButtons:function(){var t=this,e={className:"control-icon leaflet-pm-icon-marker",title:T("buttonTitles.drawMarkerButton"),jsClass:"Marker",onClick:function(){},afterClick:function(e,n){t.map.pm.Draw[n.button._button.jsClass].toggle()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,actions:["cancel"]},n={title:T("buttonTitles.drawPolyButton"),className:"control-icon leaflet-pm-icon-polygon",jsClass:"Polygon",onClick:function(){},afterClick:function(e,n){t.map.pm.Draw[n.button._button.jsClass].toggle()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,actions:["finish","removeLastVertex","cancel"]},r={className:"control-icon leaflet-pm-icon-polyline",title:T("buttonTitles.drawLineButton"),jsClass:"Line",onClick:function(){},afterClick:function(e,n){t.map.pm.Draw[n.button._button.jsClass].toggle()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,actions:["finish","removeLastVertex","cancel"]},i={title:T("buttonTitles.drawCircleButton"),className:"control-icon leaflet-pm-icon-circle",jsClass:"Circle",onClick:function(){},afterClick:function(e,n){t.map.pm.Draw[n.button._button.jsClass].toggle()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,actions:["cancel"]},a={title:T("buttonTitles.drawCircleMarkerButton"),className:"control-icon leaflet-pm-icon-circle-marker",jsClass:"CircleMarker",onClick:function(){},afterClick:function(e,n){t.map.pm.Draw[n.button._button.jsClass].toggle()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,actions:["cancel"]},o={title:T("buttonTitles.drawRectButton"),className:"control-icon leaflet-pm-icon-rectangle",jsClass:"Rectangle",onClick:function(){},afterClick:function(e,n){t.map.pm.Draw[n.button._button.jsClass].toggle()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,actions:["cancel"]},s={title:T("buttonTitles.editButton"),className:"control-icon leaflet-pm-icon-edit",onClick:function(){},afterClick:function(){t.map.pm.toggleGlobalEditMode()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,tool:"edit",actions:["finishMode"]},l={title:T("buttonTitles.dragButton"),className:"control-icon leaflet-pm-icon-drag",onClick:function(){},afterClick:function(){t.map.pm.toggleGlobalDragMode()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,tool:"edit",actions:["finishMode"]},h={title:T("buttonTitles.cutButton"),className:"control-icon leaflet-pm-icon-cut",jsClass:"Cut",onClick:function(){},afterClick:function(e,n){t.map.pm.Draw[n.button._button.jsClass].toggle({snappable:!0,cursorMarker:!0,allowSelfIntersection:!1})},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,tool:"edit",actions:["finish","removeLastVertex","cancel"]},u={title:T("buttonTitles.deleteButton"),className:"control-icon leaflet-pm-icon-delete",onClick:function(){},afterClick:function(){t.map.pm.toggleGlobalRemovalMode()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,tool:"edit",actions:["finishMode"]},c={title:T("buttonTitles.rotateButton"),className:"control-icon leaflet-pm-icon-rotate",onClick:function(){},afterClick:function(){t.map.pm.toggleGlobalRotateMode()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,tool:"edit",actions:["finishMode"]};this._addButton("drawMarker",new L.Control.PMButton(e)),this._addButton("drawPolyline",new L.Control.PMButton(r)),this._addButton("drawRectangle",new L.Control.PMButton(o)),this._addButton("drawPolygon",new L.Control.PMButton(n)),this._addButton("drawCircle",new L.Control.PMButton(i)),this._addButton("drawCircleMarker",new L.Control.PMButton(a)),this._addButton("editMode",new L.Control.PMButton(s)),this._addButton("dragMode",new L.Control.PMButton(l)),this._addButton("cutPolygon",new L.Control.PMButton(h)),this._addButton("removalMode",new L.Control.PMButton(u)),this._addButton("rotateMode",new L.Control.PMButton(c))},_showHideButtons:function(){if(this.isVisible){this.removeControls(),this.isVisible=!0;var t=this.getButtons(),e=[];for(var n in!1===this.options.drawControls&&(e=e.concat(Object.keys(t).filter((function(e){return!t[e]._button.tool})))),!1===this.options.editControls&&(e=e.concat(Object.keys(t).filter((function(e){return"edit"===t[e]._button.tool})))),!1===this.options.optionsControls&&(e=e.concat(Object.keys(t).filter((function(e){return"options"===t[e]._button.tool})))),!1===this.options.customControls&&(e=e.concat(Object.keys(t).filter((function(e){return"custom"===t[e]._button.tool})))),t)if(this.options[n]&&-1===e.indexOf(n)){var r=t[n]._button.tool;r||(r="draw"),t[n].setPosition(this._getBtnPosition(r)),t[n].addTo(this.map)}}},_getBtnPosition:function(t){return this.options.positions&&this.options.positions[t]?this.options.positions[t]:this.options.position},setBlockPosition:function(t,e){this.options.positions[t]=e,this._showHideButtons(),this.changeControlOrder()},getBlockPositions:function(){return this.options.positions},copyDrawControl:function(t,e){if(!e)throw new TypeError("Button has no name");"object"!==Z(e)&&(e={name:e});var n=this._btnNameMapping(t);if(!e.name)throw new TypeError("Button has no name");if(this.buttons[e.name])throw new TypeError("Button with this name already exists");var r=this.map.pm.Draw.createNewDrawInstance(e.name,n);return e=H(H({},this.buttons[n]._button),e),{drawInstance:r,control:this.createCustomControl(e)}},createCustomControl:function(t){if(!t.name)throw new TypeError("Button has no name");if(this.buttons[t.name])throw new TypeError("Button with this name already exists");t.onClick||(t.onClick=function(){}),t.afterClick||(t.afterClick=function(){}),!1!==t.toggle&&(t.toggle=!0),t.block&&(t.block=t.block.toLowerCase()),t.block&&"draw"!==t.block||(t.block=""),t.className?-1===t.className.indexOf("control-icon")&&(t.className="control-icon ".concat(t.className)):t.className="control-icon";var e={tool:t.block,className:t.className,title:t.title||"",jsClass:t.name,onClick:t.onClick,afterClick:t.afterClick,doToggle:t.toggle,toggleStatus:!1,disableOtherButtons:!0,cssToggle:t.toggle,position:this.options.position,actions:t.actions||[],disabled:!!t.disabled};!1!==this.options[t.name]&&(this.options[t.name]=!0);var n=this._addButton(t.name,new L.Control.PMButton(e));return this.changeControlOrder(),n},changeControlOrder:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[],e=this._shapeMapping(),n=[];t.forEach((function(t){e[t]?n.push(e[t]):n.push(t)}));var r=this.getButtons(),i={};n.forEach((function(t){r[t]&&(i[t]=r[t])}));var a=Object.keys(r).filter((function(t){return!r[t]._button.tool}));a.forEach((function(t){-1===n.indexOf(t)&&(i[t]=r[t])}));var o=Object.keys(r).filter((function(t){return"edit"===r[t]._button.tool}));o.forEach((function(t){-1===n.indexOf(t)&&(i[t]=r[t])}));var s=Object.keys(r).filter((function(t){return"options"===r[t]._button.tool}));s.forEach((function(t){-1===n.indexOf(t)&&(i[t]=r[t])}));var l=Object.keys(r).filter((function(t){return"custom"===r[t]._button.tool}));l.forEach((function(t){-1===n.indexOf(t)&&(i[t]=r[t])})),Object.keys(r).forEach((function(t){-1===n.indexOf(t)&&(i[t]=r[t])})),this.map.pm.Toolbar.buttons=i,this._showHideButtons()},getControlOrder:function(){var t=this.getButtons(),e=[];for(var n in t)e.push(n);return e},changeActionsOfControl:function(t,e){var n=this._btnNameMapping(t);if(!n)throw new TypeError("No name passed");if(!e)throw new TypeError("No actions passed");if(!this.buttons[n])throw new TypeError("Button with this name not exists");this.buttons[n]._button.actions=e,this.changeControlOrder()},setButtonDisabled:function(t,e){var n=this._btnNameMapping(t);this.buttons[n]._button.disabled=!!e,this._showHideButtons()},_shapeMapping:function(){return{Marker:"drawMarker",Circle:"drawCircle",Polygon:"drawPolygon",Rectangle:"drawRectangle",Polyline:"drawPolyline",Line:"drawPolyline",CircleMarker:"drawCircleMarker",Edit:"editMode",Drag:"dragMode",Cut:"cutPolygon",Removal:"removalMode",Rotate:"rotateMode"}},_btnNameMapping:function(t){var e=this._shapeMapping();return e[t]?e[t]:t}});function W(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Q(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?W(Object(n),!0).forEach((function(e){tt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function tt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var et={_initSnappableMarkers:function(){this.options.snapDistance=this.options.snapDistance||30,this.options.snapSegment=this.options.snapSegment===undefined||this.options.snapSegment,this._assignEvents(this._markers),this._layer.off("pm:dragstart",this._unsnap,this),this._layer.on("pm:dragstart",this._unsnap,this)},_disableSnapping:function(){this._layer.off("pm:dragstart",this._unsnap,this)},_assignEvents:function(t){var e=this;t.forEach((function(t){Array.isArray(t)?e._assignEvents(t):(t.off("drag",e._handleSnapping,e),t.on("drag",e._handleSnapping,e),t.off("dragend",e._cleanupSnapping,e),t.on("dragend",e._cleanupSnapping,e))}))},_cleanupSnapping:function(){delete this._snapList,this.throttledList&&(this._map.off("layeradd",this.throttledList,this),this.throttledList=undefined),this._map.off("pm:remove",this._handleSnapLayerRemoval,this),this.debugIndicatorLines&&this.debugIndicatorLines.forEach((function(t){t.remove()}))},_handleThrottleSnapping:function(){this.throttledList&&this._createSnapList()},_handleSnapping:function(t){var e=this,n=t.target;if(n._snapped=!1,this.throttledList||(this.throttledList=L.Util.throttle(this._handleThrottleSnapping,100,this)),this._map.pm.Keyboard.isAltKeyPressed())return!1;if(this._snapList===undefined&&(this._createSnapList(),this._map.off("layeradd",this.throttledList,this),this._map.on("layeradd",this.throttledList,this)),this._snapList.length<=0)return!1;var r=this._calcClosestLayer(n.getLatLng(),this._snapList);if(0===Object.keys(r).length)return!1;var i,a=r.layer instanceof L.Marker||r.layer instanceof L.CircleMarker||!this.options.snapSegment;i=a?r.latlng:this._checkPrioritiySnapping(r);var o=this.options.snapDistance,s={marker:n,shape:this._shape,snapLatLng:i,segment:r.segment,layer:this._layer,workingLayer:this._layer,layerInteractedWith:r.layer,distance:r.distance};if(this._fireSnapDrag(s.marker,s),this._fireSnapDrag(this._layer,s),r.distance<o){n._orgLatLng=n.getLatLng(),n.setLatLng(i),n._snapped=!0,n._snapInfo=s;var l=this._snapLatLng||{},h=i||{};l.lat===h.lat&&l.lng===h.lng||(e._snapLatLng=i,e._fireSnap(n,s),e._fireSnap(e._layer,s))}else this._snapLatLng&&(this._unsnap(s),n._snapped=!1,this._fireUnsnap(s.marker,s),this._fireUnsnap(this._layer,s));return!0},_createSnapList:function(){var t=this,e=[],n=[],r=this._map;r.off("pm:remove",this._handleSnapLayerRemoval,this),r.on("pm:remove",this._handleSnapLayerRemoval,this),r.eachLayer((function(t){if((t instanceof L.Polyline||t instanceof L.Marker||t instanceof L.CircleMarker||t instanceof L.ImageOverlay)&&!0!==t.options.snapIgnore){if(t.options.snapIgnore===undefined&&(!L.PM.optIn&&!0===t.options.pmIgnore||L.PM.optIn&&!1!==t.options.pmIgnore))return;(t instanceof L.Circle||t instanceof L.CircleMarker)&&t.pm&&t.pm._hiddenPolyCircle?e.push(t.pm._hiddenPolyCircle):t instanceof L.ImageOverlay&&(t=L.rectangle(t.getBounds())),e.push(t);var r=L.polyline([],{color:"red",pmIgnore:!0});r._pmTempLayer=!0,n.push(r),(t instanceof L.Circle||t instanceof L.CircleMarker)&&n.push(r)}})),e=(e=(e=e.filter((function(e){return t._layer!==e}))).filter((function(t){return t._latlng||t._latlngs&&!j(t._latlngs)}))).filter((function(t){return!t._pmTempLayer})),this._otherSnapLayers?(this._otherSnapLayers.forEach((function(){var t=L.polyline([],{color:"red",pmIgnore:!0});t._pmTempLayer=!0,n.push(t)})),this._snapList=e.concat(this._otherSnapLayers)):this._snapList=e,this.debugIndicatorLines=n},_handleSnapLayerRemoval:function(t){var e=t.layer,n=this._snapList.findIndex((function(t){return t._leaflet_id===e._leaflet_id}));this._snapList.splice(n,1)},_calcClosestLayer:function(t,e){var n=this,r=[],i={};return e.forEach((function(e,a){if(!e._parentCopy||e._parentCopy!==n._layer){var o=n._calcLayerDistances(t,e);n.debugIndicatorLines[a]&&n.debugIndicatorLines[a].setLatLngs([t,o.latlng]),(i.distance===undefined||o.distance<=i.distance)&&(o.distance<i.distance&&(r=[]),(i=o).layer=e,r.push(i))}})),this._getClosestLayerByPriority(r)},_calcLayerDistances:function(t,e){var n,r,i,a=this,o=this._map,s=e instanceof L.Marker||e instanceof L.CircleMarker,l=e instanceof L.Polygon,h=t,u=s?e.getLatLng():e.getLatLngs();if(s)return{latlng:Q({},u),distance:this._getDistance(o,u,h)};return function c(t){t.forEach((function(e,s){if(Array.isArray(e))c(e);else if(a.options.snapSegment){var u,f=e;u=l?s+1===t.length?0:s+1:s+1===t.length?undefined:s+1;var p=t[u];if(p){var d=a._getDistanceToSegment(o,h,f,p);(r===undefined||d<r)&&(r=d,i=[f,p])}}else{var g=a._getDistance(o,h,e);(r===undefined||g<r)&&(r=g,n=e)}}))}(u),this.options.snapSegment?{latlng:Q({},this._getClosestPointOnSegment(o,t,i[0],i[1])),segment:i,distance:r}:{latlng:n,distance:r}},_getClosestLayerByPriority:function(t){t=t.sort((function(t,e){return t._leaflet_id-e._leaflet_id}));var e=this._map.pm.globalOptions.snappingOrder||[],n=0,r={};return e.concat(["Marker","CircleMarker","Circle","Line","Polygon","Rectangle"]).forEach((function(t){r[t]||(n+=1,r[t]=n)})),t.sort(function(t,e){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"asc";if(!e||0===Object.keys(e).length)return function(t,e){return t-e};for(var r,i=Object.keys(e),a=i.length,o={};a--;)r=i[a],o[r.toLowerCase()]=e[r];function s(t){return t instanceof L.Marker?"Marker":t instanceof L.Circle?"Circle":t instanceof L.CircleMarker?"CircleMarker":t instanceof L.Rectangle?"Rectangle":t instanceof L.Polygon?"Polygon":t instanceof L.Polyline?"Line":undefined}return function(e,r){var i,a;if("instanceofShape"===t){if(i=s(e.layer).toLowerCase(),a=s(r.layer).toLowerCase(),!i||!a)return 0}else{if(!e.hasOwnProperty(t)||!r.hasOwnProperty(t))return 0;i=e[t].toLowerCase(),a=r[t].toLowerCase()}var l=i in o?o[i]:Number.MAX_SAFE_INTEGER,h=a in o?o[a]:Number.MAX_SAFE_INTEGER,u=0;return l<h?u=-1:l>h&&(u=1),"desc"===n?-1*u:u}}("instanceofShape",r)),t[0]||{}},_checkPrioritiySnapping:function(t){var e=this._map,n=t.segment[0],r=t.segment[1],i=t.latlng,a=this._getDistance(e,n,i),o=this._getDistance(e,r,i),s=a<o?n:r,l=a<o?a:o;if(this.options.snapMiddle){var h=L.PM.Utils.calcMiddleLatLng(e,n,r),u=this._getDistance(e,h,i);u<a&&u<o&&(s=h,l=u)}return Q({},l<this.options.snapDistance?s:i)},_unsnap:function(){delete this._snapLatLng},_getClosestPointOnSegment:function(t,e,n,r){var i=t.getMaxZoom();i===Infinity&&(i=t.getZoom());var a=t.project(e,i),o=t.project(n,i),s=t.project(r,i),l=L.LineUtil.closestPointOnSegment(a,o,s);return t.unproject(l,i)},_getDistanceToSegment:function(t,e,n,r){var i=t.latLngToLayerPoint(e),a=t.latLngToLayerPoint(n),o=t.latLngToLayerPoint(r);return L.LineUtil.pointToSegmentDistance(i,a,o)},_getDistance:function(t,e,n){return t.latLngToLayerPoint(e).distanceTo(t.latLngToLayerPoint(n))}},nt=L.Class.extend({includes:[et,E],options:{snappable:!0,snapDistance:20,snapMiddle:!1,allowSelfIntersection:!0,tooltips:!0,templineStyle:{},hintlineStyle:{color:"#3388ff",dashArray:"5,5"},pathOptions:null,cursorMarker:!0,finishOn:null,markerStyle:{draggable:!0,icon:L.icon()},hideMiddleMarkers:!1,minRadiusCircle:null,maxRadiusCircle:null,minRadiusCircleMarker:null,maxRadiusCircleMarker:null,editable:!1,markerEditable:!0,continueDrawing:!1,snapSegment:!0,requireSnapToFinish:!1},setOptions:function(t){L.Util.setOptions(this,t)},getOptions:function(){return this.options},initialize:function(t){var e=this,n=new L.Icon.Default;n.options.tooltipAnchor=[0,0],this.options.markerStyle.icon=n,this._map=t,this.shapes=["Marker","CircleMarker","Line","Polygon","Rectangle","Circle","Cut"],this.shapes.forEach((function(t){e[t]=new L.PM.Draw[t](e._map)})),this.Marker.setOptions({continueDrawing:!0}),this.CircleMarker.setOptions({continueDrawing:!0})},setPathOptions:function(t){var e=arguments.length>1&&arguments[1]!==undefined&&arguments[1];this.options.pathOptions=e?a()(this.options.pathOptions,t):t},getShapes:function(){return this.shapes},getShape:function(){return this._shape},enable:function(t,e){if(!t)throw new Error("Error: Please pass a shape as a parameter. Possible shapes are: ".concat(this.getShapes().join(",")));this.disable(),this[t].enable(e)},disable:function(){var t=this;this.shapes.forEach((function(e){t[e].disable()}))},addControls:function(){var t=this;this.shapes.forEach((function(e){t[e].addButton()}))},getActiveShape:function(){var t,e=this;return this.shapes.forEach((function(n){e[n]._enabled&&(t=n)})),t},_setGlobalDrawMode:function(){"Cut"===this._shape?this._fireGlobalCutModeToggled():this._fireGlobalDrawModeToggled();var t=L.PM.Utils.findLayers(this._map);this._enabled?t.forEach((function(t){L.PM.Utils.disablePopup(t)})):t.forEach((function(t){L.PM.Utils.enablePopup(t)}))},createNewDrawInstance:function(t,e){var n=this._getShapeFromBtnName(e);if(this[t])throw new TypeError("Draw Type already exists");if(!L.PM.Draw[n])throw new TypeError("There is no class L.PM.Draw.".concat(n));return this[t]=new L.PM.Draw[n](this._map),this[t].toolbarButtonName=t,this[t]._shape=t,this.shapes.push(t),this[e]&&this[t].setOptions(this[e].options),this[t].setOptions(this[t].options),this[t]},_getShapeFromBtnName:function(t){var e={drawMarker:"Marker",drawCircle:"Circle",drawPolygon:"Polygon",drawPolyline:"Line",drawRectangle:"Rectangle",drawCircleMarker:"CircleMarker",editMode:"Edit",dragMode:"Drag",cutPolygon:"Cut",removalMode:"Removal",rotateMode:"Rotate"};return e[t]?e[t]:this[t]?this[t]._shape:t},_finishLayer:function(t){t.pm&&(t.pm.setOptions(this.options),t.pm._shape=this._shape,t.pm._map=this._map),this._addDrawnLayerProp(t)},_addDrawnLayerProp:function(t){t._drawnByGeoman=!0},_setPane:function(t,e){"layerPane"===e?t.options.pane=this._map.pm.globalOptions.panes&&this._map.pm.globalOptions.panes.layerPane||"overlayPane":"vertexPane"===e?t.options.pane=this._map.pm.globalOptions.panes&&this._map.pm.globalOptions.panes.vertexPane||"markerPane":"markerPane"===e&&(t.options.pane=this._map.pm.globalOptions.panes&&this._map.pm.globalOptions.panes.markerPane||"markerPane")},_isFirstLayer:function(){return 0===(this._map||this._layer._map).pm.getGeomanLayers().length}});nt.Marker=nt.extend({initialize:function(t){this._map=t,this._shape="Marker",this.toolbarButtonName="drawMarker"},enable:function(t){var e=this;L.Util.setOptions(this,t),this._enabled=!0,this._map.on("click",this._createMarker,this),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!0),this._hintMarker=L.marker([0,0],this.options.markerStyle),this._setPane(this._hintMarker,"markerPane"),this._hintMarker._pmTempLayer=!0,this._hintMarker.addTo(this._map),this.options.tooltips&&this._hintMarker.bindTooltip(T("tooltips.placeMarker"),{permanent:!0,offset:L.point(0,10),direction:"bottom",opacity:.8}).openTooltip(),this._layer=this._hintMarker,this._map.on("mousemove",this._syncHintMarker,this),this.options.markerEditable&&this._map.eachLayer((function(t){e.isRelevantMarker(t)&&t.pm.enable()})),this._fireDrawStart(),this._setGlobalDrawMode()},disable:function(){var t=this;this._enabled&&(this._enabled=!1,this._map.off("click",this._createMarker,this),this._hintMarker.remove(),this._map.off("mousemove",this._syncHintMarker,this),this._map.eachLayer((function(e){t.isRelevantMarker(e)&&e.pm.disable()})),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!1),this.options.snappable&&this._cleanupSnapping(),this._fireDrawEnd(),this._setGlobalDrawMode())},enabled:function(){return this._enabled},toggle:function(t){this.enabled()?this.disable():this.enable(t)},isRelevantMarker:function(t){return t instanceof L.Marker&&t.pm&&!t._pmTempLayer},_syncHintMarker:function(t){if(this._hintMarker.setLatLng(t.latlng),this.options.snappable){var e=t;e.target=this._hintMarker,this._handleSnapping(e)}},_createMarker:function(t){if(t.latlng&&(!this.options.requireSnapToFinish||this._hintMarker._snapped||this._isFirstLayer())){this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e=this._hintMarker.getLatLng(),n=new L.Marker(e,this.options.markerStyle);this._setPane(n,"markerPane"),this._finishLayer(n),n.pm||(n.options.draggable=!1),n.addTo(this._map.pm._getContainingLayer()),n.pm&&this.options.markerEditable?n.pm.enable():n.dragging&&n.dragging.disable(),this._fireCreate(n),this._cleanupSnapping(),this.options.continueDrawing||this.disable()}}});var rt=n(8),it=n.n(rt);function at(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function ot(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?at(Object(n),!0).forEach((function(e){st(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):at(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function st(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function lt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function ht(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?lt(Object(n),!0).forEach((function(e){ut(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):lt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function ut(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}nt.Line=nt.extend({initialize:function(t){this._map=t,this._shape="Line",this.toolbarButtonName="drawPolyline",this._doesSelfIntersect=!1},enable:function(t){L.Util.setOptions(this,t),this._enabled=!0,this._layerGroup=new L.LayerGroup,this._layerGroup._pmTempLayer=!0,this._layerGroup.addTo(this._map),this._layer=L.polyline([],this.options.templineStyle),this._setPane(this._layer,"layerPane"),this._layer._pmTempLayer=!0,this._layerGroup.addLayer(this._layer),this._hintline=L.polyline([],this.options.hintlineStyle),this._setPane(this._hintline,"layerPane"),this._hintline._pmTempLayer=!0,this._layerGroup.addLayer(this._hintline),this._hintMarker=L.marker(this._map.getCenter(),{interactive:!1,zIndexOffset:100,icon:L.divIcon({className:"marker-icon cursor-marker"})}),this._setPane(this._hintMarker,"vertexPane"),this._hintMarker._pmTempLayer=!0,this._layerGroup.addLayer(this._hintMarker),this.options.cursorMarker&&L.DomUtil.addClass(this._hintMarker._icon,"visible"),this.options.tooltips&&this._hintMarker.bindTooltip(T("tooltips.firstVertex"),{permanent:!0,offset:L.point(0,10),direction:"bottom",opacity:.8}).openTooltip(),this._map._container.style.cursor="crosshair",this._map.on("click",this._createVertex,this),this.options.finishOn&&"snap"!==this.options.finishOn&&this._map.on(this.options.finishOn,this._finishShape,this),"dblclick"===this.options.finishOn&&(this.tempMapDoubleClickZoomState=this._map.doubleClickZoom._enabled,this.tempMapDoubleClickZoomState&&this._map.doubleClickZoom.disable()),this._map.on("mousemove",this._syncHintMarker,this),this._hintMarker.on("move",this._syncHintLine,this),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!0),this._otherSnapLayers=[],this._fireDrawStart(),this._setGlobalDrawMode()},disable:function(){this._enabled&&(this._enabled=!1,this._map._container.style.cursor="",this._map.off("click",this._createVertex,this),this._map.off("mousemove",this._syncHintMarker,this),this.options.finishOn&&"snap"!==this.options.finishOn&&this._map.off(this.options.finishOn,this._finishShape,this),this.tempMapDoubleClickZoomState&&this._map.doubleClickZoom.enable(),this._map.removeLayer(this._layerGroup),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!1),this.options.snappable&&this._cleanupSnapping(),this._fireDrawEnd(),this._setGlobalDrawMode())},enabled:function(){return this._enabled},toggle:function(t){this.enabled()?this.disable():this.enable(t)},_syncHintLine:function(){var t=this._layer.getLatLngs();if(t.length>0){var e=t[t.length-1];this._hintline.setLatLngs([e,this._hintMarker.getLatLng()])}},_syncHintMarker:function(t){if(this._hintMarker.setLatLng(t.latlng),this.options.snappable){var e=t;e.target=this._hintMarker,this._handleSnapping(e)}this.options.allowSelfIntersection||this._handleSelfIntersection(!0,t.latlng)},hasSelfIntersection:function(){return it()(this._layer.toGeoJSON(15)).features.length>0},_handleSelfIntersection:function(t,e){var n=L.polyline(this._layer.getLatLngs());t&&(e||(e=this._hintMarker.getLatLng()),n.addLatLng(e));var r=it()(n.toGeoJSON(15));this._doesSelfIntersect=r.features.length>0,this._doesSelfIntersect?this._hintline.setStyle({color:"#f00000ff"}):this._hintline.isEmpty()||this._hintline.setStyle(this.options.hintlineStyle)},_createVertex:function(t){if(this.options.allowSelfIntersection||(this._handleSelfIntersection(!0,t.latlng),!this._doesSelfIntersect)){this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e=this._hintMarker.getLatLng();if(e.equals(this._layer.getLatLngs()[0]))this._finishShape(t);else{this._layer._latlngInfo=this._layer._latlngInfo||[],this._layer._latlngInfo.push({latlng:e,snapInfo:this._hintMarker._snapInfo}),this._layer.addLatLng(e);var n=this._createMarker(e);this._setTooltipText(),this._hintline.setLatLngs([e,e]),this._fireVertexAdded(n,undefined,e,"Draw"),"snap"===this.options.finishOn&&this._hintMarker._snapped&&this._finishShape(t)}}},_removeLastVertex:function(){var t=this._layer.getLatLngs(),e=t.pop();if(t.length<1)this.disable();else{var n=this._layerGroup.getLayers().filter((function(t){return t instanceof L.Marker})).filter((function(t){return!L.DomUtil.hasClass(t._icon,"cursor-marker")})).find((function(t){return t.getLatLng()===e}));this._layerGroup.removeLayer(n),this._layer.setLatLngs(t),this._syncHintLine(),this._setTooltipText()}},_finishShape:function(){if((this.options.allowSelfIntersection||(this._handleSelfIntersection(!1),!this._doesSelfIntersect))&&(!this.options.requireSnapToFinish||this._hintMarker._snapped||this._isFirstLayer())){var t=this._layer.getLatLngs();if(!(t.length<=1)){var e=L.polyline(t,this.options.pathOptions);this._setPane(e,"layerPane"),this._finishLayer(e),e.addTo(this._map.pm._getContainingLayer()),this._fireCreate(e),this.options.snappable&&this._cleanupSnapping(),this.disable(),this.options.continueDrawing&&this.enable()}}},_createMarker:function(t){var e=new L.Marker(t,{draggable:!1,icon:L.divIcon({className:"marker-icon"})});return this._setPane(e,"vertexPane"),e._pmTempLayer=!0,this._layerGroup.addLayer(e),e.on("click",this._finishShape,this),e},_setTooltipText:function(){var t="";t=T(this._layer.getLatLngs().flat().length<=1?"tooltips.continueLine":"tooltips.finishLine"),this._hintMarker.setTooltipContent(t)}}),nt.Polygon=nt.Line.extend({initialize:function(t){this._map=t,this._shape="Polygon",this.toolbarButtonName="drawPolygon"},_createMarker:function(t){var e=new L.Marker(t,{draggable:!1,icon:L.divIcon({className:"marker-icon"})});return this._setPane(e,"vertexPane"),e._pmTempLayer=!0,this._layerGroup.addLayer(e),1===this._layer.getLatLngs().flat().length?(e.on("click",this._finishShape,this),this._tempSnapLayerIndex=this._otherSnapLayers.push(e)-1,this.options.snappable&&this._cleanupSnapping()):e.on("click",(function(){return 1})),e},_setTooltipText:function(){var t="";t=T(this._layer.getLatLngs().flat().length<=2?"tooltips.continueLine":"tooltips.finishPoly"),this._hintMarker.setTooltipContent(t)},_finishShape:function(t){if((this.options.allowSelfIntersection||(this._handleSelfIntersection(!0,this._layer.getLatLngs()[0]),!this._doesSelfIntersect))&&(!this.options.requireSnapToFinish||this._hintMarker._snapped||this._isFirstLayer())){var e=this._layer.getLatLngs();if(!(e.length<=2)){var n=L.polygon(e,this.options.pathOptions);this._setPane(n,"layerPane"),this._finishLayer(n),n.addTo(this._map.pm._getContainingLayer()),this._fireCreate(n),this._cleanupSnapping(),this._otherSnapLayers.splice(this._tempSnapLayerIndex,1),delete this._tempSnapLayerIndex,this.disable(),this.options.continueDrawing&&this.enable()}}}}),nt.Rectangle=nt.extend({initialize:function(t){this._map=t,this._shape="Rectangle",this.toolbarButtonName="drawRectangle"},enable:function(t){if(L.Util.setOptions(this,t),this._enabled=!0,this._layerGroup=new L.LayerGroup,this._layerGroup._pmTempLayer=!0,this._layerGroup.addTo(this._map),this._layer=L.rectangle([[0,0],[0,0]],this.options.pathOptions),this._setPane(this._layer,"layerPane"),this._layer._pmTempLayer=!0,this._startMarker=L.marker([0,0],{icon:L.divIcon({className:"marker-icon rect-start-marker"}),draggable:!1,zIndexOffset:-100,opacity:this.options.cursorMarker?1:0}),this._setPane(this._startMarker,"vertexPane"),this._startMarker._pmTempLayer=!0,this._layerGroup.addLayer(this._startMarker),this._hintMarker=L.marker([0,0],{zIndexOffset:150,icon:L.divIcon({className:"marker-icon cursor-marker"})}),this._setPane(this._hintMarker,"vertexPane"),this._hintMarker._pmTempLayer=!0,this._layerGroup.addLayer(this._hintMarker),this.options.tooltips&&this._hintMarker.bindTooltip(T("tooltips.firstVertex"),{permanent:!0,offset:L.point(0,10),direction:"bottom",opacity:.8}).openTooltip(),this.options.cursorMarker){L.DomUtil.addClass(this._hintMarker._icon,"visible"),this._styleMarkers=[];for(var e=0;e<2;e+=1){var n=L.marker([0,0],{icon:L.divIcon({className:"marker-icon rect-style-marker"}),draggable:!1,zIndexOffset:100});this._setPane(n,"vertexPane"),n._pmTempLayer=!0,this._layerGroup.addLayer(n),this._styleMarkers.push(n)}}this._map._container.style.cursor="crosshair",this._map.on("click",this._placeStartingMarkers,this),this._map.on("mousemove",this._syncHintMarker,this),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!0),this._otherSnapLayers=[],this._fireDrawStart(),this._setGlobalDrawMode()},disable:function(){this._enabled&&(this._enabled=!1,this._map._container.style.cursor="",this._map.off("click",this._finishShape,this),this._map.off("click",this._placeStartingMarkers,this),this._map.off("mousemove",this._syncHintMarker,this),this._map.removeLayer(this._layerGroup),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!1),this.options.snappable&&this._cleanupSnapping(),this._fireDrawEnd(),this._setGlobalDrawMode())},enabled:function(){return this._enabled},toggle:function(t){this.enabled()?this.disable():this.enable(t)},_placeStartingMarkers:function(t){this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e=this._hintMarker.getLatLng();L.DomUtil.addClass(this._startMarker._icon,"visible"),this._startMarker.setLatLng(e),this.options.cursorMarker&&this._styleMarkers&&this._styleMarkers.forEach((function(t){L.DomUtil.addClass(t._icon,"visible"),t.setLatLng(e)})),this._map.off("click",this._placeStartingMarkers,this),this._map.on("click",this._finishShape,this),this._hintMarker.setTooltipContent(T("tooltips.finishRect")),this._setRectangleOrigin()},_setRectangleOrigin:function(){var t=this._startMarker.getLatLng();t&&(this._layerGroup.addLayer(this._layer),this._layer.setLatLngs([t,t]),this._hintMarker.on("move",this._syncRectangleSize,this))},_syncHintMarker:function(t){if(this._hintMarker.setLatLng(t.latlng),this.options.snappable){var e=t;e.target=this._hintMarker,this._handleSnapping(e)}},_syncRectangleSize:function(){var t=this,e=V(this._startMarker.getLatLng(),this._map),n=V(this._hintMarker.getLatLng(),this._map),r=L.PM.Utils._getRotatedRectangle(e,n,this.options.rectangleAngle||0,this._map);if(this._layer.setLatLngs(r),this.options.cursorMarker&&this._styleMarkers){var i=[];r.forEach((function(t){t.equals(e,1e-8)||t.equals(n,1e-8)||i.push(t)})),i.forEach((function(e,n){try{t._styleMarkers[n].setLatLng(e)}catch(r){}}))}},_findCorners:function(){var t=this._layer.getBounds();return[t.getNorthWest(),t.getNorthEast(),t.getSouthEast(),t.getSouthWest()]},_finishShape:function(t){this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e=this._hintMarker.getLatLng(),n=this._startMarker.getLatLng();if(!this.options.requireSnapToFinish||this._hintMarker._snapped||this._isFirstLayer()){var r=L.rectangle([n,e],this.options.pathOptions);if(this.options.rectangleAngle){var i=L.PM.Utils._getRotatedRectangle(n,e,this.options.rectangleAngle||0,this._map);r.setLatLngs(i),r.pm&&r.pm._setAngle(this.options.rectangleAngle||0)}this._setPane(r,"layerPane"),this._finishLayer(r),r.addTo(this._map.pm._getContainingLayer()),this._fireCreate(r),this.disable(),this.options.continueDrawing&&this.enable()}}}),nt.Circle=nt.extend({initialize:function(t){this._map=t,this._shape="Circle",this.toolbarButtonName="drawCircle"},enable:function(t){L.Util.setOptions(this,t),this.options.radius=0,this._enabled=!0,this._layerGroup=new L.LayerGroup,this._layerGroup._pmTempLayer=!0,this._layerGroup.addTo(this._map),this._layer=L.circle([0,0],ot(ot({},this.options.templineStyle),{},{radius:0})),this._setPane(this._layer,"layerPane"),this._layer._pmTempLayer=!0,this._centerMarker=L.marker([0,0],{icon:L.divIcon({className:"marker-icon"}),draggable:!1,zIndexOffset:100}),this._setPane(this._centerMarker,"vertexPane"),this._centerMarker._pmTempLayer=!0,this._hintMarker=L.marker([0,0],{zIndexOffset:110,icon:L.divIcon({className:"marker-icon cursor-marker"})}),this._setPane(this._hintMarker,"vertexPane"),this._hintMarker._pmTempLayer=!0,this._layerGroup.addLayer(this._hintMarker),this.options.cursorMarker&&L.DomUtil.addClass(this._hintMarker._icon,"visible"),this.options.tooltips&&this._hintMarker.bindTooltip(T("tooltips.startCircle"),{permanent:!0,offset:L.point(0,10),direction:"bottom",opacity:.8}).openTooltip(),this._hintline=L.polyline([],this.options.hintlineStyle),this._setPane(this._hintline,"layerPane"),this._hintline._pmTempLayer=!0,this._layerGroup.addLayer(this._hintline),this._map._container.style.cursor="crosshair",this._map.on("click",this._placeCenterMarker,this),this._map.on("mousemove",this._syncHintMarker,this),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!0),this._otherSnapLayers=[],this._fireDrawStart(),this._setGlobalDrawMode()},disable:function(){this._enabled&&(this._enabled=!1,this._map._container.style.cursor="",this._map.off("click",this._finishShape,this),this._map.off("click",this._placeCenterMarker,this),this._map.off("mousemove",this._syncHintMarker,this),this._map.removeLayer(this._layerGroup),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!1),this.options.snappable&&this._cleanupSnapping(),this._fireDrawEnd(),this._setGlobalDrawMode())},enabled:function(){return this._enabled},toggle:function(t){this.enabled()?this.disable():this.enable(t)},_syncHintLine:function(){var t=this._centerMarker.getLatLng(),e=this._getNewDestinationOfHintMarker();this._hintline.setLatLngs([t,e])},_syncCircleRadius:function(){var t,e=this._centerMarker.getLatLng(),n=this._hintMarker.getLatLng();t=this._map.options.crs===L.CRS.Simple?this._map.distance(e,n):e.distanceTo(n),this.options.minRadiusCircle&&t<this.options.minRadiusCircle?this._layer.setRadius(this.options.minRadiusCircle):this.options.maxRadiusCircle&&t>this.options.maxRadiusCircle?this._layer.setRadius(this.options.maxRadiusCircle):this._layer.setRadius(t)},_syncHintMarker:function(t){if(this._hintMarker.setLatLng(t.latlng),this._hintMarker.setLatLng(this._getNewDestinationOfHintMarker()),this.options.snappable){var e=t;e.target=this._hintMarker,this._handleSnapping(e)}this._handleHintMarkerSnapping()},_placeCenterMarker:function(t){this._layerGroup.addLayer(this._layer),this._layerGroup.addLayer(this._centerMarker),this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e=this._hintMarker.getLatLng();this._layerGroup.addLayer(this._layer),this._centerMarker.setLatLng(e),this._map.off("click",this._placeCenterMarker,this),this._map.on("click",this._finishShape,this),this._placeCircleCenter()},_placeCircleCenter:function(){var t=this._centerMarker.getLatLng();t&&(this._layer.setLatLng(t),this._hintMarker.on("move",this._syncHintLine,this),this._hintMarker.on("move",this._syncCircleRadius,this),this._hintMarker.setTooltipContent(T("tooltips.finishCircle")),this._fireCenterPlaced())},_finishShape:function(t){if(!this.options.requireSnapToFinish||this._hintMarker._snapped||this._isFirstLayer()){this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e,n=this._centerMarker.getLatLng(),r=this._hintMarker.getLatLng();e=this._map.options.crs===L.CRS.Simple?this._map.distance(n,r):n.distanceTo(r),this.options.minRadiusCircle&&e<this.options.minRadiusCircle?e=this.options.minRadiusCircle:this.options.maxRadiusCircle&&e>this.options.maxRadiusCircle&&(e=this.options.maxRadiusCircle);var i=ot(ot({},this.options.pathOptions),{},{radius:e}),a=L.circle(n,i);this._setPane(a,"layerPane"),this._finishLayer(a),a.addTo(this._map.pm._getContainingLayer()),a.pm&&a.pm._updateHiddenPolyCircle(),this._fireCreate(a),this.disable(),this.options.continueDrawing&&this.enable()}},_getNewDestinationOfHintMarker:function(){var t=this._centerMarker.getLatLng(),e=this._hintMarker.getLatLng(),n=t.distanceTo(e);return t.equals(L.latLng([0,0]))||(this.options.minRadiusCircle&&n<this.options.minRadiusCircle?e=z(this._map,t,e,this.options.minRadiusCircle):this.options.maxRadiusCircle&&n>this.options.maxRadiusCircle&&(e=z(this._map,t,e,this.options.maxRadiusCircle))),e},_handleHintMarkerSnapping:function(){if(this._hintMarker._snapped){var t=this._centerMarker.getLatLng(),e=this._hintMarker.getLatLng(),n=t.distanceTo(e);(this.options.minRadiusCircle&&n<this.options.minRadiusCircle||this.options.maxRadiusCircle&&n>this.options.maxRadiusCircle)&&this._hintMarker.setLatLng(this._hintMarker._orgLatLng)}this._hintMarker.setLatLng(this._getNewDestinationOfHintMarker())}}),nt.CircleMarker=nt.Marker.extend({initialize:function(t){this._map=t,this._shape="CircleMarker",this.toolbarButtonName="drawCircleMarker",this._layerIsDragging=!1},enable:function(t){var e=this;L.Util.setOptions(this,t),this._enabled=!0,this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!0),this.options.editable?(this._layerGroup=new L.LayerGroup,this._layerGroup._pmTempLayer=!0,this._layerGroup.addTo(this._map),this._layer=L.circleMarker([0,0],this.options.templineStyle),this._setPane(this._layer,"layerPane"),this._layer._pmTempLayer=!0,this._centerMarker=L.marker([0,0],{icon:L.divIcon({className:"marker-icon"}),draggable:!1,zIndexOffset:100}),this._setPane(this._centerMarker,"vertexPane"),this._centerMarker._pmTempLayer=!0,this._hintMarker=L.marker([0,0],{zIndexOffset:110,icon:L.divIcon({className:"marker-icon cursor-marker"})}),this._setPane(this._hintMarker,"vertexPane"),this._hintMarker._pmTempLayer=!0,this._layerGroup.addLayer(this._hintMarker),this.options.cursorMarker&&L.DomUtil.addClass(this._hintMarker._icon,"visible"),this.options.tooltips&&this._hintMarker.bindTooltip(T("tooltips.startCircle"),{permanent:!0,offset:L.point(0,10),direction:"bottom",opacity:.8}).openTooltip(),this._hintline=L.polyline([],this.options.hintlineStyle),this._setPane(this._hintline,"layerPane"),this._hintline._pmTempLayer=!0,this._layerGroup.addLayer(this._hintline),this._map.on("click",this._placeCenterMarker,this),this._map._container.style.cursor="crosshair"):(this._map.on("click",this._createMarker,this),this._hintMarker=L.circleMarker([0,0],this.options.templineStyle),this._setPane(this._hintMarker,"layerPane"),this._hintMarker._pmTempLayer=!0,this._hintMarker.addTo(this._map),this._layer=this._hintMarker,this.options.tooltips&&this._hintMarker.bindTooltip(T("tooltips.placeCircleMarker"),{permanent:!0,offset:L.point(0,10),direction:"bottom",opacity:.8}).openTooltip()),this._map.on("mousemove",this._syncHintMarker,this),!this.options.editable&&this.options.markerEditable&&this._map.eachLayer((function(t){e.isRelevantMarker(t)&&t.pm.enable()})),this._layer.bringToBack(),this._fireDrawStart(),this._setGlobalDrawMode()},disable:function(){var t=this;this._enabled&&(this._enabled=!1,this.options.editable?(this._map._container.style.cursor="",this._map.off("click",this._finishShape,this),this._map.off("click",this._placeCenterMarker,this),this._map.removeLayer(this._layerGroup)):(this._map.off("click",this._createMarker,this),this._map.eachLayer((function(e){t.isRelevantMarker(e)&&e.pm.disable()})),this._hintMarker.remove()),this._map.off("mousemove",this._syncHintMarker,this),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!1),this.options.snappable&&this._cleanupSnapping(),this._fireDrawEnd(),this._setGlobalDrawMode())},_placeCenterMarker:function(t){this._layerGroup.addLayer(this._layer),this._layerGroup.addLayer(this._centerMarker),this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e=this._hintMarker.getLatLng();this._layerGroup.addLayer(this._layer),this._centerMarker.setLatLng(e),this._map.off("click",this._placeCenterMarker,this),this._map.on("click",this._finishShape,this),this._placeCircleCenter()},_placeCircleCenter:function(){var t=this._centerMarker.getLatLng();t&&(this._layer.setLatLng(t),this._hintMarker.on("move",this._syncHintLine,this),this._hintMarker.on("move",this._syncCircleRadius,this),this._hintMarker.setTooltipContent(T("tooltips.finishCircle")),this._fireCenterPlaced())},_syncHintLine:function(){var t=this._centerMarker.getLatLng(),e=this._getNewDestinationOfHintMarker();this._hintline.setLatLngs([t,e])},_syncCircleRadius:function(){var t=this._centerMarker.getLatLng(),e=this._hintMarker.getLatLng(),n=this._map.project(t).distanceTo(this._map.project(e));this.options.minRadiusCircleMarker&&n<this.options.minRadiusCircleMarker?this._layer.setRadius(this.options.minRadiusCircleMarker):this.options.maxRadiusCircleMarker&&n>this.options.maxRadiusCircleMarker?this._layer.setRadius(this.options.maxRadiusCircleMarker):this._layer.setRadius(n)},_syncHintMarker:function(t){if(this._hintMarker.setLatLng(t.latlng),this._hintMarker.setLatLng(this._getNewDestinationOfHintMarker()),this.options.snappable){var e=t;e.target=this._hintMarker,this._handleSnapping(e)}this._handleHintMarkerSnapping()},isRelevantMarker:function(t){return t instanceof L.CircleMarker&&!(t instanceof L.Circle)&&t.pm&&!t._pmTempLayer},_createMarker:function(t){if((!this.options.requireSnapToFinish||this._hintMarker._snapped||this._isFirstLayer())&&t.latlng&&!this._layerIsDragging){this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e=this._hintMarker.getLatLng(),n=L.circleMarker(e,this.options.pathOptions);this._setPane(n,"layerPane"),this._finishLayer(n),n.addTo(this._map.pm._getContainingLayer()),n.pm&&this.options.markerEditable&&n.pm.enable(),this._fireCreate(n),this._cleanupSnapping(),this.options.continueDrawing||this.disable()}},_finishShape:function(t){if(!this.options.requireSnapToFinish||this._hintMarker._snapped||this._isFirstLayer()){this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e=this._centerMarker.getLatLng(),n=this._hintMarker.getLatLng(),r=this._map.project(e).distanceTo(this._map.project(n));this.options.editable&&(this.options.minRadiusCircleMarker&&r<this.options.minRadiusCircleMarker?r=this.options.minRadiusCircleMarker:this.options.maxRadiusCircleMarker&&r>this.options.maxRadiusCircleMarker&&(r=this.options.maxRadiusCircleMarker));var i=ht(ht({},this.options.pathOptions),{},{radius:r}),a=L.circleMarker(e,i);this._setPane(a,"layerPane"),this._finishLayer(a),a.addTo(this._map.pm._getContainingLayer()),a.pm&&a.pm._updateHiddenPolyCircle(),this._fireCreate(a),this.disable(),this.options.continueDrawing&&this.enable()}},_getNewDestinationOfHintMarker:function(){var t=this._hintMarker.getLatLng();if(this.options.editable){var e=this._centerMarker.getLatLng();if(e.equals(L.latLng([0,0])))return t;var n=this._map.project(e).distanceTo(this._map.project(t));this.options.minRadiusCircleMarker&&n<this.options.minRadiusCircleMarker?t=z(this._map,e,t,this._pxRadiusToMeter(this.options.minRadiusCircleMarker)):this.options.maxRadiusCircleMarker&&n>this.options.maxRadiusCircleMarker&&(t=z(this._map,e,t,this._pxRadiusToMeter(this.options.maxRadiusCircleMarker)))}return t},_handleHintMarkerSnapping:function(){if(this.options.editable){if(this._hintMarker._snapped){var t=this._centerMarker.getLatLng(),e=this._hintMarker.getLatLng(),n=this._map.project(t).distanceTo(this._map.project(e));(this.options.minRadiusCircleMarker&&n<this.options.minRadiusCircleMarker||this.options.maxRadiusCircleMarker&&n>this.options.maxRadiusCircleMarker)&&this._hintMarker.setLatLng(this._hintMarker._orgLatLng)}this._hintMarker.setLatLng(this._getNewDestinationOfHintMarker())}},_pxRadiusToMeter:function(t){var e=this._centerMarker.getLatLng(),n=this._map.project(e),r=L.point(n.x+t,n.y);return this._map.unproject(r).distanceTo(e)}});var ct=n(1),ft=n.n(ct);function pt(t,e,n){var r=t[e];t[e]=t[n],t[n]=r}function dt(t,e){return t<e?-1:t>e?1:0}var gt=function(t,e,n,r,i){!function a(t,e,n,r,i){for(;r>n;){if(r-n>600){var o=r-n+1,s=e-n+1,l=Math.log(o),h=.5*Math.exp(2*l/3),u=.5*Math.sqrt(l*h*(o-h)/o)*(s-o/2<0?-1:1),c=Math.max(n,Math.floor(e-s*h/o+u)),f=Math.min(r,Math.floor(e+(o-s)*h/o+u));a(t,e,c,f,i)}var p=t[e],d=n,g=r;for(pt(t,n,e),i(t[r],p)>0&&pt(t,n,r);d<g;){for(pt(t,d,g),d++,g--;i(t[d],p)<0;)d++;for(;i(t[g],p)>0;)g--}0===i(t[n],p)?pt(t,n,g):(g++,pt(t,g,r)),g<=e&&(n=g+1),e<=g&&(r=g-1)}}(t,e,n||0,r||t.length-1,i||dt)};function mt(t,e){if(!(this instanceof mt))return new mt(t,e);this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&this._initFormat(e),this.clear()}function _t(t,e,n){if(!n)return e.indexOf(t);for(var r=0;r<e.length;r++)if(n(t,e[r]))return r;return-1}function yt(t,e){vt(t,0,t.children.length,e,t)}function vt(t,e,n,r,i){i||(i=Ct(null)),i.minX=Infinity,i.minY=Infinity,i.maxX=-Infinity,i.maxY=-Infinity;for(var a,o=e;o<n;o++)a=t.children[o],bt(i,t.leaf?r(a):a);return i}function bt(t,e){return t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY),t}function Lt(t,e){return t.minX-e.minX}function kt(t,e){return t.minY-e.minY}function Mt(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function xt(t){return t.maxX-t.minX+(t.maxY-t.minY)}function wt(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function Pt(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function Ct(t){return{children:t,height:1,leaf:!0,minX:Infinity,minY:Infinity,maxX:-Infinity,maxY:-Infinity}}function Et(t,e,n,r,i){for(var a,o=[e,n];o.length;)(n=o.pop())-(e=o.pop())<=r||(a=e+Math.ceil((n-e)/r/2)*r,gt(t,a,e,n,i),o.push(e,a,a,n))}mt.prototype={all:function(){return this._all(this.data,[])},search:function(t){var e=this.data,n=[],r=this.toBBox;if(!Pt(t,e))return n;for(var i,a,o,s,l=[];e;){for(i=0,a=e.children.length;i<a;i++)o=e.children[i],Pt(t,s=e.leaf?r(o):o)&&(e.leaf?n.push(o):wt(t,s)?this._all(o,n):l.push(o));e=l.pop()}return n},collides:function(t){var e=this.data,n=this.toBBox;if(!Pt(t,e))return!1;for(var r,i,a,o,s=[];e;){for(r=0,i=e.children.length;r<i;r++)if(a=e.children[r],Pt(t,o=e.leaf?n(a):a)){if(e.leaf||wt(t,o))return!0;s.push(a)}e=s.pop()}return!1},load:function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var e=0,n=t.length;e<n;e++)this.insert(t[e]);return this}var r=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===r.height)this._splitRoot(this.data,r);else{if(this.data.height<r.height){var i=this.data;this.data=r,r=i}this._insert(r,this.data.height-r.height-1,!0)}else this.data=r;return this},insert:function(t){return t&&this._insert(t,this.data.height-1),this},clear:function(){return this.data=Ct([]),this},remove:function(t,e){if(!t)return this;for(var n,r,i,a,o=this.data,s=this.toBBox(t),l=[],h=[];o||l.length;){if(o||(o=l.pop(),r=l[l.length-1],n=h.pop(),a=!0),o.leaf&&-1!==(i=_t(t,o.children,e)))return o.children.splice(i,1),l.push(o),this._condense(l),this;a||o.leaf||!wt(o,s)?r?(n++,o=r.children[n],a=!1):o=null:(l.push(o),h.push(n),n=0,r=o,o=o.children[0])}return this},toBBox:function(t){return t},compareMinX:Lt,compareMinY:kt,toJSON:function(){return this.data},fromJSON:function(t){return this.data=t,this},_all:function(t,e){for(var n=[];t;)t.leaf?e.push.apply(e,t.children):n.push.apply(n,t.children),t=n.pop();return e},_build:function(t,e,n,r){var i,a=n-e+1,o=this._maxEntries;if(a<=o)return yt(i=Ct(t.slice(e,n+1)),this.toBBox),i;r||(r=Math.ceil(Math.log(a)/Math.log(o)),o=Math.ceil(a/Math.pow(o,r-1))),(i=Ct([])).leaf=!1,i.height=r;var s,l,h,u,c=Math.ceil(a/o),f=c*Math.ceil(Math.sqrt(o));for(Et(t,e,n,f,this.compareMinX),s=e;s<=n;s+=f)for(Et(t,s,h=Math.min(s+f-1,n),c,this.compareMinY),l=s;l<=h;l+=c)u=Math.min(l+c-1,h),i.children.push(this._build(t,l,u,r-1));return yt(i,this.toBBox),i},_chooseSubtree:function(t,e,n,r){for(var i,a,o,s,l,h,u,c,f,p;r.push(e),!e.leaf&&r.length-1!==n;){for(u=c=Infinity,i=0,a=e.children.length;i<a;i++)l=Mt(o=e.children[i]),f=t,p=o,(h=(Math.max(p.maxX,f.maxX)-Math.min(p.minX,f.minX))*(Math.max(p.maxY,f.maxY)-Math.min(p.minY,f.minY))-l)<c?(c=h,u=l<u?l:u,s=o):h===c&&l<u&&(u=l,s=o);e=s||e.children[0]}return e},_insert:function(t,e,n){var r=this.toBBox,i=n?t:r(t),a=[],o=this._chooseSubtree(i,this.data,e,a);for(o.children.push(t),bt(o,i);e>=0&&a[e].children.length>this._maxEntries;)this._split(a,e),e--;this._adjustParentBBoxes(i,a,e)},_split:function(t,e){var n=t[e],r=n.children.length,i=this._minEntries;this._chooseSplitAxis(n,i,r);var a=this._chooseSplitIndex(n,i,r),o=Ct(n.children.splice(a,n.children.length-a));o.height=n.height,o.leaf=n.leaf,yt(n,this.toBBox),yt(o,this.toBBox),e?t[e-1].children.push(o):this._splitRoot(n,o)},_splitRoot:function(t,e){this.data=Ct([t,e]),this.data.height=t.height+1,this.data.leaf=!1,yt(this.data,this.toBBox)},_chooseSplitIndex:function(t,e,n){var r,i,a,o,s,l,h,u,c,f,p,d,g,m;for(l=h=Infinity,r=e;r<=n-e;r++)i=vt(t,0,r,this.toBBox),a=vt(t,r,n,this.toBBox),c=i,f=a,p=void 0,d=void 0,g=void 0,m=void 0,p=Math.max(c.minX,f.minX),d=Math.max(c.minY,f.minY),g=Math.min(c.maxX,f.maxX),m=Math.min(c.maxY,f.maxY),o=Math.max(0,g-p)*Math.max(0,m-d),s=Mt(i)+Mt(a),o<l?(l=o,u=r,h=s<h?s:h):o===l&&s<h&&(h=s,u=r);return u},_chooseSplitAxis:function(t,e,n){var r=t.leaf?this.compareMinX:Lt,i=t.leaf?this.compareMinY:kt;this._allDistMargin(t,e,n,r)<this._allDistMargin(t,e,n,i)&&t.children.sort(r)},_allDistMargin:function(t,e,n,r){t.children.sort(r);var i,a,o=this.toBBox,s=vt(t,0,e,o),l=vt(t,n-e,n,o),h=xt(s)+xt(l);for(i=e;i<n-e;i++)a=t.children[i],bt(s,t.leaf?o(a):a),h+=xt(s);for(i=n-e-1;i>=e;i--)a=t.children[i],bt(l,t.leaf?o(a):a),h+=xt(l);return h},_adjustParentBBoxes:function(t,e,n){for(var r=n;r>=0;r--)bt(e[r],t)},_condense:function(t){for(var e,n=t.length-1;n>=0;n--)0===t[n].children.length?n>0?(e=t[n-1].children).splice(e.indexOf(t[n]),1):this.clear():yt(t[n],this.toBBox)},_initFormat:function(t){var e=["return a"," - b",";"];this.compareMinX=new Function("a","b",e.join(t[0])),this.compareMinY=new Function("a","b",e.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}};var St=mt;function Ot(t,e,n){if(!Tt(n=n||{}))throw new Error("options is invalid");var r=n.bbox,i=n.id;if(t===undefined)throw new Error("geometry is required");if(e&&e.constructor!==Object)throw new Error("properties must be an Object");r&&jt(r),i&&At(i);var a={type:"Feature"};return i&&(a.id=i),r&&(a.bbox=r),a.properties=e||{},a.geometry=t,a}function Bt(t,e,n){if(!t)throw new Error("coordinates is required");if(!Array.isArray(t))throw new Error("coordinates must be an Array");if(t.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!It(t[0])||!It(t[1]))throw new Error("coordinates must contain numbers");return Ot({type:"Point",coordinates:t},e,n)}function Rt(t,e,n){if(!t)throw new Error("coordinates is required");if(t.length<2)throw new Error("coordinates must be an array of two or more positions");if(!It(t[0][1])||!It(t[0][1]))throw new Error("coordinates must contain numbers");return Ot({type:"LineString",coordinates:t},e,n)}function Dt(t,e){if(!Tt(e=e||{}))throw new Error("options is invalid");var n=e.bbox,r=e.id;if(!t)throw new Error("No features passed");if(!Array.isArray(t))throw new Error("features must be an Array");n&&jt(n),r&&At(r);var i={type:"FeatureCollection"};return r&&(i.id=r),n&&(i.bbox=n),i.features=t,i}function It(t){return!isNaN(t)&&null!==t&&!Array.isArray(t)}function Tt(t){return!!t&&t.constructor===Object}function jt(t){if(!t)throw new Error("bbox is required");if(!Array.isArray(t))throw new Error("bbox must be an Array");if(4!==t.length&&6!==t.length)throw new Error("bbox must be an Array of 4 or 6 numbers");t.forEach((function(t){if(!It(t))throw new Error("bbox must only contain numbers")}))}function At(t){if(!t)throw new Error("id is required");if(-1===["string","number"].indexOf(typeof t))throw new Error("id must be a number or a string")}function Gt(t,e,n){if(null!==t)for(var r,i,a,o,s,l,h,u,c=0,f=0,p=t.type,d="FeatureCollection"===p,g="Feature"===p,m=d?t.features.length:1,_=0;_<m;_++){s=(u=!!(h=d?t.features[_].geometry:g?t.geometry:t)&&"GeometryCollection"===h.type)?h.geometries.length:1;for(var y=0;y<s;y++){var v=0,b=0;if(null!==(o=u?h.geometries[y]:h)){l=o.coordinates;var L=o.type;switch(c=!n||"Polygon"!==L&&"MultiPolygon"!==L?0:1,L){case null:break;case"Point":if(!1===e(l,f,_,v,b))return!1;f++,v++;break;case"LineString":case"MultiPoint":for(r=0;r<l.length;r++){if(!1===e(l[r],f,_,v,b))return!1;f++,"MultiPoint"===L&&v++}"LineString"===L&&v++;break;case"Polygon":case"MultiLineString":for(r=0;r<l.length;r++){for(i=0;i<l[r].length-c;i++){if(!1===e(l[r][i],f,_,v,b))return!1;f++}"MultiLineString"===L&&v++,"Polygon"===L&&b++}"Polygon"===L&&v++;break;case"MultiPolygon":for(r=0;r<l.length;r++){for("MultiPolygon"===L&&(b=0),i=0;i<l[r].length;i++){for(a=0;a<l[r][i].length-c;a++){if(!1===e(l[r][i][a],f,_,v,b))return!1;f++}b++}v++}break;case"GeometryCollection":for(r=0;r<o.geometries.length;r++)if(!1===Gt(o.geometries[r],e,n))return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function Nt(t,e){if("Feature"===t.type)e(t,0);else if("FeatureCollection"===t.type)for(var n=0;n<t.features.length&&!1!==e(t.features[n],n);n++);}function zt(t,e){var n,r,i,a,o,s,l,h,u,c,f=0,p="FeatureCollection"===t.type,d="Feature"===t.type,g=p?t.features.length:1;for(n=0;n<g;n++){for(s=p?t.features[n].geometry:d?t.geometry:t,h=p?t.features[n].properties:d?t.properties:{},u=p?t.features[n].bbox:d?t.bbox:undefined,c=p?t.features[n].id:d?t.id:undefined,o=(l=!!s&&"GeometryCollection"===s.type)?s.geometries.length:1,i=0;i<o;i++)if(null!==(a=l?s.geometries[i]:s))switch(a.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":if(!1===e(a,f,h,u,c))return!1;break;case"GeometryCollection":for(r=0;r<a.geometries.length;r++)if(!1===e(a.geometries[r],f,h,u,c))return!1;break;default:throw new Error("Unknown Geometry Type")}else if(!1===e(null,f,h,u,c))return!1;f++}}function Ft(t,e){zt(t,(function(t,n,r,i,a){var o,s=null===t?null:t.type;switch(s){case null:case"Point":case"LineString":case"Polygon":return!1!==e(Ot(t,r,{bbox:i,id:a}),n,0)&&void 0}switch(s){case"MultiPoint":o="Point";break;case"MultiLineString":o="LineString";break;case"MultiPolygon":o="Polygon"}for(var l=0;l<t.coordinates.length;l++){var h=t.coordinates[l];if(!1===e(Ot({type:o,coordinates:h},r),n,l))return!1}}))}function Vt(t){var e=[t[0],t[1]],n=[t[0],t[3]],r=[t[2],t[3]];return{type:"Feature",bbox:t,properties:{},geometry:{type:"Polygon",coordinates:[[e,[t[2],t[1]],r,n,e]]}}}function Ut(t){var e=[Infinity,Infinity,-Infinity,-Infinity];return Gt(t,(function(t){e[0]>t[0]&&(e[0]=t[0]),e[1]>t[1]&&(e[1]=t[1]),e[2]<t[0]&&(e[2]=t[0]),e[3]<t[1]&&(e[3]=t[1])})),e}var Yt=function(t){var e=St(t);return e.insert=function(t){if(Array.isArray(t)){var e=t;(t=Vt(e)).bbox=e}else t.bbox=t.bbox?t.bbox:Ut(t);return St.prototype.insert.call(this,t)},e.load=function(t){var e=[];return Array.isArray(t)?t.forEach((function(t){var n=Vt(t);n.bbox=t,e.push(n)})):Nt(t,(function(t){t.bbox=t.bbox?t.bbox:Ut(t),e.push(t)})),St.prototype.load.call(this,e)},e.remove=function(t){if(Array.isArray(t)){var e=t;(t=Vt(e)).bbox=e}return St.prototype.remove.call(this,t)},e.clear=function(){return St.prototype.clear.call(this)},e.search=function(t){return{type:"FeatureCollection",features:St.prototype.search.call(this,this.toBBox(t))}},e.collides=function(t){return St.prototype.collides.call(this,this.toBBox(t))},e.all=function(){return{type:"FeatureCollection",features:St.prototype.all.call(this)}},e.toJSON=function(){return St.prototype.toJSON.call(this)},e.fromJSON=function(t){return St.prototype.fromJSON.call(this,t)},e.toBBox=function(t){var e;return{minX:(e=t.bbox?t.bbox:Array.isArray(t)&&4===t.length?t:Ut(t))[0],minY:e[1],maxX:e[2],maxY:e[3]}},e},Xt={meters:6371008.8,metres:6371008.8,millimeters:6371008800,millimetres:6371008800,centimeters:637100880,centimetres:637100880,kilometers:6371.0088,kilometres:6371.0088,miles:3958.761333810546,nauticalmiles:6371008.8/1852,inches:6371008.8*39.37,yards:6371008.8/1.0936,feet:20902260.511392,radians:1,degrees:6371008.8/111325};function qt(t,e){if(t===undefined||null===t)throw new Error("radians is required");if(e&&"string"!=typeof e)throw new Error("units must be a string");var n=Xt[e||"kilometers"];if(!n)throw new Error(e+" units is invalid");return t*n}function Kt(t){if(null===t||t===undefined)throw new Error("degrees is required");return t%360*Math.PI/180}function Ht(t){return!!t&&t.constructor===Object}function Jt(t){if(!t)throw new Error("coord is required");if("Feature"===t.type&&null!==t.geometry&&"Point"===t.geometry.type)return t.geometry.coordinates;if("Point"===t.type)return t.coordinates;if(Array.isArray(t)&&t.length>=2&&t[0].length===undefined&&t[1].length===undefined)return t;throw new Error("coord must be GeoJSON Point or an Array of numbers")}var Zt=function(t,e,n){if(!Ht(n=n||{}))throw new Error("options is invalid");var r=n.units,i=Jt(t),a=Jt(e),o=Kt(a[1]-i[1]),s=Kt(a[0]-i[0]),l=Kt(i[1]),h=Kt(a[1]),u=Math.pow(Math.sin(o/2),2)+Math.pow(Math.sin(s/2),2)*Math.cos(l)*Math.cos(h);return qt(2*Math.atan2(Math.sqrt(u),Math.sqrt(1-u)),r)};var $t=function(t){var e=t[0],n=t[1],r=t[2],i=t[3];if(Zt(t.slice(0,2),[r,n])>=Zt(t.slice(0,2),[e,i])){var a=(n+i)/2;return[e,a-(r-e)/2,r,a+(r-e)/2]}var o=(e+r)/2;return[o-(i-n)/2,n,o+(i-n)/2,i]};var Wt=function(t){var e=[Infinity,Infinity,-Infinity,-Infinity];return Gt(t,(function(t){e[0]>t[0]&&(e[0]=t[0]),e[1]>t[1]&&(e[1]=t[1]),e[2]<t[0]&&(e[2]=t[0]),e[3]<t[1]&&(e[3]=t[1])})),e};function Qt(t){return!!t&&t.constructor===Object}function te(t,e,n){if(null!==t)for(var r,i,a,o,s,l,h,u,c=0,f=0,p=t.type,d="FeatureCollection"===p,g="Feature"===p,m=d?t.features.length:1,_=0;_<m;_++){s=(u=!!(h=d?t.features[_].geometry:g?t.geometry:t)&&"GeometryCollection"===h.type)?h.geometries.length:1;for(var y=0;y<s;y++){var v=0,b=0;if(null!==(o=u?h.geometries[y]:h)){l=o.coordinates;var L=o.type;switch(c=!n||"Polygon"!==L&&"MultiPolygon"!==L?0:1,L){case null:break;case"Point":if(!1===e(l,f,_,v,b))return!1;f++,v++;break;case"LineString":case"MultiPoint":for(r=0;r<l.length;r++){if(!1===e(l[r],f,_,v,b))return!1;f++,"MultiPoint"===L&&v++}"LineString"===L&&v++;break;case"Polygon":case"MultiLineString":for(r=0;r<l.length;r++){for(i=0;i<l[r].length-c;i++){if(!1===e(l[r][i],f,_,v,b))return!1;f++}"MultiLineString"===L&&v++,"Polygon"===L&&b++}"Polygon"===L&&v++;break;case"MultiPolygon":for(r=0;r<l.length;r++){for("MultiPolygon"===L&&(b=0),i=0;i<l[r].length;i++){for(a=0;a<l[r][i].length-c;a++){if(!1===e(l[r][i][a],f,_,v,b))return!1;f++}b++}v++}break;case"GeometryCollection":for(r=0;r<o.geometries.length;r++)if(!1===te(o.geometries[r],e,n))return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}var ee=function(t,e){if(!Qt(e=e||{}))throw new Error("options is invalid");var n=e.precision,r=e.coordinates,i=e.mutate;if(n=n===undefined||null===n||isNaN(n)?6:n,r=r===undefined||null===r||isNaN(r)?3:r,!t)throw new Error("<geojson> is required");if("number"!=typeof n)throw new Error("<precision> must be a number");if("number"!=typeof r)throw new Error("<coordinates> must be a number");!1!==i&&i!==undefined||(t=JSON.parse(JSON.stringify(t)));var a=Math.pow(10,n);return te(t,(function(t){!function(t,e,n){t.length>n&&t.splice(n,t.length);for(var r=0;r<t.length;r++)t[r]=Math.round(t[r]*e)/e}(t,a,r)})),t};function ne(t){if(!t)throw new Error("coord is required");if("Feature"===t.type&&null!==t.geometry&&"Point"===t.geometry.type)return t.geometry.coordinates;if("Point"===t.type)return t.coordinates;if(Array.isArray(t)&&t.length>=2&&t[0].length===undefined&&t[1].length===undefined)return t;throw new Error("coord must be GeoJSON Point or an Array of numbers")}function re(t){if(!t)throw new Error("coords is required");if("Feature"===t.type&&null!==t.geometry)return t.geometry.coordinates;if(t.coordinates)return t.coordinates;if(Array.isArray(t))return t;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function ie(t,e){if(!t)throw new Error((e||"geojson")+" is required");if(t.geometry&&t.geometry.type)return t.geometry.type;if(t.type)return t.type;throw new Error((e||"geojson")+" is invalid")}var ae=function(t){if(!t)throw new Error("geojson is required");var e=[];return Ft(t,(function(t){!function(t,e){var n=[],r=t.geometry;switch(r.type){case"Polygon":n=re(r);break;case"LineString":n=[re(r)]}n.forEach((function(n){(function(t,e){var n=[];return t.reduce((function(t,r){var i,a,o,s,l,h,u=Rt([t,r],e);return u.bbox=(a=r,o=(i=t)[0],s=i[1],l=a[0],h=a[1],[o<l?o:l,s<h?s:h,o>l?o:l,s>h?s:h]),n.push(u),r})),n})(n,t.properties).forEach((function(t){t.id=e.length,e.push(t)}))}))}(t,e)})),Dt(e)};function oe(t,e){var n=re(t),r=re(e);if(2!==n.length)throw new Error("<intersects> line1 must only contain 2 coordinates");if(2!==r.length)throw new Error("<intersects> line2 must only contain 2 coordinates");var i=n[0][0],a=n[0][1],o=n[1][0],s=n[1][1],l=r[0][0],h=r[0][1],u=r[1][0],c=r[1][1],f=(c-h)*(o-i)-(u-l)*(s-a),p=(u-l)*(a-h)-(c-h)*(i-l),d=(o-i)*(a-h)-(s-a)*(i-l);if(0===f)return null;var g=p/f,m=d/f;return g>=0&&g<=1&&m>=0&&m<=1?Bt([i+g*(o-i),a+g*(s-a)]):null}var se=function(t,e){var n={},r=[];if("LineString"===t.type&&(t=Ot(t)),"LineString"===e.type&&(e=Ot(e)),"Feature"===t.type&&"Feature"===e.type&&"LineString"===t.geometry.type&&"LineString"===e.geometry.type&&2===t.geometry.coordinates.length&&2===e.geometry.coordinates.length){var i=oe(t,e);return i&&r.push(i),Dt(r)}var a=Yt();return a.load(ae(e)),Nt(ae(t),(function(t){Nt(a.search(t),(function(e){var i=oe(t,e);if(i){var a=re(i).join(",");n[a]||(n[a]=!0,r.push(i))}}))})),Dt(r)};function le(t){if(null===t||t===undefined)throw new Error("radians is required");return 180*(t%(2*Math.PI))/Math.PI}function he(t){if(null===t||t===undefined)throw new Error("degrees is required");return t%360*Math.PI/180}function ue(t){return!!t&&t.constructor===Object}function ce(t){if(!t)throw new Error("coord is required");if("Feature"===t.type&&null!==t.geometry&&"Point"===t.geometry.type)return t.geometry.coordinates;if("Point"===t.type)return t.coordinates;if(Array.isArray(t)&&t.length>=2&&t[0].length===undefined&&t[1].length===undefined)return t;throw new Error("coord must be GeoJSON Point or an Array of numbers")}function fe(t,e,n){if(!ue(n=n||{}))throw new Error("options is invalid");if(!0===n.final)return function(t,e){var n=fe(e,t);return n=(n+180)%360}(t,e);var r=ce(t),i=ce(e),a=he(r[0]),o=he(i[0]),s=he(r[1]),l=he(i[1]),h=Math.sin(o-a)*Math.cos(l),u=Math.cos(s)*Math.sin(l)-Math.sin(s)*Math.cos(l)*Math.cos(o-a);return le(Math.atan2(h,u))}var pe=fe,de={meters:6371008.8,metres:6371008.8,millimeters:6371008800,millimetres:6371008800,centimeters:637100880,centimetres:637100880,kilometers:6371.0088,kilometres:6371.0088,miles:3958.761333810546,nauticalmiles:6371008.8/1852,inches:6371008.8*39.37,yards:6371008.8/1.0936,feet:20902260.511392,radians:1,degrees:6371008.8/111325};function ge(t,e,n){if(!Le(n=n||{}))throw new Error("options is invalid");var r=n.bbox,i=n.id;if(t===undefined)throw new Error("geometry is required");if(e&&e.constructor!==Object)throw new Error("properties must be an Object");r&&ke(r),i&&Me(i);var a={type:"Feature"};return i&&(a.id=i),r&&(a.bbox=r),a.properties=e||{},a.geometry=t,a}function me(t,e,n){if(!t)throw new Error("coordinates is required");if(!Array.isArray(t))throw new Error("coordinates must be an Array");if(t.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!be(t[0])||!be(t[1]))throw new Error("coordinates must contain numbers");return ge({type:"Point",coordinates:t},e,n)}function _e(t,e){if(t===undefined||null===t)throw new Error("distance is required");if(e&&"string"!=typeof e)throw new Error("units must be a string");var n=de[e||"kilometers"];if(!n)throw new Error(e+" units is invalid");return t/n}function ye(t){if(null===t||t===undefined)throw new Error("radians is required");return 180*(t%(2*Math.PI))/Math.PI}function ve(t){if(null===t||t===undefined)throw new Error("degrees is required");return t%360*Math.PI/180}function be(t){return!isNaN(t)&&null!==t&&!Array.isArray(t)}function Le(t){return!!t&&t.constructor===Object}function ke(t){if(!t)throw new Error("bbox is required");if(!Array.isArray(t))throw new Error("bbox must be an Array");if(4!==t.length&&6!==t.length)throw new Error("bbox must be an Array of 4 or 6 numbers");t.forEach((function(t){if(!be(t))throw new Error("bbox must only contain numbers")}))}function Me(t){if(!t)throw new Error("id is required");if(-1===["string","number"].indexOf(typeof t))throw new Error("id must be a number or a string")}var xe=function(t,e,n,r){if(!Le(r=r||{}))throw new Error("options is invalid");var i=r.units,a=r.properties,o=function(t){if(!t)throw new Error("coord is required");if("Feature"===t.type&&null!==t.geometry&&"Point"===t.geometry.type)return t.geometry.coordinates;if("Point"===t.type)return t.coordinates;if(Array.isArray(t)&&t.length>=2&&t[0].length===undefined&&t[1].length===undefined)return t;throw new Error("coord must be GeoJSON Point or an Array of numbers")}(t),s=ve(o[0]),l=ve(o[1]),h=ve(n),u=_e(e,i),c=Math.asin(Math.sin(l)*Math.cos(u)+Math.cos(l)*Math.sin(u)*Math.cos(h));return me([ye(s+Math.atan2(Math.sin(h)*Math.sin(u)*Math.cos(l),Math.cos(u)-Math.sin(l)*Math.sin(c))),ye(c)],a)};function we(t,e,n){var r=t[e];t[e]=t[n],t[n]=r}function Pe(t,e){return t<e?-1:t>e?1:0}var Ce=function(t,e,n,r,i){!function a(t,e,n,r,i){for(;r>n;){if(r-n>600){var o=r-n+1,s=e-n+1,l=Math.log(o),h=.5*Math.exp(2*l/3),u=.5*Math.sqrt(l*h*(o-h)/o)*(s-o/2<0?-1:1),c=Math.max(n,Math.floor(e-s*h/o+u)),f=Math.min(r,Math.floor(e+(o-s)*h/o+u));a(t,e,c,f,i)}var p=t[e],d=n,g=r;for(we(t,n,e),i(t[r],p)>0&&we(t,n,r);d<g;){for(we(t,d,g),d++,g--;i(t[d],p)<0;)d++;for(;i(t[g],p)>0;)g--}0===i(t[n],p)?we(t,n,g):(g++,we(t,g,r)),g<=e&&(n=g+1),e<=g&&(r=g-1)}}(t,e,n||0,r||t.length-1,i||Pe)};function Ee(t,e){if(!(this instanceof Ee))return new Ee(t,e);this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&this._initFormat(e),this.clear()}function Se(t,e,n){if(!n)return e.indexOf(t);for(var r=0;r<e.length;r++)if(n(t,e[r]))return r;return-1}function Oe(t,e){Be(t,0,t.children.length,e,t)}function Be(t,e,n,r,i){i||(i=Ne(null)),i.minX=Infinity,i.minY=Infinity,i.maxX=-Infinity,i.maxY=-Infinity;for(var a,o=e;o<n;o++)a=t.children[o],Re(i,t.leaf?r(a):a);return i}function Re(t,e){return t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY),t}function De(t,e){return t.minX-e.minX}function Ie(t,e){return t.minY-e.minY}function Te(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function je(t){return t.maxX-t.minX+(t.maxY-t.minY)}function Ae(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function Ge(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function Ne(t){return{children:t,height:1,leaf:!0,minX:Infinity,minY:Infinity,maxX:-Infinity,maxY:-Infinity}}function ze(t,e,n,r,i){for(var a,o=[e,n];o.length;)(n=o.pop())-(e=o.pop())<=r||(a=e+Math.ceil((n-e)/r/2)*r,Ce(t,a,e,n,i),o.push(e,a,a,n))}Ee.prototype={all:function(){return this._all(this.data,[])},search:function(t){var e=this.data,n=[],r=this.toBBox;if(!Ge(t,e))return n;for(var i,a,o,s,l=[];e;){for(i=0,a=e.children.length;i<a;i++)o=e.children[i],Ge(t,s=e.leaf?r(o):o)&&(e.leaf?n.push(o):Ae(t,s)?this._all(o,n):l.push(o));e=l.pop()}return n},collides:function(t){var e=this.data,n=this.toBBox;if(!Ge(t,e))return!1;for(var r,i,a,o,s=[];e;){for(r=0,i=e.children.length;r<i;r++)if(a=e.children[r],Ge(t,o=e.leaf?n(a):a)){if(e.leaf||Ae(t,o))return!0;s.push(a)}e=s.pop()}return!1},load:function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var e=0,n=t.length;e<n;e++)this.insert(t[e]);return this}var r=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===r.height)this._splitRoot(this.data,r);else{if(this.data.height<r.height){var i=this.data;this.data=r,r=i}this._insert(r,this.data.height-r.height-1,!0)}else this.data=r;return this},insert:function(t){return t&&this._insert(t,this.data.height-1),this},clear:function(){return this.data=Ne([]),this},remove:function(t,e){if(!t)return this;for(var n,r,i,a,o=this.data,s=this.toBBox(t),l=[],h=[];o||l.length;){if(o||(o=l.pop(),r=l[l.length-1],n=h.pop(),a=!0),o.leaf&&-1!==(i=Se(t,o.children,e)))return o.children.splice(i,1),l.push(o),this._condense(l),this;a||o.leaf||!Ae(o,s)?r?(n++,o=r.children[n],a=!1):o=null:(l.push(o),h.push(n),n=0,r=o,o=o.children[0])}return this},toBBox:function(t){return t},compareMinX:De,compareMinY:Ie,toJSON:function(){return this.data},fromJSON:function(t){return this.data=t,this},_all:function(t,e){for(var n=[];t;)t.leaf?e.push.apply(e,t.children):n.push.apply(n,t.children),t=n.pop();return e},_build:function(t,e,n,r){var i,a=n-e+1,o=this._maxEntries;if(a<=o)return Oe(i=Ne(t.slice(e,n+1)),this.toBBox),i;r||(r=Math.ceil(Math.log(a)/Math.log(o)),o=Math.ceil(a/Math.pow(o,r-1))),(i=Ne([])).leaf=!1,i.height=r;var s,l,h,u,c=Math.ceil(a/o),f=c*Math.ceil(Math.sqrt(o));for(ze(t,e,n,f,this.compareMinX),s=e;s<=n;s+=f)for(ze(t,s,h=Math.min(s+f-1,n),c,this.compareMinY),l=s;l<=h;l+=c)u=Math.min(l+c-1,h),i.children.push(this._build(t,l,u,r-1));return Oe(i,this.toBBox),i},_chooseSubtree:function(t,e,n,r){for(var i,a,o,s,l,h,u,c,f,p;r.push(e),!e.leaf&&r.length-1!==n;){for(u=c=Infinity,i=0,a=e.children.length;i<a;i++)l=Te(o=e.children[i]),f=t,p=o,(h=(Math.max(p.maxX,f.maxX)-Math.min(p.minX,f.minX))*(Math.max(p.maxY,f.maxY)-Math.min(p.minY,f.minY))-l)<c?(c=h,u=l<u?l:u,s=o):h===c&&l<u&&(u=l,s=o);e=s||e.children[0]}return e},_insert:function(t,e,n){var r=this.toBBox,i=n?t:r(t),a=[],o=this._chooseSubtree(i,this.data,e,a);for(o.children.push(t),Re(o,i);e>=0&&a[e].children.length>this._maxEntries;)this._split(a,e),e--;this._adjustParentBBoxes(i,a,e)},_split:function(t,e){var n=t[e],r=n.children.length,i=this._minEntries;this._chooseSplitAxis(n,i,r);var a=this._chooseSplitIndex(n,i,r),o=Ne(n.children.splice(a,n.children.length-a));o.height=n.height,o.leaf=n.leaf,Oe(n,this.toBBox),Oe(o,this.toBBox),e?t[e-1].children.push(o):this._splitRoot(n,o)},_splitRoot:function(t,e){this.data=Ne([t,e]),this.data.height=t.height+1,this.data.leaf=!1,Oe(this.data,this.toBBox)},_chooseSplitIndex:function(t,e,n){var r,i,a,o,s,l,h,u,c,f,p,d,g,m;for(l=h=Infinity,r=e;r<=n-e;r++)i=Be(t,0,r,this.toBBox),a=Be(t,r,n,this.toBBox),c=i,f=a,p=void 0,d=void 0,g=void 0,m=void 0,p=Math.max(c.minX,f.minX),d=Math.max(c.minY,f.minY),g=Math.min(c.maxX,f.maxX),m=Math.min(c.maxY,f.maxY),o=Math.max(0,g-p)*Math.max(0,m-d),s=Te(i)+Te(a),o<l?(l=o,u=r,h=s<h?s:h):o===l&&s<h&&(h=s,u=r);return u},_chooseSplitAxis:function(t,e,n){var r=t.leaf?this.compareMinX:De,i=t.leaf?this.compareMinY:Ie;this._allDistMargin(t,e,n,r)<this._allDistMargin(t,e,n,i)&&t.children.sort(r)},_allDistMargin:function(t,e,n,r){t.children.sort(r);var i,a,o=this.toBBox,s=Be(t,0,e,o),l=Be(t,n-e,n,o),h=je(s)+je(l);for(i=e;i<n-e;i++)a=t.children[i],Re(s,t.leaf?o(a):a),h+=je(s);for(i=n-e-1;i>=e;i--)a=t.children[i],Re(l,t.leaf?o(a):a),h+=je(l);return h},_adjustParentBBoxes:function(t,e,n){for(var r=n;r>=0;r--)Re(e[r],t)},_condense:function(t){for(var e,n=t.length-1;n>=0;n--)0===t[n].children.length?n>0?(e=t[n-1].children).splice(e.indexOf(t[n]),1):this.clear():Oe(t[n],this.toBBox)},_initFormat:function(t){var e=["return a"," - b",";"];this.compareMinX=new Function("a","b",e.join(t[0])),this.compareMinY=new Function("a","b",e.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}};var Fe=Ee;function Ve(t,e,n){if(!Ke(n=n||{}))throw new Error("options is invalid");var r=n.bbox,i=n.id;if(t===undefined)throw new Error("geometry is required");if(e&&e.constructor!==Object)throw new Error("properties must be an Object");r&&He(r),i&&Je(i);var a={type:"Feature"};return i&&(a.id=i),r&&(a.bbox=r),a.properties=e||{},a.geometry=t,a}function Ue(t,e,n){if(!t)throw new Error("coordinates is required");if(!Array.isArray(t))throw new Error("coordinates must be an Array");if(t.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!qe(t[0])||!qe(t[1]))throw new Error("coordinates must contain numbers");return Ve({type:"Point",coordinates:t},e,n)}function Ye(t,e,n){if(!t)throw new Error("coordinates is required");if(t.length<2)throw new Error("coordinates must be an array of two or more positions");if(!qe(t[0][1])||!qe(t[0][1]))throw new Error("coordinates must contain numbers");return Ve({type:"LineString",coordinates:t},e,n)}function Xe(t,e){if(!Ke(e=e||{}))throw new Error("options is invalid");var n=e.bbox,r=e.id;if(!t)throw new Error("No features passed");if(!Array.isArray(t))throw new Error("features must be an Array");n&&He(n),r&&Je(r);var i={type:"FeatureCollection"};return r&&(i.id=r),n&&(i.bbox=n),i.features=t,i}function qe(t){return!isNaN(t)&&null!==t&&!Array.isArray(t)}function Ke(t){return!!t&&t.constructor===Object}function He(t){if(!t)throw new Error("bbox is required");if(!Array.isArray(t))throw new Error("bbox must be an Array");if(4!==t.length&&6!==t.length)throw new Error("bbox must be an Array of 4 or 6 numbers");t.forEach((function(t){if(!qe(t))throw new Error("bbox must only contain numbers")}))}function Je(t){if(!t)throw new Error("id is required");if(-1===["string","number"].indexOf(typeof t))throw new Error("id must be a number or a string")}function Ze(t,e,n){if(null!==t)for(var r,i,a,o,s,l,h,u,c=0,f=0,p=t.type,d="FeatureCollection"===p,g="Feature"===p,m=d?t.features.length:1,_=0;_<m;_++){s=(u=!!(h=d?t.features[_].geometry:g?t.geometry:t)&&"GeometryCollection"===h.type)?h.geometries.length:1;for(var y=0;y<s;y++){var v=0,b=0;if(null!==(o=u?h.geometries[y]:h)){l=o.coordinates;var L=o.type;switch(c=!n||"Polygon"!==L&&"MultiPolygon"!==L?0:1,L){case null:break;case"Point":if(!1===e(l,f,_,v,b))return!1;f++,v++;break;case"LineString":case"MultiPoint":for(r=0;r<l.length;r++){if(!1===e(l[r],f,_,v,b))return!1;f++,"MultiPoint"===L&&v++}"LineString"===L&&v++;break;case"Polygon":case"MultiLineString":for(r=0;r<l.length;r++){for(i=0;i<l[r].length-c;i++){if(!1===e(l[r][i],f,_,v,b))return!1;f++}"MultiLineString"===L&&v++,"Polygon"===L&&b++}"Polygon"===L&&v++;break;case"MultiPolygon":for(r=0;r<l.length;r++){for("MultiPolygon"===L&&(b=0),i=0;i<l[r].length;i++){for(a=0;a<l[r][i].length-c;a++){if(!1===e(l[r][i][a],f,_,v,b))return!1;f++}b++}v++}break;case"GeometryCollection":for(r=0;r<o.geometries.length;r++)if(!1===Ze(o.geometries[r],e,n))return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function $e(t,e){if("Feature"===t.type)e(t,0);else if("FeatureCollection"===t.type)for(var n=0;n<t.features.length&&!1!==e(t.features[n],n);n++);}function We(t,e){var n,r,i,a,o,s,l,h,u,c,f=0,p="FeatureCollection"===t.type,d="Feature"===t.type,g=p?t.features.length:1;for(n=0;n<g;n++){for(s=p?t.features[n].geometry:d?t.geometry:t,h=p?t.features[n].properties:d?t.properties:{},u=p?t.features[n].bbox:d?t.bbox:undefined,c=p?t.features[n].id:d?t.id:undefined,o=(l=!!s&&"GeometryCollection"===s.type)?s.geometries.length:1,i=0;i<o;i++)if(null!==(a=l?s.geometries[i]:s))switch(a.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":if(!1===e(a,f,h,u,c))return!1;break;case"GeometryCollection":for(r=0;r<a.geometries.length;r++)if(!1===e(a.geometries[r],f,h,u,c))return!1;break;default:throw new Error("Unknown Geometry Type")}else if(!1===e(null,f,h,u,c))return!1;f++}}function Qe(t,e){We(t,(function(t,n,r,i,a){var o,s=null===t?null:t.type;switch(s){case null:case"Point":case"LineString":case"Polygon":return!1!==e(Ve(t,r,{bbox:i,id:a}),n,0)&&void 0}switch(s){case"MultiPoint":o="Point";break;case"MultiLineString":o="LineString";break;case"MultiPolygon":o="Polygon"}for(var l=0;l<t.coordinates.length;l++){var h=t.coordinates[l];if(!1===e(Ve({type:o,coordinates:h},r),n,l))return!1}}))}function tn(t){var e=[t[0],t[1]],n=[t[0],t[3]],r=[t[2],t[3]];return{type:"Feature",bbox:t,properties:{},geometry:{type:"Polygon",coordinates:[[e,[t[2],t[1]],r,n,e]]}}}function en(t){var e=[Infinity,Infinity,-Infinity,-Infinity];return Ze(t,(function(t){e[0]>t[0]&&(e[0]=t[0]),e[1]>t[1]&&(e[1]=t[1]),e[2]<t[0]&&(e[2]=t[0]),e[3]<t[1]&&(e[3]=t[1])})),e}var nn=function(t){var e=Fe(t);return e.insert=function(t){if(Array.isArray(t)){var e=t;(t=tn(e)).bbox=e}else t.bbox=t.bbox?t.bbox:en(t);return Fe.prototype.insert.call(this,t)},e.load=function(t){var e=[];return Array.isArray(t)?t.forEach((function(t){var n=tn(t);n.bbox=t,e.push(n)})):$e(t,(function(t){t.bbox=t.bbox?t.bbox:en(t),e.push(t)})),Fe.prototype.load.call(this,e)},e.remove=function(t){if(Array.isArray(t)){var e=t;(t=tn(e)).bbox=e}return Fe.prototype.remove.call(this,t)},e.clear=function(){return Fe.prototype.clear.call(this)},e.search=function(t){return{type:"FeatureCollection",features:Fe.prototype.search.call(this,this.toBBox(t))}},e.collides=function(t){return Fe.prototype.collides.call(this,this.toBBox(t))},e.all=function(){return{type:"FeatureCollection",features:Fe.prototype.all.call(this)}},e.toJSON=function(){return Fe.prototype.toJSON.call(this)},e.fromJSON=function(t){return Fe.prototype.fromJSON.call(this,t)},e.toBBox=function(t){var e;return{minX:(e=t.bbox?t.bbox:Array.isArray(t)&&4===t.length?t:en(t))[0],minY:e[1],maxX:e[2],maxY:e[3]}},e};function rn(t){if(!t)throw new Error("coords is required");if("Feature"===t.type&&null!==t.geometry)return t.geometry.coordinates;if(t.coordinates)return t.coordinates;if(Array.isArray(t))return t;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}var an=function(t){if(!t)throw new Error("geojson is required");var e=[];return Qe(t,(function(t){!function(t,e){var n=[],r=t.geometry;switch(r.type){case"Polygon":n=rn(r);break;case"LineString":n=[rn(r)]}n.forEach((function(n){(function(t,e){var n=[];return t.reduce((function(t,r){var i,a,o,s,l,h,u=Ye([t,r],e);return u.bbox=(a=r,o=(i=t)[0],s=i[1],l=a[0],h=a[1],[o<l?o:l,s<h?s:h,o>l?o:l,s>h?s:h]),n.push(u),r})),n})(n,t.properties).forEach((function(t){t.id=e.length,e.push(t)}))}))}(t,e)})),Xe(e)};function on(t,e){var n=rn(t),r=rn(e);if(2!==n.length)throw new Error("<intersects> line1 must only contain 2 coordinates");if(2!==r.length)throw new Error("<intersects> line2 must only contain 2 coordinates");var i=n[0][0],a=n[0][1],o=n[1][0],s=n[1][1],l=r[0][0],h=r[0][1],u=r[1][0],c=r[1][1],f=(c-h)*(o-i)-(u-l)*(s-a),p=(u-l)*(a-h)-(c-h)*(i-l),d=(o-i)*(a-h)-(s-a)*(i-l);if(0===f)return null;var g=p/f,m=d/f;return g>=0&&g<=1&&m>=0&&m<=1?Ue([i+g*(o-i),a+g*(s-a)]):null}var sn=function(t,e){var n={},r=[];if("LineString"===t.type&&(t=Ve(t)),"LineString"===e.type&&(e=Ve(e)),"Feature"===t.type&&"Feature"===e.type&&"LineString"===t.geometry.type&&"LineString"===e.geometry.type&&2===t.geometry.coordinates.length&&2===e.geometry.coordinates.length){var i=on(t,e);return i&&r.push(i),Xe(r)}var a=nn();return a.load(an(e)),$e(an(t),(function(t){$e(a.search(t),(function(e){var i=on(t,e);if(i){var a=rn(i).join(",");n[a]||(n[a]=!0,r.push(i))}}))})),Xe(r)};var ln=function(t,e,n){if(!Ke(n=n||{}))throw new Error("options is invalid");var r=t.geometry?t.geometry.type:t.type;if("LineString"!==r&&"MultiLineString"!==r)throw new Error("lines must be LineString or MultiLineString");var i=Ue([Infinity,Infinity],{dist:Infinity}),a=0;return Qe(t,(function(t){for(var r=rn(t),o=0;o<r.length-1;o++){var s=Ue(r[o]);s.properties.dist=Zt(e,s,n);var l=Ue(r[o+1]);l.properties.dist=Zt(e,l,n);var h=Zt(s,l,n),u=Math.max(s.properties.dist,l.properties.dist),c=pe(s,l),f=xe(e,u,c+90,n),p=xe(e,u,c-90,n),d=sn(Ye([f.geometry.coordinates,p.geometry.coordinates]),Ye([s.geometry.coordinates,l.geometry.coordinates])),g=null;d.features.length>0&&((g=d.features[0]).properties.dist=Zt(e,g,n),g.properties.location=a+Zt(s,g,n)),s.properties.dist<i.properties.dist&&((i=s).properties.index=o,i.properties.location=a),l.properties.dist<i.properties.dist&&((i=l).properties.index=o+1,i.properties.location=a+h),g&&g.properties.dist<i.properties.dist&&((i=g).properties.index=o),a+=h}})),i};function hn(t,e){var n=[],r=Yt();return Ft(e,(function(e){if(n.forEach((function(t,e){t.id=e})),n.length){var i=r.search(e);if(i.features.length){var a=cn(e,i);n=n.filter((function(t){return t.id!==a.id})),r.remove(a),Nt(un(a,e),(function(t){n.push(t),r.insert(t)}))}}else(n=un(t,e).features).forEach((function(t){t.bbox||(t.bbox=$t(Wt(t)))})),r.load(Dt(n))})),Dt(n)}function un(t,e){var n=[],r=re(t)[0],i=re(t)[t.geometry.coordinates.length-1];if(fn(r,ne(e))||fn(i,ne(e)))return Dt([t]);var a=Yt(),o=ae(t);a.load(o);var s=a.search(e);if(!s.features.length)return Dt([t]);var l=cn(e,s),h=function(t,e,n){var r=n;return Nt(t,(function(t,i){r=0===i&&n===undefined?t:e(r,t,i)})),r}(o,(function(t,r,i){var a=re(r)[1],o=ne(e);return i===l.id?(t.push(o),n.push(Rt(t)),fn(o,a)?[o]:[o,a]):(t.push(a),t)}),[r]);return h.length>1&&n.push(Rt(h)),Dt(n)}function cn(t,e){if(!e.features.length)throw new Error("lines must contain features");if(1===e.features.length)return e.features[0];var n,r=Infinity;return Nt(e,(function(e){var i=ln(e,t).properties.dist;i<r&&(n=e,r=i)})),n}function fn(t,e){return t[0]===e[0]&&t[1]===e[1]}var pn=function(t,e){if(!t)throw new Error("line is required");if(!e)throw new Error("splitter is required");var n=ie(t),r=ie(e);if("LineString"!==n)throw new Error("line must be LineString");if("FeatureCollection"===r)throw new Error("splitter cannot be a FeatureCollection");if("GeometryCollection"===r)throw new Error("splitter cannot be a GeometryCollection");var i=ee(e,{precision:7});switch(r){case"Point":return un(t,i);case"MultiPoint":return hn(t,i);case"LineString":case"MultiLineString":case"Polygon":case"MultiPolygon":return hn(t,se(t,i))}},dn=n(67),gn=n.n(dn),mn=n(27),_n=n.n(mn);function yn(t){var e={type:"Feature"};return e.geometry=t,e}function vn(t){return"Feature"===t.type?t.geometry:t}function bn(t){return t.geometry.coordinates}function Ln(t){return yn({type:"Polygon",coordinates:t})}function kn(t){return yn({type:"MultiPolygon",coordinates:t})}function Mn(t){t instanceof L.Polyline&&(t=t.toGeoJSON(15));var e=bn(t),n=function i(t){return Array.isArray(t)?1+i(t[0]):-1}(e),r=[];return n>1?e.forEach((function(t){r.push(function(t){return yn({type:"LineString",coordinates:t})}(t))})):r.push(t),r}function xn(t){var e=[];return t.eachLayer((function(t){e.push(bn(t.toGeoJSON(15)))})),function(t){return yn({type:"MultiLineString",coordinates:t})}(e)}function wn(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,i=!1,a=undefined;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(l){i=!0,a=l}finally{try{r||null==s["return"]||s["return"]()}finally{if(i)throw a}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return Pn(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Pn(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Pn(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}nt.Cut=nt.Polygon.extend({initialize:function(t){this._map=t,this._shape="Cut",this.toolbarButtonName="cutPolygon"},_finishShape:function(){var t=this;if(this._editedLayers=[],this.options.allowSelfIntersection||(this._handleSelfIntersection(!0,this._layer.getLatLngs()[0]),!this._doesSelfIntersect)){var e=this._layer.getLatLngs(),n=L.polygon(e,this.options.pathOptions);n._latlngInfos=this._layer._latlngInfo,this.cut(n),this._cleanupSnapping(),this._otherSnapLayers.splice(this._tempSnapLayerIndex,1),delete this._tempSnapLayerIndex,this._editedLayers.forEach((function(e){var n=e.layer,r=e.originalLayer;t._fireCut(r,n,r),t._fireCut(t._map,n,r),r.pm._fireEdit()})),this._editedLayers=[],this.disable(),this.options.continueDrawing&&this.enable()}},cut:function(t){var e=this,n=this._map._layers,r=t._latlngInfos||[];Object.keys(n).map((function(t){return n[t]})).filter((function(t){return t.pm})).filter((function(t){return!t._pmTempLayer})).filter((function(t){return!L.PM.optIn&&!t.options.pmIgnore||L.PM.optIn&&!1===t.options.pmIgnore})).filter((function(t){return t instanceof L.Polyline})).filter((function(e){return e!==t})).filter((function(t){return t.pm.options.allowCutting})).filter((function(t){return!(e.options.layersToCut&&L.Util.isArray(e.options.layersToCut)&&e.options.layersToCut.length>0)||e.options.layersToCut.indexOf(t)>-1})).filter((function(t){return!e._layerGroup.hasLayer(t)})).filter((function(e){try{var n=!!ft()(t.toGeoJSON(15),e.toGeoJSON(15)).features.length>0;return n||e instanceof L.Polyline&&!(e instanceof L.Polygon)?n:(r=t.toGeoJSON(15),i=e.toGeoJSON(15),a=vn(r),o=vn(i),!(0===(s=_n.a.intersection(a.coordinates,o.coordinates)).length||!(1===s.length?Ln(s[0]):kn(s))))}catch(l){return e instanceof L.Polygon&&console.error("You can't cut polygons with self-intersections"),!1}var r,i,a,o,s})).forEach((function(n){var i;if(n instanceof L.Polygon){var a=(i=L.polygon(n.getLatLngs())).getLatLngs();r.forEach((function(t){if(t&&t.snapInfo){var n=t.latlng,r=e._calcClosestLayer(n,[i]);if(r&&r.segment&&r.distance<e.options.snapDistance){var o=r.segment;if(o&&2===o.length){var s=L.PM.Utils._getIndexFromSegment(a,o),l=s.indexPath,h=s.parentPath,u=s.newIndex;(l.length>1?R()(a,h):a).splice(u,0,n)}}}}))}else i=n;var o=e._cutLayer(t,i),s=L.geoJSON(o,n.options);if(1===s.getLayers().length){var l=s.getLayers();s=wn(l,1)[0]}e._setPane(s,"layerPane");var h=s.addTo(e._map.pm._getContainingLayer());if(h.pm.enable(n.pm.options),h.pm.disable(),n._pmTempLayer=!0,t._pmTempLayer=!0,n.remove(),n.removeFrom(e._map.pm._getContainingLayer()),t.remove(),t.removeFrom(e._map.pm._getContainingLayer()),h.getLayers&&0===h.getLayers().length&&e._map.pm.removeLayer({target:h}),h instanceof L.LayerGroup?(h.eachLayer((function(t){e._addDrawnLayerProp(t)})),e._addDrawnLayerProp(h)):e._addDrawnLayerProp(h),e.options.layersToCut&&L.Util.isArray(e.options.layersToCut)&&e.options.layersToCut.length>0){var u=e.options.layersToCut.indexOf(n);u>-1&&e.options.layersToCut.splice(u,1)}e._editedLayers.push({layer:h,originalLayer:n})}))},_cutLayer:function(t,e){var n,r,i,a,o,s,l=L.geoJSON();if(e instanceof L.Polygon)r=e.toGeoJSON(15),i=t.toGeoJSON(15),a=vn(r),o=vn(i),n=0===(s=_n.a.difference(a.coordinates,o.coordinates)).length?null:1===s.length?Ln(s[0]):kn(s);else{var h=Mn(e);h.forEach((function(e){var n=pn(e,t.toGeoJSON(15));(n&&n.features.length>0?L.geoJSON(n):L.geoJSON(e)).getLayers().forEach((function(e){gn()(t.toGeoJSON(15),e.toGeoJSON(15))||e.addTo(l)}))})),n=h.length>1?xn(l):l.toGeoJSON(15)}return n}});var Cn={enableLayerDrag:function(){var t;if(this.options.draggable){this.disable(),this._layerDragEnabled=!0,this._map||(this._map=this._layer._map),(this._layer instanceof L.Marker||this._layer instanceof L.ImageOverlay)&&L.DomEvent.on(this._getDOMElem(),"dragstart",this._stopDOMImageDrag),this._layer.dragging&&this._layer.dragging.disable(),this._tempDragCoord=null,(null===(t=this._layer._map)||void 0===t?void 0:t.options.preferCanvas)?(this._layer.on("mouseout",this.removeDraggingClass,this),this._layer.on("mouseover",this.addDraggingClass,this)):this.addDraggingClass(),this._originalMapDragState=this._layer._map.dragging._enabled,this._safeToCacheDragState=!0;var e=this._layer instanceof L.Marker?this._layer._icon:this._layer._path;e&&L.DomEvent.on(e,"touchstart mousedown",this._simulateMouseDownEvent,this)}},disableLayerDrag:function(){var t;this._layerDragEnabled=!1,(null===(t=this._layer._map)||void 0===t?void 0:t.options.preferCanvas)?(this._layer.off("mouseout",this.removeDraggingClass,this),this._layer.off("mouseover",this.addDraggingClass,this)):this.removeDraggingClass(),this._safeToCacheDragState=!1,this._layer.dragging&&this._layer.dragging.disable();var e=this._layer instanceof L.Marker?this._layer._icon:this._layer._path;e&&L.DomEvent.off(e,"touchstart mousedown",this._simulateMouseDownEvent,this)},dragging:function(){return this._dragging},layerDragEnabled:function(){return!!this._layerDragEnabled},_simulateMouseDownEvent:function(t){var e={originalEvent:t,target:this._layer};return e.containerPoint=this._map.mouseEventToContainerPoint(t),e.latlng=this._map.containerPointToLatLng(e.containerPoint),this._dragMixinOnMouseDown(e),!1},_simulateMouseMoveEvent:function(t){var e={originalEvent:t,target:this._layer};return e.containerPoint=this._map.mouseEventToContainerPoint(t),e.latlng=this._map.containerPointToLatLng(e.containerPoint),this._dragMixinOnMouseMove(e),!1},_simulateMouseUpEvent:function(t){var e={originalEvent:t,target:this._layer};return e.containerPoint=this._map.mouseEventToContainerPoint(t),e.latlng=this._map.containerPointToLatLng(e.containerPoint),this._dragMixinOnMouseUp(e),!1},_dragMixinOnMouseDown:function(t){if(!(t.originalEvent.button>0)){this._overwriteEventIfItComesFromMarker(t);var e=t._fromLayerSync,n=this._syncLayers("_dragMixinOnMouseDown",t);this._layer instanceof L.Marker&&(!this.options.snappable||e||n?this._disableSnapping():this._initSnappableMarkers()),this._layer instanceof L.CircleMarker&&!(this._layer instanceof L.Circle)&&(!this.options.snappable||e||n?this._layer.pm.options.editable?this._layer.pm._disableSnapping():this._layer.pm._disableSnappingDrag():this._layer.pm.options.editable||this._initSnappableMarkersDrag()),this._safeToCacheDragState&&(this._originalMapDragState=this._layer._map.dragging._enabled,this._safeToCacheDragState=!1),this._tempDragCoord=t.latlng,L.DomEvent.on(this._map.getContainer(),"touchend mouseup",this._simulateMouseUpEvent,this),L.DomEvent.on(this._map.getContainer(),"touchmove mousemove",this._simulateMouseMoveEvent,this)}},_dragMixinOnMouseMove:function(t){this._overwriteEventIfItComesFromMarker(t);var e=this._getDOMElem();this._syncLayers("_dragMixinOnMouseMove",t),this._dragging||(this._dragging=!0,L.DomUtil.addClass(e,"leaflet-pm-dragging"),this._layer instanceof L.Marker||this._layer.bringToFront(),this._originalMapDragState&&this._layer._map.dragging.disable(),this._fireDragStart()),this._onLayerDrag(t),this._layer instanceof L.CircleMarker&&this._layer.pm._updateHiddenPolyCircle()},_dragMixinOnMouseUp:function(t){var e=this,n=this._getDOMElem();return this._syncLayers("_dragMixinOnMouseUp",t),this._originalMapDragState&&this._layer._map.dragging.enable(),this._safeToCacheDragState=!0,L.DomEvent.off(this._map.getContainer(),"touchmove mousemove",this._simulateMouseMoveEvent,this),L.DomEvent.off(this._map.getContainer(),"touchend mouseup",this._simulateMouseUpEvent,this),!!this._dragging&&(this._layer instanceof L.CircleMarker&&this._layer.pm._updateHiddenPolyCircle(),window.setTimeout((function(){e._dragging=!1,L.DomUtil.removeClass(n,"leaflet-pm-dragging"),e._fireDragEnd(),e._fireEdit(),e._layerEdited=!0}),10),!0)},_onLayerDrag:function(t){var e=t.latlng,n=e.lat-this._tempDragCoord.lat,r=e.lng-this._tempDragCoord.lng,i=function u(t){return t.map((function(t){return Array.isArray(t)?u(t):{lat:t.lat+n,lng:t.lng+r}}))};if(this._layer instanceof L.Circle||this._layer instanceof L.CircleMarker&&this._layer.options.editable){var a=i([this._layer.getLatLng()]);this._layer.setLatLng(a[0])}else if(this._layer instanceof L.CircleMarker||this._layer instanceof L.Marker){var o=this._layer.getLatLng();this._layer._snapped&&(o=this._layer._orgLatLng);var s=i([o]);this._layer.setLatLng(s[0])}else if(this._layer instanceof L.ImageOverlay){var l=i([this._layer.getBounds().getNorthWest(),this._layer.getBounds().getSouthEast()]);this._layer.setBounds(l)}else{var h=i(this._layer.getLatLngs());this._layer.setLatLngs(h)}this._tempDragCoord=e,t.layer=this._layer,this._fireDrag(t)},addDraggingClass:function(){var t=this._getDOMElem();t&&L.DomUtil.addClass(t,"leaflet-pm-draggable")},removeDraggingClass:function(){var t=this._getDOMElem();t&&L.DomUtil.removeClass(t,"leaflet-pm-draggable")},_getDOMElem:function(){var t=null;return this._layer._path?t=this._layer._path:this._layer._renderer&&this._layer._renderer._container?t=this._layer._renderer._container:this._layer._image?t=this._layer._image:this._layer._icon&&(t=this._layer._icon),t},_overwriteEventIfItComesFromMarker:function(t){t.target.getLatLng&&(!t.target._radius||t.target._radius<=10)&&(t.containerPoint=this._map.mouseEventToContainerPoint(t.originalEvent),t.latlng=this._map.containerPointToLatLng(t.containerPoint))},_syncLayers:function(t,e){var n=this;if(this.enabled())return!1;if(!e._fromLayerSync&&this._layer===e.target&&this.options.syncLayersOnDrag){e._fromLayerSync=!0;var r=[];if(L.Util.isArray(this.options.syncLayersOnDrag))r=this.options.syncLayersOnDrag,this.options.syncLayersOnDrag.forEach((function(t){t instanceof L.LayerGroup&&(r=r.concat(t.pm.getLayers(!0)))}));else if(!0===this.options.syncLayersOnDrag&&this._parentLayerGroup)for(var i in this._parentLayerGroup){var a=this._parentLayerGroup[i];a.pm&&(r=a.pm.getLayers(!0))}return L.Util.isArray(r)&&r.length>0&&(r=r.filter((function(t){return!!t.pm})).filter((function(t){return!!t.pm.options.draggable}))).forEach((function(r){r!==n._layer&&r.pm[t]&&(r._snapped=!1,r.pm[t](e))})),r.length>0}return!1},_stopDOMImageDrag:function(t){return t.preventDefault(),!1}};function En(t,e){e instanceof L.Layer&&(e=e.getLatLng());var n=t.getMaxZoom();return n===Infinity&&(n=t.getZoom()),t.project(e,n)}function Sn(t,e){var n=t.getMaxZoom();return n===Infinity&&(n=t.getZoom()),t.unproject(e,n)}var On={_onRotateStart:function(t){this._preventRenderingMarkers(!0),this._rotationOriginLatLng=this._getRotationCenter().clone(),this._rotationOriginPoint=En(this._map,this._rotationOriginLatLng),this._rotationStartPoint=En(this._map,t.target.getLatLng()),this._initialRotateLatLng=F(this._layer),this._startAngle=this.getAngle();var e=F(this._rotationLayer,this._rotationLayer.pm._rotateOrgLatLng);this._fireRotationStart(this._rotationLayer,e),this._fireRotationStart(this._map,e)},_onRotate:function(t){var e=En(this._map,t.target.getLatLng()),n=this._rotationStartPoint,r=this._rotationOriginPoint,i=Math.atan2(e.y-r.y,e.x-r.x)-Math.atan2(n.y-r.y,n.x-r.x);this._layer.setLatLngs(this._rotateLayer(i,this._initialRotateLatLng,this._rotationOriginLatLng,L.PM.Matrix.init(),this._map));var a=this;!function h(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[],n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:-1;if(n>-1&&e.push(n),L.Util.isArray(t[0]))t.forEach((function(t,n){return h(t,e.slice(),n)}));else{var r=R()(a._markers,e);t.forEach((function(t,e){r[e].setLatLng(t)}))}}(this._layer.getLatLngs());var o=F(this._rotationLayer);this._rotationLayer.setLatLngs(this._rotateLayer(i,this._rotationLayer.pm._rotateOrgLatLng,this._rotationOriginLatLng,L.PM.Matrix.init(),this._map));var s=180*i/Math.PI,l=(s=s<0?s+360:s)+this._startAngle;this._setAngle(l),this._rotationLayer.pm._setAngle(l),this._fireRotation(this._rotationLayer,s,o),this._fireRotation(this._map,s,o)},_onRotateEnd:function(){var t=this._startAngle;delete this._rotationOriginLatLng,delete this._rotationOriginPoint,delete this._rotationStartPoint,delete this._initialRotateLatLng,delete this._startAngle;var e=F(this._rotationLayer,this._rotationLayer.pm._rotateOrgLatLng);this._rotationLayer.pm._rotateOrgLatLng=F(this._rotationLayer),this._fireRotationEnd(this._rotationLayer,t,e),this._fireRotationEnd(this._map,t,e),this._rotationLayer.pm._fireEdit(this._rotationLayer,"Rotation"),this._preventRenderingMarkers(!1)},_rotateLayer:function(t,e,n,r,i){var a=En(i,n);return this._matrix=r.clone().rotate(t,a).flip(),function o(t,e,n){var r=n.getMaxZoom();if(r===Infinity&&(r=n.getZoom()),L.Util.isArray(t)){var i=[];return t.forEach((function(t){i.push(o(t,e,n))})),i}return t instanceof L.LatLng?function(t,e,n,r){return n.unproject(e.transform(n.project(t,r)),r)}(t,e,n,r):null}(e,this._matrix,i)},_setAngle:function(t){t=t<0?t+360:t,this._angle=t%360},_getRotationCenter:function(){var t=L.polygon(this._layer.getLatLngs(),{stroke:!1,fill:!1,pmIgnore:!0}).addTo(this._layer._map),e=t.getCenter();return t.removeFrom(this._layer._map),e},enableRotate:function(){if(this.options.allowRotation){this._rotatePoly=L.polygon(this._layer.getLatLngs(),{fill:!1,stroke:!1,pmIgnore:!1,snapIgnore:!0}).addTo(this._layer._map),this._rotatePoly.pm._setAngle(this.getAngle()),this._rotatePoly.pm.setOptions(this._layer._map.pm.getGlobalOptions()),this._rotatePoly.pm.setOptions({rotate:!0,snappable:!1,hideMiddleMarkers:!0}),this._rotatePoly.pm._rotationLayer=this._layer,this._rotatePoly.pm.enable(),this._rotateOrgLatLng=F(this._layer),this._rotateEnabled=!0,this._layer.on("remove",this.disableRotate,this),this._fireRotationEnable(this._layer),this._fireRotationEnable(this._layer._map)}else this.disableRotate()},disableRotate:function(){this.rotateEnabled()&&(this._rotatePoly.pm.disable(),this._rotatePoly.remove(),this._rotatePoly.pm.setOptions({rotate:!1}),this._rotatePoly=undefined,this._rotateOrgLatLng=undefined,this._layer.off("remove",this.disableRotate,this),this._rotateEnabled=!1,this._fireRotationDisable(this._layer),this._fireRotationDisable(this._layer._map))},rotateEnabled:function(){return this._rotateEnabled},rotateLayer:function(t){var e=t*(Math.PI/180);this._layer.setLatLngs(this._rotateLayer(e,this._layer.getLatLngs(),this._getRotationCenter(),L.PM.Matrix.init(),this._layer._map)),this._rotateOrgLatLng=L.polygon(this._layer.getLatLngs()).getLatLngs(),this._setAngle(this.getAngle()+t),this.rotateEnabled()&&this._rotatePoly&&this._rotatePoly.pm.enabled()&&(this._rotatePoly.setLatLngs(this._rotateLayer(e,this._rotatePoly.getLatLngs(),this._getRotationCenter(),L.PM.Matrix.init(),this._rotatePoly._map)),this._rotatePoly.pm._initMarkers())},rotateLayerToAngle:function(t){var e=t-this.getAngle();this.rotateLayer(e)},getAngle:function(){return this._angle||0}},Bn=L.Class.extend({includes:[Cn,et,On,E],options:{snappable:!0,snapDistance:20,allowSelfIntersection:!0,allowSelfIntersectionEdit:!1,preventMarkerRemoval:!1,removeLayerBelowMinVertexCount:!0,limitMarkersToCount:-1,hideMiddleMarkers:!1,snapSegment:!0,syncLayersOnDrag:!1,draggable:!0,allowEditing:!0,allowRemoval:!0,allowCutting:!0,allowRotation:!0,addVertexOn:"click",removeVertexOn:"contextmenu",removeVertexValidation:undefined,addVertexValidation:undefined,moveVertexValidation:undefined},setOptions:function(t){L.Util.setOptions(this,t)},getOptions:function(){return this.options},applyOptions:function(){},isPolygon:function(){return this._layer instanceof L.Polygon},getShape:function(){return this._shape},_setPane:function(t,e){"layerPane"===e?t.options.pane=this._map.pm.globalOptions.panes&&this._map.pm.globalOptions.panes.layerPane||"overlayPane":"vertexPane"===e?t.options.pane=this._map.pm.globalOptions.panes&&this._map.pm.globalOptions.panes.vertexPane||"markerPane":"markerPane"===e&&(t.options.pane=this._map.pm.globalOptions.panes&&this._map.pm.globalOptions.panes.markerPane||"markerPane")},remove:function(){(this._map||this._layer._map).pm.removeLayer({target:this._layer})},_vertexValidation:function(t,e){var n=e.target,r={layer:this._layer,marker:n,event:e},i="";return"move"===t?i="moveVertexValidation":"add"===t?i="addVertexValidation":"remove"===t&&(i="removeVertexValidation"),this.options[i]&&"function"==typeof this.options[i]&&!this.options[i](r)?("move"===t&&(n._cancelDragEventChain=n.getLatLng()),!1):(n._cancelDragEventChain=null,!0)},_vertexValidationDrag:function(t){return!t._cancelDragEventChain||(t._latlng=t._cancelDragEventChain,t.update(),!1)},_vertexValidationDragEnd:function(t){return!t._cancelDragEventChain||(t._cancelDragEventChain=null,!1)}});function Rn(t){return function(t){if(Array.isArray(t))return Dn(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return Dn(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Dn(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Dn(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}Bn.LayerGroup=L.Class.extend({initialize:function(t){var e=this;this._layerGroup=t,this._layers=this.getLayers(),this._getMap(),this._layers.forEach((function(t){return e._initLayer(t)}));this._layerGroup.on("layeradd",L.Util.throttle((function(t){if(!t.layer._pmTempLayer){e._layers=e.getLayers();var n=e._layers.filter((function(t){return!t.pm._parentLayerGroup||!(e._layerGroup._leaflet_id in t.pm._parentLayerGroup)}));n.forEach((function(t){e._initLayer(t)})),n.length>0&&e._getMap()&&e._getMap().pm.globalEditModeEnabled()&&e.enabled()&&e.enable(e.getOptions())}}),100,this),this),this._layerGroup.on("layerremove",(function(t){e._removeLayerFromGroup(t.target)}),this);this._layerGroup.on("layerremove",L.Util.throttle((function(t){t.target._pmTempLayer||(e._layers=e.getLayers())}),100,this),this)},enable:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];0===e.length&&(this._layers=this.getLayers()),this._options=t,this._layers.forEach((function(n){n instanceof L.LayerGroup?-1===e.indexOf(n._leaflet_id)&&(e.push(n._leaflet_id),n.pm.enable(t,e)):n.pm.enable(t)}))},disable:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];0===t.length&&(this._layers=this.getLayers()),this._layers.forEach((function(e){e instanceof L.LayerGroup?-1===t.indexOf(e._leaflet_id)&&(t.push(e._leaflet_id),e.pm.disable(t)):e.pm.disable()}))},enabled:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];0===t.length&&(this._layers=this.getLayers());var e=this._layers.find((function(e){return e instanceof L.LayerGroup?-1===t.indexOf(e._leaflet_id)&&(t.push(e._leaflet_id),e.pm.enabled(t)):e.pm.enabled()}));return!!e},toggleEdit:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];0===e.length&&(this._layers=this.getLayers()),this._options=t,this._layers.forEach((function(n){n instanceof L.LayerGroup?-1===e.indexOf(n._leaflet_id)&&(e.push(n._leaflet_id),n.pm.toggleEdit(t,e)):n.pm.toggleEdit(t)}))},_initLayer:function(t){var e=L.Util.stamp(this._layerGroup);t.pm._parentLayerGroup||(t.pm._parentLayerGroup={}),t.pm._parentLayerGroup[e]=this._layerGroup},_removeLayerFromGroup:function(t){if(t.pm&&t.pm._layerGroup){var e=L.Util.stamp(this._layerGroup);delete t.pm._layerGroup[e]}},dragging:function(){if(this._layers=this.getLayers(),this._layers){var t=this._layers.find((function(t){return t.pm.dragging()}));return!!t}return!1},getOptions:function(){return this.options},_getMap:function(){var t;return this._map||(null===(t=this._layers.find((function(t){return!!t._map})))||void 0===t?void 0:t._map)||null},getLayers:function(){var t=arguments.length>0&&arguments[0]!==undefined&&arguments[0],e=!(arguments.length>1&&arguments[1]!==undefined)||arguments[1],n=!(arguments.length>2&&arguments[2]!==undefined)||arguments[2],r=arguments.length>3&&arguments[3]!==undefined?arguments[3]:[],i=[];return t?this._layerGroup.getLayers().forEach((function(t){i.push(t),t instanceof L.LayerGroup&&-1===r.indexOf(t._leaflet_id)&&(r.push(t._leaflet_id),i=i.concat(t.pm.getLayers(!0,!0,!0,r)))})):i=this._layerGroup.getLayers(),n&&(i=i.filter((function(t){return!(t instanceof L.LayerGroup)}))),e&&(i=(i=(i=i.filter((function(t){return!!t.pm}))).filter((function(t){return!t._pmTempLayer}))).filter((function(t){return!L.PM.optIn&&!t.options.pmIgnore||L.PM.optIn&&!1===t.options.pmIgnore}))),i},setOptions:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];0===e.length&&(this._layers=this.getLayers()),this.options=t,this._layers.forEach((function(n){n.pm&&(n instanceof L.LayerGroup?-1===e.indexOf(n._leaflet_id)&&(e.push(n._leaflet_id),n.pm.setOptions(t,e)):n.pm.setOptions(t))}))}}),Bn.Marker=Bn.extend({_shape:"Marker",initialize:function(t){this._layer=t,this._enabled=!1,this._layer.on("dragend",this._onDragEnd,this)},enable:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{draggable:!0};L.Util.setOptions(this,t),this._map=this._layer._map,this.options.allowEditing?this.enabled()||(this.applyOptions(),this._enabled=!0,this._fireEnable()):this.disable()},disable:function(){this._enabled=!1,this.disableLayerDrag(),this._layer.off("contextmenu",this._removeMarker,this),this.enabled()&&(this._layerEdited&&this._fireUpdate(),this._layerEdited=!1,this._fireDisable())},enabled:function(){return this._enabled},toggleEdit:function(t){this.enabled()?this.disable():this.enable(t)},applyOptions:function(){this.options.snappable?this._initSnappableMarkers():this._disableSnapping(),this.options.draggable?this.enableLayerDrag():this.disableLayerDrag(),this.options.preventMarkerRemoval||this._layer.on("contextmenu",this._removeMarker,this)},_removeMarker:function(t){var e=t.target;e.remove(),this._fireRemove(e),this._fireRemove(this._map,e)},_onDragEnd:function(){this._fireEdit(),this._layerEdited=!0},_initSnappableMarkers:function(){var t=this._layer;this.options.snapDistance=this.options.snapDistance||30,this.options.snapSegment=this.options.snapSegment===undefined||this.options.snapSegment,t.off("pm:drag",this._handleSnapping,this),t.on("pm:drag",this._handleSnapping,this),t.off("pm:dragend",this._cleanupSnapping,this),t.on("pm:dragend",this._cleanupSnapping,this),t.off("pm:dragstart",this._unsnap,this),t.on("pm:dragstart",this._unsnap,this)},_disableSnapping:function(){var t=this._layer;t.off("pm:drag",this._handleSnapping,this),t.off("pm:dragend",this._cleanupSnapping,this),t.off("pm:dragstart",this._unsnap,this)}});var In={filterMarkerGroup:function(){this.markerCache=[],this.createCache(),this._layer.on("pm:edit",this.createCache,this),this.applyLimitFilters({}),this._layer.on("pm:disable",this._removeMarkerLimitEvents,this),this.options.limitMarkersToCount>-1&&(this._layer.on("pm:vertexremoved",this._initMarkers,this),this._map.on("mousemove",this.applyLimitFilters,this))},_removeMarkerLimitEvents:function(){this._map.off("mousemove",this.applyLimitFilters,this),this._layer.off("pm:edit",this.createCache,this),this._layer.off("pm:disable",this._removeMarkerLimitEvents,this),this._layer.off("pm:vertexremoved",this._initMarkers,this)},createCache:function(){var t=[].concat(Rn(this._markerGroup.getLayers()),Rn(this.markerCache));this.markerCache=t.filter((function(t,e,n){return n.indexOf(t)===e}))},renderLimits:function(t){var e=this;this.markerCache.forEach((function(n){t.includes(n)?e._markerGroup.addLayer(n):e._markerGroup.removeLayer(n)}))},applyLimitFilters:function(t){var e=t.latlng,n=void 0===e?{lat:0,lng:0}:e;if(!this._preventRenderMarkers){var r=Rn(this._filterClosestMarkers(n));this.renderLimits(r)}},_filterClosestMarkers:function(t){var e=Rn(this.markerCache),n=this.options.limitMarkersToCount;return e.sort((function(e,n){return e._latlng.distanceTo(t)-n._latlng.distanceTo(t)})),e.filter((function(t,e){return!(n>-1)||e<n}))},_preventRenderMarkers:!1,_preventRenderingMarkers:function(t){this._preventRenderMarkers=!!t}};function Tn(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,i=!1,a=undefined;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(l){i=!0,a=l}finally{try{r||null==s["return"]||s["return"]()}finally{if(i)throw a}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return jn(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return jn(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function jn(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}Bn.Line=Bn.extend({includes:[In],_shape:"Line",initialize:function(t){this._layer=t,this._enabled=!1},enable:function(t){L.Util.setOptions(this,t),this._map=this._layer._map,this._map&&(this.options.allowEditing?(this.enabled()&&this.disable(),this._enabled=!0,this._initMarkers(),this.applyOptions(),this._layer.on("remove",this._onLayerRemove,this),this.options.allowSelfIntersection||this._layer.on("pm:vertexremoved",this._handleSelfIntersectionOnVertexRemoval,this),this.options.allowSelfIntersection?this.cachedColor=undefined:("#f00000ff"!==this._layer.options.color?(this.cachedColor=this._layer.options.color,this.isRed=!1):this.isRed=!0,this._handleLayerStyle()),this._fireEnable()):this.disable())},disable:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this._layer;if(!this.enabled())return!1;if(t.pm._dragging)return!1;t.pm._enabled=!1,t.pm._markerGroup.clearLayers(),t.pm._markerGroup.removeFrom(this._map),this._layer.off("remove",this._onLayerRemove,this),this.options.allowSelfIntersection||this._layer.off("pm:vertexremoved",this._handleSelfIntersectionOnVertexRemoval,this);var e=t._path?t._path:this._layer._renderer._container;return L.DomUtil.removeClass(e,"leaflet-pm-draggable"),this.hasSelfIntersection()&&L.DomUtil.removeClass(e,"leaflet-pm-invalid"),this._layerEdited&&this._fireUpdate(),this._layerEdited=!1,this._fireDisable(),!0},enabled:function(){return this._enabled},toggleEdit:function(t){return this.enabled()?this.disable():this.enable(t),this.enabled()},applyOptions:function(){this.options.snappable?this._initSnappableMarkers():this._disableSnapping()},_onLayerRemove:function(t){this.disable(t.target)},_initMarkers:function(){var t=this,e=this._map,n=this._layer.getLatLngs();this._markerGroup&&this._markerGroup.clearLayers(),this._markerGroup=new L.LayerGroup,this._markerGroup._pmTempLayer=!0;this._markers=function r(e){if(Array.isArray(e[0]))return e.map(r,t);var n=e.map(t._createMarker,t);return!0!==t.options.hideMiddleMarkers&&e.map((function(r,i){var a=t.isPolygon()?(i+1)%e.length:i+1;return t._createMiddleMarker(n[i],n[a])})),n}(n),this.filterMarkerGroup(),e.addLayer(this._markerGroup)},_createMarker:function(t){var e=new L.Marker(t,{draggable:!0,icon:L.divIcon({className:"marker-icon"})});return this._setPane(e,"vertexPane"),e._pmTempLayer=!0,this.options.rotate?(e.on("dragstart",this._onRotateStart,this),e.on("drag",this._onRotate,this),e.on("dragend",this._onRotateEnd,this)):(e.on("click",this._onVertexClick,this),e.on("dragstart",this._onMarkerDragStart,this),e.on("move",this._onMarkerDrag,this),e.on("dragend",this._onMarkerDragEnd,this),this.options.preventMarkerRemoval||e.on(this.options.removeVertexOn,this._removeMarker,this)),this._markerGroup.addLayer(e),e},_createMiddleMarker:function(t,e){if(!t||!e)return!1;var n=L.PM.Utils.calcMiddleLatLng(this._map,t.getLatLng(),e.getLatLng()),r=this._createMarker(n),i=L.divIcon({className:"marker-icon marker-icon-middle"});return r.setIcon(i),r.leftM=t,r.rightM=e,t._middleMarkerNext=r,e._middleMarkerPrev=r,r.on(this.options.addVertexOn,this._onMiddleMarkerClick,this),r.on("movestart",this._onMiddleMarkerMoveStart,this),r},_onMiddleMarkerClick:function(t){var e=t.target;if(this._vertexValidation("add",t)){var n=L.divIcon({className:"marker-icon"});e.setIcon(n),this._addMarker(e,e.leftM,e.rightM)}},_onMiddleMarkerMoveStart:function(t){var e=t.target;e.on("moveend",this._onMiddleMarkerMoveEnd,this),this._vertexValidation("add",t)?(e._dragging=!0,this._addMarker(e,e.leftM,e.rightM)):e.on("move",this._onMiddleMarkerMovePrevent,this)},_onMiddleMarkerMovePrevent:function(t){var e=t.target;this._vertexValidationDrag(e)},_onMiddleMarkerMoveEnd:function(t){var e=t.target;if(e.off("move",this._onMiddleMarkerMovePrevent,this),e.off("moveend",this._onMiddleMarkerMoveEnd,this),this._vertexValidationDragEnd(e)){var n=L.divIcon({className:"marker-icon"});e.setIcon(n),setTimeout((function(){delete e._dragging}),100)}},_addMarker:function(t,e,n){t.off("movestart",this._onMiddleMarkerMoveStart,this),t.off(this.options.addVertexOn,this._onMiddleMarkerClick,this);var r=t.getLatLng(),i=this._layer._latlngs;delete t.leftM,delete t.rightM;var a=this.findDeepMarkerIndex(this._markers,e),o=a.indexPath,s=a.index,l=a.parentPath,h=o.length>1?R()(i,l):i,u=o.length>1?R()(this._markers,l):this._markers;h.splice(s+1,0,r),u.splice(s+1,0,t),this._layer.setLatLngs(i),!0!==this.options.hideMiddleMarkers&&(this._createMiddleMarker(e,t),this._createMiddleMarker(t,n)),this._fireEdit(),this._layerEdited=!0,this._fireVertexAdded(t,this.findDeepMarkerIndex(this._markers,t).indexPath,r),this.options.snappable&&this._initSnappableMarkers()},hasSelfIntersection:function(){return it()(this._layer.toGeoJSON(15)).features.length>0},_handleSelfIntersectionOnVertexRemoval:function(){this._handleLayerStyle(!0),this.hasSelfIntersection()&&(this._layer.setLatLngs(this._coordsBeforeEdit),this._coordsBeforeEdit=null,this._initMarkers())},_handleLayerStyle:function(t){var e=this._layer;if(this.hasSelfIntersection()){if(!this.options.allowSelfIntersection&&this.options.allowSelfIntersectionEdit&&this._updateDisabledMarkerStyle(this._markers,!0),this.isRed)return;t?this._flashLayer():(e.setStyle({color:"#f00000ff"}),this.isRed=!0),this._fireIntersect(it()(this._layer.toGeoJSON(15)))}else e.setStyle({color:this.cachedColor}),this.isRed=!1,!this.options.allowSelfIntersection&&this.options.allowSelfIntersectionEdit&&this._updateDisabledMarkerStyle(this._markers,!1)},_flashLayer:function(){var t=this;this.cachedColor||(this.cachedColor=this._layer.options.color),this._layer.setStyle({color:"#f00000ff"}),this.isRed=!0,window.setTimeout((function(){t._layer.setStyle({color:t.cachedColor}),t.isRed=!1}),200)},_updateDisabledMarkerStyle:function(t,e){var n=this;t.forEach((function(t){if(Array.isArray(t))return n._updateDisabledMarkerStyle(t,e);t._icon&&(e&&!n._checkMarkerAllowedToDrag(t)?L.DomUtil.addClass(t._icon,"vertexmarker-disabled"):L.DomUtil.removeClass(t._icon,"vertexmarker-disabled"))}))},_removeMarker:function(t){var e=t.target;if(this._vertexValidation("remove",t)){if(!this.options.allowSelfIntersection){var n=this._layer.getLatLngs();this._coordsBeforeEdit=JSON.parse(JSON.stringify(n))}var r=this._layer.getLatLngs(),i=this.findDeepMarkerIndex(this._markers,e),a=i.indexPath,o=i.index,s=i.parentPath;if(a){var l=a.length>1?R()(r,s):r,h=a.length>1?R()(this._markers,s):this._markers;if(this.options.removeLayerBelowMinVertexCount||!(l.length<=2||this.isPolygon()&&l.length<=3)){l.splice(o,1),this._layer.setLatLngs(r),this.isPolygon()&&l.length<=2&&l.splice(0,l.length);var u=!1;if(l.length<=1&&(l.splice(0,l.length),this._layer.setLatLngs(r),this.disable(),this.enable(this.options),u=!0),j(r)&&this._layer.remove(),r=A(r),this._layer.setLatLngs(r),this._markers=A(this._markers),!u&&(h=a.length>1?R()(this._markers,s):this._markers,e._middleMarkerPrev&&this._markerGroup.removeLayer(e._middleMarkerPrev),e._middleMarkerNext&&this._markerGroup.removeLayer(e._middleMarkerNext),this._markerGroup.removeLayer(e),h)){var c,f;if(this.isPolygon()?(c=(o+1)%h.length,f=(o+(h.length-1))%h.length):(f=o-1<0?undefined:o-1,c=o+1>=h.length?undefined:o+1),c!==f){var p=h[f],d=h[c];!0!==this.options.hideMiddleMarkers&&this._createMiddleMarker(p,d)}h.splice(o,1)}this._fireEdit(),this._layerEdited=!0,this._fireVertexRemoved(e,a)}else this._flashLayer()}}},findDeepMarkerIndex:function(t,e){var n;t.some(function i(t){return function(r,a){var o=t.concat(a);return r._leaflet_id===e._leaflet_id?(n=o,!0):Array.isArray(r)&&r.some(i(o))}}([]));var r={};return n&&(r={indexPath:n,index:n[n.length-1],parentPath:n.slice(0,n.length-1)}),r},updatePolygonCoordsFromMarkerDrag:function(t){var e=this._layer.getLatLngs(),n=t.getLatLng(),r=this.findDeepMarkerIndex(this._markers,t),i=r.indexPath,a=r.index,o=r.parentPath;(i.length>1?R()(e,o):e).splice(a,1,n),this._layer.setLatLngs(e)},_getNeighborMarkers:function(t){var e=this.findDeepMarkerIndex(this._markers,t),n=e.indexPath,r=e.index,i=e.parentPath,a=n.length>1?R()(this._markers,i):this._markers,o=(r+1)%a.length;return{prevMarker:a[(r+(a.length-1))%a.length],nextMarker:a[o]}},_checkMarkerAllowedToDrag:function(t){var e=this._getNeighborMarkers(t),n=e.prevMarker,r=e.nextMarker,i=L.polyline([n.getLatLng(),t.getLatLng()]),a=L.polyline([t.getLatLng(),r.getLatLng()]),o=ft()(this._layer.toGeoJSON(15),i.toGeoJSON(15)).features.length,s=ft()(this._layer.toGeoJSON(15),a.toGeoJSON(15)).features.length;return t.getLatLng()===this._markers[0][0].getLatLng()?s+=1:t.getLatLng()===this._markers[0][this._markers[0].length-1].getLatLng()&&(o+=1),!(o<=2&&s<=2)},_onMarkerDragStart:function(t){var e=t.target;if(this.cachedColor||(this.cachedColor=this._layer.options.color),this._vertexValidation("move",t)){var n=this.findDeepMarkerIndex(this._markers,e).indexPath;this._fireMarkerDragStart(t,n),this.options.allowSelfIntersection||(this._coordsBeforeEdit=this._layer.getLatLngs()),!this.options.allowSelfIntersection&&this.options.allowSelfIntersectionEdit&&this.hasSelfIntersection()?this._markerAllowedToDrag=this._checkMarkerAllowedToDrag(e):this._markerAllowedToDrag=null}},_onMarkerDrag:function(t){var e=t.target;if(this._vertexValidationDrag(e)){var n=this.findDeepMarkerIndex(this._markers,e),r=n.indexPath,i=n.index,a=n.parentPath;if(r){if(!this.options.allowSelfIntersection&&this.options.allowSelfIntersectionEdit&&this.hasSelfIntersection()&&!1===this._markerAllowedToDrag)return this._layer.setLatLngs(this._coordsBeforeEdit),this._initMarkers(),void this._handleLayerStyle();this.updatePolygonCoordsFromMarkerDrag(e);var o=r.length>1?R()(this._markers,a):this._markers,s=(i+1)%o.length,l=(i+(o.length-1))%o.length,h=e.getLatLng(),u=o[l].getLatLng(),c=o[s].getLatLng();if(e._middleMarkerNext){var f=L.PM.Utils.calcMiddleLatLng(this._map,h,c);e._middleMarkerNext.setLatLng(f)}if(e._middleMarkerPrev){var p=L.PM.Utils.calcMiddleLatLng(this._map,h,u);e._middleMarkerPrev.setLatLng(p)}this.options.allowSelfIntersection||this._handleLayerStyle(),this._fireMarkerDrag(t,r)}}},_onMarkerDragEnd:function(t){var e=t.target;if(this._vertexValidationDragEnd(e)){var n=this.findDeepMarkerIndex(this._markers,e).indexPath,r=this.hasSelfIntersection();r&&this.options.allowSelfIntersectionEdit&&this._markerAllowedToDrag&&(r=!1);var i=!this.options.allowSelfIntersection&&r;if(this._fireMarkerDragEnd(t,n,i),i)return this._layer.setLatLngs(this._coordsBeforeEdit),this._coordsBeforeEdit=null,this._initMarkers(),this.options.snappable&&this._initSnappableMarkers(),this._handleLayerStyle(),void this._fireLayerReset(t,n);!this.options.allowSelfIntersection&&this.options.allowSelfIntersectionEdit&&this._handleLayerStyle(),this._fireEdit(),this._layerEdited=!0}},_onVertexClick:function(t){var e=t.target;if(!e._dragging){var n=this.findDeepMarkerIndex(this._markers,e).indexPath;this._fireVertexClick(t,n)}}}),Bn.Polygon=Bn.Line.extend({_shape:"Polygon",_checkMarkerAllowedToDrag:function(t){var e=this._getNeighborMarkers(t),n=e.prevMarker,r=e.nextMarker,i=L.polyline([n.getLatLng(),t.getLatLng()]),a=L.polyline([t.getLatLng(),r.getLatLng()]),o=ft()(this._layer.toGeoJSON(15),i.toGeoJSON(15)).features.length,s=ft()(this._layer.toGeoJSON(15),a.toGeoJSON(15)).features.length;return!(o<=2&&s<=2)}}),Bn.Rectangle=Bn.Polygon.extend({_shape:"Rectangle",_initMarkers:function(){var t=this,e=this._map,n=this._findCorners();this._markerGroup&&this._markerGroup.clearLayers(),this._markerGroup=new L.LayerGroup,this._markerGroup._pmTempLayer=!0,e.addLayer(this._markerGroup),this._markers=[],this._markers[0]=n.map(this._createMarker,this);var r=Tn(this._markers,1);this._cornerMarkers=r[0],this._layer.getLatLngs()[0].forEach((function(e,n){var r=t._cornerMarkers.find((function(t){return t._index===n}));r&&r.setLatLng(e)}))},applyOptions:function(){this.options.snappable?this._initSnappableMarkers():this._disableSnapping(),this._addMarkerEvents()},_createMarker:function(t,e){var n=new L.Marker(t,{draggable:!0,icon:L.divIcon({className:"marker-icon"})});return this._setPane(n,"vertexPane"),n._origLatLng=t,n._index=e,n._pmTempLayer=!0,this._markerGroup.addLayer(n),n},_addMarkerEvents:function(){var t=this;this._markers[0].forEach((function(e){e.on("dragstart",t._onMarkerDragStart,t),e.on("drag",t._onMarkerDrag,t),e.on("dragend",t._onMarkerDragEnd,t),t.options.preventMarkerRemoval||e.on("contextmenu",t._removeMarker,t)}))},_removeMarker:function(){return null},_onMarkerDragStart:function(t){if(this._vertexValidation("move",t)){var e=t.target,n=this._cornerMarkers;e._oppositeCornerLatLng=n.find((function(t){return t._index===(e._index+2)%4})).getLatLng(),e._snapped=!1,this._fireMarkerDragStart(t)}},_onMarkerDrag:function(t){var e=t.target;this._vertexValidationDrag(e)&&e._index!==undefined&&(this._adjustRectangleForMarkerMove(e),this._fireMarkerDrag(t))},_onMarkerDragEnd:function(t){var e=t.target;this._vertexValidationDragEnd(e)&&(this._cornerMarkers.forEach((function(t){delete t._oppositeCornerLatLng})),this._fireMarkerDragEnd(t),this._fireEdit(),this._layerEdited=!0)},_adjustRectangleForMarkerMove:function(t){L.extend(t._origLatLng,t._latlng);var e=L.PM.Utils._getRotatedRectangle(t.getLatLng(),t._oppositeCornerLatLng,this._angle||0,this._map);this._layer.setLatLngs(e),this._adjustAllMarkers(),this._layer.redraw()},_adjustAllMarkers:function(){var t=this,e=this._layer.getLatLngs()[0];e&&4!==e.length&&e.length>0?(e.forEach((function(e,n){t._cornerMarkers[n].setLatLng(e)})),this._cornerMarkers.slice(e.length).forEach((function(t){t.setLatLng(e[0])}))):e&&e.length?this._cornerMarkers.forEach((function(t){t.setLatLng(e[t._index])})):console.error("The layer has no LatLngs")},_findCorners:function(){this._layer.getBounds();var t=this._layer.getLatLngs()[0];return L.PM.Utils._getRotatedRectangle(t[0],t[2],this._angle||0,this._map)}}),Bn.Circle=Bn.extend({_shape:"Circle",initialize:function(t){this._layer=t,this._enabled=!1,this._updateHiddenPolyCircle()},enable:function(t){var e=this;L.Util.setOptions(this,t),this._map=this._layer._map,this.options.allowEditing?(this.enabled()||this.disable(),this._enabled=!0,this._initMarkers(),this.applyOptions(),this._layer.on("remove",(function(t){e.disable(t.target)})),this._updateHiddenPolyCircle(),this._fireEnable()):this.disable()},disable:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this._layer;if(!this.enabled())return!1;if(t.pm._dragging)return!1;this._centerMarker.off("dragstart",this._onCircleDragStart,this),this._centerMarker.off("drag",this._onCircleDrag,this),this._centerMarker.off("dragend",this._onCircleDragEnd,this),this._outerMarker.off("drag",this._handleOuterMarkerSnapping,this),t.pm._enabled=!1,t.pm._helperLayers.clearLayers();var e=t._path?t._path:this._layer._renderer._container;return L.DomUtil.removeClass(e,"leaflet-pm-draggable"),this._layerEdited&&this._fireUpdate(),this._layerEdited=!1,this._fireDisable(),!0},enabled:function(){return this._enabled},toggleEdit:function(t){this.enabled()?this.disable():this.enable(t)},_initMarkers:function(){var t=this._map;this._helperLayers&&this._helperLayers.clearLayers(),this._helperLayers=new L.LayerGroup,this._helperLayers._pmTempLayer=!0,this._helperLayers.addTo(t);var e=this._layer.getLatLng(),n=this._layer._radius,r=this._getLatLngOnCircle(e,n);this._centerMarker=this._createCenterMarker(e),this._outerMarker=this._createOuterMarker(r),this._markers=[this._centerMarker,this._outerMarker],this._createHintLine(this._centerMarker,this._outerMarker)},applyOptions:function(){this.options.snappable?(this._initSnappableMarkers(),this._outerMarker.on("drag",this._handleOuterMarkerSnapping,this),this._outerMarker.on("move",this._syncHintLine,this),this._outerMarker.on("move",this._syncCircleRadius,this),this._centerMarker.on("move",this._moveCircle,this)):this._disableSnapping()},_createHintLine:function(t,e){var n=t.getLatLng(),r=e.getLatLng();this._hintline=L.polyline([n,r],this.options.hintlineStyle),this._setPane(this._hintline,"layerPane"),this._hintline._pmTempLayer=!0,this._helperLayers.addLayer(this._hintline)},_createCenterMarker:function(t){var e=this._createMarker(t);return L.DomUtil.addClass(e._icon,"leaflet-pm-draggable"),e.on("drag",this._moveCircle,this),e.on("dragstart",this._onCircleDragStart,this),e.on("drag",this._onCircleDrag,this),e.on("dragend",this._onCircleDragEnd,this),e},_createOuterMarker:function(t){var e=this._createMarker(t);return e.on("drag",this._resizeCircle,this),e},_createMarker:function(t){var e=new L.Marker(t,{draggable:!0,icon:L.divIcon({className:"marker-icon"})});return this._setPane(e,"vertexPane"),e._origLatLng=t,e._pmTempLayer=!0,e.on("dragstart",this._onMarkerDragStart,this),e.on("drag",this._onMarkerDrag,this),e.on("dragend",this._onMarkerDragEnd,this),this._helperLayers.addLayer(e),e},_resizeCircle:function(){this._outerMarker.setLatLng(this._getNewDestinationOfOuterMarker()),this._syncHintLine(),this._syncCircleRadius()},_moveCircle:function(t){if(!t.target._cancelDragEventChain){var e=t.latlng;this._layer.setLatLng(e);var n=this._layer._radius,r=this._getLatLngOnCircle(e,n);this._outerMarker._latlng=r,this._outerMarker.update(),this._syncHintLine(),this._updateHiddenPolyCircle(),this._fireCenterPlaced("Edit")}},_syncCircleRadius:function(){var t=this._centerMarker.getLatLng(),e=this._outerMarker.getLatLng(),n=this._map.distance(t,e);this.options.minRadiusCircle&&n<this.options.minRadiusCircle?this._layer.setRadius(this.options.minRadiusCircle):this.options.maxRadiusCircle&&n>this.options.maxRadiusCircle?this._layer.setRadius(this.options.maxRadiusCircle):this._layer.setRadius(n),this._updateHiddenPolyCircle()},_syncHintLine:function(){var t=this._centerMarker.getLatLng(),e=this._outerMarker.getLatLng();this._hintline.setLatLngs([t,e])},_disableSnapping:function(){var t=this;this._markers.forEach((function(e){e.off("move",t._syncHintLine,t),e.off("move",t._syncCircleRadius,t),e.off("drag",t._handleSnapping,t),e.off("dragend",t._cleanupSnapping,t)})),this._layer.off("pm:dragstart",this._unsnap,this)},_onMarkerDragStart:function(t){this._vertexValidation("move",t)&&this._fireMarkerDragStart(t)},_onMarkerDrag:function(t){var e=t.target;this._vertexValidationDrag(e)&&this._fireMarkerDrag(t)},_onMarkerDragEnd:function(t){var e=t.target;this._vertexValidationDragEnd(e)&&(this._fireEdit(),this._layerEdited=!0,this._fireMarkerDragEnd(t))},_onCircleDragStart:function(t){this._vertexValidationDrag(t.target)?(delete this._vertexValidationReset,this._fireDragStart(t)):this._vertexValidationReset=!0},_onCircleDrag:function(t){this._vertexValidationReset||this._fireDrag(t)},_onCircleDragEnd:function(){this._vertexValidationReset?delete this._vertexValidationReset:this._fireDragEnd()},_updateHiddenPolyCircle:function(){var t=this._map&&this._map.pm._isCRSSimple();this._hiddenPolyCircle?this._hiddenPolyCircle.setLatLngs(L.PM.Utils.circleToPolygon(this._layer,200,!t).getLatLngs()):this._hiddenPolyCircle=L.PM.Utils.circleToPolygon(this._layer,200,!t),this._hiddenPolyCircle._parentCopy||(this._hiddenPolyCircle._parentCopy=this._layer)},_getLatLngOnCircle:function(t,e){var n=this._map.project(t),r=L.point(n.x+e,n.y);return this._map.unproject(r)},_getNewDestinationOfOuterMarker:function(){var t=this._centerMarker.getLatLng(),e=this._outerMarker.getLatLng(),n=this._map.distance(t,e);return this.options.minRadiusCircle&&n<this.options.minRadiusCircle?e=z(this._map,t,e,this.options.minRadiusCircle):this.options.maxRadiusCircle&&n>this.options.maxRadiusCircle&&(e=z(this._map,t,e,this.options.maxRadiusCircle)),e},_handleOuterMarkerSnapping:function(){if(this._outerMarker._snapped){var t=this._centerMarker.getLatLng(),e=this._outerMarker.getLatLng(),n=this._map.distance(t,e);(this.options.minRadiusCircle&&n<this.options.minRadiusCircle||this.options.maxRadiusCircle&&n>this.options.maxRadiusCircle)&&this._outerMarker.setLatLng(this._outerMarker._orgLatLng)}this._outerMarker.setLatLng(this._getNewDestinationOfOuterMarker())}}),Bn.CircleMarker=Bn.extend({_shape:"CircleMarker",initialize:function(t){this._layer=t,this._enabled=!1,this._updateHiddenPolyCircle()},enable:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{draggable:!0,snappable:!0};L.Util.setOptions(this,t),this._map=this._layer._map,this._map&&(this.options.allowEditing?(this.enabled()&&this.disable(),this.applyOptions(),this._enabled=!0,this._layer.on("pm:dragstart",this._onDragStart,this),this._layer.on("pm:drag",this._onMarkerDrag,this),this._layer.on("pm:dragend",this._onMarkerDragEnd,this),this._updateHiddenPolyCircle(),this._fireEnable()):this.disable())},disable:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this._layer;return!t.pm._dragging&&(t.pm._helperLayers&&t.pm._helperLayers.clearLayers(),this._map||(this._map=this._layer._map),this.options.editable?(this._map.off("move",this._syncMarkers,this),this._outerMarker&&this._outerMarker.on("drag",this._handleOuterMarkerSnapping,this)):this._map.off("move",this._updateHiddenPolyCircle,this),this.disableLayerDrag(),this._layer.off("contextmenu",this._removeMarker,this),this.enabled()&&(this._layerEdited&&this._fireUpdate(),this._layerEdited=!1,this._fireDisable()),t.pm._enabled=!1,!0)},enabled:function(){return this._enabled},toggleEdit:function(t){this.enabled()?this.disable():this.enable(t)},applyOptions:function(){!this.options.editable&&this.options.draggable?this.enableLayerDrag():this.disableLayerDrag(),this.options.editable?(this._initMarkers(),this._map.on("move",this._syncMarkers,this)):this._map.on("move",this._updateHiddenPolyCircle,this),this.options.snappable?this.options.editable?(this._initSnappableMarkers(),this._centerMarker.on("drag",this._moveCircle,this),this.options.editable&&this._outerMarker.on("drag",this._handleOuterMarkerSnapping,this),this._outerMarker.on("move",this._syncHintLine,this),this._outerMarker.on("move",this._syncCircleRadius,this)):this._initSnappableMarkersDrag():this.options.editable?this._disableSnapping():this._disableSnappingDrag(),this.options.preventMarkerRemoval||this._layer.on("contextmenu",this._removeMarker,this)},_initMarkers:function(){var t=this._map;this._helperLayers&&this._helperLayers.clearLayers(),this._helperLayers=new L.LayerGroup,this._helperLayers._pmTempLayer=!0,this._helperLayers.addTo(t);var e=this._layer.getLatLng(),n=this._layer._radius,r=this._getLatLngOnCircle(e,n);this._centerMarker=this._createCenterMarker(e),this._outerMarker=this._createOuterMarker(r),this._markers=[this._centerMarker,this._outerMarker],this._createHintLine(this._centerMarker,this._outerMarker)},_getLatLngOnCircle:function(t,e){var n=this._map.project(t),r=L.point(n.x+e,n.y);return this._map.unproject(r)},_createHintLine:function(t,e){var n=t.getLatLng(),r=e.getLatLng();this._hintline=L.polyline([n,r],this.options.hintlineStyle),this._setPane(this._hintline,"layerPane"),this._hintline._pmTempLayer=!0,this._helperLayers.addLayer(this._hintline)},_createCenterMarker:function(t){var e=this._createMarker(t);return this.options.draggable?L.DomUtil.addClass(e._icon,"leaflet-pm-draggable"):e.dragging.disable(),e},_createOuterMarker:function(t){var e=this._createMarker(t);return e.on("drag",this._resizeCircle,this),e},_createMarker:function(t){var e=new L.Marker(t,{draggable:!0,icon:L.divIcon({className:"marker-icon"})});return this._setPane(e,"vertexPane"),e._origLatLng=t,e._pmTempLayer=!0,e.on("dragstart",this._onMarkerDragStart,this),e.on("drag",this._onMarkerDrag,this),e.on("dragend",this._onMarkerDragEnd,this),this._helperLayers.addLayer(e),e},_moveCircle:function(){var t=this._centerMarker.getLatLng();this._layer.setLatLng(t);var e=this._layer._radius,n=this._getLatLngOnCircle(t,e);this._outerMarker._latlng=n,this._outerMarker.update(),this._syncHintLine(),this._updateHiddenPolyCircle(),this._fireCenterPlaced("Edit")},_syncMarkers:function(){var t=this._layer.getLatLng(),e=this._layer._radius,n=this._getLatLngOnCircle(t,e);this._outerMarker.setLatLng(n),this._centerMarker.setLatLng(t),this._syncHintLine(),this._updateHiddenPolyCircle()},_resizeCircle:function(){this._outerMarker.setLatLng(this._getNewDestinationOfOuterMarker()),this._syncHintLine(),this._syncCircleRadius()},_syncCircleRadius:function(){var t=this._centerMarker.getLatLng(),e=this._outerMarker.getLatLng(),n=this._map.project(t).distanceTo(this._map.project(e));this.options.minRadiusCircleMarker&&n<this.options.minRadiusCircleMarker?this._layer.setRadius(this.options.minRadiusCircleMarker):this.options.maxRadiusCircleMarker&&n>this.options.maxRadiusCircleMarker?this._layer.setRadius(this.options.maxRadiusCircleMarker):this._layer.setRadius(n),this._updateHiddenPolyCircle()},_syncHintLine:function(){var t=this._centerMarker.getLatLng(),e=this._outerMarker.getLatLng();this._hintline.setLatLngs([t,e])},_removeMarker:function(){this.options.editable&&this.disable(),this._layer.remove(),this._fireRemove(this._layer),this._fireRemove(this._map,this._layer)},_onDragStart:function(t){this._map.pm.Draw.CircleMarker._layerIsDragging=!0,this._vertexValidation("move",t)},_onMarkerDragStart:function(t){this._vertexValidation("move",t)&&this._fireMarkerDragStart(t)},_onMarkerDrag:function(t){var e=t.target;e instanceof L.Marker&&!this._vertexValidationDrag(e)||this._fireMarkerDrag(t)},_onMarkerDragEnd:function(t){this._map.pm.Draw.CircleMarker._layerIsDragging=!1;var e=t.target;this._vertexValidationDragEnd(e)&&(this.options.editable&&(this._fireEdit(),this._layerEdited=!0),this._fireMarkerDragEnd(t))},_initSnappableMarkersDrag:function(){var t=this._layer;this.options.snapDistance=this.options.snapDistance||30,this.options.snapSegment=this.options.snapSegment===undefined||this.options.snapSegment,t.off("pm:drag",this._handleSnapping,this),t.on("pm:drag",this._handleSnapping,this),t.off("pm:dragend",this._cleanupSnapping,this),t.on("pm:dragend",this._cleanupSnapping,this),t.off("pm:dragstart",this._unsnap,this),t.on("pm:dragstart",this._unsnap,this)},_disableSnappingDrag:function(){var t=this._layer;t.off("pm:drag",this._handleSnapping,this),t.off("pm:dragend",this._cleanupSnapping,this),t.off("pm:dragstart",this._unsnap,this)},_updateHiddenPolyCircle:function(){var t=this._layer._map||this._map;if(t){var e=L.PM.Utils.pxRadiusToMeterRadius(this._layer.getRadius(),t,this._layer.getLatLng()),n=L.circle(this._layer.getLatLng(),this._layer.options);n.setRadius(e);var r=t&&t.pm._isCRSSimple();this._hiddenPolyCircle?this._hiddenPolyCircle.setLatLngs(L.PM.Utils.circleToPolygon(n,200,!r).getLatLngs()):this._hiddenPolyCircle=L.PM.Utils.circleToPolygon(n,200,!r),this._hiddenPolyCircle._parentCopy||(this._hiddenPolyCircle._parentCopy=this._layer)}},_getNewDestinationOfOuterMarker:function(){var t=this._centerMarker.getLatLng(),e=this._outerMarker.getLatLng(),n=this._map.project(t).distanceTo(this._map.project(e));return this.options.minRadiusCircleMarker&&n<this.options.minRadiusCircleMarker?e=z(this._map,t,e,L.PM.Utils.pxRadiusToMeterRadius(this.options.minRadiusCircleMarker,this._map,t)):this.options.maxRadiusCircleMarker&&n>this.options.maxRadiusCircleMarker&&(e=z(this._map,t,e,L.PM.Utils.pxRadiusToMeterRadius(this.options.maxRadiusCircleMarker,this._map,t))),e},_handleOuterMarkerSnapping:function(){if(this._outerMarker._snapped){var t=this._centerMarker.getLatLng(),e=this._outerMarker.getLatLng(),n=this._map.project(t).distanceTo(this._map.project(e));(this.options.minRadiusCircleMarker&&n<this.options.minRadiusCircleMarker||this.options.maxRadiusCircleMarker&&n>this.options.maxRadiusCircleMarker)&&this._outerMarker.setLatLng(this._outerMarker._orgLatLng)}this._outerMarker.setLatLng(this._getNewDestinationOfOuterMarker())}}),Bn.ImageOverlay=Bn.extend({_shape:"ImageOverlay",initialize:function(t){this._layer=t,this._enabled=!1},toggleEdit:function(t){this.enabled()?this.disable():this.enable(t)},enabled:function(){return this._enabled},enable:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{draggable:!0,snappable:!0};L.Util.setOptions(this,t),this._map=this._layer._map,this._map&&(this.options.allowEditing?(this.enabled()||this.disable(),this.enableLayerDrag(),this._enabled=!0,this._otherSnapLayers=this._findCorners(),this._fireEnable()):this.disable())},disable:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this._layer;return!t.pm._dragging&&(this._map||(this._map=this._layer._map),this.disableLayerDrag(),this.enabled()||(this._layerEdited&&this._fireUpdate(),this._layerEdited=!1,this._fireDisable()),t.pm._enabled=!1,!0)},_findCorners:function(){var t=this._layer.getBounds();return[t.getNorthWest(),t.getNorthEast(),t.getSouthEast(),t.getSouthWest()]}});n(153),n(154);var An=function(t,e,n,r,i,a){this._matrix=[t,e,n,r,i,a]};An.init=function(){return new L.PM.Matrix(1,0,0,1,0,0)},An.prototype={transform:function(t){return this._transform(t.clone())},_transform:function(t){var e=this._matrix,n=t.x,r=t.y;return t.x=e[0]*n+e[1]*r+e[4],t.y=e[2]*n+e[3]*r+e[5],t},untransform:function(t){var e=this._matrix;return new L.Point((t.x/e[0]-e[4])/e[0],(t.y/e[2]-e[5])/e[2])},clone:function(){var t=this._matrix;return new L.PM.Matrix(t[0],t[1],t[2],t[3],t[4],t[5])},translate:function(t){return t===undefined?new L.Point(this._matrix[4],this._matrix[5]):("number"==typeof t?(e=t,n=t):(e=t.x,n=t.y),this._add(1,0,0,1,e,n));var e,n},scale:function(t,e){return t===undefined?new L.Point(this._matrix[0],this._matrix[3]):(e=e||L.point(0,0),"number"==typeof t?(n=t,r=t):(n=t.x,r=t.y),this._add(n,0,0,r,e.x,e.y)._add(1,0,0,1,-e.x,-e.y));var n,r},rotate:function(t,e){var n=Math.cos(t),r=Math.sin(t);return e=e||new L.Point(0,0),this._add(n,r,-r,n,e.x,e.y)._add(1,0,0,1,-e.x,-e.y)},flip:function(){return this._matrix[1]*=-1,this._matrix[2]*=-1,this},_add:function(t,e,n,r,i,a){var o,s=[[],[],[]],l=this._matrix,h=[[l[0],l[2],l[4]],[l[1],l[3],l[5]],[0,0,1]],u=[[t,n,i],[e,r,a],[0,0,1]];t&&t instanceof L.PM.Matrix&&(u=[[(l=t._matrix)[0],l[2],l[4]],[l[1],l[3],l[5]],[0,0,1]]);for(var c=0;c<3;c+=1)for(var f=0;f<3;f+=1){o=0;for(var p=0;p<3;p+=1)o+=h[c][p]*u[p][f];s[c][f]=o}return this._matrix=[s[0][0],s[1][0],s[0][1],s[1][1],s[0][2],s[1][2]],this}};var Gn=An,Nn={calcMiddleLatLng:function(t,e,n){var r=t.project(e),i=t.project(n);return t.unproject(r._add(i)._divideBy(2))},findLayers:function(t){var e=[];return t.eachLayer((function(t){(t instanceof L.Polyline||t instanceof L.Marker||t instanceof L.Circle||t instanceof L.CircleMarker||t instanceof L.ImageOverlay)&&e.push(t)})),e=(e=(e=e.filter((function(t){return!!t.pm}))).filter((function(t){return!t._pmTempLayer}))).filter((function(t){return!L.PM.optIn&&!t.options.pmIgnore||L.PM.optIn&&!1===t.options.pmIgnore}))},circleToPolygon:function(t){for(var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:60,n=!(arguments.length>2&&arguments[2]!==undefined)||arguments[2],r=t.getLatLng(),i=t.getRadius(),a=N(r,i,e,0,n),o=[],s=0;s<a.length;s+=1){var l=[a[s].lat,a[s].lng];o.push(l)}return L.polygon(o,t.options)},disablePopup:function(t){t.getPopup()&&(t._tempPopupCopy=t.getPopup(),t.unbindPopup())},enablePopup:function(t){t._tempPopupCopy&&(t.bindPopup(t._tempPopupCopy),delete t._tempPopupCopy)},_fireEvent:function(t,e,n){var r=arguments.length>3&&arguments[3]!==undefined&&arguments[3];t.fire(e,n,r);var i=this.getAllParentGroups(t),a=i.groups;a.forEach((function(t){t.fire(e,n,r)}))},getAllParentGroups:function(t){var e=[],n=[];return!t._pmLastGroupFetch||!t._pmLastGroupFetch.time||(new Date).getTime()-t._pmLastGroupFetch.time>1e3?(function r(t){for(var i in t._eventParents)if(-1===e.indexOf(i)){e.push(i);var a=t._eventParents[i];n.push(a),r(a)}}(t),t._pmLastGroupFetch={time:(new Date).getTime(),groups:n,groupIds:e},{groupIds:e,groups:n}):{groups:t._pmLastGroupFetch.groups,groupIds:t._pmLastGroupFetch.groupIds}},createGeodesicPolygon:N,getTranslation:T,findDeepCoordIndex:function(t,e){var n;t.some(function i(t){return function(r,a){var o=t.concat(a);return r.lat&&r.lat===e.lat&&r.lng===e.lng?(n=o,!0):Array.isArray(r)&&r.some(i(o))}}([]));var r={};return n&&(r={indexPath:n,index:n[n.length-1],parentPath:n.slice(0,n.length-1)}),r},_getIndexFromSegment:function(t,e){if(e&&2===e.length){var n=this.findDeepCoordIndex(t,e[0]),r=this.findDeepCoordIndex(t,e[1]),i=Math.max(n.index,r.index);return 0!==n.index&&0!==r.index||1===i||(i+=1),{indexA:n,indexB:r,newIndex:i,indexPath:n.indexPath,parentPath:n.parentPath}}return null},_getRotatedRectangle:function(t,e,n,r){var i=En(r,t),a=En(r,e),o=n*Math.PI/180,s=Math.cos(o),l=Math.sin(o),h=(a.x-i.x)*s+(a.y-i.y)*l,u=(a.y-i.y)*s-(a.x-i.x)*l,c=h*s+i.x,f=h*l+i.y,p=-u*l+i.x,d=u*s+i.y;return[Sn(r,i),Sn(r,{x:c,y:f}),Sn(r,a),Sn(r,{x:p,y:d})]},pxRadiusToMeterRadius:function(t,e,n){var r=e.project(n),i=L.point(r.x+t,r.y);return e.distance(e.unproject(i),n)}};L.PM=L.PM||{version:r.version,Map:O,Toolbar:$,Draw:nt,Edit:Bn,Utils:Nn,Matrix:Gn,activeLang:"en",optIn:!1,initialize:function(t){this.addInitHooks(t)},setOptIn:function(t){this.optIn=!!t},addInitHooks:function(){arguments.length>0&&undefined;function t(){this.pm=undefined,L.PM.optIn?!1===this.options.pmIgnore&&(this.pm=new L.PM.Map(this)):this.options.pmIgnore||(this.pm=new L.PM.Map(this))}function e(){this.pm=undefined,L.PM.optIn?!1===this.options.pmIgnore&&(this.pm=new L.PM.Edit.LayerGroup(this)):this.options.pmIgnore||(this.pm=new L.PM.Edit.LayerGroup(this))}function n(){this.pm=undefined,L.PM.optIn?!1===this.options.pmIgnore&&(this.pm=new L.PM.Edit.Marker(this)):this.options.pmIgnore||(this.pm=new L.PM.Edit.Marker(this))}function r(){this.pm=undefined,L.PM.optIn?!1===this.options.pmIgnore&&(this.pm=new L.PM.Edit.CircleMarker(this)):this.options.pmIgnore||(this.pm=new L.PM.Edit.CircleMarker(this))}function i(){this.pm=undefined,L.PM.optIn?!1===this.options.pmIgnore&&(this.pm=new L.PM.Edit.Line(this)):this.options.pmIgnore||(this.pm=new L.PM.Edit.Line(this))}function a(){this.pm=undefined,L.PM.optIn?!1===this.options.pmIgnore&&(this.pm=new L.PM.Edit.Polygon(this)):this.options.pmIgnore||(this.pm=new L.PM.Edit.Polygon(this))}function o(){this.pm=undefined,L.PM.optIn?!1===this.options.pmIgnore&&(this.pm=new L.PM.Edit.Rectangle(this)):this.options.pmIgnore||(this.pm=new L.PM.Edit.Rectangle(this))}function s(){this.pm=undefined,L.PM.optIn?!1===this.options.pmIgnore&&(this.pm=new L.PM.Edit.Circle(this)):this.options.pmIgnore||(this.pm=new L.PM.Edit.Circle(this))}function l(){this.pm=undefined,L.PM.optIn?!1===this.options.pmIgnore&&(this.pm=new L.PM.Edit.ImageOverlay(this)):this.options.pmIgnore||(this.pm=new L.PM.Edit.ImageOverlay(this))}L.Map.addInitHook(t),L.LayerGroup.addInitHook(e),L.Marker.addInitHook(n),L.CircleMarker.addInitHook(r),L.Polyline.addInitHook(i),L.Polygon.addInitHook(a),L.Rectangle.addInitHook(o),L.Circle.addInitHook(s),L.ImageOverlay.addInitHook(l)},reInitLayer:function(t){var e=this;t instanceof L.LayerGroup&&t.eachLayer((function(t){e.reInitLayer(t)})),t.pm||L.PM.optIn&&!1!==t.options.pmIgnore||t.options.pmIgnore||(t instanceof L.Map?t.pm=new L.PM.Map(t):t instanceof L.Marker?t.pm=new L.PM.Edit.Marker(t):t instanceof L.Circle?t.pm=new L.PM.Edit.Circle(t):t instanceof L.CircleMarker?t.pm=new L.PM.Edit.CircleMarker(t):t instanceof L.Rectangle?t.pm=new L.PM.Edit.Rectangle(t):t instanceof L.Polygon?t.pm=new L.PM.Edit.Polygon(t):t instanceof L.Polyline?t.pm=new L.PM.Edit.Line(t):t instanceof L.LayerGroup?t.pm=new L.PM.Edit.LayerGroup(t):t instanceof L.ImageOverlay&&(t.pm=new L.PM.Edit.ImageOverlay(t)))}},L.PM.initialize()}]);

/***/ }),

/***/ "./node_modules/@terraformer/arcgis/dist/t-arcgis.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@terraformer/arcgis/dist/t-arcgis.esm.js ***!
  \***************************************************************/
/*! exports provided: arcgisToGeoJSON, geojsonToArcGIS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arcgisToGeoJSON", function() { return arcgisToGeoJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geojsonToArcGIS", function() { return geojsonToArcGIS; });
/* @preserve
* @terraformer/arcgis - v2.0.7 - MIT
* Copyright (c) 2012-2021 Environmental Systems Research Institute, Inc.
* Thu Jul 22 2021 13:58:30 GMT-0700 (Pacific Daylight Time)
*/
/* Copyright (c) 2012-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */

var edgeIntersectsEdge = function edgeIntersectsEdge(a1, a2, b1, b2) {
  var uaT = (b2[0] - b1[0]) * (a1[1] - b1[1]) - (b2[1] - b1[1]) * (a1[0] - b1[0]);
  var ubT = (a2[0] - a1[0]) * (a1[1] - b1[1]) - (a2[1] - a1[1]) * (a1[0] - b1[0]);
  var uB = (b2[1] - b1[1]) * (a2[0] - a1[0]) - (b2[0] - b1[0]) * (a2[1] - a1[1]);

  if (uB !== 0) {
    var ua = uaT / uB;
    var ub = ubT / uB;

    if (ua >= 0 && ua <= 1 && ub >= 0 && ub <= 1) {
      return true;
    }
  }

  return false;
};
var coordinatesContainPoint = function coordinatesContainPoint(coordinates, point) {
  var contains = false;

  for (var i = -1, l = coordinates.length, j = l - 1; ++i < l; j = i) {
    if ((coordinates[i][1] <= point[1] && point[1] < coordinates[j][1] || coordinates[j][1] <= point[1] && point[1] < coordinates[i][1]) && point[0] < (coordinates[j][0] - coordinates[i][0]) * (point[1] - coordinates[i][1]) / (coordinates[j][1] - coordinates[i][1]) + coordinates[i][0]) {
      contains = !contains;
    }
  }

  return contains;
};
var pointsEqual = function pointsEqual(a, b) {
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
};
var arrayIntersectsArray = function arrayIntersectsArray(a, b) {
  for (var i = 0; i < a.length - 1; i++) {
    for (var j = 0; j < b.length - 1; j++) {
      if (edgeIntersectsEdge(a[i], a[i + 1], b[j], b[j + 1])) {
        return true;
      }
    }
  }

  return false;
};

/* Copyright (c) 2012-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */

var closeRing = function closeRing(coordinates) {
  if (!pointsEqual(coordinates[0], coordinates[coordinates.length - 1])) {
    coordinates.push(coordinates[0]);
  }

  return coordinates;
}; // determine if polygon ring coordinates are clockwise. clockwise signifies outer ring, counter-clockwise an inner ring
// or hole. this logic was found at http://stackoverflow.com/questions/1165647/how-to-determine-if-a-list-of-polygon-
// points-are-in-clockwise-order

var ringIsClockwise = function ringIsClockwise(ringToTest) {
  var total = 0;
  var i = 0;
  var rLength = ringToTest.length;
  var pt1 = ringToTest[i];
  var pt2;

  for (i; i < rLength - 1; i++) {
    pt2 = ringToTest[i + 1];
    total += (pt2[0] - pt1[0]) * (pt2[1] + pt1[1]);
    pt1 = pt2;
  }

  return total >= 0;
}; // This function ensures that rings are oriented in the right directions
// from http://jsperf.com/cloning-an-object/2

var shallowClone = function shallowClone(obj) {
  var target = {};

  for (var i in obj) {
    // both arcgis attributes and geojson props are just hardcoded keys
    if (obj.hasOwnProperty(i)) {
      // eslint-disable-line no-prototype-builtins
      target[i] = obj[i];
    }
  }

  return target;
};

/* Copyright (c) 2012-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */

var coordinatesContainCoordinates = function coordinatesContainCoordinates(outer, inner) {
  var intersects = arrayIntersectsArray(outer, inner);
  var contains = coordinatesContainPoint(outer, inner[0]);

  if (!intersects && contains) {
    return true;
  }

  return false;
}; // do any polygons in this array contain any other polygons in this array?
// used for checking for holes in arcgis rings


var convertRingsToGeoJSON = function convertRingsToGeoJSON(rings) {
  var outerRings = [];
  var holes = [];
  var x; // iterator

  var outerRing; // current outer ring being evaluated

  var hole; // current hole being evaluated
  // for each ring

  for (var r = 0; r < rings.length; r++) {
    var ring = closeRing(rings[r].slice(0));

    if (ring.length < 4) {
      continue;
    } // is this ring an outer ring? is it clockwise?


    if (ringIsClockwise(ring)) {
      var polygon = [ring.slice().reverse()]; // wind outer rings counterclockwise for RFC 7946 compliance

      outerRings.push(polygon); // push to outer rings
    } else {
      holes.push(ring.slice().reverse()); // wind inner rings clockwise for RFC 7946 compliance
    }
  }

  var uncontainedHoles = []; // while there are holes left...

  while (holes.length) {
    // pop a hole off out stack
    hole = holes.pop(); // loop over all outer rings and see if they contain our hole.

    var contained = false;

    for (x = outerRings.length - 1; x >= 0; x--) {
      outerRing = outerRings[x][0];

      if (coordinatesContainCoordinates(outerRing, hole)) {
        // the hole is contained push it into our polygon
        outerRings[x].push(hole);
        contained = true;
        break;
      }
    } // ring is not contained in any outer ring
    // sometimes this happens https://github.com/Esri/esri-leaflet/issues/320


    if (!contained) {
      uncontainedHoles.push(hole);
    }
  } // if we couldn't match any holes using contains we can try intersects...


  while (uncontainedHoles.length) {
    // pop a hole off out stack
    hole = uncontainedHoles.pop(); // loop over all outer rings and see if any intersect our hole.

    var intersects = false;

    for (x = outerRings.length - 1; x >= 0; x--) {
      outerRing = outerRings[x][0];

      if (arrayIntersectsArray(outerRing, hole)) {
        // the hole is contained push it into our polygon
        outerRings[x].push(hole);
        intersects = true;
        break;
      }
    }

    if (!intersects) {
      outerRings.push([hole.reverse()]);
    }
  }

  if (outerRings.length === 1) {
    return {
      type: 'Polygon',
      coordinates: outerRings[0]
    };
  } else {
    return {
      type: 'MultiPolygon',
      coordinates: outerRings
    };
  }
};

var getId = function getId(attributes, idAttribute) {
  var keys = idAttribute ? [idAttribute, 'OBJECTID', 'FID'] : ['OBJECTID', 'FID'];

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];

    if (key in attributes && (typeof attributes[key] === 'string' || typeof attributes[key] === 'number')) {
      return attributes[key];
    }
  }

  throw Error('No valid id attribute found');
};

var arcgisToGeoJSON = function arcgisToGeoJSON(arcgis, idAttribute) {
  var geojson = {};

  if (arcgis.features) {
    geojson.type = 'FeatureCollection';
    geojson.features = [];

    for (var i = 0; i < arcgis.features.length; i++) {
      geojson.features.push(arcgisToGeoJSON(arcgis.features[i], idAttribute));
    }
  }

  if (typeof arcgis.x === 'number' && typeof arcgis.y === 'number') {
    geojson.type = 'Point';
    geojson.coordinates = [arcgis.x, arcgis.y];

    if (typeof arcgis.z === 'number') {
      geojson.coordinates.push(arcgis.z);
    }
  }

  if (arcgis.points) {
    geojson.type = 'MultiPoint';
    geojson.coordinates = arcgis.points.slice(0);
  }

  if (arcgis.paths) {
    if (arcgis.paths.length === 1) {
      geojson.type = 'LineString';
      geojson.coordinates = arcgis.paths[0].slice(0);
    } else {
      geojson.type = 'MultiLineString';
      geojson.coordinates = arcgis.paths.slice(0);
    }
  }

  if (arcgis.rings) {
    geojson = convertRingsToGeoJSON(arcgis.rings.slice(0));
  }

  if (typeof arcgis.xmin === 'number' && typeof arcgis.ymin === 'number' && typeof arcgis.xmax === 'number' && typeof arcgis.ymax === 'number') {
    geojson.type = 'Polygon';
    geojson.coordinates = [[[arcgis.xmax, arcgis.ymax], [arcgis.xmin, arcgis.ymax], [arcgis.xmin, arcgis.ymin], [arcgis.xmax, arcgis.ymin], [arcgis.xmax, arcgis.ymax]]];
  }

  if (arcgis.geometry || arcgis.attributes) {
    geojson.type = 'Feature';
    geojson.geometry = arcgis.geometry ? arcgisToGeoJSON(arcgis.geometry) : null;
    geojson.properties = arcgis.attributes ? shallowClone(arcgis.attributes) : null;

    if (arcgis.attributes) {
      try {
        geojson.id = getId(arcgis.attributes, idAttribute);
      } catch (err) {// don't set an id
      }
    }
  } // if no valid geometry was encountered


  if (JSON.stringify(geojson.geometry) === JSON.stringify({})) {
    geojson.geometry = null;
  }

  if (arcgis.spatialReference && arcgis.spatialReference.wkid && arcgis.spatialReference.wkid !== 4326) {
    console.warn('Object converted in non-standard crs - ' + JSON.stringify(arcgis.spatialReference));
  }

  return geojson;
};

/* Copyright (c) 2012-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
// outer rings are clockwise, holes are counterclockwise
// used for converting GeoJSON Polygons to ArcGIS Polygons

var orientRings = function orientRings(poly) {
  var output = [];
  var polygon = poly.slice(0);
  var outerRing = closeRing(polygon.shift().slice(0));

  if (outerRing.length >= 4) {
    if (!ringIsClockwise(outerRing)) {
      outerRing.reverse();
    }

    output.push(outerRing);

    for (var i = 0; i < polygon.length; i++) {
      var hole = closeRing(polygon[i].slice(0));

      if (hole.length >= 4) {
        if (ringIsClockwise(hole)) {
          hole.reverse();
        }

        output.push(hole);
      }
    }
  }

  return output;
}; // This function flattens holes in multipolygons to one array of polygons
// used for converting GeoJSON Polygons to ArcGIS Polygons


var flattenMultiPolygonRings = function flattenMultiPolygonRings(rings) {
  var output = [];

  for (var i = 0; i < rings.length; i++) {
    var polygon = orientRings(rings[i]);

    for (var x = polygon.length - 1; x >= 0; x--) {
      var ring = polygon[x].slice(0);
      output.push(ring);
    }
  }

  return output;
};

var geojsonToArcGIS = function geojsonToArcGIS(geojson, idAttribute) {
  idAttribute = idAttribute || 'OBJECTID';
  var spatialReference = {
    wkid: 4326
  };
  var result = {};
  var i;

  switch (geojson.type) {
    case 'Point':
      result.x = geojson.coordinates[0];
      result.y = geojson.coordinates[1];

      if (geojson.coordinates[2]) {
        result.z = geojson.coordinates[2];
      }

      result.spatialReference = spatialReference;
      break;

    case 'MultiPoint':
      result.points = geojson.coordinates.slice(0);

      if (geojson.coordinates[0][2]) {
        result.hasZ = true;
      }

      result.spatialReference = spatialReference;
      break;

    case 'LineString':
      result.paths = [geojson.coordinates.slice(0)];

      if (geojson.coordinates[0][2]) {
        result.hasZ = true;
      }

      result.spatialReference = spatialReference;
      break;

    case 'MultiLineString':
      result.paths = geojson.coordinates.slice(0);

      if (geojson.coordinates[0][0][2]) {
        result.hasZ = true;
      }

      result.spatialReference = spatialReference;
      break;

    case 'Polygon':
      result.rings = orientRings(geojson.coordinates.slice(0));

      if (geojson.coordinates[0][0][2]) {
        result.hasZ = true;
      }

      result.spatialReference = spatialReference;
      break;

    case 'MultiPolygon':
      result.rings = flattenMultiPolygonRings(geojson.coordinates.slice(0));

      if (geojson.coordinates[0][0][0][2]) {
        result.hasZ = true;
      }

      result.spatialReference = spatialReference;
      break;

    case 'Feature':
      if (geojson.geometry) {
        result.geometry = geojsonToArcGIS(geojson.geometry, idAttribute);
      }

      result.attributes = geojson.properties ? shallowClone(geojson.properties) : {};

      if (geojson.id) {
        result.attributes[idAttribute] = geojson.id;
      }

      break;

    case 'FeatureCollection':
      result = [];

      for (i = 0; i < geojson.features.length; i++) {
        result.push(geojsonToArcGIS(geojson.features[i], idAttribute));
      }

      break;

    case 'GeometryCollection':
      result = [];

      for (i = 0; i < geojson.geometries.length; i++) {
        result.push(geojsonToArcGIS(geojson.geometries[i], idAttribute));
      }

      break;
  }

  return result;
};

/* Copyright (c) 2012-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */




/***/ }),

/***/ "./node_modules/esri-leaflet/package.json":
/*!************************************************!*\
  !*** ./node_modules/esri-leaflet/package.json ***!
  \************************************************/
/*! exports provided: name, description, version, author, bugs, contributors, dependencies, devDependencies, files, homepage, module, jsnext:main, jspm, keywords, license, main, peerDependencies, readmeFilename, repository, scripts, semistandard, unpkg, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"esri-leaflet\",\"description\":\"Leaflet plugins for consuming ArcGIS Online and ArcGIS Server services.\",\"version\":\"3.0.3\",\"author\":\"Patrick Arlt <parlt@esri.com> (http://patrickarlt.com)\",\"bugs\":{\"url\":\"https://github.com/esri/esri-leaflet/issues\"},\"contributors\":[\"Patrick Arlt <parlt@esri.com> (http://patrickarlt.com)\",\"John Gravois <jgravois@esri.com> (https://johngravois.com)\",\"Gavin Rehkemper <grehkemper@esri.com> (https://gavinr.com)\",\"Jacob Wasilkowski <jwasilkowski@esri.com> (https://jwasilgeo.github.io)\"],\"dependencies\":{\"@terraformer/arcgis\":\"^2.0.7\",\"tiny-binary-search\":\"^1.0.3\"},\"devDependencies\":{\"@rollup/plugin-json\":\"^4.1.0\",\"@rollup/plugin-node-resolve\":\"^13.0.0\",\"chai\":\"4.3.4\",\"gh-release\":\"^6.0.0\",\"highlight.js\":\"^10.7.2\",\"http-server\":\"^0.12.3\",\"husky\":\"^1.1.1\",\"karma\":\"^6.3.2\",\"karma-chai-sinon\":\"^0.1.5\",\"karma-chrome-launcher\":\"^3.1.0\",\"karma-coverage\":\"^2.0.3\",\"karma-mocha\":\"^2.0.1\",\"karma-mocha-reporter\":\"^2.2.5\",\"karma-sourcemap-loader\":\"^0.3.8\",\"leaflet\":\"^1.6.0\",\"mkdirp\":\"^1.0.4\",\"mocha\":\"^8.4.0\",\"npm-run-all\":\"^4.1.5\",\"rollup\":\"^2.49.0\",\"rollup-plugin-uglify\":\"^6.0.4\",\"semistandard\":\"^9.0.0\",\"sinon\":\"^6.3.5\",\"sinon-chai\":\"3.2.0\",\"snazzy\":\"^8.0.0\",\"uglify-js\":\"^2.8.29\",\"watch\":\"^1.0.2\"},\"files\":[\"src/**/*.js\",\"dist/esri-leaflet.js\",\"dist/esri-leaflet.js.map\",\"dist/esri-leaflet-debug.js.map\",\"profiles/*.js\"],\"homepage\":\"http://esri.github.io/esri-leaflet\",\"module\":\"src/EsriLeaflet.js\",\"jsnext:main\":\"src/EsriLeaflet.js\",\"jspm\":{\"registry\":\"npm\",\"format\":\"es6\",\"main\":\"src/EsriLeaflet.js\"},\"keywords\":[\"arcgis\",\"esri\",\"esri leaflet\",\"gis\",\"leaflet plugin\",\"mapping\"],\"license\":\"Apache-2.0\",\"main\":\"dist/esri-leaflet-debug.js\",\"peerDependencies\":{\"leaflet\":\"^1.0.0\"},\"readmeFilename\":\"README.md\",\"repository\":{\"type\":\"git\",\"url\":\"git@github.com:Esri/esri-leaflet.git\"},\"scripts\":{\"build\":\"rollup -c profiles/debug.js & rollup -c profiles/production.js\",\"lint\":\"semistandard | snazzy\",\"prebuild\":\"mkdirp dist\",\"prepare\":\"npm run build\",\"pretest\":\"npm run build\",\"precommit\":\"npm run lint\",\"fix\":\"semistandard --fix\",\"release\":\"./scripts/release.sh\",\"start-watch\":\"watch \\\"npm run build\\\" src\",\"start\":\"run-p start-watch serve\",\"serve\":\"http-server -p 5000 -c-1 -o\",\"test\":\"npm run lint && karma start\",\"test:ci\":\"npm run lint && karma start --browsers Chrome_travis_ci\"},\"semistandard\":{\"globals\":[\"expect\",\"L\",\"XMLHttpRequest\",\"sinon\",\"xhr\",\"proj4\"]},\"unpkg\":\"dist/esri-leaflet-debug.js\"}");

/***/ }),

/***/ "./node_modules/esri-leaflet/src/EsriLeaflet.js":
/*!******************************************************!*\
  !*** ./node_modules/esri-leaflet/src/EsriLeaflet.js ***!
  \******************************************************/
/*! exports provided: VERSION, Support, options, Util, get, post, request, Task, task, Query, query, Find, find, Identify, identify, IdentifyFeatures, identifyFeatures, IdentifyImage, identifyImage, Service, service, MapService, mapService, ImageService, imageService, FeatureLayerService, featureLayerService, BasemapLayer, basemapLayer, TiledMapLayer, tiledMapLayer, RasterLayer, ImageMapLayer, imageMapLayer, DynamicMapLayer, dynamicMapLayer, FeatureManager, FeatureLayer, featureLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return version; });
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../package.json */ "./node_modules/esri-leaflet/package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package.json */ "./node_modules/esri-leaflet/package.json", 1);
/* harmony import */ var _Support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Support */ "./node_modules/esri-leaflet/src/Support.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Support", function() { return _Support__WEBPACK_IMPORTED_MODULE_1__["Support"]; });

/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Options */ "./node_modules/esri-leaflet/src/Options.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "options", function() { return _Options__WEBPACK_IMPORTED_MODULE_2__["options"]; });

/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Util */ "./node_modules/esri-leaflet/src/Util.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Util", function() { return _Util__WEBPACK_IMPORTED_MODULE_3__["EsriUtil"]; });

/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Request */ "./node_modules/esri-leaflet/src/Request.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "get", function() { return _Request__WEBPACK_IMPORTED_MODULE_4__["get"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "post", function() { return _Request__WEBPACK_IMPORTED_MODULE_4__["post"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "request", function() { return _Request__WEBPACK_IMPORTED_MODULE_4__["request"]; });

/* harmony import */ var _Tasks_Task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Tasks/Task */ "./node_modules/esri-leaflet/src/Tasks/Task.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return _Tasks_Task__WEBPACK_IMPORTED_MODULE_5__["Task"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "task", function() { return _Tasks_Task__WEBPACK_IMPORTED_MODULE_5__["task"]; });

/* harmony import */ var _Tasks_Query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Tasks/Query */ "./node_modules/esri-leaflet/src/Tasks/Query.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return _Tasks_Query__WEBPACK_IMPORTED_MODULE_6__["Query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "query", function() { return _Tasks_Query__WEBPACK_IMPORTED_MODULE_6__["query"]; });

/* harmony import */ var _Tasks_Find__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Tasks/Find */ "./node_modules/esri-leaflet/src/Tasks/Find.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Find", function() { return _Tasks_Find__WEBPACK_IMPORTED_MODULE_7__["Find"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "find", function() { return _Tasks_Find__WEBPACK_IMPORTED_MODULE_7__["find"]; });

/* harmony import */ var _Tasks_Identify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Tasks/Identify */ "./node_modules/esri-leaflet/src/Tasks/Identify.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Identify", function() { return _Tasks_Identify__WEBPACK_IMPORTED_MODULE_8__["Identify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identify", function() { return _Tasks_Identify__WEBPACK_IMPORTED_MODULE_8__["identify"]; });

/* harmony import */ var _Tasks_IdentifyFeatures__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Tasks/IdentifyFeatures */ "./node_modules/esri-leaflet/src/Tasks/IdentifyFeatures.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdentifyFeatures", function() { return _Tasks_IdentifyFeatures__WEBPACK_IMPORTED_MODULE_9__["IdentifyFeatures"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identifyFeatures", function() { return _Tasks_IdentifyFeatures__WEBPACK_IMPORTED_MODULE_9__["identifyFeatures"]; });

/* harmony import */ var _Tasks_IdentifyImage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Tasks/IdentifyImage */ "./node_modules/esri-leaflet/src/Tasks/IdentifyImage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdentifyImage", function() { return _Tasks_IdentifyImage__WEBPACK_IMPORTED_MODULE_10__["IdentifyImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identifyImage", function() { return _Tasks_IdentifyImage__WEBPACK_IMPORTED_MODULE_10__["identifyImage"]; });

/* harmony import */ var _Services_Service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Services/Service */ "./node_modules/esri-leaflet/src/Services/Service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return _Services_Service__WEBPACK_IMPORTED_MODULE_11__["Service"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "service", function() { return _Services_Service__WEBPACK_IMPORTED_MODULE_11__["service"]; });

/* harmony import */ var _Services_MapService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Services/MapService */ "./node_modules/esri-leaflet/src/Services/MapService.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return _Services_MapService__WEBPACK_IMPORTED_MODULE_12__["MapService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapService", function() { return _Services_MapService__WEBPACK_IMPORTED_MODULE_12__["mapService"]; });

/* harmony import */ var _Services_ImageService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Services/ImageService */ "./node_modules/esri-leaflet/src/Services/ImageService.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return _Services_ImageService__WEBPACK_IMPORTED_MODULE_13__["ImageService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "imageService", function() { return _Services_ImageService__WEBPACK_IMPORTED_MODULE_13__["imageService"]; });

/* harmony import */ var _Services_FeatureLayerService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Services/FeatureLayerService */ "./node_modules/esri-leaflet/src/Services/FeatureLayerService.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureLayerService", function() { return _Services_FeatureLayerService__WEBPACK_IMPORTED_MODULE_14__["FeatureLayerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "featureLayerService", function() { return _Services_FeatureLayerService__WEBPACK_IMPORTED_MODULE_14__["featureLayerService"]; });

/* harmony import */ var _Layers_BasemapLayer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Layers/BasemapLayer */ "./node_modules/esri-leaflet/src/Layers/BasemapLayer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasemapLayer", function() { return _Layers_BasemapLayer__WEBPACK_IMPORTED_MODULE_15__["BasemapLayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "basemapLayer", function() { return _Layers_BasemapLayer__WEBPACK_IMPORTED_MODULE_15__["basemapLayer"]; });

/* harmony import */ var _Layers_TiledMapLayer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Layers/TiledMapLayer */ "./node_modules/esri-leaflet/src/Layers/TiledMapLayer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TiledMapLayer", function() { return _Layers_TiledMapLayer__WEBPACK_IMPORTED_MODULE_16__["TiledMapLayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tiledMapLayer", function() { return _Layers_TiledMapLayer__WEBPACK_IMPORTED_MODULE_16__["tiledMapLayer"]; });

/* harmony import */ var _Layers_RasterLayer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Layers/RasterLayer */ "./node_modules/esri-leaflet/src/Layers/RasterLayer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RasterLayer", function() { return _Layers_RasterLayer__WEBPACK_IMPORTED_MODULE_17__["RasterLayer"]; });

/* harmony import */ var _Layers_ImageMapLayer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Layers/ImageMapLayer */ "./node_modules/esri-leaflet/src/Layers/ImageMapLayer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageMapLayer", function() { return _Layers_ImageMapLayer__WEBPACK_IMPORTED_MODULE_18__["ImageMapLayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "imageMapLayer", function() { return _Layers_ImageMapLayer__WEBPACK_IMPORTED_MODULE_18__["imageMapLayer"]; });

/* harmony import */ var _Layers_DynamicMapLayer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Layers/DynamicMapLayer */ "./node_modules/esri-leaflet/src/Layers/DynamicMapLayer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicMapLayer", function() { return _Layers_DynamicMapLayer__WEBPACK_IMPORTED_MODULE_19__["DynamicMapLayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dynamicMapLayer", function() { return _Layers_DynamicMapLayer__WEBPACK_IMPORTED_MODULE_19__["dynamicMapLayer"]; });

/* harmony import */ var _Layers_FeatureLayer_FeatureManager__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Layers/FeatureLayer/FeatureManager */ "./node_modules/esri-leaflet/src/Layers/FeatureLayer/FeatureManager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureManager", function() { return _Layers_FeatureLayer_FeatureManager__WEBPACK_IMPORTED_MODULE_20__["FeatureManager"]; });

/* harmony import */ var _Layers_FeatureLayer_FeatureLayer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Layers/FeatureLayer/FeatureLayer */ "./node_modules/esri-leaflet/src/Layers/FeatureLayer/FeatureLayer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureLayer", function() { return _Layers_FeatureLayer_FeatureLayer__WEBPACK_IMPORTED_MODULE_21__["FeatureLayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "featureLayer", function() { return _Layers_FeatureLayer_FeatureLayer__WEBPACK_IMPORTED_MODULE_21__["featureLayer"]; });

// export version

var version = _package_json__WEBPACK_IMPORTED_MODULE_0__.version;


// import base





// export tasks







// export services





// export layers









/***/ }),

/***/ "./node_modules/esri-leaflet/src/Layers/BasemapLayer.js":
/*!**************************************************************!*\
  !*** ./node_modules/esri-leaflet/src/Layers/BasemapLayer.js ***!
  \**************************************************************/
/*! exports provided: BasemapLayer, basemapLayer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasemapLayer", function() { return BasemapLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basemapLayer", function() { return basemapLayer; });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Support */ "./node_modules/esri-leaflet/src/Support.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./node_modules/esri-leaflet/src/Util.js");




var tileProtocol = (window.location.protocol !== 'https:') ? 'http:' : 'https:';

var BasemapLayer = leaflet__WEBPACK_IMPORTED_MODULE_0__["TileLayer"].extend({
  statics: {
    TILES: {
      Streets: {
        urlTemplate: tileProtocol + '//{s}.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
        options: {
          minZoom: 1,
          maxZoom: 19,
          subdomains: ['server', 'services'],
          attribution: 'USGS, NOAA',
          attributionUrl: 'https://static.arcgis.com/attribution/World_Street_Map'
        }
      },
      Topographic: {
        urlTemplate: tileProtocol + '//{s}.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
        options: {
          minZoom: 1,
          maxZoom: 19,
          subdomains: ['server', 'services'],
          attribution: 'USGS, NOAA',
          attributionUrl: 'https://static.arcgis.com/attribution/World_Topo_Map'
        }
      },
      Oceans: {
        urlTemplate: tileProtocol + '//{s}.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}',
        options: {
          minZoom: 1,
          maxZoom: 16,
          subdomains: ['server', 'services'],
          attribution: 'USGS, NOAA',
          attributionUrl: 'https://static.arcgis.com/attribution/Ocean_Basemap'
        }
      },
      OceansLabels: {
        urlTemplate: tileProtocol + '//{s}.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Reference/MapServer/tile/{z}/{y}/{x}',
        options: {
          minZoom: 1,
          maxZoom: 16,
          subdomains: ['server', 'services'],
          pane: (_Support__WEBPACK_IMPORTED_MODULE_1__["pointerEvents"]) ? 'esri-labels' : 'tilePane',
          attribution: ''
        }
      },
      NationalGeographic: {
        urlTemplate: tileProtocol + '//{s}.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}',
        options: {
          minZoom: 1,
          maxZoom: 16,
          subdomains: ['server', 'services'],
          attribution: 'National Geographic, DeLorme, HERE, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, increment P Corp.'
        }
      },
      DarkGray: {
        urlTemplate: tileProtocol + '//{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
        options: {
          minZoom: 1,
          maxZoom: 16,
          subdomains: ['server', 'services'],
          attribution: 'HERE, DeLorme, MapmyIndia, &copy; OpenStreetMap contributors'
        }
      },
      DarkGrayLabels: {
        urlTemplate: tileProtocol + '//{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}',
        options: {
          minZoom: 1,
          maxZoom: 16,
          subdomains: ['server', 'services'],
          pane: (_Support__WEBPACK_IMPORTED_MODULE_1__["pointerEvents"]) ? 'esri-labels' : 'tilePane',
          attribution: ''

        }
      },
      Gray: {
        urlTemplate: tileProtocol + '//{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
        options: {
          minZoom: 1,
          maxZoom: 16,
          subdomains: ['server', 'services'],
          attribution: 'HERE, DeLorme, MapmyIndia, &copy; OpenStreetMap contributors'
        }
      },
      GrayLabels: {
        urlTemplate: tileProtocol + '//{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}',
        options: {
          minZoom: 1,
          maxZoom: 16,
          subdomains: ['server', 'services'],
          pane: (_Support__WEBPACK_IMPORTED_MODULE_1__["pointerEvents"]) ? 'esri-labels' : 'tilePane',
          attribution: ''
        }
      },
      Imagery: {
        urlTemplate: tileProtocol + '//{s}.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        options: {
          minZoom: 1,
          maxZoom: 19,
          subdomains: ['server', 'services'],
          attribution: 'DigitalGlobe, GeoEye, i-cubed, USDA, USGS, AEX, Getmapping, Aerogrid, IGN, IGP, swisstopo, and the GIS User Community',
          attributionUrl: 'https://static.arcgis.com/attribution/World_Imagery'
        }
      },
      ImageryLabels: {
        urlTemplate: tileProtocol + '//{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',
        options: {
          minZoom: 1,
          maxZoom: 19,
          subdomains: ['server', 'services'],
          pane: (_Support__WEBPACK_IMPORTED_MODULE_1__["pointerEvents"]) ? 'esri-labels' : 'tilePane',
          attribution: ''
        }
      },
      ImageryTransportation: {
        urlTemplate: tileProtocol + '//{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}',
        options: {
          minZoom: 1,
          maxZoom: 19,
          subdomains: ['server', 'services'],
          pane: (_Support__WEBPACK_IMPORTED_MODULE_1__["pointerEvents"]) ? 'esri-labels' : 'tilePane',
          attribution: ''
        }
      },
      ShadedRelief: {
        urlTemplate: tileProtocol + '//{s}.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}',
        options: {
          minZoom: 1,
          maxZoom: 13,
          subdomains: ['server', 'services'],
          attribution: 'USGS'
        }
      },
      ShadedReliefLabels: {
        urlTemplate: tileProtocol + '//{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places_Alternate/MapServer/tile/{z}/{y}/{x}',
        options: {
          minZoom: 1,
          maxZoom: 12,
          subdomains: ['server', 'services'],
          pane: (_Support__WEBPACK_IMPORTED_MODULE_1__["pointerEvents"]) ? 'esri-labels' : 'tilePane',
          attribution: ''
        }
      },
      Terrain: {
        urlTemplate: tileProtocol + '//{s}.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}',
        options: {
          minZoom: 1,
          maxZoom: 13,
          subdomains: ['server', 'services'],
          attribution: 'USGS, NOAA'
        }
      },
      TerrainLabels: {
        urlTemplate: tileProtocol + '//{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer/tile/{z}/{y}/{x}',
        options: {
          minZoom: 1,
          maxZoom: 13,
          subdomains: ['server', 'services'],
          pane: (_Support__WEBPACK_IMPORTED_MODULE_1__["pointerEvents"]) ? 'esri-labels' : 'tilePane',
          attribution: ''
        }
      },
      USATopo: {
        urlTemplate: tileProtocol + '//{s}.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer/tile/{z}/{y}/{x}',
        options: {
          minZoom: 1,
          maxZoom: 15,
          subdomains: ['server', 'services'],
          attribution: 'USGS, National Geographic Society, i-cubed'
        }
      },
      ImageryClarity: {
        urlTemplate: tileProtocol + '//clarity.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        options: {
          minZoom: 1,
          maxZoom: 19,
          attribution: 'Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community'
        }
      },
      Physical: {
        urlTemplate: tileProtocol + '//{s}.arcgisonline.com/arcgis/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}',
        options: {
          minZoom: 1,
          maxZoom: 8,
          subdomains: ['server', 'services'],
          attribution: 'U.S. National Park Service'
        }
      },
      ImageryFirefly: {
        urlTemplate: tileProtocol + '//fly.maptiles.arcgis.com/arcgis/rest/services/World_Imagery_Firefly/MapServer/tile/{z}/{y}/{x}',
        options: {
          minZoom: 1,
          maxZoom: 19,
          attribution: 'Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community',
          attributionUrl: 'https://static.arcgis.com/attribution/World_Imagery'
        }
      }
    }
  },

  initialize: function (key, options) {
    var config;

    // set the config variable with the appropriate config object
    if (typeof key === 'object' && key.urlTemplate && key.options) {
      config = key;
    } else if (typeof key === 'string' && BasemapLayer.TILES[key]) {
      config = BasemapLayer.TILES[key];
    } else {
      throw new Error('L.esri.BasemapLayer: Invalid parameter. Use one of "Streets", "Topographic", "Oceans", "OceansLabels", "NationalGeographic", "Physical", "Gray", "GrayLabels", "DarkGray", "DarkGrayLabels", "Imagery", "ImageryLabels", "ImageryTransportation", "ImageryClarity", "ImageryFirefly", ShadedRelief", "ShadedReliefLabels", "Terrain", "TerrainLabels" or "USATopo"');
    }

    // merge passed options into the config options
    var tileOptions = leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].extend(config.options, options);

    leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].setOptions(this, tileOptions);

    // Deprecation notice:
    if (!this.options.ignoreDeprecationWarning) {
      console.warn('WARNING: L.esri.BasemapLayer uses data services that are in mature support and are not being updated. Please use L.esri.Vector.vectorBasemapLayer instead. More info: https://esriurl.com/esri-leaflet-basemap');
    }

    if (this.options.token && config.urlTemplate.indexOf('token=') === -1) {
      config.urlTemplate += ('?token=' + this.options.token);
    }
    if (this.options.proxy) {
      config.urlTemplate = this.options.proxy + '?' + config.urlTemplate;
    }

    // call the initialize method on L.TileLayer to set everything up
    leaflet__WEBPACK_IMPORTED_MODULE_0__["TileLayer"].prototype.initialize.call(this, config.urlTemplate, tileOptions);
  },

  onAdd: function (map) {
    // include 'Powered by Esri' in map attribution
    Object(_Util__WEBPACK_IMPORTED_MODULE_2__["setEsriAttribution"])(map);

    if (this.options.pane === 'esri-labels') {
      this._initPane();
    }
    // some basemaps can supply dynamic attribution
    if (this.options.attributionUrl) {
      Object(_Util__WEBPACK_IMPORTED_MODULE_2__["_getAttributionData"])((this.options.proxy ? this.options.proxy + '?' : '') + this.options.attributionUrl, map);
    }

    map.on('moveend', _Util__WEBPACK_IMPORTED_MODULE_2__["_updateMapAttribution"]);

    leaflet__WEBPACK_IMPORTED_MODULE_0__["TileLayer"].prototype.onAdd.call(this, map);
  },

  onRemove: function (map) {
    Object(_Util__WEBPACK_IMPORTED_MODULE_2__["removeEsriAttribution"])(map);

    map.off('moveend', _Util__WEBPACK_IMPORTED_MODULE_2__["_updateMapAttribution"]);

    leaflet__WEBPACK_IMPORTED_MODULE_0__["TileLayer"].prototype.onRemove.call(this, map);
  },

  _initPane: function () {
    if (!this._map.getPane(this.options.pane)) {
      var pane = this._map.createPane(this.options.pane);
      pane.style.pointerEvents = 'none';
      pane.style.zIndex = 500;
    }
  },

  getAttribution: function () {
    if (this.options.attribution) {
      var attribution = '<span class="esri-dynamic-attribution">' + this.options.attribution + '</span>';
    }
    return attribution;
  }
});

function basemapLayer (key, options) {
  return new BasemapLayer(key, options);
}

/* harmony default export */ __webpack_exports__["default"] = (basemapLayer);


/***/ }),

/***/ "./node_modules/esri-leaflet/src/Layers/DynamicMapLayer.js":
/*!*****************************************************************!*\
  !*** ./node_modules/esri-leaflet/src/Layers/DynamicMapLayer.js ***!
  \*****************************************************************/
/*! exports provided: DynamicMapLayer, dynamicMapLayer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicMapLayer", function() { return DynamicMapLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dynamicMapLayer", function() { return dynamicMapLayer; });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RasterLayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RasterLayer */ "./node_modules/esri-leaflet/src/Layers/RasterLayer.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./node_modules/esri-leaflet/src/Util.js");
/* harmony import */ var _Services_MapService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/MapService */ "./node_modules/esri-leaflet/src/Services/MapService.js");





var DynamicMapLayer = _RasterLayer__WEBPACK_IMPORTED_MODULE_1__["RasterLayer"].extend({

  options: {
    updateInterval: 150,
    layers: false,
    layerDefs: false,
    timeOptions: false,
    format: 'png32',
    transparent: true,
    f: 'json'
  },

  initialize: function (options) {
    options = Object(_Util__WEBPACK_IMPORTED_MODULE_2__["getUrlParams"])(options);
    this.service = Object(_Services_MapService__WEBPACK_IMPORTED_MODULE_3__["default"])(options);
    this.service.addEventParent(this);

    leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].setOptions(this, options);
  },

  getDynamicLayers: function () {
    return this.options.dynamicLayers;
  },

  setDynamicLayers: function (dynamicLayers) {
    this.options.dynamicLayers = dynamicLayers;
    this._update();
    return this;
  },

  getLayers: function () {
    return this.options.layers;
  },

  setLayers: function (layers) {
    this.options.layers = layers;
    this._update();
    return this;
  },

  getLayerDefs: function () {
    return this.options.layerDefs;
  },

  setLayerDefs: function (layerDefs) {
    this.options.layerDefs = layerDefs;
    this._update();
    return this;
  },

  getTimeOptions: function () {
    return this.options.timeOptions;
  },

  setTimeOptions: function (timeOptions) {
    this.options.timeOptions = timeOptions;
    this._update();
    return this;
  },

  query: function () {
    return this.service.query();
  },

  identify: function () {
    return this.service.identify();
  },

  find: function () {
    return this.service.find();
  },

  _getPopupData: function (e) {
    var callback = leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].bind(function (error, featureCollection, response) {
      if (error) { return; } // we really can't do anything here but authenticate or requesterror will fire
      setTimeout(leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].bind(function () {
        this._renderPopup(e.latlng, error, featureCollection, response);
      }, this), 300);
    }, this);

    var identifyRequest;
    if (this.options.popup) {
      identifyRequest = this.options.popup.on(this._map).at(e.latlng);
    } else {
      identifyRequest = this.identify().on(this._map).at(e.latlng);
    }

    // remove extraneous vertices from response features if it has not already been done
    identifyRequest.params.maxAllowableOffset ? true : identifyRequest.simplify(this._map, 0.5);

    if (!(this.options.popup && this.options.popup.params && this.options.popup.params.layers)) {
      if (this.options.layers) {
        identifyRequest.layers('visible:' + this.options.layers.join(','));
      } else {
        identifyRequest.layers('visible');
      }
    }

    // if present, pass layer ids and sql filters through to the identify task
    if (this.options.layerDefs && typeof this.options.layerDefs !== 'string' && !identifyRequest.params.layerDefs) {
      for (var id in this.options.layerDefs) {
        if (this.options.layerDefs.hasOwnProperty(id)) {
          identifyRequest.layerDef(id, this.options.layerDefs[id]);
        }
      }
    }

    identifyRequest.run(callback);

    // set the flags to show the popup
    this._shouldRenderPopup = true;
    this._lastClick = e.latlng;
  },

  _buildExportParams: function () {
    var sr = parseInt(this._map.options.crs.code.split(':')[1], 10);

    var params = {
      bbox: this._calculateBbox(),
      size: this._calculateImageSize(),
      dpi: 96,
      format: this.options.format,
      transparent: this.options.transparent,
      bboxSR: sr,
      imageSR: sr
    };

    if (this.options.dynamicLayers) {
      params.dynamicLayers = this.options.dynamicLayers;
    }

    if (this.options.layers) {
      if (this.options.layers.length === 0) {
        return;
      } else {
        params.layers = 'show:' + this.options.layers.join(',');
      }
    }

    if (this.options.layerDefs) {
      params.layerDefs = typeof this.options.layerDefs === 'string' ? this.options.layerDefs : JSON.stringify(this.options.layerDefs);
    }

    if (this.options.timeOptions) {
      params.timeOptions = JSON.stringify(this.options.timeOptions);
    }

    if (this.options.from && this.options.to) {
      params.time = this.options.from.valueOf() + ',' + this.options.to.valueOf();
    }

    if (this.service.options.token) {
      params.token = this.service.options.token;
    }

    if (this.options.proxy) {
      params.proxy = this.options.proxy;
    }

    // use a timestamp to bust server cache
    if (this.options.disableCache) {
      params._ts = Date.now();
    }

    return params;
  },

  _requestExport: function (params, bounds) {
    if (this.options.f === 'json') {
      this.service.request('export', params, function (error, response) {
        if (error) { return; } // we really can't do anything here but authenticate or requesterror will fire

        if (this.options.token && response.href) {
          response.href += ('?token=' + this.options.token);
        }
        if (this.options.proxy && response.href) {
          response.href = this.options.proxy + '?' + response.href;
        }
        if (response.href) {
          this._renderImage(response.href, bounds);
        } else {
          this._renderImage(response.imageData, bounds, response.contentType);
        }
      }, this);
    } else {
      params.f = 'image';
      var fullUrl = this.options.url + 'export' + leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].getParamString(params);
      if (this.options.proxy) {
        fullUrl = this.options.proxy + '?' + fullUrl;
      }
      this._renderImage(fullUrl, bounds);
    }
  }
});

function dynamicMapLayer (url, options) {
  return new DynamicMapLayer(url, options);
}

/* harmony default export */ __webpack_exports__["default"] = (dynamicMapLayer);


/***/ }),

/***/ "./node_modules/esri-leaflet/src/Layers/FeatureLayer/FeatureGrid.js":
/*!**************************************************************************!*\
  !*** ./node_modules/esri-leaflet/src/Layers/FeatureLayer/FeatureGrid.js ***!
  \**************************************************************************/
/*! exports provided: FeatureGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureGrid", function() { return FeatureGrid; });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);


var FeatureGrid = leaflet__WEBPACK_IMPORTED_MODULE_0__["Layer"].extend({
  // @section
  // @aka GridLayer options
  options: {
    // @option cellSize: Number|Point = 256
    // Width and height of cells in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
    cellSize: 512,

    // @option updateWhenIdle: Boolean = (depends)
    // Load new cells only when panning ends.
    // `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
    // `false` otherwise in order to display new cells _during_ panning, since it is easy to pan outside the
    // [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
    updateWhenIdle: leaflet__WEBPACK_IMPORTED_MODULE_0__["Browser"].mobile,

    // @option updateInterval: Number = 150
    // Cells will not update more than once every `updateInterval` milliseconds when panning.
    updateInterval: 150,

    // @option noWrap: Boolean = false
    // Whether the layer is wrapped around the antimeridian. If `true`, the
    // GridLayer will only be displayed once at low zoom levels. Has no
    // effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
    // in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
    // cells outside the CRS limits.
    noWrap: false,

    // @option keepBuffer: Number = 1.5
    // When panning the map, keep this many rows and columns of cells before unloading them.
    keepBuffer: 1.5
  },

  initialize: function (options) {
    leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].setOptions(this, options);
  },

  onAdd: function (map) {
    this._cells = {};
    this._activeCells = {};
    this._resetView();
    this._update();
  },

  onRemove: function (map) {
    this._removeAllCells();
    this._cellZoom = undefined;
  },

  // @method isLoading: Boolean
  // Returns `true` if any cell in the grid layer has not finished loading.
  isLoading: function () {
    return this._loading;
  },

  // @method redraw: this
  // Causes the layer to clear all the cells and request them again.
  redraw: function () {
    if (this._map) {
      this._removeAllCells();
      this._update();
    }
    return this;
  },

  getEvents: function () {
    var events = {
      viewprereset: this._invalidateAll,
      viewreset: this._resetView,
      zoom: this._resetView,
      moveend: this._onMoveEnd
    };

    if (!this.options.updateWhenIdle) {
      // update cells on move, but not more often than once per given interval
      if (!this._onMove) {
        this._onMove = leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].throttle(
          this._onMoveEnd,
          this.options.updateInterval,
          this
        );
      }

      events.move = this._onMove;
    }

    return events;
  },

  // @section Extension methods
  // Layers extending `GridLayer` shall reimplement the following method.
  // @method createCell(coords: Object, done?: Function): HTMLElement
  // Called only internally, must be overridden by classes extending `GridLayer`.
  // Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
  // is specified, it must be called when the cell has finished loading and drawing.
  createCell: function () {
    return document.createElement('div');
  },

  removeCell: function () {
    return;
  },

  reuseCell: function () {
    return;
  },

  cellLeave: function () {
    return;
  },

  cellEnter: function () {
    return;
  },
  // @section
  // @method getCellSize: Point
  // Normalizes the [cellSize option](#gridlayer-cellsize) into a point. Used by the `createCell()` method.
  getCellSize: function () {
    var s = this.options.cellSize;
    return s instanceof leaflet__WEBPACK_IMPORTED_MODULE_0__["Point"] ? s : new leaflet__WEBPACK_IMPORTED_MODULE_0__["Point"](s, s);
  },

  _pruneCells: function () {
    if (!this._map) {
      return;
    }

    var key, cell;

    for (key in this._cells) {
      cell = this._cells[key];
      cell.retain = cell.current;
    }

    for (key in this._cells) {
      cell = this._cells[key];
      if (cell.current && !cell.active) {
        var coords = cell.coords;
        if (!this._retainParent(coords.x, coords.y, coords.z, coords.z - 5)) {
          this._retainChildren(coords.x, coords.y, coords.z, coords.z + 2);
        }
      }
    }

    for (key in this._cells) {
      if (!this._cells[key].retain) {
        this._removeCell(key);
      }
    }
  },

  _removeAllCells: function () {
    for (var key in this._cells) {
      this._removeCell(key);
    }
  },

  _invalidateAll: function () {
    this._removeAllCells();

    this._cellZoom = undefined;
  },

  _retainParent: function (x, y, z, minZoom) {
    var x2 = Math.floor(x / 2);
    var y2 = Math.floor(y / 2);
    var z2 = z - 1;
    var coords2 = new leaflet__WEBPACK_IMPORTED_MODULE_0__["Point"](+x2, +y2);
    coords2.z = +z2;

    var key = this._cellCoordsToKey(coords2);
    var cell = this._cells[key];

    if (cell && cell.active) {
      cell.retain = true;
      return true;
    } else if (cell && cell.loaded) {
      cell.retain = true;
    }

    if (z2 > minZoom) {
      return this._retainParent(x2, y2, z2, minZoom);
    }

    return false;
  },

  _retainChildren: function (x, y, z, maxZoom) {
    for (var i = 2 * x; i < 2 * x + 2; i++) {
      for (var j = 2 * y; j < 2 * y + 2; j++) {
        var coords = new leaflet__WEBPACK_IMPORTED_MODULE_0__["Point"](i, j);
        coords.z = z + 1;

        var key = this._cellCoordsToKey(coords);
        var cell = this._cells[key];

        if (cell && cell.active) {
          cell.retain = true;
          continue;
        } else if (cell && cell.loaded) {
          cell.retain = true;
        }

        if (z + 1 < maxZoom) {
          this._retainChildren(i, j, z + 1, maxZoom);
        }
      }
    }
  },

  _resetView: function (e) {
    var animating = e && (e.pinch || e.flyTo);

    if (animating) {
      return;
    }

    this._setView(
      this._map.getCenter(),
      this._map.getZoom(),
      animating,
      animating
    );
  },

  _setView: function (center, zoom, noPrune, noUpdate) {
    var cellZoom = Math.round(zoom);

    if (!noUpdate) {
      this._cellZoom = cellZoom;

      if (this._abortLoading) {
        this._abortLoading();
      }

      this._resetGrid();

      if (cellZoom !== undefined) {
        this._update(center);
      }

      if (!noPrune) {
        this._pruneCells();
      }

      // Flag to prevent _updateOpacity from pruning cells during
      // a zoom anim or a pinch gesture
      this._noPrune = !!noPrune;
    }
  },

  _resetGrid: function () {
    var map = this._map;
    var crs = map.options.crs;
    var cellSize = (this._cellSize = this.getCellSize());
    var cellZoom = this._cellZoom;

    var bounds = this._map.getPixelWorldBounds(this._cellZoom);
    if (bounds) {
      this._globalCellRange = this._pxBoundsToCellRange(bounds);
    }

    this._wrapX = crs.wrapLng &&
      !this.options.noWrap && [
        Math.floor(map.project([0, crs.wrapLng[0]], cellZoom).x / cellSize.x),
        Math.ceil(map.project([0, crs.wrapLng[1]], cellZoom).x / cellSize.y)
      ];
    this._wrapY = crs.wrapLat &&
      !this.options.noWrap && [
        Math.floor(map.project([crs.wrapLat[0], 0], cellZoom).y / cellSize.x),
        Math.ceil(map.project([crs.wrapLat[1], 0], cellZoom).y / cellSize.y)
      ];
  },

  _onMoveEnd: function (e) {
    var animating = e && (e.pinch || e.flyTo);

    if (animating || !this._map || this._map._animatingZoom) {
      return;
    }

    this._update();
  },

  _getCelldPixelBounds: function (center) {
    var map = this._map;
    var mapZoom = map._animatingZoom
      ? Math.max(map._animateToZoom, map.getZoom())
      : map.getZoom();
    var scale = map.getZoomScale(mapZoom, this._cellZoom);
    var pixelCenter = map.project(center, this._cellZoom).floor();
    var halfSize = map.getSize().divideBy(scale * 2);

    return new leaflet__WEBPACK_IMPORTED_MODULE_0__["Bounds"](
      pixelCenter.subtract(halfSize),
      pixelCenter.add(halfSize)
    );
  },

  // Private method to load cells in the grid's active zoom level according to map bounds
  _update: function (center) {
    var map = this._map;
    if (!map) {
      return;
    }
    var zoom = Math.round(map.getZoom());

    if (center === undefined) {
      center = map.getCenter();
    }

    var pixelBounds = this._getCelldPixelBounds(center);
    var cellRange = this._pxBoundsToCellRange(pixelBounds);
    var cellCenter = cellRange.getCenter();
    var queue = [];
    var margin = this.options.keepBuffer;
    var noPruneRange = new leaflet__WEBPACK_IMPORTED_MODULE_0__["Bounds"](
      cellRange.getBottomLeft().subtract([margin, -margin]),
      cellRange.getTopRight().add([margin, -margin])
    );

    // Sanity check: panic if the cell range contains Infinity somewhere.
    if (
      !(
        isFinite(cellRange.min.x) &&
        isFinite(cellRange.min.y) &&
        isFinite(cellRange.max.x) &&
        isFinite(cellRange.max.y)
      )
    ) {
      throw new Error('Attempted to load an infinite number of cells');
    }

    for (var key in this._cells) {
      var c = this._cells[key].coords;
      if (
        c.z !== this._cellZoom ||
        !noPruneRange.contains(new leaflet__WEBPACK_IMPORTED_MODULE_0__["Point"](c.x, c.y))
      ) {
        this._cells[key].current = false;
      }
    }

    // _update just loads more cells. If the cell zoom level differs too much
    // from the map's, let _setView reset levels and prune old cells.
    if (Math.abs(zoom - this._cellZoom) > 1) {
      this._setView(center, zoom);
      return;
    }

    // create a queue of coordinates to load cells from
    for (var j = cellRange.min.y; j <= cellRange.max.y; j++) {
      for (var i = cellRange.min.x; i <= cellRange.max.x; i++) {
        var coords = new leaflet__WEBPACK_IMPORTED_MODULE_0__["Point"](i, j);
        coords.z = this._cellZoom;

        if (!this._isValidCell(coords)) {
          continue;
        }

        var cell = this._cells[this._cellCoordsToKey(coords)];
        if (cell) {
          cell.current = true;
        } else {
          queue.push(coords);
        }
      }
    }

    // sort cell queue to load cells in order of their distance to center
    queue.sort(function (a, b) {
      return a.distanceTo(cellCenter) - b.distanceTo(cellCenter);
    });

    if (queue.length !== 0) {
      // if it's the first batch of cells to load
      if (!this._loading) {
        this._loading = true;
      }

      for (i = 0; i < queue.length; i++) {
        var _key = this._cellCoordsToKey(queue[i]);
        var _coords = this._keyToCellCoords(_key);
        if (this._activeCells[_coords]) {
          this._reuseCell(queue[i]);
        } else {
          this._createCell(queue[i]);
        }
      }
    }
  },

  _isValidCell: function (coords) {
    var crs = this._map.options.crs;

    if (!crs.infinite) {
      // don't load cell if it's out of bounds and not wrapped
      var bounds = this._globalCellRange;
      if (
        (!crs.wrapLng &&
          (coords.x < bounds.min.x || coords.x > bounds.max.x)) ||
        (!crs.wrapLat && (coords.y < bounds.min.y || coords.y > bounds.max.y))
      ) {
        return false;
      }
    }

    if (!this.options.bounds) {
      return true;
    }

    // don't load cell if it doesn't intersect the bounds in options
    var cellBounds = this._cellCoordsToBounds(coords);
    return Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["toLatLngBounds"])(this.options.bounds).overlaps(cellBounds);
  },

  _keyToBounds: function (key) {
    return this._cellCoordsToBounds(this._keyToCellCoords(key));
  },

  _cellCoordsToNwSe: function (coords) {
    var map = this._map;
    var cellSize = this.getCellSize();
    var nwPoint = coords.scaleBy(cellSize);
    var sePoint = nwPoint.add(cellSize);
    var nw = map.unproject(nwPoint, coords.z);
    var se = map.unproject(sePoint, coords.z);

    return [nw, se];
  },

  // converts cell coordinates to its geographical bounds
  _cellCoordsToBounds: function (coords) {
    var bp = this._cellCoordsToNwSe(coords);
    var bounds = new leaflet__WEBPACK_IMPORTED_MODULE_0__["LatLngBounds"](bp[0], bp[1]);

    if (!this.options.noWrap) {
      bounds = this._map.wrapLatLngBounds(bounds);
    }
    return bounds;
  },
  // converts cell coordinates to key for the cell cache
  _cellCoordsToKey: function (coords) {
    return coords.x + ':' + coords.y + ':' + coords.z;
  },

  // converts cell cache key to coordinates
  _keyToCellCoords: function (key) {
    var k = key.split(':');
    var coords = new leaflet__WEBPACK_IMPORTED_MODULE_0__["Point"](+k[0], +k[1]);

    coords.z = +k[2];
    return coords;
  },

  _removeCell: function (key) {
    var cell = this._cells[key];

    if (!cell) {
      return;
    }

    var coords = this._keyToCellCoords(key);
    var wrappedCoords = this._wrapCoords(coords);
    var cellBounds = this._cellCoordsToBounds(this._wrapCoords(coords));

    cell.current = false;

    delete this._cells[key];
    this._activeCells[key] = cell;

    this.cellLeave(cellBounds, wrappedCoords, key);

    this.fire('cellleave', {
      key: key,
      coords: wrappedCoords,
      bounds: cellBounds
    });
  },

  _reuseCell: function (coords) {
    var key = this._cellCoordsToKey(coords);

    // save cell in cache
    this._cells[key] = this._activeCells[key];
    this._cells[key].current = true;

    var wrappedCoords = this._wrapCoords(coords);
    var cellBounds = this._cellCoordsToBounds(this._wrapCoords(coords));

    this.cellEnter(cellBounds, wrappedCoords, key);

    this.fire('cellenter', {
      key: key,
      coords: wrappedCoords,
      bounds: cellBounds
    });
  },

  _createCell: function (coords) {
    var key = this._cellCoordsToKey(coords);

    var wrappedCoords = this._wrapCoords(coords);
    var cellBounds = this._cellCoordsToBounds(this._wrapCoords(coords));

    this.createCell(cellBounds, wrappedCoords, key);

    this.fire('cellcreate', {
      key: key,
      coords: wrappedCoords,
      bounds: cellBounds
    });

    // save cell in cache
    this._cells[key] = {
      coords: coords,
      current: true
    };

    leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].requestAnimFrame(this._pruneCells, this);
  },

  _cellReady: function (coords, err, cell) {
    var key = this._cellCoordsToKey(coords);

    cell = this._cells[key];

    if (!cell) {
      return;
    }

    cell.loaded = +new Date();

    cell.active = true;
  },

  _getCellPos: function (coords) {
    return coords.scaleBy(this.getCellSize());
  },

  _wrapCoords: function (coords) {
    var newCoords = new leaflet__WEBPACK_IMPORTED_MODULE_0__["Point"](
      this._wrapX ? leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].wrapNum(coords.x, this._wrapX) : coords.x,
      this._wrapY ? leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].wrapNum(coords.y, this._wrapY) : coords.y
    );
    newCoords.z = coords.z;
    return newCoords;
  },

  _pxBoundsToCellRange: function (bounds) {
    var cellSize = this.getCellSize();
    return new leaflet__WEBPACK_IMPORTED_MODULE_0__["Bounds"](
      bounds.min.unscaleBy(cellSize).floor(),
      bounds.max.unscaleBy(cellSize).ceil().subtract([1, 1])
    );
  }
});


/***/ }),

/***/ "./node_modules/esri-leaflet/src/Layers/FeatureLayer/FeatureLayer.js":
/*!***************************************************************************!*\
  !*** ./node_modules/esri-leaflet/src/Layers/FeatureLayer/FeatureLayer.js ***!
  \***************************************************************************/
/*! exports provided: FeatureLayer, featureLayer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureLayer", function() { return FeatureLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featureLayer", function() { return featureLayer; });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FeatureManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeatureManager */ "./node_modules/esri-leaflet/src/Layers/FeatureLayer/FeatureManager.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Util */ "./node_modules/esri-leaflet/src/Util.js");




var FeatureLayer = _FeatureManager__WEBPACK_IMPORTED_MODULE_1__["FeatureManager"].extend({

  options: {
    cacheLayers: true
  },

  /**
   * Constructor
   */
  initialize: function (options) {
    if (options.apikey) {
      options.token = options.apikey;
    }
    _FeatureManager__WEBPACK_IMPORTED_MODULE_1__["FeatureManager"].prototype.initialize.call(this, options);
    this._originalStyle = this.options.style;
    this._layers = {};
  },

  /**
   * Layer Interface
   */

  onRemove: function (map) {
    for (var i in this._layers) {
      map.removeLayer(this._layers[i]);
      // trigger the event when the entire featureLayer is removed from the map
      this.fire('removefeature', {
        feature: this._layers[i].feature,
        permanent: false
      }, true);
    }

    return _FeatureManager__WEBPACK_IMPORTED_MODULE_1__["FeatureManager"].prototype.onRemove.call(this, map);
  },

  createNewLayer: function (geojson) {
    var layer = leaflet__WEBPACK_IMPORTED_MODULE_0__["GeoJSON"].geometryToLayer(geojson, this.options);
    // trap for GeoJSON without geometry
    if (layer) {
      layer.defaultOptions = layer.options;
    }
    return layer;
  },

  _updateLayer: function (layer, geojson) {
    // convert the geojson coordinates into a Leaflet LatLng array/nested arrays
    // pass it to setLatLngs to update layer geometries
    var latlngs = [];
    var coordsToLatLng = this.options.coordsToLatLng || leaflet__WEBPACK_IMPORTED_MODULE_0__["GeoJSON"].coordsToLatLng;

    // copy new attributes, if present
    if (geojson.properties) {
      layer.feature.properties = geojson.properties;
    }

    switch (geojson.geometry.type) {
      case 'Point':
        latlngs = leaflet__WEBPACK_IMPORTED_MODULE_0__["GeoJSON"].coordsToLatLng(geojson.geometry.coordinates);
        layer.setLatLng(latlngs);
        break;
      case 'LineString':
        latlngs = leaflet__WEBPACK_IMPORTED_MODULE_0__["GeoJSON"].coordsToLatLngs(geojson.geometry.coordinates, 0, coordsToLatLng);
        layer.setLatLngs(latlngs);
        break;
      case 'MultiLineString':
        latlngs = leaflet__WEBPACK_IMPORTED_MODULE_0__["GeoJSON"].coordsToLatLngs(geojson.geometry.coordinates, 1, coordsToLatLng);
        layer.setLatLngs(latlngs);
        break;
      case 'Polygon':
        latlngs = leaflet__WEBPACK_IMPORTED_MODULE_0__["GeoJSON"].coordsToLatLngs(geojson.geometry.coordinates, 1, coordsToLatLng);
        layer.setLatLngs(latlngs);
        break;
      case 'MultiPolygon':
        latlngs = leaflet__WEBPACK_IMPORTED_MODULE_0__["GeoJSON"].coordsToLatLngs(geojson.geometry.coordinates, 2, coordsToLatLng);
        layer.setLatLngs(latlngs);
        break;
    }
  },

  /**
   * Feature Management Methods
   */

  createLayers: function (features) {
    for (var i = features.length - 1; i >= 0; i--) {
      var geojson = features[i];

      var layer = this._layers[geojson.id];
      var newLayer;

      if (this._visibleZoom() && layer && !this._map.hasLayer(layer) && (!this.options.timeField || this._featureWithinTimeRange(geojson))) {
        this._map.addLayer(layer);
        this.fire('addfeature', {
          feature: layer.feature
        }, true);
      }

      // update geometry if necessary
      if (layer && this.options.simplifyFactor > 0 && (layer.setLatLngs || layer.setLatLng)) {
        this._updateLayer(layer, geojson);
      }

      if (!layer) {
        newLayer = this.createNewLayer(geojson);

        if (!newLayer) {
          Object(_Util__WEBPACK_IMPORTED_MODULE_2__["warn"])('invalid GeoJSON encountered');
        } else {
          newLayer.feature = geojson;

          // bubble events from individual layers to the feature layer
          newLayer.addEventParent(this);

          if (this.options.onEachFeature) {
            this.options.onEachFeature(newLayer.feature, newLayer);
          }

          // cache the layer
          this._layers[newLayer.feature.id] = newLayer;

          // style the layer
          this.setFeatureStyle(newLayer.feature.id, this.options.style);

          this.fire('createfeature', {
            feature: newLayer.feature
          }, true);

          // add the layer if the current zoom level is inside the range defined for the layer, it is within the current time bounds or our layer is not time enabled
          if (this._visibleZoom() && (!this.options.timeField || (this.options.timeField && this._featureWithinTimeRange(geojson)))) {
            this._map.addLayer(newLayer);
          }
        }
      }
    }
  },

  addLayers: function (ids) {
    for (var i = ids.length - 1; i >= 0; i--) {
      var layer = this._layers[ids[i]];
      if (layer && (!this.options.timeField || this._featureWithinTimeRange(layer.feature))) {
        this._map.addLayer(layer);
      }
    }
  },

  removeLayers: function (ids, permanent) {
    for (var i = ids.length - 1; i >= 0; i--) {
      var id = ids[i];
      var layer = this._layers[id];
      if (layer) {
        this.fire('removefeature', {
          feature: layer.feature,
          permanent: permanent
        }, true);
        this._map.removeLayer(layer);
      }
      if (layer && permanent) {
        delete this._layers[id];
      }
    }
  },

  cellEnter: function (bounds, coords) {
    if (this._visibleZoom() && !this._zooming && this._map) {
      leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].requestAnimFrame(leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].bind(function () {
        var cacheKey = this._cacheKey(coords);
        var cellKey = this._cellCoordsToKey(coords);
        var layers = this._cache[cacheKey];
        if (this._activeCells[cellKey] && layers) {
          this.addLayers(layers);
        }
      }, this));
    }
  },

  cellLeave: function (bounds, coords) {
    if (!this._zooming) {
      leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].requestAnimFrame(leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].bind(function () {
        if (this._map) {
          var cacheKey = this._cacheKey(coords);
          var cellKey = this._cellCoordsToKey(coords);
          var layers = this._cache[cacheKey];
          var mapBounds = this._map.getBounds();
          if (!this._activeCells[cellKey] && layers) {
            var removable = true;

            for (var i = 0; i < layers.length; i++) {
              var layer = this._layers[layers[i]];
              if (layer && layer.getBounds && mapBounds.intersects(layer.getBounds())) {
                removable = false;
              }
            }

            if (removable) {
              this.removeLayers(layers, !this.options.cacheLayers);
            }

            if (!this.options.cacheLayers && removable) {
              delete this._cache[cacheKey];
              delete this._cells[cellKey];
              delete this._activeCells[cellKey];
            }
          }
        }
      }, this));
    }
  },

  /**
   * Styling Methods
   */

  resetStyle: function () {
    this.options.style = this._originalStyle;
    this.eachFeature(function (layer) {
      this.resetFeatureStyle(layer.feature.id);
    }, this);
    return this;
  },

  setStyle: function (style) {
    this.options.style = style;
    this.eachFeature(function (layer) {
      this.setFeatureStyle(layer.feature.id, style);
    }, this);
    return this;
  },

  resetFeatureStyle: function (id) {
    var layer = this._layers[id];
    var style = this._originalStyle || leaflet__WEBPACK_IMPORTED_MODULE_0__["Path"].prototype.options;
    if (layer) {
      leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].extend(layer.options, layer.defaultOptions);
      this.setFeatureStyle(id, style);
    }
    return this;
  },

  setFeatureStyle: function (id, style) {
    var layer = this._layers[id];
    if (typeof style === 'function') {
      style = style(layer.feature);
    }
    if (layer.setStyle) {
      layer.setStyle(style);
    }
    return this;
  },

  /**
   * Utility Methods
   */

  eachActiveFeature: function (fn, context) {
    // figure out (roughly) which layers are in view
    if (this._map) {
      var activeBounds = this._map.getBounds();
      for (var i in this._layers) {
        if (this._currentSnapshot.indexOf(this._layers[i].feature.id) !== -1) {
          // a simple point in poly test for point geometries
          if (typeof this._layers[i].getLatLng === 'function' && activeBounds.contains(this._layers[i].getLatLng())) {
            fn.call(context, this._layers[i]);
          } else if (typeof this._layers[i].getBounds === 'function' && activeBounds.intersects(this._layers[i].getBounds())) {
            // intersecting bounds check for polyline and polygon geometries
            fn.call(context, this._layers[i]);
          }
        }
      }
    }
    return this;
  },

  eachFeature: function (fn, context) {
    for (var i in this._layers) {
      fn.call(context, this._layers[i]);
    }
    return this;
  },

  getFeature: function (id) {
    return this._layers[id];
  },

  bringToBack: function () {
    this.eachFeature(function (layer) {
      if (layer.bringToBack) {
        layer.bringToBack();
      }
    });
  },

  bringToFront: function () {
    this.eachFeature(function (layer) {
      if (layer.bringToFront) {
        layer.bringToFront();
      }
    });
  },

  redraw: function (id) {
    if (id) {
      this._redraw(id);
    }
    return this;
  },

  _redraw: function (id) {
    var layer = this._layers[id];
    var geojson = layer.feature;

    // if this looks like a marker
    if (layer && layer.setIcon && this.options.pointToLayer) {
      // update custom symbology, if necessary
      if (this.options.pointToLayer) {
        var getIcon = this.options.pointToLayer(geojson, Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["latLng"])(geojson.geometry.coordinates[1], geojson.geometry.coordinates[0]));
        var updatedIcon = getIcon.options.icon;
        layer.setIcon(updatedIcon);
      }
    }

    // looks like a vector marker (circleMarker)
    if (layer && layer.setStyle && this.options.pointToLayer) {
      var getStyle = this.options.pointToLayer(geojson, Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["latLng"])(geojson.geometry.coordinates[1], geojson.geometry.coordinates[0]));
      var updatedStyle = getStyle.options;
      this.setFeatureStyle(geojson.id, updatedStyle);
    }

    // looks like a path (polygon/polyline)
    if (layer && layer.setStyle && this.options.style) {
      this.resetStyle(geojson.id);
    }
  }
});

function featureLayer (options) {
  return new FeatureLayer(options);
}

/* harmony default export */ __webpack_exports__["default"] = (featureLayer);


/***/ }),

/***/ "./node_modules/esri-leaflet/src/Layers/FeatureLayer/FeatureManager.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/esri-leaflet/src/Layers/FeatureLayer/FeatureManager.js ***!
  \*****************************************************************************/
/*! exports provided: FeatureManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureManager", function() { return FeatureManager; });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Services_FeatureLayerService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/FeatureLayerService */ "./node_modules/esri-leaflet/src/Services/FeatureLayerService.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Util */ "./node_modules/esri-leaflet/src/Util.js");
/* harmony import */ var _FeatureGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FeatureGrid */ "./node_modules/esri-leaflet/src/Layers/FeatureLayer/FeatureGrid.js");
/* harmony import */ var tiny_binary_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tiny-binary-search */ "./node_modules/tiny-binary-search/index.js");






var FeatureManager = _FeatureGrid__WEBPACK_IMPORTED_MODULE_3__["FeatureGrid"].extend({
  /**
   * Options
   */

  options: {
    attribution: null,
    where: '1=1',
    fields: ['*'],
    from: false,
    to: false,
    timeField: false,
    timeFilterMode: 'server',
    simplifyFactor: 0,
    precision: 6,
    fetchAllFeatures: false
  },

  /**
   * Constructor
   */

  initialize: function (options) {
    _FeatureGrid__WEBPACK_IMPORTED_MODULE_3__["FeatureGrid"].prototype.initialize.call(this, options);

    options = Object(_Util__WEBPACK_IMPORTED_MODULE_2__["getUrlParams"])(options);
    options = leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].setOptions(this, options);

    this.service = Object(_Services_FeatureLayerService__WEBPACK_IMPORTED_MODULE_1__["default"])(options);
    this.service.addEventParent(this);

    // use case insensitive regex to look for common fieldnames used for indexing
    if (this.options.fields[0] !== '*') {
      var oidCheck = false;
      for (var i = 0; i < this.options.fields.length; i++) {
        if (this.options.fields[i].match(/^(OBJECTID|FID|OID|ID)$/i)) {
          oidCheck = true;
        }
      }
      if (oidCheck === false) {
        Object(_Util__WEBPACK_IMPORTED_MODULE_2__["warn"])(
          'no known esriFieldTypeOID field detected in fields Array.  Please add an attribute field containing unique IDs to ensure the layer can be drawn correctly.'
        );
      }
    }

    if (this.options.timeField.start && this.options.timeField.end) {
      this._startTimeIndex = new tiny_binary_search__WEBPACK_IMPORTED_MODULE_4__["default"]();
      this._endTimeIndex = new tiny_binary_search__WEBPACK_IMPORTED_MODULE_4__["default"]();
    } else if (this.options.timeField) {
      this._timeIndex = new tiny_binary_search__WEBPACK_IMPORTED_MODULE_4__["default"]();
    }

    this._cache = {};
    this._currentSnapshot = []; // cache of what layers should be active
    this._activeRequests = 0;
  },

  /**
   * Layer Interface
   */

  onAdd: function (map) {
    // include 'Powered by Esri' in map attribution
    Object(_Util__WEBPACK_IMPORTED_MODULE_2__["setEsriAttribution"])(map);

    this.service.metadata(function (err, metadata) {
      if (!err) {
        var supportedFormats = metadata.supportedQueryFormats;

        // Check if someone has requested that we don't use geoJSON, even if it's available
        var forceJsonFormat = false;
        if (this.service.options.isModern === false || this.options.fetchAllFeatures) {
          forceJsonFormat = true;
        }

        // Unless we've been told otherwise, check to see whether service can emit GeoJSON natively
        if (
          !forceJsonFormat &&
          supportedFormats &&
          supportedFormats.indexOf('geoJSON') !== -1
        ) {
          this.service.options.isModern = true;
        }

        if (metadata.objectIdField) {
          this.service.options.idAttribute = metadata.objectIdField;
        }

        // add copyright text listed in service metadata
        if (
          !this.options.attribution &&
          map.attributionControl &&
          metadata.copyrightText
        ) {
          this.options.attribution = metadata.copyrightText;
          map.attributionControl.addAttribution(this.getAttribution());
        }
      }
    }, this);

    map.on('zoomend', this._handleZoomChange, this);

    return _FeatureGrid__WEBPACK_IMPORTED_MODULE_3__["FeatureGrid"].prototype.onAdd.call(this, map);
  },

  onRemove: function (map) {
    Object(_Util__WEBPACK_IMPORTED_MODULE_2__["removeEsriAttribution"])(map);
    map.off('zoomend', this._handleZoomChange, this);

    return _FeatureGrid__WEBPACK_IMPORTED_MODULE_3__["FeatureGrid"].prototype.onRemove.call(this, map);
  },

  getAttribution: function () {
    return this.options.attribution;
  },

  /**
   * Feature Management
   */

  createCell: function (bounds, coords) {
    // dont fetch features outside the scale range defined for the layer
    if (this._visibleZoom()) {
      this._requestFeatures(bounds, coords);
    }
  },

  _requestFeatures: function (bounds, coords, callback, offset) {
    this._activeRequests++;

    // default param
    offset = offset || 0;

    var originalWhere = this.options.where;

    // our first active request fires loading
    if (this._activeRequests === 1) {
      this.fire(
        'loading',
        {
          bounds: bounds
        },
        true
      );
    }

    return this._buildQuery(bounds, offset).run(function (
      error,
      featureCollection,
      response
    ) {
      if (response && response.exceededTransferLimit) {
        this.fire('drawlimitexceeded');
      }

      // the where changed while this request was being run so don't it.
      if (this.options.where !== originalWhere) {
        return;
      }

      // no error, features
      if (!error && featureCollection && featureCollection.features.length) {
        // schedule adding features until the next animation frame
        leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].requestAnimFrame(
          leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].bind(function () {
            this._addFeatures(featureCollection.features, coords);
            this._postProcessFeatures(bounds);
          }, this)
        );
      }

      // no error, no features
      if (!error && featureCollection && !featureCollection.features.length) {
        this._postProcessFeatures(bounds);
      }

      if (error) {
        this._postProcessFeatures(bounds);
      }

      if (callback) {
        callback.call(this, error, featureCollection);
      }
      if (response && (response.exceededTransferLimit || (response.properties && response.properties.exceededTransferLimit)) && this.options.fetchAllFeatures) {
        this._requestFeatures(bounds, coords, callback, offset + featureCollection.features.length);
      }
    },
      this);
  },

  _postProcessFeatures: function (bounds) {
    // deincrement the request counter now that we have processed features
    this._activeRequests--;

    // if there are no more active requests fire a load event for this view
    if (this._activeRequests <= 0) {
      this.fire('load', {
        bounds: bounds
      });
    }
  },

  _cacheKey: function (coords) {
    return coords.z + ':' + coords.x + ':' + coords.y;
  },

  _addFeatures: function (features, coords) {
    // coords is optional - will be false if coming from addFeatures() function
    if (coords) {
      var key = this._cacheKey(coords);
      this._cache[key] = this._cache[key] || [];
    }

    for (var i = features.length - 1; i >= 0; i--) {
      var id = features[i].id;

      if (this._currentSnapshot.indexOf(id) === -1) {
        this._currentSnapshot.push(id);
      }
      if (typeof key !== 'undefined' && this._cache[key].indexOf(id) === -1) {
        this._cache[key].push(id);
      }
    }

    if (this.options.timeField) {
      this._buildTimeIndexes(features);
    }

    this.createLayers(features);
  },

  _buildQuery: function (bounds, offset) {
    var query = this.service
      .query()
      .intersects(bounds)
      .where(this.options.where)
      .fields(this.options.fields)
      .precision(this.options.precision);

    if (this.options.fetchAllFeatures && !isNaN(parseInt(offset))) {
      query = query.offset(offset);
    }

    query.params['resultType'] = 'tile';

    if (this.options.requestParams) {
      leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].extend(query.params, this.options.requestParams);
    }

    if (this.options.simplifyFactor) {
      query.simplify(this._map, this.options.simplifyFactor);
    }

    if (
      this.options.timeFilterMode === 'server' &&
      this.options.from &&
      this.options.to
    ) {
      query.between(this.options.from, this.options.to);
    }

    return query;
  },

  /**
   * Where Methods
   */

  setWhere: function (where, callback, context) {
    this.options.where = where && where.length ? where : '1=1';

    var oldSnapshot = [];
    var newSnapshot = [];
    var pendingRequests = 0;
    var requestError = null;
    var requestCallback = leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].bind(function (error, featureCollection) {
      if (error) {
        requestError = error;
      }

      if (featureCollection) {
        for (var i = featureCollection.features.length - 1; i >= 0; i--) {
          newSnapshot.push(featureCollection.features[i].id);
        }
      }

      pendingRequests--;

      if (
        pendingRequests <= 0 &&
        this._visibleZoom() &&
        where === this.options.where // the where is still the same so use this one
      ) {
        this._currentSnapshot = newSnapshot;
        // schedule adding features for the next animation frame
        leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].requestAnimFrame(
          leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].bind(function () {
            this.removeLayers(oldSnapshot);
            this.addLayers(newSnapshot);
            if (callback) {
              callback.call(context, requestError);
            }
          }, this)
        );
      }
    }, this);

    for (var i = this._currentSnapshot.length - 1; i >= 0; i--) {
      oldSnapshot.push(this._currentSnapshot[i]);
    }

    this._cache = {};

    for (var key in this._cells) {
      pendingRequests++;
      var coords = this._keyToCellCoords(key);
      var bounds = this._cellCoordsToBounds(coords);
      this._requestFeatures(bounds, coords, requestCallback);
    }

    return this;
  },

  getWhere: function () {
    return this.options.where;
  },

  /**
   * Time Range Methods
   */

  getTimeRange: function () {
    return [this.options.from, this.options.to];
  },

  setTimeRange: function (from, to, callback, context) {
    var oldFrom = this.options.from;
    var oldTo = this.options.to;
    var pendingRequests = 0;
    var requestError = null;
    var requestCallback = leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].bind(function (error) {
      if (error) {
        requestError = error;
      }
      this._filterExistingFeatures(oldFrom, oldTo, from, to);

      pendingRequests--;

      if (callback && pendingRequests <= 0) {
        callback.call(context, requestError);
      }
    }, this);

    this.options.from = from;
    this.options.to = to;

    this._filterExistingFeatures(oldFrom, oldTo, from, to);

    if (this.options.timeFilterMode === 'server') {
      for (var key in this._cells) {
        pendingRequests++;
        var coords = this._keyToCellCoords(key);
        var bounds = this._cellCoordsToBounds(coords);
        this._requestFeatures(bounds, coords, requestCallback);
      }
    }

    return this;
  },

  refresh: function () {
    this.setWhere(this.options.where);
  },

  _filterExistingFeatures: function (oldFrom, oldTo, newFrom, newTo) {
    var layersToRemove =
      oldFrom && oldTo
        ? this._getFeaturesInTimeRange(oldFrom, oldTo)
        : this._currentSnapshot;
    var layersToAdd = this._getFeaturesInTimeRange(newFrom, newTo);

    if (layersToAdd.indexOf) {
      for (var i = 0; i < layersToAdd.length; i++) {
        var shouldRemoveLayer = layersToRemove.indexOf(layersToAdd[i]);
        if (shouldRemoveLayer >= 0) {
          layersToRemove.splice(shouldRemoveLayer, 1);
        }
      }
    }

    // schedule adding features until the next animation frame
    leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].requestAnimFrame(
      leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].bind(function () {
        this.removeLayers(layersToRemove);
        this.addLayers(layersToAdd);
      }, this)
    );
  },

  _getFeaturesInTimeRange: function (start, end) {
    var ids = [];
    var search;

    if (this.options.timeField.start && this.options.timeField.end) {
      var startTimes = this._startTimeIndex.between(start, end);
      var endTimes = this._endTimeIndex.between(start, end);
      search = startTimes.concat(endTimes);
    } else if (this._timeIndex) {
      search = this._timeIndex.between(start, end);
    } else {
      Object(_Util__WEBPACK_IMPORTED_MODULE_2__["warn"])(
        'You must set timeField in the layer constructor in order to manipulate the start and end time filter.'
      );
      return [];
    }

    for (var i = search.length - 1; i >= 0; i--) {
      ids.push(search[i].id);
    }

    return ids;
  },

  _buildTimeIndexes: function (geojson) {
    var i;
    var feature;
    if (this.options.timeField.start && this.options.timeField.end) {
      var startTimeEntries = [];
      var endTimeEntries = [];
      for (i = geojson.length - 1; i >= 0; i--) {
        feature = geojson[i];
        startTimeEntries.push({
          id: feature.id,
          value: new Date(feature.properties[this.options.timeField.start])
        });
        endTimeEntries.push({
          id: feature.id,
          value: new Date(feature.properties[this.options.timeField.end])
        });
      }
      this._startTimeIndex.bulkAdd(startTimeEntries);
      this._endTimeIndex.bulkAdd(endTimeEntries);
    } else {
      var timeEntries = [];
      for (i = geojson.length - 1; i >= 0; i--) {
        feature = geojson[i];
        timeEntries.push({
          id: feature.id,
          value: new Date(feature.properties[this.options.timeField])
        });
      }

      this._timeIndex.bulkAdd(timeEntries);
    }
  },

  _featureWithinTimeRange: function (feature) {
    if (!this.options.from || !this.options.to) {
      return true;
    }

    var from = +this.options.from.valueOf();
    var to = +this.options.to.valueOf();

    if (typeof this.options.timeField === 'string') {
      var date = +feature.properties[this.options.timeField];
      return date >= from && date <= to;
    }

    if (this.options.timeField.start && this.options.timeField.end) {
      var startDate = +feature.properties[this.options.timeField.start];
      var endDate = +feature.properties[this.options.timeField.end];
      return (
        (startDate >= from && startDate <= to) ||
        (endDate >= from && endDate <= to) ||
        (startDate <= from && endDate >= to)
      );
    }
  },

  _visibleZoom: function () {
    // check to see whether the current zoom level of the map is within the optional limit defined for the FeatureLayer
    if (!this._map) {
      return false;
    }
    var zoom = this._map.getZoom();
    if (zoom > this.options.maxZoom || zoom < this.options.minZoom) {
      return false;
    } else {
      return true;
    }
  },

  _handleZoomChange: function () {
    if (!this._visibleZoom()) {
      this.removeLayers(this._currentSnapshot);
    } else {
      /*
      for every cell in this._cells
        1. Get the cache key for the coords of the cell
        2. If this._cache[key] exists it will be an array of feature IDs.
        3. Call this.addLayers(this._cache[key]) to instruct the feature layer to add the layers back.
      */
      for (var i in this._cells) {
        var coords = this._cells[i].coords;
        var key = this._cacheKey(coords);
        if (this._cache[key]) {
          this.addLayers(this._cache[key]);
        }
      }
    }
  },

  /**
   * Service Methods
   */

  authenticate: function (token) {
    this.service.authenticate(token);
    return this;
  },

  metadata: function (callback, context) {
    this.service.metadata(callback, context);
    return this;
  },

  query: function () {
    return this.service.query();
  },

  _getMetadata: function (callback) {
    if (this._metadata) {
      var error;
      callback(error, this._metadata);
    } else {
      this.metadata(
        leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].bind(function (error, response) {
          this._metadata = response;
          callback(error, this._metadata);
        }, this)
      );
    }
  },

  addFeature: function (feature, callback, context) {
    this.addFeatures(feature, callback, context);
  },

  addFeatures: function (features, callback, context) {
    this._getMetadata(
      leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].bind(function (error, metadata) {
        if (error) {
          if (callback) {
            callback.call(this, error, null);
          }
          return;
        }
        // GeoJSON featureCollection or simple feature
        var featuresArray = features.features ? features.features : [features];

        this.service.addFeatures(
          features,
          leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].bind(function (error, response) {
            if (!error) {
              for (var i = featuresArray.length - 1; i >= 0; i--) {
                // assign ID from result to appropriate objectid field from service metadata
                featuresArray[i].properties[metadata.objectIdField] =
                  featuresArray.length > 1
                    ? response[i].objectId
                    : response.objectId;
                // we also need to update the geojson id for createLayers() to function
                featuresArray[i].id =
                  featuresArray.length > 1
                    ? response[i].objectId
                    : response.objectId;
              }
              this._addFeatures(featuresArray);
            }

            if (callback) {
              callback.call(context, error, response);
            }
          }, this)
        );
      }, this)
    );
  },

  updateFeature: function (feature, callback, context) {
    this.updateFeatures(feature, callback, context);
  },

  updateFeatures: function (features, callback, context) {
    // GeoJSON featureCollection or simple feature
    var featuresArray = features.features ? features.features : [features];
    this.service.updateFeatures(
      features,
      function (error, response) {
        if (!error) {
          for (var i = featuresArray.length - 1; i >= 0; i--) {
            this.removeLayers([featuresArray[i].id], true);
          }
          this._addFeatures(featuresArray);
        }

        if (callback) {
          callback.call(context, error, response);
        }
      },
      this
    );
  },

  deleteFeature: function (id, callback, context) {
    this.deleteFeatures(id, callback, context);
  },

  deleteFeatures: function (ids, callback, context) {
    return this.service.deleteFeatures(
      ids,
      function (error, response) {
        var responseArray = response.length ? response : [response];
        if (!error && responseArray.length > 0) {
          for (var i = responseArray.length - 1; i >= 0; i--) {
            this.removeLayers([responseArray[i].objectId], true);
          }
        }
        if (callback) {
          callback.call(context, error, response);
        }
      },
      this
    );
  }
});


/***/ }),

/***/ "./node_modules/esri-leaflet/src/Layers/ImageMapLayer.js":
/*!***************************************************************!*\
  !*** ./node_modules/esri-leaflet/src/Layers/ImageMapLayer.js ***!
  \***************************************************************/
/*! exports provided: ImageMapLayer, imageMapLayer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageMapLayer", function() { return ImageMapLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageMapLayer", function() { return imageMapLayer; });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RasterLayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RasterLayer */ "./node_modules/esri-leaflet/src/Layers/RasterLayer.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./node_modules/esri-leaflet/src/Util.js");
/* harmony import */ var _Services_ImageService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/ImageService */ "./node_modules/esri-leaflet/src/Services/ImageService.js");





var ImageMapLayer = _RasterLayer__WEBPACK_IMPORTED_MODULE_1__["RasterLayer"].extend({

  options: {
    updateInterval: 150,
    format: 'jpgpng',
    transparent: true,
    f: 'image'
  },

  query: function () {
    return this.service.query();
  },

  identify: function () {
    return this.service.identify();
  },

  initialize: function (options) {
    options = Object(_Util__WEBPACK_IMPORTED_MODULE_2__["getUrlParams"])(options);
    this.service = Object(_Services_ImageService__WEBPACK_IMPORTED_MODULE_3__["default"])(options);
    this.service.addEventParent(this);

    leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].setOptions(this, options);
  },

  setPixelType: function (pixelType) {
    this.options.pixelType = pixelType;
    this._update();
    return this;
  },

  getPixelType: function () {
    return this.options.pixelType;
  },

  setBandIds: function (bandIds) {
    if (leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].isArray(bandIds)) {
      this.options.bandIds = bandIds.join(',');
    } else {
      this.options.bandIds = bandIds.toString();
    }
    this._update();
    return this;
  },

  getBandIds: function () {
    return this.options.bandIds;
  },

  setNoData: function (noData, noDataInterpretation) {
    if (leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].isArray(noData)) {
      this.options.noData = noData.join(',');
    } else {
      this.options.noData = noData.toString();
    }
    if (noDataInterpretation) {
      this.options.noDataInterpretation = noDataInterpretation;
    }
    this._update();
    return this;
  },

  getNoData: function () {
    return this.options.noData;
  },

  getNoDataInterpretation: function () {
    return this.options.noDataInterpretation;
  },

  setRenderingRule: function (renderingRule) {
    this.options.renderingRule = renderingRule;
    this._update();
  },

  getRenderingRule: function () {
    return this.options.renderingRule;
  },

  setMosaicRule: function (mosaicRule) {
    this.options.mosaicRule = mosaicRule;
    this._update();
  },

  getMosaicRule: function () {
    return this.options.mosaicRule;
  },

  _getPopupData: function (e) {
    var callback = leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].bind(function (error, results, response) {
      if (error) { return; } // we really can't do anything here but authenticate or requesterror will fire
      setTimeout(leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].bind(function () {
        this._renderPopup(e.latlng, error, results, response);
      }, this), 300);
    }, this);

    var identifyRequest = this.identify().at(e.latlng);

    // set mosaic rule for identify task if it is set for layer
    if (this.options.mosaicRule) {
      identifyRequest.setMosaicRule(this.options.mosaicRule);
      // @TODO: force return catalog items too?
    }

    // @TODO: set rendering rule? Not sure,
    // sometimes you want raw pixel values
    // if (this.options.renderingRule) {
    //   identifyRequest.setRenderingRule(this.options.renderingRule);
    // }

    identifyRequest.run(callback);

    // set the flags to show the popup
    this._shouldRenderPopup = true;
    this._lastClick = e.latlng;
  },

  _buildExportParams: function () {
    var sr = parseInt(this._map.options.crs.code.split(':')[1], 10);

    var params = {
      bbox: this._calculateBbox(),
      size: this._calculateImageSize(),
      format: this.options.format,
      transparent: this.options.transparent,
      bboxSR: sr,
      imageSR: sr
    };

    if (this.options.from && this.options.to) {
      params.time = this.options.from.valueOf() + ',' + this.options.to.valueOf();
    }

    if (this.options.pixelType) {
      params.pixelType = this.options.pixelType;
    }

    if (this.options.interpolation) {
      params.interpolation = this.options.interpolation;
    }

    if (this.options.compressionQuality) {
      params.compressionQuality = this.options.compressionQuality;
    }

    if (this.options.bandIds) {
      params.bandIds = this.options.bandIds;
    }

    // 0 is falsy *and* a valid input parameter
    if (this.options.noData === 0 || this.options.noData) {
      params.noData = this.options.noData;
    }

    if (this.options.noDataInterpretation) {
      params.noDataInterpretation = this.options.noDataInterpretation;
    }

    if (this.service.options.token) {
      params.token = this.service.options.token;
    }

    if (this.options.renderingRule) {
      params.renderingRule = JSON.stringify(this.options.renderingRule);
    }

    if (this.options.mosaicRule) {
      params.mosaicRule = JSON.stringify(this.options.mosaicRule);
    }

    return params;
  },

  _requestExport: function (params, bounds) {
    if (this.options.f === 'json') {
      this.service.request('exportImage', params, function (error, response) {
        if (error) { return; } // we really can't do anything here but authenticate or requesterror will fire
        if (this.options.token) {
          response.href += ('?token=' + this.options.token);
        }
        if (this.options.proxy) {
          response.href = this.options.proxy + '?' + response.href;
        }
        this._renderImage(response.href, bounds);
      }, this);
    } else {
      params.f = 'image';
      var fullUrl = this.options.url + 'exportImage' + leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].getParamString(params);
      if (this.options.proxy) {
        fullUrl = this.options.proxy + '?' + fullUrl;
      }
      this._renderImage(fullUrl, bounds);
    }
  }
});

function imageMapLayer (url, options) {
  return new ImageMapLayer(url, options);
}

/* harmony default export */ __webpack_exports__["default"] = (imageMapLayer);


/***/ }),

/***/ "./node_modules/esri-leaflet/src/Layers/RasterLayer.js":
/*!*************************************************************!*\
  !*** ./node_modules/esri-leaflet/src/Layers/RasterLayer.js ***!
  \*************************************************************/
/*! exports provided: RasterLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RasterLayer", function() { return RasterLayer; });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Support */ "./node_modules/esri-leaflet/src/Support.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./node_modules/esri-leaflet/src/Util.js");




var Overlay = leaflet__WEBPACK_IMPORTED_MODULE_0__["ImageOverlay"].extend({
  onAdd: function (map) {
    this._topLeft = map.getPixelBounds().min;
    leaflet__WEBPACK_IMPORTED_MODULE_0__["ImageOverlay"].prototype.onAdd.call(this, map);
  },
  _reset: function () {
    if (this._map.options.crs === leaflet__WEBPACK_IMPORTED_MODULE_0__["CRS"].EPSG3857) {
      leaflet__WEBPACK_IMPORTED_MODULE_0__["ImageOverlay"].prototype._reset.call(this);
    } else {
      leaflet__WEBPACK_IMPORTED_MODULE_0__["DomUtil"].setPosition(this._image, this._topLeft.subtract(this._map.getPixelOrigin()));
    }
  }
});

var RasterLayer = leaflet__WEBPACK_IMPORTED_MODULE_0__["Layer"].extend({
  options: {
    opacity: 1,
    position: 'front',
    f: 'image',
    useCors: _Support__WEBPACK_IMPORTED_MODULE_1__["cors"],
    attribution: null,
    interactive: false,
    alt: ''
  },

  onAdd: function (map) {
    // include 'Powered by Esri' in map attribution
    Object(_Util__WEBPACK_IMPORTED_MODULE_2__["setEsriAttribution"])(map);

    if (this.options.zIndex) {
      this.options.position = null;
    }

    this._update = leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].throttle(this._update, this.options.updateInterval, this);

    map.on('moveend', this._update, this);

    // if we had an image loaded and it matches the
    // current bounds show the image otherwise remove it
    if (this._currentImage && this._currentImage._bounds.equals(this._map.getBounds())) {
      map.addLayer(this._currentImage);
    } else if (this._currentImage) {
      this._map.removeLayer(this._currentImage);
      this._currentImage = null;
    }

    this._update();

    if (this._popup) {
      this._map.on('click', this._getPopupData, this);
      this._map.on('dblclick', this._resetPopupState, this);
    }

    // add copyright text listed in service metadata
    this.metadata(function (err, metadata) {
      if (!err && !this.options.attribution && map.attributionControl && metadata.copyrightText) {
        this.options.attribution = metadata.copyrightText;
        map.attributionControl.addAttribution(this.getAttribution());
      }
    }, this);
  },

  onRemove: function (map) {
    Object(_Util__WEBPACK_IMPORTED_MODULE_2__["removeEsriAttribution"])(map);

    if (this._currentImage) {
      this._map.removeLayer(this._currentImage);
    }

    if (this._popup) {
      this._map.off('click', this._getPopupData, this);
      this._map.off('dblclick', this._resetPopupState, this);
    }

    this._map.off('moveend', this._update, this);
  },

  bindPopup: function (fn, popupOptions) {
    this._shouldRenderPopup = false;
    this._lastClick = false;
    this._popup = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["popup"])(popupOptions);
    this._popupFunction = fn;
    if (this._map) {
      this._map.on('click', this._getPopupData, this);
      this._map.on('dblclick', this._resetPopupState, this);
    }
    return this;
  },

  unbindPopup: function () {
    if (this._map) {
      this._map.closePopup(this._popup);
      this._map.off('click', this._getPopupData, this);
      this._map.off('dblclick', this._resetPopupState, this);
    }
    this._popup = false;
    return this;
  },

  bringToFront: function () {
    this.options.position = 'front';
    if (this._currentImage) {
      this._currentImage.bringToFront();
      this._setAutoZIndex(Math.max);
    }
    return this;
  },

  bringToBack: function () {
    this.options.position = 'back';
    if (this._currentImage) {
      this._currentImage.bringToBack();
      this._setAutoZIndex(Math.min);
    }
    return this;
  },

  setZIndex: function (value) {
    this.options.zIndex = value;
    if (this._currentImage) {
      this._currentImage.setZIndex(value);
    }
    return this;
  },

  _setAutoZIndex: function (compare) {
    // go through all other layers of the same pane, set zIndex to max + 1 (front) or min - 1 (back)
    if (!this._currentImage) {
      return;
    }
    var layers = this._currentImage.getPane().children;
    var edgeZIndex = -compare(-Infinity, Infinity); // -Infinity for max, Infinity for min
    for (var i = 0, len = layers.length, zIndex; i < len; i++) {
      zIndex = layers[i].style.zIndex;
      if (layers[i] !== this._currentImage._image && zIndex) {
        edgeZIndex = compare(edgeZIndex, +zIndex);
      }
    }

    if (isFinite(edgeZIndex)) {
      this.options.zIndex = edgeZIndex + compare(-1, 1);
      this.setZIndex(this.options.zIndex);
    }
  },

  getAttribution: function () {
    return this.options.attribution;
  },

  getOpacity: function () {
    return this.options.opacity;
  },

  setOpacity: function (opacity) {
    this.options.opacity = opacity;
    if (this._currentImage) {
      this._currentImage.setOpacity(opacity);
    }
    return this;
  },

  getTimeRange: function () {
    return [this.options.from, this.options.to];
  },

  setTimeRange: function (from, to) {
    this.options.from = from;
    this.options.to = to;
    this._update();
    return this;
  },

  metadata: function (callback, context) {
    this.service.metadata(callback, context);
    return this;
  },

  authenticate: function (token) {
    this.service.authenticate(token);
    return this;
  },

  redraw: function () {
    this._update();
  },

  _renderImage: function (url, bounds, contentType) {
    if (this._map) {
      // if no output directory has been specified for a service, MIME data will be returned
      if (contentType) {
        url = 'data:' + contentType + ';base64,' + url;
      }

      // if server returns an inappropriate response, abort.
      if (!url) return;

      // create a new image overlay and add it to the map
      // to start loading the image
      // opacity is 0 while the image is loading
      var image = new Overlay(url, bounds, {
        opacity: 0,
        crossOrigin: this.options.withCredentials ? 'use-credentials' : this.options.useCors,
        alt: this.options.alt,
        pane: this.options.pane || this.getPane(),
        interactive: this.options.interactive
      }).addTo(this._map);

      var onOverlayError = function () {
        this._map.removeLayer(image);
        this.fire('error');
        image.off('load', onOverlayLoad, this);
      };

      var onOverlayLoad = function (e) {
        image.off('error', onOverlayLoad, this);
        if (this._map) {
          var newImage = e.target;
          var oldImage = this._currentImage;

          // if the bounds of this image matches the bounds that
          // _renderImage was called with and we have a map with the same bounds
          // hide the old image if there is one and set the opacity
          // of the new image otherwise remove the new image
          if (newImage._bounds.equals(bounds) && newImage._bounds.equals(this._map.getBounds())) {
            this._currentImage = newImage;

            if (this.options.position === 'front') {
              this.bringToFront();
            } else if (this.options.position === 'back') {
              this.bringToBack();
            }

            if (this.options.zIndex) {
              this.setZIndex(this.options.zIndex);
            }

            if (this._map && this._currentImage._map) {
              this._currentImage.setOpacity(this.options.opacity);
            } else {
              this._currentImage._map.removeLayer(this._currentImage);
            }

            if (oldImage && this._map) {
              this._map.removeLayer(oldImage);
            }

            if (oldImage && oldImage._map) {
              oldImage._map.removeLayer(oldImage);
            }
          } else {
            this._map.removeLayer(newImage);
          }
        }

        this.fire('load', {
          bounds: bounds
        });
      };

      // If loading the image fails
      image.once('error', onOverlayError, this);

      // once the image loads
      image.once('load', onOverlayLoad, this);
    }
  },

  _update: function () {
    if (!this._map) {
      return;
    }

    var zoom = this._map.getZoom();
    var bounds = this._map.getBounds();

    if (this._animatingZoom) {
      return;
    }

    if (this._map._panTransition && this._map._panTransition._inProgress) {
      return;
    }

    if (zoom > this.options.maxZoom || zoom < this.options.minZoom) {
      if (this._currentImage) {
        this._currentImage._map.removeLayer(this._currentImage);
        this._currentImage = null;
      }
      return;
    }

    var params = this._buildExportParams();
    leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].extend(params, this.options.requestParams);

    if (params) {
      this._requestExport(params, bounds);

      this.fire('loading', {
        bounds: bounds
      });
    } else if (this._currentImage) {
      this._currentImage._map.removeLayer(this._currentImage);
      this._currentImage = null;
    }
  },

  _renderPopup: function (latlng, error, results, response) {
    latlng = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["latLng"])(latlng);
    if (this._shouldRenderPopup && this._lastClick.equals(latlng)) {
      // add the popup to the map where the mouse was clicked at
      var content = this._popupFunction(error, results, response);
      if (content) {
        this._popup.setLatLng(latlng).setContent(content).openOn(this._map);
      }
    }
  },

  _resetPopupState: function (e) {
    this._shouldRenderPopup = false;
    this._lastClick = e.latlng;
  },

  _calculateBbox: function () {
    var pixelBounds = this._map.getPixelBounds();

    var sw = this._map.unproject(pixelBounds.getBottomLeft());
    var ne = this._map.unproject(pixelBounds.getTopRight());

    var neProjected = this._map.options.crs.project(ne);
    var swProjected = this._map.options.crs.project(sw);

    // this ensures ne/sw are switched in polar maps where north/top bottom/south is inverted
    var boundsProjected = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["bounds"])(neProjected, swProjected);

    return [boundsProjected.getBottomLeft().x, boundsProjected.getBottomLeft().y, boundsProjected.getTopRight().x, boundsProjected.getTopRight().y].join(',');
  },

  _calculateImageSize: function () {
    // ensure that we don't ask ArcGIS Server for a taller image than we have actual map displaying within the div
    var bounds = this._map.getPixelBounds();
    var size = this._map.getSize();

    var sw = this._map.unproject(bounds.getBottomLeft());
    var ne = this._map.unproject(bounds.getTopRight());

    var top = this._map.latLngToLayerPoint(ne).y;
    var bottom = this._map.latLngToLayerPoint(sw).y;

    if (top > 0 || bottom < size.y) {
      size.y = bottom - top;
    }

    return size.x + ',' + size.y;
  }
});


/***/ }),

/***/ "./node_modules/esri-leaflet/src/Layers/TiledMapLayer.js":
/*!***************************************************************!*\
  !*** ./node_modules/esri-leaflet/src/Layers/TiledMapLayer.js ***!
  \***************************************************************/
/*! exports provided: TiledMapLayer, tiledMapLayer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiledMapLayer", function() { return TiledMapLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tiledMapLayer", function() { return tiledMapLayer; });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Util */ "./node_modules/esri-leaflet/src/Util.js");
/* harmony import */ var _Services_MapService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/MapService */ "./node_modules/esri-leaflet/src/Services/MapService.js");




var TiledMapLayer = leaflet__WEBPACK_IMPORTED_MODULE_0__["TileLayer"].extend({
  options: {
    zoomOffsetAllowance: 0.1,
    errorTileUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEABAMAAACuXLVVAAAAA1BMVEUzNDVszlHHAAAAAXRSTlMAQObYZgAAAAlwSFlzAAAAAAAAAAAB6mUWpAAAADZJREFUeJztwQEBAAAAgiD/r25IQAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7waBAAABw08RwAAAAABJRU5ErkJggg=='
  },

  statics: {
    MercatorZoomLevels: {
      '0': 156543.03392799999,
      '1': 78271.516963999893,
      '2': 39135.758482000099,
      '3': 19567.879240999901,
      '4': 9783.9396204999593,
      '5': 4891.9698102499797,
      '6': 2445.9849051249898,
      '7': 1222.9924525624899,
      '8': 611.49622628138002,
      '9': 305.74811314055802,
      '10': 152.874056570411,
      '11': 76.437028285073197,
      '12': 38.218514142536598,
      '13': 19.109257071268299,
      '14': 9.5546285356341496,
      '15': 4.7773142679493699,
      '16': 2.38865713397468,
      '17': 1.1943285668550501,
      '18': 0.59716428355981699,
      '19': 0.29858214164761698,
      '20': 0.14929107082381,
      '21': 0.07464553541191,
      '22': 0.0373227677059525,
      '23': 0.0186613838529763
    }
  },

  initialize: function (options) {
    options = leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].setOptions(this, options);

    // set the urls
    options = Object(_Util__WEBPACK_IMPORTED_MODULE_1__["getUrlParams"])(options);
    this.tileUrl = (options.proxy ? options.proxy + '?' : '') + options.url + 'tile/{z}/{y}/{x}' + (options.requestParams && Object.keys(options.requestParams).length > 0 ? leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].getParamString(options.requestParams) : '');
    // Remove subdomain in url
    // https://github.com/Esri/esri-leaflet/issues/991
    if (options.url.indexOf('{s}') !== -1 && options.subdomains) {
      options.url = options.url.replace('{s}', options.subdomains[0]);
    }
    this.service = Object(_Services_MapService__WEBPACK_IMPORTED_MODULE_2__["default"])(options);
    this.service.addEventParent(this);

    var arcgisonline = new RegExp(/tiles.arcgis(online)?\.com/g);
    if (arcgisonline.test(options.url)) {
      this.tileUrl = this.tileUrl.replace('://tiles', '://tiles{s}');
      options.subdomains = ['1', '2', '3', '4'];
    }

    if (this.options.token) {
      this.tileUrl += ('?token=' + this.options.token);
    }

    // init layer by calling TileLayers initialize method
    leaflet__WEBPACK_IMPORTED_MODULE_0__["TileLayer"].prototype.initialize.call(this, this.tileUrl, options);
  },

  getTileUrl: function (tilePoint) {
    var zoom = this._getZoomForUrl();

    return leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].template(this.tileUrl, leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].extend({
      s: this._getSubdomain(tilePoint),
      x: tilePoint.x,
      y: tilePoint.y,
      // try lod map first, then just default to zoom level
      z: (this._lodMap && this._lodMap[zoom]) ? this._lodMap[zoom] : zoom
    }, this.options));
  },

  createTile: function (coords, done) {
    var tile = document.createElement('img');

    leaflet__WEBPACK_IMPORTED_MODULE_0__["DomEvent"].on(tile, 'load', leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].bind(this._tileOnLoad, this, done, tile));
    leaflet__WEBPACK_IMPORTED_MODULE_0__["DomEvent"].on(tile, 'error', leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].bind(this._tileOnError, this, done, tile));

    if (this.options.crossOrigin) {
      tile.crossOrigin = '';
    }

    /*
     Alt tag is set to empty string to keep screen readers from reading URL and for compliance reasons
     http://www.w3.org/TR/WCAG20-TECHS/H67
    */
    tile.alt = '';

    // if there is no lod map or an lod map with a proper zoom load the tile
    // otherwise wait for the lod map to become available
    if (!this._lodMap || (this._lodMap && this._lodMap[this._getZoomForUrl()])) {
      tile.src = this.getTileUrl(coords);
    } else {
      this.once('lodmap', function () {
        tile.src = this.getTileUrl(coords);
      }, this);
    }

    return tile;
  },

  onAdd: function (map) {
    // include 'Powered by Esri' in map attribution
    Object(_Util__WEBPACK_IMPORTED_MODULE_1__["setEsriAttribution"])(map);

    if (!this._lodMap) {
      this.metadata(function (error, metadata) {
        if (!error && metadata.spatialReference) {
          var sr = metadata.spatialReference.latestWkid || metadata.spatialReference.wkid;
          // display the copyright text from the service using leaflet's attribution control
          if (!this.options.attribution && map.attributionControl && metadata.copyrightText) {
            this.options.attribution = metadata.copyrightText;
            map.attributionControl.addAttribution(this.getAttribution());
          }

          // if the service tiles were published in web mercator using conventional LODs but missing levels, we can try and remap them
          if (map.options.crs === leaflet__WEBPACK_IMPORTED_MODULE_0__["CRS"].EPSG3857 && (sr === 102100 || sr === 3857)) {
            this._lodMap = {};
            // create the zoom level data
            var arcgisLODs = metadata.tileInfo.lods;
            var correctResolutions = TiledMapLayer.MercatorZoomLevels;

            for (var i = 0; i < arcgisLODs.length; i++) {
              var arcgisLOD = arcgisLODs[i];
              for (var ci in correctResolutions) {
                var correctRes = correctResolutions[ci];

                if (this._withinPercentage(arcgisLOD.resolution, correctRes, this.options.zoomOffsetAllowance)) {
                  this._lodMap[ci] = arcgisLOD.level;
                  break;
                }
              }
            }

            this.fire('lodmap');
          } else if (map.options.crs && map.options.crs.code && (map.options.crs.code.indexOf(sr) > -1)) {
            // if the projection is WGS84, or the developer is using Proj4 to define a custom CRS, no action is required
          } else {
            // if the service was cached in a custom projection and an appropriate LOD hasn't been defined in the map, guide the developer to our Proj4 sample
            Object(_Util__WEBPACK_IMPORTED_MODULE_1__["warn"])('L.esri.TiledMapLayer is using a non-mercator spatial reference. Support may be available through Proj4Leaflet http://esri.github.io/esri-leaflet/examples/non-mercator-projection.html');
          }
        }
      }, this);
    }

    leaflet__WEBPACK_IMPORTED_MODULE_0__["TileLayer"].prototype.onAdd.call(this, map);
  },

  onRemove: function (map) {
    Object(_Util__WEBPACK_IMPORTED_MODULE_1__["removeEsriAttribution"])(map);

    leaflet__WEBPACK_IMPORTED_MODULE_0__["TileLayer"].prototype.onRemove.call(this, map);
  },

  metadata: function (callback, context) {
    this.service.metadata(callback, context);
    return this;
  },

  identify: function () {
    return this.service.identify();
  },

  find: function () {
    return this.service.find();
  },

  query: function () {
    return this.service.query();
  },

  authenticate: function (token) {
    var tokenQs = '?token=' + token;
    this.tileUrl = (this.options.token) ? this.tileUrl.replace(/\?token=(.+)/g, tokenQs) : this.tileUrl + tokenQs;
    this.options.token = token;
    this.service.authenticate(token);
    return this;
  },

  _withinPercentage: function (a, b, percentage) {
    var diff = Math.abs((a / b) - 1);
    return diff < percentage;
  }
});

function tiledMapLayer (url, options) {
  return new TiledMapLayer(url, options);
}

/* harmony default export */ __webpack_exports__["default"] = (tiledMapLayer);


/***/ }),

/***/ "./node_modules/esri-leaflet/src/Options.js":
/*!**************************************************!*\
  !*** ./node_modules/esri-leaflet/src/Options.js ***!
  \**************************************************/
/*! exports provided: options, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
var options = {
  attributionWidthOffset: 55
};

/* harmony default export */ __webpack_exports__["default"] = (options);


/***/ }),

/***/ "./node_modules/esri-leaflet/src/Request.js":
/*!**************************************************!*\
  !*** ./node_modules/esri-leaflet/src/Request.js ***!
  \**************************************************/
/*! exports provided: request, jsonp, warn, get, post, Request, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "request", function() { return request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonp", function() { return jsonp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return warn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post", function() { return xmlHttpPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Support */ "./node_modules/esri-leaflet/src/Support.js");



var callbacks = 0;

function serialize (params) {
  var data = '';

  params.f = params.f || 'json';

  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      var param = params[key];
      var type = Object.prototype.toString.call(param);
      var value;

      if (data.length) {
        data += '&';
      }

      if (type === '[object Array]') {
        value = (Object.prototype.toString.call(param[0]) === '[object Object]') ? JSON.stringify(param) : param.join(',');
      } else if (type === '[object Object]') {
        value = JSON.stringify(param);
      } else if (type === '[object Date]') {
        value = param.valueOf();
      } else {
        value = param;
      }

      data += encodeURIComponent(key) + '=' + encodeURIComponent(value);
    }
  }

  return data;
}

function createRequest (callback, context) {
  var httpRequest = new window.XMLHttpRequest();

  httpRequest.onerror = function (e) {
    httpRequest.onreadystatechange = leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].falseFn;

    callback.call(context, {
      error: {
        code: 500,
        message: 'XMLHttpRequest error'
      }
    }, null);
  };

  httpRequest.onreadystatechange = function () {
    var response;
    var error;

    if (httpRequest.readyState === 4) {
      try {
        response = JSON.parse(httpRequest.responseText);
      } catch (e) {
        response = null;
        error = {
          code: 500,
          message: 'Could not parse response as JSON. This could also be caused by a CORS or XMLHttpRequest error.'
        };
      }

      if (!error && response.error) {
        error = response.error;
        response = null;
      }

      httpRequest.onerror = leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].falseFn;

      callback.call(context, error, response);
    }
  };

  httpRequest.ontimeout = function () {
    this.onerror();
  };

  return httpRequest;
}

function xmlHttpPost (url, params, callback, context) {
  var httpRequest = createRequest(callback, context);
  httpRequest.open('POST', url);

  if (typeof context !== 'undefined' && context !== null) {
    if (typeof context.options !== 'undefined') {
      httpRequest.timeout = context.options.timeout;
    }
  }
  httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  httpRequest.send(serialize(params));

  return httpRequest;
}

function xmlHttpGet (url, params, callback, context) {
  var httpRequest = createRequest(callback, context);
  httpRequest.open('GET', url + '?' + serialize(params), true);

  if (typeof context !== 'undefined' && context !== null) {
    if (typeof context.options !== 'undefined') {
      httpRequest.timeout = context.options.timeout;
      if (context.options.withCredentials) {
        httpRequest.withCredentials = true;
      }
    }
  }
  httpRequest.send(null);

  return httpRequest;
}

// AJAX handlers for CORS (modern browsers) or JSONP (older browsers)
function request (url, params, callback, context) {
  var paramString = serialize(params);
  var httpRequest = createRequest(callback, context);
  var requestLength = (url + '?' + paramString).length;

  // ie10/11 require the request be opened before a timeout is applied
  if (requestLength <= 2000 && _Support__WEBPACK_IMPORTED_MODULE_1__["Support"].cors) {
    httpRequest.open('GET', url + '?' + paramString);
  } else if (requestLength > 2000 && _Support__WEBPACK_IMPORTED_MODULE_1__["Support"].cors) {
    httpRequest.open('POST', url);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  }

  if (typeof context !== 'undefined' && context !== null) {
    if (typeof context.options !== 'undefined') {
      httpRequest.timeout = context.options.timeout;
      if (context.options.withCredentials) {
        httpRequest.withCredentials = true;
      }
    }
  }

  // request is less than 2000 characters and the browser supports CORS, make GET request with XMLHttpRequest
  if (requestLength <= 2000 && _Support__WEBPACK_IMPORTED_MODULE_1__["Support"].cors) {
    httpRequest.send(null);

  // request is more than 2000 characters and the browser supports CORS, make POST request with XMLHttpRequest
  } else if (requestLength > 2000 && _Support__WEBPACK_IMPORTED_MODULE_1__["Support"].cors) {
    httpRequest.send(paramString);

  // request is less  than 2000 characters and the browser does not support CORS, make a JSONP request
  } else if (requestLength <= 2000 && !_Support__WEBPACK_IMPORTED_MODULE_1__["Support"].cors) {
    return jsonp(url, params, callback, context);

  // request is longer then 2000 characters and the browser does not support CORS, log a warning
  } else {
    warn('a request to ' + url + ' was longer then 2000 characters and this browser cannot make a cross-domain post request. Please use a proxy http://esri.github.io/esri-leaflet/api-reference/request.html');
    return;
  }

  return httpRequest;
}

function jsonp (url, params, callback, context) {
  window._EsriLeafletCallbacks = window._EsriLeafletCallbacks || {};
  var callbackId = 'c' + callbacks;
  params.callback = 'window._EsriLeafletCallbacks.' + callbackId;

  window._EsriLeafletCallbacks[callbackId] = function (response) {
    if (window._EsriLeafletCallbacks[callbackId] !== true) {
      var error;
      var responseType = Object.prototype.toString.call(response);

      if (!(responseType === '[object Object]' || responseType === '[object Array]')) {
        error = {
          error: {
            code: 500,
            message: 'Expected array or object as JSONP response'
          }
        };
        response = null;
      }

      if (!error && response.error) {
        error = response;
        response = null;
      }

      callback.call(context, error, response);
      window._EsriLeafletCallbacks[callbackId] = true;
    }
  };

  var script = leaflet__WEBPACK_IMPORTED_MODULE_0__["DomUtil"].create('script', null, document.body);
  script.type = 'text/javascript';
  script.src = url + '?' + serialize(params);
  script.id = callbackId;
  script.onerror = function (error) {
    if (error && window._EsriLeafletCallbacks[callbackId] !== true) {
      // Can't get true error code: it can be 404, or 401, or 500
      var err = {
        error: {
          code: 500,
          message: 'An unknown error occurred'
        }
      };

      callback.call(context, err);
      window._EsriLeafletCallbacks[callbackId] = true;
    }
  };
  leaflet__WEBPACK_IMPORTED_MODULE_0__["DomUtil"].addClass(script, 'esri-leaflet-jsonp');

  callbacks++;

  return {
    id: callbackId,
    url: script.src,
    abort: function () {
      window._EsriLeafletCallbacks._callback[callbackId]({
        code: 0,
        message: 'Request aborted.'
      });
    }
  };
}

var get = ((_Support__WEBPACK_IMPORTED_MODULE_1__["Support"].cors) ? xmlHttpGet : jsonp);
get.CORS = xmlHttpGet;
get.JSONP = jsonp;

function warn () {
  if (console && console.warn) {
    console.warn.apply(console, arguments);
  }
}

// choose the correct AJAX handler depending on CORS support


// always use XMLHttpRequest for posts


// export the Request object to call the different handlers for debugging
var Request = {
  request: request,
  get: get,
  post: xmlHttpPost
};

/* harmony default export */ __webpack_exports__["default"] = (Request);


/***/ }),

/***/ "./node_modules/esri-leaflet/src/Services/FeatureLayerService.js":
/*!***********************************************************************!*\
  !*** ./node_modules/esri-leaflet/src/Services/FeatureLayerService.js ***!
  \***********************************************************************/
/*! exports provided: FeatureLayerService, featureLayerService, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureLayerService", function() { return FeatureLayerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featureLayerService", function() { return featureLayerService; });
/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Service */ "./node_modules/esri-leaflet/src/Services/Service.js");
/* harmony import */ var _Tasks_Query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Tasks/Query */ "./node_modules/esri-leaflet/src/Tasks/Query.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./node_modules/esri-leaflet/src/Util.js");




var FeatureLayerService = _Service__WEBPACK_IMPORTED_MODULE_0__["Service"].extend({

  options: {
    idAttribute: 'OBJECTID'
  },

  query: function () {
    return Object(_Tasks_Query__WEBPACK_IMPORTED_MODULE_1__["default"])(this);
  },

  addFeature: function (feature, callback, context) {
    this.addFeatures(feature, callback, context);
  },

  addFeatures: function (features, callback, context) {
    var featuresArray = features.features ? features.features : [features];
    for (var i = featuresArray.length - 1; i >= 0; i--) {
      delete featuresArray[i].id;
    }
    features = Object(_Util__WEBPACK_IMPORTED_MODULE_2__["geojsonToArcGIS"])(features);
    features = featuresArray.length > 1 ? features : [features];
    return this.post('addFeatures', {
      features: features
    }, function (error, response) {
      // For compatibility reason with former addFeature function,
      // we return the object in the array and not the array itself
      var result = (response && response.addResults) ? response.addResults.length > 1 ? response.addResults : response.addResults[0] : undefined;
      if (callback) {
        callback.call(context, error || response.addResults[0].error, result);
      }
    }, context);
  },

  updateFeature: function (feature, callback, context) {
    this.updateFeatures(feature, callback, context);
  },

  updateFeatures: function (features, callback, context) {
    var featuresArray = features.features ? features.features : [features];
    features = Object(_Util__WEBPACK_IMPORTED_MODULE_2__["geojsonToArcGIS"])(features, this.options.idAttribute);
    features = featuresArray.length > 1 ? features : [features];

    return this.post('updateFeatures', {
      features: features
    }, function (error, response) {
      // For compatibility reason with former updateFeature function,
      // we return the object in the array and not the array itself
      var result = (response && response.updateResults) ? response.updateResults.length > 1 ? response.updateResults : response.updateResults[0] : undefined;
      if (callback) {
        callback.call(context, error || response.updateResults[0].error, result);
      }
    }, context);
  },

  deleteFeature: function (id, callback, context) {
    this.deleteFeatures(id, callback, context);
  },

  deleteFeatures: function (ids, callback, context) {
    return this.post('deleteFeatures', {
      objectIds: ids
    }, function (error, response) {
      // For compatibility reason with former deleteFeature function,
      // we return the object in the array and not the array itself
      var result = (response && response.deleteResults) ? response.deleteResults.length > 1 ? response.deleteResults : response.deleteResults[0] : undefined;
      if (callback) {
        callback.call(context, error || response.deleteResults[0].error, result);
      }
    }, context);
  }
});

function featureLayerService (options) {
  return new FeatureLayerService(options);
}

/* harmony default export */ __webpack_exports__["default"] = (featureLayerService);


/***/ }),

/***/ "./node_modules/esri-leaflet/src/Services/ImageService.js":
/*!****************************************************************!*\
  !*** ./node_modules/esri-leaflet/src/Services/ImageService.js ***!
  \****************************************************************/
/*! exports provided: ImageService, imageService, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageService", function() { return imageService; });
/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Service */ "./node_modules/esri-leaflet/src/Services/Service.js");
/* harmony import */ var _Tasks_IdentifyImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Tasks/IdentifyImage */ "./node_modules/esri-leaflet/src/Tasks/IdentifyImage.js");
/* harmony import */ var _Tasks_Query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Tasks/Query */ "./node_modules/esri-leaflet/src/Tasks/Query.js");




var ImageService = _Service__WEBPACK_IMPORTED_MODULE_0__["Service"].extend({

  query: function () {
    return Object(_Tasks_Query__WEBPACK_IMPORTED_MODULE_2__["default"])(this);
  },

  identify: function () {
    return Object(_Tasks_IdentifyImage__WEBPACK_IMPORTED_MODULE_1__["default"])(this);
  }
});

function imageService (options) {
  return new ImageService(options);
}

/* harmony default export */ __webpack_exports__["default"] = (imageService);


/***/ }),

/***/ "./node_modules/esri-leaflet/src/Services/MapService.js":
/*!**************************************************************!*\
  !*** ./node_modules/esri-leaflet/src/Services/MapService.js ***!
  \**************************************************************/
/*! exports provided: MapService, mapService, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapService", function() { return mapService; });
/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Service */ "./node_modules/esri-leaflet/src/Services/Service.js");
/* harmony import */ var _Tasks_IdentifyFeatures__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Tasks/IdentifyFeatures */ "./node_modules/esri-leaflet/src/Tasks/IdentifyFeatures.js");
/* harmony import */ var _Tasks_Query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Tasks/Query */ "./node_modules/esri-leaflet/src/Tasks/Query.js");
/* harmony import */ var _Tasks_Find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Tasks/Find */ "./node_modules/esri-leaflet/src/Tasks/Find.js");





var MapService = _Service__WEBPACK_IMPORTED_MODULE_0__["Service"].extend({

  identify: function () {
    return Object(_Tasks_IdentifyFeatures__WEBPACK_IMPORTED_MODULE_1__["default"])(this);
  },

  find: function () {
    return Object(_Tasks_Find__WEBPACK_IMPORTED_MODULE_3__["default"])(this);
  },

  query: function () {
    return Object(_Tasks_Query__WEBPACK_IMPORTED_MODULE_2__["default"])(this);
  }

});

function mapService (options) {
  return new MapService(options);
}

/* harmony default export */ __webpack_exports__["default"] = (mapService);


/***/ }),

/***/ "./node_modules/esri-leaflet/src/Services/Service.js":
/*!***********************************************************!*\
  !*** ./node_modules/esri-leaflet/src/Services/Service.js ***!
  \***********************************************************/
/*! exports provided: Service, service, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "service", function() { return service; });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Support */ "./node_modules/esri-leaflet/src/Support.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./node_modules/esri-leaflet/src/Util.js");
/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Request */ "./node_modules/esri-leaflet/src/Request.js");





var Service = leaflet__WEBPACK_IMPORTED_MODULE_0__["Evented"].extend({

  options: {
    proxy: false,
    useCors: _Support__WEBPACK_IMPORTED_MODULE_1__["cors"],
    timeout: 0
  },

  initialize: function (options) {
    options = options || {};
    this._requestQueue = [];
    this._authenticating = false;
    leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].setOptions(this, options);
    this.options.url = Object(_Util__WEBPACK_IMPORTED_MODULE_2__["cleanUrl"])(this.options.url);
  },

  get: function (path, params, callback, context) {
    return this._request('get', path, params, callback, context);
  },

  post: function (path, params, callback, context) {
    return this._request('post', path, params, callback, context);
  },

  request: function (path, params, callback, context) {
    return this._request('request', path, params, callback, context);
  },

  metadata: function (callback, context) {
    return this._request('get', '', {}, callback, context);
  },

  authenticate: function (token) {
    this._authenticating = false;
    this.options.token = token;
    this._runQueue();
    return this;
  },

  getTimeout: function () {
    return this.options.timeout;
  },

  setTimeout: function (timeout) {
    this.options.timeout = timeout;
  },

  _request: function (method, path, params, callback, context) {
    this.fire('requeststart', {
      url: this.options.url + path,
      params: params,
      method: method
    }, true);

    var wrappedCallback = this._createServiceCallback(method, path, params, callback, context);

    if (this.options.token) {
      params.token = this.options.token;
    }
    if (this.options.requestParams) {
      leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].extend(params, this.options.requestParams);
    }
    if (this._authenticating) {
      this._requestQueue.push([method, path, params, callback, context]);
      return;
    } else {
      var url = (this.options.proxy) ? this.options.proxy + '?' + this.options.url + path : this.options.url + path;

      if ((method === 'get' || method === 'request') && !this.options.useCors) {
        return _Request__WEBPACK_IMPORTED_MODULE_3__["default"].get.JSONP(url, params, wrappedCallback, context);
      } else {
        return _Request__WEBPACK_IMPORTED_MODULE_3__["default"][method](url, params, wrappedCallback, context);
      }
    }
  },

  _createServiceCallback: function (method, path, params, callback, context) {
    return leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].bind(function (error, response) {
      if (error && (error.code === 499 || error.code === 498)) {
        this._authenticating = true;

        this._requestQueue.push([method, path, params, callback, context]);

        // fire an event for users to handle and re-authenticate
        this.fire('authenticationrequired', {
          authenticate: leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].bind(this.authenticate, this)
        }, true);

        // if the user has access to a callback they can handle the auth error
        error.authenticate = leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].bind(this.authenticate, this);
      }

      callback.call(context, error, response);

      if (error) {
        this.fire('requesterror', {
          url: this.options.url + path,
          params: params,
          message: error.message,
          code: error.code,
          method: method
        }, true);
      } else {
        this.fire('requestsuccess', {
          url: this.options.url + path,
          params: params,
          response: response,
          method: method
        }, true);
      }

      this.fire('requestend', {
        url: this.options.url + path,
        params: params,
        method: method
      }, true);
    }, this);
  },

  _runQueue: function () {
    for (var i = this._requestQueue.length - 1; i >= 0; i--) {
      var request = this._requestQueue[i];
      var method = request.shift();
      this[method].apply(this, request);
    }
    this._requestQueue = [];
  }
});

function service (options) {
  options = Object(_Util__WEBPACK_IMPORTED_MODULE_2__["getUrlParams"])(options);
  return new Service(options);
}

/* harmony default export */ __webpack_exports__["default"] = (service);


/***/ }),

/***/ "./node_modules/esri-leaflet/src/Support.js":
/*!**************************************************!*\
  !*** ./node_modules/esri-leaflet/src/Support.js ***!
  \**************************************************/
/*! exports provided: cors, pointerEvents, Support, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cors", function() { return cors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointerEvents", function() { return pointerEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Support", function() { return Support; });
var cors = ((window.XMLHttpRequest && 'withCredentials' in new window.XMLHttpRequest()));
var pointerEvents = document.documentElement.style.pointerEvents === '';

var Support = {
  cors: cors,
  pointerEvents: pointerEvents
};

/* harmony default export */ __webpack_exports__["default"] = (Support);


/***/ }),

/***/ "./node_modules/esri-leaflet/src/Tasks/Find.js":
/*!*****************************************************!*\
  !*** ./node_modules/esri-leaflet/src/Tasks/Find.js ***!
  \*****************************************************/
/*! exports provided: Find, find, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Find", function() { return Find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./node_modules/esri-leaflet/src/Tasks/Task.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Util */ "./node_modules/esri-leaflet/src/Util.js");



var Find = _Task__WEBPACK_IMPORTED_MODULE_0__["Task"].extend({
  setters: {
    // method name > param name
    'contains': 'contains',
    'text': 'searchText',
    'fields': 'searchFields', // denote an array or single string
    'spatialReference': 'sr',
    'sr': 'sr',
    'layers': 'layers',
    'returnGeometry': 'returnGeometry',
    'maxAllowableOffset': 'maxAllowableOffset',
    'precision': 'geometryPrecision',
    'dynamicLayers': 'dynamicLayers',
    'returnZ': 'returnZ',
    'returnM': 'returnM',
    'gdbVersion': 'gdbVersion',
    // skipped implementing this (for now) because the REST service implementation isnt consistent between operations
    // 'transform': 'datumTransformations',
    'token': 'token'
  },

  path: 'find',

  params: {
    sr: 4326,
    contains: true,
    returnGeometry: true,
    returnZ: true,
    returnM: false
  },

  layerDefs: function (id, where) {
    this.params.layerDefs = (this.params.layerDefs) ? this.params.layerDefs + ';' : '';
    this.params.layerDefs += ([id, where]).join(':');
    return this;
  },

  simplify: function (map, factor) {
    var mapWidth = Math.abs(map.getBounds().getWest() - map.getBounds().getEast());
    this.params.maxAllowableOffset = (mapWidth / map.getSize().y) * factor;
    return this;
  },

  run: function (callback, context) {
    return this.request(function (error, response) {
      callback.call(context, error, (response && Object(_Util__WEBPACK_IMPORTED_MODULE_1__["responseToFeatureCollection"])(response)), response);
    }, context);
  }
});

function find (options) {
  return new Find(options);
}

/* harmony default export */ __webpack_exports__["default"] = (find);


/***/ }),

/***/ "./node_modules/esri-leaflet/src/Tasks/Identify.js":
/*!*********************************************************!*\
  !*** ./node_modules/esri-leaflet/src/Tasks/Identify.js ***!
  \*********************************************************/
/*! exports provided: Identify, identify, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Identify", function() { return Identify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identify", function() { return identify; });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./node_modules/esri-leaflet/src/Tasks/Task.js");


var Identify = _Task__WEBPACK_IMPORTED_MODULE_0__["Task"].extend({
  path: 'identify',

  between: function (start, end) {
    this.params.time = [start.valueOf(), end.valueOf()];
    return this;
  }
});

function identify (options) {
  return new Identify(options);
}

/* harmony default export */ __webpack_exports__["default"] = (identify);


/***/ }),

/***/ "./node_modules/esri-leaflet/src/Tasks/IdentifyFeatures.js":
/*!*****************************************************************!*\
  !*** ./node_modules/esri-leaflet/src/Tasks/IdentifyFeatures.js ***!
  \*****************************************************************/
/*! exports provided: IdentifyFeatures, identifyFeatures, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentifyFeatures", function() { return IdentifyFeatures; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identifyFeatures", function() { return identifyFeatures; });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Identify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Identify */ "./node_modules/esri-leaflet/src/Tasks/Identify.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./node_modules/esri-leaflet/src/Util.js");




var IdentifyFeatures = _Identify__WEBPACK_IMPORTED_MODULE_1__["Identify"].extend({
  setters: {
    'layers': 'layers',
    'precision': 'geometryPrecision',
    'tolerance': 'tolerance',
    // skipped implementing this (for now) because the REST service implementation isnt consistent between operations.
    // 'transform': 'datumTransformations'
    'returnGeometry': 'returnGeometry'
  },

  params: {
    sr: 4326,
    layers: 'all',
    tolerance: 3,
    returnGeometry: true
  },

  on: function (map) {
    var extent = Object(_Util__WEBPACK_IMPORTED_MODULE_2__["boundsToExtent"])(map.getBounds());
    var size = map.getSize();
    this.params.imageDisplay = [size.x, size.y, 96];
    this.params.mapExtent = [extent.xmin, extent.ymin, extent.xmax, extent.ymax];
    return this;
  },

  at: function (geometry) {
    // cast lat, long pairs in raw array form manually
    if (geometry.length === 2) {
      geometry = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["latLng"])(geometry);
    }
    this._setGeometryParams(geometry);
    return this;
  },

  layerDef: function (id, where) {
    this.params.layerDefs = (this.params.layerDefs) ? this.params.layerDefs + ';' : '';
    this.params.layerDefs += ([id, where]).join(':');
    return this;
  },

  simplify: function (map, factor) {
    var mapWidth = Math.abs(map.getBounds().getWest() - map.getBounds().getEast());
    this.params.maxAllowableOffset = (mapWidth / map.getSize().y) * factor;
    return this;
  },

  run: function (callback, context) {
    return this.request(function (error, response) {
      // immediately invoke with an error
      if (error) {
        callback.call(context, error, undefined, response);
        return;

      // ok no error lets just assume we have features...
      } else {
        var featureCollection = Object(_Util__WEBPACK_IMPORTED_MODULE_2__["responseToFeatureCollection"])(response);
        response.results = response.results.reverse();
        for (var i = 0; i < featureCollection.features.length; i++) {
          var feature = featureCollection.features[i];
          feature.layerId = response.results[i].layerId;
        }
        callback.call(context, undefined, featureCollection, response);
      }
    });
  },

  _setGeometryParams: function (geometry) {
    var converted = Object(_Util__WEBPACK_IMPORTED_MODULE_2__["_setGeometry"])(geometry);
    this.params.geometry = converted.geometry;
    this.params.geometryType = converted.geometryType;
  }
});

function identifyFeatures (options) {
  return new IdentifyFeatures(options);
}

/* harmony default export */ __webpack_exports__["default"] = (identifyFeatures);


/***/ }),

/***/ "./node_modules/esri-leaflet/src/Tasks/IdentifyImage.js":
/*!**************************************************************!*\
  !*** ./node_modules/esri-leaflet/src/Tasks/IdentifyImage.js ***!
  \**************************************************************/
/*! exports provided: IdentifyImage, identifyImage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentifyImage", function() { return IdentifyImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identifyImage", function() { return identifyImage; });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Identify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Identify */ "./node_modules/esri-leaflet/src/Tasks/Identify.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./node_modules/esri-leaflet/src/Util.js");




var IdentifyImage = _Identify__WEBPACK_IMPORTED_MODULE_1__["Identify"].extend({
  setters: {
    'setMosaicRule': 'mosaicRule',
    'setRenderingRule': 'renderingRule',
    'setPixelSize': 'pixelSize',
    'returnCatalogItems': 'returnCatalogItems',
    'returnGeometry': 'returnGeometry'
  },

  params: {
    returnGeometry: false
  },

  at: function (latlng) {
    latlng = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["latLng"])(latlng);
    this.params.geometry = JSON.stringify({
      x: latlng.lng,
      y: latlng.lat,
      spatialReference: {
        wkid: 4326
      }
    });
    this.params.geometryType = 'esriGeometryPoint';
    return this;
  },

  getMosaicRule: function () {
    return this.params.mosaicRule;
  },

  getRenderingRule: function () {
    return this.params.renderingRule;
  },

  getPixelSize: function () {
    return this.params.pixelSize;
  },

  run: function (callback, context) {
    return this.request(function (error, response) {
      callback.call(context, error, (response && this._responseToGeoJSON(response)), response);
    }, this);
  },

  // get pixel data and return as geoJSON point
  // populate catalog items (if any)
  // merging in any catalogItemVisibilities as a propery of each feature
  _responseToGeoJSON: function (response) {
    var location = response.location;
    var catalogItems = response.catalogItems;
    var catalogItemVisibilities = response.catalogItemVisibilities;
    var geoJSON = {
      'pixel': {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [location.x, location.y]
        },
        'crs': {
          'type': 'EPSG',
          'properties': {
            'code': location.spatialReference.wkid
          }
        },
        'properties': {
          'OBJECTID': response.objectId,
          'name': response.name,
          'value': response.value
        },
        'id': response.objectId
      }
    };

    if (response.properties && response.properties.Values) {
      geoJSON.pixel.properties.values = response.properties.Values;
    }

    if (catalogItems && catalogItems.features) {
      geoJSON.catalogItems = Object(_Util__WEBPACK_IMPORTED_MODULE_2__["responseToFeatureCollection"])(catalogItems);
      if (catalogItemVisibilities && catalogItemVisibilities.length === geoJSON.catalogItems.features.length) {
        for (var i = catalogItemVisibilities.length - 1; i >= 0; i--) {
          geoJSON.catalogItems.features[i].properties.catalogItemVisibility = catalogItemVisibilities[i];
        }
      }
    }
    return geoJSON;
  }

});

function identifyImage (params) {
  return new IdentifyImage(params);
}

/* harmony default export */ __webpack_exports__["default"] = (identifyImage);


/***/ }),

/***/ "./node_modules/esri-leaflet/src/Tasks/Query.js":
/*!******************************************************!*\
  !*** ./node_modules/esri-leaflet/src/Tasks/Query.js ***!
  \******************************************************/
/*! exports provided: Query, query, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return Query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ "./node_modules/esri-leaflet/src/Tasks/Task.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./node_modules/esri-leaflet/src/Util.js");




var Query = _Task__WEBPACK_IMPORTED_MODULE_1__["Task"].extend({
  setters: {
    'offset': 'resultOffset',
    'limit': 'resultRecordCount',
    'fields': 'outFields',
    'precision': 'geometryPrecision',
    'featureIds': 'objectIds',
    'returnGeometry': 'returnGeometry',
    'returnM': 'returnM',
    'transform': 'datumTransformation',
    'token': 'token'
  },

  path: 'query',

  params: {
    returnGeometry: true,
    where: '1=1',
    outSR: 4326,
    outFields: '*'
  },

  // Returns a feature if its shape is wholly contained within the search geometry. Valid for all shape type combinations.
  within: function (geometry) {
    this._setGeometryParams(geometry);
    this.params.spatialRel = 'esriSpatialRelContains'; // to the REST api this reads geometry **contains** layer
    return this;
  },

  // Returns a feature if any spatial relationship is found. Applies to all shape type combinations.
  intersects: function (geometry) {
    this._setGeometryParams(geometry);
    this.params.spatialRel = 'esriSpatialRelIntersects';
    return this;
  },

  // Returns a feature if its shape wholly contains the search geometry. Valid for all shape type combinations.
  contains: function (geometry) {
    this._setGeometryParams(geometry);
    this.params.spatialRel = 'esriSpatialRelWithin'; // to the REST api this reads geometry **within** layer
    return this;
  },

  // Returns a feature if the intersection of the interiors of the two shapes is not empty and has a lower dimension than the maximum dimension of the two shapes. Two lines that share an endpoint in common do not cross. Valid for Line/Line, Line/Area, Multi-point/Area, and Multi-point/Line shape type combinations.
  crosses: function (geometry) {
    this._setGeometryParams(geometry);
    this.params.spatialRel = 'esriSpatialRelCrosses';
    return this;
  },

  // Returns a feature if the two shapes share a common boundary. However, the intersection of the interiors of the two shapes must be empty. In the Point/Line case, the point may touch an endpoint only of the line. Applies to all combinations except Point/Point.
  touches: function (geometry) {
    this._setGeometryParams(geometry);
    this.params.spatialRel = 'esriSpatialRelTouches';
    return this;
  },

  // Returns a feature if the intersection of the two shapes results in an object of the same dimension, but different from both of the shapes. Applies to Area/Area, Line/Line, and Multi-point/Multi-point shape type combinations.
  overlaps: function (geometry) {
    this._setGeometryParams(geometry);
    this.params.spatialRel = 'esriSpatialRelOverlaps';
    return this;
  },

  // Returns a feature if the envelope of the two shapes intersects.
  bboxIntersects: function (geometry) {
    this._setGeometryParams(geometry);
    this.params.spatialRel = 'esriSpatialRelEnvelopeIntersects';
    return this;
  },

  // if someone can help decipher the ArcObjects explanation and translate to plain speak, we should mention this method in the doc
  indexIntersects: function (geometry) {
    this._setGeometryParams(geometry);
    this.params.spatialRel = 'esriSpatialRelIndexIntersects'; // Returns a feature if the envelope of the query geometry intersects the index entry for the target geometry
    return this;
  },

  // only valid for Feature Services running on ArcGIS Server 10.3+ or ArcGIS Online
  nearby: function (latlng, radius) {
    latlng = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["latLng"])(latlng);
    this.params.geometry = [latlng.lng, latlng.lat];
    this.params.geometryType = 'esriGeometryPoint';
    this.params.spatialRel = 'esriSpatialRelIntersects';
    this.params.units = 'esriSRUnit_Meter';
    this.params.distance = radius;
    this.params.inSR = 4326;
    return this;
  },

  where: function (string) {
    // instead of converting double-quotes to single quotes, pass as is, and provide a more informative message if a 400 is encountered
    this.params.where = string;
    return this;
  },

  between: function (start, end) {
    this.params.time = [start.valueOf(), end.valueOf()];
    return this;
  },

  simplify: function (map, factor) {
    var mapWidth = Math.abs(map.getBounds().getWest() - map.getBounds().getEast());
    this.params.maxAllowableOffset = (mapWidth / map.getSize().y) * factor;
    return this;
  },

  orderBy: function (fieldName, order) {
    order = order || 'ASC';
    this.params.orderByFields = (this.params.orderByFields) ? this.params.orderByFields + ',' : '';
    this.params.orderByFields += ([fieldName, order]).join(' ');
    return this;
  },

  run: function (callback, context) {
    this._cleanParams();

    // services hosted on ArcGIS Online and ArcGIS Server 10.3.1+ support requesting geojson directly
    if (this.options.isModern || (Object(_Util__WEBPACK_IMPORTED_MODULE_2__["isArcgisOnline"])(this.options.url) && this.options.isModern === undefined)) {
      this.params.f = 'geojson';

      return this.request(function (error, response) {
        this._trapSQLerrors(error);
        callback.call(context, error, response, response);
      }, this);

      // otherwise convert it in the callback then pass it on
    } else {
      return this.request(function (error, response) {
        this._trapSQLerrors(error);
        callback.call(context, error, (response && Object(_Util__WEBPACK_IMPORTED_MODULE_2__["responseToFeatureCollection"])(response)), response);
      }, this);
    }
  },

  count: function (callback, context) {
    this._cleanParams();
    this.params.returnCountOnly = true;
    return this.request(function (error, response) {
      callback.call(this, error, (response && response.count), response);
    }, context);
  },

  ids: function (callback, context) {
    this._cleanParams();
    this.params.returnIdsOnly = true;
    return this.request(function (error, response) {
      callback.call(this, error, (response && response.objectIds), response);
    }, context);
  },

  // only valid for Feature Services running on ArcGIS Server 10.3+ or ArcGIS Online
  bounds: function (callback, context) {
    this._cleanParams();
    this.params.returnExtentOnly = true;
    return this.request(function (error, response) {
      if (response && response.extent && Object(_Util__WEBPACK_IMPORTED_MODULE_2__["extentToBounds"])(response.extent)) {
        callback.call(context, error, Object(_Util__WEBPACK_IMPORTED_MODULE_2__["extentToBounds"])(response.extent), response);
      } else {
        error = {
          message: 'Invalid Bounds'
        };
        callback.call(context, error, null, response);
      }
    }, context);
  },

  distinct: function () {
    // geometry must be omitted for queries requesting distinct values
    this.params.returnGeometry = false;
    this.params.returnDistinctValues = true;
    return this;
  },

  // only valid for image services
  pixelSize: function (rawPoint) {
    var castPoint = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["point"])(rawPoint);
    this.params.pixelSize = [castPoint.x, castPoint.y];
    return this;
  },

  // only valid for map services
  layer: function (layer) {
    this.path = layer + '/query';
    return this;
  },

  _trapSQLerrors: function (error) {
    if (error) {
      if (error.code === '400') {
        Object(_Util__WEBPACK_IMPORTED_MODULE_2__["warn"])('one common syntax error in query requests is encasing string values in double quotes instead of single quotes');
      }
    }
  },

  _cleanParams: function () {
    delete this.params.returnIdsOnly;
    delete this.params.returnExtentOnly;
    delete this.params.returnCountOnly;
  },

  _setGeometryParams: function (geometry) {
    this.params.inSR = 4326;
    var converted = Object(_Util__WEBPACK_IMPORTED_MODULE_2__["_setGeometry"])(geometry);
    this.params.geometry = converted.geometry;
    this.params.geometryType = converted.geometryType;
  }

});

function query (options) {
  return new Query(options);
}

/* harmony default export */ __webpack_exports__["default"] = (query);


/***/ }),

/***/ "./node_modules/esri-leaflet/src/Tasks/Task.js":
/*!*****************************************************!*\
  !*** ./node_modules/esri-leaflet/src/Tasks/Task.js ***!
  \*****************************************************/
/*! exports provided: Task, task, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "task", function() { return task; });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Support */ "./node_modules/esri-leaflet/src/Support.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util */ "./node_modules/esri-leaflet/src/Util.js");
/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Request */ "./node_modules/esri-leaflet/src/Request.js");





var Task = leaflet__WEBPACK_IMPORTED_MODULE_0__["Class"].extend({

  options: {
    proxy: false,
    useCors: _Support__WEBPACK_IMPORTED_MODULE_1__["cors"]
  },

  // Generate a method for each methodName:paramName in the setters for this task.
  generateSetter: function (param, context) {
    return leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].bind(function (value) {
      this.params[param] = value;
      return this;
    }, context);
  },

  initialize: function (endpoint) {
    // endpoint can be either a url (and options) for an ArcGIS Rest Service or an instance of EsriLeaflet.Service
    if (endpoint.request && endpoint.options) {
      this._service = endpoint;
      leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].setOptions(this, endpoint.options);
    } else {
      leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].setOptions(this, endpoint);
      this.options.url = Object(_Util__WEBPACK_IMPORTED_MODULE_2__["cleanUrl"])(endpoint.url);
    }

    // clone default params into this object
    this.params = leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].extend({}, this.params || {});

    // generate setter methods based on the setters object implimented a child class
    if (this.setters) {
      for (var setter in this.setters) {
        var param = this.setters[setter];
        this[setter] = this.generateSetter(param, this);
      }
    }
  },

  token: function (token) {
    if (this._service) {
      this._service.authenticate(token);
    } else {
      this.params.token = token;
    }
    return this;
  },

  apikey: function (apikey) {
    return this.token(apikey);
  },

  // ArcGIS Server Find/Identify 10.5+
  format: function (boolean) {
    // use double negative to expose a more intuitive positive method name
    this.params.returnUnformattedValues = !boolean;
    return this;
  },

  request: function (callback, context) {
    if (this.options.requestParams) {
      leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].extend(this.params, this.options.requestParams);
    }
    if (this._service) {
      return this._service.request(this.path, this.params, callback, context);
    }

    return this._request('request', this.path, this.params, callback, context);
  },

  _request: function (method, path, params, callback, context) {
    var url = (this.options.proxy) ? this.options.proxy + '?' + this.options.url + path : this.options.url + path;

    if ((method === 'get' || method === 'request') && !this.options.useCors) {
      return _Request__WEBPACK_IMPORTED_MODULE_3__["default"].get.JSONP(url, params, callback, context);
    }

    return _Request__WEBPACK_IMPORTED_MODULE_3__["default"][method](url, params, callback, context);
  }
});

function task (options) {
  options = Object(_Util__WEBPACK_IMPORTED_MODULE_2__["getUrlParams"])(options);
  return new Task(options);
}

/* harmony default export */ __webpack_exports__["default"] = (task);


/***/ }),

/***/ "./node_modules/esri-leaflet/src/Util.js":
/*!***********************************************!*\
  !*** ./node_modules/esri-leaflet/src/Util.js ***!
  \***********************************************/
/*! exports provided: geojsonToArcGIS, arcgisToGeoJSON, extentToBounds, boundsToExtent, _findIdAttributeFromResponse, _findIdAttributeFromFeature, responseToFeatureCollection, cleanUrl, getUrlParams, isArcgisOnline, geojsonTypeToArcGIS, calcAttributionWidth, setEsriAttribution, removeEsriAttribution, _setGeometry, _getAttributionData, _updateMapAttribution, warn, EsriUtil, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geojsonToArcGIS", function() { return geojsonToArcGIS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arcgisToGeoJSON", function() { return arcgisToGeoJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extentToBounds", function() { return extentToBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundsToExtent", function() { return boundsToExtent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_findIdAttributeFromResponse", function() { return _findIdAttributeFromResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_findIdAttributeFromFeature", function() { return _findIdAttributeFromFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "responseToFeatureCollection", function() { return responseToFeatureCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanUrl", function() { return cleanUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrlParams", function() { return getUrlParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArcgisOnline", function() { return isArcgisOnline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geojsonTypeToArcGIS", function() { return geojsonTypeToArcGIS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcAttributionWidth", function() { return calcAttributionWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEsriAttribution", function() { return setEsriAttribution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEsriAttribution", function() { return removeEsriAttribution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_setGeometry", function() { return _setGeometry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getAttributionData", function() { return _getAttributionData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_updateMapAttribution", function() { return _updateMapAttribution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsriUtil", function() { return EsriUtil; });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Request */ "./node_modules/esri-leaflet/src/Request.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return _Request__WEBPACK_IMPORTED_MODULE_1__["warn"]; });

/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Options */ "./node_modules/esri-leaflet/src/Options.js");
/* harmony import */ var _Support__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Support */ "./node_modules/esri-leaflet/src/Support.js");
/* harmony import */ var _terraformer_arcgis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @terraformer/arcgis */ "./node_modules/@terraformer/arcgis/dist/t-arcgis.esm.js");







var BASE_LEAFLET_ATTRIBUTION_STRING = '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>';
var POWERED_BY_ESRI_ATTRIBUTION_STRING = 'Powered by <a href="https://www.esri.com">Esri</a>';

function geojsonToArcGIS (geojson, idAttr) {
  return Object(_terraformer_arcgis__WEBPACK_IMPORTED_MODULE_4__["geojsonToArcGIS"])(geojson, idAttr);
}

function arcgisToGeoJSON (arcgis, idAttr) {
  return Object(_terraformer_arcgis__WEBPACK_IMPORTED_MODULE_4__["arcgisToGeoJSON"])(arcgis, idAttr);
}

// convert an extent (ArcGIS) to LatLngBounds (Leaflet)
function extentToBounds (extent) {
  // "NaN" coordinates from ArcGIS Server indicate a null geometry
  if (extent.xmin !== 'NaN' && extent.ymin !== 'NaN' && extent.xmax !== 'NaN' && extent.ymax !== 'NaN') {
    var sw = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["latLng"])(extent.ymin, extent.xmin);
    var ne = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["latLng"])(extent.ymax, extent.xmax);
    return Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["latLngBounds"])(sw, ne);
  } else {
    return null;
  }
}

// convert an LatLngBounds (Leaflet) to extent (ArcGIS)
function boundsToExtent (bounds) {
  bounds = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["latLngBounds"])(bounds);
  return {
    'xmin': bounds.getSouthWest().lng,
    'ymin': bounds.getSouthWest().lat,
    'xmax': bounds.getNorthEast().lng,
    'ymax': bounds.getNorthEast().lat,
    'spatialReference': {
      'wkid': 4326
    }
  };
}

var knownFieldNames = /^(OBJECTID|FID|OID|ID)$/i;

// Attempts to find the ID Field from response
function _findIdAttributeFromResponse (response) {
  var result;

  if (response.objectIdFieldName) {
    // Find Id Field directly
    result = response.objectIdFieldName;
  } else if (response.fields) {
    // Find ID Field based on field type
    for (var j = 0; j <= response.fields.length - 1; j++) {
      if (response.fields[j].type === 'esriFieldTypeOID') {
        result = response.fields[j].name;
        break;
      }
    }
    if (!result) {
      // If no field was marked as being the esriFieldTypeOID try well known field names
      for (j = 0; j <= response.fields.length - 1; j++) {
        if (response.fields[j].name.match(knownFieldNames)) {
          result = response.fields[j].name;
          break;
        }
      }
    }
  }
  return result;
}

// This is the 'last' resort, find the Id field from the specified feature
function _findIdAttributeFromFeature (feature) {
  for (var key in feature.attributes) {
    if (key.match(knownFieldNames)) {
      return key;
    }
  }
}

function responseToFeatureCollection (response, idAttribute) {
  var objectIdField;
  var features = response.features || response.results;
  var count = features && features.length;

  if (idAttribute) {
    objectIdField = idAttribute;
  } else {
    objectIdField = _findIdAttributeFromResponse(response);
  }

  var featureCollection = {
    type: 'FeatureCollection',
    features: []
  };

  if (count) {
    for (var i = features.length - 1; i >= 0; i--) {
      var feature = arcgisToGeoJSON(features[i], objectIdField || _findIdAttributeFromFeature(features[i]));
      featureCollection.features.push(feature);
    }
  }

  return featureCollection;
}

  // trim url whitespace and add a trailing slash if needed
function cleanUrl (url) {
  // trim leading and trailing spaces, but not spaces inside the url
  url = leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].trim(url);

  // add a trailing slash to the url if the user omitted it
  if (url[url.length - 1] !== '/') {
    url += '/';
  }

  return url;
}

/* Extract url params if any and store them in requestParams attribute.
   Return the options params updated */
function getUrlParams (options) {
  if (options.url.indexOf('?') !== -1) {
    options.requestParams = options.requestParams || {};
    var queryString = options.url.substring(options.url.indexOf('?') + 1);
    options.url = options.url.split('?')[0];
    options.requestParams = JSON.parse('{"' + decodeURI(queryString).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
  }
  options.url = cleanUrl(options.url.split('?')[0]);
  return options;
}

function isArcgisOnline (url) {
  /* hosted feature services support geojson as an output format
  utility.arcgis.com services are proxied from a variety of ArcGIS Server vintages, and may not */
  return (/^(?!.*utility\.arcgis\.com).*\.arcgis\.com.*FeatureServer/i).test(url);
}

function geojsonTypeToArcGIS (geoJsonType) {
  var arcgisGeometryType;
  switch (geoJsonType) {
    case 'Point':
      arcgisGeometryType = 'esriGeometryPoint';
      break;
    case 'MultiPoint':
      arcgisGeometryType = 'esriGeometryMultipoint';
      break;
    case 'LineString':
      arcgisGeometryType = 'esriGeometryPolyline';
      break;
    case 'MultiLineString':
      arcgisGeometryType = 'esriGeometryPolyline';
      break;
    case 'Polygon':
      arcgisGeometryType = 'esriGeometryPolygon';
      break;
    case 'MultiPolygon':
      arcgisGeometryType = 'esriGeometryPolygon';
      break;
  }

  return arcgisGeometryType;
}

function calcAttributionWidth (map) {
  // either crop at 55px or user defined buffer
  return (map.getSize().x - _Options__WEBPACK_IMPORTED_MODULE_2__["options"].attributionWidthOffset) + 'px';
}

function setEsriAttribution (map) {
  if (!map.attributionControl) {
    return;
  }

  if (!map.attributionControl._esriAttributionLayerCount) {
    map.attributionControl._esriAttributionLayerCount = 0;
  }

  if (map.attributionControl._esriAttributionLayerCount === 0) {
    // Dynamically creating the CSS rules, only run this once per page load:
    if (!map.attributionControl._esriAttributionAddedOnce) {
      var hoverAttributionStyle = document.createElement('style');
      hoverAttributionStyle.type = 'text/css';
      hoverAttributionStyle.innerHTML = '.esri-truncated-attribution:hover {' +
        'white-space: normal;' +
      '}';
      document.getElementsByTagName('head')[0].appendChild(hoverAttributionStyle);

      // define a new css class in JS to trim attribution into a single line
      var attributionStyle = document.createElement('style');
      attributionStyle.type = 'text/css';
      attributionStyle.innerHTML = '.esri-truncated-attribution {' +
        'vertical-align: -3px;' +
        'white-space: nowrap;' +
        'overflow: hidden;' +
        'text-overflow: ellipsis;' +
        'display: inline-block;' +
        'transition: 0s white-space;' +
        'transition-delay: 1s;' +
        'max-width: ' + calcAttributionWidth(map) + ';' +
      '}';
      document.getElementsByTagName('head')[0].appendChild(attributionStyle);

      // update the width used to truncate when the map itself is resized
      map.on('resize', function (e) {
        if (map.attributionControl) {
          map.attributionControl._container.style.maxWidth = calcAttributionWidth(e.target);
        }
      });

      map.attributionControl._esriAttributionAddedOnce = true;
    }

    map.attributionControl.setPrefix(BASE_LEAFLET_ATTRIBUTION_STRING + ' | ' + POWERED_BY_ESRI_ATTRIBUTION_STRING);
    leaflet__WEBPACK_IMPORTED_MODULE_0__["DomUtil"].addClass(map.attributionControl._container, 'esri-truncated-attribution:hover');
    leaflet__WEBPACK_IMPORTED_MODULE_0__["DomUtil"].addClass(map.attributionControl._container, 'esri-truncated-attribution');
  }

  // Track the number of esri-leaflet layers that are on the map so we can know when we can remove the attribution (below in removeEsriAttribution)
  map.attributionControl._esriAttributionLayerCount = map.attributionControl._esriAttributionLayerCount + 1;
}

function removeEsriAttribution (map) {
  if (!map.attributionControl) {
    return;
  }

  // Only remove the attribution if we're about to remove the LAST esri-leaflet layer (_esriAttributionLayerCount)
  if (map.attributionControl._esriAttributionLayerCount && map.attributionControl._esriAttributionLayerCount === 1) {
    map.attributionControl.setPrefix(BASE_LEAFLET_ATTRIBUTION_STRING);
    leaflet__WEBPACK_IMPORTED_MODULE_0__["DomUtil"].removeClass(map.attributionControl._container, 'esri-truncated-attribution:hover');
    leaflet__WEBPACK_IMPORTED_MODULE_0__["DomUtil"].removeClass(map.attributionControl._container, 'esri-truncated-attribution');
  }
  map.attributionControl._esriAttributionLayerCount = map.attributionControl._esriAttributionLayerCount - 1;
}

function _setGeometry (geometry) {
  var params = {
    geometry: null,
    geometryType: null
  };

  // convert bounds to extent and finish
  if (geometry instanceof leaflet__WEBPACK_IMPORTED_MODULE_0__["LatLngBounds"]) {
    // set geometry + geometryType
    params.geometry = boundsToExtent(geometry);
    params.geometryType = 'esriGeometryEnvelope';
    return params;
  }

  // convert L.Marker > L.LatLng
  if (geometry.getLatLng) {
    geometry = geometry.getLatLng();
  }

  // convert L.LatLng to a geojson point and continue;
  if (geometry instanceof leaflet__WEBPACK_IMPORTED_MODULE_0__["LatLng"]) {
    geometry = {
      type: 'Point',
      coordinates: [geometry.lng, geometry.lat]
    };
  }

  // handle L.GeoJSON, pull out the first geometry
  if (geometry instanceof leaflet__WEBPACK_IMPORTED_MODULE_0__["GeoJSON"]) {
    // reassign geometry to the GeoJSON value  (we are assuming that only one feature is present)
    geometry = geometry.getLayers()[0].feature.geometry;
    params.geometry = geojsonToArcGIS(geometry);
    params.geometryType = geojsonTypeToArcGIS(geometry.type);
  }

  // Handle L.Polyline and L.Polygon
  if (geometry.toGeoJSON) {
    geometry = geometry.toGeoJSON();
  }

  // handle GeoJSON feature by pulling out the geometry
  if (geometry.type === 'Feature') {
    // get the geometry of the geojson feature
    geometry = geometry.geometry;
  }

  // confirm that our GeoJSON is a point, line or polygon
  if (geometry.type === 'Point' || geometry.type === 'LineString' || geometry.type === 'Polygon' || geometry.type === 'MultiPolygon') {
    params.geometry = geojsonToArcGIS(geometry);
    params.geometryType = geojsonTypeToArcGIS(geometry.type);
    return params;
  }

  // warn the user if we havn't found an appropriate object
  Object(_Request__WEBPACK_IMPORTED_MODULE_1__["warn"])('invalid geometry passed to spatial query. Should be L.LatLng, L.LatLngBounds, L.Marker or a GeoJSON Point, Line, Polygon or MultiPolygon object');

  return;
}

function _getAttributionData (url, map) {
  if (_Support__WEBPACK_IMPORTED_MODULE_3__["Support"].cors) {
    Object(_Request__WEBPACK_IMPORTED_MODULE_1__["request"])(url, {}, leaflet__WEBPACK_IMPORTED_MODULE_0__["Util"].bind(function (error, attributions) {
      if (error) { return; }
      map._esriAttributions = [];
      for (var c = 0; c < attributions.contributors.length; c++) {
        var contributor = attributions.contributors[c];

        for (var i = 0; i < contributor.coverageAreas.length; i++) {
          var coverageArea = contributor.coverageAreas[i];
          var southWest = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["latLng"])(coverageArea.bbox[0], coverageArea.bbox[1]);
          var northEast = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["latLng"])(coverageArea.bbox[2], coverageArea.bbox[3]);
          map._esriAttributions.push({
            attribution: contributor.attribution,
            score: coverageArea.score,
            bounds: Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["latLngBounds"])(southWest, northEast),
            minZoom: coverageArea.zoomMin,
            maxZoom: coverageArea.zoomMax
          });
        }
      }

      map._esriAttributions.sort(function (a, b) {
        return b.score - a.score;
      });

      // pass the same argument as the map's 'moveend' event
      var obj = { target: map };
      _updateMapAttribution(obj);
    }, this));
  }
}

function _updateMapAttribution (evt) {
  var map = evt.target;
  var oldAttributions = map._esriAttributions;

  if (!map || !map.attributionControl) return;

  var attributionElement = map.attributionControl._container.querySelector('.esri-dynamic-attribution');

  if (attributionElement && oldAttributions) {
    var newAttributions = '';
    var bounds = map.getBounds();
    var wrappedBounds = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["latLngBounds"])(
      bounds.getSouthWest().wrap(),
      bounds.getNorthEast().wrap()
    );
    var zoom = map.getZoom();

    for (var i = 0; i < oldAttributions.length; i++) {
      var attribution = oldAttributions[i];
      var text = attribution.attribution;

      if (!newAttributions.match(text) && attribution.bounds.intersects(wrappedBounds) && zoom >= attribution.minZoom && zoom <= attribution.maxZoom) {
        newAttributions += (', ' + text);
      }
    }

    newAttributions = newAttributions.substr(2);
    attributionElement.innerHTML = newAttributions;
    attributionElement.style.maxWidth = calcAttributionWidth(map);

    map.fire('attributionupdated', {
      attribution: newAttributions
    });
  }
}

// for backwards compatibility


var EsriUtil = {
  warn: _Request__WEBPACK_IMPORTED_MODULE_1__["warn"],
  cleanUrl: cleanUrl,
  getUrlParams: getUrlParams,
  isArcgisOnline: isArcgisOnline,
  geojsonTypeToArcGIS: geojsonTypeToArcGIS,
  responseToFeatureCollection: responseToFeatureCollection,
  geojsonToArcGIS: geojsonToArcGIS,
  arcgisToGeoJSON: arcgisToGeoJSON,
  boundsToExtent: boundsToExtent,
  extentToBounds: extentToBounds,
  calcAttributionWidth: calcAttributionWidth,
  setEsriAttribution: setEsriAttribution,
  _setGeometry: _setGeometry,
  _getAttributionData: _getAttributionData,
  _updateMapAttribution: _updateMapAttribution,
  _findIdAttributeFromFeature: _findIdAttributeFromFeature,
  _findIdAttributeFromResponse: _findIdAttributeFromResponse
};

/* harmony default export */ __webpack_exports__["default"] = (EsriUtil);


/***/ }),

/***/ "./node_modules/leaflet/dist/images/marker-icon.png":
/*!**********************************************************!*\
  !*** ./node_modules/leaflet/dist/images/marker-icon.png ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "marker-icon.png");

/***/ }),

/***/ "./node_modules/leaflet/dist/images/marker-shadow.png":
/*!************************************************************!*\
  !*** ./node_modules/leaflet/dist/images/marker-shadow.png ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "marker-shadow.png");

/***/ }),

/***/ "./node_modules/mgrs/mgrs.js":
/*!***********************************!*\
  !*** ./node_modules/mgrs/mgrs.js ***!
  \***********************************/
/*! exports provided: default, forward, inverse, toPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toPoint", function() { return toPoint; });



/**
 * UTM zones are grouped, and assigned to one of a group of 6
 * sets.
 *
 * {int} @private
 */
var NUM_100K_SETS = 6;

/**
 * The column letters (for easting) of the lower left value, per
 * set.
 *
 * {string} @private
 */
var SET_ORIGIN_COLUMN_LETTERS = 'AJSAJS';

/**
 * The row letters (for northing) of the lower left value, per
 * set.
 *
 * {string} @private
 */
var SET_ORIGIN_ROW_LETTERS = 'AFAFAF';

var A = 65; // A
var I = 73; // I
var O = 79; // O
var V = 86; // V
var Z = 90; // Z
/* harmony default export */ __webpack_exports__["default"] = ({
  forward: forward,
  inverse: inverse,
  toPoint: toPoint
});
/**
 * Conversion of lat/lon to MGRS.
 *
 * @param {object} ll Object literal with lat and lon properties on a
 *     WGS84 ellipsoid.
 * @param {int} accuracy Accuracy in digits (5 for 1 m, 4 for 10 m, 3 for
 *      100 m, 2 for 1000 m or 1 for 10000 m). Optional, default is 5.
 * @return {string} the MGRS string for the given location and accuracy.
 */
function forward(ll, accuracy) {
  accuracy = accuracy || 5; // default accuracy 1m
  return encode(LLtoUTM({
    lat: ll[1],
    lon: ll[0]
  }), accuracy);
};

/**
 * Conversion of MGRS to lat/lon.
 *
 * @param {string} mgrs MGRS string.
 * @return {array} An array with left (longitude), bottom (latitude), right
 *     (longitude) and top (latitude) values in WGS84, representing the
 *     bounding box for the provided MGRS reference.
 */
function inverse(mgrs) {
  var bbox = UTMtoLL(decode(mgrs.toUpperCase()));
  if (bbox.lat && bbox.lon) {
    return [bbox.lon, bbox.lat, bbox.lon, bbox.lat];
  }
  return [bbox.left, bbox.bottom, bbox.right, bbox.top];
};

function toPoint(mgrs) {
  var bbox = UTMtoLL(decode(mgrs.toUpperCase()));
  if (bbox.lat && bbox.lon) {
    return [bbox.lon, bbox.lat];
  }
  return [(bbox.left + bbox.right) / 2, (bbox.top + bbox.bottom) / 2];
};
/**
 * Conversion from degrees to radians.
 *
 * @private
 * @param {number} deg the angle in degrees.
 * @return {number} the angle in radians.
 */
function degToRad(deg) {
  return (deg * (Math.PI / 180.0));
}

/**
 * Conversion from radians to degrees.
 *
 * @private
 * @param {number} rad the angle in radians.
 * @return {number} the angle in degrees.
 */
function radToDeg(rad) {
  return (180.0 * (rad / Math.PI));
}

/**
 * Converts a set of Longitude and Latitude co-ordinates to UTM
 * using the WGS84 ellipsoid.
 *
 * @private
 * @param {object} ll Object literal with lat and lon properties
 *     representing the WGS84 coordinate to be converted.
 * @return {object} Object literal containing the UTM value with easting,
 *     northing, zoneNumber and zoneLetter properties, and an optional
 *     accuracy property in digits. Returns null if the conversion failed.
 */
function LLtoUTM(ll) {
  var Lat = ll.lat;
  var Long = ll.lon;
  var a = 6378137.0; //ellip.radius;
  var eccSquared = 0.00669438; //ellip.eccsq;
  var k0 = 0.9996;
  var LongOrigin;
  var eccPrimeSquared;
  var N, T, C, A, M;
  var LatRad = degToRad(Lat);
  var LongRad = degToRad(Long);
  var LongOriginRad;
  var ZoneNumber;
  // (int)
  ZoneNumber = Math.floor((Long + 180) / 6) + 1;

  //Make sure the longitude 180.00 is in Zone 60
  if (Long === 180) {
    ZoneNumber = 60;
  }

  // Special zone for Norway
  if (Lat >= 56.0 && Lat < 64.0 && Long >= 3.0 && Long < 12.0) {
    ZoneNumber = 32;
  }

  // Special zones for Svalbard
  if (Lat >= 72.0 && Lat < 84.0) {
    if (Long >= 0.0 && Long < 9.0) {
      ZoneNumber = 31;
    }
    else if (Long >= 9.0 && Long < 21.0) {
      ZoneNumber = 33;
    }
    else if (Long >= 21.0 && Long < 33.0) {
      ZoneNumber = 35;
    }
    else if (Long >= 33.0 && Long < 42.0) {
      ZoneNumber = 37;
    }
  }

  LongOrigin = (ZoneNumber - 1) * 6 - 180 + 3; //+3 puts origin
  // in middle of
  // zone
  LongOriginRad = degToRad(LongOrigin);

  eccPrimeSquared = (eccSquared) / (1 - eccSquared);

  N = a / Math.sqrt(1 - eccSquared * Math.sin(LatRad) * Math.sin(LatRad));
  T = Math.tan(LatRad) * Math.tan(LatRad);
  C = eccPrimeSquared * Math.cos(LatRad) * Math.cos(LatRad);
  A = Math.cos(LatRad) * (LongRad - LongOriginRad);

  M = a * ((1 - eccSquared / 4 - 3 * eccSquared * eccSquared / 64 - 5 * eccSquared * eccSquared * eccSquared / 256) * LatRad - (3 * eccSquared / 8 + 3 * eccSquared * eccSquared / 32 + 45 * eccSquared * eccSquared * eccSquared / 1024) * Math.sin(2 * LatRad) + (15 * eccSquared * eccSquared / 256 + 45 * eccSquared * eccSquared * eccSquared / 1024) * Math.sin(4 * LatRad) - (35 * eccSquared * eccSquared * eccSquared / 3072) * Math.sin(6 * LatRad));

  var UTMEasting = (k0 * N * (A + (1 - T + C) * A * A * A / 6.0 + (5 - 18 * T + T * T + 72 * C - 58 * eccPrimeSquared) * A * A * A * A * A / 120.0) + 500000.0);

  var UTMNorthing = (k0 * (M + N * Math.tan(LatRad) * (A * A / 2 + (5 - T + 9 * C + 4 * C * C) * A * A * A * A / 24.0 + (61 - 58 * T + T * T + 600 * C - 330 * eccPrimeSquared) * A * A * A * A * A * A / 720.0)));
  if (Lat < 0.0) {
    UTMNorthing += 10000000.0; //10000000 meter offset for
    // southern hemisphere
  }

  return {
    northing: Math.round(UTMNorthing),
    easting: Math.round(UTMEasting),
    zoneNumber: ZoneNumber,
    zoneLetter: getLetterDesignator(Lat)
  };
}

/**
 * Converts UTM coords to lat/long, using the WGS84 ellipsoid. This is a convenience
 * class where the Zone can be specified as a single string eg."60N" which
 * is then broken down into the ZoneNumber and ZoneLetter.
 *
 * @private
 * @param {object} utm An object literal with northing, easting, zoneNumber
 *     and zoneLetter properties. If an optional accuracy property is
 *     provided (in meters), a bounding box will be returned instead of
 *     latitude and longitude.
 * @return {object} An object literal containing either lat and lon values
 *     (if no accuracy was provided), or top, right, bottom and left values
 *     for the bounding box calculated according to the provided accuracy.
 *     Returns null if the conversion failed.
 */
function UTMtoLL(utm) {

  var UTMNorthing = utm.northing;
  var UTMEasting = utm.easting;
  var zoneLetter = utm.zoneLetter;
  var zoneNumber = utm.zoneNumber;
  // check the ZoneNummber is valid
  if (zoneNumber < 0 || zoneNumber > 60) {
    return null;
  }

  var k0 = 0.9996;
  var a = 6378137.0; //ellip.radius;
  var eccSquared = 0.00669438; //ellip.eccsq;
  var eccPrimeSquared;
  var e1 = (1 - Math.sqrt(1 - eccSquared)) / (1 + Math.sqrt(1 - eccSquared));
  var N1, T1, C1, R1, D, M;
  var LongOrigin;
  var mu, phi1Rad;

  // remove 500,000 meter offset for longitude
  var x = UTMEasting - 500000.0;
  var y = UTMNorthing;

  // We must know somehow if we are in the Northern or Southern
  // hemisphere, this is the only time we use the letter So even
  // if the Zone letter isn't exactly correct it should indicate
  // the hemisphere correctly
  if (zoneLetter < 'N') {
    y -= 10000000.0; // remove 10,000,000 meter offset used
    // for southern hemisphere
  }

  // There are 60 zones with zone 1 being at West -180 to -174
  LongOrigin = (zoneNumber - 1) * 6 - 180 + 3; // +3 puts origin
  // in middle of
  // zone

  eccPrimeSquared = (eccSquared) / (1 - eccSquared);

  M = y / k0;
  mu = M / (a * (1 - eccSquared / 4 - 3 * eccSquared * eccSquared / 64 - 5 * eccSquared * eccSquared * eccSquared / 256));

  phi1Rad = mu + (3 * e1 / 2 - 27 * e1 * e1 * e1 / 32) * Math.sin(2 * mu) + (21 * e1 * e1 / 16 - 55 * e1 * e1 * e1 * e1 / 32) * Math.sin(4 * mu) + (151 * e1 * e1 * e1 / 96) * Math.sin(6 * mu);
  // double phi1 = ProjMath.radToDeg(phi1Rad);

  N1 = a / Math.sqrt(1 - eccSquared * Math.sin(phi1Rad) * Math.sin(phi1Rad));
  T1 = Math.tan(phi1Rad) * Math.tan(phi1Rad);
  C1 = eccPrimeSquared * Math.cos(phi1Rad) * Math.cos(phi1Rad);
  R1 = a * (1 - eccSquared) / Math.pow(1 - eccSquared * Math.sin(phi1Rad) * Math.sin(phi1Rad), 1.5);
  D = x / (N1 * k0);

  var lat = phi1Rad - (N1 * Math.tan(phi1Rad) / R1) * (D * D / 2 - (5 + 3 * T1 + 10 * C1 - 4 * C1 * C1 - 9 * eccPrimeSquared) * D * D * D * D / 24 + (61 + 90 * T1 + 298 * C1 + 45 * T1 * T1 - 252 * eccPrimeSquared - 3 * C1 * C1) * D * D * D * D * D * D / 720);
  lat = radToDeg(lat);

  var lon = (D - (1 + 2 * T1 + C1) * D * D * D / 6 + (5 - 2 * C1 + 28 * T1 - 3 * C1 * C1 + 8 * eccPrimeSquared + 24 * T1 * T1) * D * D * D * D * D / 120) / Math.cos(phi1Rad);
  lon = LongOrigin + radToDeg(lon);

  var result;
  if (utm.accuracy) {
    var topRight = UTMtoLL({
      northing: utm.northing + utm.accuracy,
      easting: utm.easting + utm.accuracy,
      zoneLetter: utm.zoneLetter,
      zoneNumber: utm.zoneNumber
    });
    result = {
      top: topRight.lat,
      right: topRight.lon,
      bottom: lat,
      left: lon
    };
  }
  else {
    result = {
      lat: lat,
      lon: lon
    };
  }
  return result;
}

/**
 * Calculates the MGRS letter designator for the given latitude.
 *
 * @private
 * @param {number} lat The latitude in WGS84 to get the letter designator
 *     for.
 * @return {char} The letter designator.
 */
function getLetterDesignator(lat) {
  //This is here as an error flag to show that the Latitude is
  //outside MGRS limits
  var LetterDesignator = 'Z';

  if ((84 >= lat) && (lat >= 72)) {
    LetterDesignator = 'X';
  }
  else if ((72 > lat) && (lat >= 64)) {
    LetterDesignator = 'W';
  }
  else if ((64 > lat) && (lat >= 56)) {
    LetterDesignator = 'V';
  }
  else if ((56 > lat) && (lat >= 48)) {
    LetterDesignator = 'U';
  }
  else if ((48 > lat) && (lat >= 40)) {
    LetterDesignator = 'T';
  }
  else if ((40 > lat) && (lat >= 32)) {
    LetterDesignator = 'S';
  }
  else if ((32 > lat) && (lat >= 24)) {
    LetterDesignator = 'R';
  }
  else if ((24 > lat) && (lat >= 16)) {
    LetterDesignator = 'Q';
  }
  else if ((16 > lat) && (lat >= 8)) {
    LetterDesignator = 'P';
  }
  else if ((8 > lat) && (lat >= 0)) {
    LetterDesignator = 'N';
  }
  else if ((0 > lat) && (lat >= -8)) {
    LetterDesignator = 'M';
  }
  else if ((-8 > lat) && (lat >= -16)) {
    LetterDesignator = 'L';
  }
  else if ((-16 > lat) && (lat >= -24)) {
    LetterDesignator = 'K';
  }
  else if ((-24 > lat) && (lat >= -32)) {
    LetterDesignator = 'J';
  }
  else if ((-32 > lat) && (lat >= -40)) {
    LetterDesignator = 'H';
  }
  else if ((-40 > lat) && (lat >= -48)) {
    LetterDesignator = 'G';
  }
  else if ((-48 > lat) && (lat >= -56)) {
    LetterDesignator = 'F';
  }
  else if ((-56 > lat) && (lat >= -64)) {
    LetterDesignator = 'E';
  }
  else if ((-64 > lat) && (lat >= -72)) {
    LetterDesignator = 'D';
  }
  else if ((-72 > lat) && (lat >= -80)) {
    LetterDesignator = 'C';
  }
  return LetterDesignator;
}

/**
 * Encodes a UTM location as MGRS string.
 *
 * @private
 * @param {object} utm An object literal with easting, northing,
 *     zoneLetter, zoneNumber
 * @param {number} accuracy Accuracy in digits (1-5).
 * @return {string} MGRS string for the given UTM location.
 */
function encode(utm, accuracy) {
  // prepend with leading zeroes
  var seasting = "00000" + utm.easting,
    snorthing = "00000" + utm.northing;

  return utm.zoneNumber + utm.zoneLetter + get100kID(utm.easting, utm.northing, utm.zoneNumber) + seasting.substr(seasting.length - 5, accuracy) + snorthing.substr(snorthing.length - 5, accuracy);
}

/**
 * Get the two letter 100k designator for a given UTM easting,
 * northing and zone number value.
 *
 * @private
 * @param {number} easting
 * @param {number} northing
 * @param {number} zoneNumber
 * @return the two letter 100k designator for the given UTM location.
 */
function get100kID(easting, northing, zoneNumber) {
  var setParm = get100kSetForZone(zoneNumber);
  var setColumn = Math.floor(easting / 100000);
  var setRow = Math.floor(northing / 100000) % 20;
  return getLetter100kID(setColumn, setRow, setParm);
}

/**
 * Given a UTM zone number, figure out the MGRS 100K set it is in.
 *
 * @private
 * @param {number} i An UTM zone number.
 * @return {number} the 100k set the UTM zone is in.
 */
function get100kSetForZone(i) {
  var setParm = i % NUM_100K_SETS;
  if (setParm === 0) {
    setParm = NUM_100K_SETS;
  }

  return setParm;
}

/**
 * Get the two-letter MGRS 100k designator given information
 * translated from the UTM northing, easting and zone number.
 *
 * @private
 * @param {number} column the column index as it relates to the MGRS
 *        100k set spreadsheet, created from the UTM easting.
 *        Values are 1-8.
 * @param {number} row the row index as it relates to the MGRS 100k set
 *        spreadsheet, created from the UTM northing value. Values
 *        are from 0-19.
 * @param {number} parm the set block, as it relates to the MGRS 100k set
 *        spreadsheet, created from the UTM zone. Values are from
 *        1-60.
 * @return two letter MGRS 100k code.
 */
function getLetter100kID(column, row, parm) {
  // colOrigin and rowOrigin are the letters at the origin of the set
  var index = parm - 1;
  var colOrigin = SET_ORIGIN_COLUMN_LETTERS.charCodeAt(index);
  var rowOrigin = SET_ORIGIN_ROW_LETTERS.charCodeAt(index);

  // colInt and rowInt are the letters to build to return
  var colInt = colOrigin + column - 1;
  var rowInt = rowOrigin + row;
  var rollover = false;

  if (colInt > Z) {
    colInt = colInt - Z + A - 1;
    rollover = true;
  }

  if (colInt === I || (colOrigin < I && colInt > I) || ((colInt > I || colOrigin < I) && rollover)) {
    colInt++;
  }

  if (colInt === O || (colOrigin < O && colInt > O) || ((colInt > O || colOrigin < O) && rollover)) {
    colInt++;

    if (colInt === I) {
      colInt++;
    }
  }

  if (colInt > Z) {
    colInt = colInt - Z + A - 1;
  }

  if (rowInt > V) {
    rowInt = rowInt - V + A - 1;
    rollover = true;
  }
  else {
    rollover = false;
  }

  if (((rowInt === I) || ((rowOrigin < I) && (rowInt > I))) || (((rowInt > I) || (rowOrigin < I)) && rollover)) {
    rowInt++;
  }

  if (((rowInt === O) || ((rowOrigin < O) && (rowInt > O))) || (((rowInt > O) || (rowOrigin < O)) && rollover)) {
    rowInt++;

    if (rowInt === I) {
      rowInt++;
    }
  }

  if (rowInt > V) {
    rowInt = rowInt - V + A - 1;
  }

  var twoLetter = String.fromCharCode(colInt) + String.fromCharCode(rowInt);
  return twoLetter;
}

/**
 * Decode the UTM parameters from a MGRS string.
 *
 * @private
 * @param {string} mgrsString an UPPERCASE coordinate string is expected.
 * @return {object} An object literal with easting, northing, zoneLetter,
 *     zoneNumber and accuracy (in meters) properties.
 */
function decode(mgrsString) {

  if (mgrsString && mgrsString.length === 0) {
    throw ("MGRSPoint coverting from nothing");
  }

  var length = mgrsString.length;

  var hunK = null;
  var sb = "";
  var testChar;
  var i = 0;

  // get Zone number
  while (!(/[A-Z]/).test(testChar = mgrsString.charAt(i))) {
    if (i >= 2) {
      throw ("MGRSPoint bad conversion from: " + mgrsString);
    }
    sb += testChar;
    i++;
  }

  var zoneNumber = parseInt(sb, 10);

  if (i === 0 || i + 3 > length) {
    // A good MGRS string has to be 4-5 digits long,
    // ##AAA/#AAA at least.
    throw ("MGRSPoint bad conversion from: " + mgrsString);
  }

  var zoneLetter = mgrsString.charAt(i++);

  // Should we check the zone letter here? Why not.
  if (zoneLetter <= 'A' || zoneLetter === 'B' || zoneLetter === 'Y' || zoneLetter >= 'Z' || zoneLetter === 'I' || zoneLetter === 'O') {
    throw ("MGRSPoint zone letter " + zoneLetter + " not handled: " + mgrsString);
  }

  hunK = mgrsString.substring(i, i += 2);

  var set = get100kSetForZone(zoneNumber);

  var east100k = getEastingFromChar(hunK.charAt(0), set);
  var north100k = getNorthingFromChar(hunK.charAt(1), set);

  // We have a bug where the northing may be 2000000 too low.
  // How
  // do we know when to roll over?

  while (north100k < getMinNorthing(zoneLetter)) {
    north100k += 2000000;
  }

  // calculate the char index for easting/northing separator
  var remainder = length - i;

  if (remainder % 2 !== 0) {
    throw ("MGRSPoint has to have an even number \nof digits after the zone letter and two 100km letters - front \nhalf for easting meters, second half for \nnorthing meters" + mgrsString);
  }

  var sep = remainder / 2;

  var sepEasting = 0.0;
  var sepNorthing = 0.0;
  var accuracyBonus, sepEastingString, sepNorthingString, easting, northing;
  if (sep > 0) {
    accuracyBonus = 100000.0 / Math.pow(10, sep);
    sepEastingString = mgrsString.substring(i, i + sep);
    sepEasting = parseFloat(sepEastingString) * accuracyBonus;
    sepNorthingString = mgrsString.substring(i + sep);
    sepNorthing = parseFloat(sepNorthingString) * accuracyBonus;
  }

  easting = sepEasting + east100k;
  northing = sepNorthing + north100k;

  return {
    easting: easting,
    northing: northing,
    zoneLetter: zoneLetter,
    zoneNumber: zoneNumber,
    accuracy: accuracyBonus
  };
}

/**
 * Given the first letter from a two-letter MGRS 100k zone, and given the
 * MGRS table set for the zone number, figure out the easting value that
 * should be added to the other, secondary easting value.
 *
 * @private
 * @param {char} e The first letter from a two-letter MGRS 100´k zone.
 * @param {number} set The MGRS table set for the zone number.
 * @return {number} The easting value for the given letter and set.
 */
function getEastingFromChar(e, set) {
  // colOrigin is the letter at the origin of the set for the
  // column
  var curCol = SET_ORIGIN_COLUMN_LETTERS.charCodeAt(set - 1);
  var eastingValue = 100000.0;
  var rewindMarker = false;

  while (curCol !== e.charCodeAt(0)) {
    curCol++;
    if (curCol === I) {
      curCol++;
    }
    if (curCol === O) {
      curCol++;
    }
    if (curCol > Z) {
      if (rewindMarker) {
        throw ("Bad character: " + e);
      }
      curCol = A;
      rewindMarker = true;
    }
    eastingValue += 100000.0;
  }

  return eastingValue;
}

/**
 * Given the second letter from a two-letter MGRS 100k zone, and given the
 * MGRS table set for the zone number, figure out the northing value that
 * should be added to the other, secondary northing value. You have to
 * remember that Northings are determined from the equator, and the vertical
 * cycle of letters mean a 2000000 additional northing meters. This happens
 * approx. every 18 degrees of latitude. This method does *NOT* count any
 * additional northings. You have to figure out how many 2000000 meters need
 * to be added for the zone letter of the MGRS coordinate.
 *
 * @private
 * @param {char} n Second letter of the MGRS 100k zone
 * @param {number} set The MGRS table set number, which is dependent on the
 *     UTM zone number.
 * @return {number} The northing value for the given letter and set.
 */
function getNorthingFromChar(n, set) {

  if (n > 'V') {
    throw ("MGRSPoint given invalid Northing " + n);
  }

  // rowOrigin is the letter at the origin of the set for the
  // column
  var curRow = SET_ORIGIN_ROW_LETTERS.charCodeAt(set - 1);
  var northingValue = 0.0;
  var rewindMarker = false;

  while (curRow !== n.charCodeAt(0)) {
    curRow++;
    if (curRow === I) {
      curRow++;
    }
    if (curRow === O) {
      curRow++;
    }
    // fixing a bug making whole application hang in this loop
    // when 'n' is a wrong character
    if (curRow > V) {
      if (rewindMarker) { // making sure that this loop ends
        throw ("Bad character: " + n);
      }
      curRow = A;
      rewindMarker = true;
    }
    northingValue += 100000.0;
  }

  return northingValue;
}

/**
 * The function getMinNorthing returns the minimum northing value of a MGRS
 * zone.
 *
 * Ported from Geotrans' c Lattitude_Band_Value structure table.
 *
 * @private
 * @param {char} zoneLetter The MGRS zone to get the min northing for.
 * @return {number}
 */
function getMinNorthing(zoneLetter) {
  var northing;
  switch (zoneLetter) {
  case 'C':
    northing = 1100000.0;
    break;
  case 'D':
    northing = 2000000.0;
    break;
  case 'E':
    northing = 2800000.0;
    break;
  case 'F':
    northing = 3700000.0;
    break;
  case 'G':
    northing = 4600000.0;
    break;
  case 'H':
    northing = 5500000.0;
    break;
  case 'J':
    northing = 6400000.0;
    break;
  case 'K':
    northing = 7300000.0;
    break;
  case 'L':
    northing = 8200000.0;
    break;
  case 'M':
    northing = 9100000.0;
    break;
  case 'N':
    northing = 0.0;
    break;
  case 'P':
    northing = 800000.0;
    break;
  case 'Q':
    northing = 1700000.0;
    break;
  case 'R':
    northing = 2600000.0;
    break;
  case 'S':
    northing = 3500000.0;
    break;
  case 'T':
    northing = 4400000.0;
    break;
  case 'U':
    northing = 5300000.0;
    break;
  case 'V':
    northing = 6200000.0;
    break;
  case 'W':
    northing = 7000000.0;
    break;
  case 'X':
    northing = 7900000.0;
    break;
  default:
    northing = -1.0;
  }
  if (northing >= 0.0) {
    return northing;
  }
  else {
    throw ("Invalid zone letter: " + zoneLetter);
  }

}


/***/ }),

/***/ "./node_modules/proj4/lib/Point.js":
/*!*****************************************!*\
  !*** ./node_modules/proj4/lib/Point.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mgrs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mgrs */ "./node_modules/mgrs/mgrs.js");


function Point(x, y, z) {
  if (!(this instanceof Point)) {
    return new Point(x, y, z);
  }
  if (Array.isArray(x)) {
    this.x = x[0];
    this.y = x[1];
    this.z = x[2] || 0.0;
  } else if(typeof x === 'object') {
    this.x = x.x;
    this.y = x.y;
    this.z = x.z || 0.0;
  } else if (typeof x === 'string' && typeof y === 'undefined') {
    var coords = x.split(',');
    this.x = parseFloat(coords[0], 10);
    this.y = parseFloat(coords[1], 10);
    this.z = parseFloat(coords[2], 10) || 0.0;
  } else {
    this.x = x;
    this.y = y;
    this.z = z || 0.0;
  }
  console.warn('proj4.Point will be removed in version 3, use proj4.toPoint');
}

Point.fromMGRS = function(mgrsStr) {
  return new Point(Object(mgrs__WEBPACK_IMPORTED_MODULE_0__["toPoint"])(mgrsStr));
};
Point.prototype.toMGRS = function(accuracy) {
  return Object(mgrs__WEBPACK_IMPORTED_MODULE_0__["forward"])([this.x, this.y], accuracy);
};
/* harmony default export */ __webpack_exports__["default"] = (Point);


/***/ }),

/***/ "./node_modules/proj4/lib/Proj.js":
/*!****************************************!*\
  !*** ./node_modules/proj4/lib/Proj.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parseCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parseCode */ "./node_modules/proj4/lib/parseCode.js");
/* harmony import */ var _extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extend */ "./node_modules/proj4/lib/extend.js");
/* harmony import */ var _projections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projections */ "./node_modules/proj4/lib/projections.js");
/* harmony import */ var _deriveConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deriveConstants */ "./node_modules/proj4/lib/deriveConstants.js");
/* harmony import */ var _constants_Datum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/Datum */ "./node_modules/proj4/lib/constants/Datum.js");
/* harmony import */ var _datum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datum */ "./node_modules/proj4/lib/datum.js");
/* harmony import */ var _match__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./match */ "./node_modules/proj4/lib/match.js");
/* harmony import */ var _nadgrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nadgrid */ "./node_modules/proj4/lib/nadgrid.js");









function Projection(srsCode,callback) {
  if (!(this instanceof Projection)) {
    return new Projection(srsCode);
  }
  callback = callback || function(error){
    if(error){
      throw error;
    }
  };
  var json = Object(_parseCode__WEBPACK_IMPORTED_MODULE_0__["default"])(srsCode);
  if(typeof json !== 'object'){
    callback(srsCode);
    return;
  }
  var ourProj = Projection.projections.get(json.projName);
  if(!ourProj){
    callback(srsCode);
    return;
  }
  if (json.datumCode && json.datumCode !== 'none') {
    var datumDef = Object(_match__WEBPACK_IMPORTED_MODULE_6__["default"])(_constants_Datum__WEBPACK_IMPORTED_MODULE_4__["default"], json.datumCode);
    if (datumDef) {
      json.datum_params = json.datum_params || (datumDef.towgs84 ? datumDef.towgs84.split(',') : null);
      json.ellps = datumDef.ellipse;
      json.datumName = datumDef.datumName ? datumDef.datumName : json.datumCode;
    }
  }
  json.k0 = json.k0 || 1.0;
  json.axis = json.axis || 'enu';
  json.ellps = json.ellps || 'wgs84';
  json.lat1 = json.lat1 || json.lat0; // Lambert_Conformal_Conic_1SP, for example, needs this

  var sphere_ = Object(_deriveConstants__WEBPACK_IMPORTED_MODULE_3__["sphere"])(json.a, json.b, json.rf, json.ellps, json.sphere);
  var ecc = Object(_deriveConstants__WEBPACK_IMPORTED_MODULE_3__["eccentricity"])(sphere_.a, sphere_.b, sphere_.rf, json.R_A);
  var nadgrids = Object(_nadgrid__WEBPACK_IMPORTED_MODULE_7__["getNadgrids"])(json.nadgrids);
  var datumObj = json.datum || Object(_datum__WEBPACK_IMPORTED_MODULE_5__["default"])(json.datumCode, json.datum_params, sphere_.a, sphere_.b, ecc.es, ecc.ep2,
    nadgrids);

  Object(_extend__WEBPACK_IMPORTED_MODULE_1__["default"])(this, json); // transfer everything over from the projection because we don't know what we'll need
  Object(_extend__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ourProj); // transfer all the methods from the projection

  // copy the 4 things over we calulated in deriveConstants.sphere
  this.a = sphere_.a;
  this.b = sphere_.b;
  this.rf = sphere_.rf;
  this.sphere = sphere_.sphere;

  // copy the 3 things we calculated in deriveConstants.eccentricity
  this.es = ecc.es;
  this.e = ecc.e;
  this.ep2 = ecc.ep2;

  // add in the datum object
  this.datum = datumObj;

  // init the projection
  this.init();

  // legecy callback from back in the day when it went to spatialreference.org
  callback(null, this);

}
Projection.projections = _projections__WEBPACK_IMPORTED_MODULE_2__["default"];
Projection.projections.start();
/* harmony default export */ __webpack_exports__["default"] = (Projection);


/***/ }),

/***/ "./node_modules/proj4/lib/adjust_axis.js":
/*!***********************************************!*\
  !*** ./node_modules/proj4/lib/adjust_axis.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(crs, denorm, point) {
  var xin = point.x,
    yin = point.y,
    zin = point.z || 0.0;
  var v, t, i;
  var out = {};
  for (i = 0; i < 3; i++) {
    if (denorm && i === 2 && point.z === undefined) {
      continue;
    }
    if (i === 0) {
      v = xin;
      if ("ew".indexOf(crs.axis[i]) !== -1) {
        t = 'x';
      } else {
        t = 'y';
      }

    }
    else if (i === 1) {
      v = yin;
      if ("ns".indexOf(crs.axis[i]) !== -1) {
        t = 'y';
      } else {
        t = 'x';
      }
    }
    else {
      v = zin;
      t = 'z';
    }
    switch (crs.axis[i]) {
    case 'e':
      out[t] = v;
      break;
    case 'w':
      out[t] = -v;
      break;
    case 'n':
      out[t] = v;
      break;
    case 's':
      out[t] = -v;
      break;
    case 'u':
      if (point[t] !== undefined) {
        out.z = v;
      }
      break;
    case 'd':
      if (point[t] !== undefined) {
        out.z = -v;
      }
      break;
    default:
      //console.log("ERROR: unknow axis ("+crs.axis[i]+") - check definition of "+crs.projName);
      return null;
    }
  }
  return out;
});


/***/ }),

/***/ "./node_modules/proj4/lib/checkSanity.js":
/*!***********************************************!*\
  !*** ./node_modules/proj4/lib/checkSanity.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (point) {
  checkCoord(point.x);
  checkCoord(point.y);
});
function checkCoord(num) {
  if (typeof Number.isFinite === 'function') {
    if (Number.isFinite(num)) {
      return;
    }
    throw new TypeError('coordinates must be finite numbers');
  }
  if (typeof num !== 'number' || num !== num || !isFinite(num)) {
    throw new TypeError('coordinates must be finite numbers');
  }
}


/***/ }),

/***/ "./node_modules/proj4/lib/common/adjust_lat.js":
/*!*****************************************************!*\
  !*** ./node_modules/proj4/lib/common/adjust_lat.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/values */ "./node_modules/proj4/lib/constants/values.js");
/* harmony import */ var _sign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign */ "./node_modules/proj4/lib/common/sign.js");



/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return (Math.abs(x) < _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"]) ? x : (x - (Object(_sign__WEBPACK_IMPORTED_MODULE_1__["default"])(x) * Math.PI));
});


/***/ }),

/***/ "./node_modules/proj4/lib/common/adjust_lon.js":
/*!*****************************************************!*\
  !*** ./node_modules/proj4/lib/common/adjust_lon.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/values */ "./node_modules/proj4/lib/constants/values.js");
/* harmony import */ var _sign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign */ "./node_modules/proj4/lib/common/sign.js");




/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return (Math.abs(x) <= _constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"]) ? x : (x - (Object(_sign__WEBPACK_IMPORTED_MODULE_1__["default"])(x) * _constants_values__WEBPACK_IMPORTED_MODULE_0__["TWO_PI"]));
});


/***/ }),

/***/ "./node_modules/proj4/lib/common/adjust_zone.js":
/*!******************************************************!*\
  !*** ./node_modules/proj4/lib/common/adjust_zone.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adjust_lon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adjust_lon */ "./node_modules/proj4/lib/common/adjust_lon.js");


/* harmony default export */ __webpack_exports__["default"] = (function(zone, lon) {
  if (zone === undefined) {
    zone = Math.floor((Object(_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(lon) + Math.PI) * 30 / Math.PI) + 1;

    if (zone < 0) {
      return 0;
    } else if (zone > 60) {
      return 60;
    }
  }
  return zone;
});


/***/ }),

/***/ "./node_modules/proj4/lib/common/asinhy.js":
/*!*************************************************!*\
  !*** ./node_modules/proj4/lib/common/asinhy.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hypot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hypot */ "./node_modules/proj4/lib/common/hypot.js");
/* harmony import */ var _log1py__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log1py */ "./node_modules/proj4/lib/common/log1py.js");



/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  var y = Math.abs(x);
  y = Object(_log1py__WEBPACK_IMPORTED_MODULE_1__["default"])(y * (1 + y / (Object(_hypot__WEBPACK_IMPORTED_MODULE_0__["default"])(1, y) + 1)));

  return x < 0 ? -y : y;
});


/***/ }),

/***/ "./node_modules/proj4/lib/common/asinz.js":
/*!************************************************!*\
  !*** ./node_modules/proj4/lib/common/asinz.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  if (Math.abs(x) > 1) {
    x = (x > 1) ? 1 : -1;
  }
  return Math.asin(x);
});

/***/ }),

/***/ "./node_modules/proj4/lib/common/clens.js":
/*!************************************************!*\
  !*** ./node_modules/proj4/lib/common/clens.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(pp, arg_r) {
  var r = 2 * Math.cos(arg_r);
  var i = pp.length - 1;
  var hr1 = pp[i];
  var hr2 = 0;
  var hr;

  while (--i >= 0) {
    hr = -hr2 + r * hr1 + pp[i];
    hr2 = hr1;
    hr1 = hr;
  }

  return Math.sin(arg_r) * hr;
});


/***/ }),

/***/ "./node_modules/proj4/lib/common/clens_cmplx.js":
/*!******************************************************!*\
  !*** ./node_modules/proj4/lib/common/clens_cmplx.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sinh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sinh */ "./node_modules/proj4/lib/common/sinh.js");
/* harmony import */ var _cosh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cosh */ "./node_modules/proj4/lib/common/cosh.js");



/* harmony default export */ __webpack_exports__["default"] = (function(pp, arg_r, arg_i) {
  var sin_arg_r = Math.sin(arg_r);
  var cos_arg_r = Math.cos(arg_r);
  var sinh_arg_i = Object(_sinh__WEBPACK_IMPORTED_MODULE_0__["default"])(arg_i);
  var cosh_arg_i = Object(_cosh__WEBPACK_IMPORTED_MODULE_1__["default"])(arg_i);
  var r = 2 * cos_arg_r * cosh_arg_i;
  var i = -2 * sin_arg_r * sinh_arg_i;
  var j = pp.length - 1;
  var hr = pp[j];
  var hi1 = 0;
  var hr1 = 0;
  var hi = 0;
  var hr2;
  var hi2;

  while (--j >= 0) {
    hr2 = hr1;
    hi2 = hi1;
    hr1 = hr;
    hi1 = hi;
    hr = -hr2 + r * hr1 - i * hi1 + pp[j];
    hi = -hi2 + i * hr1 + r * hi1;
  }

  r = sin_arg_r * cosh_arg_i;
  i = cos_arg_r * sinh_arg_i;

  return [r * hr - i * hi, r * hi + i * hr];
});


/***/ }),

/***/ "./node_modules/proj4/lib/common/cosh.js":
/*!***********************************************!*\
  !*** ./node_modules/proj4/lib/common/cosh.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  var r = Math.exp(x);
  r = (r + 1 / r) / 2;
  return r;
});

/***/ }),

/***/ "./node_modules/proj4/lib/common/e0fn.js":
/*!***********************************************!*\
  !*** ./node_modules/proj4/lib/common/e0fn.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return (1 - 0.25 * x * (1 + x / 16 * (3 + 1.25 * x)));
});

/***/ }),

/***/ "./node_modules/proj4/lib/common/e1fn.js":
/*!***********************************************!*\
  !*** ./node_modules/proj4/lib/common/e1fn.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return (0.375 * x * (1 + 0.25 * x * (1 + 0.46875 * x)));
});

/***/ }),

/***/ "./node_modules/proj4/lib/common/e2fn.js":
/*!***********************************************!*\
  !*** ./node_modules/proj4/lib/common/e2fn.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return (0.05859375 * x * x * (1 + 0.75 * x));
});

/***/ }),

/***/ "./node_modules/proj4/lib/common/e3fn.js":
/*!***********************************************!*\
  !*** ./node_modules/proj4/lib/common/e3fn.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return (x * x * x * (35 / 3072));
});

/***/ }),

/***/ "./node_modules/proj4/lib/common/gN.js":
/*!*********************************************!*\
  !*** ./node_modules/proj4/lib/common/gN.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, e, sinphi) {
  var temp = e * sinphi;
  return a / Math.sqrt(1 - temp * temp);
});

/***/ }),

/***/ "./node_modules/proj4/lib/common/gatg.js":
/*!***********************************************!*\
  !*** ./node_modules/proj4/lib/common/gatg.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(pp, B) {
  var cos_2B = 2 * Math.cos(2 * B);
  var i = pp.length - 1;
  var h1 = pp[i];
  var h2 = 0;
  var h;

  while (--i >= 0) {
    h = -h2 + cos_2B * h1 + pp[i];
    h2 = h1;
    h1 = h;
  }

  return (B + h * Math.sin(2 * B));
});


/***/ }),

/***/ "./node_modules/proj4/lib/common/hypot.js":
/*!************************************************!*\
  !*** ./node_modules/proj4/lib/common/hypot.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  var a = Math.max(x, y);
  var b = Math.min(x, y) / (a ? a : 1);

  return a * Math.sqrt(1 + Math.pow(b, 2));
});


/***/ }),

/***/ "./node_modules/proj4/lib/common/imlfn.js":
/*!************************************************!*\
  !*** ./node_modules/proj4/lib/common/imlfn.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(ml, e0, e1, e2, e3) {
  var phi;
  var dphi;

  phi = ml / e0;
  for (var i = 0; i < 15; i++) {
    dphi = (ml - (e0 * phi - e1 * Math.sin(2 * phi) + e2 * Math.sin(4 * phi) - e3 * Math.sin(6 * phi))) / (e0 - 2 * e1 * Math.cos(2 * phi) + 4 * e2 * Math.cos(4 * phi) - 6 * e3 * Math.cos(6 * phi));
    phi += dphi;
    if (Math.abs(dphi) <= 0.0000000001) {
      return phi;
    }
  }

  //..reportError("IMLFN-CONV:Latitude failed to converge after 15 iterations");
  return NaN;
});

/***/ }),

/***/ "./node_modules/proj4/lib/common/iqsfnz.js":
/*!*************************************************!*\
  !*** ./node_modules/proj4/lib/common/iqsfnz.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/values */ "./node_modules/proj4/lib/constants/values.js");


/* harmony default export */ __webpack_exports__["default"] = (function(eccent, q) {
  var temp = 1 - (1 - eccent * eccent) / (2 * eccent) * Math.log((1 - eccent) / (1 + eccent));
  if (Math.abs(Math.abs(q) - temp) < 1.0E-6) {
    if (q < 0) {
      return (-1 * _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"]);
    }
    else {
      return _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
    }
  }
  //var phi = 0.5* q/(1-eccent*eccent);
  var phi = Math.asin(0.5 * q);
  var dphi;
  var sin_phi;
  var cos_phi;
  var con;
  for (var i = 0; i < 30; i++) {
    sin_phi = Math.sin(phi);
    cos_phi = Math.cos(phi);
    con = eccent * sin_phi;
    dphi = Math.pow(1 - con * con, 2) / (2 * cos_phi) * (q / (1 - eccent * eccent) - sin_phi / (1 - con * con) + 0.5 / eccent * Math.log((1 - con) / (1 + con)));
    phi += dphi;
    if (Math.abs(dphi) <= 0.0000000001) {
      return phi;
    }
  }

  //console.log("IQSFN-CONV:Latitude failed to converge after 30 iterations");
  return NaN;
});


/***/ }),

/***/ "./node_modules/proj4/lib/common/log1py.js":
/*!*************************************************!*\
  !*** ./node_modules/proj4/lib/common/log1py.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  var y = 1 + x;
  var z = y - 1;

  return z === 0 ? x : x * Math.log(y) / z;
});


/***/ }),

/***/ "./node_modules/proj4/lib/common/mlfn.js":
/*!***********************************************!*\
  !*** ./node_modules/proj4/lib/common/mlfn.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(e0, e1, e2, e3, phi) {
  return (e0 * phi - e1 * Math.sin(2 * phi) + e2 * Math.sin(4 * phi) - e3 * Math.sin(6 * phi));
});

/***/ }),

/***/ "./node_modules/proj4/lib/common/msfnz.js":
/*!************************************************!*\
  !*** ./node_modules/proj4/lib/common/msfnz.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(eccent, sinphi, cosphi) {
  var con = eccent * sinphi;
  return cosphi / (Math.sqrt(1 - con * con));
});

/***/ }),

/***/ "./node_modules/proj4/lib/common/phi2z.js":
/*!************************************************!*\
  !*** ./node_modules/proj4/lib/common/phi2z.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/values */ "./node_modules/proj4/lib/constants/values.js");


/* harmony default export */ __webpack_exports__["default"] = (function(eccent, ts) {
  var eccnth = 0.5 * eccent;
  var con, dphi;
  var phi = _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] - 2 * Math.atan(ts);
  for (var i = 0; i <= 15; i++) {
    con = eccent * Math.sin(phi);
    dphi = _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] - 2 * Math.atan(ts * (Math.pow(((1 - con) / (1 + con)), eccnth))) - phi;
    phi += dphi;
    if (Math.abs(dphi) <= 0.0000000001) {
      return phi;
    }
  }
  //console.log("phi2z has NoConvergence");
  return -9999;
});


/***/ }),

/***/ "./node_modules/proj4/lib/common/pj_enfn.js":
/*!**************************************************!*\
  !*** ./node_modules/proj4/lib/common/pj_enfn.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var C00 = 1;
var C02 = 0.25;
var C04 = 0.046875;
var C06 = 0.01953125;
var C08 = 0.01068115234375;
var C22 = 0.75;
var C44 = 0.46875;
var C46 = 0.01302083333333333333;
var C48 = 0.00712076822916666666;
var C66 = 0.36458333333333333333;
var C68 = 0.00569661458333333333;
var C88 = 0.3076171875;

/* harmony default export */ __webpack_exports__["default"] = (function(es) {
  var en = [];
  en[0] = C00 - es * (C02 + es * (C04 + es * (C06 + es * C08)));
  en[1] = es * (C22 - es * (C04 + es * (C06 + es * C08)));
  var t = es * es;
  en[2] = t * (C44 - es * (C46 + es * C48));
  t *= es;
  en[3] = t * (C66 - es * C68);
  en[4] = t * es * C88;
  return en;
});

/***/ }),

/***/ "./node_modules/proj4/lib/common/pj_inv_mlfn.js":
/*!******************************************************!*\
  !*** ./node_modules/proj4/lib/common/pj_inv_mlfn.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pj_mlfn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pj_mlfn */ "./node_modules/proj4/lib/common/pj_mlfn.js");
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/values */ "./node_modules/proj4/lib/constants/values.js");



var MAX_ITER = 20;

/* harmony default export */ __webpack_exports__["default"] = (function(arg, es, en) {
  var k = 1 / (1 - es);
  var phi = arg;
  for (var i = MAX_ITER; i; --i) { /* rarely goes over 2 iterations */
    var s = Math.sin(phi);
    var t = 1 - es * s * s;
    //t = this.pj_mlfn(phi, s, Math.cos(phi), en) - arg;
    //phi -= t * (t * Math.sqrt(t)) * k;
    t = (Object(_pj_mlfn__WEBPACK_IMPORTED_MODULE_0__["default"])(phi, s, Math.cos(phi), en) - arg) * (t * Math.sqrt(t)) * k;
    phi -= t;
    if (Math.abs(t) < _constants_values__WEBPACK_IMPORTED_MODULE_1__["EPSLN"]) {
      return phi;
    }
  }
  //..reportError("cass:pj_inv_mlfn: Convergence error");
  return phi;
});


/***/ }),

/***/ "./node_modules/proj4/lib/common/pj_mlfn.js":
/*!**************************************************!*\
  !*** ./node_modules/proj4/lib/common/pj_mlfn.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(phi, sphi, cphi, en) {
  cphi *= sphi;
  sphi *= sphi;
  return (en[0] * phi - cphi * (en[1] + sphi * (en[2] + sphi * (en[3] + sphi * en[4]))));
});

/***/ }),

/***/ "./node_modules/proj4/lib/common/qsfnz.js":
/*!************************************************!*\
  !*** ./node_modules/proj4/lib/common/qsfnz.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(eccent, sinphi) {
  var con;
  if (eccent > 1.0e-7) {
    con = eccent * sinphi;
    return ((1 - eccent * eccent) * (sinphi / (1 - con * con) - (0.5 / eccent) * Math.log((1 - con) / (1 + con))));
  }
  else {
    return (2 * sinphi);
  }
});

/***/ }),

/***/ "./node_modules/proj4/lib/common/sign.js":
/*!***********************************************!*\
  !*** ./node_modules/proj4/lib/common/sign.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x<0 ? -1 : 1;
});

/***/ }),

/***/ "./node_modules/proj4/lib/common/sinh.js":
/*!***********************************************!*\
  !*** ./node_modules/proj4/lib/common/sinh.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  var r = Math.exp(x);
  r = (r - 1 / r) / 2;
  return r;
});

/***/ }),

/***/ "./node_modules/proj4/lib/common/srat.js":
/*!***********************************************!*\
  !*** ./node_modules/proj4/lib/common/srat.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(esinp, exp) {
  return (Math.pow((1 - esinp) / (1 + esinp), exp));
});

/***/ }),

/***/ "./node_modules/proj4/lib/common/toPoint.js":
/*!**************************************************!*\
  !*** ./node_modules/proj4/lib/common/toPoint.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (array){
  var out = {
    x: array[0],
    y: array[1]
  };
  if (array.length>2) {
    out.z = array[2];
  }
  if (array.length>3) {
    out.m = array[3];
  }
  return out;
});

/***/ }),

/***/ "./node_modules/proj4/lib/common/tsfnz.js":
/*!************************************************!*\
  !*** ./node_modules/proj4/lib/common/tsfnz.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/values */ "./node_modules/proj4/lib/constants/values.js");


/* harmony default export */ __webpack_exports__["default"] = (function(eccent, phi, sinphi) {
  var con = eccent * sinphi;
  var com = 0.5 * eccent;
  con = Math.pow(((1 - con) / (1 + con)), com);
  return (Math.tan(0.5 * (_constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] - phi)) / con);
});


/***/ }),

/***/ "./node_modules/proj4/lib/constants/Datum.js":
/*!***************************************************!*\
  !*** ./node_modules/proj4/lib/constants/Datum.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return exports; });
var exports = {};

exports.wgs84 = {
  towgs84: "0,0,0",
  ellipse: "WGS84",
  datumName: "WGS84"
};

exports.ch1903 = {
  towgs84: "674.374,15.056,405.346",
  ellipse: "bessel",
  datumName: "swiss"
};

exports.ggrs87 = {
  towgs84: "-199.87,74.79,246.62",
  ellipse: "GRS80",
  datumName: "Greek_Geodetic_Reference_System_1987"
};

exports.nad83 = {
  towgs84: "0,0,0",
  ellipse: "GRS80",
  datumName: "North_American_Datum_1983"
};

exports.nad27 = {
  nadgrids: "@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",
  ellipse: "clrk66",
  datumName: "North_American_Datum_1927"
};

exports.potsdam = {
  towgs84: "598.1,73.7,418.2,0.202,0.045,-2.455,6.7",
  ellipse: "bessel",
  datumName: "Potsdam Rauenberg 1950 DHDN"
};

exports.carthage = {
  towgs84: "-263.0,6.0,431.0",
  ellipse: "clark80",
  datumName: "Carthage 1934 Tunisia"
};

exports.hermannskogel = {
  towgs84: "577.326,90.129,463.919,5.137,1.474,5.297,2.4232",
  ellipse: "bessel",
  datumName: "Hermannskogel"
};

exports.osni52 = {
  towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",
  ellipse: "airy",
  datumName: "Irish National"
};

exports.ire65 = {
  towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",
  ellipse: "mod_airy",
  datumName: "Ireland 1965"
};

exports.rassadiran = {
  towgs84: "-133.63,-157.5,-158.62",
  ellipse: "intl",
  datumName: "Rassadiran"
};

exports.nzgd49 = {
  towgs84: "59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",
  ellipse: "intl",
  datumName: "New Zealand Geodetic Datum 1949"
};

exports.osgb36 = {
  towgs84: "446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",
  ellipse: "airy",
  datumName: "Airy 1830"
};

exports.s_jtsk = {
  towgs84: "589,76,480",
  ellipse: 'bessel',
  datumName: 'S-JTSK (Ferro)'
};

exports.beduaram = {
  towgs84: '-106,-87,188',
  ellipse: 'clrk80',
  datumName: 'Beduaram'
};

exports.gunung_segara = {
  towgs84: '-403,684,41',
  ellipse: 'bessel',
  datumName: 'Gunung Segara Jakarta'
};

exports.rnb72 = {
  towgs84: "106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",
  ellipse: "intl",
  datumName: "Reseau National Belge 1972"
};


/***/ }),

/***/ "./node_modules/proj4/lib/constants/Ellipsoid.js":
/*!*******************************************************!*\
  !*** ./node_modules/proj4/lib/constants/Ellipsoid.js ***!
  \*******************************************************/
/*! exports provided: default, WGS84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return exports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WGS84", function() { return WGS84; });
var exports = {};

exports.MERIT = {
  a: 6378137.0,
  rf: 298.257,
  ellipseName: "MERIT 1983"
};

exports.SGS85 = {
  a: 6378136.0,
  rf: 298.257,
  ellipseName: "Soviet Geodetic System 85"
};

exports.GRS80 = {
  a: 6378137.0,
  rf: 298.257222101,
  ellipseName: "GRS 1980(IUGG, 1980)"
};

exports.IAU76 = {
  a: 6378140.0,
  rf: 298.257,
  ellipseName: "IAU 1976"
};

exports.airy = {
  a: 6377563.396,
  b: 6356256.910,
  ellipseName: "Airy 1830"
};

exports.APL4 = {
  a: 6378137,
  rf: 298.25,
  ellipseName: "Appl. Physics. 1965"
};

exports.NWL9D = {
  a: 6378145.0,
  rf: 298.25,
  ellipseName: "Naval Weapons Lab., 1965"
};

exports.mod_airy = {
  a: 6377340.189,
  b: 6356034.446,
  ellipseName: "Modified Airy"
};

exports.andrae = {
  a: 6377104.43,
  rf: 300.0,
  ellipseName: "Andrae 1876 (Den., Iclnd.)"
};

exports.aust_SA = {
  a: 6378160.0,
  rf: 298.25,
  ellipseName: "Australian Natl & S. Amer. 1969"
};

exports.GRS67 = {
  a: 6378160.0,
  rf: 298.2471674270,
  ellipseName: "GRS 67(IUGG 1967)"
};

exports.bessel = {
  a: 6377397.155,
  rf: 299.1528128,
  ellipseName: "Bessel 1841"
};

exports.bess_nam = {
  a: 6377483.865,
  rf: 299.1528128,
  ellipseName: "Bessel 1841 (Namibia)"
};

exports.clrk66 = {
  a: 6378206.4,
  b: 6356583.8,
  ellipseName: "Clarke 1866"
};

exports.clrk80 = {
  a: 6378249.145,
  rf: 293.4663,
  ellipseName: "Clarke 1880 mod."
};

exports.clrk58 = {
  a: 6378293.645208759,
  rf: 294.2606763692654,
  ellipseName: "Clarke 1858"
};

exports.CPM = {
  a: 6375738.7,
  rf: 334.29,
  ellipseName: "Comm. des Poids et Mesures 1799"
};

exports.delmbr = {
  a: 6376428.0,
  rf: 311.5,
  ellipseName: "Delambre 1810 (Belgium)"
};

exports.engelis = {
  a: 6378136.05,
  rf: 298.2566,
  ellipseName: "Engelis 1985"
};

exports.evrst30 = {
  a: 6377276.345,
  rf: 300.8017,
  ellipseName: "Everest 1830"
};

exports.evrst48 = {
  a: 6377304.063,
  rf: 300.8017,
  ellipseName: "Everest 1948"
};

exports.evrst56 = {
  a: 6377301.243,
  rf: 300.8017,
  ellipseName: "Everest 1956"
};

exports.evrst69 = {
  a: 6377295.664,
  rf: 300.8017,
  ellipseName: "Everest 1969"
};

exports.evrstSS = {
  a: 6377298.556,
  rf: 300.8017,
  ellipseName: "Everest (Sabah & Sarawak)"
};

exports.fschr60 = {
  a: 6378166.0,
  rf: 298.3,
  ellipseName: "Fischer (Mercury Datum) 1960"
};

exports.fschr60m = {
  a: 6378155.0,
  rf: 298.3,
  ellipseName: "Fischer 1960"
};

exports.fschr68 = {
  a: 6378150.0,
  rf: 298.3,
  ellipseName: "Fischer 1968"
};

exports.helmert = {
  a: 6378200.0,
  rf: 298.3,
  ellipseName: "Helmert 1906"
};

exports.hough = {
  a: 6378270.0,
  rf: 297.0,
  ellipseName: "Hough"
};

exports.intl = {
  a: 6378388.0,
  rf: 297.0,
  ellipseName: "International 1909 (Hayford)"
};

exports.kaula = {
  a: 6378163.0,
  rf: 298.24,
  ellipseName: "Kaula 1961"
};

exports.lerch = {
  a: 6378139.0,
  rf: 298.257,
  ellipseName: "Lerch 1979"
};

exports.mprts = {
  a: 6397300.0,
  rf: 191.0,
  ellipseName: "Maupertius 1738"
};

exports.new_intl = {
  a: 6378157.5,
  b: 6356772.2,
  ellipseName: "New International 1967"
};

exports.plessis = {
  a: 6376523.0,
  rf: 6355863.0,
  ellipseName: "Plessis 1817 (France)"
};

exports.krass = {
  a: 6378245.0,
  rf: 298.3,
  ellipseName: "Krassovsky, 1942"
};

exports.SEasia = {
  a: 6378155.0,
  b: 6356773.3205,
  ellipseName: "Southeast Asia"
};

exports.walbeck = {
  a: 6376896.0,
  b: 6355834.8467,
  ellipseName: "Walbeck"
};

exports.WGS60 = {
  a: 6378165.0,
  rf: 298.3,
  ellipseName: "WGS 60"
};

exports.WGS66 = {
  a: 6378145.0,
  rf: 298.25,
  ellipseName: "WGS 66"
};

exports.WGS7 = {
  a: 6378135.0,
  rf: 298.26,
  ellipseName: "WGS 72"
};

var WGS84 = exports.WGS84 = {
  a: 6378137.0,
  rf: 298.257223563,
  ellipseName: "WGS 84"
};

exports.sphere = {
  a: 6370997.0,
  b: 6370997.0,
  ellipseName: "Normal Sphere (r=6370997)"
};


/***/ }),

/***/ "./node_modules/proj4/lib/constants/PrimeMeridian.js":
/*!***********************************************************!*\
  !*** ./node_modules/proj4/lib/constants/PrimeMeridian.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return exports; });
var exports = {};


exports.greenwich = 0.0; //"0dE",
exports.lisbon = -9.131906111111; //"9d07'54.862\"W",
exports.paris = 2.337229166667; //"2d20'14.025\"E",
exports.bogota = -74.080916666667; //"74d04'51.3\"W",
exports.madrid = -3.687938888889; //"3d41'16.58\"W",
exports.rome = 12.452333333333; //"12d27'8.4\"E",
exports.bern = 7.439583333333; //"7d26'22.5\"E",
exports.jakarta = 106.807719444444; //"106d48'27.79\"E",
exports.ferro = -17.666666666667; //"17d40'W",
exports.brussels = 4.367975; //"4d22'4.71\"E",
exports.stockholm = 18.058277777778; //"18d3'29.8\"E",
exports.athens = 23.7163375; //"23d42'58.815\"E",
exports.oslo = 10.722916666667; //"10d43'22.5\"E"


/***/ }),

/***/ "./node_modules/proj4/lib/constants/units.js":
/*!***************************************************!*\
  !*** ./node_modules/proj4/lib/constants/units.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  ft: {to_meter: 0.3048},
  'us-ft': {to_meter: 1200 / 3937}
});


/***/ }),

/***/ "./node_modules/proj4/lib/constants/values.js":
/*!****************************************************!*\
  !*** ./node_modules/proj4/lib/constants/values.js ***!
  \****************************************************/
/*! exports provided: PJD_3PARAM, PJD_7PARAM, PJD_GRIDSHIFT, PJD_WGS84, PJD_NODATUM, SRS_WGS84_SEMIMAJOR, SRS_WGS84_SEMIMINOR, SRS_WGS84_ESQUARED, SEC_TO_RAD, HALF_PI, SIXTH, RA4, RA6, EPSLN, D2R, R2D, FORTPI, TWO_PI, SPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PJD_3PARAM", function() { return PJD_3PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PJD_7PARAM", function() { return PJD_7PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PJD_GRIDSHIFT", function() { return PJD_GRIDSHIFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PJD_WGS84", function() { return PJD_WGS84; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PJD_NODATUM", function() { return PJD_NODATUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SRS_WGS84_SEMIMAJOR", function() { return SRS_WGS84_SEMIMAJOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SRS_WGS84_SEMIMINOR", function() { return SRS_WGS84_SEMIMINOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SRS_WGS84_ESQUARED", function() { return SRS_WGS84_ESQUARED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEC_TO_RAD", function() { return SEC_TO_RAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HALF_PI", function() { return HALF_PI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIXTH", function() { return SIXTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RA4", function() { return RA4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RA6", function() { return RA6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPSLN", function() { return EPSLN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D2R", function() { return D2R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R2D", function() { return R2D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORTPI", function() { return FORTPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TWO_PI", function() { return TWO_PI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPI", function() { return SPI; });
var PJD_3PARAM = 1;
var PJD_7PARAM = 2;
var PJD_GRIDSHIFT = 3;
var PJD_WGS84 = 4; // WGS84 or equivalent
var PJD_NODATUM = 5; // WGS84 or equivalent
var SRS_WGS84_SEMIMAJOR = 6378137.0;  // only used in grid shift transforms
var SRS_WGS84_SEMIMINOR = 6356752.314;  // only used in grid shift transforms
var SRS_WGS84_ESQUARED = 0.0066943799901413165; // only used in grid shift transforms
var SEC_TO_RAD = 4.84813681109535993589914102357e-6;
var HALF_PI = Math.PI/2;
// ellipoid pj_set_ell.c
var SIXTH = 0.1666666666666666667;
/* 1/6 */
var RA4 = 0.04722222222222222222;
/* 17/360 */
var RA6 = 0.02215608465608465608;
var EPSLN = 1.0e-10;
// you'd think you could use Number.EPSILON above but that makes
// Mollweide get into an infinate loop.

var D2R = 0.01745329251994329577;
var R2D = 57.29577951308232088;
var FORTPI = Math.PI/4;
var TWO_PI = Math.PI * 2;
// SPI is slightly greater than Math.PI, so values that exceed the -180..180
// degree range by a tiny amount don't get wrapped. This prevents points that
// have drifted from their original location along the 180th meridian (due to
// floating point error) from changing their sign.
var SPI = 3.14159265359;


/***/ }),

/***/ "./node_modules/proj4/lib/core.js":
/*!****************************************!*\
  !*** ./node_modules/proj4/lib/core.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Proj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Proj */ "./node_modules/proj4/lib/Proj.js");
/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transform */ "./node_modules/proj4/lib/transform.js");


var wgs84 = Object(_Proj__WEBPACK_IMPORTED_MODULE_0__["default"])('WGS84');

function transformer(from, to, coords, enforceAxis) {
  var transformedArray, out, keys;
  if (Array.isArray(coords)) {
    transformedArray = Object(_transform__WEBPACK_IMPORTED_MODULE_1__["default"])(from, to, coords, enforceAxis) || {x: NaN, y: NaN};
    if (coords.length > 2) {
      if ((typeof from.name !== 'undefined' && from.name === 'geocent') || (typeof to.name !== 'undefined' && to.name === 'geocent')) {
        if (typeof transformedArray.z === 'number') {
          return [transformedArray.x, transformedArray.y, transformedArray.z].concat(coords.splice(3));
        } else {
          return [transformedArray.x, transformedArray.y, coords[2]].concat(coords.splice(3));
        }
      } else {
        return [transformedArray.x, transformedArray.y].concat(coords.splice(2));
      }
    } else {
      return [transformedArray.x, transformedArray.y];
    }
  } else {
    out = Object(_transform__WEBPACK_IMPORTED_MODULE_1__["default"])(from, to, coords, enforceAxis);
    keys = Object.keys(coords);
    if (keys.length === 2) {
      return out;
    }
    keys.forEach(function (key) {
      if ((typeof from.name !== 'undefined' && from.name === 'geocent') || (typeof to.name !== 'undefined' && to.name === 'geocent')) {
        if (key === 'x' || key === 'y' || key === 'z') {
          return;
        }
      } else {
        if (key === 'x' || key === 'y') {
          return;
        }
      }
      out[key] = coords[key];
    });
    return out;
  }
}

function checkProj(item) {
  if (item instanceof _Proj__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    return item;
  }
  if (item.oProj) {
    return item.oProj;
  }
  return Object(_Proj__WEBPACK_IMPORTED_MODULE_0__["default"])(item);
}

function proj4(fromProj, toProj, coord) {
  fromProj = checkProj(fromProj);
  var single = false;
  var obj;
  if (typeof toProj === 'undefined') {
    toProj = fromProj;
    fromProj = wgs84;
    single = true;
  } else if (typeof toProj.x !== 'undefined' || Array.isArray(toProj)) {
    coord = toProj;
    toProj = fromProj;
    fromProj = wgs84;
    single = true;
  }
  toProj = checkProj(toProj);
  if (coord) {
    return transformer(fromProj, toProj, coord);
  } else {
    obj = {
      forward: function (coords, enforceAxis) {
        return transformer(fromProj, toProj, coords, enforceAxis);
      },
      inverse: function (coords, enforceAxis) {
        return transformer(toProj, fromProj, coords, enforceAxis);
      }
    };
    if (single) {
      obj.oProj = toProj;
    }
    return obj;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (proj4);

/***/ }),

/***/ "./node_modules/proj4/lib/datum.js":
/*!*****************************************!*\
  !*** ./node_modules/proj4/lib/datum.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/values */ "./node_modules/proj4/lib/constants/values.js");


function datum(datumCode, datum_params, a, b, es, ep2, nadgrids) {
  var out = {};

  if (datumCode === undefined || datumCode === 'none') {
    out.datum_type = _constants_values__WEBPACK_IMPORTED_MODULE_0__["PJD_NODATUM"];
  } else {
    out.datum_type = _constants_values__WEBPACK_IMPORTED_MODULE_0__["PJD_WGS84"];
  }

  if (datum_params) {
    out.datum_params = datum_params.map(parseFloat);
    if (out.datum_params[0] !== 0 || out.datum_params[1] !== 0 || out.datum_params[2] !== 0) {
      out.datum_type = _constants_values__WEBPACK_IMPORTED_MODULE_0__["PJD_3PARAM"];
    }
    if (out.datum_params.length > 3) {
      if (out.datum_params[3] !== 0 || out.datum_params[4] !== 0 || out.datum_params[5] !== 0 || out.datum_params[6] !== 0) {
        out.datum_type = _constants_values__WEBPACK_IMPORTED_MODULE_0__["PJD_7PARAM"];
        out.datum_params[3] *= _constants_values__WEBPACK_IMPORTED_MODULE_0__["SEC_TO_RAD"];
        out.datum_params[4] *= _constants_values__WEBPACK_IMPORTED_MODULE_0__["SEC_TO_RAD"];
        out.datum_params[5] *= _constants_values__WEBPACK_IMPORTED_MODULE_0__["SEC_TO_RAD"];
        out.datum_params[6] = (out.datum_params[6] / 1000000.0) + 1.0;
      }
    }
  }

  if (nadgrids) {
    out.datum_type = _constants_values__WEBPACK_IMPORTED_MODULE_0__["PJD_GRIDSHIFT"];
    out.grids = nadgrids;
  }
  out.a = a; //datum object also uses these values
  out.b = b;
  out.es = es;
  out.ep2 = ep2;
  return out;
}

/* harmony default export */ __webpack_exports__["default"] = (datum);


/***/ }),

/***/ "./node_modules/proj4/lib/datumUtils.js":
/*!**********************************************!*\
  !*** ./node_modules/proj4/lib/datumUtils.js ***!
  \**********************************************/
/*! exports provided: compareDatums, geodeticToGeocentric, geocentricToGeodetic, geocentricToWgs84, geocentricFromWgs84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareDatums", function() { return compareDatums; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geodeticToGeocentric", function() { return geodeticToGeocentric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geocentricToGeodetic", function() { return geocentricToGeodetic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geocentricToWgs84", function() { return geocentricToWgs84; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geocentricFromWgs84", function() { return geocentricFromWgs84; });
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/values */ "./node_modules/proj4/lib/constants/values.js");


function compareDatums(source, dest) {
  if (source.datum_type !== dest.datum_type) {
    return false; // false, datums are not equal
  } else if (source.a !== dest.a || Math.abs(source.es - dest.es) > 0.000000000050) {
    // the tolerance for es is to ensure that GRS80 and WGS84
    // are considered identical
    return false;
  } else if (source.datum_type === _constants_values__WEBPACK_IMPORTED_MODULE_0__["PJD_3PARAM"]) {
    return (source.datum_params[0] === dest.datum_params[0] && source.datum_params[1] === dest.datum_params[1] && source.datum_params[2] === dest.datum_params[2]);
  } else if (source.datum_type === _constants_values__WEBPACK_IMPORTED_MODULE_0__["PJD_7PARAM"]) {
    return (source.datum_params[0] === dest.datum_params[0] && source.datum_params[1] === dest.datum_params[1] && source.datum_params[2] === dest.datum_params[2] && source.datum_params[3] === dest.datum_params[3] && source.datum_params[4] === dest.datum_params[4] && source.datum_params[5] === dest.datum_params[5] && source.datum_params[6] === dest.datum_params[6]);
  } else {
    return true; // datums are equal
  }
} // cs_compare_datums()

/*
 * The function Convert_Geodetic_To_Geocentric converts geodetic coordinates
 * (latitude, longitude, and height) to geocentric coordinates (X, Y, Z),
 * according to the current ellipsoid parameters.
 *
 *    Latitude  : Geodetic latitude in radians                     (input)
 *    Longitude : Geodetic longitude in radians                    (input)
 *    Height    : Geodetic height, in meters                       (input)
 *    X         : Calculated Geocentric X coordinate, in meters    (output)
 *    Y         : Calculated Geocentric Y coordinate, in meters    (output)
 *    Z         : Calculated Geocentric Z coordinate, in meters    (output)
 *
 */
function geodeticToGeocentric(p, es, a) {
  var Longitude = p.x;
  var Latitude = p.y;
  var Height = p.z ? p.z : 0; //Z value not always supplied

  var Rn; /*  Earth radius at location  */
  var Sin_Lat; /*  Math.sin(Latitude)  */
  var Sin2_Lat; /*  Square of Math.sin(Latitude)  */
  var Cos_Lat; /*  Math.cos(Latitude)  */

  /*
   ** Don't blow up if Latitude is just a little out of the value
   ** range as it may just be a rounding issue.  Also removed longitude
   ** test, it should be wrapped by Math.cos() and Math.sin().  NFW for PROJ.4, Sep/2001.
   */
  if (Latitude < -_constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] && Latitude > -1.001 * _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"]) {
    Latitude = -_constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
  } else if (Latitude > _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] && Latitude < 1.001 * _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"]) {
    Latitude = _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
  } else if (Latitude < -_constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"]) {
    /* Latitude out of range */
    //..reportError('geocent:lat out of range:' + Latitude);
    return { x: -Infinity, y: -Infinity, z: p.z };
  } else if (Latitude > _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"]) {
    /* Latitude out of range */
    return { x: Infinity, y: Infinity, z: p.z };
  }

  if (Longitude > Math.PI) {
    Longitude -= (2 * Math.PI);
  }
  Sin_Lat = Math.sin(Latitude);
  Cos_Lat = Math.cos(Latitude);
  Sin2_Lat = Sin_Lat * Sin_Lat;
  Rn = a / (Math.sqrt(1.0e0 - es * Sin2_Lat));
  return {
    x: (Rn + Height) * Cos_Lat * Math.cos(Longitude),
    y: (Rn + Height) * Cos_Lat * Math.sin(Longitude),
    z: ((Rn * (1 - es)) + Height) * Sin_Lat
  };
} // cs_geodetic_to_geocentric()

function geocentricToGeodetic(p, es, a, b) {
  /* local defintions and variables */
  /* end-criterium of loop, accuracy of sin(Latitude) */
  var genau = 1e-12;
  var genau2 = (genau * genau);
  var maxiter = 30;

  var P; /* distance between semi-minor axis and location */
  var RR; /* distance between center and location */
  var CT; /* sin of geocentric latitude */
  var ST; /* cos of geocentric latitude */
  var RX;
  var RK;
  var RN; /* Earth radius at location */
  var CPHI0; /* cos of start or old geodetic latitude in iterations */
  var SPHI0; /* sin of start or old geodetic latitude in iterations */
  var CPHI; /* cos of searched geodetic latitude */
  var SPHI; /* sin of searched geodetic latitude */
  var SDPHI; /* end-criterium: addition-theorem of sin(Latitude(iter)-Latitude(iter-1)) */
  var iter; /* # of continous iteration, max. 30 is always enough (s.a.) */

  var X = p.x;
  var Y = p.y;
  var Z = p.z ? p.z : 0.0; //Z value not always supplied
  var Longitude;
  var Latitude;
  var Height;

  P = Math.sqrt(X * X + Y * Y);
  RR = Math.sqrt(X * X + Y * Y + Z * Z);

  /*      special cases for latitude and longitude */
  if (P / a < genau) {

    /*  special case, if P=0. (X=0., Y=0.) */
    Longitude = 0.0;

    /*  if (X,Y,Z)=(0.,0.,0.) then Height becomes semi-minor axis
     *  of ellipsoid (=center of mass), Latitude becomes PI/2 */
    if (RR / a < genau) {
      Latitude = _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
      Height = -b;
      return {
        x: p.x,
        y: p.y,
        z: p.z
      };
    }
  } else {
    /*  ellipsoidal (geodetic) longitude
     *  interval: -PI < Longitude <= +PI */
    Longitude = Math.atan2(Y, X);
  }

  /* --------------------------------------------------------------
   * Following iterative algorithm was developped by
   * "Institut for Erdmessung", University of Hannover, July 1988.
   * Internet: www.ife.uni-hannover.de
   * Iterative computation of CPHI,SPHI and Height.
   * Iteration of CPHI and SPHI to 10**-12 radian resp.
   * 2*10**-7 arcsec.
   * --------------------------------------------------------------
   */
  CT = Z / RR;
  ST = P / RR;
  RX = 1.0 / Math.sqrt(1.0 - es * (2.0 - es) * ST * ST);
  CPHI0 = ST * (1.0 - es) * RX;
  SPHI0 = CT * RX;
  iter = 0;

  /* loop to find sin(Latitude) resp. Latitude
   * until |sin(Latitude(iter)-Latitude(iter-1))| < genau */
  do {
    iter++;
    RN = a / Math.sqrt(1.0 - es * SPHI0 * SPHI0);

    /*  ellipsoidal (geodetic) height */
    Height = P * CPHI0 + Z * SPHI0 - RN * (1.0 - es * SPHI0 * SPHI0);

    RK = es * RN / (RN + Height);
    RX = 1.0 / Math.sqrt(1.0 - RK * (2.0 - RK) * ST * ST);
    CPHI = ST * (1.0 - RK) * RX;
    SPHI = CT * RX;
    SDPHI = SPHI * CPHI0 - CPHI * SPHI0;
    CPHI0 = CPHI;
    SPHI0 = SPHI;
  }
  while (SDPHI * SDPHI > genau2 && iter < maxiter);

  /*      ellipsoidal (geodetic) latitude */
  Latitude = Math.atan(SPHI / Math.abs(CPHI));
  return {
    x: Longitude,
    y: Latitude,
    z: Height
  };
} // cs_geocentric_to_geodetic()

/****************************************************************/
// pj_geocentic_to_wgs84( p )
//  p = point to transform in geocentric coordinates (x,y,z)


/** point object, nothing fancy, just allows values to be
    passed back and forth by reference rather than by value.
    Other point classes may be used as long as they have
    x and y properties, which will get modified in the transform method.
*/
function geocentricToWgs84(p, datum_type, datum_params) {

  if (datum_type === _constants_values__WEBPACK_IMPORTED_MODULE_0__["PJD_3PARAM"]) {
    // if( x[io] === HUGE_VAL )
    //    continue;
    return {
      x: p.x + datum_params[0],
      y: p.y + datum_params[1],
      z: p.z + datum_params[2],
    };
  } else if (datum_type === _constants_values__WEBPACK_IMPORTED_MODULE_0__["PJD_7PARAM"]) {
    var Dx_BF = datum_params[0];
    var Dy_BF = datum_params[1];
    var Dz_BF = datum_params[2];
    var Rx_BF = datum_params[3];
    var Ry_BF = datum_params[4];
    var Rz_BF = datum_params[5];
    var M_BF = datum_params[6];
    // if( x[io] === HUGE_VAL )
    //    continue;
    return {
      x: M_BF * (p.x - Rz_BF * p.y + Ry_BF * p.z) + Dx_BF,
      y: M_BF * (Rz_BF * p.x + p.y - Rx_BF * p.z) + Dy_BF,
      z: M_BF * (-Ry_BF * p.x + Rx_BF * p.y + p.z) + Dz_BF
    };
  }
} // cs_geocentric_to_wgs84

/****************************************************************/
// pj_geocentic_from_wgs84()
//  coordinate system definition,
//  point to transform in geocentric coordinates (x,y,z)
function geocentricFromWgs84(p, datum_type, datum_params) {

  if (datum_type === _constants_values__WEBPACK_IMPORTED_MODULE_0__["PJD_3PARAM"]) {
    //if( x[io] === HUGE_VAL )
    //    continue;
    return {
      x: p.x - datum_params[0],
      y: p.y - datum_params[1],
      z: p.z - datum_params[2],
    };

  } else if (datum_type === _constants_values__WEBPACK_IMPORTED_MODULE_0__["PJD_7PARAM"]) {
    var Dx_BF = datum_params[0];
    var Dy_BF = datum_params[1];
    var Dz_BF = datum_params[2];
    var Rx_BF = datum_params[3];
    var Ry_BF = datum_params[4];
    var Rz_BF = datum_params[5];
    var M_BF = datum_params[6];
    var x_tmp = (p.x - Dx_BF) / M_BF;
    var y_tmp = (p.y - Dy_BF) / M_BF;
    var z_tmp = (p.z - Dz_BF) / M_BF;
    //if( x[io] === HUGE_VAL )
    //    continue;

    return {
      x: x_tmp + Rz_BF * y_tmp - Ry_BF * z_tmp,
      y: -Rz_BF * x_tmp + y_tmp + Rx_BF * z_tmp,
      z: Ry_BF * x_tmp - Rx_BF * y_tmp + z_tmp
    };
  } //cs_geocentric_from_wgs84()
}


/***/ }),

/***/ "./node_modules/proj4/lib/datum_transform.js":
/*!***************************************************!*\
  !*** ./node_modules/proj4/lib/datum_transform.js ***!
  \***************************************************/
/*! exports provided: default, applyGridShift */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyGridShift", function() { return applyGridShift; });
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/values */ "./node_modules/proj4/lib/constants/values.js");
/* harmony import */ var _datumUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datumUtils */ "./node_modules/proj4/lib/datumUtils.js");
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/adjust_lon */ "./node_modules/proj4/lib/common/adjust_lon.js");




function checkParams(type) {
  return (type === _constants_values__WEBPACK_IMPORTED_MODULE_0__["PJD_3PARAM"] || type === _constants_values__WEBPACK_IMPORTED_MODULE_0__["PJD_7PARAM"]);
}

/* harmony default export */ __webpack_exports__["default"] = (function(source, dest, point) {
  // Short cut if the datums are identical.
  if (Object(_datumUtils__WEBPACK_IMPORTED_MODULE_1__["compareDatums"])(source, dest)) {
    return point; // in this case, zero is sucess,
    // whereas cs_compare_datums returns 1 to indicate TRUE
    // confusing, should fix this
  }

  // Explicitly skip datum transform by setting 'datum=none' as parameter for either source or dest
  if (source.datum_type === _constants_values__WEBPACK_IMPORTED_MODULE_0__["PJD_NODATUM"] || dest.datum_type === _constants_values__WEBPACK_IMPORTED_MODULE_0__["PJD_NODATUM"]) {
    return point;
  }

  // If this datum requires grid shifts, then apply it to geodetic coordinates.
  var source_a = source.a;
  var source_es = source.es;
  if (source.datum_type === _constants_values__WEBPACK_IMPORTED_MODULE_0__["PJD_GRIDSHIFT"]) {
    var gridShiftCode = applyGridShift(source, false, point);
    if (gridShiftCode !== 0) {
      return undefined;
    }
    source_a = _constants_values__WEBPACK_IMPORTED_MODULE_0__["SRS_WGS84_SEMIMAJOR"];
    source_es = _constants_values__WEBPACK_IMPORTED_MODULE_0__["SRS_WGS84_ESQUARED"];
  }

  var dest_a = dest.a;
  var dest_b = dest.b;
  var dest_es = dest.es;
  if (dest.datum_type === _constants_values__WEBPACK_IMPORTED_MODULE_0__["PJD_GRIDSHIFT"]) {
    dest_a = _constants_values__WEBPACK_IMPORTED_MODULE_0__["SRS_WGS84_SEMIMAJOR"];
    dest_b = _constants_values__WEBPACK_IMPORTED_MODULE_0__["SRS_WGS84_SEMIMINOR"];
    dest_es = _constants_values__WEBPACK_IMPORTED_MODULE_0__["SRS_WGS84_ESQUARED"];
  }

  // Do we need to go through geocentric coordinates?
  if (source_es === dest_es && source_a === dest_a && !checkParams(source.datum_type) &&  !checkParams(dest.datum_type)) {
    return point;
  }

  // Convert to geocentric coordinates.
  point = Object(_datumUtils__WEBPACK_IMPORTED_MODULE_1__["geodeticToGeocentric"])(point, source_es, source_a);
  // Convert between datums
  if (checkParams(source.datum_type)) {
    point = Object(_datumUtils__WEBPACK_IMPORTED_MODULE_1__["geocentricToWgs84"])(point, source.datum_type, source.datum_params);
  }
  if (checkParams(dest.datum_type)) {
    point = Object(_datumUtils__WEBPACK_IMPORTED_MODULE_1__["geocentricFromWgs84"])(point, dest.datum_type, dest.datum_params);
  }
  point = Object(_datumUtils__WEBPACK_IMPORTED_MODULE_1__["geocentricToGeodetic"])(point, dest_es, dest_a, dest_b);

  if (dest.datum_type === _constants_values__WEBPACK_IMPORTED_MODULE_0__["PJD_GRIDSHIFT"]) {
    var destGridShiftResult = applyGridShift(dest, true, point);
    if (destGridShiftResult !== 0) {
      return undefined;
    }
  }

  return point;
});

function applyGridShift(source, inverse, point) {
  if (source.grids === null || source.grids.length === 0) {
    console.log('Grid shift grids not found');
    return -1;
  }
  var input = {x: -point.x, y: point.y};
  var output = {x: Number.NaN, y: Number.NaN};
  var onlyMandatoryGrids = false;
  var attemptedGrids = [];
  for (var i = 0; i < source.grids.length; i++) {
    var grid = source.grids[i];
    attemptedGrids.push(grid.name);
    if (grid.isNull) {
      output = input;
      break;
    }
    onlyMandatoryGrids = grid.mandatory;
    if (grid.grid === null) {
      if (grid.mandatory) {
        console.log("Unable to find mandatory grid '" + grid.name + "'");
        return -1;
      }
      continue;
    }
    var subgrid = grid.grid.subgrids[0];
    // skip tables that don't match our point at all
    var epsilon = (Math.abs(subgrid.del[1]) + Math.abs(subgrid.del[0])) / 10000.0;
    var minX = subgrid.ll[0] - epsilon;
    var minY = subgrid.ll[1] - epsilon;
    var maxX = subgrid.ll[0] + (subgrid.lim[0] - 1) * subgrid.del[0] + epsilon;
    var maxY = subgrid.ll[1] + (subgrid.lim[1] - 1) * subgrid.del[1] + epsilon;
    if (minY > input.y || minX > input.x || maxY < input.y || maxX < input.x ) {
      continue;
    }
    output = applySubgridShift(input, inverse, subgrid);
    if (!isNaN(output.x)) {
      break;
    }
  }
  if (isNaN(output.x)) {
    console.log("Failed to find a grid shift table for location '"+
      -input.x * _constants_values__WEBPACK_IMPORTED_MODULE_0__["R2D"] + " " + input.y * _constants_values__WEBPACK_IMPORTED_MODULE_0__["R2D"] + " tried: '" + attemptedGrids + "'");
    return -1;
  }
  point.x = -output.x;
  point.y = output.y;
  return 0;
}

function applySubgridShift(pin, inverse, ct) {
  var val = {x: Number.NaN, y: Number.NaN};
  if (isNaN(pin.x)) { return val; }
  var tb = {x: pin.x, y: pin.y};
  tb.x -= ct.ll[0];
  tb.y -= ct.ll[1];
  tb.x = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_2__["default"])(tb.x - Math.PI) + Math.PI;
  var t = nadInterpolate(tb, ct);
  if (inverse) {
    if (isNaN(t.x)) {
      return val;
    }
    t.x = tb.x - t.x;
    t.y = tb.y - t.y;
    var i = 9, tol = 1e-12;
    var dif, del;
    do {
      del = nadInterpolate(t, ct);
      if (isNaN(del.x)) {
        console.log("Inverse grid shift iteration failed, presumably at grid edge.  Using first approximation.");
        break;
      }
      dif = {x: tb.x - (del.x + t.x), y: tb.y - (del.y + t.y)};
      t.x += dif.x;
      t.y += dif.y;
    } while (i-- && Math.abs(dif.x) > tol && Math.abs(dif.y) > tol);
    if (i < 0) {
      console.log("Inverse grid shift iterator failed to converge.");
      return val;
    }
    val.x = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_2__["default"])(t.x + ct.ll[0]);
    val.y = t.y + ct.ll[1];
  } else {
    if (!isNaN(t.x)) {
      val.x = pin.x + t.x;
      val.y = pin.y + t.y;
    }
  }
  return val;
}

function nadInterpolate(pin, ct) {
  var t = {x: pin.x / ct.del[0], y: pin.y / ct.del[1]};
  var indx = {x: Math.floor(t.x), y: Math.floor(t.y)};
  var frct = {x: t.x - 1.0 * indx.x, y: t.y - 1.0 * indx.y};
  var val= {x: Number.NaN, y: Number.NaN};
  var inx;
  if (indx.x < 0 || indx.x >= ct.lim[0]) {
    return val;
  }
  if (indx.y < 0 || indx.y >= ct.lim[1]) {
    return val;
  }
  inx = (indx.y * ct.lim[0]) + indx.x;
  var f00 = {x: ct.cvs[inx][0], y: ct.cvs[inx][1]};
  inx++;
  var f10= {x: ct.cvs[inx][0], y: ct.cvs[inx][1]};
  inx += ct.lim[0];
  var f11 = {x: ct.cvs[inx][0], y: ct.cvs[inx][1]};
  inx--;
  var f01 = {x: ct.cvs[inx][0], y: ct.cvs[inx][1]};
  var m11 = frct.x * frct.y, m10 = frct.x * (1.0 - frct.y),
    m00 = (1.0 - frct.x) * (1.0 - frct.y), m01 = (1.0 - frct.x) * frct.y;
  val.x = (m00 * f00.x + m10 * f10.x + m01 * f01.x + m11 * f11.x);
  val.y = (m00 * f00.y + m10 * f10.y + m01 * f01.y + m11 * f11.y);
  return val;
}


/***/ }),

/***/ "./node_modules/proj4/lib/defs.js":
/*!****************************************!*\
  !*** ./node_modules/proj4/lib/defs.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "./node_modules/proj4/lib/global.js");
/* harmony import */ var _projString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projString */ "./node_modules/proj4/lib/projString.js");
/* harmony import */ var wkt_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wkt-parser */ "./node_modules/wkt-parser/index.js");




function defs(name) {
  /*global console*/
  var that = this;
  if (arguments.length === 2) {
    var def = arguments[1];
    if (typeof def === 'string') {
      if (def.charAt(0) === '+') {
        defs[name] = Object(_projString__WEBPACK_IMPORTED_MODULE_1__["default"])(arguments[1]);
      }
      else {
        defs[name] = Object(wkt_parser__WEBPACK_IMPORTED_MODULE_2__["default"])(arguments[1]);
      }
    } else {
      defs[name] = def;
    }
  }
  else if (arguments.length === 1) {
    if (Array.isArray(name)) {
      return name.map(function(v) {
        if (Array.isArray(v)) {
          defs.apply(that, v);
        }
        else {
          defs(v);
        }
      });
    }
    else if (typeof name === 'string') {
      if (name in defs) {
        return defs[name];
      }
    }
    else if ('EPSG' in name) {
      defs['EPSG:' + name.EPSG] = name;
    }
    else if ('ESRI' in name) {
      defs['ESRI:' + name.ESRI] = name;
    }
    else if ('IAU2000' in name) {
      defs['IAU2000:' + name.IAU2000] = name;
    }
    else {
      console.log(name);
    }
    return;
  }


}
Object(_global__WEBPACK_IMPORTED_MODULE_0__["default"])(defs);
/* harmony default export */ __webpack_exports__["default"] = (defs);


/***/ }),

/***/ "./node_modules/proj4/lib/deriveConstants.js":
/*!***************************************************!*\
  !*** ./node_modules/proj4/lib/deriveConstants.js ***!
  \***************************************************/
/*! exports provided: eccentricity, sphere */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eccentricity", function() { return eccentricity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sphere", function() { return sphere; });
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/values */ "./node_modules/proj4/lib/constants/values.js");
/* harmony import */ var _constants_Ellipsoid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/Ellipsoid */ "./node_modules/proj4/lib/constants/Ellipsoid.js");
/* harmony import */ var _match__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./match */ "./node_modules/proj4/lib/match.js");




function eccentricity(a, b, rf, R_A) {
  var a2 = a * a; // used in geocentric
  var b2 = b * b; // used in geocentric
  var es = (a2 - b2) / a2; // e ^ 2
  var e = 0;
  if (R_A) {
    a *= 1 - es * (_constants_values__WEBPACK_IMPORTED_MODULE_0__["SIXTH"] + es * (_constants_values__WEBPACK_IMPORTED_MODULE_0__["RA4"] + es * _constants_values__WEBPACK_IMPORTED_MODULE_0__["RA6"]));
    a2 = a * a;
    es = 0;
  } else {
    e = Math.sqrt(es); // eccentricity
  }
  var ep2 = (a2 - b2) / b2; // used in geocentric
  return {
    es: es,
    e: e,
    ep2: ep2
  };
}
function sphere(a, b, rf, ellps, sphere) {
  if (!a) { // do we have an ellipsoid?
    var ellipse = Object(_match__WEBPACK_IMPORTED_MODULE_2__["default"])(_constants_Ellipsoid__WEBPACK_IMPORTED_MODULE_1__["default"], ellps);
    if (!ellipse) {
      ellipse = _constants_Ellipsoid__WEBPACK_IMPORTED_MODULE_1__["WGS84"];
    }
    a = ellipse.a;
    b = ellipse.b;
    rf = ellipse.rf;
  }

  if (rf && !b) {
    b = (1.0 - 1.0 / rf) * a;
  }
  if (rf === 0 || Math.abs(a - b) < _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
    sphere = true;
    b = a;
  }
  return {
    a: a,
    b: b,
    rf: rf,
    sphere: sphere
  };
}


/***/ }),

/***/ "./node_modules/proj4/lib/extend.js":
/*!******************************************!*\
  !*** ./node_modules/proj4/lib/extend.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(destination, source) {
  destination = destination || {};
  var value, property;
  if (!source) {
    return destination;
  }
  for (property in source) {
    value = source[property];
    if (value !== undefined) {
      destination[property] = value;
    }
  }
  return destination;
});


/***/ }),

/***/ "./node_modules/proj4/lib/global.js":
/*!******************************************!*\
  !*** ./node_modules/proj4/lib/global.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(defs) {
  defs('EPSG:4326', "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees");
  defs('EPSG:4269', "+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees");
  defs('EPSG:3857', "+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs");

  defs.WGS84 = defs['EPSG:4326'];
  defs['EPSG:3785'] = defs['EPSG:3857']; // maintain backward compat, official code is 3857
  defs.GOOGLE = defs['EPSG:3857'];
  defs['EPSG:900913'] = defs['EPSG:3857'];
  defs['EPSG:102113'] = defs['EPSG:3857'];
});


/***/ }),

/***/ "./node_modules/proj4/lib/index.js":
/*!*****************************************!*\
  !*** ./node_modules/proj4/lib/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./node_modules/proj4/lib/core.js");
/* harmony import */ var _Proj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Proj */ "./node_modules/proj4/lib/Proj.js");
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Point */ "./node_modules/proj4/lib/Point.js");
/* harmony import */ var _common_toPoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/toPoint */ "./node_modules/proj4/lib/common/toPoint.js");
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defs */ "./node_modules/proj4/lib/defs.js");
/* harmony import */ var _nadgrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nadgrid */ "./node_modules/proj4/lib/nadgrid.js");
/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transform */ "./node_modules/proj4/lib/transform.js");
/* harmony import */ var mgrs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mgrs */ "./node_modules/mgrs/mgrs.js");
/* harmony import */ var _projs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../projs */ "./node_modules/proj4/projs.js");










_core__WEBPACK_IMPORTED_MODULE_0__["default"].defaultDatum = 'WGS84'; //default datum
_core__WEBPACK_IMPORTED_MODULE_0__["default"].Proj = _Proj__WEBPACK_IMPORTED_MODULE_1__["default"];
_core__WEBPACK_IMPORTED_MODULE_0__["default"].WGS84 = new _core__WEBPACK_IMPORTED_MODULE_0__["default"].Proj('WGS84');
_core__WEBPACK_IMPORTED_MODULE_0__["default"].Point = _Point__WEBPACK_IMPORTED_MODULE_2__["default"];
_core__WEBPACK_IMPORTED_MODULE_0__["default"].toPoint = _common_toPoint__WEBPACK_IMPORTED_MODULE_3__["default"];
_core__WEBPACK_IMPORTED_MODULE_0__["default"].defs = _defs__WEBPACK_IMPORTED_MODULE_4__["default"];
_core__WEBPACK_IMPORTED_MODULE_0__["default"].nadgrid = _nadgrid__WEBPACK_IMPORTED_MODULE_5__["default"];
_core__WEBPACK_IMPORTED_MODULE_0__["default"].transform = _transform__WEBPACK_IMPORTED_MODULE_6__["default"];
_core__WEBPACK_IMPORTED_MODULE_0__["default"].mgrs = mgrs__WEBPACK_IMPORTED_MODULE_7__["default"];
_core__WEBPACK_IMPORTED_MODULE_0__["default"].version = '__VERSION__';
Object(_projs__WEBPACK_IMPORTED_MODULE_8__["default"])(_core__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/proj4/lib/match.js":
/*!*****************************************!*\
  !*** ./node_modules/proj4/lib/match.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return match; });
var ignoredChar = /[\s_\-\/\(\)]/g;
function match(obj, key) {
  if (obj[key]) {
    return obj[key];
  }
  var keys = Object.keys(obj);
  var lkey = key.toLowerCase().replace(ignoredChar, '');
  var i = -1;
  var testkey, processedKey;
  while (++i < keys.length) {
    testkey = keys[i];
    processedKey = testkey.toLowerCase().replace(ignoredChar, '');
    if (processedKey === lkey) {
      return obj[testkey];
    }
  }
}


/***/ }),

/***/ "./node_modules/proj4/lib/nadgrid.js":
/*!*******************************************!*\
  !*** ./node_modules/proj4/lib/nadgrid.js ***!
  \*******************************************/
/*! exports provided: default, getNadgrids */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return nadgrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNadgrids", function() { return getNadgrids; });
/**
 * Resources for details of NTv2 file formats:
 * - https://web.archive.org/web/20140127204822if_/http://www.mgs.gov.on.ca:80/stdprodconsume/groups/content/@mgs/@iandit/documents/resourcelist/stel02_047447.pdf
 * - http://mimaka.com/help/gs/html/004_NTV2%20Data%20Format.htm
 */

var loadedNadgrids = {};

/**
 * Load a binary NTv2 file (.gsb) to a key that can be used in a proj string like +nadgrids=<key>. Pass the NTv2 file
 * as an ArrayBuffer.
 */
function nadgrid(key, data) {
  var view = new DataView(data);
  var isLittleEndian = detectLittleEndian(view);
  var header = readHeader(view, isLittleEndian);
  if (header.nSubgrids > 1) {
    console.log('Only single NTv2 subgrids are currently supported, subsequent sub grids are ignored');
  }
  var subgrids = readSubgrids(view, header, isLittleEndian);
  var nadgrid = {header: header, subgrids: subgrids};
  loadedNadgrids[key] = nadgrid;
  return nadgrid;
}

/**
 * Given a proj4 value for nadgrids, return an array of loaded grids
 */
function getNadgrids(nadgrids) {
  // Format details: http://proj.maptools.org/gen_parms.html
  if (nadgrids === undefined) { return null; }
  var grids = nadgrids.split(',');
  return grids.map(parseNadgridString);
}

function parseNadgridString(value) {
  if (value.length === 0) {
    return null;
  }
  var optional = value[0] === '@';
  if (optional) {
    value = value.slice(1);
  }
  if (value === 'null') {
    return {name: 'null', mandatory: !optional, grid: null, isNull: true};
  }
  return {
    name: value,
    mandatory: !optional,
    grid: loadedNadgrids[value] || null,
    isNull: false
  };
}

function secondsToRadians(seconds) {
  return (seconds / 3600) * Math.PI / 180;
}

function detectLittleEndian(view) {
  var nFields = view.getInt32(8, false);
  if (nFields === 11) {
    return false;
  }
  nFields = view.getInt32(8, true);
  if (nFields !== 11) {
    console.warn('Failed to detect nadgrid endian-ness, defaulting to little-endian');
  }
  return true;
}

function readHeader(view, isLittleEndian) {
  return {
    nFields: view.getInt32(8, isLittleEndian),
    nSubgridFields: view.getInt32(24, isLittleEndian),
    nSubgrids: view.getInt32(40, isLittleEndian),
    shiftType: decodeString(view, 56, 56 + 8).trim(),
    fromSemiMajorAxis: view.getFloat64(120, isLittleEndian),
    fromSemiMinorAxis: view.getFloat64(136, isLittleEndian),
    toSemiMajorAxis: view.getFloat64(152, isLittleEndian),
    toSemiMinorAxis: view.getFloat64(168, isLittleEndian),
  };
}

function decodeString(view, start, end) {
  return String.fromCharCode.apply(null, new Uint8Array(view.buffer.slice(start, end)));
}

function readSubgrids(view, header, isLittleEndian) {
  var gridOffset = 176;
  var grids = [];
  for (var i = 0; i < header.nSubgrids; i++) {
    var subHeader = readGridHeader(view, gridOffset, isLittleEndian);
    var nodes = readGridNodes(view, gridOffset, subHeader, isLittleEndian);
    var lngColumnCount = Math.round(
      1 + (subHeader.upperLongitude - subHeader.lowerLongitude) / subHeader.longitudeInterval);
    var latColumnCount = Math.round(
      1 + (subHeader.upperLatitude - subHeader.lowerLatitude) / subHeader.latitudeInterval);
    // Proj4 operates on radians whereas the coordinates are in seconds in the grid
    grids.push({
      ll: [secondsToRadians(subHeader.lowerLongitude), secondsToRadians(subHeader.lowerLatitude)],
      del: [secondsToRadians(subHeader.longitudeInterval), secondsToRadians(subHeader.latitudeInterval)],
      lim: [lngColumnCount, latColumnCount],
      count: subHeader.gridNodeCount,
      cvs: mapNodes(nodes)
    });
  }
  return grids;
}

function mapNodes(nodes) {
  return nodes.map(function (r) {return [secondsToRadians(r.longitudeShift), secondsToRadians(r.latitudeShift)];});
}

function readGridHeader(view, offset, isLittleEndian) {
  return {
    name: decodeString(view, offset + 8, offset + 16).trim(),
    parent: decodeString(view, offset + 24, offset + 24 + 8).trim(),
    lowerLatitude: view.getFloat64(offset + 72, isLittleEndian),
    upperLatitude: view.getFloat64(offset + 88, isLittleEndian),
    lowerLongitude: view.getFloat64(offset + 104, isLittleEndian),
    upperLongitude: view.getFloat64(offset + 120, isLittleEndian),
    latitudeInterval: view.getFloat64(offset + 136, isLittleEndian),
    longitudeInterval: view.getFloat64(offset + 152, isLittleEndian),
    gridNodeCount: view.getInt32(offset + 168, isLittleEndian)
  };
}

function readGridNodes(view, offset, gridHeader, isLittleEndian) {
  var nodesOffset = offset + 176;
  var gridRecordLength = 16;
  var gridShiftRecords = [];
  for (var i = 0; i < gridHeader.gridNodeCount; i++) {
    var record = {
      latitudeShift: view.getFloat32(nodesOffset + i * gridRecordLength, isLittleEndian),
      longitudeShift: view.getFloat32(nodesOffset + i * gridRecordLength + 4, isLittleEndian),
      latitudeAccuracy: view.getFloat32(nodesOffset + i * gridRecordLength + 8, isLittleEndian),
      longitudeAccuracy: view.getFloat32(nodesOffset + i * gridRecordLength + 12, isLittleEndian),
    };
    gridShiftRecords.push(record);
  }
  return gridShiftRecords;
}


/***/ }),

/***/ "./node_modules/proj4/lib/parseCode.js":
/*!*********************************************!*\
  !*** ./node_modules/proj4/lib/parseCode.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defs */ "./node_modules/proj4/lib/defs.js");
/* harmony import */ var wkt_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wkt-parser */ "./node_modules/wkt-parser/index.js");
/* harmony import */ var _projString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projString */ "./node_modules/proj4/lib/projString.js");
/* harmony import */ var _match__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./match */ "./node_modules/proj4/lib/match.js");




function testObj(code){
  return typeof code === 'string';
}
function testDef(code){
  return code in _defs__WEBPACK_IMPORTED_MODULE_0__["default"];
}
var codeWords = ['PROJECTEDCRS', 'PROJCRS', 'GEOGCS','GEOCCS','PROJCS','LOCAL_CS', 'GEODCRS', 'GEODETICCRS', 'GEODETICDATUM', 'ENGCRS', 'ENGINEERINGCRS'];
function testWKT(code){
  return codeWords.some(function (word) {
    return code.indexOf(word) > -1;
  });
}
var codes = ['3857', '900913', '3785', '102113'];
function checkMercator(item) {
  var auth = Object(_match__WEBPACK_IMPORTED_MODULE_3__["default"])(item, 'authority');
  if (!auth) {
    return;
  }
  var code = Object(_match__WEBPACK_IMPORTED_MODULE_3__["default"])(auth, 'epsg');
  return code && codes.indexOf(code) > -1;
}
function checkProjStr(item) {
  var ext = Object(_match__WEBPACK_IMPORTED_MODULE_3__["default"])(item, 'extension');
  if (!ext) {
    return;
  }
  return Object(_match__WEBPACK_IMPORTED_MODULE_3__["default"])(ext, 'proj4');
}
function testProj(code){
  return code[0] === '+';
}
function parse(code){
  if (testObj(code)) {
    //check to see if this is a WKT string
    if (testDef(code)) {
      return _defs__WEBPACK_IMPORTED_MODULE_0__["default"][code];
    }
    if (testWKT(code)) {
      var out = Object(wkt_parser__WEBPACK_IMPORTED_MODULE_1__["default"])(code);
      // test of spetial case, due to this being a very common and often malformed
      if (checkMercator(out)) {
        return _defs__WEBPACK_IMPORTED_MODULE_0__["default"]['EPSG:3857'];
      }
      var maybeProjStr = checkProjStr(out);
      if (maybeProjStr) {
        return Object(_projString__WEBPACK_IMPORTED_MODULE_2__["default"])(maybeProjStr);
      }
      return out;
    }
    if (testProj(code)) {
      return Object(_projString__WEBPACK_IMPORTED_MODULE_2__["default"])(code);
    }
  }else{
    return code;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (parse);


/***/ }),

/***/ "./node_modules/proj4/lib/projString.js":
/*!**********************************************!*\
  !*** ./node_modules/proj4/lib/projString.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/values */ "./node_modules/proj4/lib/constants/values.js");
/* harmony import */ var _constants_PrimeMeridian__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/PrimeMeridian */ "./node_modules/proj4/lib/constants/PrimeMeridian.js");
/* harmony import */ var _constants_units__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/units */ "./node_modules/proj4/lib/constants/units.js");
/* harmony import */ var _match__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./match */ "./node_modules/proj4/lib/match.js");





/* harmony default export */ __webpack_exports__["default"] = (function(defData) {
  var self = {};
  var paramObj = defData.split('+').map(function(v) {
    return v.trim();
  }).filter(function(a) {
    return a;
  }).reduce(function(p, a) {
    var split = a.split('=');
    split.push(true);
    p[split[0].toLowerCase()] = split[1];
    return p;
  }, {});
  var paramName, paramVal, paramOutname;
  var params = {
    proj: 'projName',
    datum: 'datumCode',
    rf: function(v) {
      self.rf = parseFloat(v);
    },
    lat_0: function(v) {
      self.lat0 = v * _constants_values__WEBPACK_IMPORTED_MODULE_0__["D2R"];
    },
    lat_1: function(v) {
      self.lat1 = v * _constants_values__WEBPACK_IMPORTED_MODULE_0__["D2R"];
    },
    lat_2: function(v) {
      self.lat2 = v * _constants_values__WEBPACK_IMPORTED_MODULE_0__["D2R"];
    },
    lat_ts: function(v) {
      self.lat_ts = v * _constants_values__WEBPACK_IMPORTED_MODULE_0__["D2R"];
    },
    lon_0: function(v) {
      self.long0 = v * _constants_values__WEBPACK_IMPORTED_MODULE_0__["D2R"];
    },
    lon_1: function(v) {
      self.long1 = v * _constants_values__WEBPACK_IMPORTED_MODULE_0__["D2R"];
    },
    lon_2: function(v) {
      self.long2 = v * _constants_values__WEBPACK_IMPORTED_MODULE_0__["D2R"];
    },
    alpha: function(v) {
      self.alpha = parseFloat(v) * _constants_values__WEBPACK_IMPORTED_MODULE_0__["D2R"];
    },
    gamma: function(v) {
      self.rectified_grid_angle = parseFloat(v);
    },
    lonc: function(v) {
      self.longc = v * _constants_values__WEBPACK_IMPORTED_MODULE_0__["D2R"];
    },
    x_0: function(v) {
      self.x0 = parseFloat(v);
    },
    y_0: function(v) {
      self.y0 = parseFloat(v);
    },
    k_0: function(v) {
      self.k0 = parseFloat(v);
    },
    k: function(v) {
      self.k0 = parseFloat(v);
    },
    a: function(v) {
      self.a = parseFloat(v);
    },
    b: function(v) {
      self.b = parseFloat(v);
    },
    r_a: function() {
      self.R_A = true;
    },
    zone: function(v) {
      self.zone = parseInt(v, 10);
    },
    south: function() {
      self.utmSouth = true;
    },
    towgs84: function(v) {
      self.datum_params = v.split(",").map(function(a) {
        return parseFloat(a);
      });
    },
    to_meter: function(v) {
      self.to_meter = parseFloat(v);
    },
    units: function(v) {
      self.units = v;
      var unit = Object(_match__WEBPACK_IMPORTED_MODULE_3__["default"])(_constants_units__WEBPACK_IMPORTED_MODULE_2__["default"], v);
      if (unit) {
        self.to_meter = unit.to_meter;
      }
    },
    from_greenwich: function(v) {
      self.from_greenwich = v * _constants_values__WEBPACK_IMPORTED_MODULE_0__["D2R"];
    },
    pm: function(v) {
      var pm = Object(_match__WEBPACK_IMPORTED_MODULE_3__["default"])(_constants_PrimeMeridian__WEBPACK_IMPORTED_MODULE_1__["default"], v);
      self.from_greenwich = (pm ? pm : parseFloat(v)) * _constants_values__WEBPACK_IMPORTED_MODULE_0__["D2R"];
    },
    nadgrids: function(v) {
      if (v === '@null') {
        self.datumCode = 'none';
      }
      else {
        self.nadgrids = v;
      }
    },
    axis: function(v) {
      var legalAxis = "ewnsud";
      if (v.length === 3 && legalAxis.indexOf(v.substr(0, 1)) !== -1 && legalAxis.indexOf(v.substr(1, 1)) !== -1 && legalAxis.indexOf(v.substr(2, 1)) !== -1) {
        self.axis = v;
      }
    },
    approx: function() {
      self.approx = true;
    }
  };
  for (paramName in paramObj) {
    paramVal = paramObj[paramName];
    if (paramName in params) {
      paramOutname = params[paramName];
      if (typeof paramOutname === 'function') {
        paramOutname(paramVal);
      }
      else {
        self[paramOutname] = paramVal;
      }
    }
    else {
      self[paramName] = paramVal;
    }
  }
  if(typeof self.datumCode === 'string' && self.datumCode !== "WGS84"){
    self.datumCode = self.datumCode.toLowerCase();
  }
  return self;
});


/***/ }),

/***/ "./node_modules/proj4/lib/projections.js":
/*!***********************************************!*\
  !*** ./node_modules/proj4/lib/projections.js ***!
  \***********************************************/
/*! exports provided: add, get, start, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony import */ var _projections_merc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projections/merc */ "./node_modules/proj4/lib/projections/merc.js");
/* harmony import */ var _projections_longlat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projections/longlat */ "./node_modules/proj4/lib/projections/longlat.js");


var projs = [_projections_merc__WEBPACK_IMPORTED_MODULE_0__["default"], _projections_longlat__WEBPACK_IMPORTED_MODULE_1__["default"]];
var names = {};
var projStore = [];

function add(proj, i) {
  var len = projStore.length;
  if (!proj.names) {
    console.log(i);
    return true;
  }
  projStore[len] = proj;
  proj.names.forEach(function(n) {
    names[n.toLowerCase()] = len;
  });
  return this;
}



function get(name) {
  if (!name) {
    return false;
  }
  var n = name.toLowerCase();
  if (typeof names[n] !== 'undefined' && projStore[names[n]]) {
    return projStore[names[n]];
  }
}

function start() {
  projs.forEach(add);
}
/* harmony default export */ __webpack_exports__["default"] = ({
  start: start,
  add: add,
  get: get
});


/***/ }),

/***/ "./node_modules/proj4/lib/projections/aea.js":
/*!***************************************************!*\
  !*** ./node_modules/proj4/lib/projections/aea.js ***!
  \***************************************************/
/*! exports provided: init, forward, inverse, phi1z, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phi1z", function() { return phi1z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_msfnz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/msfnz */ "./node_modules/proj4/lib/common/msfnz.js");
/* harmony import */ var _common_qsfnz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/qsfnz */ "./node_modules/proj4/lib/common/qsfnz.js");
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/adjust_lon */ "./node_modules/proj4/lib/common/adjust_lon.js");
/* harmony import */ var _common_asinz__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/asinz */ "./node_modules/proj4/lib/common/asinz.js");
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/values */ "./node_modules/proj4/lib/constants/values.js");






function init() {

  if (Math.abs(this.lat1 + this.lat2) < _constants_values__WEBPACK_IMPORTED_MODULE_4__["EPSLN"]) {
    return;
  }
  this.temp = this.b / this.a;
  this.es = 1 - Math.pow(this.temp, 2);
  this.e3 = Math.sqrt(this.es);

  this.sin_po = Math.sin(this.lat1);
  this.cos_po = Math.cos(this.lat1);
  this.t1 = this.sin_po;
  this.con = this.sin_po;
  this.ms1 = Object(_common_msfnz__WEBPACK_IMPORTED_MODULE_0__["default"])(this.e3, this.sin_po, this.cos_po);
  this.qs1 = Object(_common_qsfnz__WEBPACK_IMPORTED_MODULE_1__["default"])(this.e3, this.sin_po, this.cos_po);

  this.sin_po = Math.sin(this.lat2);
  this.cos_po = Math.cos(this.lat2);
  this.t2 = this.sin_po;
  this.ms2 = Object(_common_msfnz__WEBPACK_IMPORTED_MODULE_0__["default"])(this.e3, this.sin_po, this.cos_po);
  this.qs2 = Object(_common_qsfnz__WEBPACK_IMPORTED_MODULE_1__["default"])(this.e3, this.sin_po, this.cos_po);

  this.sin_po = Math.sin(this.lat0);
  this.cos_po = Math.cos(this.lat0);
  this.t3 = this.sin_po;
  this.qs0 = Object(_common_qsfnz__WEBPACK_IMPORTED_MODULE_1__["default"])(this.e3, this.sin_po, this.cos_po);

  if (Math.abs(this.lat1 - this.lat2) > _constants_values__WEBPACK_IMPORTED_MODULE_4__["EPSLN"]) {
    this.ns0 = (this.ms1 * this.ms1 - this.ms2 * this.ms2) / (this.qs2 - this.qs1);
  }
  else {
    this.ns0 = this.con;
  }
  this.c = this.ms1 * this.ms1 + this.ns0 * this.qs1;
  this.rh = this.a * Math.sqrt(this.c - this.ns0 * this.qs0) / this.ns0;
}

/* Albers Conical Equal Area forward equations--mapping lat,long to x,y
  -------------------------------------------------------------------*/
function forward(p) {

  var lon = p.x;
  var lat = p.y;

  this.sin_phi = Math.sin(lat);
  this.cos_phi = Math.cos(lat);

  var qs = Object(_common_qsfnz__WEBPACK_IMPORTED_MODULE_1__["default"])(this.e3, this.sin_phi, this.cos_phi);
  var rh1 = this.a * Math.sqrt(this.c - this.ns0 * qs) / this.ns0;
  var theta = this.ns0 * Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_2__["default"])(lon - this.long0);
  var x = rh1 * Math.sin(theta) + this.x0;
  var y = this.rh - rh1 * Math.cos(theta) + this.y0;

  p.x = x;
  p.y = y;
  return p;
}

function inverse(p) {
  var rh1, qs, con, theta, lon, lat;

  p.x -= this.x0;
  p.y = this.rh - p.y + this.y0;
  if (this.ns0 >= 0) {
    rh1 = Math.sqrt(p.x * p.x + p.y * p.y);
    con = 1;
  }
  else {
    rh1 = -Math.sqrt(p.x * p.x + p.y * p.y);
    con = -1;
  }
  theta = 0;
  if (rh1 !== 0) {
    theta = Math.atan2(con * p.x, con * p.y);
  }
  con = rh1 * this.ns0 / this.a;
  if (this.sphere) {
    lat = Math.asin((this.c - con * con) / (2 * this.ns0));
  }
  else {
    qs = (this.c - con * con) / this.ns0;
    lat = this.phi1z(this.e3, qs);
  }

  lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_2__["default"])(theta / this.ns0 + this.long0);
  p.x = lon;
  p.y = lat;
  return p;
}

/* Function to compute phi1, the latitude for the inverse of the
   Albers Conical Equal-Area projection.
-------------------------------------------*/
function phi1z(eccent, qs) {
  var sinphi, cosphi, con, com, dphi;
  var phi = Object(_common_asinz__WEBPACK_IMPORTED_MODULE_3__["default"])(0.5 * qs);
  if (eccent < _constants_values__WEBPACK_IMPORTED_MODULE_4__["EPSLN"]) {
    return phi;
  }

  var eccnts = eccent * eccent;
  for (var i = 1; i <= 25; i++) {
    sinphi = Math.sin(phi);
    cosphi = Math.cos(phi);
    con = eccent * sinphi;
    com = 1 - con * con;
    dphi = 0.5 * com * com / cosphi * (qs / (1 - eccnts) - sinphi / com + 0.5 / eccent * Math.log((1 - con) / (1 + con)));
    phi = phi + dphi;
    if (Math.abs(dphi) <= 1e-7) {
      return phi;
    }
  }
  return null;
}

var names = ["Albers_Conic_Equal_Area", "Albers", "aea"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names,
  phi1z: phi1z
});


/***/ }),

/***/ "./node_modules/proj4/lib/projections/aeqd.js":
/*!****************************************************!*\
  !*** ./node_modules/proj4/lib/projections/aeqd.js ***!
  \****************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/adjust_lon */ "./node_modules/proj4/lib/common/adjust_lon.js");
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/values */ "./node_modules/proj4/lib/constants/values.js");
/* harmony import */ var _common_mlfn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/mlfn */ "./node_modules/proj4/lib/common/mlfn.js");
/* harmony import */ var _common_e0fn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/e0fn */ "./node_modules/proj4/lib/common/e0fn.js");
/* harmony import */ var _common_e1fn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/e1fn */ "./node_modules/proj4/lib/common/e1fn.js");
/* harmony import */ var _common_e2fn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/e2fn */ "./node_modules/proj4/lib/common/e2fn.js");
/* harmony import */ var _common_e3fn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/e3fn */ "./node_modules/proj4/lib/common/e3fn.js");
/* harmony import */ var _common_gN__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/gN */ "./node_modules/proj4/lib/common/gN.js");
/* harmony import */ var _common_asinz__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/asinz */ "./node_modules/proj4/lib/common/asinz.js");
/* harmony import */ var _common_imlfn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/imlfn */ "./node_modules/proj4/lib/common/imlfn.js");














function init() {
  this.sin_p12 = Math.sin(this.lat0);
  this.cos_p12 = Math.cos(this.lat0);
}

function forward(p) {
  var lon = p.x;
  var lat = p.y;
  var sinphi = Math.sin(p.y);
  var cosphi = Math.cos(p.y);
  var dlon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(lon - this.long0);
  var e0, e1, e2, e3, Mlp, Ml, tanphi, Nl1, Nl, psi, Az, G, H, GH, Hs, c, kp, cos_c, s, s2, s3, s4, s5;
  if (this.sphere) {
    if (Math.abs(this.sin_p12 - 1) <= _constants_values__WEBPACK_IMPORTED_MODULE_1__["EPSLN"]) {
      //North Pole case
      p.x = this.x0 + this.a * (_constants_values__WEBPACK_IMPORTED_MODULE_1__["HALF_PI"] - lat) * Math.sin(dlon);
      p.y = this.y0 - this.a * (_constants_values__WEBPACK_IMPORTED_MODULE_1__["HALF_PI"] - lat) * Math.cos(dlon);
      return p;
    }
    else if (Math.abs(this.sin_p12 + 1) <= _constants_values__WEBPACK_IMPORTED_MODULE_1__["EPSLN"]) {
      //South Pole case
      p.x = this.x0 + this.a * (_constants_values__WEBPACK_IMPORTED_MODULE_1__["HALF_PI"] + lat) * Math.sin(dlon);
      p.y = this.y0 + this.a * (_constants_values__WEBPACK_IMPORTED_MODULE_1__["HALF_PI"] + lat) * Math.cos(dlon);
      return p;
    }
    else {
      //default case
      cos_c = this.sin_p12 * sinphi + this.cos_p12 * cosphi * Math.cos(dlon);
      c = Math.acos(cos_c);
      kp = c ? c / Math.sin(c) : 1;
      p.x = this.x0 + this.a * kp * cosphi * Math.sin(dlon);
      p.y = this.y0 + this.a * kp * (this.cos_p12 * sinphi - this.sin_p12 * cosphi * Math.cos(dlon));
      return p;
    }
  }
  else {
    e0 = Object(_common_e0fn__WEBPACK_IMPORTED_MODULE_3__["default"])(this.es);
    e1 = Object(_common_e1fn__WEBPACK_IMPORTED_MODULE_4__["default"])(this.es);
    e2 = Object(_common_e2fn__WEBPACK_IMPORTED_MODULE_5__["default"])(this.es);
    e3 = Object(_common_e3fn__WEBPACK_IMPORTED_MODULE_6__["default"])(this.es);
    if (Math.abs(this.sin_p12 - 1) <= _constants_values__WEBPACK_IMPORTED_MODULE_1__["EPSLN"]) {
      //North Pole case
      Mlp = this.a * Object(_common_mlfn__WEBPACK_IMPORTED_MODULE_2__["default"])(e0, e1, e2, e3, _constants_values__WEBPACK_IMPORTED_MODULE_1__["HALF_PI"]);
      Ml = this.a * Object(_common_mlfn__WEBPACK_IMPORTED_MODULE_2__["default"])(e0, e1, e2, e3, lat);
      p.x = this.x0 + (Mlp - Ml) * Math.sin(dlon);
      p.y = this.y0 - (Mlp - Ml) * Math.cos(dlon);
      return p;
    }
    else if (Math.abs(this.sin_p12 + 1) <= _constants_values__WEBPACK_IMPORTED_MODULE_1__["EPSLN"]) {
      //South Pole case
      Mlp = this.a * Object(_common_mlfn__WEBPACK_IMPORTED_MODULE_2__["default"])(e0, e1, e2, e3, _constants_values__WEBPACK_IMPORTED_MODULE_1__["HALF_PI"]);
      Ml = this.a * Object(_common_mlfn__WEBPACK_IMPORTED_MODULE_2__["default"])(e0, e1, e2, e3, lat);
      p.x = this.x0 + (Mlp + Ml) * Math.sin(dlon);
      p.y = this.y0 + (Mlp + Ml) * Math.cos(dlon);
      return p;
    }
    else {
      //Default case
      tanphi = sinphi / cosphi;
      Nl1 = Object(_common_gN__WEBPACK_IMPORTED_MODULE_7__["default"])(this.a, this.e, this.sin_p12);
      Nl = Object(_common_gN__WEBPACK_IMPORTED_MODULE_7__["default"])(this.a, this.e, sinphi);
      psi = Math.atan((1 - this.es) * tanphi + this.es * Nl1 * this.sin_p12 / (Nl * cosphi));
      Az = Math.atan2(Math.sin(dlon), this.cos_p12 * Math.tan(psi) - this.sin_p12 * Math.cos(dlon));
      if (Az === 0) {
        s = Math.asin(this.cos_p12 * Math.sin(psi) - this.sin_p12 * Math.cos(psi));
      }
      else if (Math.abs(Math.abs(Az) - Math.PI) <= _constants_values__WEBPACK_IMPORTED_MODULE_1__["EPSLN"]) {
        s = -Math.asin(this.cos_p12 * Math.sin(psi) - this.sin_p12 * Math.cos(psi));
      }
      else {
        s = Math.asin(Math.sin(dlon) * Math.cos(psi) / Math.sin(Az));
      }
      G = this.e * this.sin_p12 / Math.sqrt(1 - this.es);
      H = this.e * this.cos_p12 * Math.cos(Az) / Math.sqrt(1 - this.es);
      GH = G * H;
      Hs = H * H;
      s2 = s * s;
      s3 = s2 * s;
      s4 = s3 * s;
      s5 = s4 * s;
      c = Nl1 * s * (1 - s2 * Hs * (1 - Hs) / 6 + s3 / 8 * GH * (1 - 2 * Hs) + s4 / 120 * (Hs * (4 - 7 * Hs) - 3 * G * G * (1 - 7 * Hs)) - s5 / 48 * GH);
      p.x = this.x0 + c * Math.sin(Az);
      p.y = this.y0 + c * Math.cos(Az);
      return p;
    }
  }


}

function inverse(p) {
  p.x -= this.x0;
  p.y -= this.y0;
  var rh, z, sinz, cosz, lon, lat, con, e0, e1, e2, e3, Mlp, M, N1, psi, Az, cosAz, tmp, A, B, D, Ee, F, sinpsi;
  if (this.sphere) {
    rh = Math.sqrt(p.x * p.x + p.y * p.y);
    if (rh > (2 * _constants_values__WEBPACK_IMPORTED_MODULE_1__["HALF_PI"] * this.a)) {
      return;
    }
    z = rh / this.a;

    sinz = Math.sin(z);
    cosz = Math.cos(z);

    lon = this.long0;
    if (Math.abs(rh) <= _constants_values__WEBPACK_IMPORTED_MODULE_1__["EPSLN"]) {
      lat = this.lat0;
    }
    else {
      lat = Object(_common_asinz__WEBPACK_IMPORTED_MODULE_8__["default"])(cosz * this.sin_p12 + (p.y * sinz * this.cos_p12) / rh);
      con = Math.abs(this.lat0) - _constants_values__WEBPACK_IMPORTED_MODULE_1__["HALF_PI"];
      if (Math.abs(con) <= _constants_values__WEBPACK_IMPORTED_MODULE_1__["EPSLN"]) {
        if (this.lat0 >= 0) {
          lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(this.long0 + Math.atan2(p.x, - p.y));
        }
        else {
          lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(this.long0 - Math.atan2(-p.x, p.y));
        }
      }
      else {
        /*con = cosz - this.sin_p12 * Math.sin(lat);
        if ((Math.abs(con) < EPSLN) && (Math.abs(p.x) < EPSLN)) {
          //no-op, just keep the lon value as is
        } else {
          var temp = Math.atan2((p.x * sinz * this.cos_p12), (con * rh));
          lon = adjust_lon(this.long0 + Math.atan2((p.x * sinz * this.cos_p12), (con * rh)));
        }*/
        lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(this.long0 + Math.atan2(p.x * sinz, rh * this.cos_p12 * cosz - p.y * this.sin_p12 * sinz));
      }
    }

    p.x = lon;
    p.y = lat;
    return p;
  }
  else {
    e0 = Object(_common_e0fn__WEBPACK_IMPORTED_MODULE_3__["default"])(this.es);
    e1 = Object(_common_e1fn__WEBPACK_IMPORTED_MODULE_4__["default"])(this.es);
    e2 = Object(_common_e2fn__WEBPACK_IMPORTED_MODULE_5__["default"])(this.es);
    e3 = Object(_common_e3fn__WEBPACK_IMPORTED_MODULE_6__["default"])(this.es);
    if (Math.abs(this.sin_p12 - 1) <= _constants_values__WEBPACK_IMPORTED_MODULE_1__["EPSLN"]) {
      //North pole case
      Mlp = this.a * Object(_common_mlfn__WEBPACK_IMPORTED_MODULE_2__["default"])(e0, e1, e2, e3, _constants_values__WEBPACK_IMPORTED_MODULE_1__["HALF_PI"]);
      rh = Math.sqrt(p.x * p.x + p.y * p.y);
      M = Mlp - rh;
      lat = Object(_common_imlfn__WEBPACK_IMPORTED_MODULE_9__["default"])(M / this.a, e0, e1, e2, e3);
      lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(this.long0 + Math.atan2(p.x, - 1 * p.y));
      p.x = lon;
      p.y = lat;
      return p;
    }
    else if (Math.abs(this.sin_p12 + 1) <= _constants_values__WEBPACK_IMPORTED_MODULE_1__["EPSLN"]) {
      //South pole case
      Mlp = this.a * Object(_common_mlfn__WEBPACK_IMPORTED_MODULE_2__["default"])(e0, e1, e2, e3, _constants_values__WEBPACK_IMPORTED_MODULE_1__["HALF_PI"]);
      rh = Math.sqrt(p.x * p.x + p.y * p.y);
      M = rh - Mlp;

      lat = Object(_common_imlfn__WEBPACK_IMPORTED_MODULE_9__["default"])(M / this.a, e0, e1, e2, e3);
      lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(this.long0 + Math.atan2(p.x, p.y));
      p.x = lon;
      p.y = lat;
      return p;
    }
    else {
      //default case
      rh = Math.sqrt(p.x * p.x + p.y * p.y);
      Az = Math.atan2(p.x, p.y);
      N1 = Object(_common_gN__WEBPACK_IMPORTED_MODULE_7__["default"])(this.a, this.e, this.sin_p12);
      cosAz = Math.cos(Az);
      tmp = this.e * this.cos_p12 * cosAz;
      A = -tmp * tmp / (1 - this.es);
      B = 3 * this.es * (1 - A) * this.sin_p12 * this.cos_p12 * cosAz / (1 - this.es);
      D = rh / N1;
      Ee = D - A * (1 + A) * Math.pow(D, 3) / 6 - B * (1 + 3 * A) * Math.pow(D, 4) / 24;
      F = 1 - A * Ee * Ee / 2 - D * Ee * Ee * Ee / 6;
      psi = Math.asin(this.sin_p12 * Math.cos(Ee) + this.cos_p12 * Math.sin(Ee) * cosAz);
      lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(this.long0 + Math.asin(Math.sin(Az) * Math.sin(Ee) / Math.cos(psi)));
      sinpsi = Math.sin(psi);
      lat = Math.atan2((sinpsi - this.es * F * this.sin_p12) * Math.tan(psi), sinpsi * (1 - this.es));
      p.x = lon;
      p.y = lat;
      return p;
    }
  }

}

var names = ["Azimuthal_Equidistant", "aeqd"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "./node_modules/proj4/lib/projections/cass.js":
/*!****************************************************!*\
  !*** ./node_modules/proj4/lib/projections/cass.js ***!
  \****************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_mlfn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/mlfn */ "./node_modules/proj4/lib/common/mlfn.js");
/* harmony import */ var _common_e0fn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/e0fn */ "./node_modules/proj4/lib/common/e0fn.js");
/* harmony import */ var _common_e1fn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/e1fn */ "./node_modules/proj4/lib/common/e1fn.js");
/* harmony import */ var _common_e2fn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/e2fn */ "./node_modules/proj4/lib/common/e2fn.js");
/* harmony import */ var _common_e3fn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/e3fn */ "./node_modules/proj4/lib/common/e3fn.js");
/* harmony import */ var _common_gN__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/gN */ "./node_modules/proj4/lib/common/gN.js");
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/adjust_lon */ "./node_modules/proj4/lib/common/adjust_lon.js");
/* harmony import */ var _common_adjust_lat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/adjust_lat */ "./node_modules/proj4/lib/common/adjust_lat.js");
/* harmony import */ var _common_imlfn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/imlfn */ "./node_modules/proj4/lib/common/imlfn.js");
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants/values */ "./node_modules/proj4/lib/constants/values.js");











function init() {
  if (!this.sphere) {
    this.e0 = Object(_common_e0fn__WEBPACK_IMPORTED_MODULE_1__["default"])(this.es);
    this.e1 = Object(_common_e1fn__WEBPACK_IMPORTED_MODULE_2__["default"])(this.es);
    this.e2 = Object(_common_e2fn__WEBPACK_IMPORTED_MODULE_3__["default"])(this.es);
    this.e3 = Object(_common_e3fn__WEBPACK_IMPORTED_MODULE_4__["default"])(this.es);
    this.ml0 = this.a * Object(_common_mlfn__WEBPACK_IMPORTED_MODULE_0__["default"])(this.e0, this.e1, this.e2, this.e3, this.lat0);
  }
}

/* Cassini forward equations--mapping lat,long to x,y
  -----------------------------------------------------------------------*/
function forward(p) {

  /* Forward equations
      -----------------*/
  var x, y;
  var lam = p.x;
  var phi = p.y;
  lam = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_6__["default"])(lam - this.long0);

  if (this.sphere) {
    x = this.a * Math.asin(Math.cos(phi) * Math.sin(lam));
    y = this.a * (Math.atan2(Math.tan(phi), Math.cos(lam)) - this.lat0);
  }
  else {
    //ellipsoid
    var sinphi = Math.sin(phi);
    var cosphi = Math.cos(phi);
    var nl = Object(_common_gN__WEBPACK_IMPORTED_MODULE_5__["default"])(this.a, this.e, sinphi);
    var tl = Math.tan(phi) * Math.tan(phi);
    var al = lam * Math.cos(phi);
    var asq = al * al;
    var cl = this.es * cosphi * cosphi / (1 - this.es);
    var ml = this.a * Object(_common_mlfn__WEBPACK_IMPORTED_MODULE_0__["default"])(this.e0, this.e1, this.e2, this.e3, phi);

    x = nl * al * (1 - asq * tl * (1 / 6 - (8 - tl + 8 * cl) * asq / 120));
    y = ml - this.ml0 + nl * sinphi / cosphi * asq * (0.5 + (5 - tl + 6 * cl) * asq / 24);


  }

  p.x = x + this.x0;
  p.y = y + this.y0;
  return p;
}

/* Inverse equations
  -----------------*/
function inverse(p) {
  p.x -= this.x0;
  p.y -= this.y0;
  var x = p.x / this.a;
  var y = p.y / this.a;
  var phi, lam;

  if (this.sphere) {
    var dd = y + this.lat0;
    phi = Math.asin(Math.sin(dd) * Math.cos(x));
    lam = Math.atan2(Math.tan(x), Math.cos(dd));
  }
  else {
    /* ellipsoid */
    var ml1 = this.ml0 / this.a + y;
    var phi1 = Object(_common_imlfn__WEBPACK_IMPORTED_MODULE_8__["default"])(ml1, this.e0, this.e1, this.e2, this.e3);
    if (Math.abs(Math.abs(phi1) - _constants_values__WEBPACK_IMPORTED_MODULE_9__["HALF_PI"]) <= _constants_values__WEBPACK_IMPORTED_MODULE_9__["EPSLN"]) {
      p.x = this.long0;
      p.y = _constants_values__WEBPACK_IMPORTED_MODULE_9__["HALF_PI"];
      if (y < 0) {
        p.y *= -1;
      }
      return p;
    }
    var nl1 = Object(_common_gN__WEBPACK_IMPORTED_MODULE_5__["default"])(this.a, this.e, Math.sin(phi1));

    var rl1 = nl1 * nl1 * nl1 / this.a / this.a * (1 - this.es);
    var tl1 = Math.pow(Math.tan(phi1), 2);
    var dl = x * this.a / nl1;
    var dsq = dl * dl;
    phi = phi1 - nl1 * Math.tan(phi1) / rl1 * dl * dl * (0.5 - (1 + 3 * tl1) * dl * dl / 24);
    lam = dl * (1 - dsq * (tl1 / 3 + (1 + 3 * tl1) * tl1 * dsq / 15)) / Math.cos(phi1);

  }

  p.x = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_6__["default"])(lam + this.long0);
  p.y = Object(_common_adjust_lat__WEBPACK_IMPORTED_MODULE_7__["default"])(phi);
  return p;

}

var names = ["Cassini", "Cassini_Soldner", "cass"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "./node_modules/proj4/lib/projections/cea.js":
/*!***************************************************!*\
  !*** ./node_modules/proj4/lib/projections/cea.js ***!
  \***************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/adjust_lon */ "./node_modules/proj4/lib/common/adjust_lon.js");
/* harmony import */ var _common_qsfnz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/qsfnz */ "./node_modules/proj4/lib/common/qsfnz.js");
/* harmony import */ var _common_msfnz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/msfnz */ "./node_modules/proj4/lib/common/msfnz.js");
/* harmony import */ var _common_iqsfnz__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/iqsfnz */ "./node_modules/proj4/lib/common/iqsfnz.js");





/*
  reference:
    "Cartographic Projection Procedures for the UNIX Environment-
    A User's Manual" by Gerald I. Evenden,
    USGS Open File Report 90-284and Release 4 Interim Reports (2003)
*/
function init() {
  //no-op
  if (!this.sphere) {
    this.k0 = Object(_common_msfnz__WEBPACK_IMPORTED_MODULE_2__["default"])(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts));
  }
}

/* Cylindrical Equal Area forward equations--mapping lat,long to x,y
    ------------------------------------------------------------*/
function forward(p) {
  var lon = p.x;
  var lat = p.y;
  var x, y;
  /* Forward equations
      -----------------*/
  var dlon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(lon - this.long0);
  if (this.sphere) {
    x = this.x0 + this.a * dlon * Math.cos(this.lat_ts);
    y = this.y0 + this.a * Math.sin(lat) / Math.cos(this.lat_ts);
  }
  else {
    var qs = Object(_common_qsfnz__WEBPACK_IMPORTED_MODULE_1__["default"])(this.e, Math.sin(lat));
    x = this.x0 + this.a * this.k0 * dlon;
    y = this.y0 + this.a * qs * 0.5 / this.k0;
  }

  p.x = x;
  p.y = y;
  return p;
}

/* Cylindrical Equal Area inverse equations--mapping x,y to lat/long
    ------------------------------------------------------------*/
function inverse(p) {
  p.x -= this.x0;
  p.y -= this.y0;
  var lon, lat;

  if (this.sphere) {
    lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(this.long0 + (p.x / this.a) / Math.cos(this.lat_ts));
    lat = Math.asin((p.y / this.a) * Math.cos(this.lat_ts));
  }
  else {
    lat = Object(_common_iqsfnz__WEBPACK_IMPORTED_MODULE_3__["default"])(this.e, 2 * p.y * this.k0 / this.a);
    lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(this.long0 + p.x / (this.a * this.k0));
  }

  p.x = lon;
  p.y = lat;
  return p;
}

var names = ["cea"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "./node_modules/proj4/lib/projections/eqc.js":
/*!***************************************************!*\
  !*** ./node_modules/proj4/lib/projections/eqc.js ***!
  \***************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/adjust_lon */ "./node_modules/proj4/lib/common/adjust_lon.js");
/* harmony import */ var _common_adjust_lat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/adjust_lat */ "./node_modules/proj4/lib/common/adjust_lat.js");



function init() {

  this.x0 = this.x0 || 0;
  this.y0 = this.y0 || 0;
  this.lat0 = this.lat0 || 0;
  this.long0 = this.long0 || 0;
  this.lat_ts = this.lat_ts || 0;
  this.title = this.title || "Equidistant Cylindrical (Plate Carre)";

  this.rc = Math.cos(this.lat_ts);
}

// forward equations--mapping lat,long to x,y
// -----------------------------------------------------------------
function forward(p) {

  var lon = p.x;
  var lat = p.y;

  var dlon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(lon - this.long0);
  var dlat = Object(_common_adjust_lat__WEBPACK_IMPORTED_MODULE_1__["default"])(lat - this.lat0);
  p.x = this.x0 + (this.a * dlon * this.rc);
  p.y = this.y0 + (this.a * dlat);
  return p;
}

// inverse equations--mapping x,y to lat/long
// -----------------------------------------------------------------
function inverse(p) {

  var x = p.x;
  var y = p.y;

  p.x = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(this.long0 + ((x - this.x0) / (this.a * this.rc)));
  p.y = Object(_common_adjust_lat__WEBPACK_IMPORTED_MODULE_1__["default"])(this.lat0 + ((y - this.y0) / (this.a)));
  return p;
}

var names = ["Equirectangular", "Equidistant_Cylindrical", "eqc"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "./node_modules/proj4/lib/projections/eqdc.js":
/*!****************************************************!*\
  !*** ./node_modules/proj4/lib/projections/eqdc.js ***!
  \****************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_e0fn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/e0fn */ "./node_modules/proj4/lib/common/e0fn.js");
/* harmony import */ var _common_e1fn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/e1fn */ "./node_modules/proj4/lib/common/e1fn.js");
/* harmony import */ var _common_e2fn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/e2fn */ "./node_modules/proj4/lib/common/e2fn.js");
/* harmony import */ var _common_e3fn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/e3fn */ "./node_modules/proj4/lib/common/e3fn.js");
/* harmony import */ var _common_msfnz__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/msfnz */ "./node_modules/proj4/lib/common/msfnz.js");
/* harmony import */ var _common_mlfn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/mlfn */ "./node_modules/proj4/lib/common/mlfn.js");
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/adjust_lon */ "./node_modules/proj4/lib/common/adjust_lon.js");
/* harmony import */ var _common_adjust_lat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/adjust_lat */ "./node_modules/proj4/lib/common/adjust_lat.js");
/* harmony import */ var _common_imlfn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/imlfn */ "./node_modules/proj4/lib/common/imlfn.js");
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants/values */ "./node_modules/proj4/lib/constants/values.js");











function init() {

  /* Place parameters in static storage for common use
      -------------------------------------------------*/
  // Standard Parallels cannot be equal and on opposite sides of the equator
  if (Math.abs(this.lat1 + this.lat2) < _constants_values__WEBPACK_IMPORTED_MODULE_9__["EPSLN"]) {
    return;
  }
  this.lat2 = this.lat2 || this.lat1;
  this.temp = this.b / this.a;
  this.es = 1 - Math.pow(this.temp, 2);
  this.e = Math.sqrt(this.es);
  this.e0 = Object(_common_e0fn__WEBPACK_IMPORTED_MODULE_0__["default"])(this.es);
  this.e1 = Object(_common_e1fn__WEBPACK_IMPORTED_MODULE_1__["default"])(this.es);
  this.e2 = Object(_common_e2fn__WEBPACK_IMPORTED_MODULE_2__["default"])(this.es);
  this.e3 = Object(_common_e3fn__WEBPACK_IMPORTED_MODULE_3__["default"])(this.es);

  this.sinphi = Math.sin(this.lat1);
  this.cosphi = Math.cos(this.lat1);

  this.ms1 = Object(_common_msfnz__WEBPACK_IMPORTED_MODULE_4__["default"])(this.e, this.sinphi, this.cosphi);
  this.ml1 = Object(_common_mlfn__WEBPACK_IMPORTED_MODULE_5__["default"])(this.e0, this.e1, this.e2, this.e3, this.lat1);

  if (Math.abs(this.lat1 - this.lat2) < _constants_values__WEBPACK_IMPORTED_MODULE_9__["EPSLN"]) {
    this.ns = this.sinphi;
  }
  else {
    this.sinphi = Math.sin(this.lat2);
    this.cosphi = Math.cos(this.lat2);
    this.ms2 = Object(_common_msfnz__WEBPACK_IMPORTED_MODULE_4__["default"])(this.e, this.sinphi, this.cosphi);
    this.ml2 = Object(_common_mlfn__WEBPACK_IMPORTED_MODULE_5__["default"])(this.e0, this.e1, this.e2, this.e3, this.lat2);
    this.ns = (this.ms1 - this.ms2) / (this.ml2 - this.ml1);
  }
  this.g = this.ml1 + this.ms1 / this.ns;
  this.ml0 = Object(_common_mlfn__WEBPACK_IMPORTED_MODULE_5__["default"])(this.e0, this.e1, this.e2, this.e3, this.lat0);
  this.rh = this.a * (this.g - this.ml0);
}

/* Equidistant Conic forward equations--mapping lat,long to x,y
  -----------------------------------------------------------*/
function forward(p) {
  var lon = p.x;
  var lat = p.y;
  var rh1;

  /* Forward equations
      -----------------*/
  if (this.sphere) {
    rh1 = this.a * (this.g - lat);
  }
  else {
    var ml = Object(_common_mlfn__WEBPACK_IMPORTED_MODULE_5__["default"])(this.e0, this.e1, this.e2, this.e3, lat);
    rh1 = this.a * (this.g - ml);
  }
  var theta = this.ns * Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_6__["default"])(lon - this.long0);
  var x = this.x0 + rh1 * Math.sin(theta);
  var y = this.y0 + this.rh - rh1 * Math.cos(theta);
  p.x = x;
  p.y = y;
  return p;
}

/* Inverse equations
  -----------------*/
function inverse(p) {
  p.x -= this.x0;
  p.y = this.rh - p.y + this.y0;
  var con, rh1, lat, lon;
  if (this.ns >= 0) {
    rh1 = Math.sqrt(p.x * p.x + p.y * p.y);
    con = 1;
  }
  else {
    rh1 = -Math.sqrt(p.x * p.x + p.y * p.y);
    con = -1;
  }
  var theta = 0;
  if (rh1 !== 0) {
    theta = Math.atan2(con * p.x, con * p.y);
  }

  if (this.sphere) {
    lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_6__["default"])(this.long0 + theta / this.ns);
    lat = Object(_common_adjust_lat__WEBPACK_IMPORTED_MODULE_7__["default"])(this.g - rh1 / this.a);
    p.x = lon;
    p.y = lat;
    return p;
  }
  else {
    var ml = this.g - rh1 / this.a;
    lat = Object(_common_imlfn__WEBPACK_IMPORTED_MODULE_8__["default"])(ml, this.e0, this.e1, this.e2, this.e3);
    lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_6__["default"])(this.long0 + theta / this.ns);
    p.x = lon;
    p.y = lat;
    return p;
  }

}

var names = ["Equidistant_Conic", "eqdc"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "./node_modules/proj4/lib/projections/etmerc.js":
/*!******************************************************!*\
  !*** ./node_modules/proj4/lib/projections/etmerc.js ***!
  \******************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _projections_tmerc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projections/tmerc */ "./node_modules/proj4/lib/projections/tmerc.js");
/* harmony import */ var _common_sinh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/sinh */ "./node_modules/proj4/lib/common/sinh.js");
/* harmony import */ var _common_hypot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/hypot */ "./node_modules/proj4/lib/common/hypot.js");
/* harmony import */ var _common_asinhy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/asinhy */ "./node_modules/proj4/lib/common/asinhy.js");
/* harmony import */ var _common_gatg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/gatg */ "./node_modules/proj4/lib/common/gatg.js");
/* harmony import */ var _common_clens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/clens */ "./node_modules/proj4/lib/common/clens.js");
/* harmony import */ var _common_clens_cmplx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/clens_cmplx */ "./node_modules/proj4/lib/common/clens_cmplx.js");
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/adjust_lon */ "./node_modules/proj4/lib/common/adjust_lon.js");
// Heavily based on this etmerc projection implementation
// https://github.com/mbloch/mapshaper-proj/blob/master/src/projections/etmerc.js










function init() {
  if (!this.approx && (isNaN(this.es) || this.es <= 0)) {
    throw new Error('Incorrect elliptical usage. Try using the +approx option in the proj string, or PROJECTION["Fast_Transverse_Mercator"] in the WKT.');
  }
  if (this.approx) {
    // When '+approx' is set, use tmerc instead
    _projections_tmerc__WEBPACK_IMPORTED_MODULE_0__["default"].init.apply(this);
    this.forward = _projections_tmerc__WEBPACK_IMPORTED_MODULE_0__["default"].forward;
    this.inverse = _projections_tmerc__WEBPACK_IMPORTED_MODULE_0__["default"].inverse;
  }

  this.x0 = this.x0 !== undefined ? this.x0 : 0;
  this.y0 = this.y0 !== undefined ? this.y0 : 0;
  this.long0 = this.long0 !== undefined ? this.long0 : 0;
  this.lat0 = this.lat0 !== undefined ? this.lat0 : 0;

  this.cgb = [];
  this.cbg = [];
  this.utg = [];
  this.gtu = [];

  var f = this.es / (1 + Math.sqrt(1 - this.es));
  var n = f / (2 - f);
  var np = n;

  this.cgb[0] = n * (2 + n * (-2 / 3 + n * (-2 + n * (116 / 45 + n * (26 / 45 + n * (-2854 / 675 ))))));
  this.cbg[0] = n * (-2 + n * ( 2 / 3 + n * ( 4 / 3 + n * (-82 / 45 + n * (32 / 45 + n * (4642 / 4725))))));

  np = np * n;
  this.cgb[1] = np * (7 / 3 + n * (-8 / 5 + n * (-227 / 45 + n * (2704 / 315 + n * (2323 / 945)))));
  this.cbg[1] = np * (5 / 3 + n * (-16 / 15 + n * ( -13 / 9 + n * (904 / 315 + n * (-1522 / 945)))));

  np = np * n;
  this.cgb[2] = np * (56 / 15 + n * (-136 / 35 + n * (-1262 / 105 + n * (73814 / 2835))));
  this.cbg[2] = np * (-26 / 15 + n * (34 / 21 + n * (8 / 5 + n * (-12686 / 2835))));

  np = np * n;
  this.cgb[3] = np * (4279 / 630 + n * (-332 / 35 + n * (-399572 / 14175)));
  this.cbg[3] = np * (1237 / 630 + n * (-12 / 5 + n * ( -24832 / 14175)));

  np = np * n;
  this.cgb[4] = np * (4174 / 315 + n * (-144838 / 6237));
  this.cbg[4] = np * (-734 / 315 + n * (109598 / 31185));

  np = np * n;
  this.cgb[5] = np * (601676 / 22275);
  this.cbg[5] = np * (444337 / 155925);

  np = Math.pow(n, 2);
  this.Qn = this.k0 / (1 + n) * (1 + np * (1 / 4 + np * (1 / 64 + np / 256)));

  this.utg[0] = n * (-0.5 + n * ( 2 / 3 + n * (-37 / 96 + n * ( 1 / 360 + n * (81 / 512 + n * (-96199 / 604800))))));
  this.gtu[0] = n * (0.5 + n * (-2 / 3 + n * (5 / 16 + n * (41 / 180 + n * (-127 / 288 + n * (7891 / 37800))))));

  this.utg[1] = np * (-1 / 48 + n * (-1 / 15 + n * (437 / 1440 + n * (-46 / 105 + n * (1118711 / 3870720)))));
  this.gtu[1] = np * (13 / 48 + n * (-3 / 5 + n * (557 / 1440 + n * (281 / 630 + n * (-1983433 / 1935360)))));

  np = np * n;
  this.utg[2] = np * (-17 / 480 + n * (37 / 840 + n * (209 / 4480 + n * (-5569 / 90720 ))));
  this.gtu[2] = np * (61 / 240 + n * (-103 / 140 + n * (15061 / 26880 + n * (167603 / 181440))));

  np = np * n;
  this.utg[3] = np * (-4397 / 161280 + n * (11 / 504 + n * (830251 / 7257600)));
  this.gtu[3] = np * (49561 / 161280 + n * (-179 / 168 + n * (6601661 / 7257600)));

  np = np * n;
  this.utg[4] = np * (-4583 / 161280 + n * (108847 / 3991680));
  this.gtu[4] = np * (34729 / 80640 + n * (-3418889 / 1995840));

  np = np * n;
  this.utg[5] = np * (-20648693 / 638668800);
  this.gtu[5] = np * (212378941 / 319334400);

  var Z = Object(_common_gatg__WEBPACK_IMPORTED_MODULE_4__["default"])(this.cbg, this.lat0);
  this.Zb = -this.Qn * (Z + Object(_common_clens__WEBPACK_IMPORTED_MODULE_5__["default"])(this.gtu, 2 * Z));
}

function forward(p) {
  var Ce = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_7__["default"])(p.x - this.long0);
  var Cn = p.y;

  Cn = Object(_common_gatg__WEBPACK_IMPORTED_MODULE_4__["default"])(this.cbg, Cn);
  var sin_Cn = Math.sin(Cn);
  var cos_Cn = Math.cos(Cn);
  var sin_Ce = Math.sin(Ce);
  var cos_Ce = Math.cos(Ce);

  Cn = Math.atan2(sin_Cn, cos_Ce * cos_Cn);
  Ce = Math.atan2(sin_Ce * cos_Cn, Object(_common_hypot__WEBPACK_IMPORTED_MODULE_2__["default"])(sin_Cn, cos_Cn * cos_Ce));
  Ce = Object(_common_asinhy__WEBPACK_IMPORTED_MODULE_3__["default"])(Math.tan(Ce));

  var tmp = Object(_common_clens_cmplx__WEBPACK_IMPORTED_MODULE_6__["default"])(this.gtu, 2 * Cn, 2 * Ce);

  Cn = Cn + tmp[0];
  Ce = Ce + tmp[1];

  var x;
  var y;

  if (Math.abs(Ce) <= 2.623395162778) {
    x = this.a * (this.Qn * Ce) + this.x0;
    y = this.a * (this.Qn * Cn + this.Zb) + this.y0;
  }
  else {
    x = Infinity;
    y = Infinity;
  }

  p.x = x;
  p.y = y;

  return p;
}

function inverse(p) {
  var Ce = (p.x - this.x0) * (1 / this.a);
  var Cn = (p.y - this.y0) * (1 / this.a);

  Cn = (Cn - this.Zb) / this.Qn;
  Ce = Ce / this.Qn;

  var lon;
  var lat;

  if (Math.abs(Ce) <= 2.623395162778) {
    var tmp = Object(_common_clens_cmplx__WEBPACK_IMPORTED_MODULE_6__["default"])(this.utg, 2 * Cn, 2 * Ce);

    Cn = Cn + tmp[0];
    Ce = Ce + tmp[1];
    Ce = Math.atan(Object(_common_sinh__WEBPACK_IMPORTED_MODULE_1__["default"])(Ce));

    var sin_Cn = Math.sin(Cn);
    var cos_Cn = Math.cos(Cn);
    var sin_Ce = Math.sin(Ce);
    var cos_Ce = Math.cos(Ce);

    Cn = Math.atan2(sin_Cn * cos_Ce, Object(_common_hypot__WEBPACK_IMPORTED_MODULE_2__["default"])(sin_Ce, cos_Ce * cos_Cn));
    Ce = Math.atan2(sin_Ce, cos_Ce * cos_Cn);

    lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_7__["default"])(Ce + this.long0);
    lat = Object(_common_gatg__WEBPACK_IMPORTED_MODULE_4__["default"])(this.cgb, Cn);
  }
  else {
    lon = Infinity;
    lat = Infinity;
  }

  p.x = lon;
  p.y = lat;

  return p;
}

var names = ["Extended_Transverse_Mercator", "Extended Transverse Mercator", "etmerc", "Transverse_Mercator", "Transverse Mercator", "tmerc"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "./node_modules/proj4/lib/projections/gauss.js":
/*!*****************************************************!*\
  !*** ./node_modules/proj4/lib/projections/gauss.js ***!
  \*****************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_srat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/srat */ "./node_modules/proj4/lib/common/srat.js");
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/values */ "./node_modules/proj4/lib/constants/values.js");

var MAX_ITER = 20;


function init() {
  var sphi = Math.sin(this.lat0);
  var cphi = Math.cos(this.lat0);
  cphi *= cphi;
  this.rc = Math.sqrt(1 - this.es) / (1 - this.es * sphi * sphi);
  this.C = Math.sqrt(1 + this.es * cphi * cphi / (1 - this.es));
  this.phic0 = Math.asin(sphi / this.C);
  this.ratexp = 0.5 * this.C * this.e;
  this.K = Math.tan(0.5 * this.phic0 + _constants_values__WEBPACK_IMPORTED_MODULE_1__["FORTPI"]) / (Math.pow(Math.tan(0.5 * this.lat0 + _constants_values__WEBPACK_IMPORTED_MODULE_1__["FORTPI"]), this.C) * Object(_common_srat__WEBPACK_IMPORTED_MODULE_0__["default"])(this.e * sphi, this.ratexp));
}

function forward(p) {
  var lon = p.x;
  var lat = p.y;

  p.y = 2 * Math.atan(this.K * Math.pow(Math.tan(0.5 * lat + _constants_values__WEBPACK_IMPORTED_MODULE_1__["FORTPI"]), this.C) * Object(_common_srat__WEBPACK_IMPORTED_MODULE_0__["default"])(this.e * Math.sin(lat), this.ratexp)) - _constants_values__WEBPACK_IMPORTED_MODULE_1__["HALF_PI"];
  p.x = this.C * lon;
  return p;
}

function inverse(p) {
  var DEL_TOL = 1e-14;
  var lon = p.x / this.C;
  var lat = p.y;
  var num = Math.pow(Math.tan(0.5 * lat + _constants_values__WEBPACK_IMPORTED_MODULE_1__["FORTPI"]) / this.K, 1 / this.C);
  for (var i = MAX_ITER; i > 0; --i) {
    lat = 2 * Math.atan(num * Object(_common_srat__WEBPACK_IMPORTED_MODULE_0__["default"])(this.e * Math.sin(p.y), - 0.5 * this.e)) - _constants_values__WEBPACK_IMPORTED_MODULE_1__["HALF_PI"];
    if (Math.abs(lat - p.y) < DEL_TOL) {
      break;
    }
    p.y = lat;
  }
  /* convergence failed */
  if (!i) {
    return null;
  }
  p.x = lon;
  p.y = lat;
  return p;
}

var names = ["gauss"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "./node_modules/proj4/lib/projections/geocent.js":
/*!*******************************************************!*\
  !*** ./node_modules/proj4/lib/projections/geocent.js ***!
  \*******************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _datumUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../datumUtils */ "./node_modules/proj4/lib/datumUtils.js");


function init() {
    this.name = 'geocent';

}

function forward(p) {
    var point = Object(_datumUtils__WEBPACK_IMPORTED_MODULE_0__["geodeticToGeocentric"])(p, this.es, this.a);
    return point;
}

function inverse(p) {
    var point = Object(_datumUtils__WEBPACK_IMPORTED_MODULE_0__["geocentricToGeodetic"])(p, this.es, this.a, this.b);
    return point;
}

var names = ["Geocentric", 'geocentric', "geocent", "Geocent"];
/* harmony default export */ __webpack_exports__["default"] = ({
    init: init,
    forward: forward,
    inverse: inverse,
    names: names
});

/***/ }),

/***/ "./node_modules/proj4/lib/projections/gnom.js":
/*!****************************************************!*\
  !*** ./node_modules/proj4/lib/projections/gnom.js ***!
  \****************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/adjust_lon */ "./node_modules/proj4/lib/common/adjust_lon.js");
/* harmony import */ var _common_asinz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/asinz */ "./node_modules/proj4/lib/common/asinz.js");
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/values */ "./node_modules/proj4/lib/constants/values.js");




/*
  reference:
    Wolfram Mathworld "Gnomonic Projection"
    http://mathworld.wolfram.com/GnomonicProjection.html
    Accessed: 12th November 2009
  */
function init() {

  /* Place parameters in static storage for common use
      -------------------------------------------------*/
  this.sin_p14 = Math.sin(this.lat0);
  this.cos_p14 = Math.cos(this.lat0);
  // Approximation for projecting points to the horizon (infinity)
  this.infinity_dist = 1000 * this.a;
  this.rc = 1;
}

/* Gnomonic forward equations--mapping lat,long to x,y
    ---------------------------------------------------*/
function forward(p) {
  var sinphi, cosphi; /* sin and cos value        */
  var dlon; /* delta longitude value      */
  var coslon; /* cos of longitude        */
  var ksp; /* scale factor          */
  var g;
  var x, y;
  var lon = p.x;
  var lat = p.y;
  /* Forward equations
      -----------------*/
  dlon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(lon - this.long0);

  sinphi = Math.sin(lat);
  cosphi = Math.cos(lat);

  coslon = Math.cos(dlon);
  g = this.sin_p14 * sinphi + this.cos_p14 * cosphi * coslon;
  ksp = 1;
  if ((g > 0) || (Math.abs(g) <= _constants_values__WEBPACK_IMPORTED_MODULE_2__["EPSLN"])) {
    x = this.x0 + this.a * ksp * cosphi * Math.sin(dlon) / g;
    y = this.y0 + this.a * ksp * (this.cos_p14 * sinphi - this.sin_p14 * cosphi * coslon) / g;
  }
  else {

    // Point is in the opposing hemisphere and is unprojectable
    // We still need to return a reasonable point, so we project
    // to infinity, on a bearing
    // equivalent to the northern hemisphere equivalent
    // This is a reasonable approximation for short shapes and lines that
    // straddle the horizon.

    x = this.x0 + this.infinity_dist * cosphi * Math.sin(dlon);
    y = this.y0 + this.infinity_dist * (this.cos_p14 * sinphi - this.sin_p14 * cosphi * coslon);

  }
  p.x = x;
  p.y = y;
  return p;
}

function inverse(p) {
  var rh; /* Rho */
  var sinc, cosc;
  var c;
  var lon, lat;

  /* Inverse equations
      -----------------*/
  p.x = (p.x - this.x0) / this.a;
  p.y = (p.y - this.y0) / this.a;

  p.x /= this.k0;
  p.y /= this.k0;

  if ((rh = Math.sqrt(p.x * p.x + p.y * p.y))) {
    c = Math.atan2(rh, this.rc);
    sinc = Math.sin(c);
    cosc = Math.cos(c);

    lat = Object(_common_asinz__WEBPACK_IMPORTED_MODULE_1__["default"])(cosc * this.sin_p14 + (p.y * sinc * this.cos_p14) / rh);
    lon = Math.atan2(p.x * sinc, rh * this.cos_p14 * cosc - p.y * this.sin_p14 * sinc);
    lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(this.long0 + lon);
  }
  else {
    lat = this.phic0;
    lon = 0;
  }

  p.x = lon;
  p.y = lat;
  return p;
}

var names = ["gnom"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "./node_modules/proj4/lib/projections/krovak.js":
/*!******************************************************!*\
  !*** ./node_modules/proj4/lib/projections/krovak.js ***!
  \******************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/adjust_lon */ "./node_modules/proj4/lib/common/adjust_lon.js");


function init() {
  this.a = 6377397.155;
  this.es = 0.006674372230614;
  this.e = Math.sqrt(this.es);
  if (!this.lat0) {
    this.lat0 = 0.863937979737193;
  }
  if (!this.long0) {
    this.long0 = 0.7417649320975901 - 0.308341501185665;
  }
  /* if scale not set default to 0.9999 */
  if (!this.k0) {
    this.k0 = 0.9999;
  }
  this.s45 = 0.785398163397448; /* 45 */
  this.s90 = 2 * this.s45;
  this.fi0 = this.lat0;
  this.e2 = this.es;
  this.e = Math.sqrt(this.e2);
  this.alfa = Math.sqrt(1 + (this.e2 * Math.pow(Math.cos(this.fi0), 4)) / (1 - this.e2));
  this.uq = 1.04216856380474;
  this.u0 = Math.asin(Math.sin(this.fi0) / this.alfa);
  this.g = Math.pow((1 + this.e * Math.sin(this.fi0)) / (1 - this.e * Math.sin(this.fi0)), this.alfa * this.e / 2);
  this.k = Math.tan(this.u0 / 2 + this.s45) / Math.pow(Math.tan(this.fi0 / 2 + this.s45), this.alfa) * this.g;
  this.k1 = this.k0;
  this.n0 = this.a * Math.sqrt(1 - this.e2) / (1 - this.e2 * Math.pow(Math.sin(this.fi0), 2));
  this.s0 = 1.37008346281555;
  this.n = Math.sin(this.s0);
  this.ro0 = this.k1 * this.n0 / Math.tan(this.s0);
  this.ad = this.s90 - this.uq;
}

/* ellipsoid */
/* calculate xy from lat/lon */
/* Constants, identical to inverse transform function */
function forward(p) {
  var gfi, u, deltav, s, d, eps, ro;
  var lon = p.x;
  var lat = p.y;
  var delta_lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(lon - this.long0);
  /* Transformation */
  gfi = Math.pow(((1 + this.e * Math.sin(lat)) / (1 - this.e * Math.sin(lat))), (this.alfa * this.e / 2));
  u = 2 * (Math.atan(this.k * Math.pow(Math.tan(lat / 2 + this.s45), this.alfa) / gfi) - this.s45);
  deltav = -delta_lon * this.alfa;
  s = Math.asin(Math.cos(this.ad) * Math.sin(u) + Math.sin(this.ad) * Math.cos(u) * Math.cos(deltav));
  d = Math.asin(Math.cos(u) * Math.sin(deltav) / Math.cos(s));
  eps = this.n * d;
  ro = this.ro0 * Math.pow(Math.tan(this.s0 / 2 + this.s45), this.n) / Math.pow(Math.tan(s / 2 + this.s45), this.n);
  p.y = ro * Math.cos(eps) / 1;
  p.x = ro * Math.sin(eps) / 1;

  if (!this.czech) {
    p.y *= -1;
    p.x *= -1;
  }
  return (p);
}

/* calculate lat/lon from xy */
function inverse(p) {
  var u, deltav, s, d, eps, ro, fi1;
  var ok;

  /* Transformation */
  /* revert y, x*/
  var tmp = p.x;
  p.x = p.y;
  p.y = tmp;
  if (!this.czech) {
    p.y *= -1;
    p.x *= -1;
  }
  ro = Math.sqrt(p.x * p.x + p.y * p.y);
  eps = Math.atan2(p.y, p.x);
  d = eps / Math.sin(this.s0);
  s = 2 * (Math.atan(Math.pow(this.ro0 / ro, 1 / this.n) * Math.tan(this.s0 / 2 + this.s45)) - this.s45);
  u = Math.asin(Math.cos(this.ad) * Math.sin(s) - Math.sin(this.ad) * Math.cos(s) * Math.cos(d));
  deltav = Math.asin(Math.cos(s) * Math.sin(d) / Math.cos(u));
  p.x = this.long0 - deltav / this.alfa;
  fi1 = u;
  ok = 0;
  var iter = 0;
  do {
    p.y = 2 * (Math.atan(Math.pow(this.k, - 1 / this.alfa) * Math.pow(Math.tan(u / 2 + this.s45), 1 / this.alfa) * Math.pow((1 + this.e * Math.sin(fi1)) / (1 - this.e * Math.sin(fi1)), this.e / 2)) - this.s45);
    if (Math.abs(fi1 - p.y) < 0.0000000001) {
      ok = 1;
    }
    fi1 = p.y;
    iter += 1;
  } while (ok === 0 && iter < 15);
  if (iter >= 15) {
    return null;
  }

  return (p);
}

var names = ["Krovak", "krovak"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "./node_modules/proj4/lib/projections/laea.js":
/*!****************************************************!*\
  !*** ./node_modules/proj4/lib/projections/laea.js ***!
  \****************************************************/
/*! exports provided: S_POLE, N_POLE, EQUIT, OBLIQ, init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S_POLE", function() { return S_POLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N_POLE", function() { return N_POLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EQUIT", function() { return EQUIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OBLIQ", function() { return OBLIQ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/values */ "./node_modules/proj4/lib/constants/values.js");
/* harmony import */ var _common_qsfnz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/qsfnz */ "./node_modules/proj4/lib/common/qsfnz.js");
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/adjust_lon */ "./node_modules/proj4/lib/common/adjust_lon.js");






/*
  reference
    "New Equal-Area Map Projections for Noncircular Regions", John P. Snyder,
    The American Cartographer, Vol 15, No. 4, October 1988, pp. 341-355.
  */

var S_POLE = 1;

var N_POLE = 2;
var EQUIT = 3;
var OBLIQ = 4;

/* Initialize the Lambert Azimuthal Equal Area projection
  ------------------------------------------------------*/
function init() {
  var t = Math.abs(this.lat0);
  if (Math.abs(t - _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"]) < _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
    this.mode = this.lat0 < 0 ? this.S_POLE : this.N_POLE;
  }
  else if (Math.abs(t) < _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
    this.mode = this.EQUIT;
  }
  else {
    this.mode = this.OBLIQ;
  }
  if (this.es > 0) {
    var sinphi;

    this.qp = Object(_common_qsfnz__WEBPACK_IMPORTED_MODULE_1__["default"])(this.e, 1);
    this.mmf = 0.5 / (1 - this.es);
    this.apa = authset(this.es);
    switch (this.mode) {
    case this.N_POLE:
      this.dd = 1;
      break;
    case this.S_POLE:
      this.dd = 1;
      break;
    case this.EQUIT:
      this.rq = Math.sqrt(0.5 * this.qp);
      this.dd = 1 / this.rq;
      this.xmf = 1;
      this.ymf = 0.5 * this.qp;
      break;
    case this.OBLIQ:
      this.rq = Math.sqrt(0.5 * this.qp);
      sinphi = Math.sin(this.lat0);
      this.sinb1 = Object(_common_qsfnz__WEBPACK_IMPORTED_MODULE_1__["default"])(this.e, sinphi) / this.qp;
      this.cosb1 = Math.sqrt(1 - this.sinb1 * this.sinb1);
      this.dd = Math.cos(this.lat0) / (Math.sqrt(1 - this.es * sinphi * sinphi) * this.rq * this.cosb1);
      this.ymf = (this.xmf = this.rq) / this.dd;
      this.xmf *= this.dd;
      break;
    }
  }
  else {
    if (this.mode === this.OBLIQ) {
      this.sinph0 = Math.sin(this.lat0);
      this.cosph0 = Math.cos(this.lat0);
    }
  }
}

/* Lambert Azimuthal Equal Area forward equations--mapping lat,long to x,y
  -----------------------------------------------------------------------*/
function forward(p) {

  /* Forward equations
      -----------------*/
  var x, y, coslam, sinlam, sinphi, q, sinb, cosb, b, cosphi;
  var lam = p.x;
  var phi = p.y;

  lam = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_2__["default"])(lam - this.long0);
  if (this.sphere) {
    sinphi = Math.sin(phi);
    cosphi = Math.cos(phi);
    coslam = Math.cos(lam);
    if (this.mode === this.OBLIQ || this.mode === this.EQUIT) {
      y = (this.mode === this.EQUIT) ? 1 + cosphi * coslam : 1 + this.sinph0 * sinphi + this.cosph0 * cosphi * coslam;
      if (y <= _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
        return null;
      }
      y = Math.sqrt(2 / y);
      x = y * cosphi * Math.sin(lam);
      y *= (this.mode === this.EQUIT) ? sinphi : this.cosph0 * sinphi - this.sinph0 * cosphi * coslam;
    }
    else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
      if (this.mode === this.N_POLE) {
        coslam = -coslam;
      }
      if (Math.abs(phi + this.lat0) < _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
        return null;
      }
      y = _constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"] - phi * 0.5;
      y = 2 * ((this.mode === this.S_POLE) ? Math.cos(y) : Math.sin(y));
      x = y * Math.sin(lam);
      y *= coslam;
    }
  }
  else {
    sinb = 0;
    cosb = 0;
    b = 0;
    coslam = Math.cos(lam);
    sinlam = Math.sin(lam);
    sinphi = Math.sin(phi);
    q = Object(_common_qsfnz__WEBPACK_IMPORTED_MODULE_1__["default"])(this.e, sinphi);
    if (this.mode === this.OBLIQ || this.mode === this.EQUIT) {
      sinb = q / this.qp;
      cosb = Math.sqrt(1 - sinb * sinb);
    }
    switch (this.mode) {
    case this.OBLIQ:
      b = 1 + this.sinb1 * sinb + this.cosb1 * cosb * coslam;
      break;
    case this.EQUIT:
      b = 1 + cosb * coslam;
      break;
    case this.N_POLE:
      b = _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] + phi;
      q = this.qp - q;
      break;
    case this.S_POLE:
      b = phi - _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
      q = this.qp + q;
      break;
    }
    if (Math.abs(b) < _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
      return null;
    }
    switch (this.mode) {
    case this.OBLIQ:
    case this.EQUIT:
      b = Math.sqrt(2 / b);
      if (this.mode === this.OBLIQ) {
        y = this.ymf * b * (this.cosb1 * sinb - this.sinb1 * cosb * coslam);
      }
      else {
        y = (b = Math.sqrt(2 / (1 + cosb * coslam))) * sinb * this.ymf;
      }
      x = this.xmf * b * cosb * sinlam;
      break;
    case this.N_POLE:
    case this.S_POLE:
      if (q >= 0) {
        x = (b = Math.sqrt(q)) * sinlam;
        y = coslam * ((this.mode === this.S_POLE) ? b : -b);
      }
      else {
        x = y = 0;
      }
      break;
    }
  }

  p.x = this.a * x + this.x0;
  p.y = this.a * y + this.y0;
  return p;
}

/* Inverse equations
  -----------------*/
function inverse(p) {
  p.x -= this.x0;
  p.y -= this.y0;
  var x = p.x / this.a;
  var y = p.y / this.a;
  var lam, phi, cCe, sCe, q, rho, ab;
  if (this.sphere) {
    var cosz = 0,
      rh, sinz = 0;

    rh = Math.sqrt(x * x + y * y);
    phi = rh * 0.5;
    if (phi > 1) {
      return null;
    }
    phi = 2 * Math.asin(phi);
    if (this.mode === this.OBLIQ || this.mode === this.EQUIT) {
      sinz = Math.sin(phi);
      cosz = Math.cos(phi);
    }
    switch (this.mode) {
    case this.EQUIT:
      phi = (Math.abs(rh) <= _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) ? 0 : Math.asin(y * sinz / rh);
      x *= sinz;
      y = cosz * rh;
      break;
    case this.OBLIQ:
      phi = (Math.abs(rh) <= _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) ? this.lat0 : Math.asin(cosz * this.sinph0 + y * sinz * this.cosph0 / rh);
      x *= sinz * this.cosph0;
      y = (cosz - Math.sin(phi) * this.sinph0) * rh;
      break;
    case this.N_POLE:
      y = -y;
      phi = _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] - phi;
      break;
    case this.S_POLE:
      phi -= _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
      break;
    }
    lam = (y === 0 && (this.mode === this.EQUIT || this.mode === this.OBLIQ)) ? 0 : Math.atan2(x, y);
  }
  else {
    ab = 0;
    if (this.mode === this.OBLIQ || this.mode === this.EQUIT) {
      x /= this.dd;
      y *= this.dd;
      rho = Math.sqrt(x * x + y * y);
      if (rho < _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
        p.x = this.long0;
        p.y = this.lat0;
        return p;
      }
      sCe = 2 * Math.asin(0.5 * rho / this.rq);
      cCe = Math.cos(sCe);
      x *= (sCe = Math.sin(sCe));
      if (this.mode === this.OBLIQ) {
        ab = cCe * this.sinb1 + y * sCe * this.cosb1 / rho;
        q = this.qp * ab;
        y = rho * this.cosb1 * cCe - y * this.sinb1 * sCe;
      }
      else {
        ab = y * sCe / rho;
        q = this.qp * ab;
        y = rho * cCe;
      }
    }
    else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
      if (this.mode === this.N_POLE) {
        y = -y;
      }
      q = (x * x + y * y);
      if (!q) {
        p.x = this.long0;
        p.y = this.lat0;
        return p;
      }
      ab = 1 - q / this.qp;
      if (this.mode === this.S_POLE) {
        ab = -ab;
      }
    }
    lam = Math.atan2(x, y);
    phi = authlat(Math.asin(ab), this.apa);
  }

  p.x = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_2__["default"])(this.long0 + lam);
  p.y = phi;
  return p;
}

/* determine latitude from authalic latitude */
var P00 = 0.33333333333333333333;

var P01 = 0.17222222222222222222;
var P02 = 0.10257936507936507936;
var P10 = 0.06388888888888888888;
var P11 = 0.06640211640211640211;
var P20 = 0.01641501294219154443;

function authset(es) {
  var t;
  var APA = [];
  APA[0] = es * P00;
  t = es * es;
  APA[0] += t * P01;
  APA[1] = t * P10;
  t *= es;
  APA[0] += t * P02;
  APA[1] += t * P11;
  APA[2] = t * P20;
  return APA;
}

function authlat(beta, APA) {
  var t = beta + beta;
  return (beta + APA[0] * Math.sin(t) + APA[1] * Math.sin(t + t) + APA[2] * Math.sin(t + t + t));
}

var names = ["Lambert Azimuthal Equal Area", "Lambert_Azimuthal_Equal_Area", "laea"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names,
  S_POLE: S_POLE,
  N_POLE: N_POLE,
  EQUIT: EQUIT,
  OBLIQ: OBLIQ
});


/***/ }),

/***/ "./node_modules/proj4/lib/projections/lcc.js":
/*!***************************************************!*\
  !*** ./node_modules/proj4/lib/projections/lcc.js ***!
  \***************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_msfnz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/msfnz */ "./node_modules/proj4/lib/common/msfnz.js");
/* harmony import */ var _common_tsfnz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/tsfnz */ "./node_modules/proj4/lib/common/tsfnz.js");
/* harmony import */ var _common_sign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/sign */ "./node_modules/proj4/lib/common/sign.js");
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/adjust_lon */ "./node_modules/proj4/lib/common/adjust_lon.js");
/* harmony import */ var _common_phi2z__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/phi2z */ "./node_modules/proj4/lib/common/phi2z.js");
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/values */ "./node_modules/proj4/lib/constants/values.js");






function init() {
  
  //double lat0;                    /* the reference latitude               */
  //double long0;                   /* the reference longitude              */
  //double lat1;                    /* first standard parallel              */
  //double lat2;                    /* second standard parallel             */
  //double r_maj;                   /* major axis                           */
  //double r_min;                   /* minor axis                           */
  //double false_east;              /* x offset in meters                   */
  //double false_north;             /* y offset in meters                   */
  
  //the above value can be set with proj4.defs
  //example: proj4.defs("EPSG:2154","+proj=lcc +lat_1=49 +lat_2=44 +lat_0=46.5 +lon_0=3 +x_0=700000 +y_0=6600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");

  if (!this.lat2) {
    this.lat2 = this.lat1;
  } //if lat2 is not defined
  if (!this.k0) {
    this.k0 = 1;
  }
  this.x0 = this.x0 || 0;
  this.y0 = this.y0 || 0;
  // Standard Parallels cannot be equal and on opposite sides of the equator
  if (Math.abs(this.lat1 + this.lat2) < _constants_values__WEBPACK_IMPORTED_MODULE_5__["EPSLN"]) {
    return;
  }

  var temp = this.b / this.a;
  this.e = Math.sqrt(1 - temp * temp);

  var sin1 = Math.sin(this.lat1);
  var cos1 = Math.cos(this.lat1);
  var ms1 = Object(_common_msfnz__WEBPACK_IMPORTED_MODULE_0__["default"])(this.e, sin1, cos1);
  var ts1 = Object(_common_tsfnz__WEBPACK_IMPORTED_MODULE_1__["default"])(this.e, this.lat1, sin1);

  var sin2 = Math.sin(this.lat2);
  var cos2 = Math.cos(this.lat2);
  var ms2 = Object(_common_msfnz__WEBPACK_IMPORTED_MODULE_0__["default"])(this.e, sin2, cos2);
  var ts2 = Object(_common_tsfnz__WEBPACK_IMPORTED_MODULE_1__["default"])(this.e, this.lat2, sin2);

  var ts0 = Object(_common_tsfnz__WEBPACK_IMPORTED_MODULE_1__["default"])(this.e, this.lat0, Math.sin(this.lat0));

  if (Math.abs(this.lat1 - this.lat2) > _constants_values__WEBPACK_IMPORTED_MODULE_5__["EPSLN"]) {
    this.ns = Math.log(ms1 / ms2) / Math.log(ts1 / ts2);
  }
  else {
    this.ns = sin1;
  }
  if (isNaN(this.ns)) {
    this.ns = sin1;
  }
  this.f0 = ms1 / (this.ns * Math.pow(ts1, this.ns));
  this.rh = this.a * this.f0 * Math.pow(ts0, this.ns);
  if (!this.title) {
    this.title = "Lambert Conformal Conic";
  }
}

// Lambert Conformal conic forward equations--mapping lat,long to x,y
// -----------------------------------------------------------------
function forward(p) {

  var lon = p.x;
  var lat = p.y;

  // singular cases :
  if (Math.abs(2 * Math.abs(lat) - Math.PI) <= _constants_values__WEBPACK_IMPORTED_MODULE_5__["EPSLN"]) {
    lat = Object(_common_sign__WEBPACK_IMPORTED_MODULE_2__["default"])(lat) * (_constants_values__WEBPACK_IMPORTED_MODULE_5__["HALF_PI"] - 2 * _constants_values__WEBPACK_IMPORTED_MODULE_5__["EPSLN"]);
  }

  var con = Math.abs(Math.abs(lat) - _constants_values__WEBPACK_IMPORTED_MODULE_5__["HALF_PI"]);
  var ts, rh1;
  if (con > _constants_values__WEBPACK_IMPORTED_MODULE_5__["EPSLN"]) {
    ts = Object(_common_tsfnz__WEBPACK_IMPORTED_MODULE_1__["default"])(this.e, lat, Math.sin(lat));
    rh1 = this.a * this.f0 * Math.pow(ts, this.ns);
  }
  else {
    con = lat * this.ns;
    if (con <= 0) {
      return null;
    }
    rh1 = 0;
  }
  var theta = this.ns * Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_3__["default"])(lon - this.long0);
  p.x = this.k0 * (rh1 * Math.sin(theta)) + this.x0;
  p.y = this.k0 * (this.rh - rh1 * Math.cos(theta)) + this.y0;

  return p;
}

// Lambert Conformal Conic inverse equations--mapping x,y to lat/long
// -----------------------------------------------------------------
function inverse(p) {

  var rh1, con, ts;
  var lat, lon;
  var x = (p.x - this.x0) / this.k0;
  var y = (this.rh - (p.y - this.y0) / this.k0);
  if (this.ns > 0) {
    rh1 = Math.sqrt(x * x + y * y);
    con = 1;
  }
  else {
    rh1 = -Math.sqrt(x * x + y * y);
    con = -1;
  }
  var theta = 0;
  if (rh1 !== 0) {
    theta = Math.atan2((con * x), (con * y));
  }
  if ((rh1 !== 0) || (this.ns > 0)) {
    con = 1 / this.ns;
    ts = Math.pow((rh1 / (this.a * this.f0)), con);
    lat = Object(_common_phi2z__WEBPACK_IMPORTED_MODULE_4__["default"])(this.e, ts);
    if (lat === -9999) {
      return null;
    }
  }
  else {
    lat = -_constants_values__WEBPACK_IMPORTED_MODULE_5__["HALF_PI"];
  }
  lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_3__["default"])(theta / this.ns + this.long0);

  p.x = lon;
  p.y = lat;
  return p;
}

var names = [
  "Lambert Tangential Conformal Conic Projection",
  "Lambert_Conformal_Conic",
  "Lambert_Conformal_Conic_1SP",
  "Lambert_Conformal_Conic_2SP",
  "lcc"
];

/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "./node_modules/proj4/lib/projections/longlat.js":
/*!*******************************************************!*\
  !*** ./node_modules/proj4/lib/projections/longlat.js ***!
  \*******************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
function init() {
  //no-op for longlat
}

function identity(pt) {
  return pt;
}


var names = ["longlat", "identity"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: identity,
  inverse: identity,
  names: names
});


/***/ }),

/***/ "./node_modules/proj4/lib/projections/merc.js":
/*!****************************************************!*\
  !*** ./node_modules/proj4/lib/projections/merc.js ***!
  \****************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_msfnz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/msfnz */ "./node_modules/proj4/lib/common/msfnz.js");
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/adjust_lon */ "./node_modules/proj4/lib/common/adjust_lon.js");
/* harmony import */ var _common_tsfnz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/tsfnz */ "./node_modules/proj4/lib/common/tsfnz.js");
/* harmony import */ var _common_phi2z__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/phi2z */ "./node_modules/proj4/lib/common/phi2z.js");
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/values */ "./node_modules/proj4/lib/constants/values.js");






function init() {
  var con = this.b / this.a;
  this.es = 1 - con * con;
  if(!('x0' in this)){
    this.x0 = 0;
  }
  if(!('y0' in this)){
    this.y0 = 0;
  }
  this.e = Math.sqrt(this.es);
  if (this.lat_ts) {
    if (this.sphere) {
      this.k0 = Math.cos(this.lat_ts);
    }
    else {
      this.k0 = Object(_common_msfnz__WEBPACK_IMPORTED_MODULE_0__["default"])(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts));
    }
  }
  else {
    if (!this.k0) {
      if (this.k) {
        this.k0 = this.k;
      }
      else {
        this.k0 = 1;
      }
    }
  }
}

/* Mercator forward equations--mapping lat,long to x,y
  --------------------------------------------------*/

function forward(p) {
  var lon = p.x;
  var lat = p.y;
  // convert to radians
  if (lat * _constants_values__WEBPACK_IMPORTED_MODULE_4__["R2D"] > 90 && lat * _constants_values__WEBPACK_IMPORTED_MODULE_4__["R2D"] < -90 && lon * _constants_values__WEBPACK_IMPORTED_MODULE_4__["R2D"] > 180 && lon * _constants_values__WEBPACK_IMPORTED_MODULE_4__["R2D"] < -180) {
    return null;
  }

  var x, y;
  if (Math.abs(Math.abs(lat) - _constants_values__WEBPACK_IMPORTED_MODULE_4__["HALF_PI"]) <= _constants_values__WEBPACK_IMPORTED_MODULE_4__["EPSLN"]) {
    return null;
  }
  else {
    if (this.sphere) {
      x = this.x0 + this.a * this.k0 * Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_1__["default"])(lon - this.long0);
      y = this.y0 + this.a * this.k0 * Math.log(Math.tan(_constants_values__WEBPACK_IMPORTED_MODULE_4__["FORTPI"] + 0.5 * lat));
    }
    else {
      var sinphi = Math.sin(lat);
      var ts = Object(_common_tsfnz__WEBPACK_IMPORTED_MODULE_2__["default"])(this.e, lat, sinphi);
      x = this.x0 + this.a * this.k0 * Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_1__["default"])(lon - this.long0);
      y = this.y0 - this.a * this.k0 * Math.log(ts);
    }
    p.x = x;
    p.y = y;
    return p;
  }
}

/* Mercator inverse equations--mapping x,y to lat/long
  --------------------------------------------------*/
function inverse(p) {

  var x = p.x - this.x0;
  var y = p.y - this.y0;
  var lon, lat;

  if (this.sphere) {
    lat = _constants_values__WEBPACK_IMPORTED_MODULE_4__["HALF_PI"] - 2 * Math.atan(Math.exp(-y / (this.a * this.k0)));
  }
  else {
    var ts = Math.exp(-y / (this.a * this.k0));
    lat = Object(_common_phi2z__WEBPACK_IMPORTED_MODULE_3__["default"])(this.e, ts);
    if (lat === -9999) {
      return null;
    }
  }
  lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_1__["default"])(this.long0 + x / (this.a * this.k0));

  p.x = lon;
  p.y = lat;
  return p;
}

var names = ["Mercator", "Popular Visualisation Pseudo Mercator", "Mercator_1SP", "Mercator_Auxiliary_Sphere", "merc"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "./node_modules/proj4/lib/projections/mill.js":
/*!****************************************************!*\
  !*** ./node_modules/proj4/lib/projections/mill.js ***!
  \****************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/adjust_lon */ "./node_modules/proj4/lib/common/adjust_lon.js");


/*
  reference
    "New Equal-Area Map Projections for Noncircular Regions", John P. Snyder,
    The American Cartographer, Vol 15, No. 4, October 1988, pp. 341-355.
  */


/* Initialize the Miller Cylindrical projection
  -------------------------------------------*/
function init() {
  //no-op
}

/* Miller Cylindrical forward equations--mapping lat,long to x,y
    ------------------------------------------------------------*/
function forward(p) {
  var lon = p.x;
  var lat = p.y;
  /* Forward equations
      -----------------*/
  var dlon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(lon - this.long0);
  var x = this.x0 + this.a * dlon;
  var y = this.y0 + this.a * Math.log(Math.tan((Math.PI / 4) + (lat / 2.5))) * 1.25;

  p.x = x;
  p.y = y;
  return p;
}

/* Miller Cylindrical inverse equations--mapping x,y to lat/long
    ------------------------------------------------------------*/
function inverse(p) {
  p.x -= this.x0;
  p.y -= this.y0;

  var lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(this.long0 + p.x / this.a);
  var lat = 2.5 * (Math.atan(Math.exp(0.8 * p.y / this.a)) - Math.PI / 4);

  p.x = lon;
  p.y = lat;
  return p;
}

var names = ["Miller_Cylindrical", "mill"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "./node_modules/proj4/lib/projections/moll.js":
/*!****************************************************!*\
  !*** ./node_modules/proj4/lib/projections/moll.js ***!
  \****************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/adjust_lon */ "./node_modules/proj4/lib/common/adjust_lon.js");
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/values */ "./node_modules/proj4/lib/constants/values.js");

function init() {}

/* Mollweide forward equations--mapping lat,long to x,y
    ----------------------------------------------------*/
function forward(p) {

  /* Forward equations
      -----------------*/
  var lon = p.x;
  var lat = p.y;

  var delta_lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(lon - this.long0);
  var theta = lat;
  var con = Math.PI * Math.sin(lat);

  /* Iterate using the Newton-Raphson method to find theta
      -----------------------------------------------------*/
  while (true) {
    var delta_theta = -(theta + Math.sin(theta) - con) / (1 + Math.cos(theta));
    theta += delta_theta;
    if (Math.abs(delta_theta) < _constants_values__WEBPACK_IMPORTED_MODULE_1__["EPSLN"]) {
      break;
    }
  }
  theta /= 2;

  /* If the latitude is 90 deg, force the x coordinate to be "0 + false easting"
       this is done here because of precision problems with "cos(theta)"
       --------------------------------------------------------------------------*/
  if (Math.PI / 2 - Math.abs(lat) < _constants_values__WEBPACK_IMPORTED_MODULE_1__["EPSLN"]) {
    delta_lon = 0;
  }
  var x = 0.900316316158 * this.a * delta_lon * Math.cos(theta) + this.x0;
  var y = 1.4142135623731 * this.a * Math.sin(theta) + this.y0;

  p.x = x;
  p.y = y;
  return p;
}

function inverse(p) {
  var theta;
  var arg;

  /* Inverse equations
      -----------------*/
  p.x -= this.x0;
  p.y -= this.y0;
  arg = p.y / (1.4142135623731 * this.a);

  /* Because of division by zero problems, 'arg' can not be 1.  Therefore
       a number very close to one is used instead.
       -------------------------------------------------------------------*/
  if (Math.abs(arg) > 0.999999999999) {
    arg = 0.999999999999;
  }
  theta = Math.asin(arg);
  var lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(this.long0 + (p.x / (0.900316316158 * this.a * Math.cos(theta))));
  if (lon < (-Math.PI)) {
    lon = -Math.PI;
  }
  if (lon > Math.PI) {
    lon = Math.PI;
  }
  arg = (2 * theta + Math.sin(2 * theta)) / Math.PI;
  if (Math.abs(arg) > 1) {
    arg = 1;
  }
  var lat = Math.asin(arg);

  p.x = lon;
  p.y = lat;
  return p;
}

var names = ["Mollweide", "moll"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "./node_modules/proj4/lib/projections/nzmg.js":
/*!****************************************************!*\
  !*** ./node_modules/proj4/lib/projections/nzmg.js ***!
  \****************************************************/
/*! exports provided: iterations, init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterations", function() { return iterations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/values */ "./node_modules/proj4/lib/constants/values.js");


/*
  reference
    Department of Land and Survey Technical Circular 1973/32
      http://www.linz.govt.nz/docs/miscellaneous/nz-map-definition.pdf
    OSG Technical Report 4.1
      http://www.linz.govt.nz/docs/miscellaneous/nzmg.pdf
  */

/**
 * iterations: Number of iterations to refine inverse transform.
 *     0 -> km accuracy
 *     1 -> m accuracy -- suitable for most mapping applications
 *     2 -> mm accuracy
 */
var iterations = 1;

function init() {
  this.A = [];
  this.A[1] = 0.6399175073;
  this.A[2] = -0.1358797613;
  this.A[3] = 0.063294409;
  this.A[4] = -0.02526853;
  this.A[5] = 0.0117879;
  this.A[6] = -0.0055161;
  this.A[7] = 0.0026906;
  this.A[8] = -0.001333;
  this.A[9] = 0.00067;
  this.A[10] = -0.00034;

  this.B_re = [];
  this.B_im = [];
  this.B_re[1] = 0.7557853228;
  this.B_im[1] = 0;
  this.B_re[2] = 0.249204646;
  this.B_im[2] = 0.003371507;
  this.B_re[3] = -0.001541739;
  this.B_im[3] = 0.041058560;
  this.B_re[4] = -0.10162907;
  this.B_im[4] = 0.01727609;
  this.B_re[5] = -0.26623489;
  this.B_im[5] = -0.36249218;
  this.B_re[6] = -0.6870983;
  this.B_im[6] = -1.1651967;

  this.C_re = [];
  this.C_im = [];
  this.C_re[1] = 1.3231270439;
  this.C_im[1] = 0;
  this.C_re[2] = -0.577245789;
  this.C_im[2] = -0.007809598;
  this.C_re[3] = 0.508307513;
  this.C_im[3] = -0.112208952;
  this.C_re[4] = -0.15094762;
  this.C_im[4] = 0.18200602;
  this.C_re[5] = 1.01418179;
  this.C_im[5] = 1.64497696;
  this.C_re[6] = 1.9660549;
  this.C_im[6] = 2.5127645;

  this.D = [];
  this.D[1] = 1.5627014243;
  this.D[2] = 0.5185406398;
  this.D[3] = -0.03333098;
  this.D[4] = -0.1052906;
  this.D[5] = -0.0368594;
  this.D[6] = 0.007317;
  this.D[7] = 0.01220;
  this.D[8] = 0.00394;
  this.D[9] = -0.0013;
}

/**
    New Zealand Map Grid Forward  - long/lat to x/y
    long/lat in radians
  */
function forward(p) {
  var n;
  var lon = p.x;
  var lat = p.y;

  var delta_lat = lat - this.lat0;
  var delta_lon = lon - this.long0;

  // 1. Calculate d_phi and d_psi    ...                          // and d_lambda
  // For this algorithm, delta_latitude is in seconds of arc x 10-5, so we need to scale to those units. Longitude is radians.
  var d_phi = delta_lat / _constants_values__WEBPACK_IMPORTED_MODULE_0__["SEC_TO_RAD"] * 1E-5;
  var d_lambda = delta_lon;
  var d_phi_n = 1; // d_phi^0

  var d_psi = 0;
  for (n = 1; n <= 10; n++) {
    d_phi_n = d_phi_n * d_phi;
    d_psi = d_psi + this.A[n] * d_phi_n;
  }

  // 2. Calculate theta
  var th_re = d_psi;
  var th_im = d_lambda;

  // 3. Calculate z
  var th_n_re = 1;
  var th_n_im = 0; // theta^0
  var th_n_re1;
  var th_n_im1;

  var z_re = 0;
  var z_im = 0;
  for (n = 1; n <= 6; n++) {
    th_n_re1 = th_n_re * th_re - th_n_im * th_im;
    th_n_im1 = th_n_im * th_re + th_n_re * th_im;
    th_n_re = th_n_re1;
    th_n_im = th_n_im1;
    z_re = z_re + this.B_re[n] * th_n_re - this.B_im[n] * th_n_im;
    z_im = z_im + this.B_im[n] * th_n_re + this.B_re[n] * th_n_im;
  }

  // 4. Calculate easting and northing
  p.x = (z_im * this.a) + this.x0;
  p.y = (z_re * this.a) + this.y0;

  return p;
}

/**
    New Zealand Map Grid Inverse  -  x/y to long/lat
  */
function inverse(p) {
  var n;
  var x = p.x;
  var y = p.y;

  var delta_x = x - this.x0;
  var delta_y = y - this.y0;

  // 1. Calculate z
  var z_re = delta_y / this.a;
  var z_im = delta_x / this.a;

  // 2a. Calculate theta - first approximation gives km accuracy
  var z_n_re = 1;
  var z_n_im = 0; // z^0
  var z_n_re1;
  var z_n_im1;

  var th_re = 0;
  var th_im = 0;
  for (n = 1; n <= 6; n++) {
    z_n_re1 = z_n_re * z_re - z_n_im * z_im;
    z_n_im1 = z_n_im * z_re + z_n_re * z_im;
    z_n_re = z_n_re1;
    z_n_im = z_n_im1;
    th_re = th_re + this.C_re[n] * z_n_re - this.C_im[n] * z_n_im;
    th_im = th_im + this.C_im[n] * z_n_re + this.C_re[n] * z_n_im;
  }

  // 2b. Iterate to refine the accuracy of the calculation
  //        0 iterations gives km accuracy
  //        1 iteration gives m accuracy -- good enough for most mapping applications
  //        2 iterations bives mm accuracy
  for (var i = 0; i < this.iterations; i++) {
    var th_n_re = th_re;
    var th_n_im = th_im;
    var th_n_re1;
    var th_n_im1;

    var num_re = z_re;
    var num_im = z_im;
    for (n = 2; n <= 6; n++) {
      th_n_re1 = th_n_re * th_re - th_n_im * th_im;
      th_n_im1 = th_n_im * th_re + th_n_re * th_im;
      th_n_re = th_n_re1;
      th_n_im = th_n_im1;
      num_re = num_re + (n - 1) * (this.B_re[n] * th_n_re - this.B_im[n] * th_n_im);
      num_im = num_im + (n - 1) * (this.B_im[n] * th_n_re + this.B_re[n] * th_n_im);
    }

    th_n_re = 1;
    th_n_im = 0;
    var den_re = this.B_re[1];
    var den_im = this.B_im[1];
    for (n = 2; n <= 6; n++) {
      th_n_re1 = th_n_re * th_re - th_n_im * th_im;
      th_n_im1 = th_n_im * th_re + th_n_re * th_im;
      th_n_re = th_n_re1;
      th_n_im = th_n_im1;
      den_re = den_re + n * (this.B_re[n] * th_n_re - this.B_im[n] * th_n_im);
      den_im = den_im + n * (this.B_im[n] * th_n_re + this.B_re[n] * th_n_im);
    }

    // Complex division
    var den2 = den_re * den_re + den_im * den_im;
    th_re = (num_re * den_re + num_im * den_im) / den2;
    th_im = (num_im * den_re - num_re * den_im) / den2;
  }

  // 3. Calculate d_phi              ...                                    // and d_lambda
  var d_psi = th_re;
  var d_lambda = th_im;
  var d_psi_n = 1; // d_psi^0

  var d_phi = 0;
  for (n = 1; n <= 9; n++) {
    d_psi_n = d_psi_n * d_psi;
    d_phi = d_phi + this.D[n] * d_psi_n;
  }

  // 4. Calculate latitude and longitude
  // d_phi is calcuated in second of arc * 10^-5, so we need to scale back to radians. d_lambda is in radians.
  var lat = this.lat0 + (d_phi * _constants_values__WEBPACK_IMPORTED_MODULE_0__["SEC_TO_RAD"] * 1E5);
  var lon = this.long0 + d_lambda;

  p.x = lon;
  p.y = lat;

  return p;
}

var names = ["New_Zealand_Map_Grid", "nzmg"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "./node_modules/proj4/lib/projections/omerc.js":
/*!*****************************************************!*\
  !*** ./node_modules/proj4/lib/projections/omerc.js ***!
  \*****************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_tsfnz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/tsfnz */ "./node_modules/proj4/lib/common/tsfnz.js");
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/adjust_lon */ "./node_modules/proj4/lib/common/adjust_lon.js");
/* harmony import */ var _common_phi2z__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/phi2z */ "./node_modules/proj4/lib/common/phi2z.js");
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/values */ "./node_modules/proj4/lib/constants/values.js");





var TOL = 1e-7;

function isTypeA(P) {
  var typeAProjections = ['Hotine_Oblique_Mercator','Hotine_Oblique_Mercator_Azimuth_Natural_Origin'];
  var projectionName = typeof P.PROJECTION === "object" ? Object.keys(P.PROJECTION)[0] : P.PROJECTION;
  
  return 'no_uoff' in P || 'no_off' in P || typeAProjections.indexOf(projectionName) !== -1;
}


/* Initialize the Oblique Mercator  projection
    ------------------------------------------*/
function init() {  
  var con, com, cosph0, D, F, H, L, sinph0, p, J, gamma = 0,
    gamma0, lamc = 0, lam1 = 0, lam2 = 0, phi1 = 0, phi2 = 0, alpha_c = 0, AB;
  
  // only Type A uses the no_off or no_uoff property
  // https://github.com/OSGeo/proj.4/issues/104
  this.no_off = isTypeA(this);
  this.no_rot = 'no_rot' in this;
  
  var alp = false;
  if ("alpha" in this) {
    alp = true;
  }

  var gam = false;
  if ("rectified_grid_angle" in this) {
    gam = true;
  }

  if (alp) {
    alpha_c = this.alpha;
  }
  
  if (gam) {
    gamma = (this.rectified_grid_angle * _constants_values__WEBPACK_IMPORTED_MODULE_3__["D2R"]);
  }
  
  if (alp || gam) {
    lamc = this.longc;
  } else {
    lam1 = this.long1;
    phi1 = this.lat1;
    lam2 = this.long2;
    phi2 = this.lat2;
    
    if (Math.abs(phi1 - phi2) <= TOL || (con = Math.abs(phi1)) <= TOL ||
        Math.abs(con - _constants_values__WEBPACK_IMPORTED_MODULE_3__["HALF_PI"]) <= TOL || Math.abs(Math.abs(this.lat0) - _constants_values__WEBPACK_IMPORTED_MODULE_3__["HALF_PI"]) <= TOL ||
        Math.abs(Math.abs(phi2) - _constants_values__WEBPACK_IMPORTED_MODULE_3__["HALF_PI"]) <= TOL) {
      throw new Error();
    }
  }
  
  var one_es = 1.0 - this.es;
  com = Math.sqrt(one_es);
  
  if (Math.abs(this.lat0) > _constants_values__WEBPACK_IMPORTED_MODULE_3__["EPSLN"]) {
    sinph0 = Math.sin(this.lat0);
    cosph0 = Math.cos(this.lat0);
    con = 1 - this.es * sinph0 * sinph0;
    this.B = cosph0 * cosph0;
    this.B = Math.sqrt(1 + this.es * this.B * this.B / one_es);
    this.A = this.B * this.k0 * com / con;
    D = this.B * com / (cosph0 * Math.sqrt(con));
    F = D * D -1;
    
    if (F <= 0) {
      F = 0;
    } else {
      F = Math.sqrt(F);
      if (this.lat0 < 0) {
        F = -F;
      }
    }
    
    this.E = F += D;
    this.E *= Math.pow(Object(_common_tsfnz__WEBPACK_IMPORTED_MODULE_0__["default"])(this.e, this.lat0, sinph0), this.B);
  } else {
    this.B = 1 / com;
    this.A = this.k0;
    this.E = D = F = 1;
  }
  
  if (alp || gam) {
    if (alp) {
      gamma0 = Math.asin(Math.sin(alpha_c) / D);
      if (!gam) {
        gamma = alpha_c;
      }
    } else {
      gamma0 = gamma;
      alpha_c = Math.asin(D * Math.sin(gamma0));
    }
    this.lam0 = lamc - Math.asin(0.5 * (F - 1 / F) * Math.tan(gamma0)) / this.B;
  } else {
    H = Math.pow(Object(_common_tsfnz__WEBPACK_IMPORTED_MODULE_0__["default"])(this.e, phi1, Math.sin(phi1)), this.B);
    L = Math.pow(Object(_common_tsfnz__WEBPACK_IMPORTED_MODULE_0__["default"])(this.e, phi2, Math.sin(phi2)), this.B);
    F = this.E / H;
    p = (L - H) / (L + H);
    J = this.E * this.E;
    J = (J - L * H) / (J + L * H);
    con = lam1 - lam2;
    
    if (con < -Math.pi) {
      lam2 -=_constants_values__WEBPACK_IMPORTED_MODULE_3__["TWO_PI"];
    } else if (con > Math.pi) {
      lam2 += _constants_values__WEBPACK_IMPORTED_MODULE_3__["TWO_PI"];
    }
    
    this.lam0 = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_1__["default"])(0.5 * (lam1 + lam2) - Math.atan(J * Math.tan(0.5 * this.B * (lam1 - lam2)) / p) / this.B);
    gamma0 = Math.atan(2 * Math.sin(this.B * Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_1__["default"])(lam1 - this.lam0)) / (F - 1 / F));
    gamma = alpha_c = Math.asin(D * Math.sin(gamma0));
  }
  
  this.singam = Math.sin(gamma0);
  this.cosgam = Math.cos(gamma0);
  this.sinrot = Math.sin(gamma);
  this.cosrot = Math.cos(gamma);
  
  this.rB = 1 / this.B;
  this.ArB = this.A * this.rB;
  this.BrA = 1 / this.ArB;
  AB = this.A * this.B;
  
  if (this.no_off) {
    this.u_0 = 0;
  } else {
    this.u_0 = Math.abs(this.ArB * Math.atan(Math.sqrt(D * D - 1) / Math.cos(alpha_c)));
    
    if (this.lat0 < 0) {
      this.u_0 = - this.u_0;
    }  
  }
    
  F = 0.5 * gamma0;
  this.v_pole_n = this.ArB * Math.log(Math.tan(_constants_values__WEBPACK_IMPORTED_MODULE_3__["FORTPI"] - F));
  this.v_pole_s = this.ArB * Math.log(Math.tan(_constants_values__WEBPACK_IMPORTED_MODULE_3__["FORTPI"] + F));
}


/* Oblique Mercator forward equations--mapping lat,long to x,y
    ----------------------------------------------------------*/
function forward(p) {
  var coords = {};
  var S, T, U, V, W, temp, u, v;
  p.x = p.x - this.lam0;
  
  if (Math.abs(Math.abs(p.y) - _constants_values__WEBPACK_IMPORTED_MODULE_3__["HALF_PI"]) > _constants_values__WEBPACK_IMPORTED_MODULE_3__["EPSLN"]) {
    W = this.E / Math.pow(Object(_common_tsfnz__WEBPACK_IMPORTED_MODULE_0__["default"])(this.e, p.y, Math.sin(p.y)), this.B);
    
    temp = 1 / W;
    S = 0.5 * (W - temp);
    T = 0.5 * (W + temp);
    V = Math.sin(this.B * p.x);
    U = (S * this.singam - V * this.cosgam) / T;
        
    if (Math.abs(Math.abs(U) - 1.0) < _constants_values__WEBPACK_IMPORTED_MODULE_3__["EPSLN"]) {
      throw new Error();
    }
    
    v = 0.5 * this.ArB * Math.log((1 - U)/(1 + U));
    temp = Math.cos(this.B * p.x);
    
    if (Math.abs(temp) < TOL) {
      u = this.A * p.x;
    } else {
      u = this.ArB * Math.atan2((S * this.cosgam + V * this.singam), temp);
    }    
  } else {
    v = p.y > 0 ? this.v_pole_n : this.v_pole_s;
    u = this.ArB * p.y;
  }
     
  if (this.no_rot) {
    coords.x = u;
    coords.y = v;
  } else {
    u -= this.u_0;
    coords.x = v * this.cosrot + u * this.sinrot;
    coords.y = u * this.cosrot - v * this.sinrot;
  }
  
  coords.x = (this.a * coords.x + this.x0);
  coords.y = (this.a * coords.y + this.y0);
  
  return coords;
}

function inverse(p) {
  var u, v, Qp, Sp, Tp, Vp, Up;
  var coords = {};
  
  p.x = (p.x - this.x0) * (1.0 / this.a);
  p.y = (p.y - this.y0) * (1.0 / this.a);

  if (this.no_rot) {
    v = p.y;
    u = p.x;
  } else {
    v = p.x * this.cosrot - p.y * this.sinrot;
    u = p.y * this.cosrot + p.x * this.sinrot + this.u_0;
  }
  
  Qp = Math.exp(-this.BrA * v);
  Sp = 0.5 * (Qp - 1 / Qp);
  Tp = 0.5 * (Qp + 1 / Qp);
  Vp = Math.sin(this.BrA * u);
  Up = (Vp * this.cosgam + Sp * this.singam) / Tp;
  
  if (Math.abs(Math.abs(Up) - 1) < _constants_values__WEBPACK_IMPORTED_MODULE_3__["EPSLN"]) {
    coords.x = 0;
    coords.y = Up < 0 ? -_constants_values__WEBPACK_IMPORTED_MODULE_3__["HALF_PI"] : _constants_values__WEBPACK_IMPORTED_MODULE_3__["HALF_PI"];
  } else {
    coords.y = this.E / Math.sqrt((1 + Up) / (1 - Up));
    coords.y = Object(_common_phi2z__WEBPACK_IMPORTED_MODULE_2__["default"])(this.e, Math.pow(coords.y, 1 / this.B));
    
    if (coords.y === Infinity) {
      throw new Error();
    }
        
    coords.x = -this.rB * Math.atan2((Sp * this.cosgam - Vp * this.singam), Math.cos(this.BrA * u));
  }
  
  coords.x += this.lam0;
  
  return coords;
}

var names = ["Hotine_Oblique_Mercator", "Hotine Oblique Mercator", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin", "Hotine_Oblique_Mercator_Two_Point_Natural_Origin", "Hotine_Oblique_Mercator_Azimuth_Center", "Oblique_Mercator", "omerc"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "./node_modules/proj4/lib/projections/ortho.js":
/*!*****************************************************!*\
  !*** ./node_modules/proj4/lib/projections/ortho.js ***!
  \*****************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/adjust_lon */ "./node_modules/proj4/lib/common/adjust_lon.js");
/* harmony import */ var _common_asinz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/asinz */ "./node_modules/proj4/lib/common/asinz.js");
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/values */ "./node_modules/proj4/lib/constants/values.js");




function init() {
  //double temp;      /* temporary variable    */

  /* Place parameters in static storage for common use
      -------------------------------------------------*/
  this.sin_p14 = Math.sin(this.lat0);
  this.cos_p14 = Math.cos(this.lat0);
}

/* Orthographic forward equations--mapping lat,long to x,y
    ---------------------------------------------------*/
function forward(p) {
  var sinphi, cosphi; /* sin and cos value        */
  var dlon; /* delta longitude value      */
  var coslon; /* cos of longitude        */
  var ksp; /* scale factor          */
  var g, x, y;
  var lon = p.x;
  var lat = p.y;
  /* Forward equations
      -----------------*/
  dlon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(lon - this.long0);

  sinphi = Math.sin(lat);
  cosphi = Math.cos(lat);

  coslon = Math.cos(dlon);
  g = this.sin_p14 * sinphi + this.cos_p14 * cosphi * coslon;
  ksp = 1;
  if ((g > 0) || (Math.abs(g) <= _constants_values__WEBPACK_IMPORTED_MODULE_2__["EPSLN"])) {
    x = this.a * ksp * cosphi * Math.sin(dlon);
    y = this.y0 + this.a * ksp * (this.cos_p14 * sinphi - this.sin_p14 * cosphi * coslon);
  }
  p.x = x;
  p.y = y;
  return p;
}

function inverse(p) {
  var rh; /* height above ellipsoid      */
  var z; /* angle          */
  var sinz, cosz; /* sin of z and cos of z      */
  var con;
  var lon, lat;
  /* Inverse equations
      -----------------*/
  p.x -= this.x0;
  p.y -= this.y0;
  rh = Math.sqrt(p.x * p.x + p.y * p.y);
  z = Object(_common_asinz__WEBPACK_IMPORTED_MODULE_1__["default"])(rh / this.a);

  sinz = Math.sin(z);
  cosz = Math.cos(z);

  lon = this.long0;
  if (Math.abs(rh) <= _constants_values__WEBPACK_IMPORTED_MODULE_2__["EPSLN"]) {
    lat = this.lat0;
    p.x = lon;
    p.y = lat;
    return p;
  }
  lat = Object(_common_asinz__WEBPACK_IMPORTED_MODULE_1__["default"])(cosz * this.sin_p14 + (p.y * sinz * this.cos_p14) / rh);
  con = Math.abs(this.lat0) - _constants_values__WEBPACK_IMPORTED_MODULE_2__["HALF_PI"];
  if (Math.abs(con) <= _constants_values__WEBPACK_IMPORTED_MODULE_2__["EPSLN"]) {
    if (this.lat0 >= 0) {
      lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(this.long0 + Math.atan2(p.x, - p.y));
    }
    else {
      lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(this.long0 - Math.atan2(-p.x, p.y));
    }
    p.x = lon;
    p.y = lat;
    return p;
  }
  lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(this.long0 + Math.atan2((p.x * sinz), rh * this.cos_p14 * cosz - p.y * this.sin_p14 * sinz));
  p.x = lon;
  p.y = lat;
  return p;
}

var names = ["ortho"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "./node_modules/proj4/lib/projections/poly.js":
/*!****************************************************!*\
  !*** ./node_modules/proj4/lib/projections/poly.js ***!
  \****************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_e0fn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/e0fn */ "./node_modules/proj4/lib/common/e0fn.js");
/* harmony import */ var _common_e1fn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/e1fn */ "./node_modules/proj4/lib/common/e1fn.js");
/* harmony import */ var _common_e2fn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/e2fn */ "./node_modules/proj4/lib/common/e2fn.js");
/* harmony import */ var _common_e3fn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/e3fn */ "./node_modules/proj4/lib/common/e3fn.js");
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/adjust_lon */ "./node_modules/proj4/lib/common/adjust_lon.js");
/* harmony import */ var _common_adjust_lat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/adjust_lat */ "./node_modules/proj4/lib/common/adjust_lat.js");
/* harmony import */ var _common_mlfn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/mlfn */ "./node_modules/proj4/lib/common/mlfn.js");
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/values */ "./node_modules/proj4/lib/constants/values.js");
/* harmony import */ var _common_gN__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/gN */ "./node_modules/proj4/lib/common/gN.js");










var MAX_ITER = 20;

function init() {
  /* Place parameters in static storage for common use
      -------------------------------------------------*/
  this.temp = this.b / this.a;
  this.es = 1 - Math.pow(this.temp, 2); // devait etre dans tmerc.js mais n y est pas donc je commente sinon retour de valeurs nulles
  this.e = Math.sqrt(this.es);
  this.e0 = Object(_common_e0fn__WEBPACK_IMPORTED_MODULE_0__["default"])(this.es);
  this.e1 = Object(_common_e1fn__WEBPACK_IMPORTED_MODULE_1__["default"])(this.es);
  this.e2 = Object(_common_e2fn__WEBPACK_IMPORTED_MODULE_2__["default"])(this.es);
  this.e3 = Object(_common_e3fn__WEBPACK_IMPORTED_MODULE_3__["default"])(this.es);
  this.ml0 = this.a * Object(_common_mlfn__WEBPACK_IMPORTED_MODULE_6__["default"])(this.e0, this.e1, this.e2, this.e3, this.lat0); //si que des zeros le calcul ne se fait pas
}

/* Polyconic forward equations--mapping lat,long to x,y
    ---------------------------------------------------*/
function forward(p) {
  var lon = p.x;
  var lat = p.y;
  var x, y, el;
  var dlon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_4__["default"])(lon - this.long0);
  el = dlon * Math.sin(lat);
  if (this.sphere) {
    if (Math.abs(lat) <= _constants_values__WEBPACK_IMPORTED_MODULE_7__["EPSLN"]) {
      x = this.a * dlon;
      y = -1 * this.a * this.lat0;
    }
    else {
      x = this.a * Math.sin(el) / Math.tan(lat);
      y = this.a * (Object(_common_adjust_lat__WEBPACK_IMPORTED_MODULE_5__["default"])(lat - this.lat0) + (1 - Math.cos(el)) / Math.tan(lat));
    }
  }
  else {
    if (Math.abs(lat) <= _constants_values__WEBPACK_IMPORTED_MODULE_7__["EPSLN"]) {
      x = this.a * dlon;
      y = -1 * this.ml0;
    }
    else {
      var nl = Object(_common_gN__WEBPACK_IMPORTED_MODULE_8__["default"])(this.a, this.e, Math.sin(lat)) / Math.tan(lat);
      x = nl * Math.sin(el);
      y = this.a * Object(_common_mlfn__WEBPACK_IMPORTED_MODULE_6__["default"])(this.e0, this.e1, this.e2, this.e3, lat) - this.ml0 + nl * (1 - Math.cos(el));
    }

  }
  p.x = x + this.x0;
  p.y = y + this.y0;
  return p;
}

/* Inverse equations
  -----------------*/
function inverse(p) {
  var lon, lat, x, y, i;
  var al, bl;
  var phi, dphi;
  x = p.x - this.x0;
  y = p.y - this.y0;

  if (this.sphere) {
    if (Math.abs(y + this.a * this.lat0) <= _constants_values__WEBPACK_IMPORTED_MODULE_7__["EPSLN"]) {
      lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_4__["default"])(x / this.a + this.long0);
      lat = 0;
    }
    else {
      al = this.lat0 + y / this.a;
      bl = x * x / this.a / this.a + al * al;
      phi = al;
      var tanphi;
      for (i = MAX_ITER; i; --i) {
        tanphi = Math.tan(phi);
        dphi = -1 * (al * (phi * tanphi + 1) - phi - 0.5 * (phi * phi + bl) * tanphi) / ((phi - al) / tanphi - 1);
        phi += dphi;
        if (Math.abs(dphi) <= _constants_values__WEBPACK_IMPORTED_MODULE_7__["EPSLN"]) {
          lat = phi;
          break;
        }
      }
      lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_4__["default"])(this.long0 + (Math.asin(x * Math.tan(phi) / this.a)) / Math.sin(lat));
    }
  }
  else {
    if (Math.abs(y + this.ml0) <= _constants_values__WEBPACK_IMPORTED_MODULE_7__["EPSLN"]) {
      lat = 0;
      lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_4__["default"])(this.long0 + x / this.a);
    }
    else {

      al = (this.ml0 + y) / this.a;
      bl = x * x / this.a / this.a + al * al;
      phi = al;
      var cl, mln, mlnp, ma;
      var con;
      for (i = MAX_ITER; i; --i) {
        con = this.e * Math.sin(phi);
        cl = Math.sqrt(1 - con * con) * Math.tan(phi);
        mln = this.a * Object(_common_mlfn__WEBPACK_IMPORTED_MODULE_6__["default"])(this.e0, this.e1, this.e2, this.e3, phi);
        mlnp = this.e0 - 2 * this.e1 * Math.cos(2 * phi) + 4 * this.e2 * Math.cos(4 * phi) - 6 * this.e3 * Math.cos(6 * phi);
        ma = mln / this.a;
        dphi = (al * (cl * ma + 1) - ma - 0.5 * cl * (ma * ma + bl)) / (this.es * Math.sin(2 * phi) * (ma * ma + bl - 2 * al * ma) / (4 * cl) + (al - ma) * (cl * mlnp - 2 / Math.sin(2 * phi)) - mlnp);
        phi -= dphi;
        if (Math.abs(dphi) <= _constants_values__WEBPACK_IMPORTED_MODULE_7__["EPSLN"]) {
          lat = phi;
          break;
        }
      }

      //lat=phi4z(this.e,this.e0,this.e1,this.e2,this.e3,al,bl,0,0);
      cl = Math.sqrt(1 - this.es * Math.pow(Math.sin(lat), 2)) * Math.tan(lat);
      lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_4__["default"])(this.long0 + Math.asin(x * cl / this.a) / Math.sin(lat));
    }
  }

  p.x = lon;
  p.y = lat;
  return p;
}

var names = ["Polyconic", "poly"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "./node_modules/proj4/lib/projections/qsc.js":
/*!***************************************************!*\
  !*** ./node_modules/proj4/lib/projections/qsc.js ***!
  \***************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/values */ "./node_modules/proj4/lib/constants/values.js");
// QSC projection rewritten from the original PROJ4
// https://github.com/OSGeo/proj.4/blob/master/src/PJ_qsc.c



/* constants */
var FACE_ENUM = {
    FRONT: 1,
    RIGHT: 2,
    BACK: 3,
    LEFT: 4,
    TOP: 5,
    BOTTOM: 6
};

var AREA_ENUM = {
    AREA_0: 1,
    AREA_1: 2,
    AREA_2: 3,
    AREA_3: 4
};

function init() {

  this.x0 = this.x0 || 0;
  this.y0 = this.y0 || 0;
  this.lat0 = this.lat0 || 0;
  this.long0 = this.long0 || 0;
  this.lat_ts = this.lat_ts || 0;
  this.title = this.title || "Quadrilateralized Spherical Cube";

  /* Determine the cube face from the center of projection. */
  if (this.lat0 >= _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] - _constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"] / 2.0) {
    this.face = FACE_ENUM.TOP;
  } else if (this.lat0 <= -(_constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] - _constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"] / 2.0)) {
    this.face = FACE_ENUM.BOTTOM;
  } else if (Math.abs(this.long0) <= _constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"]) {
    this.face = FACE_ENUM.FRONT;
  } else if (Math.abs(this.long0) <= _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] + _constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"]) {
    this.face = this.long0 > 0.0 ? FACE_ENUM.RIGHT : FACE_ENUM.LEFT;
  } else {
    this.face = FACE_ENUM.BACK;
  }

  /* Fill in useful values for the ellipsoid <-> sphere shift
   * described in [LK12]. */
  if (this.es !== 0) {
    this.one_minus_f = 1 - (this.a - this.b) / this.a;
    this.one_minus_f_squared = this.one_minus_f * this.one_minus_f;
  }
}

// QSC forward equations--mapping lat,long to x,y
// -----------------------------------------------------------------
function forward(p) {
  var xy = {x: 0, y: 0};
  var lat, lon;
  var theta, phi;
  var t, mu;
  /* nu; */
  var area = {value: 0};

  // move lon according to projection's lon
  p.x -= this.long0;

  /* Convert the geodetic latitude to a geocentric latitude.
   * This corresponds to the shift from the ellipsoid to the sphere
   * described in [LK12]. */
  if (this.es !== 0) {//if (P->es != 0) {
    lat = Math.atan(this.one_minus_f_squared * Math.tan(p.y));
  } else {
    lat = p.y;
  }

  /* Convert the input lat, lon into theta, phi as used by QSC.
   * This depends on the cube face and the area on it.
   * For the top and bottom face, we can compute theta and phi
   * directly from phi, lam. For the other faces, we must use
   * unit sphere cartesian coordinates as an intermediate step. */
  lon = p.x; //lon = lp.lam;
  if (this.face === FACE_ENUM.TOP) {
    phi = _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] - lat;
    if (lon >= _constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"] && lon <= _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] + _constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"]) {
      area.value = AREA_ENUM.AREA_0;
      theta = lon - _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
    } else if (lon > _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] + _constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"] || lon <= -(_constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] + _constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"])) {
      area.value = AREA_ENUM.AREA_1;
      theta = (lon > 0.0 ? lon - _constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"] : lon + _constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"]);
    } else if (lon > -(_constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] + _constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"]) && lon <= -_constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"]) {
      area.value = AREA_ENUM.AREA_2;
      theta = lon + _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
    } else {
      area.value = AREA_ENUM.AREA_3;
      theta = lon;
    }
  } else if (this.face === FACE_ENUM.BOTTOM) {
    phi = _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] + lat;
    if (lon >= _constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"] && lon <= _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] + _constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"]) {
      area.value = AREA_ENUM.AREA_0;
      theta = -lon + _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
    } else if (lon < _constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"] && lon >= -_constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"]) {
      area.value = AREA_ENUM.AREA_1;
      theta = -lon;
    } else if (lon < -_constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"] && lon >= -(_constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] + _constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"])) {
      area.value = AREA_ENUM.AREA_2;
      theta = -lon - _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
    } else {
      area.value = AREA_ENUM.AREA_3;
      theta = (lon > 0.0 ? -lon + _constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"] : -lon - _constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"]);
    }
  } else {
    var q, r, s;
    var sinlat, coslat;
    var sinlon, coslon;

    if (this.face === FACE_ENUM.RIGHT) {
      lon = qsc_shift_lon_origin(lon, +_constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"]);
    } else if (this.face === FACE_ENUM.BACK) {
      lon = qsc_shift_lon_origin(lon, +_constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"]);
    } else if (this.face === FACE_ENUM.LEFT) {
      lon = qsc_shift_lon_origin(lon, -_constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"]);
    }
    sinlat = Math.sin(lat);
    coslat = Math.cos(lat);
    sinlon = Math.sin(lon);
    coslon = Math.cos(lon);
    q = coslat * coslon;
    r = coslat * sinlon;
    s = sinlat;

    if (this.face === FACE_ENUM.FRONT) {
      phi = Math.acos(q);
      theta = qsc_fwd_equat_face_theta(phi, s, r, area);
    } else if (this.face === FACE_ENUM.RIGHT) {
      phi = Math.acos(r);
      theta = qsc_fwd_equat_face_theta(phi, s, -q, area);
    } else if (this.face === FACE_ENUM.BACK) {
      phi = Math.acos(-q);
      theta = qsc_fwd_equat_face_theta(phi, s, -r, area);
    } else if (this.face === FACE_ENUM.LEFT) {
      phi = Math.acos(-r);
      theta = qsc_fwd_equat_face_theta(phi, s, q, area);
    } else {
      /* Impossible */
      phi = theta = 0;
      area.value = AREA_ENUM.AREA_0;
    }
  }

  /* Compute mu and nu for the area of definition.
   * For mu, see Eq. (3-21) in [OL76], but note the typos:
   * compare with Eq. (3-14). For nu, see Eq. (3-38). */
  mu = Math.atan((12 / _constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"]) * (theta + Math.acos(Math.sin(theta) * Math.cos(_constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"])) - _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"]));
  t = Math.sqrt((1 - Math.cos(phi)) / (Math.cos(mu) * Math.cos(mu)) / (1 - Math.cos(Math.atan(1 / Math.cos(theta)))));

  /* Apply the result to the real area. */
  if (area.value === AREA_ENUM.AREA_1) {
    mu += _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
  } else if (area.value === AREA_ENUM.AREA_2) {
    mu += _constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"];
  } else if (area.value === AREA_ENUM.AREA_3) {
    mu += 1.5 * _constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"];
  }

  /* Now compute x, y from mu and nu */
  xy.x = t * Math.cos(mu);
  xy.y = t * Math.sin(mu);
  xy.x = xy.x * this.a + this.x0;
  xy.y = xy.y * this.a + this.y0;

  p.x = xy.x;
  p.y = xy.y;
  return p;
}

// QSC inverse equations--mapping x,y to lat/long
// -----------------------------------------------------------------
function inverse(p) {
  var lp = {lam: 0, phi: 0};
  var mu, nu, cosmu, tannu;
  var tantheta, theta, cosphi, phi;
  var t;
  var area = {value: 0};

  /* de-offset */
  p.x = (p.x - this.x0) / this.a;
  p.y = (p.y - this.y0) / this.a;

  /* Convert the input x, y to the mu and nu angles as used by QSC.
   * This depends on the area of the cube face. */
  nu = Math.atan(Math.sqrt(p.x * p.x + p.y * p.y));
  mu = Math.atan2(p.y, p.x);
  if (p.x >= 0.0 && p.x >= Math.abs(p.y)) {
    area.value = AREA_ENUM.AREA_0;
  } else if (p.y >= 0.0 && p.y >= Math.abs(p.x)) {
    area.value = AREA_ENUM.AREA_1;
    mu -= _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
  } else if (p.x < 0.0 && -p.x >= Math.abs(p.y)) {
    area.value = AREA_ENUM.AREA_2;
    mu = (mu < 0.0 ? mu + _constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"] : mu - _constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"]);
  } else {
    area.value = AREA_ENUM.AREA_3;
    mu += _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
  }

  /* Compute phi and theta for the area of definition.
   * The inverse projection is not described in the original paper, but some
   * good hints can be found here (as of 2011-12-14):
   * http://fits.gsfc.nasa.gov/fitsbits/saf.93/saf.9302
   * (search for "Message-Id: <9302181759.AA25477 at fits.cv.nrao.edu>") */
  t = (_constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"] / 12) * Math.tan(mu);
  tantheta = Math.sin(t) / (Math.cos(t) - (1 / Math.sqrt(2)));
  theta = Math.atan(tantheta);
  cosmu = Math.cos(mu);
  tannu = Math.tan(nu);
  cosphi = 1 - cosmu * cosmu * tannu * tannu * (1 - Math.cos(Math.atan(1 / Math.cos(theta))));
  if (cosphi < -1) {
    cosphi = -1;
  } else if (cosphi > +1) {
    cosphi = +1;
  }

  /* Apply the result to the real area on the cube face.
   * For the top and bottom face, we can compute phi and lam directly.
   * For the other faces, we must use unit sphere cartesian coordinates
   * as an intermediate step. */
  if (this.face === FACE_ENUM.TOP) {
    phi = Math.acos(cosphi);
    lp.phi = _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] - phi;
    if (area.value === AREA_ENUM.AREA_0) {
      lp.lam = theta + _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
    } else if (area.value === AREA_ENUM.AREA_1) {
      lp.lam = (theta < 0.0 ? theta + _constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"] : theta - _constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"]);
    } else if (area.value === AREA_ENUM.AREA_2) {
      lp.lam = theta - _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
    } else /* area.value == AREA_ENUM.AREA_3 */ {
      lp.lam = theta;
    }
  } else if (this.face === FACE_ENUM.BOTTOM) {
    phi = Math.acos(cosphi);
    lp.phi = phi - _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
    if (area.value === AREA_ENUM.AREA_0) {
      lp.lam = -theta + _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
    } else if (area.value === AREA_ENUM.AREA_1) {
      lp.lam = -theta;
    } else if (area.value === AREA_ENUM.AREA_2) {
      lp.lam = -theta - _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
    } else /* area.value == AREA_ENUM.AREA_3 */ {
      lp.lam = (theta < 0.0 ? -theta - _constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"] : -theta + _constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"]);
    }
  } else {
    /* Compute phi and lam via cartesian unit sphere coordinates. */
    var q, r, s;
    q = cosphi;
    t = q * q;
    if (t >= 1) {
      s = 0;
    } else {
      s = Math.sqrt(1 - t) * Math.sin(theta);
    }
    t += s * s;
    if (t >= 1) {
      r = 0;
    } else {
      r = Math.sqrt(1 - t);
    }
    /* Rotate q,r,s into the correct area. */
    if (area.value === AREA_ENUM.AREA_1) {
      t = r;
      r = -s;
      s = t;
    } else if (area.value === AREA_ENUM.AREA_2) {
      r = -r;
      s = -s;
    } else if (area.value === AREA_ENUM.AREA_3) {
      t = r;
      r = s;
      s = -t;
    }
    /* Rotate q,r,s into the correct cube face. */
    if (this.face === FACE_ENUM.RIGHT) {
      t = q;
      q = -r;
      r = t;
    } else if (this.face === FACE_ENUM.BACK) {
      q = -q;
      r = -r;
    } else if (this.face === FACE_ENUM.LEFT) {
      t = q;
      q = r;
      r = -t;
    }
    /* Now compute phi and lam from the unit sphere coordinates. */
    lp.phi = Math.acos(-s) - _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
    lp.lam = Math.atan2(r, q);
    if (this.face === FACE_ENUM.RIGHT) {
      lp.lam = qsc_shift_lon_origin(lp.lam, -_constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"]);
    } else if (this.face === FACE_ENUM.BACK) {
      lp.lam = qsc_shift_lon_origin(lp.lam, -_constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"]);
    } else if (this.face === FACE_ENUM.LEFT) {
      lp.lam = qsc_shift_lon_origin(lp.lam, +_constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"]);
    }
  }

  /* Apply the shift from the sphere to the ellipsoid as described
   * in [LK12]. */
  if (this.es !== 0) {
    var invert_sign;
    var tanphi, xa;
    invert_sign = (lp.phi < 0 ? 1 : 0);
    tanphi = Math.tan(lp.phi);
    xa = this.b / Math.sqrt(tanphi * tanphi + this.one_minus_f_squared);
    lp.phi = Math.atan(Math.sqrt(this.a * this.a - xa * xa) / (this.one_minus_f * xa));
    if (invert_sign) {
      lp.phi = -lp.phi;
    }
  }

  lp.lam += this.long0;
  p.x = lp.lam;
  p.y = lp.phi;
  return p;
}

/* Helper function for forward projection: compute the theta angle
 * and determine the area number. */
function qsc_fwd_equat_face_theta(phi, y, x, area) {
  var theta;
  if (phi < _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
    area.value = AREA_ENUM.AREA_0;
    theta = 0.0;
  } else {
    theta = Math.atan2(y, x);
    if (Math.abs(theta) <= _constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"]) {
      area.value = AREA_ENUM.AREA_0;
    } else if (theta > _constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"] && theta <= _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] + _constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"]) {
      area.value = AREA_ENUM.AREA_1;
      theta -= _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
    } else if (theta > _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] + _constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"] || theta <= -(_constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] + _constants_values__WEBPACK_IMPORTED_MODULE_0__["FORTPI"])) {
      area.value = AREA_ENUM.AREA_2;
      theta = (theta >= 0.0 ? theta - _constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"] : theta + _constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"]);
    } else {
      area.value = AREA_ENUM.AREA_3;
      theta += _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
    }
  }
  return theta;
}

/* Helper function: shift the longitude. */
function qsc_shift_lon_origin(lon, offset) {
  var slon = lon + offset;
  if (slon < -_constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"]) {
    slon += _constants_values__WEBPACK_IMPORTED_MODULE_0__["TWO_PI"];
  } else if (slon > +_constants_values__WEBPACK_IMPORTED_MODULE_0__["SPI"]) {
    slon -= _constants_values__WEBPACK_IMPORTED_MODULE_0__["TWO_PI"];
  }
  return slon;
}

var names = ["Quadrilateralized Spherical Cube", "Quadrilateralized_Spherical_Cube", "qsc"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});



/***/ }),

/***/ "./node_modules/proj4/lib/projections/robin.js":
/*!*****************************************************!*\
  !*** ./node_modules/proj4/lib/projections/robin.js ***!
  \*****************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/values */ "./node_modules/proj4/lib/constants/values.js");
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/adjust_lon */ "./node_modules/proj4/lib/common/adjust_lon.js");
// Robinson projection
// Based on https://github.com/OSGeo/proj.4/blob/master/src/PJ_robin.c
// Polynomial coeficients from http://article.gmane.org/gmane.comp.gis.proj-4.devel/6039




var COEFS_X = [
    [1.0000, 2.2199e-17, -7.15515e-05, 3.1103e-06],
    [0.9986, -0.000482243, -2.4897e-05, -1.3309e-06],
    [0.9954, -0.00083103, -4.48605e-05, -9.86701e-07],
    [0.9900, -0.00135364, -5.9661e-05, 3.6777e-06],
    [0.9822, -0.00167442, -4.49547e-06, -5.72411e-06],
    [0.9730, -0.00214868, -9.03571e-05, 1.8736e-08],
    [0.9600, -0.00305085, -9.00761e-05, 1.64917e-06],
    [0.9427, -0.00382792, -6.53386e-05, -2.6154e-06],
    [0.9216, -0.00467746, -0.00010457, 4.81243e-06],
    [0.8962, -0.00536223, -3.23831e-05, -5.43432e-06],
    [0.8679, -0.00609363, -0.000113898, 3.32484e-06],
    [0.8350, -0.00698325, -6.40253e-05, 9.34959e-07],
    [0.7986, -0.00755338, -5.00009e-05, 9.35324e-07],
    [0.7597, -0.00798324, -3.5971e-05, -2.27626e-06],
    [0.7186, -0.00851367, -7.01149e-05, -8.6303e-06],
    [0.6732, -0.00986209, -0.000199569, 1.91974e-05],
    [0.6213, -0.010418, 8.83923e-05, 6.24051e-06],
    [0.5722, -0.00906601, 0.000182, 6.24051e-06],
    [0.5322, -0.00677797, 0.000275608, 6.24051e-06]
];

var COEFS_Y = [
    [-5.20417e-18, 0.0124, 1.21431e-18, -8.45284e-11],
    [0.0620, 0.0124, -1.26793e-09, 4.22642e-10],
    [0.1240, 0.0124, 5.07171e-09, -1.60604e-09],
    [0.1860, 0.0123999, -1.90189e-08, 6.00152e-09],
    [0.2480, 0.0124002, 7.10039e-08, -2.24e-08],
    [0.3100, 0.0123992, -2.64997e-07, 8.35986e-08],
    [0.3720, 0.0124029, 9.88983e-07, -3.11994e-07],
    [0.4340, 0.0123893, -3.69093e-06, -4.35621e-07],
    [0.4958, 0.0123198, -1.02252e-05, -3.45523e-07],
    [0.5571, 0.0121916, -1.54081e-05, -5.82288e-07],
    [0.6176, 0.0119938, -2.41424e-05, -5.25327e-07],
    [0.6769, 0.011713, -3.20223e-05, -5.16405e-07],
    [0.7346, 0.0113541, -3.97684e-05, -6.09052e-07],
    [0.7903, 0.0109107, -4.89042e-05, -1.04739e-06],
    [0.8435, 0.0103431, -6.4615e-05, -1.40374e-09],
    [0.8936, 0.00969686, -6.4636e-05, -8.547e-06],
    [0.9394, 0.00840947, -0.000192841, -4.2106e-06],
    [0.9761, 0.00616527, -0.000256, -4.2106e-06],
    [1.0000, 0.00328947, -0.000319159, -4.2106e-06]
];

var FXC = 0.8487;
var FYC = 1.3523;
var C1 = _constants_values__WEBPACK_IMPORTED_MODULE_0__["R2D"]/5; // rad to 5-degree interval
var RC1 = 1/C1;
var NODES = 18;

var poly3_val = function(coefs, x) {
    return coefs[0] + x * (coefs[1] + x * (coefs[2] + x * coefs[3]));
};

var poly3_der = function(coefs, x) {
    return coefs[1] + x * (2 * coefs[2] + x * 3 * coefs[3]);
};

function newton_rapshon(f_df, start, max_err, iters) {
    var x = start;
    for (; iters; --iters) {
        var upd = f_df(x);
        x -= upd;
        if (Math.abs(upd) < max_err) {
            break;
        }
    }
    return x;
}

function init() {
    this.x0 = this.x0 || 0;
    this.y0 = this.y0 || 0;
    this.long0 = this.long0 || 0;
    this.es = 0;
    this.title = this.title || "Robinson";
}

function forward(ll) {
    var lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_1__["default"])(ll.x - this.long0);

    var dphi = Math.abs(ll.y);
    var i = Math.floor(dphi * C1);
    if (i < 0) {
        i = 0;
    } else if (i >= NODES) {
        i = NODES - 1;
    }
    dphi = _constants_values__WEBPACK_IMPORTED_MODULE_0__["R2D"] * (dphi - RC1 * i);
    var xy = {
        x: poly3_val(COEFS_X[i], dphi) * lon,
        y: poly3_val(COEFS_Y[i], dphi)
    };
    if (ll.y < 0) {
        xy.y = -xy.y;
    }

    xy.x = xy.x * this.a * FXC + this.x0;
    xy.y = xy.y * this.a * FYC + this.y0;
    return xy;
}

function inverse(xy) {
    var ll = {
        x: (xy.x - this.x0) / (this.a * FXC),
        y: Math.abs(xy.y - this.y0) / (this.a * FYC)
    };

    if (ll.y >= 1) { // pathologic case
        ll.x /= COEFS_X[NODES][0];
        ll.y = xy.y < 0 ? -_constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] : _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
    } else {
        // find table interval
        var i = Math.floor(ll.y * NODES);
        if (i < 0) {
            i = 0;
        } else if (i >= NODES) {
            i = NODES - 1;
        }
        for (;;) {
            if (COEFS_Y[i][0] > ll.y) {
                --i;
            } else if (COEFS_Y[i+1][0] <= ll.y) {
                ++i;
            } else {
                break;
            }
        }
        // linear interpolation in 5 degree interval
        var coefs = COEFS_Y[i];
        var t = 5 * (ll.y - coefs[0]) / (COEFS_Y[i+1][0] - coefs[0]);
        // find t so that poly3_val(coefs, t) = ll.y
        t = newton_rapshon(function(x) {
            return (poly3_val(coefs, x) - ll.y) / poly3_der(coefs, x);
        }, t, _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"], 100);

        ll.x /= poly3_val(COEFS_X[i], t);
        ll.y = (5 * i + t) * _constants_values__WEBPACK_IMPORTED_MODULE_0__["D2R"];
        if (xy.y < 0) {
            ll.y = -ll.y;
        }
    }

    ll.x = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_1__["default"])(ll.x + this.long0);
    return ll;
}

var names = ["Robinson", "robin"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "./node_modules/proj4/lib/projections/sinu.js":
/*!****************************************************!*\
  !*** ./node_modules/proj4/lib/projections/sinu.js ***!
  \****************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/adjust_lon */ "./node_modules/proj4/lib/common/adjust_lon.js");
/* harmony import */ var _common_adjust_lat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/adjust_lat */ "./node_modules/proj4/lib/common/adjust_lat.js");
/* harmony import */ var _common_pj_enfn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/pj_enfn */ "./node_modules/proj4/lib/common/pj_enfn.js");
/* harmony import */ var _common_pj_mlfn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/pj_mlfn */ "./node_modules/proj4/lib/common/pj_mlfn.js");
/* harmony import */ var _common_pj_inv_mlfn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/pj_inv_mlfn */ "./node_modules/proj4/lib/common/pj_inv_mlfn.js");
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/values */ "./node_modules/proj4/lib/constants/values.js");
/* harmony import */ var _common_asinz__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/asinz */ "./node_modules/proj4/lib/common/asinz.js");



var MAX_ITER = 20;







function init() {
  /* Place parameters in static storage for common use
    -------------------------------------------------*/


  if (!this.sphere) {
    this.en = Object(_common_pj_enfn__WEBPACK_IMPORTED_MODULE_2__["default"])(this.es);
  }
  else {
    this.n = 1;
    this.m = 0;
    this.es = 0;
    this.C_y = Math.sqrt((this.m + 1) / this.n);
    this.C_x = this.C_y / (this.m + 1);
  }

}

/* Sinusoidal forward equations--mapping lat,long to x,y
  -----------------------------------------------------*/
function forward(p) {
  var x, y;
  var lon = p.x;
  var lat = p.y;
  /* Forward equations
    -----------------*/
  lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(lon - this.long0);

  if (this.sphere) {
    if (!this.m) {
      lat = this.n !== 1 ? Math.asin(this.n * Math.sin(lat)) : lat;
    }
    else {
      var k = this.n * Math.sin(lat);
      for (var i = MAX_ITER; i; --i) {
        var V = (this.m * lat + Math.sin(lat) - k) / (this.m + Math.cos(lat));
        lat -= V;
        if (Math.abs(V) < _constants_values__WEBPACK_IMPORTED_MODULE_5__["EPSLN"]) {
          break;
        }
      }
    }
    x = this.a * this.C_x * lon * (this.m + Math.cos(lat));
    y = this.a * this.C_y * lat;

  }
  else {

    var s = Math.sin(lat);
    var c = Math.cos(lat);
    y = this.a * Object(_common_pj_mlfn__WEBPACK_IMPORTED_MODULE_3__["default"])(lat, s, c, this.en);
    x = this.a * lon * c / Math.sqrt(1 - this.es * s * s);
  }

  p.x = x;
  p.y = y;
  return p;
}

function inverse(p) {
  var lat, temp, lon, s;

  p.x -= this.x0;
  lon = p.x / this.a;
  p.y -= this.y0;
  lat = p.y / this.a;

  if (this.sphere) {
    lat /= this.C_y;
    lon = lon / (this.C_x * (this.m + Math.cos(lat)));
    if (this.m) {
      lat = Object(_common_asinz__WEBPACK_IMPORTED_MODULE_6__["default"])((this.m * lat + Math.sin(lat)) / this.n);
    }
    else if (this.n !== 1) {
      lat = Object(_common_asinz__WEBPACK_IMPORTED_MODULE_6__["default"])(Math.sin(lat) / this.n);
    }
    lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(lon + this.long0);
    lat = Object(_common_adjust_lat__WEBPACK_IMPORTED_MODULE_1__["default"])(lat);
  }
  else {
    lat = Object(_common_pj_inv_mlfn__WEBPACK_IMPORTED_MODULE_4__["default"])(p.y / this.a, this.es, this.en);
    s = Math.abs(lat);
    if (s < _constants_values__WEBPACK_IMPORTED_MODULE_5__["HALF_PI"]) {
      s = Math.sin(lat);
      temp = this.long0 + p.x * Math.sqrt(1 - this.es * s * s) / (this.a * Math.cos(lat));
      //temp = this.long0 + p.x / (this.a * Math.cos(lat));
      lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(temp);
    }
    else if ((s - _constants_values__WEBPACK_IMPORTED_MODULE_5__["EPSLN"]) < _constants_values__WEBPACK_IMPORTED_MODULE_5__["HALF_PI"]) {
      lon = this.long0;
    }
  }
  p.x = lon;
  p.y = lat;
  return p;
}

var names = ["Sinusoidal", "sinu"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "./node_modules/proj4/lib/projections/somerc.js":
/*!******************************************************!*\
  !*** ./node_modules/proj4/lib/projections/somerc.js ***!
  \******************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/*
  references:
    Formules et constantes pour le Calcul pour la
    projection cylindrique conforme à axe oblique et pour la transformation entre
    des systèmes de référence.
    http://www.swisstopo.admin.ch/internet/swisstopo/fr/home/topics/survey/sys/refsys/switzerland.parsysrelated1.31216.downloadList.77004.DownloadFile.tmp/swissprojectionfr.pdf
  */

function init() {
  var phy0 = this.lat0;
  this.lambda0 = this.long0;
  var sinPhy0 = Math.sin(phy0);
  var semiMajorAxis = this.a;
  var invF = this.rf;
  var flattening = 1 / invF;
  var e2 = 2 * flattening - Math.pow(flattening, 2);
  var e = this.e = Math.sqrt(e2);
  this.R = this.k0 * semiMajorAxis * Math.sqrt(1 - e2) / (1 - e2 * Math.pow(sinPhy0, 2));
  this.alpha = Math.sqrt(1 + e2 / (1 - e2) * Math.pow(Math.cos(phy0), 4));
  this.b0 = Math.asin(sinPhy0 / this.alpha);
  var k1 = Math.log(Math.tan(Math.PI / 4 + this.b0 / 2));
  var k2 = Math.log(Math.tan(Math.PI / 4 + phy0 / 2));
  var k3 = Math.log((1 + e * sinPhy0) / (1 - e * sinPhy0));
  this.K = k1 - this.alpha * k2 + this.alpha * e / 2 * k3;
}

function forward(p) {
  var Sa1 = Math.log(Math.tan(Math.PI / 4 - p.y / 2));
  var Sa2 = this.e / 2 * Math.log((1 + this.e * Math.sin(p.y)) / (1 - this.e * Math.sin(p.y)));
  var S = -this.alpha * (Sa1 + Sa2) + this.K;

  // spheric latitude
  var b = 2 * (Math.atan(Math.exp(S)) - Math.PI / 4);

  // spheric longitude
  var I = this.alpha * (p.x - this.lambda0);

  // psoeudo equatorial rotation
  var rotI = Math.atan(Math.sin(I) / (Math.sin(this.b0) * Math.tan(b) + Math.cos(this.b0) * Math.cos(I)));

  var rotB = Math.asin(Math.cos(this.b0) * Math.sin(b) - Math.sin(this.b0) * Math.cos(b) * Math.cos(I));

  p.y = this.R / 2 * Math.log((1 + Math.sin(rotB)) / (1 - Math.sin(rotB))) + this.y0;
  p.x = this.R * rotI + this.x0;
  return p;
}

function inverse(p) {
  var Y = p.x - this.x0;
  var X = p.y - this.y0;

  var rotI = Y / this.R;
  var rotB = 2 * (Math.atan(Math.exp(X / this.R)) - Math.PI / 4);

  var b = Math.asin(Math.cos(this.b0) * Math.sin(rotB) + Math.sin(this.b0) * Math.cos(rotB) * Math.cos(rotI));
  var I = Math.atan(Math.sin(rotI) / (Math.cos(this.b0) * Math.cos(rotI) - Math.sin(this.b0) * Math.tan(rotB)));

  var lambda = this.lambda0 + I / this.alpha;

  var S = 0;
  var phy = b;
  var prevPhy = -1000;
  var iteration = 0;
  while (Math.abs(phy - prevPhy) > 0.0000001) {
    if (++iteration > 20) {
      //...reportError("omercFwdInfinity");
      return;
    }
    //S = Math.log(Math.tan(Math.PI / 4 + phy / 2));
    S = 1 / this.alpha * (Math.log(Math.tan(Math.PI / 4 + b / 2)) - this.K) + this.e * Math.log(Math.tan(Math.PI / 4 + Math.asin(this.e * Math.sin(phy)) / 2));
    prevPhy = phy;
    phy = 2 * Math.atan(Math.exp(S)) - Math.PI / 2;
  }

  p.x = lambda;
  p.y = phy;
  return p;
}

var names = ["somerc"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "./node_modules/proj4/lib/projections/stere.js":
/*!*****************************************************!*\
  !*** ./node_modules/proj4/lib/projections/stere.js ***!
  \*****************************************************/
/*! exports provided: ssfn_, init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ssfn_", function() { return ssfn_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/values */ "./node_modules/proj4/lib/constants/values.js");
/* harmony import */ var _common_sign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/sign */ "./node_modules/proj4/lib/common/sign.js");
/* harmony import */ var _common_msfnz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/msfnz */ "./node_modules/proj4/lib/common/msfnz.js");
/* harmony import */ var _common_tsfnz__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/tsfnz */ "./node_modules/proj4/lib/common/tsfnz.js");
/* harmony import */ var _common_phi2z__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/phi2z */ "./node_modules/proj4/lib/common/phi2z.js");
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/adjust_lon */ "./node_modules/proj4/lib/common/adjust_lon.js");








function ssfn_(phit, sinphi, eccen) {
  sinphi *= eccen;
  return (Math.tan(0.5 * (_constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] + phit)) * Math.pow((1 - sinphi) / (1 + sinphi), 0.5 * eccen));
}

function init() {
  this.coslat0 = Math.cos(this.lat0);
  this.sinlat0 = Math.sin(this.lat0);
  if (this.sphere) {
    if (this.k0 === 1 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
      this.k0 = 0.5 * (1 + Object(_common_sign__WEBPACK_IMPORTED_MODULE_1__["default"])(this.lat0) * Math.sin(this.lat_ts));
    }
  }
  else {
    if (Math.abs(this.coslat0) <= _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
      if (this.lat0 > 0) {
        //North pole
        //trace('stere:north pole');
        this.con = 1;
      }
      else {
        //South pole
        //trace('stere:south pole');
        this.con = -1;
      }
    }
    this.cons = Math.sqrt(Math.pow(1 + this.e, 1 + this.e) * Math.pow(1 - this.e, 1 - this.e));
    if (this.k0 === 1 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
      this.k0 = 0.5 * this.cons * Object(_common_msfnz__WEBPACK_IMPORTED_MODULE_2__["default"])(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) / Object(_common_tsfnz__WEBPACK_IMPORTED_MODULE_3__["default"])(this.e, this.con * this.lat_ts, this.con * Math.sin(this.lat_ts));
    }
    this.ms1 = Object(_common_msfnz__WEBPACK_IMPORTED_MODULE_2__["default"])(this.e, this.sinlat0, this.coslat0);
    this.X0 = 2 * Math.atan(this.ssfn_(this.lat0, this.sinlat0, this.e)) - _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
    this.cosX0 = Math.cos(this.X0);
    this.sinX0 = Math.sin(this.X0);
  }
}

// Stereographic forward equations--mapping lat,long to x,y
function forward(p) {
  var lon = p.x;
  var lat = p.y;
  var sinlat = Math.sin(lat);
  var coslat = Math.cos(lat);
  var A, X, sinX, cosX, ts, rh;
  var dlon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_5__["default"])(lon - this.long0);

  if (Math.abs(Math.abs(lon - this.long0) - Math.PI) <= _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"] && Math.abs(lat + this.lat0) <= _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
    //case of the origine point
    //trace('stere:this is the origin point');
    p.x = NaN;
    p.y = NaN;
    return p;
  }
  if (this.sphere) {
    //trace('stere:sphere case');
    A = 2 * this.k0 / (1 + this.sinlat0 * sinlat + this.coslat0 * coslat * Math.cos(dlon));
    p.x = this.a * A * coslat * Math.sin(dlon) + this.x0;
    p.y = this.a * A * (this.coslat0 * sinlat - this.sinlat0 * coslat * Math.cos(dlon)) + this.y0;
    return p;
  }
  else {
    X = 2 * Math.atan(this.ssfn_(lat, sinlat, this.e)) - _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"];
    cosX = Math.cos(X);
    sinX = Math.sin(X);
    if (Math.abs(this.coslat0) <= _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
      ts = Object(_common_tsfnz__WEBPACK_IMPORTED_MODULE_3__["default"])(this.e, lat * this.con, this.con * sinlat);
      rh = 2 * this.a * this.k0 * ts / this.cons;
      p.x = this.x0 + rh * Math.sin(lon - this.long0);
      p.y = this.y0 - this.con * rh * Math.cos(lon - this.long0);
      //trace(p.toString());
      return p;
    }
    else if (Math.abs(this.sinlat0) < _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
      //Eq
      //trace('stere:equateur');
      A = 2 * this.a * this.k0 / (1 + cosX * Math.cos(dlon));
      p.y = A * sinX;
    }
    else {
      //other case
      //trace('stere:normal case');
      A = 2 * this.a * this.k0 * this.ms1 / (this.cosX0 * (1 + this.sinX0 * sinX + this.cosX0 * cosX * Math.cos(dlon)));
      p.y = A * (this.cosX0 * sinX - this.sinX0 * cosX * Math.cos(dlon)) + this.y0;
    }
    p.x = A * cosX * Math.sin(dlon) + this.x0;
  }
  //trace(p.toString());
  return p;
}

//* Stereographic inverse equations--mapping x,y to lat/long
function inverse(p) {
  p.x -= this.x0;
  p.y -= this.y0;
  var lon, lat, ts, ce, Chi;
  var rh = Math.sqrt(p.x * p.x + p.y * p.y);
  if (this.sphere) {
    var c = 2 * Math.atan(rh / (2 * this.a * this.k0));
    lon = this.long0;
    lat = this.lat0;
    if (rh <= _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
      p.x = lon;
      p.y = lat;
      return p;
    }
    lat = Math.asin(Math.cos(c) * this.sinlat0 + p.y * Math.sin(c) * this.coslat0 / rh);
    if (Math.abs(this.coslat0) < _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
      if (this.lat0 > 0) {
        lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_5__["default"])(this.long0 + Math.atan2(p.x, - 1 * p.y));
      }
      else {
        lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_5__["default"])(this.long0 + Math.atan2(p.x, p.y));
      }
    }
    else {
      lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_5__["default"])(this.long0 + Math.atan2(p.x * Math.sin(c), rh * this.coslat0 * Math.cos(c) - p.y * this.sinlat0 * Math.sin(c)));
    }
    p.x = lon;
    p.y = lat;
    return p;
  }
  else {
    if (Math.abs(this.coslat0) <= _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
      if (rh <= _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
        lat = this.lat0;
        lon = this.long0;
        p.x = lon;
        p.y = lat;
        //trace(p.toString());
        return p;
      }
      p.x *= this.con;
      p.y *= this.con;
      ts = rh * this.cons / (2 * this.a * this.k0);
      lat = this.con * Object(_common_phi2z__WEBPACK_IMPORTED_MODULE_4__["default"])(this.e, ts);
      lon = this.con * Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_5__["default"])(this.con * this.long0 + Math.atan2(p.x, - 1 * p.y));
    }
    else {
      ce = 2 * Math.atan(rh * this.cosX0 / (2 * this.a * this.k0 * this.ms1));
      lon = this.long0;
      if (rh <= _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
        Chi = this.X0;
      }
      else {
        Chi = Math.asin(Math.cos(ce) * this.sinX0 + p.y * Math.sin(ce) * this.cosX0 / rh);
        lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_5__["default"])(this.long0 + Math.atan2(p.x * Math.sin(ce), rh * this.cosX0 * Math.cos(ce) - p.y * this.sinX0 * Math.sin(ce)));
      }
      lat = -1 * Object(_common_phi2z__WEBPACK_IMPORTED_MODULE_4__["default"])(this.e, Math.tan(0.5 * (_constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"] + Chi)));
    }
  }
  p.x = lon;
  p.y = lat;

  //trace(p.toString());
  return p;

}

var names = ["stere", "Stereographic_South_Pole", "Polar Stereographic (variant B)"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names,
  ssfn_: ssfn_
});


/***/ }),

/***/ "./node_modules/proj4/lib/projections/sterea.js":
/*!******************************************************!*\
  !*** ./node_modules/proj4/lib/projections/sterea.js ***!
  \******************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _gauss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gauss */ "./node_modules/proj4/lib/projections/gauss.js");
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/adjust_lon */ "./node_modules/proj4/lib/common/adjust_lon.js");



function init() {
  _gauss__WEBPACK_IMPORTED_MODULE_0__["default"].init.apply(this);
  if (!this.rc) {
    return;
  }
  this.sinc0 = Math.sin(this.phic0);
  this.cosc0 = Math.cos(this.phic0);
  this.R2 = 2 * this.rc;
  if (!this.title) {
    this.title = "Oblique Stereographic Alternative";
  }
}

function forward(p) {
  var sinc, cosc, cosl, k;
  p.x = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_1__["default"])(p.x - this.long0);
  _gauss__WEBPACK_IMPORTED_MODULE_0__["default"].forward.apply(this, [p]);
  sinc = Math.sin(p.y);
  cosc = Math.cos(p.y);
  cosl = Math.cos(p.x);
  k = this.k0 * this.R2 / (1 + this.sinc0 * sinc + this.cosc0 * cosc * cosl);
  p.x = k * cosc * Math.sin(p.x);
  p.y = k * (this.cosc0 * sinc - this.sinc0 * cosc * cosl);
  p.x = this.a * p.x + this.x0;
  p.y = this.a * p.y + this.y0;
  return p;
}

function inverse(p) {
  var sinc, cosc, lon, lat, rho;
  p.x = (p.x - this.x0) / this.a;
  p.y = (p.y - this.y0) / this.a;

  p.x /= this.k0;
  p.y /= this.k0;
  if ((rho = Math.sqrt(p.x * p.x + p.y * p.y))) {
    var c = 2 * Math.atan2(rho, this.R2);
    sinc = Math.sin(c);
    cosc = Math.cos(c);
    lat = Math.asin(cosc * this.sinc0 + p.y * sinc * this.cosc0 / rho);
    lon = Math.atan2(p.x * sinc, rho * this.cosc0 * cosc - p.y * this.sinc0 * sinc);
  }
  else {
    lat = this.phic0;
    lon = 0;
  }

  p.x = lon;
  p.y = lat;
  _gauss__WEBPACK_IMPORTED_MODULE_0__["default"].inverse.apply(this, [p]);
  p.x = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_1__["default"])(p.x + this.long0);
  return p;
}

var names = ["Stereographic_North_Pole", "Oblique_Stereographic", "Polar_Stereographic", "sterea","Oblique Stereographic Alternative","Double_Stereographic"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "./node_modules/proj4/lib/projections/tmerc.js":
/*!*****************************************************!*\
  !*** ./node_modules/proj4/lib/projections/tmerc.js ***!
  \*****************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_pj_enfn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/pj_enfn */ "./node_modules/proj4/lib/common/pj_enfn.js");
/* harmony import */ var _common_pj_mlfn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/pj_mlfn */ "./node_modules/proj4/lib/common/pj_mlfn.js");
/* harmony import */ var _common_pj_inv_mlfn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/pj_inv_mlfn */ "./node_modules/proj4/lib/common/pj_inv_mlfn.js");
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/adjust_lon */ "./node_modules/proj4/lib/common/adjust_lon.js");
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/values */ "./node_modules/proj4/lib/constants/values.js");
/* harmony import */ var _common_sign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/sign */ "./node_modules/proj4/lib/common/sign.js");
// Heavily based on this tmerc projection implementation
// https://github.com/mbloch/mapshaper-proj/blob/master/src/projections/tmerc.js









function init() {
  this.x0 = this.x0 !== undefined ? this.x0 : 0;
  this.y0 = this.y0 !== undefined ? this.y0 : 0;
  this.long0 = this.long0 !== undefined ? this.long0 : 0;
  this.lat0 = this.lat0 !== undefined ? this.lat0 : 0;

  if (this.es) {
    this.en = Object(_common_pj_enfn__WEBPACK_IMPORTED_MODULE_0__["default"])(this.es);
    this.ml0 = Object(_common_pj_mlfn__WEBPACK_IMPORTED_MODULE_1__["default"])(this.lat0, Math.sin(this.lat0), Math.cos(this.lat0), this.en);
  }
}

/**
    Transverse Mercator Forward  - long/lat to x/y
    long/lat in radians
  */
function forward(p) {
  var lon = p.x;
  var lat = p.y;

  var delta_lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_3__["default"])(lon - this.long0);
  var con;
  var x, y;
  var sin_phi = Math.sin(lat);
  var cos_phi = Math.cos(lat);

  if (!this.es) {
    var b = cos_phi * Math.sin(delta_lon);

    if ((Math.abs(Math.abs(b) - 1)) < _constants_values__WEBPACK_IMPORTED_MODULE_4__["EPSLN"]) {
      return (93);
    }
    else {
      x = 0.5 * this.a * this.k0 * Math.log((1 + b) / (1 - b)) + this.x0;
      y = cos_phi * Math.cos(delta_lon) / Math.sqrt(1 - Math.pow(b, 2));
      b = Math.abs(y);

      if (b >= 1) {
        if ((b - 1) > _constants_values__WEBPACK_IMPORTED_MODULE_4__["EPSLN"]) {
          return (93);
        }
        else {
          y = 0;
        }
      }
      else {
        y = Math.acos(y);
      }

      if (lat < 0) {
        y = -y;
      }

      y = this.a * this.k0 * (y - this.lat0) + this.y0;
    }
  }
  else {
    var al = cos_phi * delta_lon;
    var als = Math.pow(al, 2);
    var c = this.ep2 * Math.pow(cos_phi, 2);
    var cs = Math.pow(c, 2);
    var tq = Math.abs(cos_phi) > _constants_values__WEBPACK_IMPORTED_MODULE_4__["EPSLN"] ? Math.tan(lat) : 0;
    var t = Math.pow(tq, 2);
    var ts = Math.pow(t, 2);
    con = 1 - this.es * Math.pow(sin_phi, 2);
    al = al / Math.sqrt(con);
    var ml = Object(_common_pj_mlfn__WEBPACK_IMPORTED_MODULE_1__["default"])(lat, sin_phi, cos_phi, this.en);

    x = this.a * (this.k0 * al * (1 +
      als / 6 * (1 - t + c +
      als / 20 * (5 - 18 * t + ts + 14 * c - 58 * t * c +
      als / 42 * (61 + 179 * ts - ts * t - 479 * t))))) +
      this.x0;

    y = this.a * (this.k0 * (ml - this.ml0 +
      sin_phi * delta_lon * al / 2 * (1 +
      als / 12 * (5 - t + 9 * c + 4 * cs +
      als / 30 * (61 + ts - 58 * t + 270 * c - 330 * t * c +
      als / 56 * (1385 + 543 * ts - ts * t - 3111 * t)))))) +
      this.y0;
  }

  p.x = x;
  p.y = y;

  return p;
}

/**
    Transverse Mercator Inverse  -  x/y to long/lat
  */
function inverse(p) {
  var con, phi;
  var lat, lon;
  var x = (p.x - this.x0) * (1 / this.a);
  var y = (p.y - this.y0) * (1 / this.a);

  if (!this.es) {
    var f = Math.exp(x / this.k0);
    var g = 0.5 * (f - 1 / f);
    var temp = this.lat0 + y / this.k0;
    var h = Math.cos(temp);
    con = Math.sqrt((1 - Math.pow(h, 2)) / (1 + Math.pow(g, 2)));
    lat = Math.asin(con);

    if (y < 0) {
      lat = -lat;
    }

    if ((g === 0) && (h === 0)) {
      lon = 0;
    }
    else {
      lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_3__["default"])(Math.atan2(g, h) + this.long0);
    }
  }
  else { // ellipsoidal form
    con = this.ml0 + y / this.k0;
    phi = Object(_common_pj_inv_mlfn__WEBPACK_IMPORTED_MODULE_2__["default"])(con, this.es, this.en);

    if (Math.abs(phi) < _constants_values__WEBPACK_IMPORTED_MODULE_4__["HALF_PI"]) {
      var sin_phi = Math.sin(phi);
      var cos_phi = Math.cos(phi);
      var tan_phi = Math.abs(cos_phi) > _constants_values__WEBPACK_IMPORTED_MODULE_4__["EPSLN"] ? Math.tan(phi) : 0;
      var c = this.ep2 * Math.pow(cos_phi, 2);
      var cs = Math.pow(c, 2);
      var t = Math.pow(tan_phi, 2);
      var ts = Math.pow(t, 2);
      con = 1 - this.es * Math.pow(sin_phi, 2);
      var d = x * Math.sqrt(con) / this.k0;
      var ds = Math.pow(d, 2);
      con = con * tan_phi;

      lat = phi - (con * ds / (1 - this.es)) * 0.5 * (1 -
        ds / 12 * (5 + 3 * t - 9 * c * t + c - 4 * cs -
        ds / 30 * (61 + 90 * t - 252 * c * t + 45 * ts + 46 * c -
        ds / 56 * (1385 + 3633 * t + 4095 * ts + 1574 * ts * t))));

      lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_3__["default"])(this.long0 + (d * (1 -
        ds / 6 * (1 + 2 * t + c -
        ds / 20 * (5 + 28 * t + 24 * ts + 8 * c * t + 6 * c -
        ds / 42 * (61 + 662 * t + 1320 * ts + 720 * ts * t)))) / cos_phi));
    }
    else {
      lat = _constants_values__WEBPACK_IMPORTED_MODULE_4__["HALF_PI"] * Object(_common_sign__WEBPACK_IMPORTED_MODULE_5__["default"])(y);
      lon = 0;
    }
  }

  p.x = lon;
  p.y = lat;

  return p;
}

var names = ["Fast_Transverse_Mercator", "Fast Transverse Mercator"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "./node_modules/proj4/lib/projections/tpers.js":
/*!*****************************************************!*\
  !*** ./node_modules/proj4/lib/projections/tpers.js ***!
  \*****************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/values */ "./node_modules/proj4/lib/constants/values.js");
/* harmony import */ var _common_hypot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/hypot */ "./node_modules/proj4/lib/common/hypot.js");

var mode = {
  N_POLE: 0,
  S_POLE: 1,
  EQUIT: 2,
  OBLIQ: 3
};




var params = {
  h:     { def: 100000, num: true },           // default is Karman line, no default in PROJ.7
  azi:   { def: 0, num: true, degrees: true }, // default is North
  tilt:  { def: 0, num: true, degrees: true }, // default is Nadir
  long0: { def: 0, num: true },                // default is Greenwich, conversion to rad is automatic
  lat0:  { def: 0, num: true }                 // default is Equator, conversion to rad is automatic
};

function init() {
  Object.keys(params).forEach(function (p) {
    if (typeof this[p] === "undefined") {
      this[p] = params[p].def;
    } else if (params[p].num && isNaN(this[p])) {
      throw new Error("Invalid parameter value, must be numeric " + p + " = " + this[p]);
    } else if (params[p].num) {
      this[p] = parseFloat(this[p]);
    }
    if (params[p].degrees) {
      this[p] = this[p] * _constants_values__WEBPACK_IMPORTED_MODULE_0__["D2R"];
    }
  }.bind(this));

  if (Math.abs((Math.abs(this.lat0) - _constants_values__WEBPACK_IMPORTED_MODULE_0__["HALF_PI"])) < _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
    this.mode = this.lat0 < 0 ? mode.S_POLE : mode.N_POLE;
  } else if (Math.abs(this.lat0) < _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
    this.mode = mode.EQUIT;
  } else {
    this.mode = mode.OBLIQ;
    this.sinph0 = Math.sin(this.lat0);
    this.cosph0 = Math.cos(this.lat0);
  }

  this.pn1 = this.h / this.a;  // Normalize relative to the Earth's radius

  if (this.pn1 <= 0 || this.pn1 > 1e10) {
    throw new Error("Invalid height");
  }
  
  this.p = 1 + this.pn1;
  this.rp = 1 / this.p;
  this.h1 = 1 / this.pn1;
  this.pfact = (this.p + 1) * this.h1;
  this.es = 0;

  var omega = this.tilt;
  var gamma = this.azi;
  this.cg = Math.cos(gamma);
  this.sg = Math.sin(gamma);
  this.cw = Math.cos(omega);
  this.sw = Math.sin(omega);
}

function forward(p) {
  p.x -= this.long0;
  var sinphi = Math.sin(p.y);
  var cosphi = Math.cos(p.y);
  var coslam = Math.cos(p.x);
  var x, y;
  switch (this.mode) {
    case mode.OBLIQ:
      y = this.sinph0 * sinphi + this.cosph0 * cosphi * coslam;
      break;
    case mode.EQUIT:
      y = cosphi * coslam;
      break;
    case mode.S_POLE:
      y = -sinphi;
      break;
    case mode.N_POLE:
      y = sinphi;
      break;
  }
  y = this.pn1 / (this.p - y);
  x = y * cosphi * Math.sin(p.x);

  switch (this.mode) {
    case mode.OBLIQ:
      y *= this.cosph0 * sinphi - this.sinph0 * cosphi * coslam;
      break;
    case mode.EQUIT:
      y *= sinphi;
      break;
    case mode.N_POLE:
      y *= -(cosphi * coslam);
      break;
    case mode.S_POLE:
      y *= cosphi * coslam;
      break;
  }

  // Tilt 
  var yt, ba;
  yt = y * this.cg + x * this.sg;
  ba = 1 / (yt * this.sw * this.h1 + this.cw);
  x = (x * this.cg - y * this.sg) * this.cw * ba;
  y = yt * ba;

  p.x = x * this.a;
  p.y = y * this.a;
  return p;
}

function inverse(p) {
  p.x /= this.a;
  p.y /= this.a;
  var r = { x: p.x, y: p.y };

  // Un-Tilt
  var bm, bq, yt;
  yt = 1 / (this.pn1 - p.y * this.sw);
  bm = this.pn1 * p.x * yt;
  bq = this.pn1 * p.y * this.cw * yt;
  p.x = bm * this.cg + bq * this.sg;
  p.y = bq * this.cg - bm * this.sg;

  var rh = Object(_common_hypot__WEBPACK_IMPORTED_MODULE_1__["default"])(p.x, p.y);
  if (Math.abs(rh) < _constants_values__WEBPACK_IMPORTED_MODULE_0__["EPSLN"]) {
    r.x = 0;
    r.y = p.y;
  } else {
    var cosz, sinz;
    sinz = 1 - rh * rh * this.pfact;
    sinz = (this.p - Math.sqrt(sinz)) / (this.pn1 / rh + rh / this.pn1);
    cosz = Math.sqrt(1 - sinz * sinz);
    switch (this.mode) {
      case mode.OBLIQ:
        r.y = Math.asin(cosz * this.sinph0 + p.y * sinz * this.cosph0 / rh);
        p.y = (cosz - this.sinph0 * Math.sin(r.y)) * rh;
        p.x *= sinz * this.cosph0;
        break;
      case mode.EQUIT:
        r.y = Math.asin(p.y * sinz / rh);
        p.y = cosz * rh;
        p.x *= sinz;
        break;
      case mode.N_POLE:
        r.y = Math.asin(cosz);
        p.y = -p.y;
        break;
      case mode.S_POLE:
        r.y = -Math.asin(cosz);
        break;
    }
    r.x = Math.atan2(p.x, p.y);
  }

  p.x = r.x + this.long0;
  p.y = r.y;
  return p;
}

var names = ["Tilted_Perspective", "tpers"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "./node_modules/proj4/lib/projections/utm.js":
/*!***************************************************!*\
  !*** ./node_modules/proj4/lib/projections/utm.js ***!
  \***************************************************/
/*! exports provided: dependsOn, init, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dependsOn", function() { return dependsOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_adjust_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/adjust_zone */ "./node_modules/proj4/lib/common/adjust_zone.js");
/* harmony import */ var _etmerc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./etmerc */ "./node_modules/proj4/lib/projections/etmerc.js");
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/values */ "./node_modules/proj4/lib/constants/values.js");


var dependsOn = 'etmerc';



function init() {
  var zone = Object(_common_adjust_zone__WEBPACK_IMPORTED_MODULE_0__["default"])(this.zone, this.long0);
  if (zone === undefined) {
    throw new Error('unknown utm zone');
  }
  this.lat0 = 0;
  this.long0 =  ((6 * Math.abs(zone)) - 183) * _constants_values__WEBPACK_IMPORTED_MODULE_2__["D2R"];
  this.x0 = 500000;
  this.y0 = this.utmSouth ? 10000000 : 0;
  this.k0 = 0.9996;

  _etmerc__WEBPACK_IMPORTED_MODULE_1__["default"].init.apply(this);
  this.forward = _etmerc__WEBPACK_IMPORTED_MODULE_1__["default"].forward;
  this.inverse = _etmerc__WEBPACK_IMPORTED_MODULE_1__["default"].inverse;
}

var names = ["Universal Transverse Mercator System", "utm"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  names: names,
  dependsOn: dependsOn
});


/***/ }),

/***/ "./node_modules/proj4/lib/projections/vandg.js":
/*!*****************************************************!*\
  !*** ./node_modules/proj4/lib/projections/vandg.js ***!
  \*****************************************************/
/*! exports provided: init, forward, inverse, names, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var _common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/adjust_lon */ "./node_modules/proj4/lib/common/adjust_lon.js");
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/values */ "./node_modules/proj4/lib/constants/values.js");
/* harmony import */ var _common_asinz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/asinz */ "./node_modules/proj4/lib/common/asinz.js");






/* Initialize the Van Der Grinten projection
  ----------------------------------------*/
function init() {
  //this.R = 6370997; //Radius of earth
  this.R = this.a;
}

function forward(p) {

  var lon = p.x;
  var lat = p.y;

  /* Forward equations
    -----------------*/
  var dlon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(lon - this.long0);
  var x, y;

  if (Math.abs(lat) <= _constants_values__WEBPACK_IMPORTED_MODULE_1__["EPSLN"]) {
    x = this.x0 + this.R * dlon;
    y = this.y0;
  }
  var theta = Object(_common_asinz__WEBPACK_IMPORTED_MODULE_2__["default"])(2 * Math.abs(lat / Math.PI));
  if ((Math.abs(dlon) <= _constants_values__WEBPACK_IMPORTED_MODULE_1__["EPSLN"]) || (Math.abs(Math.abs(lat) - _constants_values__WEBPACK_IMPORTED_MODULE_1__["HALF_PI"]) <= _constants_values__WEBPACK_IMPORTED_MODULE_1__["EPSLN"])) {
    x = this.x0;
    if (lat >= 0) {
      y = this.y0 + Math.PI * this.R * Math.tan(0.5 * theta);
    }
    else {
      y = this.y0 + Math.PI * this.R * -Math.tan(0.5 * theta);
    }
    //  return(OK);
  }
  var al = 0.5 * Math.abs((Math.PI / dlon) - (dlon / Math.PI));
  var asq = al * al;
  var sinth = Math.sin(theta);
  var costh = Math.cos(theta);

  var g = costh / (sinth + costh - 1);
  var gsq = g * g;
  var m = g * (2 / sinth - 1);
  var msq = m * m;
  var con = Math.PI * this.R * (al * (g - msq) + Math.sqrt(asq * (g - msq) * (g - msq) - (msq + asq) * (gsq - msq))) / (msq + asq);
  if (dlon < 0) {
    con = -con;
  }
  x = this.x0 + con;
  //con = Math.abs(con / (Math.PI * this.R));
  var q = asq + g;
  con = Math.PI * this.R * (m * q - al * Math.sqrt((msq + asq) * (asq + 1) - q * q)) / (msq + asq);
  if (lat >= 0) {
    //y = this.y0 + Math.PI * this.R * Math.sqrt(1 - con * con - 2 * al * con);
    y = this.y0 + con;
  }
  else {
    //y = this.y0 - Math.PI * this.R * Math.sqrt(1 - con * con - 2 * al * con);
    y = this.y0 - con;
  }
  p.x = x;
  p.y = y;
  return p;
}

/* Van Der Grinten inverse equations--mapping x,y to lat/long
  ---------------------------------------------------------*/
function inverse(p) {
  var lon, lat;
  var xx, yy, xys, c1, c2, c3;
  var a1;
  var m1;
  var con;
  var th1;
  var d;

  /* inverse equations
    -----------------*/
  p.x -= this.x0;
  p.y -= this.y0;
  con = Math.PI * this.R;
  xx = p.x / con;
  yy = p.y / con;
  xys = xx * xx + yy * yy;
  c1 = -Math.abs(yy) * (1 + xys);
  c2 = c1 - 2 * yy * yy + xx * xx;
  c3 = -2 * c1 + 1 + 2 * yy * yy + xys * xys;
  d = yy * yy / c3 + (2 * c2 * c2 * c2 / c3 / c3 / c3 - 9 * c1 * c2 / c3 / c3) / 27;
  a1 = (c1 - c2 * c2 / 3 / c3) / c3;
  m1 = 2 * Math.sqrt(-a1 / 3);
  con = ((3 * d) / a1) / m1;
  if (Math.abs(con) > 1) {
    if (con >= 0) {
      con = 1;
    }
    else {
      con = -1;
    }
  }
  th1 = Math.acos(con) / 3;
  if (p.y >= 0) {
    lat = (-m1 * Math.cos(th1 + Math.PI / 3) - c2 / 3 / c3) * Math.PI;
  }
  else {
    lat = -(-m1 * Math.cos(th1 + Math.PI / 3) - c2 / 3 / c3) * Math.PI;
  }

  if (Math.abs(xx) < _constants_values__WEBPACK_IMPORTED_MODULE_1__["EPSLN"]) {
    lon = this.long0;
  }
  else {
    lon = Object(_common_adjust_lon__WEBPACK_IMPORTED_MODULE_0__["default"])(this.long0 + Math.PI * (xys - 1 + Math.sqrt(1 + 2 * (xx * xx - yy * yy) + xys * xys)) / 2 / xx);
  }

  p.x = lon;
  p.y = lat;
  return p;
}

var names = ["Van_der_Grinten_I", "VanDerGrinten", "vandg"];
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  forward: forward,
  inverse: inverse,
  names: names
});


/***/ }),

/***/ "./node_modules/proj4/lib/transform.js":
/*!*********************************************!*\
  !*** ./node_modules/proj4/lib/transform.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return transform; });
/* harmony import */ var _constants_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/values */ "./node_modules/proj4/lib/constants/values.js");
/* harmony import */ var _datum_transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datum_transform */ "./node_modules/proj4/lib/datum_transform.js");
/* harmony import */ var _adjust_axis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adjust_axis */ "./node_modules/proj4/lib/adjust_axis.js");
/* harmony import */ var _Proj__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Proj */ "./node_modules/proj4/lib/Proj.js");
/* harmony import */ var _common_toPoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/toPoint */ "./node_modules/proj4/lib/common/toPoint.js");
/* harmony import */ var _checkSanity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkSanity */ "./node_modules/proj4/lib/checkSanity.js");







function checkNotWGS(source, dest) {
  return ((source.datum.datum_type === _constants_values__WEBPACK_IMPORTED_MODULE_0__["PJD_3PARAM"] || source.datum.datum_type === _constants_values__WEBPACK_IMPORTED_MODULE_0__["PJD_7PARAM"]) && dest.datumCode !== 'WGS84') || ((dest.datum.datum_type === _constants_values__WEBPACK_IMPORTED_MODULE_0__["PJD_3PARAM"] || dest.datum.datum_type === _constants_values__WEBPACK_IMPORTED_MODULE_0__["PJD_7PARAM"]) && source.datumCode !== 'WGS84');
}

function transform(source, dest, point, enforceAxis) {
  var wgs84;
  if (Array.isArray(point)) {
    point = Object(_common_toPoint__WEBPACK_IMPORTED_MODULE_4__["default"])(point);
  }
  Object(_checkSanity__WEBPACK_IMPORTED_MODULE_5__["default"])(point);
  // Workaround for datum shifts towgs84, if either source or destination projection is not wgs84
  if (source.datum && dest.datum && checkNotWGS(source, dest)) {
    wgs84 = new _Proj__WEBPACK_IMPORTED_MODULE_3__["default"]('WGS84');
    point = transform(source, wgs84, point, enforceAxis);
    source = wgs84;
  }
  // DGR, 2010/11/12
  if (enforceAxis && source.axis !== 'enu') {
    point = Object(_adjust_axis__WEBPACK_IMPORTED_MODULE_2__["default"])(source, false, point);
  }
  // Transform source points to long/lat, if they aren't already.
  if (source.projName === 'longlat') {
    point = {
      x: point.x * _constants_values__WEBPACK_IMPORTED_MODULE_0__["D2R"],
      y: point.y * _constants_values__WEBPACK_IMPORTED_MODULE_0__["D2R"],
      z: point.z || 0
    };
  } else {
    if (source.to_meter) {
      point = {
        x: point.x * source.to_meter,
        y: point.y * source.to_meter,
        z: point.z || 0
      };
    }
    point = source.inverse(point); // Convert Cartesian to longlat
    if (!point) {
      return;
    }
  }
  // Adjust for the prime meridian if necessary
  if (source.from_greenwich) {
    point.x += source.from_greenwich;
  }

  // Convert datums if needed, and if possible.
  point = Object(_datum_transform__WEBPACK_IMPORTED_MODULE_1__["default"])(source.datum, dest.datum, point);
  if (!point) {
    return;
  }

  // Adjust for the prime meridian if necessary
  if (dest.from_greenwich) {
    point = {
      x: point.x - dest.from_greenwich,
      y: point.y,
      z: point.z || 0
    };
  }

  if (dest.projName === 'longlat') {
    // convert radians to decimal degrees
    point = {
      x: point.x * _constants_values__WEBPACK_IMPORTED_MODULE_0__["R2D"],
      y: point.y * _constants_values__WEBPACK_IMPORTED_MODULE_0__["R2D"],
      z: point.z || 0
    };
  } else { // else project
    point = dest.forward(point);
    if (dest.to_meter) {
      point = {
        x: point.x / dest.to_meter,
        y: point.y / dest.to_meter,
        z: point.z || 0
      };
    }
  }

  // DGR, 2010/11/12
  if (enforceAxis && dest.axis !== 'enu') {
    return Object(_adjust_axis__WEBPACK_IMPORTED_MODULE_2__["default"])(dest, true, point);
  }

  return point;
}


/***/ }),

/***/ "./node_modules/proj4/projs.js":
/*!*************************************!*\
  !*** ./node_modules/proj4/projs.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_projections_tmerc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/projections/tmerc */ "./node_modules/proj4/lib/projections/tmerc.js");
/* harmony import */ var _lib_projections_etmerc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/projections/etmerc */ "./node_modules/proj4/lib/projections/etmerc.js");
/* harmony import */ var _lib_projections_utm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/projections/utm */ "./node_modules/proj4/lib/projections/utm.js");
/* harmony import */ var _lib_projections_sterea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/projections/sterea */ "./node_modules/proj4/lib/projections/sterea.js");
/* harmony import */ var _lib_projections_stere__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/projections/stere */ "./node_modules/proj4/lib/projections/stere.js");
/* harmony import */ var _lib_projections_somerc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/projections/somerc */ "./node_modules/proj4/lib/projections/somerc.js");
/* harmony import */ var _lib_projections_omerc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/projections/omerc */ "./node_modules/proj4/lib/projections/omerc.js");
/* harmony import */ var _lib_projections_lcc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/projections/lcc */ "./node_modules/proj4/lib/projections/lcc.js");
/* harmony import */ var _lib_projections_krovak__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/projections/krovak */ "./node_modules/proj4/lib/projections/krovak.js");
/* harmony import */ var _lib_projections_cass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/projections/cass */ "./node_modules/proj4/lib/projections/cass.js");
/* harmony import */ var _lib_projections_laea__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/projections/laea */ "./node_modules/proj4/lib/projections/laea.js");
/* harmony import */ var _lib_projections_aea__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/projections/aea */ "./node_modules/proj4/lib/projections/aea.js");
/* harmony import */ var _lib_projections_gnom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/projections/gnom */ "./node_modules/proj4/lib/projections/gnom.js");
/* harmony import */ var _lib_projections_cea__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/projections/cea */ "./node_modules/proj4/lib/projections/cea.js");
/* harmony import */ var _lib_projections_eqc__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/projections/eqc */ "./node_modules/proj4/lib/projections/eqc.js");
/* harmony import */ var _lib_projections_poly__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lib/projections/poly */ "./node_modules/proj4/lib/projections/poly.js");
/* harmony import */ var _lib_projections_nzmg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lib/projections/nzmg */ "./node_modules/proj4/lib/projections/nzmg.js");
/* harmony import */ var _lib_projections_mill__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lib/projections/mill */ "./node_modules/proj4/lib/projections/mill.js");
/* harmony import */ var _lib_projections_sinu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lib/projections/sinu */ "./node_modules/proj4/lib/projections/sinu.js");
/* harmony import */ var _lib_projections_moll__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lib/projections/moll */ "./node_modules/proj4/lib/projections/moll.js");
/* harmony import */ var _lib_projections_eqdc__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lib/projections/eqdc */ "./node_modules/proj4/lib/projections/eqdc.js");
/* harmony import */ var _lib_projections_vandg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./lib/projections/vandg */ "./node_modules/proj4/lib/projections/vandg.js");
/* harmony import */ var _lib_projections_aeqd__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./lib/projections/aeqd */ "./node_modules/proj4/lib/projections/aeqd.js");
/* harmony import */ var _lib_projections_ortho__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./lib/projections/ortho */ "./node_modules/proj4/lib/projections/ortho.js");
/* harmony import */ var _lib_projections_qsc__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./lib/projections/qsc */ "./node_modules/proj4/lib/projections/qsc.js");
/* harmony import */ var _lib_projections_robin__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./lib/projections/robin */ "./node_modules/proj4/lib/projections/robin.js");
/* harmony import */ var _lib_projections_geocent__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./lib/projections/geocent */ "./node_modules/proj4/lib/projections/geocent.js");
/* harmony import */ var _lib_projections_tpers__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./lib/projections/tpers */ "./node_modules/proj4/lib/projections/tpers.js");




























/* harmony default export */ __webpack_exports__["default"] = (function(proj4){
  proj4.Proj.projections.add(_lib_projections_tmerc__WEBPACK_IMPORTED_MODULE_0__["default"]);
  proj4.Proj.projections.add(_lib_projections_etmerc__WEBPACK_IMPORTED_MODULE_1__["default"]);
  proj4.Proj.projections.add(_lib_projections_utm__WEBPACK_IMPORTED_MODULE_2__["default"]);
  proj4.Proj.projections.add(_lib_projections_sterea__WEBPACK_IMPORTED_MODULE_3__["default"]);
  proj4.Proj.projections.add(_lib_projections_stere__WEBPACK_IMPORTED_MODULE_4__["default"]);
  proj4.Proj.projections.add(_lib_projections_somerc__WEBPACK_IMPORTED_MODULE_5__["default"]);
  proj4.Proj.projections.add(_lib_projections_omerc__WEBPACK_IMPORTED_MODULE_6__["default"]);
  proj4.Proj.projections.add(_lib_projections_lcc__WEBPACK_IMPORTED_MODULE_7__["default"]);
  proj4.Proj.projections.add(_lib_projections_krovak__WEBPACK_IMPORTED_MODULE_8__["default"]);
  proj4.Proj.projections.add(_lib_projections_cass__WEBPACK_IMPORTED_MODULE_9__["default"]);
  proj4.Proj.projections.add(_lib_projections_laea__WEBPACK_IMPORTED_MODULE_10__["default"]);
  proj4.Proj.projections.add(_lib_projections_aea__WEBPACK_IMPORTED_MODULE_11__["default"]);
  proj4.Proj.projections.add(_lib_projections_gnom__WEBPACK_IMPORTED_MODULE_12__["default"]);
  proj4.Proj.projections.add(_lib_projections_cea__WEBPACK_IMPORTED_MODULE_13__["default"]);
  proj4.Proj.projections.add(_lib_projections_eqc__WEBPACK_IMPORTED_MODULE_14__["default"]);
  proj4.Proj.projections.add(_lib_projections_poly__WEBPACK_IMPORTED_MODULE_15__["default"]);
  proj4.Proj.projections.add(_lib_projections_nzmg__WEBPACK_IMPORTED_MODULE_16__["default"]);
  proj4.Proj.projections.add(_lib_projections_mill__WEBPACK_IMPORTED_MODULE_17__["default"]);
  proj4.Proj.projections.add(_lib_projections_sinu__WEBPACK_IMPORTED_MODULE_18__["default"]);
  proj4.Proj.projections.add(_lib_projections_moll__WEBPACK_IMPORTED_MODULE_19__["default"]);
  proj4.Proj.projections.add(_lib_projections_eqdc__WEBPACK_IMPORTED_MODULE_20__["default"]);
  proj4.Proj.projections.add(_lib_projections_vandg__WEBPACK_IMPORTED_MODULE_21__["default"]);
  proj4.Proj.projections.add(_lib_projections_aeqd__WEBPACK_IMPORTED_MODULE_22__["default"]);
  proj4.Proj.projections.add(_lib_projections_ortho__WEBPACK_IMPORTED_MODULE_23__["default"]);
  proj4.Proj.projections.add(_lib_projections_qsc__WEBPACK_IMPORTED_MODULE_24__["default"]);
  proj4.Proj.projections.add(_lib_projections_robin__WEBPACK_IMPORTED_MODULE_25__["default"]);
  proj4.Proj.projections.add(_lib_projections_geocent__WEBPACK_IMPORTED_MODULE_26__["default"]);
  proj4.Proj.projections.add(_lib_projections_tpers__WEBPACK_IMPORTED_MODULE_27__["default"]);
});

/***/ }),

/***/ "./node_modules/proj4leaflet/src/proj4leaflet.js":
/*!*******************************************************!*\
  !*** ./node_modules/proj4leaflet/src/proj4leaflet.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
	var L, proj4;
	if (true) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js"), __webpack_require__(/*! proj4 */ "./node_modules/proj4/lib/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}(function (L, proj4) {
	if (proj4.__esModule && proj4.default) {
		// If proj4 was bundled as an ES6 module, unwrap it to get
		// to the actual main proj4 object.
		// See discussion in https://github.com/kartena/Proj4Leaflet/pull/147
		proj4 = proj4.default;
	}
 
	L.Proj = {};

	L.Proj._isProj4Obj = function(a) {
		return (typeof a.inverse !== 'undefined' &&
			typeof a.forward !== 'undefined');
	};

	L.Proj.Projection = L.Class.extend({
		initialize: function(code, def, bounds) {
			var isP4 = L.Proj._isProj4Obj(code);
			this._proj = isP4 ? code : this._projFromCodeDef(code, def);
			this.bounds = isP4 ? def : bounds;
		},

		project: function (latlng) {
			var point = this._proj.forward([latlng.lng, latlng.lat]);
			return new L.Point(point[0], point[1]);
		},

		unproject: function (point, unbounded) {
			var point2 = this._proj.inverse([point.x, point.y]);
			return new L.LatLng(point2[1], point2[0], unbounded);
		},

		_projFromCodeDef: function(code, def) {
			if (def) {
				proj4.defs(code, def);
			} else if (proj4.defs[code] === undefined) {
				var urn = code.split(':');
				if (urn.length > 3) {
					code = urn[urn.length - 3] + ':' + urn[urn.length - 1];
				}
				if (proj4.defs[code] === undefined) {
					throw 'No projection definition for code ' + code;
				}
			}

			return proj4(code);
		}
	});

	L.Proj.CRS = L.Class.extend({
		includes: L.CRS,

		options: {
			transformation: new L.Transformation(1, 0, -1, 0)
		},

		initialize: function(a, b, c) {
			var code,
			    proj,
			    def,
			    options;

			if (L.Proj._isProj4Obj(a)) {
				proj = a;
				code = proj.srsCode;
				options = b || {};

				this.projection = new L.Proj.Projection(proj, options.bounds);
			} else {
				code = a;
				def = b;
				options = c || {};
				this.projection = new L.Proj.Projection(code, def, options.bounds);
			}

			L.Util.setOptions(this, options);
			this.code = code;
			this.transformation = this.options.transformation;

			if (this.options.origin) {
				this.transformation =
					new L.Transformation(1, -this.options.origin[0],
						-1, this.options.origin[1]);
			}

			if (this.options.scales) {
				this._scales = this.options.scales;
			} else if (this.options.resolutions) {
				this._scales = [];
				for (var i = this.options.resolutions.length - 1; i >= 0; i--) {
					if (this.options.resolutions[i]) {
						this._scales[i] = 1 / this.options.resolutions[i];
					}
				}
			}

			this.infinite = !this.options.bounds;

		},

		scale: function(zoom) {
			var iZoom = Math.floor(zoom),
				baseScale,
				nextScale,
				scaleDiff,
				zDiff;
			if (zoom === iZoom) {
				return this._scales[zoom];
			} else {
				// Non-integer zoom, interpolate
				baseScale = this._scales[iZoom];
				nextScale = this._scales[iZoom + 1];
				scaleDiff = nextScale - baseScale;
				zDiff = (zoom - iZoom);
				return baseScale + scaleDiff * zDiff;
			}
		},

		zoom: function(scale) {
			// Find closest number in this._scales, down
			var downScale = this._closestElement(this._scales, scale),
				downZoom = this._scales.indexOf(downScale),
				nextScale,
				nextZoom,
				scaleDiff;
			// Check if scale is downScale => return array index
			if (scale === downScale) {
				return downZoom;
			}
			if (downScale === undefined) {
				return -Infinity;
			}
			// Interpolate
			nextZoom = downZoom + 1;
			nextScale = this._scales[nextZoom];
			if (nextScale === undefined) {
				return Infinity;
			}
			scaleDiff = nextScale - downScale;
			return (scale - downScale) / scaleDiff + downZoom;
		},

		distance: L.CRS.Earth.distance,

		R: L.CRS.Earth.R,

		/* Get the closest lowest element in an array */
		_closestElement: function(array, element) {
			var low;
			for (var i = array.length; i--;) {
				if (array[i] <= element && (low === undefined || low < array[i])) {
					low = array[i];
				}
			}
			return low;
		}
	});

	L.Proj.GeoJSON = L.GeoJSON.extend({
		initialize: function(geojson, options) {
			this._callLevel = 0;
			L.GeoJSON.prototype.initialize.call(this, geojson, options);
		},

		addData: function(geojson) {
			var crs;

			if (geojson) {
				if (geojson.crs && geojson.crs.type === 'name') {
					crs = new L.Proj.CRS(geojson.crs.properties.name);
				} else if (geojson.crs && geojson.crs.type) {
					crs = new L.Proj.CRS(geojson.crs.type + ':' + geojson.crs.properties.code);
				}

				if (crs !== undefined) {
					this.options.coordsToLatLng = function(coords) {
						var point = L.point(coords[0], coords[1]);
						return crs.projection.unproject(point);
					};
				}
			}

			// Base class' addData might call us recursively, but
			// CRS shouldn't be cleared in that case, since CRS applies
			// to the whole GeoJSON, inluding sub-features.
			this._callLevel++;
			try {
				L.GeoJSON.prototype.addData.call(this, geojson);
			} finally {
				this._callLevel--;
				if (this._callLevel === 0) {
					delete this.options.coordsToLatLng;
				}
			}
		}
	});

	L.Proj.geoJson = function(geojson, options) {
		return new L.Proj.GeoJSON(geojson, options);
	};

	L.Proj.ImageOverlay = L.ImageOverlay.extend({
		initialize: function (url, bounds, options) {
			L.ImageOverlay.prototype.initialize.call(this, url, null, options);
			this._projectedBounds = bounds;
		},

		// Danger ahead: Overriding internal methods in Leaflet.
		// Decided to do this rather than making a copy of L.ImageOverlay
		// and doing very tiny modifications to it.
		// Future will tell if this was wise or not.
		_animateZoom: function (event) {
			var scale = this._map.getZoomScale(event.zoom);
			var northWest = L.point(this._projectedBounds.min.x, this._projectedBounds.max.y);
			var offset = this._projectedToNewLayerPoint(northWest, event.zoom, event.center);

			L.DomUtil.setTransform(this._image, offset, scale);
		},

		_reset: function () {
			var zoom = this._map.getZoom();
			var pixelOrigin = this._map.getPixelOrigin();
			var bounds = L.bounds(
				this._transform(this._projectedBounds.min, zoom)._subtract(pixelOrigin),
				this._transform(this._projectedBounds.max, zoom)._subtract(pixelOrigin)
			);
			var size = bounds.getSize();

			L.DomUtil.setPosition(this._image, bounds.min);
			this._image.style.width = size.x + 'px';
			this._image.style.height = size.y + 'px';
		},

		_projectedToNewLayerPoint: function (point, zoom, center) {
			var viewHalf = this._map.getSize()._divideBy(2);
			var newTopLeft = this._map.project(center, zoom)._subtract(viewHalf)._round();
			var topLeft = newTopLeft.add(this._map._getMapPanePos());

			return this._transform(point, zoom)._subtract(topLeft);
		},

		_transform: function (point, zoom) {
			var crs = this._map.options.crs;
			var transformation = crs.transformation;
			var scale = crs.scale(zoom);

			return transformation.transform(point, scale);
		}
	});

	L.Proj.imageOverlay = function (url, bounds, options) {
		return new L.Proj.ImageOverlay(url, bounds, options);
	};

	return L.Proj;
}));


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-title> MSEMA </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-card-header> <img src=\"assets/tab3/map.png\" height=\"30\"> WEATHER ALERTS</ion-card-header>\n\n  <ion-grid style=\"height: 85%; padding: 0;\">\n\n    <ion-row style=\"height: 70%;\">\n      <ion-col style=\"padding: 0;\">\n        <div \n          id=\"map\"\n          leaflet\n          [leafletOptions]=\"mapOptions\"\n          (leafletMapReady)=\"onMapReady($event)\"\n        ></div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"height: 30%;\">\n      <ion-col style=\"height: 100%;\" class=\"ion-no-padding\">\n\n        <ion-row style=\"height: 100%;\" [hidden]=\"workingAlertArea\">\n          <ion-col style=\"height: 100%;\" class=\"ion-no-padding\">\n            <ion-row>\n              <ion-col><ion-label>Select a city...</ion-label></ion-col>\n            </ion-row>\n            <ion-row style=\"height: 100%; overflow: auto;\">\n              <ion-col class=\"ion-no-padding\">\n                <ion-list>\n                  <div *ngFor=\"let city of cityPoints | keyvalue\">\n                    <ion-item (click)=\"cityOnClickHandler(city.key, $event)\">\n                      <ion-row>\n                        <ion-col>\n                          <ion-label>{{city.key}}</ion-label>\n                        </ion-col>\n                        <ion-col>\n                          <ion-label style=\"color: #539cf6\">\n                            <b>{{city.value.alertArea? city.value.alertArea.alertRadius + ' miles' : ''}}</b>\n                          </ion-label>\n                        </ion-col>\n                        <ion-col>\n                          <ion-label [hidden]=\"!city.value.weatherAlerts\">\n                            <ion-icon name=\"radio-outline\" size=\"small\" style=\"color: rgb(230, 67, 67);\"></ion-icon>\n                          </ion-label>\n                        </ion-col>\n                      </ion-row>\n                    </ion-item>\n                  </div>\n                </ion-list>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n\n        <ion-row [hidden]=\"!workingAlertArea\">\n          <ion-col>\n            <ion-label>City: </ion-label>\n            <ion-label style=\"color: #539cf6\"> \n              <b>{{workingAlertArea? workingAlertArea.city : ''}}</b>\n            </ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label>Radius: </ion-label>\n            <ion-label [hidden]=\"!workingAlertArea\" style=\"color: #539cf6\">\n              <b>{{workingAlertArea? workingAlertArea.alertRadius + ' miles' : ''}}</b>\n            </ion-label>\n          </ion-col>\n        </ion-row>\n\n        <ion-row [hidden]=\"!workingAlertArea\" style=\"height:100%; overflow: auto;\">\n          <ion-col>\n            <ion-row>\n              <ion-col>\n                <ion-range\n                  #alertRange\n                  min=\"1\"\n                  [max]=\"maxAlertRange\"\n                  step=\"1\"\n                  snaps=\"true\"\n                  pin=\"true\"\n                  (ionChange)=\"alertRangeChange($event)\"\n                  style=\"padding: 0;\"\n                >\n                  <ion-label slot=\"start\">1</ion-label>\n                  <ion-label slot=\"end\">{{maxAlertRange}} miles</ion-label>\n                </ion-range>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-button expand=\"block\" fill=\"solid\" color=\"light\" (click)=\"cancelAlertArea()\">Cancel</ion-button>\n              </ion-col>\n              <ion-col>\n                <ion-button expand=\"block\" fill=\"solid\" (click)=\"saveAlertArea()\">Save</ion-button>\n              </ion-col>\n            </ion-row>\n            <ion-row [hidden]=\"workingAlertArea? !cityPoints[workingAlertArea.city].alertArea : true\">\n              <ion-col>\n                <ion-button expand=\"block\" fill=\"solid\" color=\"danger\" (click)=\"deleteAlertArea()\">Delete</ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/tiny-binary-search/index.js":
/*!**************************************************!*\
  !*** ./node_modules/tiny-binary-search/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function BinarySearchIndex (values) {
  this.values = [].concat(values || []);
}

BinarySearchIndex.prototype.query = function (value) {
  var index = this.getIndex(value);
  return this.values[index];
};

BinarySearchIndex.prototype.getIndex = function getIndex (value) {
  if (this.dirty) {
    this.sort();
  }

  var minIndex = 0;
  var maxIndex = this.values.length - 1;
  var currentIndex;
  var currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = (minIndex + maxIndex) / 2 | 0;
    currentElement = this.values[Math.round(currentIndex)];
    if (+currentElement.value < +value) {
      minIndex = currentIndex + 1;
    } else if (+currentElement.value > +value) {
      maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }

  return Math.abs(~maxIndex);
};

BinarySearchIndex.prototype.between = function between (start, end) {
  var startIndex = this.getIndex(start);
  var endIndex = this.getIndex(end);

  if (startIndex === 0 && endIndex === 0) {
    return [];
  }

  while (this.values[startIndex - 1] && this.values[startIndex - 1].value === start) {
    startIndex--;
  }

  while (this.values[endIndex + 1] && this.values[endIndex + 1].value === end) {
    endIndex++;
  }

  if (this.values[endIndex] && this.values[endIndex].value === end && this.values[endIndex + 1]) {
    endIndex++;
  }

  return this.values.slice(startIndex, endIndex);
};

BinarySearchIndex.prototype.insert = function insert (item) {
  this.values.splice(this.getIndex(item.value), 0, item);
  return this;
};

BinarySearchIndex.prototype.bulkAdd = function bulkAdd (items, sort) {
  this.values = this.values.concat([].concat(items || []));

  if (sort) {
    this.sort();
  } else {
    this.dirty = true;
  }

  return this;
};

BinarySearchIndex.prototype.sort = function sort () {
  this.values.sort(function (a, b) {
    return +b.value - +a.value;
  }).reverse();
  this.dirty = false;
  return this;
};

/* harmony default export */ __webpack_exports__["default"] = (BinarySearchIndex);


/***/ }),

/***/ "./node_modules/wkt-parser/index.js":
/*!******************************************!*\
  !*** ./node_modules/wkt-parser/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parser */ "./node_modules/wkt-parser/parser.js");
/* harmony import */ var _process__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./process */ "./node_modules/wkt-parser/process.js");
var D2R = 0.01745329251994329577;





function rename(obj, params) {
  var outName = params[0];
  var inName = params[1];
  if (!(outName in obj) && (inName in obj)) {
    obj[outName] = obj[inName];
    if (params.length === 3) {
      obj[outName] = params[2](obj[outName]);
    }
  }
}

function d2r(input) {
  return input * D2R;
}

function cleanWKT(wkt) {
  if (wkt.type === 'GEOGCS') {
    wkt.projName = 'longlat';
  } else if (wkt.type === 'LOCAL_CS') {
    wkt.projName = 'identity';
    wkt.local = true;
  } else {
    if (typeof wkt.PROJECTION === 'object') {
      wkt.projName = Object.keys(wkt.PROJECTION)[0];
    } else {
      wkt.projName = wkt.PROJECTION;
    }
  }
  if (wkt.AXIS) {
    var axisOrder = '';
    for (var i = 0, ii = wkt.AXIS.length; i < ii; ++i) {
      var axis = [wkt.AXIS[i][0].toLowerCase(), wkt.AXIS[i][1].toLowerCase()];
      if (axis[0].indexOf('north') !== -1 || ((axis[0] === 'y' || axis[0] === 'lat') && axis[1] === 'north')) {
        axisOrder += 'n';
      } else if (axis[0].indexOf('south') !== -1 || ((axis[0] === 'y' || axis[0] === 'lat') && axis[1] === 'south')) {
        axisOrder += 's';
      } else if (axis[0].indexOf('east') !== -1 || ((axis[0] === 'x' || axis[0] === 'lon') && axis[1] === 'east')) {
        axisOrder += 'e';
      } else if (axis[0].indexOf('west') !== -1 || ((axis[0] === 'x' || axis[0] === 'lon') && axis[1] === 'west')) {
        axisOrder += 'w';
      }
    }
    if (axisOrder.length === 2) {
      axisOrder += 'u';
    }
    if (axisOrder.length === 3) {
      wkt.axis = axisOrder;
    }
  }
  if (wkt.UNIT) {
    wkt.units = wkt.UNIT.name.toLowerCase();
    if (wkt.units === 'metre') {
      wkt.units = 'meter';
    }
    if (wkt.UNIT.convert) {
      if (wkt.type === 'GEOGCS') {
        if (wkt.DATUM && wkt.DATUM.SPHEROID) {
          wkt.to_meter = wkt.UNIT.convert*wkt.DATUM.SPHEROID.a;
        }
      } else {
        wkt.to_meter = wkt.UNIT.convert;
      }
    }
  }
  var geogcs = wkt.GEOGCS;
  if (wkt.type === 'GEOGCS') {
    geogcs = wkt;
  }
  if (geogcs) {
    //if(wkt.GEOGCS.PRIMEM&&wkt.GEOGCS.PRIMEM.convert){
    //  wkt.from_greenwich=wkt.GEOGCS.PRIMEM.convert*D2R;
    //}
    if (geogcs.DATUM) {
      wkt.datumCode = geogcs.DATUM.name.toLowerCase();
    } else {
      wkt.datumCode = geogcs.name.toLowerCase();
    }
    if (wkt.datumCode.slice(0, 2) === 'd_') {
      wkt.datumCode = wkt.datumCode.slice(2);
    }
    if (wkt.datumCode === 'new_zealand_geodetic_datum_1949' || wkt.datumCode === 'new_zealand_1949') {
      wkt.datumCode = 'nzgd49';
    }
    if (wkt.datumCode === 'wgs_1984' || wkt.datumCode === 'world_geodetic_system_1984') {
      if (wkt.PROJECTION === 'Mercator_Auxiliary_Sphere') {
        wkt.sphere = true;
      }
      wkt.datumCode = 'wgs84';
    }
    if (wkt.datumCode.slice(-6) === '_ferro') {
      wkt.datumCode = wkt.datumCode.slice(0, - 6);
    }
    if (wkt.datumCode.slice(-8) === '_jakarta') {
      wkt.datumCode = wkt.datumCode.slice(0, - 8);
    }
    if (~wkt.datumCode.indexOf('belge')) {
      wkt.datumCode = 'rnb72';
    }
    if (geogcs.DATUM && geogcs.DATUM.SPHEROID) {
      wkt.ellps = geogcs.DATUM.SPHEROID.name.replace('_19', '').replace(/[Cc]larke\_18/, 'clrk');
      if (wkt.ellps.toLowerCase().slice(0, 13) === 'international') {
        wkt.ellps = 'intl';
      }

      wkt.a = geogcs.DATUM.SPHEROID.a;
      wkt.rf = parseFloat(geogcs.DATUM.SPHEROID.rf, 10);
    }

    if (geogcs.DATUM && geogcs.DATUM.TOWGS84) {
      wkt.datum_params = geogcs.DATUM.TOWGS84;
    }
    if (~wkt.datumCode.indexOf('osgb_1936')) {
      wkt.datumCode = 'osgb36';
    }
    if (~wkt.datumCode.indexOf('osni_1952')) {
      wkt.datumCode = 'osni52';
    }
    if (~wkt.datumCode.indexOf('tm65')
      || ~wkt.datumCode.indexOf('geodetic_datum_of_1965')) {
      wkt.datumCode = 'ire65';
    }
    if (wkt.datumCode === 'ch1903+') {
      wkt.datumCode = 'ch1903';
    }
    if (~wkt.datumCode.indexOf('israel')) {
      wkt.datumCode = 'isr93';
    }
  }
  if (wkt.b && !isFinite(wkt.b)) {
    wkt.b = wkt.a;
  }

  function toMeter(input) {
    var ratio = wkt.to_meter || 1;
    return input * ratio;
  }
  var renamer = function(a) {
    return rename(wkt, a);
  };
  var list = [
    ['standard_parallel_1', 'Standard_Parallel_1'],
    ['standard_parallel_1', 'Latitude of 1st standard parallel'],
    ['standard_parallel_2', 'Standard_Parallel_2'],
    ['standard_parallel_2', 'Latitude of 2nd standard parallel'],
    ['false_easting', 'False_Easting'],
    ['false_easting', 'False easting'],
    ['false-easting', 'Easting at false origin'],
    ['false_northing', 'False_Northing'],
    ['false_northing', 'False northing'],
    ['false_northing', 'Northing at false origin'],
    ['central_meridian', 'Central_Meridian'],
    ['central_meridian', 'Longitude of natural origin'],
    ['central_meridian', 'Longitude of false origin'],
    ['latitude_of_origin', 'Latitude_Of_Origin'],
    ['latitude_of_origin', 'Central_Parallel'],
    ['latitude_of_origin', 'Latitude of natural origin'],
    ['latitude_of_origin', 'Latitude of false origin'],
    ['scale_factor', 'Scale_Factor'],
    ['k0', 'scale_factor'],
    ['latitude_of_center', 'Latitude_Of_Center'],
    ['latitude_of_center', 'Latitude_of_center'],
    ['lat0', 'latitude_of_center', d2r],
    ['longitude_of_center', 'Longitude_Of_Center'],
    ['longitude_of_center', 'Longitude_of_center'],
    ['longc', 'longitude_of_center', d2r],
    ['x0', 'false_easting', toMeter],
    ['y0', 'false_northing', toMeter],
    ['long0', 'central_meridian', d2r],
    ['lat0', 'latitude_of_origin', d2r],
    ['lat0', 'standard_parallel_1', d2r],
    ['lat1', 'standard_parallel_1', d2r],
    ['lat2', 'standard_parallel_2', d2r],
    ['azimuth', 'Azimuth'],
    ['alpha', 'azimuth', d2r],
    ['srsCode', 'name']
  ];
  list.forEach(renamer);
  if (!wkt.long0 && wkt.longc && (wkt.projName === 'Albers_Conic_Equal_Area' || wkt.projName === 'Lambert_Azimuthal_Equal_Area')) {
    wkt.long0 = wkt.longc;
  }
  if (!wkt.lat_ts && wkt.lat1 && (wkt.projName === 'Stereographic_South_Pole' || wkt.projName === 'Polar Stereographic (variant B)')) {
    wkt.lat0 = d2r(wkt.lat1 > 0 ? 90 : -90);
    wkt.lat_ts = wkt.lat1;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (function(wkt) {
  var lisp = Object(_parser__WEBPACK_IMPORTED_MODULE_0__["default"])(wkt);
  var type = lisp.shift();
  var name = lisp.shift();
  lisp.unshift(['name', name]);
  lisp.unshift(['type', type]);
  var obj = {};
  Object(_process__WEBPACK_IMPORTED_MODULE_1__["sExpr"])(lisp, obj);
  cleanWKT(obj);
  return obj;
});


/***/ }),

/***/ "./node_modules/wkt-parser/parser.js":
/*!*******************************************!*\
  !*** ./node_modules/wkt-parser/parser.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (parseString);

var NEUTRAL = 1;
var KEYWORD = 2;
var NUMBER = 3;
var QUOTED = 4;
var AFTERQUOTE = 5;
var ENDED = -1;
var whitespace = /\s/;
var latin = /[A-Za-z]/;
var keyword = /[A-Za-z84]/;
var endThings = /[,\]]/;
var digets = /[\d\.E\-\+]/;
// const ignoredChar = /[\s_\-\/\(\)]/g;
function Parser(text) {
  if (typeof text !== 'string') {
    throw new Error('not a string');
  }
  this.text = text.trim();
  this.level = 0;
  this.place = 0;
  this.root = null;
  this.stack = [];
  this.currentObject = null;
  this.state = NEUTRAL;
}
Parser.prototype.readCharicter = function() {
  var char = this.text[this.place++];
  if (this.state !== QUOTED) {
    while (whitespace.test(char)) {
      if (this.place >= this.text.length) {
        return;
      }
      char = this.text[this.place++];
    }
  }
  switch (this.state) {
    case NEUTRAL:
      return this.neutral(char);
    case KEYWORD:
      return this.keyword(char)
    case QUOTED:
      return this.quoted(char);
    case AFTERQUOTE:
      return this.afterquote(char);
    case NUMBER:
      return this.number(char);
    case ENDED:
      return;
  }
};
Parser.prototype.afterquote = function(char) {
  if (char === '"') {
    this.word += '"';
    this.state = QUOTED;
    return;
  }
  if (endThings.test(char)) {
    this.word = this.word.trim();
    this.afterItem(char);
    return;
  }
  throw new Error('havn\'t handled "' +char + '" in afterquote yet, index ' + this.place);
};
Parser.prototype.afterItem = function(char) {
  if (char === ',') {
    if (this.word !== null) {
      this.currentObject.push(this.word);
    }
    this.word = null;
    this.state = NEUTRAL;
    return;
  }
  if (char === ']') {
    this.level--;
    if (this.word !== null) {
      this.currentObject.push(this.word);
      this.word = null;
    }
    this.state = NEUTRAL;
    this.currentObject = this.stack.pop();
    if (!this.currentObject) {
      this.state = ENDED;
    }

    return;
  }
};
Parser.prototype.number = function(char) {
  if (digets.test(char)) {
    this.word += char;
    return;
  }
  if (endThings.test(char)) {
    this.word = parseFloat(this.word);
    this.afterItem(char);
    return;
  }
  throw new Error('havn\'t handled "' +char + '" in number yet, index ' + this.place);
};
Parser.prototype.quoted = function(char) {
  if (char === '"') {
    this.state = AFTERQUOTE;
    return;
  }
  this.word += char;
  return;
};
Parser.prototype.keyword = function(char) {
  if (keyword.test(char)) {
    this.word += char;
    return;
  }
  if (char === '[') {
    var newObjects = [];
    newObjects.push(this.word);
    this.level++;
    if (this.root === null) {
      this.root = newObjects;
    } else {
      this.currentObject.push(newObjects);
    }
    this.stack.push(this.currentObject);
    this.currentObject = newObjects;
    this.state = NEUTRAL;
    return;
  }
  if (endThings.test(char)) {
    this.afterItem(char);
    return;
  }
  throw new Error('havn\'t handled "' +char + '" in keyword yet, index ' + this.place);
};
Parser.prototype.neutral = function(char) {
  if (latin.test(char)) {
    this.word = char;
    this.state = KEYWORD;
    return;
  }
  if (char === '"') {
    this.word = '';
    this.state = QUOTED;
    return;
  }
  if (digets.test(char)) {
    this.word = char;
    this.state = NUMBER;
    return;
  }
  if (endThings.test(char)) {
    this.afterItem(char);
    return;
  }
  throw new Error('havn\'t handled "' +char + '" in neutral yet, index ' + this.place);
};
Parser.prototype.output = function() {
  while (this.place < this.text.length) {
    this.readCharicter();
  }
  if (this.state === ENDED) {
    return this.root;
  }
  throw new Error('unable to parse string "' +this.text + '". State is ' + this.state);
};

function parseString(txt) {
  var parser = new Parser(txt);
  return parser.output();
}


/***/ }),

/***/ "./node_modules/wkt-parser/process.js":
/*!********************************************!*\
  !*** ./node_modules/wkt-parser/process.js ***!
  \********************************************/
/*! exports provided: sExpr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sExpr", function() { return sExpr; });


function mapit(obj, key, value) {
  if (Array.isArray(key)) {
    value.unshift(key);
    key = null;
  }
  var thing = key ? {} : obj;

  var out = value.reduce(function(newObj, item) {
    sExpr(item, newObj);
    return newObj
  }, thing);
  if (key) {
    obj[key] = out;
  }
}

function sExpr(v, obj) {
  if (!Array.isArray(v)) {
    obj[v] = true;
    return;
  }
  var key = v.shift();
  if (key === 'PARAMETER') {
    key = v.shift();
  }
  if (v.length === 1) {
    if (Array.isArray(v[0])) {
      obj[key] = {};
      sExpr(v[0], obj[key]);
      return;
    }
    obj[key] = v[0];
    return;
  }
  if (!v.length) {
    obj[key] = true;
    return;
  }
  if (key === 'TOWGS84') {
    obj[key] = v;
    return;
  }
  if (key === 'AXIS') {
    if (!(key in obj)) {
      obj[key] = [];
    }
    obj[key].push(v);
    return;
  }
  if (!Array.isArray(key)) {
    obj[key] = {};
  }

  var i;
  switch (key) {
    case 'UNIT':
    case 'PRIMEM':
    case 'VERT_DATUM':
      obj[key] = {
        name: v[0].toLowerCase(),
        convert: v[1]
      };
      if (v.length === 3) {
        sExpr(v[2], obj[key]);
      }
      return;
    case 'SPHEROID':
    case 'ELLIPSOID':
      obj[key] = {
        name: v[0],
        a: v[1],
        rf: v[2]
      };
      if (v.length === 4) {
        sExpr(v[3], obj[key]);
      }
      return;
    case 'PROJECTEDCRS':
    case 'PROJCRS':
    case 'GEOGCS':
    case 'GEOCCS':
    case 'PROJCS':
    case 'LOCAL_CS':
    case 'GEODCRS':
    case 'GEODETICCRS':
    case 'GEODETICDATUM':
    case 'EDATUM':
    case 'ENGINEERINGDATUM':
    case 'VERT_CS':
    case 'VERTCRS':
    case 'VERTICALCRS':
    case 'COMPD_CS':
    case 'COMPOUNDCRS':
    case 'ENGINEERINGCRS':
    case 'ENGCRS':
    case 'FITTED_CS':
    case 'LOCAL_DATUM':
    case 'DATUM':
      v[0] = ['name', v[0]];
      mapit(obj, key, v);
      return;
    default:
      i = -1;
      while (++i < v.length) {
        if (!Array.isArray(v[i])) {
          return sExpr(v, obj[key]);
        }
      }
      return mapit(obj, key, v);
  }
}


/***/ }),

/***/ "./src/app/tab3/tab3-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function() { return Tab3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"],
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/__ivy_ngcc__/dist/index.js");
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tab3-routing.module */ "./src/app/tab3/tab3-routing.module.ts");











let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_9__["LeafletModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_10__["Tab3PageRoutingModule"],
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".App {\n  height: 480px;\n  padding: 10rem;\n}\n\n.leaflet-container {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkFwcCB7XG4gIGhlaWdodDogNDgwcHg7XG4gIHBhZGRpbmc6IDEwcmVtO1xufVxuXG4ubGVhZmxldC1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var esri_leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! esri-leaflet */ "./node_modules/esri-leaflet/src/EsriLeaflet.js");
/* harmony import */ var _geoman_io_leaflet_geoman_free__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @geoman-io/leaflet-geoman-free */ "./node_modules/@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.min.js");
/* harmony import */ var _geoman_io_leaflet_geoman_free__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_geoman_io_leaflet_geoman_free__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet/dist/images/marker-shadow.png */ "./node_modules/leaflet/dist/images/marker-shadow.png");
/* harmony import */ var leaflet_dist_images_marker_icon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! leaflet/dist/images/marker-icon.png */ "./node_modules/leaflet/dist/images/marker-icon.png");
/* harmony import */ var proj4leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! proj4leaflet */ "./node_modules/proj4leaflet/src/proj4leaflet.js");
/* harmony import */ var proj4leaflet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(proj4leaflet__WEBPACK_IMPORTED_MODULE_7__);


// import * as Leaflet from 'leaflet';






let Tab3Page = class Tab3Page {
    constructor(cRef) {
        this.cRef = cRef;
        this.mapOptions = LMapOptions;
        this.maxAlertRange = 400; // Miles
        this.cityPoints = {};
        this.workingAlertArea = null;
        this.NWSFL = new esri_leaflet__WEBPACK_IMPORTED_MODULE_3__["FeatureLayer"]({ url: WeatherServiceUrl });
    }
    ngOnInit() { }
    ngAfterViewInit() { }
    onMapReady(map) {
        this.map = map;
        this.NWSFL.addTo(this.map);
        this.NWSFL.setWhere('0=1');
        this.NWSFL.setStyle({ color: 'red', weight: 1 });
        this.NWSFL.bindPopup(WeatherAlertPopup);
        this.getLocationService().then(resp => {
            this.map.setView(leaflet__WEBPACK_IMPORTED_MODULE_2__["latLng"](resp.lat, resp.lng), 8);
        });
        this.setCityPoints();
        setInterval(this.checkForWeatherAlerts.bind(this, this.updateMapWeatherAlerts.bind(this)), 10000);
    }
    /**
     * Returns a promise that resolves with the user's current lat, long
     */
    getLocationService() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resp => {
                resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
            });
        });
    }
    /**
     * Queries NWS FeatureLayer for alert geometries that intersect each user
     * defined alert detection area and populates each city point with their OBJECTIDs.
     * @param {function?} done function to run when done
     * @returns void
     */
    checkForWeatherAlerts(done = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let cities = Object.values(this.cityPoints).filter(point => (point.alertArea));
            let NWSQueries = [];
            cities.forEach(city => {
                NWSQueries.push(new Promise((resolve, reject) => {
                    this.NWSFL.query().intersects(city.alertArea.polygon).ids((error, ids) => {
                        if (error) {
                            console.log('Error with query: ' + error);
                        }
                        else if (ids) {
                            city.weatherAlerts = ids;
                        }
                        resolve(null);
                    });
                }));
            });
            Promise.all(NWSQueries).then(done === null || done === void 0 ? void 0 : done.bind(this));
        });
    }
    /**
     * Displays weather alerts on map.
     * Updates where clause of NWS FeatureLayer to OBJECTIDs of all unique weather
     * alerts intersecting user defined detection areas.
     * @returns void
     */
    updateMapWeatherAlerts() {
        let citiesWithAlerts = Object.values(this.cityPoints).filter(city => (city.weatherAlerts));
        if (citiesWithAlerts.length == 0) {
            this.NWSFL.setWhere('0=1');
            return;
        }
        let alertObjectIds = [];
        citiesWithAlerts.forEach(city => {
            let alerts = [...alertObjectIds, ...city.weatherAlerts];
            alertObjectIds = [...new Set(alerts)]; // only unique ids
        });
        this.NWSFL.setWhere('OBJECTID in (' + alertObjectIds.join(',') + ')');
    }
    /**
     * Place selectable city markers on the map.
     */
    setCityPoints() {
        Object.entries(MSCityNames).forEach(city => {
            let [cityName, cityLatLng] = city;
            let cityIcon = new leaflet__WEBPACK_IMPORTED_MODULE_2__["Icon"]({
                iconUrl: 'marker-icon.png',
                iconSize: [18, 30],
                iconAnchor: [10, 30]
            });
            let popup = leaflet__WEBPACK_IMPORTED_MODULE_2__["popup"]({ offset: [0, -20] }).setContent(cityName);
            this.cityPoints[cityName] = {
                marker: leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"]([cityLatLng[0], cityLatLng[1]], {
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
    cityOnClickHandler(cityName, e) {
        if (this.workingAlertArea)
            return;
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
    alertRangeChange(e) {
        this.updateWorkingAlert(this.workingAlertArea.city, e.target.value);
    }
    /**
     * Updates the alert area that is currently being created/edited.
     * @param {string} cityName name of city
     * @param {number} radiusMiles radius in miles
     */
    updateWorkingAlert(cityName, radiusMiles) {
        let radiusMeters = radiusMiles * 1609.34; // convert to meters
        if (!this.workingAlertArea) {
            let latLng = new leaflet__WEBPACK_IMPORTED_MODULE_2__["LatLng"](MSCityNames[cityName][0], MSCityNames[cityName][1]);
            this.workingAlertArea = {
                city: cityName,
                latlng: latLng,
                alertRadius: radiusMiles,
                circle: leaflet__WEBPACK_IMPORTED_MODULE_2__["circle"](latLng, {
                    radius: radiusMeters,
                    opacity: 0.7,
                    weight: 2
                }).addTo(this.map)
            };
            this.workingAlertArea.circle.on('click', this.cityOnClickHandler.bind(this, cityName));
        }
        else {
            this.workingAlertArea.alertRadius = radiusMiles;
            this.workingAlertArea.circle.setRadius(radiusMeters);
        }
        this.map.fitBounds(this.workingAlertArea.circle.getBounds());
        this.cRef.detectChanges();
    }
    /**
     * Handles cancelling of edits to or creation of an alert area.
     */
    cancelAlertArea() {
        if (!this.cityPoints[this.workingAlertArea.city].alertArea) {
            this.workingAlertArea.circle.remove();
        }
        this.workingAlertArea = null;
    }
    /**
     * Save working alert area to its corresponding city, converts circle area to
     * a polygon (to use for querying NWS FeatureLayer) and immediately checks
     * for weather alerts interecting the new area.
     */
    saveAlertArea() {
        this.cityPoints[this.workingAlertArea.city].alertArea = this.workingAlertArea;
        let polygon = leaflet__WEBPACK_IMPORTED_MODULE_2__["PM"].Utils.circleToPolygon(this.workingAlertArea.circle);
        this.cityPoints[this.workingAlertArea.city].alertArea.polygon = polygon;
        this.checkForWeatherAlerts(this.updateMapWeatherAlerts);
        this.workingAlertArea = null;
    }
    /**
     * Handles deletion of an alert area.
     */
    deleteAlertArea() {
        this.cityPoints[this.workingAlertArea.city].alertArea.circle.remove();
        this.cityPoints[this.workingAlertArea.city].alertArea = null;
        this.cityPoints[this.workingAlertArea.city].weatherAlerts = null;
        this.checkForWeatherAlerts(this.updateMapWeatherAlerts);
        this.workingAlertArea = null;
    }
};
Tab3Page.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
Tab3Page.propDecorators = {
    alertRangeEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['alertRange',] }]
};
Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")).default]
    })
], Tab3Page);

const LMapOptions = {
    layers: [
        leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"]('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: 'Map data © OpenStreetMap contributors'
        })
    ],
    zoom: 18
};
const MSCityNames = {
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
};
const WeatherServiceUrl = 'https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/watch_warn_adv/MapServer/1';
const WeatherAlertPopup = function (layer) {
    let formattedProps = {
        event: layer.feature.properties.event,
        prod_type: layer.feature.properties.prod_type,
        start: new Date(layer.feature.properties.issuance).toLocaleString(),
        end: new Date(layer.feature.properties.expiration).toLocaleString(),
        url: layer.feature.properties.url
    };
    return leaflet__WEBPACK_IMPORTED_MODULE_2__["Util"].template(`<table>
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
    </table>`, formattedProps);
};


/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es2015.js.map