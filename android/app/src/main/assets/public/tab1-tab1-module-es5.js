(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab1Tab1PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\" class = \"content-with-full-height \">\n\n\n<ion-card-header class=\"headerText \">\n    <div class=\"memaBuildingImg\"></div>\n    <ion-grid class=\"ionGridHeader\">\n        <ion-row>\n            <ion-col>\n                <a href=\"https://twitter.com/msema\">\n                    <ion-icon size=\"small\" name=\"logo-facebook\"></ion-icon>\n                </a>\n                <a href=\"https://www.facebook.com/msemaorg/\">\n                    <ion-icon size=\"small\" name=\"logo-twitter\"></ion-icon>\n                </a>\n                <a href=\"https://www.youtube.com/user/MSEMAorg1\">\n                    <ion-icon size=\"small\" ios=\"logo-youtube\" md=\"logo-youtube\"></ion-icon>\n                </a>\n                <img class=\" memaSeal\" src=\"assets/mema-seal.png\" > \n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <h1>MISSISSIPPI EMERGENCY MANAGEMENT AGENCY</h1>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-card-header>\n\n\n\n    <!-- <iframe height='100%' width=\"100%\" title=\"website\" src=\"https://www.msema.org/\"></iframe> -->\n\n\n\n\n    <ion-grid class=\"ionGridMain\">\n        <div class=\"iconGrid\"></div>\n        <ion-row class=\"buttonText ion-align-items-center\">\n            <ion-col class=\"ion-text-center\">  \n                <button [routerLink]=\"['/tabs/tab2']\" class=\"btn iconButton\" >\n                    <img class=\"imgDocs img-responsive\" src=\"../../assets/Homepage/Plan.png\" height=\"60\" alt=\"\">\n                </button>\n                <p>PLAN</p>\n            </ion-col>\n            \n            <ion-col class=\"ion-text-center\">\n                <button [routerLink]=\"['/tabs/tab4']\" class=\"btn iconButton\">\n                    <img  class=\"imgDocs \" src=\"../../assets/Homepage/Shelters.png\" height=\"60\" alt=\"\"> \n                </button>\n                <p>SHELTERS</p>\n            </ion-col>\n\n            <ion-col class=\"ion-text-center\">\n                <button [routerLink]=\"['/disaster']\" class=\"btn iconButton\">\n                    <img  class=\"imgDocs \" src=\"../../assets/disasterPage/tornado.png \" height=\"60\" alt=\"\">\n                </button>\n                <p>DISASTERS</p>\n            </ion-col>\n        </ion-row>\n        <ion-row class=\"buttonText ion-align-items-center\">\n            <ion-col class=\"ion-text-center\">\n                <button [routerLink]=\"['/tabs/tab3']\" class=\"btn iconButtonWeather\">       \n                    <img  class=\"imgDocs \" src=\"../../assets/Homepage/WeatherAlerts.png\" height=\"60\" alt=\"\">\n                </button>\n                <p>WEATHER ALERTS</p>\n            </ion-col>\n            \n            <ion-col class=\"ion-text-center\">\n                <button [routerLink]=\"['/tabs/tab5']\" class=\"btn iconButton \">\n                    <img class=\"imgDocs \" src=\"../../assets/Homepage/ReportDamage.png\" height=\"60\" alt=\"\"> \n                </button>\n                \n                <p>REPORT DAMAGE</p>\n            </ion-col>\n\n            <ion-col class=\"ion-text-center\">\n                <a href=\"https://poweroutage.us/area/state/mississippi\">\n                    <button  class=\"btn iconButton\">\n                        <img  class=\"imgDocs \" src=\"../../assets/Homepage/PowerOutages.png\" height=\"60\" alt=\"\"> \n                    </button>\n                </a>\n                <p>POWER OUTAGES</p>\n            </ion-col>\n        </ion-row>\n\n        <ion-row class=\"buttonText ion-align-items-center\">\n            <ion-col class=\"ion-text-center\">\n                <a href=\"https://www.msema.org/news/\">\n                    <button  class=\"btn iconButton\"> \n                        <img class=\"imgDocs \" src=\"../../assets/Homepage/News.png\" height=\"60\" alt=\"\">\n                    </button>\n                </a>\n                <p>NEWS</p>\n            </ion-col>\n            <ion-col class=\"ion-text-center\">\n               <a href=\"https://www.msema.org/contact/\">\n                    <button class=\"btn iconButton\">\n                        <img  class=\"imgDocs \" src=\"../../assets/Homepage/contactPhone.png\" height=\"60\" alt=\"\"> \n                    </button>\n                </a>\n                <p>CONTACT</p>\n            </ion-col>\n       \n            <ion-col class=\"ion-text-center\">\n                <a href=\"https://www.msema.org/\">\n                    <button [routerLink]=\"['/tabs/tab2/contacts']\" class=\"btn iconButton\">\n                        <img  class=\"imgDocs \" src=\"../../assets/Homepage/Website.png\" height=\"60\" alt=\"\"> \n                    </button>\n                </a>    \n                <p>WEBSITE</p>\n            </ion-col>\n        </ion-row>\n\n\n    </ion-grid>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/tab1/tab1-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tab1/tab1-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab1PageRoutingModule */

    /***/
    function srcAppTab1Tab1RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function () {
        return Tab1PageRoutingModule;
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


      var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab1.page */
      "./src/app/tab1/tab1.page.ts");

      var routes = [{
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"]
      }, {
        path: "disaster",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | disaster-disaster-module */
          "disaster-disaster-module").then(__webpack_require__.bind(null,
          /*! ../disaster/disaster.module */
          "./src/app/disaster/disaster.module.ts")).then(function (m) {
            return m.DisasterPageModule;
          });
        }
      }, {
        path: "",
        redirectTo: "tabs/tab1",
        pathMatch: "full"
      }];

      var Tab1PageRoutingModule = function Tab1PageRoutingModule() {
        _classCallCheck(this, Tab1PageRoutingModule);
      };

      Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab1PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab1/tab1.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.module.ts ***!
      \*************************************/

    /*! exports provided: Tab1PageModule */

    /***/
    function srcAppTab1Tab1ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
        return Tab1PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab1.page */
      "./src/app/tab1/tab1.page.ts");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "./src/app/explore-container/explore-container.module.ts");
      /* harmony import */


      var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tab1-routing.module */
      "./src/app/tab1/tab1-routing.module.ts");

      var Tab1PageModule = function Tab1PageModule() {
        _classCallCheck(this, Tab1PageModule);
      };

      Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
      })], Tab1PageModule);
      /***/
    },

    /***/
    "./src/app/tab1/tab1.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab1Tab1PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headerText {\n  text-align: center;\n  background: #061e3d;\n  position: relative;\n  opacity: 1;\n  z-index: 2;\n  padding: 0%;\n  margin: 0%;\n}\n\n.ionGridHeader {\n  padding-top: 15%;\n}\n\n.memaBuildingImg {\n  position: absolute;\n  background: url('memaBuildingHomeTab.jpg') 90% 90% padding-box no-repeat;\n  height: 100%;\n  width: 100%;\n  background-size: cover;\n  opacity: 0.25;\n  z-index: 0;\n  padding-top: 10%;\n}\n\n.headerText ion-icon {\n  color: #fff;\n  margin-right: 3%;\n  float: left;\n}\n\n.headerText img {\n  width: 25% !important;\n  height: auto !important;\n  float: left;\n  margin-left: 17%;\n}\n\n.headerText h1 {\n  text-align: center;\n  font-weight: bolder;\n  color: white;\n  font-size: 13px;\n}\n\n.ionGridMain {\n  position: relative;\n  opacity: 1;\n  z-index: 2;\n}\n\n.iconGrid {\n  position: absolute;\n  background: url('mema-seal.png') 50% 50% no-repeat;\n  background-size: contain;\n  height: 100%;\n  width: 100%;\n  opacity: 0.25;\n  z-index: 0;\n}\n\n.content-with-full-height {\n  --background:white ;\n}\n\n.equal-sized-item {\n  height: 10%;\n}\n\n.buttonText p {\n  margin: 18% 2%;\n  font-size: 18px;\n  font-weight: bolder;\n  color: #061e3d;\n}\n\n.iconButtonWeather {\n  padding: 20% 18%;\n  border-style: none;\n  border-radius: 100%;\n  background: #061e3d;\n  background-position: 50% center;\n  background-repeat: no-repeat;\n}\n\n.iconButton {\n  padding: 20% 28%;\n  border-style: none;\n  border-radius: 100%;\n  background: #061e3d;\n  background-position: 50% center;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFDSjs7QUFHQTtFQUNJLGdCQUFBO0FBQUo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLHdFQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFESjs7QUFJQTtFQUNJLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQURBOztBQUtBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQUZKOztBQUtBO0VBQ0ksa0JBQUE7RUFDQSxrREFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQUZKOztBQU1BO0VBR0ksbUJBQUE7QUFMSjs7QUFXQTtFQUNBLFdBQUE7QUFSQTs7QUFlQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBWkE7O0FBbUJBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0FBaEJKOztBQWtCQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtBQWZBIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJUZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogIzA2MWUzZCAgO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHotaW5kZXg6IDI7XG4gICAgcGFkZGluZzogMCU7XG4gICAgbWFyZ2luOiAwJTtcblxufVxuXG4uaW9uR3JpZEhlYWRlciB7XG4gICAgcGFkZGluZy10b3A6IDE1JTtcbn1cblxuXG4ubWVtYUJ1aWxkaW5nSW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9tZW1hQnVpbGRpbmdIb21lVGFiLmpwZykgOTAlIDkwJSBwYWRkaW5nLWJveCBuby1yZXBlYXQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgb3BhY2l0eTogLjI1O1xuICAgIHotaW5kZXg6IDA7XG4gICAgcGFkZGluZy10b3A6IDEwJTtcbn1cblxuLmhlYWRlclRleHQgaW9uLWljb24ge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi1yaWdodDogMyU7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5oZWFkZXJUZXh0IGltZ3tcbiAgICB3aWR0aDogMjUlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDE3JTtcbn1cblxuLmhlYWRlclRleHQgaDF7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5mb250LXdlaWdodDogYm9sZGVyO1xuY29sb3I6IHdoaXRlO1xuZm9udC1zaXplOiAxM3B4O1xufVxuXG5cbi5pb25HcmlkTWFpbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgei1pbmRleDogMjtcbn1cblxuLmljb25HcmlkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9tZW1hLXNlYWwucG5nKSA1MCUgNTAlIG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9wYWNpdHk6IC4yNTtcbiAgICB6LWluZGV4OiAwO1xufVxuXG5cbi5jb250ZW50LXdpdGgtZnVsbC1oZWlnaHR7XG4gICAgLy8gaGVpZ2h0OiAxMDAlO1xuICAgIC8vbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAtLWJhY2tncm91bmQ6d2hpdGUgO1xuXG4gIH1cblxuXG5cbi5lcXVhbC1zaXplZC1pdGVte1xuaGVpZ2h0OiAxMCVcbn1cblxuXG5cblxuXG4uYnV0dG9uVGV4dCBwIHtcbm1hcmdpbjogMTglIDIlO1xuZm9udC1zaXplOiAxOHB4O1xuZm9udC13ZWlnaHQ6IGJvbGRlcjtcbmNvbG9yOiAjMDYxZTNkO1xufVxuXG4vLyAuaW1nRG9jcyB7XG4vLyBoZWlnaHQ6IGF1dG87XG4vLyB3aWR0aDogYXV0bztcbi8vIH1cbi5pY29uQnV0dG9uV2VhdGhlciB7XG4gICAgcGFkZGluZzogMjAlIDE4JTtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjMDYxZTNkIDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7ICBcbn1cbi5pY29uQnV0dG9uIHtcbnBhZGRpbmc6IDIwJSAyOCU7XG5ib3JkZXItc3R5bGU6IG5vbmU7XG5ib3JkZXItcmFkaXVzOiAxMDAlO1xuYmFja2dyb3VuZDogIzA2MWUzZCA7XG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgY2VudGVyO1xuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblxufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/tab1/tab1.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tab1/tab1.page.ts ***!
      \***********************************/

    /*! exports provided: Tab1Page */

    /***/
    function srcAppTab1Tab1PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
        return Tab1Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var Tab1Page = /*#__PURE__*/function () {
        function Tab1Page() {
          _classCallCheck(this, Tab1Page);
        }

        _createClass(Tab1Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Tab1Page;
      }();

      Tab1Page.ctorParameters = function () {
        return [];
      };

      Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tab1.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tab1.page.scss */
        "./src/app/tab1/tab1.page.scss"))["default"]]
      })], Tab1Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab1-tab1-module-es5.js.map