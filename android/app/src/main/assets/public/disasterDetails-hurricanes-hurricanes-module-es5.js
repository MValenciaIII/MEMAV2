(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["disasterDetails-hurricanes-hurricanes-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/disasterDetails/hurricanes/hurricanes.page.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/disasterDetails/hurricanes/hurricanes.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDisasterDetailsHurricanesHurricanesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"false\">\n  <ion-toolbar id=\"toolbarColor\">\n    <ion-row>\n      <ion-col>\n          <ion-nav-link style=\"color: white;\" [routerLink]=\"['/disaster']\">BACK</ion-nav-link>\n      </ion-col>\n  </ion-row>\n      <ion-title style=\"font-size: 40px; font-weight: bolder; color: #fff;\">  <img src=\"assets/mema-seal.png\" height=\"35\"> MEMA</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col>\n      <ion-card-header class=\"disasterHeader\" style=\"text-align: center;\">HURRICANE SAFETY </ion-card-header>\n      <div class=\"line\"></div>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-item *ngFor=\"let homeTopics of homeTopic\">\n        <ion-text>{{homeTopics.title}} <br />\n          <ion-text>\n            <ul>\n              <li>\n                {{homeTopics.name}}\n              </li>\n            </ul>\n          </ion-text>\n  \n        </ion-text>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n\n      <ion-item *ngFor=\"let mHomeTopics of mHomeTopic\">\n        <ion-text>{{mHomeTopics.title}} <br />\n          <ion-text>\n            <li>{{mHomeTopics.name}}</li>\n          </ion-text>\n  \n        </ion-text>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <ion-item *ngFor=\"let worksTopics of workTopic\">\n        <ion-text>{{worksTopics.title}} <br />\n          <ion-text>\n            <li>{{worksTopics.name}}</li>\n          </ion-text>\n  \n        </ion-text>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <ion-item *ngFor=\"let outsideTopics of outsideTopic\">\n        <ion-text>{{outsideTopics.title}} <br />\n          <ion-text>\n            <li>{{outsideTopics.name}}</li>\n          </ion-text>\n  \n        </ion-text>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/disasterDetails/hurricanes/hurricanes-routing.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/disasterDetails/hurricanes/hurricanes-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: HurricanesPageRoutingModule */

    /***/
    function srcAppDisasterDetailsHurricanesHurricanesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HurricanesPageRoutingModule", function () {
        return HurricanesPageRoutingModule;
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


      var _hurricanes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./hurricanes.page */
      "./src/app/disasterDetails/hurricanes/hurricanes.page.ts");

      var routes = [{
        path: '',
        component: _hurricanes_page__WEBPACK_IMPORTED_MODULE_3__["HurricanesPage"]
      }];

      var HurricanesPageRoutingModule = function HurricanesPageRoutingModule() {
        _classCallCheck(this, HurricanesPageRoutingModule);
      };

      HurricanesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HurricanesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/disasterDetails/hurricanes/hurricanes.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/disasterDetails/hurricanes/hurricanes.module.ts ***!
      \*****************************************************************/

    /*! exports provided: HurricanesPageModule */

    /***/
    function srcAppDisasterDetailsHurricanesHurricanesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HurricanesPageModule", function () {
        return HurricanesPageModule;
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


      var _hurricanes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./hurricanes-routing.module */
      "./src/app/disasterDetails/hurricanes/hurricanes-routing.module.ts");
      /* harmony import */


      var _hurricanes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./hurricanes.page */
      "./src/app/disasterDetails/hurricanes/hurricanes.page.ts");

      var HurricanesPageModule = function HurricanesPageModule() {
        _classCallCheck(this, HurricanesPageModule);
      };

      HurricanesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _hurricanes_routing_module__WEBPACK_IMPORTED_MODULE_5__["HurricanesPageRoutingModule"]],
        declarations: [_hurricanes_page__WEBPACK_IMPORTED_MODULE_6__["HurricanesPage"]]
      })], HurricanesPageModule);
      /***/
    },

    /***/
    "./src/app/disasterDetails/hurricanes/hurricanes.page.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/disasterDetails/hurricanes/hurricanes.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppDisasterDetailsHurricanesHurricanesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content-with-full-height {\n  --background:white ;\n}\n\n.disasterHeader {\n  font-size: 30px;\n  font-weight: bold;\n  color: #061e3d;\n}\n\n.line {\n  border-top: solid #061e3d 10px;\n  width: 120%;\n  margin-left: -10%;\n}\n\nli {\n  margin: 20px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzYXN0ZXJEZXRhaWxzL2h1cnJpY2FuZXMvaHVycmljYW5lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSxtQkFBQTtBQURKOztBQUtBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUZKOztBQUtBO0VBQ0ksOEJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFGSjs7QUFLQTtFQUNJLGNBQUE7QUFGSiIsImZpbGUiOiJzcmMvYXBwL2Rpc2FzdGVyRGV0YWlscy9odXJyaWNhbmVzL2h1cnJpY2FuZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtd2l0aC1mdWxsLWhlaWdodHtcbiAgICAvLyBoZWlnaHQ6IDEwMCU7XG4gICAgLy9tYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIC0tYmFja2dyb3VuZDp3aGl0ZSA7XG5cbiAgfVxuXG4uZGlzYXN0ZXJIZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzA2MWUzZDtcbn1cblxuLmxpbmUge1xuICAgIGJvcmRlci10b3A6c29saWQgIzA2MWUzZCAxMHB4O1xuICAgIHdpZHRoOiAxMjAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTAlO1xuICB9XG4gIFxubGkge1xuICAgIG1hcmdpbjogMjBweCAwO1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/disasterDetails/hurricanes/hurricanes.page.ts":
    /*!***************************************************************!*\
      !*** ./src/app/disasterDetails/hurricanes/hurricanes.page.ts ***!
      \***************************************************************/

    /*! exports provided: HurricanesPage */

    /***/
    function srcAppDisasterDetailsHurricanesHurricanesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HurricanesPage", function () {
        return HurricanesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var HurricanesPage = /*#__PURE__*/function () {
        function HurricanesPage() {
          _classCallCheck(this, HurricanesPage);

          this.title = "";
          this.name = "";
          this.homeTopic = [{
            title: "YOU ARE IN YOUR HOME DURING A TORNADO:",
            name: "Pack a disaster supply kit "
          }, {
            name: "Establish a primary evacuation route and know where you will seek shelter"
          }, {
            name: "Create a contact list that includes at least one contact outside the potential impact area"
          }, {
            name: "Trim trees, cover windows and secure loose outdoor items ahead of the storm to protect your home"
          }, {
            name: "Sign up to receive weather warnings and emergency alerts"
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

        _createClass(HurricanesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HurricanesPage;
      }();

      HurricanesPage.ctorParameters = function () {
        return [];
      };

      HurricanesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hurricanes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./hurricanes.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/disasterDetails/hurricanes/hurricanes.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./hurricanes.page.scss */
        "./src/app/disasterDetails/hurricanes/hurricanes.page.scss"))["default"]]
      })], HurricanesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=disasterDetails-hurricanes-hurricanes-module-es5.js.map