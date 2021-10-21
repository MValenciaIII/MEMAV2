(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["disasterDetails-winter-weather-winter-weather-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/disasterDetails/winter-weather/winter-weather.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/disasterDetails/winter-weather/winter-weather.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>winterWeather</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc2FzdGVyRGV0YWlscy93aW50ZXItd2VhdGhlci93aW50ZXItd2VhdGhlci5wYWdlLnNjc3MifQ== */");

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