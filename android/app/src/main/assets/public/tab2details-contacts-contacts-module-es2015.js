(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2details-contacts-contacts-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2details/contactinfo/contactinfo.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2details/contactinfo/contactinfo.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  \n<ion-header>\n    <ion-toolbar>\n        <ion-row>\n            <ion-col>\n                <ion-nav-link [routerLink]=\"['/tabs/tab2/']\">BACK</ion-nav-link>\n            </ion-col>\n        </ion-row>\n        <ion-title>YOUR PLAN</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content padding>\n    <ion-item>\n        <ion-label position=\"floating\">Firstname:</ion-label>\n        <ion-input [(ngModel)]=\"firstname\" name=\"firstname\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"floating\">Lastname:</ion-label>\n        <ion-input [(ngModel)]=\"lastname\" name=\"lastname\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"floating\">Phone:</ion-label>\n        <ion-input [(ngModel)]=\"phone\" name=\"phone\" type=\"number\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"floating\">Address</ion-label>\n        <ion-input [(ngModel)]=\"address\" name=\"address\" type=\"text\"></ion-input>\n    </ion-item>\n        <ion-button (click)=\"addPerson()\">Add</ion-button>\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <ion-header>\n<ion-content>\n    <ion-item>\n        <ion-label position=\"floating\">Name</ion-label>\n        <ion-input type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"floating\">Relationship(Spouse, Parent, etc)</ion-label>\n        <ion-input type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"floating\">Phone</ion-label>\n        <ion-input type=\"number\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"floating\">Address</ion-label>\n        <ion-input type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"floating\">City</ion-label>\n        <ion-input type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"floating\">State</ion-label>\n        <ion-input type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"floating\">Zip Code</ion-label>\n        <ion-input type=\"Number\"></ion-input>\n    </ion-item>\n    <div>\n        <ion-button>Save</ion-button>\n    </div>\n</ion-content> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2details/contacts/contacts.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2details/contacts/contacts.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <ion-nav-link [routerLink]=\"['/tabs/tab2/']\">BACK</ion-nav-link>\n      </ion-col>\n    </ion-row>\n    <ion-title>YOUR PLAN</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card-header\n    style=\"\n      text-align: center;\n      background-color: #061e3d;\n      margin-top: 0.25em;\n      color: #ffffff;\n    \"\n    >CONTACT INFO</ion-card-header\n  >\n  <div *ngIf=\"contacts\">\n    <ion-card\n      *ngFor=\"let contact of contacts;\"\n      style=\"padding: 0.25em\"\n      id=\"contact-items\"\n    >\n      <ion-card-header>\n        <ion-card-title\n          >{{contact.firstName}} {{contact.lastName}}</ion-card-title\n        >\n        <!-- <ion-card-title>{{contact | json}}</ion-card-title> -->\n      </ion-card-header>\n\n      <ion-card-content style=\"font-size: 1.125rem\">\n        Phone Number: {{contact.phone}} <br />\n        Address: {{contact.address}}\n      </ion-card-content>\n      <!-- <ion-button (click)=\"EditContact($event)\" [attr.data-id]=\"contact.id\">Edit</ion-button> -->\n      <ion-button (click)=\"DeleteContact($event)\" [attr.data-id]=\"contact.id\"\n        >Delete</ion-button\n      >\n    </ion-card>\n  </div>\n\n  <ion-button [routerLink]=\"['/tabs/tab2/contacts/info']\"\n    >ADD NEW CONTACT</ion-button\n  >\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tab2details/contactinfo/contactinfo-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/tab2details/contactinfo/contactinfo-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ContactinfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactinfoPageRoutingModule", function() { return ContactinfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _contactinfo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactinfo.page */ "./src/app/tab2details/contactinfo/contactinfo.page.ts");




const routes = [
    {
        path: '',
        component: _contactinfo_page__WEBPACK_IMPORTED_MODULE_3__["ContactinfoPage"]
    },
];
let ContactinfoPageRoutingModule = class ContactinfoPageRoutingModule {
};
ContactinfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContactinfoPageRoutingModule);



/***/ }),

/***/ "./src/app/tab2details/contactinfo/contactinfo.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/tab2details/contactinfo/contactinfo.module.ts ***!
  \***************************************************************/
/*! exports provided: ContactinfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactinfoPageModule", function() { return ContactinfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _contactinfo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contactinfo-routing.module */ "./src/app/tab2details/contactinfo/contactinfo-routing.module.ts");
/* harmony import */ var _contactinfo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contactinfo.page */ "./src/app/tab2details/contactinfo/contactinfo.page.ts");







let ContactinfoPageModule = class ContactinfoPageModule {
};
ContactinfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _contactinfo_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactinfoPageRoutingModule"]
        ],
        declarations: [_contactinfo_page__WEBPACK_IMPORTED_MODULE_6__["ContactinfoPage"]]
    })
], ContactinfoPageModule);



/***/ }),

/***/ "./src/app/tab2details/contactinfo/contactinfo.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/tab2details/contactinfo/contactinfo.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjJkZXRhaWxzL2NvbnRhY3RpbmZvL2NvbnRhY3RpbmZvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/tab2details/contactinfo/contactinfo.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/tab2details/contactinfo/contactinfo.page.ts ***!
  \*************************************************************/
/*! exports provided: ContactinfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactinfoPage", function() { return ContactinfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let ContactinfoPage = class ContactinfoPage {
    constructor(router) {
        this.router = router;
        this.title = "local-storage-app";
        // # parses stringified array to a array
        this.contacts = JSON.parse(localStorage.getItem('CONTACTS')) || [];
        this.currentDisplayIndex = -1;
        this.id = null;
        this.firstname = "";
        this.lastname = "";
        this.phone = null;
        this.address = "";
    }
    addPerson() {
        event.preventDefault();
        this.id = this.contacts.length + 1;
        this.contacts.push({
            id: this.id,
            firstName: this.firstname,
            lastName: this.lastname,
            phone: this.phone,
            address: this.address,
        });
        localStorage.setItem('CONTACTS', JSON.stringify(this.contacts));
        console.log("LocalStorage: ", localStorage);
        this.router.navigate(["tabs/tab2/contacts"]);
    }
    ngOnInit() { }
};
ContactinfoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ContactinfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contactinfo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contactinfo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2details/contactinfo/contactinfo.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./contactinfo.page.scss */ "./src/app/tab2details/contactinfo/contactinfo.page.scss")).default]
    })
], ContactinfoPage);



/***/ }),

/***/ "./src/app/tab2details/contacts/contacts-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/tab2details/contacts/contacts-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ContactsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPageRoutingModule", function() { return ContactsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _contacts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacts.page */ "./src/app/tab2details/contacts/contacts.page.ts");




const routes = [
    {
        path: "",
        component: _contacts_page__WEBPACK_IMPORTED_MODULE_3__["ContactsPage"],
    },
    {
        path: "info",
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../contactinfo/contactinfo.module */ "./src/app/tab2details/contactinfo/contactinfo.module.ts")).then((m) => m.ContactinfoPageModule),
    },
];
let ContactsPageRoutingModule = class ContactsPageRoutingModule {
};
ContactsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContactsPageRoutingModule);



/***/ }),

/***/ "./src/app/tab2details/contacts/contacts.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/tab2details/contacts/contacts.module.ts ***!
  \*********************************************************/
/*! exports provided: ContactsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPageModule", function() { return ContactsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _contacts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contacts-routing.module */ "./src/app/tab2details/contacts/contacts-routing.module.ts");
/* harmony import */ var _contactinfo_contactinfo_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contactinfo/contactinfo.module */ "./src/app/tab2details/contactinfo/contactinfo.module.ts");
/* harmony import */ var _contacts_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contacts.page */ "./src/app/tab2details/contacts/contacts.page.ts");








let ContactsPageModule = class ContactsPageModule {
};
ContactsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _contacts_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactsPageRoutingModule"],
            _contactinfo_contactinfo_module__WEBPACK_IMPORTED_MODULE_6__["ContactinfoPageModule"],
        ],
        declarations: [_contacts_page__WEBPACK_IMPORTED_MODULE_7__["ContactsPage"]],
    })
], ContactsPageModule);



/***/ }),

/***/ "./src/app/tab2details/contacts/contacts.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/tab2details/contacts/contacts.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjJkZXRhaWxzL2NvbnRhY3RzL2NvbnRhY3RzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/tab2details/contacts/contacts.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/tab2details/contacts/contacts.page.ts ***!
  \*******************************************************/
/*! exports provided: ContactsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPage", function() { return ContactsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let ContactsPage = class ContactsPage {
    constructor(router) {
        this.router = router;
        this.contacts = [];
        this.id = 0;
        this.contacts = JSON.parse(localStorage.getItem('CONTACTS'));
    }
    ionViewWillEnter() {
        console.log("contact", this.contacts);
        // # If new contact is entered, before component mounts, refresh from local storage
        this.contacts = JSON.parse(localStorage.getItem('CONTACTS'));
        console.log("I just entered contacts page");
    }
    // EditContact() {
    //   // this.router.navigate(["tabs/tab2/contacts/info/${id}"]);
    //   // // var myArr = [];
    //   // let id = event.target.dataset.id; 
    //   // // If localStorage has not been initialized, then initialize it by setting them all to false.
    //   // for (var i = 0; i < this.contacts.length; i++) {
    //   //   // When true, set emergency items to true. If false, set emergency items to false.
    //   //   this.contacts[i].id = JSON.parse(
    //   //     localStorage.getItem("CONTACTS")
    //   //   );
    //   // }
    //   // console.log("Local Storage: " + localStorage.length);
    //   // todo: route to an "id" page?
    // }
    DeleteContact(event) {
        let id = event.target.dataset.id;
        let newArray = this.contacts.filter(card => card.id != id);
        localStorage.setItem("CONTACTS", JSON.stringify(newArray));
        window.location.reload();
    }
    ngOnDestroy() {
        console.log("The stack for tab two 'contacts' has been destroyed");
    }
};
ContactsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ContactsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-contacts",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contacts.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2details/contacts/contacts.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./contacts.page.scss */ "./src/app/tab2details/contacts/contacts.page.scss")).default]
    })
], ContactsPage);



/***/ })

}]);
//# sourceMappingURL=tab2details-contacts-contacts-module-es2015.js.map