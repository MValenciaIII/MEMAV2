(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["disaster-disaster-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/disaster/disaster.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/disaster/disaster.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <ion-nav-link style=\"color: white;\" [routerLink]=\"['/tabs/tab1/']\">BACK</ion-nav-link>\n      </ion-col>\n    </ion-row>\n    <ion-title style=\"font-size: 40px; font-weight: bolder; color: #fff;\">  <img src=\"assets/mema-seal.png\" height=\"35\"> MEMA</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" class = \"content-with-full-height \"  padding>\n  <ion-card-header class=\"headerText \">\n      <h1>TYPES OF DISASTER</h1>\n      <div class=\"line\"></div>\n  </ion-card-header>\n\n\n  <ion-grid>\n    <div class=\"iconGrid\"></div>\n    <ion-row class=\"buttonText ion-align-items-center\">\n        <ion-col class=\"ion-text-center\">\n            \n            <button [routerLink]=\"['./tornadoes']\" class=\"btn iconButton\" >\n                <img class=\"imgDocs\" src=\"../../assets/disasterPage/tornado.png\" alt=\"\">\n            </button>\n            <p>TORNADOES</p>\n        </ion-col>\n        \n        <ion-col class=\"ion-text-center\">\n            <button [routerLink]=\"['./hurricanes']\" class=\"btn iconButton\">\n                <img  class=\"imgDocs \" src=\"../../assets/disasterPage/Hurricane.png\" alt=\"\"> \n            </button>\n            <p>HURRICANES</p>\n        </ion-col>\n    </ion-row>\n    \n    <ion-row class=\"buttonText ion-align-items-center\">\n        <ion-col class=\"ion-text-center\">\n            <button [routerLink]=\"['./floods']\" class=\"btn iconButton\">       \n                <img  class=\"imgDocs \" src=\"../../assets/disasterPage/Flooding.png\" alt=\"\">\n            </button>\n            <p>FLOODS</p>\n        </ion-col>\n        \n        <ion-col class=\"ion-text-center\">\n            <button [routerLink]=\"['./extremeHeat']\" class=\"btn iconButton \">\n                <img class=\"imgDocs \" src=\"../../assets/disasterPage/HeatAdvisor.png\" alt=\"\"> \n            </button>\n            \n            <p>EXTREME HEAT</p>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class=\"buttonText ion-align-items-center\">\n        <ion-col class=\"ion-text-center\">\n            <button [routerLink]=\"['./winterWeather']\" class=\"btn iconButton\"> \n               <img class=\"imgDocs \" src=\"../../assets/disasterPage/snow.png\" alt=\"\">\n            </button>\n            <p>WINTER WEATHER</p>\n        </ion-col>\n        <ion-col class=\"ion-text-center\">\n            <button [routerLink]=\"['./earthquakes']\" class=\"btn iconButton\">\n                <img src=\"../../assets/disasterPage/earthquake.png\" alt=\"\">\n            </button>\n            <p>EARTHQUAKES</p>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class=\"buttonText ion-align-items-center\">\n        <ion-col class=\"ion-text-center\">\n            <button [routerLink]=\"['./radiological']\" class=\"btn iconButton\"> \n               <img class=\"imgDocs \" src=\"../../assets/disasterPage/Hazard.png\" alt=\"\">\n            </button>\n            <p>RADIOLOGICAL</p>\n        </ion-col>\n        <ion-col class=\"ion-text-center\">\n            <button [routerLink]=\"['./covid']\" class=\"btn iconButton\">\n                <img src=\"../../assets/disasterPage/COVID.png\" alt=\"\">\n            </button>\n            <p>COVID-19</p>\n        </ion-col>\n    </ion-row>\n</ion-grid>\n\n\n\n\n\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/disaster/disaster-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/disaster/disaster-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: DisasterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisasterPageRoutingModule", function() { return DisasterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _disaster_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./disaster.page */ "./src/app/disaster/disaster.page.ts");




const routes = [
    {
        path: '',
        component: _disaster_page__WEBPACK_IMPORTED_MODULE_3__["DisasterPage"]
    },
    {
        path: "tornadoes",
        loadChildren: () => __webpack_require__.e(/*! import() | disasterDetails-tornadoes-tornadoes-module */ "disasterDetails-tornadoes-tornadoes-module").then(__webpack_require__.bind(null, /*! ../disasterDetails/tornadoes/tornadoes.module */ "./src/app/disasterDetails/tornadoes/tornadoes.module.ts")).then((m) => m.TornadoesPageModule)
    },
    {
        path: "hurricanes",
        loadChildren: () => __webpack_require__.e(/*! import() | disasterDetails-hurricanes-hurricanes-module */ "disasterDetails-hurricanes-hurricanes-module").then(__webpack_require__.bind(null, /*! ../disasterDetails/hurricanes/hurricanes.module */ "./src/app/disasterDetails/hurricanes/hurricanes.module.ts")).then((m) => m.HurricanesPageModule)
    },
    {
        path: "floods",
        loadChildren: () => __webpack_require__.e(/*! import() | disasterDetails-floods-floods-module */ "disasterDetails-floods-floods-module").then(__webpack_require__.bind(null, /*! ../disasterDetails/floods/floods.module */ "./src/app/disasterDetails/floods/floods.module.ts")).then((m) => m.FloodsPageModule)
    },
    {
        path: "extremeHeat",
        loadChildren: () => __webpack_require__.e(/*! import() | disasterDetails-extreme-heat-extreme-heat-module */ "disasterDetails-extreme-heat-extreme-heat-module").then(__webpack_require__.bind(null, /*! ../disasterDetails/extreme-heat/extreme-heat.module */ "./src/app/disasterDetails/extreme-heat/extreme-heat.module.ts")).then((m) => m.ExtremeHeatPageModule)
    },
    {
        path: "winterWeather",
        loadChildren: () => __webpack_require__.e(/*! import() | disasterDetails-winter-weather-winter-weather-module */ "disasterDetails-winter-weather-winter-weather-module").then(__webpack_require__.bind(null, /*! ../disasterDetails/winter-weather/winter-weather.module */ "./src/app/disasterDetails/winter-weather/winter-weather.module.ts")).then((m) => m.WinterWeatherPageModule)
    },
    {
        path: "earthquakes",
        loadChildren: () => __webpack_require__.e(/*! import() | disasterDetails-earthquakes-earthquakes-module */ "disasterDetails-earthquakes-earthquakes-module").then(__webpack_require__.bind(null, /*! ../disasterDetails/earthquakes/earthquakes.module */ "./src/app/disasterDetails/earthquakes/earthquakes.module.ts")).then((m) => m.EarthquakesPageModule)
    },
    {
        path: "radiological",
        loadChildren: () => __webpack_require__.e(/*! import() | disasterDetails-radiological-radiological-module */ "disasterDetails-radiological-radiological-module").then(__webpack_require__.bind(null, /*! ../disasterDetails/radiological/radiological.module */ "./src/app/disasterDetails/radiological/radiological.module.ts")).then((m) => m.RadiologicalPageModule)
    },
    {
        path: "covid",
        loadChildren: () => __webpack_require__.e(/*! import() | disasterDetails-covid-covid-module */ "disasterDetails-covid-covid-module").then(__webpack_require__.bind(null, /*! ../disasterDetails/covid/covid.module */ "./src/app/disasterDetails/covid/covid.module.ts")).then((m) => m.CovidPageModule)
    },
    {
        path: "",
        redirectTo: "/tab1/disaster",
        pathMatch: "full",
    },
];
let DisasterPageRoutingModule = class DisasterPageRoutingModule {
};
DisasterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DisasterPageRoutingModule);



/***/ }),

/***/ "./src/app/disaster/disaster.module.ts":
/*!*********************************************!*\
  !*** ./src/app/disaster/disaster.module.ts ***!
  \*********************************************/
/*! exports provided: DisasterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisasterPageModule", function() { return DisasterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _disaster_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./disaster-routing.module */ "./src/app/disaster/disaster-routing.module.ts");
/* harmony import */ var _disaster_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./disaster.page */ "./src/app/disaster/disaster.page.ts");







let DisasterPageModule = class DisasterPageModule {
};
DisasterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _disaster_routing_module__WEBPACK_IMPORTED_MODULE_5__["DisasterPageRoutingModule"]
        ],
        declarations: [_disaster_page__WEBPACK_IMPORTED_MODULE_6__["DisasterPage"]]
    })
], DisasterPageModule);



/***/ }),

/***/ "./src/app/disaster/disaster.page.scss":
/*!*********************************************!*\
  !*** ./src/app/disaster/disaster.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#toolbarColor {\n  --background: #061e3d;\n}\n\n.headerText {\n  text-align: center;\n  font-weight: bolder;\n  color: #061e3d;\n}\n\n.line {\n  border-top: solid #061e3d 10px;\n  width: 120%;\n  margin-left: -10%;\n}\n\n.content-with-full-height {\n  --background:white ;\n}\n\n.equal-sized-item {\n  height: 10%;\n}\n\nion-grid {\n  position: relative;\n  opacity: 1;\n  z-index: 2;\n}\n\n.iconGrid {\n  position: absolute;\n  background: url('mema-seal.png') 50% 50% no-repeat;\n  background-size: contain;\n  height: 100%;\n  width: 100%;\n  opacity: 0.25;\n  z-index: 0;\n}\n\n.buttonText p {\n  margin: 2%;\n  font-size: 18px;\n  font-weight: bolder;\n  color: #061e3d;\n}\n\n.imgDocs {\n  height: auto;\n  width: auto;\n}\n\n.iconButton {\n  padding: 7% 13%;\n  border-style: none;\n  border-radius: 100%;\n  background: #061e3d;\n  background-position: 50% center;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzYXN0ZXIvZGlzYXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVFO0VBR0ksbUJBQUE7QUFETjs7QUFPSTtFQUNFLFdBQUE7QUFKTjs7QUFRSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFMUjs7QUFRSTtFQUNJLGtCQUFBO0VBQ0Esa0RBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUFMUjs7QUFTRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBTko7O0FBU0U7RUFDQyxZQUFBO0VBQ0EsV0FBQTtBQU5IOztBQVNFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7QUFOSiIsImZpbGUiOiJzcmMvYXBwL2Rpc2FzdGVyL2Rpc2FzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0b29sYmFyQ29sb3Ige1xuICAgIC0tYmFja2dyb3VuZDogIzA2MWUzZDtcbiAgfVxuICBcbiAgLmhlYWRlclRleHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGNvbG9yOiAjMDYxZTNkO1xuICB9XG4gIFxuICAubGluZSB7XG4gICAgYm9yZGVyLXRvcDpzb2xpZCAjMDYxZTNkIDEwcHg7XG4gICAgd2lkdGg6IDEyMCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMCU7XG4gIH1cbiAgXG4gIC5jb250ZW50LXdpdGgtZnVsbC1oZWlnaHR7XG4gICAgICAvLyBoZWlnaHQ6IDEwMCU7XG4gICAgICAvL21hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAtLWJhY2tncm91bmQ6d2hpdGUgO1xuICBcbiAgICB9XG4gIFxuXG4gICAgXG4gICAgLmVxdWFsLXNpemVkLWl0ZW17XG4gICAgICBoZWlnaHQ6IDEwJVxuICAgIH1cbiAgICBcbiAgXG4gICAgaW9uLWdyaWQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuICAgIFxuICAgIC5pY29uR3JpZCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9tZW1hLXNlYWwucG5nKSA1MCUgNTAlIG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvcGFjaXR5OiAuMjU7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgfVxuICBcbiAgXG4gIC5idXR0b25UZXh0IHAge1xuICAgIG1hcmdpbjogMiU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgY29sb3I6ICMwNjFlM2Q7XG4gIH1cbiAgXG4gIC5pbWdEb2NzIHtcbiAgIGhlaWdodDogYXV0bztcbiAgIHdpZHRoOiBhdXRvO1xuICB9XG4gIFxuICAuaWNvbkJ1dHRvbiB7XG4gICAgcGFkZGluZzogNyUgMTMlO1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICMwNjFlM2QgO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgXG4gIH1cbiAgXG4gIFxuICBcbiAgIl19 */");

/***/ }),

/***/ "./src/app/disaster/disaster.page.ts":
/*!*******************************************!*\
  !*** ./src/app/disaster/disaster.page.ts ***!
  \*******************************************/
/*! exports provided: DisasterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisasterPage", function() { return DisasterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DisasterPage = class DisasterPage {
    constructor() { }
    ngOnInit() {
    }
};
DisasterPage.ctorParameters = () => [];
DisasterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-disaster',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./disaster.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/disaster/disaster.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./disaster.page.scss */ "./src/app/disaster/disaster.page.scss")).default]
    })
], DisasterPage);



/***/ })

}]);
//# sourceMappingURL=disaster-disaster-module-es2015.js.map