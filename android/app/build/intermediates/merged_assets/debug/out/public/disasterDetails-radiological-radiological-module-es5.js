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


      __webpack_exports__["default"] = "<ion-header [translucent]=\"false\">\n  <ion-toolbar id=\"toolbarColor\">\n    <ion-row>\n      <ion-col>\n          <ion-nav-link style=\"color: white;\" [routerLink]=\"['/disaster']\">BACK</ion-nav-link>\n      </ion-col>\n  </ion-row>\n      <ion-title style=\"font-size: 40px; font-weight: bolder; color: #fff;\">  <img src=\"assets/mema-seal.png\" height=\"35\"> MEMA</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col>\n      <ion-card-header class=\"disasterHeader\" style=\"text-align: center;\">RADIOLOGICAL SAFETY </ion-card-header>\n      <div class=\"line\"></div>\n    </ion-col>\n  </ion-row>\n\n\n\n\n<ion-content>\n  <ion-row>\n    <ion-col>\n      <ion-item >\n        <ion-text>Radiological Preparedness:<br />\n          <ion-text>\n            <p>When the sirens are sounded, the Emergency Alert System will be activated, and instructions given on how to respond as to whether or not they should take shelter or evacuate. </p>\n          </ion-text>\n          <ion-text>\n            <ul>\n              <li>REMEMBER – hearing a siren or tone alert does not mean evacuate. It simply means turn on your radio and listen for instructions.</li>\n              <li>Stay tuned to your radio, remain calm and follow instructions!</li>\n              <li>Appropriate emergency actions (shelter in place, evacuations) will be taken before there is any danger to the public’s health and safety </li>\n            </ul>\n          </ion-text>\n        </ion-text>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  \n  <img src=\"../../assets/radiologicalMap.png\" />\n  \n</ion-content>\n";
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


      __webpack_exports__["default"] = ".content-with-full-height {\n  --background:white ;\n}\n\n.disasterHeader {\n  font-size: 30px;\n  font-weight: bold;\n  color: #061e3d;\n}\n\n.line {\n  border-top: solid #061e3d 10px;\n  width: 120%;\n  margin-left: -10%;\n}\n\nli {\n  margin: 20px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzYXN0ZXJEZXRhaWxzL3JhZGlvbG9naWNhbC9yYWRpb2xvZ2ljYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0ksbUJBQUE7QUFESjs7QUFLQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFGSjs7QUFLQTtFQUNJLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBRko7O0FBS0E7RUFDSSxjQUFBO0FBRkoiLCJmaWxlIjoic3JjL2FwcC9kaXNhc3RlckRldGFpbHMvcmFkaW9sb2dpY2FsL3JhZGlvbG9naWNhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC13aXRoLWZ1bGwtaGVpZ2h0e1xuICAgIC8vIGhlaWdodDogMTAwJTtcbiAgICAvL21hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOndoaXRlIDtcblxuICB9XG5cbi5kaXNhc3RlckhlYWRlciB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjMDYxZTNkO1xufVxuXG4ubGluZSB7XG4gICAgYm9yZGVyLXRvcDpzb2xpZCAjMDYxZTNkIDEwcHg7XG4gICAgd2lkdGg6IDEyMCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMCU7XG4gIH1cbiAgXG5saSB7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG59Il19 */";
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