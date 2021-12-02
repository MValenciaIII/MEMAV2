(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["disasterDetails-floods-floods-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/disasterDetails/floods/floods.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/disasterDetails/floods/floods.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>floods</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/disasterDetails/floods/floods-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/disasterDetails/floods/floods-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: FloodsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloodsPageRoutingModule", function() { return FloodsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _floods_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./floods.page */ "./src/app/disasterDetails/floods/floods.page.ts");




const routes = [
    {
        path: '',
        component: _floods_page__WEBPACK_IMPORTED_MODULE_3__["FloodsPage"]
    }
];
let FloodsPageRoutingModule = class FloodsPageRoutingModule {
};
FloodsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FloodsPageRoutingModule);



/***/ }),

/***/ "./src/app/disasterDetails/floods/floods.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/disasterDetails/floods/floods.module.ts ***!
  \*********************************************************/
/*! exports provided: FloodsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloodsPageModule", function() { return FloodsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _floods_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./floods-routing.module */ "./src/app/disasterDetails/floods/floods-routing.module.ts");
/* harmony import */ var _floods_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./floods.page */ "./src/app/disasterDetails/floods/floods.page.ts");







let FloodsPageModule = class FloodsPageModule {
};
FloodsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _floods_routing_module__WEBPACK_IMPORTED_MODULE_5__["FloodsPageRoutingModule"]
        ],
        declarations: [_floods_page__WEBPACK_IMPORTED_MODULE_6__["FloodsPage"]]
    })
], FloodsPageModule);



/***/ }),

/***/ "./src/app/disasterDetails/floods/floods.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/disasterDetails/floods/floods.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc2FzdGVyRGV0YWlscy9mbG9vZHMvZmxvb2RzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/disasterDetails/floods/floods.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/disasterDetails/floods/floods.page.ts ***!
  \*******************************************************/
/*! exports provided: FloodsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloodsPage", function() { return FloodsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FloodsPage = class FloodsPage {
    constructor() { }
    ngOnInit() {
    }
};
FloodsPage.ctorParameters = () => [];
FloodsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-floods',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./floods.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/disasterDetails/floods/floods.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./floods.page.scss */ "./src/app/disasterDetails/floods/floods.page.scss")).default]
    })
], FloodsPage);



/***/ })

}]);
//# sourceMappingURL=disasterDetails-floods-floods-module-es2015.js.map