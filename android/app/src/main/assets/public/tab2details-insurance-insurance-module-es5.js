(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2details-insurance-insurance-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2details/insurance/insurance.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2details/insurance/insurance.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab2detailsInsuranceInsurancePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-row>\n            <ion-col>\n                <ion-nav-link [routerLink]=\"['/tabs/tab2/']\">BACK</ion-nav-link>\n            </ion-col>\n        </ion-row>\n        <ion-title>YOUR PLAN</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-card-header  style=\"text-align: center; background-color:#061e3d; margin-top: 0.25em; color: #ffffff;\">INSURANCE INFO</ion-card-header>\n    <div *ngIf=\"insurances\">\n      <ion-card *ngFor=\"let insurance of insurances;\" style=\"padding: 0.25em\">\n        <ion-card-header>\n          <ion-card-title\n            >{{insurance.Name}}</ion-card-title\n          >\n          <!-- <ion-card-title>{{contact | json}}</ion-card-title> -->\n        </ion-card-header>\n  \n        <ion-card-content style=\"font-size: 1.125rem\">\n          Policy #: {{insurance.policy}} <br />\n          Company: {{insurance.company}} <br />\n          Agent: {{insurance.agent}} <br />\n          Phone: {{insurance.phoneNum}} <br />\n        </ion-card-content>\n        <ion-button >Edit</ion-button>\n        <ion-button>Delete</ion-button>\n      </ion-card>\n    </div>\n    <ion-button [routerLink]=\"['/tabs/tab2/insurance/info']\">ADD NEW INSURANCE INFO</ion-button>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/tab2details/insurance/insurance-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/tab2details/insurance/insurance-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: InsurancePageRoutingModule */

    /***/
    function srcAppTab2detailsInsuranceInsuranceRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InsurancePageRoutingModule", function () {
        return InsurancePageRoutingModule;
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


      var _insurance_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./insurance.page */
      "./src/app/tab2details/insurance/insurance.page.ts");

      var routes = [{
        path: "",
        component: _insurance_page__WEBPACK_IMPORTED_MODULE_3__["InsurancePage"]
      }, {
        path: "info",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | insuranceinfo-insuranceinfo-module */
          "insuranceinfo-insuranceinfo-module").then(__webpack_require__.bind(null,
          /*! ../insuranceinfo/insuranceinfo.module */
          "./src/app/tab2details/insuranceinfo/insuranceinfo.module.ts")).then(function (m) {
            return m.InsuranceinfoPageModule;
          });
        }
      }];

      var InsurancePageRoutingModule = function InsurancePageRoutingModule() {
        _classCallCheck(this, InsurancePageRoutingModule);
      };

      InsurancePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], InsurancePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab2details/insurance/insurance.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/tab2details/insurance/insurance.module.ts ***!
      \***********************************************************/

    /*! exports provided: InsurancePageModule */

    /***/
    function srcAppTab2detailsInsuranceInsuranceModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InsurancePageModule", function () {
        return InsurancePageModule;
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


      var _insurance_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./insurance-routing.module */
      "./src/app/tab2details/insurance/insurance-routing.module.ts");
      /* harmony import */


      var _insurance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./insurance.page */
      "./src/app/tab2details/insurance/insurance.page.ts");

      var InsurancePageModule = function InsurancePageModule() {
        _classCallCheck(this, InsurancePageModule);
      };

      InsurancePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _insurance_routing_module__WEBPACK_IMPORTED_MODULE_5__["InsurancePageRoutingModule"]],
        declarations: [_insurance_page__WEBPACK_IMPORTED_MODULE_6__["InsurancePage"]]
      })], InsurancePageModule);
      /***/
    },

    /***/
    "./src/app/tab2details/insurance/insurance.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/tab2details/insurance/insurance.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab2detailsInsuranceInsurancePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjJkZXRhaWxzL2luc3VyYW5jZS9pbnN1cmFuY2UucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/tab2details/insurance/insurance.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/tab2details/insurance/insurance.page.ts ***!
      \*********************************************************/

    /*! exports provided: InsurancePage */

    /***/
    function srcAppTab2detailsInsuranceInsurancePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InsurancePage", function () {
        return InsurancePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var InsurancePage = /*#__PURE__*/function () {
        function InsurancePage() {
          _classCallCheck(this, InsurancePage);

          this.insurances = [];
        }

        _createClass(InsurancePage, [{
          key: "EditContact",
          value: function EditContact() {// todo: route to an "id" page?
          }
        }, {
          key: "DeleteContact",
          value: function DeleteContact() {// todo: filter local storage contacts array against ID
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            // # If new contact is entered, before component mounts, refresh from local storage
            this.insurances = JSON.parse(localStorage.getItem('INSURANCES'));
            console.log("I just entered contacts page");
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            console.log("The stack for tab two 'contacts' has been destroyed");
          }
        }]);

        return InsurancePage;
      }();

      InsurancePage.ctorParameters = function () {
        return [];
      };

      InsurancePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-insurance',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./insurance.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2details/insurance/insurance.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./insurance.page.scss */
        "./src/app/tab2details/insurance/insurance.page.scss"))["default"]]
      })], InsurancePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab2details-insurance-insurance-module-es5.js.map