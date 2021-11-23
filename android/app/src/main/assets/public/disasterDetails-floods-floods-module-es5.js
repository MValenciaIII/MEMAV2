(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["disasterDetails-floods-floods-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/disasterDetails/floods/floods.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/disasterDetails/floods/floods.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDisasterDetailsFloodsFloodsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"false\">\n  <ion-toolbar id=\"toolbarColor\">\n    <ion-row>\n      <ion-col>\n          <ion-nav-link style=\"color: white;\" [routerLink]=\"['/disaster']\">BACK</ion-nav-link>\n      </ion-col>\n  </ion-row>\n      <ion-title style=\"font-size: 40px; font-weight: bolder; color: #fff;\">  <img src=\"assets/mema-seal.png\" height=\"35\"> MEMA</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col>\n      <ion-card-header class=\"disasterHeader\" style=\"text-align: center;\">FLOOD SAFETY </ion-card-header>\n      <div class=\"line\"></div>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row>\n    <ion-col>\n      <ion-item >\n        <ion-text>Preparing Before:<br />\n          <ion-text>\n            <ul>\n              <li>Learn about your area's flood risk</li>\n              <li>If you live in a flood-prone area, purchase flood insurance</li>\n              <ul>\n                <li>Flood insurance is NOT included in yourhomeowner's insurance policy</li>\n              </ul>\n              <li>Take photos of all important possessions</li>\n              <li>Store important documents in a waterproof container</li>\n              <li>Sign up to receive weather warnings and emergency alerts</li>\n              <li>Determine a safe place to go if you must evacuate</li>\n            </ul>\n          </ion-text>\n        </ion-text>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n\n      <ion-item>\n        <ion-text>Staying Safe During: <br />\n          <ion-text>\n            <li>Heed evacuation warnings from local officials</li>\n            <li>Stay updated with the latest weather forecast</li>\n            <li>DO NOT drive, walk or swim through floodwaters</li>\n            <li>Never drive around barricades</li>\n            <li>If trapped in a building, move to the highest level, but do not seek shelter in a closed attic</li>\n          </ion-text>\n  \n        </ion-text>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <ion-item >\n        <ion-text>Recovering After: <br />\n          <ion-text>\n            <li>If you evacuated, make sure it is safe to return home</li>\n            <li>Take photos of your home and damaged items</li>\n            <li>File a flood insurance claim</li>\n            <li>Report damage through MEMA’s self-report tool</li>\n            <li>Prevent mold growth by removing wet contents immediately</li>\n            <li>Dry out the building’s interior using dehumidifiers</li>\n          </ion-text>\n  \n        </ion-text>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/disasterDetails/floods/floods-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/disasterDetails/floods/floods-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: FloodsPageRoutingModule */

    /***/
    function srcAppDisasterDetailsFloodsFloodsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FloodsPageRoutingModule", function () {
        return FloodsPageRoutingModule;
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


      var _floods_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./floods.page */
      "./src/app/disasterDetails/floods/floods.page.ts");

      var routes = [{
        path: '',
        component: _floods_page__WEBPACK_IMPORTED_MODULE_3__["FloodsPage"]
      }];

      var FloodsPageRoutingModule = function FloodsPageRoutingModule() {
        _classCallCheck(this, FloodsPageRoutingModule);
      };

      FloodsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FloodsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/disasterDetails/floods/floods.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/disasterDetails/floods/floods.module.ts ***!
      \*********************************************************/

    /*! exports provided: FloodsPageModule */

    /***/
    function srcAppDisasterDetailsFloodsFloodsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FloodsPageModule", function () {
        return FloodsPageModule;
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


      var _floods_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./floods-routing.module */
      "./src/app/disasterDetails/floods/floods-routing.module.ts");
      /* harmony import */


      var _floods_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./floods.page */
      "./src/app/disasterDetails/floods/floods.page.ts");

      var FloodsPageModule = function FloodsPageModule() {
        _classCallCheck(this, FloodsPageModule);
      };

      FloodsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _floods_routing_module__WEBPACK_IMPORTED_MODULE_5__["FloodsPageRoutingModule"]],
        declarations: [_floods_page__WEBPACK_IMPORTED_MODULE_6__["FloodsPage"]]
      })], FloodsPageModule);
      /***/
    },

    /***/
    "./src/app/disasterDetails/floods/floods.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/disasterDetails/floods/floods.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppDisasterDetailsFloodsFloodsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content-with-full-height {\n  --background:white ;\n}\n\n.disasterHeader {\n  font-size: 30px;\n  font-weight: bold;\n  color: #061e3d;\n}\n\n.line {\n  border-top: solid #061e3d 10px;\n  width: 120%;\n  margin-left: -10%;\n}\n\nli {\n  margin: 20px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzYXN0ZXJEZXRhaWxzL2Zsb29kcy9mbG9vZHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0ksbUJBQUE7QUFESjs7QUFLQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFGSjs7QUFLQTtFQUNJLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBRko7O0FBS0E7RUFDSSxjQUFBO0FBRkoiLCJmaWxlIjoic3JjL2FwcC9kaXNhc3RlckRldGFpbHMvZmxvb2RzL2Zsb29kcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC13aXRoLWZ1bGwtaGVpZ2h0e1xuICAgIC8vIGhlaWdodDogMTAwJTtcbiAgICAvL21hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOndoaXRlIDtcblxuICB9XG5cbi5kaXNhc3RlckhlYWRlciB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjMDYxZTNkO1xufVxuXG4ubGluZSB7XG4gICAgYm9yZGVyLXRvcDpzb2xpZCAjMDYxZTNkIDEwcHg7XG4gICAgd2lkdGg6IDEyMCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMCU7XG4gIH1cbiAgXG5saSB7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/disasterDetails/floods/floods.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/disasterDetails/floods/floods.page.ts ***!
      \*******************************************************/

    /*! exports provided: FloodsPage */

    /***/
    function srcAppDisasterDetailsFloodsFloodsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FloodsPage", function () {
        return FloodsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var FloodsPage = /*#__PURE__*/function () {
        function FloodsPage() {
          _classCallCheck(this, FloodsPage);
        }

        _createClass(FloodsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FloodsPage;
      }();

      FloodsPage.ctorParameters = function () {
        return [];
      };

      FloodsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-floods',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./floods.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/disasterDetails/floods/floods.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./floods.page.scss */
        "./src/app/disasterDetails/floods/floods.page.scss"))["default"]]
      })], FloodsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=disasterDetails-floods-floods-module-es5.js.map