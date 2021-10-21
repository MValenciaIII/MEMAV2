(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4details-gps-location-gps-location-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4details/gps-location/gps-location.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab4details/gps-location/gps-location.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>GPS LOCATION</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content> -->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Ionic \n      Leaflet Map\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [attr.noScroll]=\"shouldScroll\">\n  <div id=\"map\"></div>\n</ion-content> \n");

/***/ }),

/***/ "./src/app/tab4details/gps-location/gps-location-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/tab4details/gps-location/gps-location-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: GpsLocationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GpsLocationPageRoutingModule", function() { return GpsLocationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _gps_location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gps-location.page */ "./src/app/tab4details/gps-location/gps-location.page.ts");




const routes = [
    {
        path: '',
        component: _gps_location_page__WEBPACK_IMPORTED_MODULE_3__["GpsLocationPage"]
    }
];
let GpsLocationPageRoutingModule = class GpsLocationPageRoutingModule {
};
GpsLocationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GpsLocationPageRoutingModule);



/***/ }),

/***/ "./src/app/tab4details/gps-location/gps-location.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/tab4details/gps-location/gps-location.module.ts ***!
  \*****************************************************************/
/*! exports provided: GpsLocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GpsLocationPageModule", function() { return GpsLocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _gps_location_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gps-location-routing.module */ "./src/app/tab4details/gps-location/gps-location-routing.module.ts");
/* harmony import */ var _gps_location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gps-location.page */ "./src/app/tab4details/gps-location/gps-location.page.ts");







let GpsLocationPageModule = class GpsLocationPageModule {
};
GpsLocationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _gps_location_routing_module__WEBPACK_IMPORTED_MODULE_5__["GpsLocationPageRoutingModule"]
        ],
        declarations: [_gps_location_page__WEBPACK_IMPORTED_MODULE_6__["GpsLocationPage"]]
    })
], GpsLocationPageModule);



/***/ }),

/***/ "./src/app/tab4details/gps-location/gps-location.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/tab4details/gps-location/gps-location.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("page-home [noScroll] {\n  overflow: hidden;\n}\npage-home #map {\n  height: 100%;\n  width: 100%;\n}\npage-home #mapcontainter {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiNGRldGFpbHMvZ3BzLWxvY2F0aW9uL2dwcy1sb2NhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxnQkFBQTtBQUFOO0FBR0k7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUROO0FBSUk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUZOIiwiZmlsZSI6InNyYy9hcHAvdGFiNGRldGFpbHMvZ3BzLWxvY2F0aW9uL2dwcy1sb2NhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLWhvbWUge1xuICAgIFtub1Njcm9sbF0ge1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG4gIFxuICAgICNtYXAge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICBcbiAgICAjbWFwY29udGFpbnRlciB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/tab4details/gps-location/gps-location.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/tab4details/gps-location/gps-location.page.ts ***!
  \***************************************************************/
/*! exports provided: GpsLocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GpsLocationPage", function() { return GpsLocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let GpsLocationPage = class GpsLocationPage {
    constructor() { }
    ngOnInit() {
    }
};
GpsLocationPage.ctorParameters = () => [];
GpsLocationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gps-location',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./gps-location.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4details/gps-location/gps-location.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./gps-location.page.scss */ "./src/app/tab4details/gps-location/gps-location.page.scss")).default]
    })
], GpsLocationPage);



/***/ })

}]);
//# sourceMappingURL=tab4details-gps-location-gps-location-module-es2015.js.map