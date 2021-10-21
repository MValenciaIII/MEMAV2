(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4details-flashlight-flashlight-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4details/flashlight/flashlight.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab4details/flashlight/flashlight.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>MSEMA</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <!-- <ion-button expand=\"block\" color=\"success\" (click)=\"onFlashlight()\">\n    Turn on\n  </ion-button>\n  <ion-button expand=\"block\" color=\"danger\" (click)=\"offFlashlight()\">\n    Turn off\n  </ion-button> -->\n\n    <ion-card-header  style=\"text-align: center;\">FLASHLIGHT</ion-card-header>\n    <div class=\"flashlight-container\">\n      <input type=\"button\" src=\"assets/flashlight.png\" class=\"flashlight\">\n      <!-- <button><img src=\"assets/flashlight.png\" class=\"flashlight\" (click)=\"onFlashlight(); offFlashlight();\" ></button> -->\n    </div>\n  <div class=\"container\">\n    <div class=\"onoffswitch\">\n        <input type=\"checkbox\" name=\"onoffswitch\" class=\"onoffswitch-checkbox\" id=\"myonoffswitch\" checked>\n        <label class=\"onoffswitch-label\" for=\"myonoffswitch\">\n            <div class=\"onoffswitch-inner\" (click)=\"onFlashlight()\"></div>\n            <div class=\"onoffswitch-switch\" (click)=\"offFlashlight()\"></div>\n        </label>\n    </div>\n  </div>\n  \n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tab4details/flashlight/flashlight-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/tab4details/flashlight/flashlight-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: FlashlightPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlashlightPageRoutingModule", function() { return FlashlightPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _flashlight_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flashlight.page */ "./src/app/tab4details/flashlight/flashlight.page.ts");




const routes = [
    {
        path: '',
        component: _flashlight_page__WEBPACK_IMPORTED_MODULE_3__["FlashlightPage"]
    }
];
let FlashlightPageRoutingModule = class FlashlightPageRoutingModule {
};
FlashlightPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FlashlightPageRoutingModule);



/***/ }),

/***/ "./src/app/tab4details/flashlight/flashlight.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/tab4details/flashlight/flashlight.module.ts ***!
  \*************************************************************/
/*! exports provided: FlashlightPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlashlightPageModule", function() { return FlashlightPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _flashlight_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flashlight-routing.module */ "./src/app/tab4details/flashlight/flashlight-routing.module.ts");
/* harmony import */ var _flashlight_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flashlight.page */ "./src/app/tab4details/flashlight/flashlight.page.ts");







let FlashlightPageModule = class FlashlightPageModule {
};
FlashlightPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _flashlight_routing_module__WEBPACK_IMPORTED_MODULE_5__["FlashlightPageRoutingModule"]
        ],
        declarations: [_flashlight_page__WEBPACK_IMPORTED_MODULE_6__["FlashlightPage"]]
    })
], FlashlightPageModule);



/***/ }),

/***/ "./src/app/tab4details/flashlight/flashlight.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/tab4details/flashlight/flashlight.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flashlight-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 8px 23px;\n}\n\n.flashlight {\n  background: url('flashlight.png');\n  background-color: #242526;\n  background-size: cover;\n  border-radius: 850px;\n  border: solid #191c1f;\n  width: 150px;\n  height: 150px;\n}\n\ninput:active {\n  transform: scale(1.2);\n  transition-duration: 0.1;\n  transition-property: all;\n}\n\n.container {\n  padding: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.onoffswitch {\n  position: relative;\n  width: 78px;\n}\n\n.onoffswitch-checkbox {\n  display: none;\n}\n\n.onoffswitch-label {\n  display: block;\n  overflow: hidden;\n  cursor: pointer;\n  border: 1px solid #999999;\n  border-radius: 20px;\n}\n\n.onoffswitch-inner {\n  width: 200%;\n  margin-left: -100%;\n  transition: margin 0.3s ease-in 0s;\n}\n\n.onoffswitch-inner:before, .onoffswitch-inner:after {\n  float: left;\n  width: 50%;\n  height: 30px;\n  padding: 0;\n  line-height: 30px;\n  font-size: 15px;\n  color: white;\n  font-family: Trebuchet, Arial, sans-serif;\n  font-weight: bold;\n  box-sizing: border-box;\n}\n\n.onoffswitch-inner:before {\n  content: \"ON\";\n  padding-left: 11px;\n  background-color: #00A600;\n  color: #000000;\n}\n\n.onoffswitch-inner:after {\n  content: \"OFF\";\n  padding-right: 11px;\n  background-color: #FF0000;\n  color: #000000;\n  text-align: right;\n}\n\n.onoffswitch-switch {\n  width: 26px;\n  margin: 2px;\n  background: #FFFFFF;\n  border: 2px solid #999999;\n  border-radius: 20px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 44px;\n  transition: all 0.3s ease-in 0s;\n}\n\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {\n  margin-left: 0;\n}\n\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {\n  right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiNGRldGFpbHMvZmxhc2hsaWdodC9mbGFzaGxpZ2h0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUVKOztBQUNBO0VBQ0kscUJBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0FBRUo7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFFSjs7QUFFRTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQUNOOztBQUVFO0VBQ0ksYUFBQTtBQUNOOztBQUVFO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFDTjs7QUFFRTtFQUNJLFdBQUE7RUFBYSxrQkFBQTtFQUUwQixrQ0FBQTtBQUk3Qzs7QUFERTtFQUNJLFdBQUE7RUFBYSxVQUFBO0VBQVksWUFBQTtFQUFjLFVBQUE7RUFBWSxpQkFBQTtFQUNuRCxlQUFBO0VBQWlCLFlBQUE7RUFBYyx5Q0FBQTtFQUEyQyxpQkFBQTtFQUNiLHNCQUFBO0FBYW5FOztBQVZFO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFBMkIsY0FBQTtBQWNqQzs7QUFYRTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQTJCLGNBQUE7RUFDM0IsaUJBQUE7QUFlTjs7QUFaRTtFQUNJLFdBQUE7RUFBYSxXQUFBO0VBQ2IsbUJBQUE7RUFDQSx5QkFBQTtFQUEyQixtQkFBQTtFQUMzQixrQkFBQTtFQUFvQixNQUFBO0VBQVEsU0FBQTtFQUFXLFdBQUE7RUFFSCwrQkFBQTtBQXNCMUM7O0FBbkJFO0VBQ0ksY0FBQTtBQXNCTjs7QUFuQkU7RUFDSSxVQUFBO0FBc0JOIiwiZmlsZSI6InNyYy9hcHAvdGFiNGRldGFpbHMvZmxhc2hsaWdodC9mbGFzaGxpZ2h0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGFzaGxpZ2h0LWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiA4cHggMjNweDtcbn1cbi5mbGFzaGxpZ2h0e1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvZmxhc2hsaWdodC5wbmcpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICAjMjQyNTI2O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogODUwcHg7XG4gICAgYm9yZGVyOiBzb2xpZCBoc2woMjEwLCAxMCUsIDExJSk7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG59XG5cbmlucHV0OmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gIH1cblxuLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgXG4gIC8vIE1vZGlmaWVkIENTUyBmb3Igb24vb2ZmIHN3aXRjaFxuICAub25vZmZzd2l0Y2gge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgICAgIHdpZHRoOiA3OHB4O1xuICB9XG4gIFxuICAub25vZmZzd2l0Y2gtY2hlY2tib3gge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgLm9ub2Zmc3dpdGNoLWxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrOyBcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47IFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTk5OTsgXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB9XG4gIFxuICAub25vZmZzd2l0Y2gtaW5uZXIge1xuICAgICAgd2lkdGg6IDIwMCU7IG1hcmdpbi1sZWZ0OiAtMTAwJTtcbiAgICAgIC1tb3otdHJhbnNpdGlvbjogbWFyZ2luIDAuM3MgZWFzZS1pbiAwczsgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXJnaW4gMC4zcyBlYXNlLWluIDBzO1xuICAgICAgLW8tdHJhbnNpdGlvbjogbWFyZ2luIDAuM3MgZWFzZS1pbiAwczsgdHJhbnNpdGlvbjogbWFyZ2luIDAuM3MgZWFzZS1pbiAwcztcbiAgfVxuICBcbiAgLm9ub2Zmc3dpdGNoLWlubmVyOmJlZm9yZSwgLm9ub2Zmc3dpdGNoLWlubmVyOmFmdGVyIHtcbiAgICAgIGZsb2F0OiBsZWZ0OyB3aWR0aDogNTAlOyBoZWlnaHQ6IDMwcHg7IHBhZGRpbmc6IDA7IGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgZm9udC1zaXplOiAxNXB4OyBjb2xvcjogd2hpdGU7IGZvbnQtZmFtaWx5OiBUcmVidWNoZXQsIEFyaWFsLCBzYW5zLXNlcmlmOyBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDsgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94OyBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIFxuICAub25vZmZzd2l0Y2gtaW5uZXI6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiT05cIjtcbiAgICAgIHBhZGRpbmctbGVmdDogMTFweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEE2MDA7IGNvbG9yOiAjMDAwMDAwO1xuICB9XG4gIFxuICAub25vZmZzd2l0Y2gtaW5uZXI6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJPRkZcIjtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDExcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDAwOyBjb2xvcjogIzAwMDAwMDtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG4gIFxuICAub25vZmZzd2l0Y2gtc3dpdGNoIHtcbiAgICAgIHdpZHRoOiAyNnB4OyBtYXJnaW46IDJweDtcbiAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjOTk5OTk5OyBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGJvdHRvbTogMDsgcmlnaHQ6IDQ0cHg7XG4gICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4gMHM7IC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbiAwcztcbiAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4gMHM7IHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4gMHM7IFxuICB9XG4gIFxuICAub25vZmZzd2l0Y2gtY2hlY2tib3g6Y2hlY2tlZCArIC5vbm9mZnN3aXRjaC1sYWJlbCAub25vZmZzd2l0Y2gtaW5uZXIge1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbiAgXG4gIC5vbm9mZnN3aXRjaC1jaGVja2JveDpjaGVja2VkICsgLm9ub2Zmc3dpdGNoLWxhYmVsIC5vbm9mZnN3aXRjaC1zd2l0Y2gge1xuICAgICAgcmlnaHQ6IDBweDsgXG4gIH1cbiAgIl19 */");

/***/ }),

/***/ "./src/app/tab4details/flashlight/flashlight.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/tab4details/flashlight/flashlight.page.ts ***!
  \***********************************************************/
/*! exports provided: FlashlightPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlashlightPage", function() { return FlashlightPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_flashlight_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/flashlight/ngx */ "./node_modules/@ionic-native/flashlight/__ivy_ngcc__/ngx/index.js");



let FlashlightPage = class FlashlightPage {
    constructor(flashlight) {
        this.flashlight = flashlight;
        this.isTorch = false;
    }
    onFlashlight() {
        if (this.flashlight.available()) {
            this.isTorch = false;
            this.flashlight.switchOn();
        }
        else {
            alert("Flashlight Not Available");
        }
    }
    offFlashlight() {
        this.isTorch = true;
        this.flashlight.switchOff();
    }
};
FlashlightPage.ctorParameters = () => [
    { type: _ionic_native_flashlight_ngx__WEBPACK_IMPORTED_MODULE_2__["Flashlight"] }
];
FlashlightPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-flashlight",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./flashlight.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4details/flashlight/flashlight.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./flashlight.page.scss */ "./src/app/tab4details/flashlight/flashlight.page.scss")).default]
    })
], FlashlightPage);



/***/ })

}]);
//# sourceMappingURL=tab4details-flashlight-flashlight-module-es2015.js.map