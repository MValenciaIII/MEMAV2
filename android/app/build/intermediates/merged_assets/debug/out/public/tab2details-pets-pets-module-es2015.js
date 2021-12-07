(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2details-pets-pets-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2details/pets/pets.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2details/pets/pets.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-row>\n            <ion-col>\n                <ion-nav-link [routerLink]=\"['/tabs/tab2/']\">BACK</ion-nav-link>\n            </ion-col>\n        </ion-row>\n        <ion-title>YOUR PLAN</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card-header  style=\"text-align: center; background-color:#061e3d; color: #ffffff;\">CHECKLIST</ion-card-header>\n    <ion-item *ngFor=\"let emergencyItems of emergencyItem\" (click)=\"onClick(emergencyItems)\">\n        <ion-label>{{emergencyItems.name}}</ion-label>\n        <ion-checkbox type=\"checkbox\" [(ngModel)]=\"emergencyItems.checked\" [checked]=\"emergencyItems.name\"></ion-checkbox>\n    </ion-item>\n    <ion-card-header>\n        <ion-title>Your Checklist</ion-title>\n    </ion-card-header>\n    <ion-input type=\"text\"></ion-input>\n    <ion-button style=\"align-content: center\">ADD</ion-button>\n</ion-content>\n\n<!-- <ion-content [fullscreen]=\"true\">\n    <ion-card-header>CHECKLIST</ion-card-header>\n    <ion-item>\n        <ion-checkbox checked=\"false\" name=\"food\"></ion-checkbox>\n        <ion-label> FOOD</ion-label>\n    </ion-item>\n    <ion-item>\n        <ion-checkbox checked=\"false\" name=\"water\"></ion-checkbox>\n        <ion-label>WATER</ion-label>\n    </ion-item>\n    <ion-item>\n        <ion-checkbox checked=\"false\" name=\"meds\"></ion-checkbox>\n        <ion-label>MEDICINES AND MEDICAL RECORDS</ion-label>\n    </ion-item>\n    <ion-item>\n        <ion-checkbox checked=\"false\" name=\"firstaid\"></ion-checkbox>\n        <ion-label>FIRST AID KIT</ion-label>\n    </ion-item>\n    <ion-item>\n        <ion-checkbox checked=\"false\" name=\"leash\"></ion-checkbox>\n        <ion-label>COLLOR WITH ID TAG, HARNESS OR LEASH</ion-label>\n    </ion-item>\n    <ion-item>\n        <ion-checkbox checked=\"false\" name=\"docs\"></ion-checkbox>\n        <ion-label>IMPORTANT DOCUMENTS</ion-label>\n    </ion-item>\n    <ion-item>\n        <ion-checkbox checked=\"false\" name=\"carrier\"></ion-checkbox>\n        <ion-label>CRATE OR OTHER PET CARRIER</ion-label>\n    </ion-item>\n    <ion-item>\n        <ion-checkbox checked=\"false\" name=\"sanitation\"></ion-checkbox>\n        <ion-label>SANITATION</ion-label>\n    </ion-item>\n    <ion-item>\n        <ion-checkbox checked=\"false\" name=\"pictures\"></ion-checkbox>\n        <ion-label>A PICTURE OF YOU AND YOUR PET TOGETHER</ion-label>\n    </ion-item>\n    <ion-item>\n        <ion-checkbox checked=\"false\" name=\"familiar\"></ion-checkbox>\n        <ion-label>FAMILIAR ITEMS</ion-label>\n    </ion-item>\n    <ion-card-header>\n        <ion-title>Your Checklist</ion-title>\n    </ion-card-header>\n    <ion-input type=\"text\"></ion-input>\n    <ion-button style=\"align-content: center\">ADD</ion-button>\n</ion-content> -->");

/***/ }),

/***/ "./src/app/tab2details/pets/pets-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/tab2details/pets/pets-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PetsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetsPageRoutingModule", function() { return PetsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pets_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pets.page */ "./src/app/tab2details/pets/pets.page.ts");




const routes = [
    {
        path: '',
        component: _pets_page__WEBPACK_IMPORTED_MODULE_3__["PetsPage"]
    }
];
let PetsPageRoutingModule = class PetsPageRoutingModule {
};
PetsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PetsPageRoutingModule);



/***/ }),

/***/ "./src/app/tab2details/pets/pets.module.ts":
/*!*************************************************!*\
  !*** ./src/app/tab2details/pets/pets.module.ts ***!
  \*************************************************/
/*! exports provided: PetsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetsPageModule", function() { return PetsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _pets_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pets-routing.module */ "./src/app/tab2details/pets/pets-routing.module.ts");
/* harmony import */ var _pets_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pets.page */ "./src/app/tab2details/pets/pets.page.ts");







let PetsPageModule = class PetsPageModule {
};
PetsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pets_routing_module__WEBPACK_IMPORTED_MODULE_5__["PetsPageRoutingModule"]
        ],
        declarations: [_pets_page__WEBPACK_IMPORTED_MODULE_6__["PetsPage"]]
    })
], PetsPageModule);



/***/ }),

/***/ "./src/app/tab2details/pets/pets.page.scss":
/*!*************************************************!*\
  !*** ./src/app/tab2details/pets/pets.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjJkZXRhaWxzL3BldHMvcGV0cy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tab2details/pets/pets.page.ts":
/*!***********************************************!*\
  !*** ./src/app/tab2details/pets/pets.page.ts ***!
  \***********************************************/
/*! exports provided: PetsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetsPage", function() { return PetsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PetsPage = class PetsPage {
    constructor() {
        this.emergencyItem = [
            {
                name: "FOOD/WATER",
                checked: false,
            },
            {
                name: "MEDICINES & MEDICAL RECORDS",
                checked: false,
            },
            {
                name: "FIRST AID",
                checked: false,
            },
            {
                name: "COLLAR WITH ID TAG, HARNESS OR LEASH",
                checked: false,
            },
            {
                name: "IMPORTANT INFORMATION",
                checked: false,
            },
            {
                name: "CRATE OR OTHER PET CARRIER",
                checked: false,
            },
            {
                name: "SANITATION",
                checked: false,
            },
            {
                name: "A PICTURE OF YOU AND YOUR PET TOGETHER",
                checked: false,
            },
            {
                name: "FAMILIAR ITEMS",
                checked: false,
            },
        ];
        // Called when application is first initialized, or when page is refreshed..
        console.log("constructor()... ");
        // If localStorage has not been initialized, then initialize it by setting them all to false.
        if (localStorage.length == 0) {
            // For each item in emergencyItem, set the "name" and "checked" in localStorage.
            for (var i = 0; i < this.emergencyItem.length; i++) {
                console.log("i: ", i, "localStorage: ", localStorage.key(i), this.emergencyItem[i].name);
                localStorage.setItem(this.emergencyItem[i].name, this.emergencyItem[i].checked.toString());
                console.log("localStorage: ", localStorage);
            }
        }
        console.log("Local Storage: " + localStorage.length);
    }
    ionViewWillEnter() {
        console.log("I just entered the pets page");
        // Load the emergencyItems from localStorage
        // Iterating through the localStorage to get the "true"/"false" boolean.
        for (var i = 0; i < this.emergencyItem.length; i++) {
            // When true, set emergency items to true. If false, set emergency items to false.
            this.emergencyItem[i].checked = JSON.parse(localStorage.getItem(this.emergencyItem[i].name));
        }
    }
    ionViewWillLeave() {
        // Set the emergencyItems into localStorage
        // The "checked" flags could have changed from "false". Need to set them if so.
        for (var i = 0; i < this.emergencyItem.length; i++) {
            localStorage.getItem(this.emergencyItem[i].name);
        }
        console.log("I just left the supplies page");
        console.log(localStorage);
    }
    onClick(emergencyItem) {
        // Clicking an emergencyItem changes the "checked" flag. Need to change it in storage.
        localStorage.setItem(emergencyItem.name, emergencyItem.checked);
        console.log(emergencyItem);
    }
};
PetsPage.ctorParameters = () => [];
PetsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-pets",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pets.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2details/pets/pets.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pets.page.scss */ "./src/app/tab2details/pets/pets.page.scss")).default]
    })
], PetsPage);



/***/ })

}]);
//# sourceMappingURL=tab2details-pets-pets-module-es2015.js.map