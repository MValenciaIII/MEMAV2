(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2details-miscnumbers-miscnumbers-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2details/miscnumbers/miscnumbers.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2details/miscnumbers/miscnumbers.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-row>\n            <ion-col>\n                <ion-nav-link [routerLink]=\"['/tabs/tab2/']\">BACK</ion-nav-link>\n            </ion-col>\n        </ion-row>\n        <ion-title>YOUR PLAN</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <!--  <ion-card-header  style=\"text-align: center; \">OTHER IMPORTANT NUMBERS</ion-card-header>\n    <ion-card-content>\n        <ion-header>EMERGENCY SERVICES</ion-header>\n        <ion-item>\n        <ion-label position=\"floating\">Police Phone: </ion-label>\n        <ion-input [(ngModel)]=\"police\" name=\"police\" type=\"number\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"floating\">Fire Phone: </ion-label>\n        <ion-input [(ngModel)]=\"fire\" name=\"fire\" type=\"number\"></ion-input>\n    </ion-item>\n    </ion-card-content>\n    <ion-card-content>\n        <ion-header>DOCTOR</ion-header>\n        <ion-item>\n        <ion-label position=\"floating\">Name</ion-label>\n        <ion-input [(ngModel)]=\"docName\" name=\"docName\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"floating\">Phone: </ion-label>\n        <ion-input [(ngModel)]=\"doctor\" name=\"doctor\" type=\"number\"></ion-input>\n    </ion-item>\n    </ion-card-content>\n    <ion-card-content>\n        <ion-header>PEDIATRICIAN</ion-header>\n        <ion-item>\n        <ion-label position=\"floating\">Name</ion-label>\n        <ion-input [(ngModel)]=\"pedName\" name=\"pedName\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"floating\">Phone: </ion-label>\n        <ion-input [(ngModel)]=\"peds\" name=\"peds\" type=\"number\"></ion-input>\n    </ion-item>\n    </ion-card-content>\n    <ion-card-content>\n        <ion-header>VETERINARIAN</ion-header>\n        <ion-item>\n        <ion-label position=\"floating\">Name</ion-label>\n        <ion-input [(ngModel)]=\"vetName\" name=\"vetName\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"floating\">Phone: </ion-label>\n        <ion-input [(ngModel)]=\"vet\" name=\"vet\" type=\"number\"></ion-input>\n    </ion-item>\n    </ion-card-content>\n    <ion-card-content>\n        <ion-header>UTILITIES</ion-header>\n        <ion-item>\n        <ion-label position=\"floating\">Electric Company</ion-label>\n        <ion-input [(ngModel)]=\"electName\" name=\"electName\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"floating\">Electric Company Phone: </ion-label>\n        <ion-input [(ngModel)]=\"electric\" name=\"electric\" type=\"number\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"floating\">Gas Company</ion-label>\n        <ion-input [(ngModel)]=\"gasName\" name=\"gasName\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"floating\">Gas Company Phone: </ion-label>\n        <ion-input [(ngModel)]=\"gas\" name=\"gas\" type=\"number\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"floating\">Water Company</ion-label>\n        <ion-input [(ngModel)]=\"waterName\" name=\"waterName\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"floating\">Water Company Phone: </ion-label>\n        <ion-input [(ngModel)]=\"water\" name=\"water\" type=\"number\"></ion-input>\n    </ion-item>\n    </ion-card-content>\n    <ion-button (click)=\"saveNumbers()\">Save</ion-button> -->\n    <ion-card-header  style=\"text-align: center; \">OTHER IMPORTANT NUMBERS</ion-card-header>\n    <ion-card-content *ngFor=\"let otherNumbers of otherNumber\">\n            <!-- <ion-text>{{otherNumbers.name}} </ion-text> -->\n            <ion-item>\n                <ion-text>{{otherNumbers.title}} <br />\n                <ion-label position=\"floating\">{{otherNumbers.name}}</ion-label>\n                <ion-input type=\"text\" [(ngModel)]=\"otherNumbers.input\" [inputmode]=\"otherNumbers.name\"></ion-input>\n                </ion-text>\n            </ion-item>\n    </ion-card-content >\n    <ion-button>SAVE</ion-button>\n</ion-content> ");

/***/ }),

/***/ "./src/app/tab2details/miscnumbers/miscnumbers-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/tab2details/miscnumbers/miscnumbers-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: MiscnumbersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscnumbersPageRoutingModule", function() { return MiscnumbersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _miscnumbers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./miscnumbers.page */ "./src/app/tab2details/miscnumbers/miscnumbers.page.ts");




const routes = [
    {
        path: '',
        component: _miscnumbers_page__WEBPACK_IMPORTED_MODULE_3__["MiscnumbersPage"]
    }
];
let MiscnumbersPageRoutingModule = class MiscnumbersPageRoutingModule {
};
MiscnumbersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MiscnumbersPageRoutingModule);



/***/ }),

/***/ "./src/app/tab2details/miscnumbers/miscnumbers.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/tab2details/miscnumbers/miscnumbers.module.ts ***!
  \***************************************************************/
/*! exports provided: MiscnumbersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscnumbersPageModule", function() { return MiscnumbersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _miscnumbers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./miscnumbers-routing.module */ "./src/app/tab2details/miscnumbers/miscnumbers-routing.module.ts");
/* harmony import */ var _miscnumbers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./miscnumbers.page */ "./src/app/tab2details/miscnumbers/miscnumbers.page.ts");







let MiscnumbersPageModule = class MiscnumbersPageModule {
};
MiscnumbersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _miscnumbers_routing_module__WEBPACK_IMPORTED_MODULE_5__["MiscnumbersPageRoutingModule"]
        ],
        declarations: [_miscnumbers_page__WEBPACK_IMPORTED_MODULE_6__["MiscnumbersPage"]]
    })
], MiscnumbersPageModule);



/***/ }),

/***/ "./src/app/tab2details/miscnumbers/miscnumbers.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/tab2details/miscnumbers/miscnumbers.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjJkZXRhaWxzL21pc2NudW1iZXJzL21pc2NudW1iZXJzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/tab2details/miscnumbers/miscnumbers.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/tab2details/miscnumbers/miscnumbers.page.ts ***!
  \*************************************************************/
/*! exports provided: MiscnumbersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscnumbersPage", function() { return MiscnumbersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let MiscnumbersPage = class MiscnumbersPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.input = "";
        this.title = "";
        this.name = "";
        this.otherNumber = [
            {
                title: "EMERGENCY SERVICES",
                name: "Police Phone:",
                input: this.input,
            },
            {
                title: "",
                name: "Fire Phone:",
                input: this.input,
            },
            {
                title: "DOCTOR",
                name: this.input,
                input: this.input,
            },
        ];
    }
    ionViewWillEnter() {
    }
    ionViewWillLeave() {
    }
    onClick() {
    }
    ngOnInit() {
    }
};
MiscnumbersPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
MiscnumbersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-miscnumbers',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./miscnumbers.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2details/miscnumbers/miscnumbers.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./miscnumbers.page.scss */ "./src/app/tab2details/miscnumbers/miscnumbers.page.scss")).default]
    })
], MiscnumbersPage);



/***/ })

}]);
//# sourceMappingURL=tab2details-miscnumbers-miscnumbers-module-es2015.js.map