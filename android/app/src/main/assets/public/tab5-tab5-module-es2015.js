(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab5-tab5-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/tab5.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/tab5.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n      <ion-title> MSEMA </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<iframe height='100%' width=\"100%\" title=\"website\" src=\"https://www.msema.org/contact/crisistrack/\"></iframe>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/tab5/tab5-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab5/tab5-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab5PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5PageRoutingModule", function() { return Tab5PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab5.page */ "./src/app/tab5/tab5.page.ts");




const routes = [
    {
        path: '',
        component: _tab5_page__WEBPACK_IMPORTED_MODULE_3__["Tab5Page"]
    }
];
let Tab5PageRoutingModule = class Tab5PageRoutingModule {
};
Tab5PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Tab5PageRoutingModule);



/***/ }),

/***/ "./src/app/tab5/tab5.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.module.ts ***!
  \*************************************/
/*! exports provided: Tab5PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5PageModule", function() { return Tab5PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _tab5_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab5-routing.module */ "./src/app/tab5/tab5-routing.module.ts");
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab5.page */ "./src/app/tab5/tab5.page.ts");







let Tab5PageModule = class Tab5PageModule {
};
Tab5PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tab5_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab5PageRoutingModule"]
        ],
        declarations: [_tab5_page__WEBPACK_IMPORTED_MODULE_6__["Tab5Page"]]
    })
], Tab5PageModule);



/***/ }),

/***/ "./src/app/tab5/tab5.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjUvdGFiNS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tab5/tab5.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab5/tab5.page.ts ***!
  \***********************************/
/*! exports provided: Tab5Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5Page", function() { return Tab5Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let Tab5Page = class Tab5Page {
    constructor() { }
    ngOnInit() {
    }
};
Tab5Page.ctorParameters = () => [];
Tab5Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab5',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab5.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/tab5.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab5.page.scss */ "./src/app/tab5/tab5.page.scss")).default]
    })
], Tab5Page);



/***/ })

}]);
//# sourceMappingURL=tab5-tab5-module-es2015.js.map