(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["disasterDetails-extreme-heat-extreme-heat-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/disasterDetails/extreme-heat/extreme-heat.page.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/disasterDetails/extreme-heat/extreme-heat.page.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDisasterDetailsExtremeHeatExtremeHeatPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>extremeHeat</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/disasterDetails/extreme-heat/extreme-heat-routing.module.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/disasterDetails/extreme-heat/extreme-heat-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: ExtremeHeatPageRoutingModule */

    /***/
    function srcAppDisasterDetailsExtremeHeatExtremeHeatRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExtremeHeatPageRoutingModule", function () {
        return ExtremeHeatPageRoutingModule;
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


      var _extreme_heat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./extreme-heat.page */
      "./src/app/disasterDetails/extreme-heat/extreme-heat.page.ts");

      var routes = [{
        path: '',
        component: _extreme_heat_page__WEBPACK_IMPORTED_MODULE_3__["ExtremeHeatPage"]
      }];

      var ExtremeHeatPageRoutingModule = function ExtremeHeatPageRoutingModule() {
        _classCallCheck(this, ExtremeHeatPageRoutingModule);
      };

      ExtremeHeatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ExtremeHeatPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/disasterDetails/extreme-heat/extreme-heat.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/disasterDetails/extreme-heat/extreme-heat.module.ts ***!
      \*********************************************************************/

    /*! exports provided: ExtremeHeatPageModule */

    /***/
    function srcAppDisasterDetailsExtremeHeatExtremeHeatModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExtremeHeatPageModule", function () {
        return ExtremeHeatPageModule;
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


      var _extreme_heat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./extreme-heat-routing.module */
      "./src/app/disasterDetails/extreme-heat/extreme-heat-routing.module.ts");
      /* harmony import */


      var _extreme_heat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./extreme-heat.page */
      "./src/app/disasterDetails/extreme-heat/extreme-heat.page.ts");

      var ExtremeHeatPageModule = function ExtremeHeatPageModule() {
        _classCallCheck(this, ExtremeHeatPageModule);
      };

      ExtremeHeatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _extreme_heat_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExtremeHeatPageRoutingModule"]],
        declarations: [_extreme_heat_page__WEBPACK_IMPORTED_MODULE_6__["ExtremeHeatPage"]]
      })], ExtremeHeatPageModule);
      /***/
    },

    /***/
    "./src/app/disasterDetails/extreme-heat/extreme-heat.page.scss":
    /*!*********************************************************************!*\
      !*** ./src/app/disasterDetails/extreme-heat/extreme-heat.page.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppDisasterDetailsExtremeHeatExtremeHeatPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc2FzdGVyRGV0YWlscy9leHRyZW1lLWhlYXQvZXh0cmVtZS1oZWF0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/disasterDetails/extreme-heat/extreme-heat.page.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/disasterDetails/extreme-heat/extreme-heat.page.ts ***!
      \*******************************************************************/

    /*! exports provided: ExtremeHeatPage */

    /***/
    function srcAppDisasterDetailsExtremeHeatExtremeHeatPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExtremeHeatPage", function () {
        return ExtremeHeatPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ExtremeHeatPage = /*#__PURE__*/function () {
        function ExtremeHeatPage() {
          _classCallCheck(this, ExtremeHeatPage);
        }

        _createClass(ExtremeHeatPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ExtremeHeatPage;
      }();

      ExtremeHeatPage.ctorParameters = function () {
        return [];
      };

      ExtremeHeatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-extreme-heat',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./extreme-heat.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/disasterDetails/extreme-heat/extreme-heat.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./extreme-heat.page.scss */
        "./src/app/disasterDetails/extreme-heat/extreme-heat.page.scss"))["default"]]
      })], ExtremeHeatPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=disasterDetails-extreme-heat-extreme-heat-module-es5.js.map