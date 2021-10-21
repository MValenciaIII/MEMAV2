(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["disasterDetails-covid-covid-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/disasterDetails/covid/covid.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/disasterDetails/covid/covid.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>covid</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/disasterDetails/covid/covid-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/disasterDetails/covid/covid-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CovidPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CovidPageRoutingModule", function() { return CovidPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _covid_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./covid.page */ "./src/app/disasterDetails/covid/covid.page.ts");




const routes = [
    {
        path: '',
        component: _covid_page__WEBPACK_IMPORTED_MODULE_3__["CovidPage"]
    }
];
let CovidPageRoutingModule = class CovidPageRoutingModule {
};
CovidPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CovidPageRoutingModule);



/***/ }),

/***/ "./src/app/disasterDetails/covid/covid.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/disasterDetails/covid/covid.module.ts ***!
  \*******************************************************/
/*! exports provided: CovidPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CovidPageModule", function() { return CovidPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _covid_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./covid-routing.module */ "./src/app/disasterDetails/covid/covid-routing.module.ts");
/* harmony import */ var _covid_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./covid.page */ "./src/app/disasterDetails/covid/covid.page.ts");







let CovidPageModule = class CovidPageModule {
};
CovidPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _covid_routing_module__WEBPACK_IMPORTED_MODULE_5__["CovidPageRoutingModule"]
        ],
        declarations: [_covid_page__WEBPACK_IMPORTED_MODULE_6__["CovidPage"]]
    })
], CovidPageModule);



/***/ }),

/***/ "./src/app/disasterDetails/covid/covid.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/disasterDetails/covid/covid.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc2FzdGVyRGV0YWlscy9jb3ZpZC9jb3ZpZC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/disasterDetails/covid/covid.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/disasterDetails/covid/covid.page.ts ***!
  \*****************************************************/
/*! exports provided: CovidPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CovidPage", function() { return CovidPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CovidPage = class CovidPage {
    constructor() { }
    ngOnInit() {
    }
};
CovidPage.ctorParameters = () => [];
CovidPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-covid',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./covid.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/disasterDetails/covid/covid.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./covid.page.scss */ "./src/app/disasterDetails/covid/covid.page.scss")).default]
    })
], CovidPage);



/***/ })

}]);
//# sourceMappingURL=disasterDetails-covid-covid-module-es2015.js.map