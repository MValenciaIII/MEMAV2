(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["disasterDetails-radiological-radiological-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/disasterDetails/radiological/radiological.page.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/disasterDetails/radiological/radiological.page.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDisasterDetailsRadiologicalRadiologicalPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>radiological</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/disasterDetails/radiological/radiological-routing.module.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/disasterDetails/radiological/radiological-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: RadiologicalPageRoutingModule */

    /***/
    function srcAppDisasterDetailsRadiologicalRadiologicalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadiologicalPageRoutingModule", function () {
        return RadiologicalPageRoutingModule;
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


      var _radiological_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./radiological.page */
      "./src/app/disasterDetails/radiological/radiological.page.ts");

      var routes = [{
        path: '',
        component: _radiological_page__WEBPACK_IMPORTED_MODULE_3__["RadiologicalPage"]
      }];

      var RadiologicalPageRoutingModule = function RadiologicalPageRoutingModule() {
        _classCallCheck(this, RadiologicalPageRoutingModule);
      };

      RadiologicalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RadiologicalPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/disasterDetails/radiological/radiological.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/disasterDetails/radiological/radiological.module.ts ***!
      \*********************************************************************/

    /*! exports provided: RadiologicalPageModule */

    /***/
    function srcAppDisasterDetailsRadiologicalRadiologicalModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadiologicalPageModule", function () {
        return RadiologicalPageModule;
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


      var _radiological_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./radiological-routing.module */
      "./src/app/disasterDetails/radiological/radiological-routing.module.ts");
      /* harmony import */


      var _radiological_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./radiological.page */
      "./src/app/disasterDetails/radiological/radiological.page.ts");

      var RadiologicalPageModule = function RadiologicalPageModule() {
        _classCallCheck(this, RadiologicalPageModule);
      };

      RadiologicalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _radiological_routing_module__WEBPACK_IMPORTED_MODULE_5__["RadiologicalPageRoutingModule"]],
        declarations: [_radiological_page__WEBPACK_IMPORTED_MODULE_6__["RadiologicalPage"]]
      })], RadiologicalPageModule);
      /***/
    },

    /***/
    "./src/app/disasterDetails/radiological/radiological.page.scss":
    /*!*********************************************************************!*\
      !*** ./src/app/disasterDetails/radiological/radiological.page.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppDisasterDetailsRadiologicalRadiologicalPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc2FzdGVyRGV0YWlscy9yYWRpb2xvZ2ljYWwvcmFkaW9sb2dpY2FsLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/disasterDetails/radiological/radiological.page.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/disasterDetails/radiological/radiological.page.ts ***!
      \*******************************************************************/

    /*! exports provided: RadiologicalPage */

    /***/
    function srcAppDisasterDetailsRadiologicalRadiologicalPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadiologicalPage", function () {
        return RadiologicalPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var RadiologicalPage = /*#__PURE__*/function () {
        function RadiologicalPage() {
          _classCallCheck(this, RadiologicalPage);
        }

        _createClass(RadiologicalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RadiologicalPage;
      }();

      RadiologicalPage.ctorParameters = function () {
        return [];
      };

      RadiologicalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-radiological',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./radiological.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/disasterDetails/radiological/radiological.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./radiological.page.scss */
        "./src/app/disasterDetails/radiological/radiological.page.scss"))["default"]]
      })], RadiologicalPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=disasterDetails-radiological-radiological-module-es5.js.map