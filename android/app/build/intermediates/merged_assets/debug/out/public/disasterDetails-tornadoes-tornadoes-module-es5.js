(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["disasterDetails-tornadoes-tornadoes-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/disasterDetails/tornadoes/tornadoes.page.html":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/disasterDetails/tornadoes/tornadoes.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDisasterDetailsTornadoesTornadoesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"false\">\n  <ion-toolbar id=\"toolbarColor\">\n    <ion-row>\n      <ion-col>\n          <ion-nav-link style=\"color: white;\" [routerLink]=\"['/disaster']\">BACK</ion-nav-link>\n      </ion-col>\n  </ion-row>\n      <ion-title style=\"font-size: 40px; font-weight: bolder; color: #fff;\">  <img src=\"assets/mema-seal.png\" height=\"35\"> MEMA</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col>\n      <ion-card-header class=\"disasterHeader\" style=\"text-align: center;\">TORNADO SAFETY </ion-card-header>\n      <div class=\"line\"></div>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-item *ngFor=\"let homeTopics of homeTopic\">\n        <ion-text>{{homeTopics.title}} <br />\n          <ion-text>\n            <li>{{homeTopics.name}}</li>\n          </ion-text>\n  \n        </ion-text>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n\n      <ion-item *ngFor=\"let mHomeTopics of mHomeTopic\">\n        <ion-text>{{mHomeTopics.title}} <br />\n          <ion-text>\n            <li>{{mHomeTopics.name}}</li>\n          </ion-text>\n  \n        </ion-text>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <ion-item *ngFor=\"let worksTopics of workTopic\">\n        <ion-text>{{worksTopics.title}} <br />\n          <ion-text>\n            <li>{{worksTopics.name}}</li>\n          </ion-text>\n  \n        </ion-text>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <ion-item *ngFor=\"let outsideTopics of outsideTopic\">\n        <ion-text>{{outsideTopics.title}} <br />\n          <ion-text>\n            <li>{{outsideTopics.name}}</li>\n          </ion-text>\n  \n        </ion-text>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/disasterDetails/tornadoes/tornadoes-routing.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/disasterDetails/tornadoes/tornadoes-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: TornadoesPageRoutingModule */

    /***/
    function srcAppDisasterDetailsTornadoesTornadoesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TornadoesPageRoutingModule", function () {
        return TornadoesPageRoutingModule;
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


      var _tornadoes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tornadoes.page */
      "./src/app/disasterDetails/tornadoes/tornadoes.page.ts");

      var routes = [{
        path: '',
        component: _tornadoes_page__WEBPACK_IMPORTED_MODULE_3__["TornadoesPage"]
      }];

      var TornadoesPageRoutingModule = function TornadoesPageRoutingModule() {
        _classCallCheck(this, TornadoesPageRoutingModule);
      };

      TornadoesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TornadoesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/disasterDetails/tornadoes/tornadoes.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/disasterDetails/tornadoes/tornadoes.module.ts ***!
      \***************************************************************/

    /*! exports provided: TornadoesPageModule */

    /***/
    function srcAppDisasterDetailsTornadoesTornadoesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TornadoesPageModule", function () {
        return TornadoesPageModule;
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


      var _tornadoes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tornadoes-routing.module */
      "./src/app/disasterDetails/tornadoes/tornadoes-routing.module.ts");
      /* harmony import */


      var _tornadoes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tornadoes.page */
      "./src/app/disasterDetails/tornadoes/tornadoes.page.ts");

      var TornadoesPageModule = function TornadoesPageModule() {
        _classCallCheck(this, TornadoesPageModule);
      };

      TornadoesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tornadoes_routing_module__WEBPACK_IMPORTED_MODULE_5__["TornadoesPageRoutingModule"]],
        declarations: [_tornadoes_page__WEBPACK_IMPORTED_MODULE_6__["TornadoesPage"]]
      })], TornadoesPageModule);
      /***/
    },

    /***/
    "./src/app/disasterDetails/tornadoes/tornadoes.page.scss":
    /*!***************************************************************!*\
      !*** ./src/app/disasterDetails/tornadoes/tornadoes.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppDisasterDetailsTornadoesTornadoesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content-with-full-height {\n  --background:white ;\n}\n\n.disasterHeader {\n  font-size: 30px;\n  font-weight: bold;\n  color: #061e3d;\n}\n\n.line {\n  border-top: solid #061e3d 10px;\n  width: 120%;\n  margin-left: -10%;\n}\n\nli {\n  margin: 20px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzYXN0ZXJEZXRhaWxzL3Rvcm5hZG9lcy90b3JuYWRvZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0ksbUJBQUE7QUFESjs7QUFLQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFGSjs7QUFLQTtFQUNJLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBRko7O0FBS0E7RUFDSSxjQUFBO0FBRkoiLCJmaWxlIjoic3JjL2FwcC9kaXNhc3RlckRldGFpbHMvdG9ybmFkb2VzL3Rvcm5hZG9lcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC13aXRoLWZ1bGwtaGVpZ2h0e1xuICAgIC8vIGhlaWdodDogMTAwJTtcbiAgICAvL21hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOndoaXRlIDtcblxuICB9XG5cbi5kaXNhc3RlckhlYWRlciB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjMDYxZTNkO1xufVxuXG4ubGluZSB7XG4gICAgYm9yZGVyLXRvcDpzb2xpZCAjMDYxZTNkIDEwcHg7XG4gICAgd2lkdGg6IDEyMCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMCU7XG4gIH1cbiAgXG5saSB7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/disasterDetails/tornadoes/tornadoes.page.ts":
    /*!*************************************************************!*\
      !*** ./src/app/disasterDetails/tornadoes/tornadoes.page.ts ***!
      \*************************************************************/

    /*! exports provided: TornadoesPage */

    /***/
    function srcAppDisasterDetailsTornadoesTornadoesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TornadoesPage", function () {
        return TornadoesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var TornadoesPage = /*#__PURE__*/function () {
        function TornadoesPage() {
          _classCallCheck(this, TornadoesPage);

          this.title = "";
          this.name = "";
          this.homeTopic = [{
            title: "YOU ARE IN YOUR HOME DURING A TORNADO:",
            name: "Go to the lowest level of the home, an inner hallway, or smaller inner room without windows, such as a closet or bathroom."
          }, {
            name: "Get away from windows and go to the center of the room. Avoid corners, because they tend to attract debris."
          }, {
            name: "Get under a sturdy piece of furniture, such as a workbench or heavy table."
          }];
          this.mHomeTopic = [{
            title: "IF YOU ARE IN A MOBILE HOME",
            name: "Evacuate the mobile home, even if it is equipped with tie-downs"
          }, {
            name: "Take shelter in a building with a strong foundation, or if one is not available, lie in a ditch or low-lying area a safe distance away from the mobile home."
          }];
          this.workTopic = [{
            title: "IF YOU ARE AT WORK OR SCHOOL:",
            name: "Go to the basement or to an inside hallway at the lowest level of the building."
          }, {
            name: "Avoid places with wide-span roofs, such as auditoriums, cafeterias, large hallways or shopping malls."
          }, {
            name: "Use your arms to protect your head and neck."
          }];
          this.outsideTopic = [{
            title: "IF OUTDOORS:",
            name: "If possible, get inside a sturdy building with a concrete foundation."
          }, {
            name: "If shelter is not available, or there is no time to get indoors, lie in a ditch or low-lying area or crouch near a strong building."
          }, {
            name: "Be aware of the potential for flooding."
          }];
        }

        _createClass(TornadoesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TornadoesPage;
      }();

      TornadoesPage.ctorParameters = function () {
        return [];
      };

      TornadoesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tornadoes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tornadoes.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/disasterDetails/tornadoes/tornadoes.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tornadoes.page.scss */
        "./src/app/disasterDetails/tornadoes/tornadoes.page.scss"))["default"]]
      })], TornadoesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=disasterDetails-tornadoes-tornadoes-module-es5.js.map