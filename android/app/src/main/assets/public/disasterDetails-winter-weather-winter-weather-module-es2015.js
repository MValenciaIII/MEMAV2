(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["disasterDetails-winter-weather-winter-weather-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/disasterDetails/winter-weather/winter-weather.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/disasterDetails/winter-weather/winter-weather.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"false\">\n  <ion-toolbar id=\"toolbarColor\">\n    <ion-row>\n      <ion-col>\n          <ion-nav-link style=\"color: white;\" [routerLink]=\"['/disaster']\">BACK</ion-nav-link>\n      </ion-col>\n  </ion-row>\n      <ion-title style=\"font-size: 40px; font-weight: bolder; color: #fff;\">  <img src=\"assets/mema-seal.png\" height=\"35\"> MEMA</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col>\n      <ion-card-header class=\"disasterHeader\" style=\"text-align: center;\">WINTER WEATHER SAFETY </ion-card-header>\n      <div class=\"line\"></div>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row>\n    <ion-col>\n      <ion-item >\n        <ion-text>Preparing Your Home:<br />\n          <ion-text>\n            <ul>\n              <li>Prepare for possible isolation in your home by having sufficient heating fuel; regular fuel sources may be cut off. For example, store a good supply of dry, seasoned wood for your fireplace or wood-burning stove.</li>\n              <li>Insulate walls and attics, caulk and weather-strip doors and windows and install storm windows or covering windows with plastic.</li>\n              <ul>\n                <li>Clear rain gutters, repair roof leaks and cut away tree branches that could fall on a house </li>\n              </ul>\n              <li>Insulate pipes with insulation or newspapers and plastic and allow faucets to drip </li>\n              <li>Keep fire extinguishers on hand, and make sure everyone in your house knows how to use them.</li>\n              <li>Learn how to shut off water valves, in the case of a pipe bursting.</li>\n            </ul>\n          </ion-text>\n        </ion-text>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  \n  <ion-row>\n    <ion-col>\n      <ion-card-header class=\"\" style=\"text-align: center;\">Prepare Your Car: </ion-card-header>\n      <div class=\"line\"></div>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row>\n    <ion-col>\n\n      <ion-item>\n        <ion-text>Check the Following Items on Your Car: <br />\n          <ion-text>\n            <li>Antifreeze levels - ensure they are sufficient to avoid freezing</li>\n            <li>Battery and ignition system – they should be in top condition and battery terminals should be clean</li>\n            <li>Brakes - check for wear and fluid levels</li>\n            <li>Heater and defroster - ensure they are working properly</li>\n            <li>Lights and flashing hazard lights - ensure they are working properly</li>\n            <li>Gas tank - maintain at least a half tank of gas during the winter season</li>\n          </ion-text>\n  \n        </ion-text>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <ion-item >\n        <ion-text>Winter Weather Car Kit: <br />\n          <ion-text>\n            <li>Windshield scraper</li>\n            <li>Flashlight with extra batteries</li>\n            <li>Jumper cables</li>\n            <li>Blankets</li>\n            <li>Cell phone chargers</li>\n            <li>Water/snacks</li>\n            <li>Emergency flares or reflectors</li>\n          </ion-text>\n  \n        </ion-text>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <ion-item >\n        <ion-text>Tips for Driving in Winter Weather: <br />\n          <ion-text>\n            <li>Slow Down</li>\n            <li>Allow more space between the vehicles</li>\n            <li>Brake early and gently</li>\n            <li>Never slam on the brakes</li>\n            <li>Ditch Distractions</li>\n            <li>Stay Alert</li>\n          </ion-text>\n  \n        </ion-text>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/disasterDetails/winter-weather/winter-weather-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/disasterDetails/winter-weather/winter-weather-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: WinterWeatherPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinterWeatherPageRoutingModule", function() { return WinterWeatherPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _winter_weather_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./winter-weather.page */ "./src/app/disasterDetails/winter-weather/winter-weather.page.ts");




const routes = [
    {
        path: '',
        component: _winter_weather_page__WEBPACK_IMPORTED_MODULE_3__["WinterWeatherPage"]
    }
];
let WinterWeatherPageRoutingModule = class WinterWeatherPageRoutingModule {
};
WinterWeatherPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WinterWeatherPageRoutingModule);



/***/ }),

/***/ "./src/app/disasterDetails/winter-weather/winter-weather.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/disasterDetails/winter-weather/winter-weather.module.ts ***!
  \*************************************************************************/
/*! exports provided: WinterWeatherPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinterWeatherPageModule", function() { return WinterWeatherPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _winter_weather_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./winter-weather-routing.module */ "./src/app/disasterDetails/winter-weather/winter-weather-routing.module.ts");
/* harmony import */ var _winter_weather_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./winter-weather.page */ "./src/app/disasterDetails/winter-weather/winter-weather.page.ts");







let WinterWeatherPageModule = class WinterWeatherPageModule {
};
WinterWeatherPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _winter_weather_routing_module__WEBPACK_IMPORTED_MODULE_5__["WinterWeatherPageRoutingModule"]
        ],
        declarations: [_winter_weather_page__WEBPACK_IMPORTED_MODULE_6__["WinterWeatherPage"]]
    })
], WinterWeatherPageModule);



/***/ }),

/***/ "./src/app/disasterDetails/winter-weather/winter-weather.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/disasterDetails/winter-weather/winter-weather.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content-with-full-height {\n  --background:white ;\n}\n\n.disasterHeader {\n  font-size: 30px;\n  font-weight: bold;\n  color: #061e3d;\n}\n\n.line {\n  border-top: solid #061e3d 10px;\n  width: 120%;\n  margin-left: -10%;\n}\n\nli {\n  margin: 20px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzYXN0ZXJEZXRhaWxzL3dpbnRlci13ZWF0aGVyL3dpbnRlci13ZWF0aGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJLG1CQUFBO0FBREo7O0FBS0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBRko7O0FBS0E7RUFDSSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUZKOztBQUtBO0VBQ0ksY0FBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvZGlzYXN0ZXJEZXRhaWxzL3dpbnRlci13ZWF0aGVyL3dpbnRlci13ZWF0aGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LXdpdGgtZnVsbC1oZWlnaHR7XG4gICAgLy8gaGVpZ2h0OiAxMDAlO1xuICAgIC8vbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAtLWJhY2tncm91bmQ6d2hpdGUgO1xuXG4gIH1cblxuLmRpc2FzdGVySGVhZGVyIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICMwNjFlM2Q7XG59XG5cbi5saW5lIHtcbiAgICBib3JkZXItdG9wOnNvbGlkICMwNjFlM2QgMTBweDtcbiAgICB3aWR0aDogMTIwJTtcbiAgICBtYXJnaW4tbGVmdDogLTEwJTtcbiAgfVxuICBcbmxpIHtcbiAgICBtYXJnaW46IDIwcHggMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/disasterDetails/winter-weather/winter-weather.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/disasterDetails/winter-weather/winter-weather.page.ts ***!
  \***********************************************************************/
/*! exports provided: WinterWeatherPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinterWeatherPage", function() { return WinterWeatherPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let WinterWeatherPage = class WinterWeatherPage {
    constructor() { }
    ngOnInit() {
    }
};
WinterWeatherPage.ctorParameters = () => [];
WinterWeatherPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-winter-weather',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./winter-weather.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/disasterDetails/winter-weather/winter-weather.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./winter-weather.page.scss */ "./src/app/disasterDetails/winter-weather/winter-weather.page.scss")).default]
    })
], WinterWeatherPage);



/***/ })

}]);
//# sourceMappingURL=disasterDetails-winter-weather-winter-weather-module-es2015.js.map