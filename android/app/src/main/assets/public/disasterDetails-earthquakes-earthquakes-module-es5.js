(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["disasterDetails-earthquakes-earthquakes-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/disasterDetails/earthquakes/earthquakes.page.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/disasterDetails/earthquakes/earthquakes.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDisasterDetailsEarthquakesEarthquakesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>earthquakes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/disasterDetails/earthquakes/earthquakes-routing.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/disasterDetails/earthquakes/earthquakes-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: EarthquakesPageRoutingModule */

    /***/
    function srcAppDisasterDetailsEarthquakesEarthquakesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EarthquakesPageRoutingModule", function () {
        return EarthquakesPageRoutingModule;
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


      var _earthquakes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./earthquakes.page */
      "./src/app/disasterDetails/earthquakes/earthquakes.page.ts");

      var routes = [{
        path: '',
        component: _earthquakes_page__WEBPACK_IMPORTED_MODULE_3__["EarthquakesPage"]
      }];

      var EarthquakesPageRoutingModule = function EarthquakesPageRoutingModule() {
        _classCallCheck(this, EarthquakesPageRoutingModule);
      };

      EarthquakesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EarthquakesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/disasterDetails/earthquakes/earthquakes.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/disasterDetails/earthquakes/earthquakes.module.ts ***!
      \*******************************************************************/

    /*! exports provided: EarthquakesPageModule */

    /***/
    function srcAppDisasterDetailsEarthquakesEarthquakesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EarthquakesPageModule", function () {
        return EarthquakesPageModule;
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


      var _earthquakes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./earthquakes-routing.module */
      "./src/app/disasterDetails/earthquakes/earthquakes-routing.module.ts");
      /* harmony import */


      var _earthquakes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./earthquakes.page */
      "./src/app/disasterDetails/earthquakes/earthquakes.page.ts");

      var EarthquakesPageModule = function EarthquakesPageModule() {
        _classCallCheck(this, EarthquakesPageModule);
      };

      EarthquakesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _earthquakes_routing_module__WEBPACK_IMPORTED_MODULE_5__["EarthquakesPageRoutingModule"]],
        declarations: [_earthquakes_page__WEBPACK_IMPORTED_MODULE_6__["EarthquakesPage"]]
      })], EarthquakesPageModule);
      /***/
    },

    /***/
    "./src/app/disasterDetails/earthquakes/earthquakes.page.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/disasterDetails/earthquakes/earthquakes.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppDisasterDetailsEarthquakesEarthquakesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc2FzdGVyRGV0YWlscy9lYXJ0aHF1YWtlcy9lYXJ0aHF1YWtlcy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/disasterDetails/earthquakes/earthquakes.page.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/disasterDetails/earthquakes/earthquakes.page.ts ***!
      \*****************************************************************/

    /*! exports provided: EarthquakesPage */

    /***/
    function srcAppDisasterDetailsEarthquakesEarthquakesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EarthquakesPage", function () {
        return EarthquakesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var EarthquakesPage = /*#__PURE__*/function () {
        function EarthquakesPage() {
          _classCallCheck(this, EarthquakesPage);
        }

        _createClass(EarthquakesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return EarthquakesPage;
      }();

      EarthquakesPage.ctorParameters = function () {
        return [];
      };

      EarthquakesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-earthquakes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./earthquakes.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/disasterDetails/earthquakes/earthquakes.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./earthquakes.page.scss */
        "./src/app/disasterDetails/earthquakes/earthquakes.page.scss"))["default"]]
      })], EarthquakesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=disasterDetails-earthquakes-earthquakes-module-es5.js.map