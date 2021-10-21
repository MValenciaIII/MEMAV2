(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4details-whistle-whistle-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4details/whistle/whistle.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab4details/whistle/whistle.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>MSEMA</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <h1>WHISTLE</h1>\n   <p>Tap the whistle to play</p>\n  <div class=\"whistleContainer\">\n    <button class=\"whistle_btn\" (click)=\"whistleButton()\"></button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tab4details/whistle/whistle-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/tab4details/whistle/whistle-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: WhistlePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhistlePageRoutingModule", function() { return WhistlePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _whistle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./whistle.page */ "./src/app/tab4details/whistle/whistle.page.ts");




const routes = [
    {
        path: '',
        component: _whistle_page__WEBPACK_IMPORTED_MODULE_3__["WhistlePage"]
    }
];
let WhistlePageRoutingModule = class WhistlePageRoutingModule {
};
WhistlePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WhistlePageRoutingModule);



/***/ }),

/***/ "./src/app/tab4details/whistle/whistle.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/tab4details/whistle/whistle.module.ts ***!
  \*******************************************************/
/*! exports provided: WhistlePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhistlePageModule", function() { return WhistlePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _whistle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./whistle-routing.module */ "./src/app/tab4details/whistle/whistle-routing.module.ts");
/* harmony import */ var _whistle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./whistle.page */ "./src/app/tab4details/whistle/whistle.page.ts");







let WhistlePageModule = class WhistlePageModule {
};
WhistlePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _whistle_routing_module__WEBPACK_IMPORTED_MODULE_5__["WhistlePageRoutingModule"]
        ],
        declarations: [_whistle_page__WEBPACK_IMPORTED_MODULE_6__["WhistlePage"]]
    })
], WhistlePageModule);



/***/ }),

/***/ "./src/app/tab4details/whistle/whistle.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/tab4details/whistle/whistle.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".whistleContainer {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.whistle_btn {\n  background: url('icon_whistle.png');\n  background-size: cover;\n  background-position: 8px 23px;\n  display: inline-block;\n  border: solid #8eabd2;\n  padding: 20px;\n  width: 150px;\n  border-radius: 900px;\n  height: 150px;\n  transition: all 0.5s;\n  cursor: pointer;\n}\n\n/* .btn:hover{\n     width: 75px; \n     height: 75px;\n   /*   transform: scale(.8); */\n\nbutton:active {\n  transform: scale(1.2);\n  transition-duration: 0.1;\n  transition-property: all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiNGRldGFpbHMvd2hpc3RsZS93aGlzdGxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNFLG1DQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBOzs7K0JBQUE7O0FBS0E7RUFDRSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7QUFBRiIsImZpbGUiOiJzcmMvYXBwL3RhYjRkZXRhaWxzL3doaXN0bGUvd2hpc3RsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2hpc3RsZUNvbnRhaW5lciB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ud2hpc3RsZV9idG4ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaWNvbl93aGlzdGxlLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogOHB4IDIzcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiBzb2xpZCBoc2woMjE0LCA0MyUsIDY5JSk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgYm9yZGVyLXJhZGl1czogOTAwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIC5idG46aG92ZXJ7XG4gICAgIHdpZHRoOiA3NXB4OyBcbiAgICAgaGVpZ2h0OiA3NXB4O1xuICAgLyogICB0cmFuc2Zvcm06IHNjYWxlKC44KTsgKi9cblxuYnV0dG9uOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/tab4details/whistle/whistle.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/tab4details/whistle/whistle.page.ts ***!
  \*****************************************************/
/*! exports provided: WhistlePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhistlePage", function() { return WhistlePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let WhistlePage = class WhistlePage {
    constructor() { }
    ngOnInit() { }
    whistleButton() {
        let audio = new Audio("assets/human_whistle_fingers_attention.mp3");
        audio.play();
    }
};
WhistlePage.ctorParameters = () => [];
WhistlePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-whistle",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./whistle.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4details/whistle/whistle.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./whistle.page.scss */ "./src/app/tab4details/whistle/whistle.page.scss")).default]
    })
], WhistlePage);



/***/ })

}]);
//# sourceMappingURL=tab4details-whistle-whistle-module-es2015.js.map