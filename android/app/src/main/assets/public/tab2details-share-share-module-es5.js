(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2details-share-share-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2details/share/share.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2details/share/share.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab2detailsShareSharePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-row>\n            <ion-col>\n                <ion-nav-link [routerLink]=\"['/tabs/tab2/']\">BACK</ion-nav-link>\n            </ion-col>\n        </ion-row>\n        <ion-title>YOUR PLAN</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card-content>\n        <ion-text>Email, Text, Print, or Save your plan as a PDF file.</ion-text>\n    </ion-card-content>\n    <ion-card-content>\n        <ion-button>Share</ion-button>\n    </ion-card-content>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/tab2details/share/share-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/tab2details/share/share-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: SharePageRoutingModule */

    /***/
    function srcAppTab2detailsShareShareRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharePageRoutingModule", function () {
        return SharePageRoutingModule;
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


      var _share_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./share.page */
      "./src/app/tab2details/share/share.page.ts");

      var routes = [{
        path: '',
        component: _share_page__WEBPACK_IMPORTED_MODULE_3__["SharePage"]
      }];

      var SharePageRoutingModule = function SharePageRoutingModule() {
        _classCallCheck(this, SharePageRoutingModule);
      };

      SharePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SharePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab2details/share/share.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/tab2details/share/share.module.ts ***!
      \***************************************************/

    /*! exports provided: SharePageModule */

    /***/
    function srcAppTab2detailsShareShareModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharePageModule", function () {
        return SharePageModule;
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


      var _share_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./share-routing.module */
      "./src/app/tab2details/share/share-routing.module.ts");
      /* harmony import */


      var _share_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./share.page */
      "./src/app/tab2details/share/share.page.ts");

      var SharePageModule = function SharePageModule() {
        _classCallCheck(this, SharePageModule);
      };

      SharePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _share_routing_module__WEBPACK_IMPORTED_MODULE_5__["SharePageRoutingModule"]],
        declarations: [_share_page__WEBPACK_IMPORTED_MODULE_6__["SharePage"]]
      })], SharePageModule);
      /***/
    },

    /***/
    "./src/app/tab2details/share/share.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/tab2details/share/share.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab2detailsShareSharePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjJkZXRhaWxzL3NoYXJlL3NoYXJlLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/tab2details/share/share.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/tab2details/share/share.page.ts ***!
      \*************************************************/

    /*! exports provided: SharePage */

    /***/
    function srcAppTab2detailsShareSharePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharePage", function () {
        return SharePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SharePage = /*#__PURE__*/function () {
        function SharePage() {
          _classCallCheck(this, SharePage);
        }

        _createClass(SharePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SharePage;
      }();

      SharePage.ctorParameters = function () {
        return [];
      };

      SharePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-share',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./share.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2details/share/share.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./share.page.scss */
        "./src/app/tab2details/share/share.page.scss"))["default"]]
      })], SharePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab2details-share-share-module-es5.js.map