(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["insuranceinfo-insuranceinfo-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2details/insuranceinfo/insuranceinfo.page.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2details/insuranceinfo/insuranceinfo.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab2detailsInsuranceinfoInsuranceinfoPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-row>\n            <ion-col>\n                <ion-nav-link [routerLink]=\"['/tabs/tab2/insurance']\">BACK</ion-nav-link>\n            </ion-col>\n        </ion-row>\n        <ion-title>Insurance Info</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-item>\n        <ion-label position=\"floating\">Name/Type</ion-label>\n        <ion-input [(ngModel)]=\"name\" name=\"name\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"floating\">Policy Number</ion-label>\n        <ion-input [(ngModel)]=\"policy\" name=\"policy\" type=\"number\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"floating\">Company</ion-label>\n        <ion-input [(ngModel)]=\"company\" name=\"company\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"floating\">Phone</ion-label>\n        <ion-input [(ngModel)]=\"phoneNum\" name=\"phoneNum\" type=\"number\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"floating\">Agent</ion-label>\n        <ion-input [(ngModel)]=\"agent\" name=\"agent\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-button  (click)=\"addInsurance()\">Save</ion-button>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/tab2details/insuranceinfo/insuranceinfo-routing.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/tab2details/insuranceinfo/insuranceinfo-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: InsuranceinfoPageRoutingModule */

    /***/
    function srcAppTab2detailsInsuranceinfoInsuranceinfoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InsuranceinfoPageRoutingModule", function () {
        return InsuranceinfoPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _insuranceinfo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./insuranceinfo.page */
      "./src/app/tab2details/insuranceinfo/insuranceinfo.page.ts");

      var routes = [{
        path: '',
        component: _insuranceinfo_page__WEBPACK_IMPORTED_MODULE_3__["InsuranceinfoPage"]
      }];

      var InsuranceinfoPageRoutingModule = function InsuranceinfoPageRoutingModule() {
        _classCallCheck(this, InsuranceinfoPageRoutingModule);
      };

      InsuranceinfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], InsuranceinfoPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab2details/insuranceinfo/insuranceinfo.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/tab2details/insuranceinfo/insuranceinfo.module.ts ***!
      \*******************************************************************/

    /*! exports provided: InsuranceinfoPageModule */

    /***/
    function srcAppTab2detailsInsuranceinfoInsuranceinfoModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InsuranceinfoPageModule", function () {
        return InsuranceinfoPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _insuranceinfo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./insuranceinfo-routing.module */
      "./src/app/tab2details/insuranceinfo/insuranceinfo-routing.module.ts");
      /* harmony import */


      var _insuranceinfo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./insuranceinfo.page */
      "./src/app/tab2details/insuranceinfo/insuranceinfo.page.ts");

      var InsuranceinfoPageModule = function InsuranceinfoPageModule() {
        _classCallCheck(this, InsuranceinfoPageModule);
      };

      InsuranceinfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _insuranceinfo_routing_module__WEBPACK_IMPORTED_MODULE_5__["InsuranceinfoPageRoutingModule"]],
        declarations: [_insuranceinfo_page__WEBPACK_IMPORTED_MODULE_6__["InsuranceinfoPage"]]
      })], InsuranceinfoPageModule);
      /***/
    },

    /***/
    "./src/app/tab2details/insuranceinfo/insuranceinfo.page.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/tab2details/insuranceinfo/insuranceinfo.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab2detailsInsuranceinfoInsuranceinfoPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjJkZXRhaWxzL2luc3VyYW5jZWluZm8vaW5zdXJhbmNlaW5mby5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/tab2details/insuranceinfo/insuranceinfo.page.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/tab2details/insuranceinfo/insuranceinfo.page.ts ***!
      \*****************************************************************/

    /*! exports provided: InsuranceinfoPage */

    /***/
    function srcAppTab2detailsInsuranceinfoInsuranceinfoPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InsuranceinfoPage", function () {
        return InsuranceinfoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var InsuranceinfoPage = /*#__PURE__*/function () {
        function InsuranceinfoPage(router) {
          _classCallCheck(this, InsuranceinfoPage);

          this.router = router;
          this.title = "local-storage-app"; // # parses stringified array to a array

          this.insurances = JSON.parse(localStorage.getItem('INSURANCES')) || [];
          this.currentDisplayIndex = -1;
          this.id = "";
          this.name = "";
          this.policy = null;
          this.company = "";
          this.phoneNum = null;
          this.agent = "";
          this.insurance = {
            id: this.id,
            Name: this.name,
            Policy: this.policy,
            Company: this.company,
            Phone: this.phoneNum,
            Agent: this.agent
          };
        }

        _createClass(InsuranceinfoPage, [{
          key: "addInsurance",
          value: function addInsurance() {
            event.preventDefault(); // this.person.id = "contact_" + JSON.stringify(this.contacts.length + 1);

            this.insurance.id = JSON.stringify(localStorage.length + 1);
            this.insurance.Name = this.name;
            this.insurance.Policy = this.policy;
            this.insurance.Company = this.company;
            this.insurance.Phone = this.phoneNum;
            this.insurance.Agent = this.agent;
            this.insurances.push({
              id: this.id,
              Name: this.name,
              Policy: this.policy,
              Company: this.company,
              Phone: this.phoneNum,
              Agent: this.agent
            });
            localStorage.setItem('INSURANCES', JSON.stringify(this.insurances)); // console.log(this.contacts);
            // this.navCtrl.navigateRoot("tabs/tab2/contacts");

            console.log("Local Storage length: " + localStorage.length);
            console.log("LocalStorage: ", localStorage); // console.log("this.person: ", this.person);

            var navigationExtras = {
              queryParams: {
                special: this.insurance
              }
            };
            this.router.navigate(["tabs/tab2/insurance"], navigationExtras);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return InsuranceinfoPage;
      }();

      InsuranceinfoPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      InsuranceinfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-insuranceinfo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./insuranceinfo.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2details/insuranceinfo/insuranceinfo.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./insuranceinfo.page.scss */
        "./src/app/tab2details/insuranceinfo/insuranceinfo.page.scss"))["default"]]
      })], InsuranceinfoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=insuranceinfo-insuranceinfo-module-es5.js.map