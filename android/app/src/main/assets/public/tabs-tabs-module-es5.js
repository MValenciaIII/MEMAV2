(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTabsTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-tabs #tabs selectedIndex=\"1\">\n    <ion-tab-bar slot=\"bottom\">\n        <ion-tab-button (click)=\"tab1()\" tab=\"tab1\">\n            <!-- (click)=\"tab1()\" is a method similar to javascript's event listeners but in angular, it is called \"Event Binding\". Event allows you to allows you to listen for and respond to user actions such as keystrokes, mouse movements, clicks, and touches. We are using this method so when a user nagivates from one tab to another, tabs will automatically refresh to their respective root pages. The code that makes this work is in tabs.page.ts-->\n            <!-- <ion-icon name=\"triangle\"></ion-icon> -->\n            <img class=\"ion-text-left\" src=\"assets/mema-seal.png\" height=\"25\"> \n            <ion-label>Home</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button (click)=\"tab2()\" tab=\"tab2\">\n            <!-- <ion-icon name=\"ellipse\"></ion-icon> -->\n            <img src=\"../../assets/Homepage/Plan.png\" height=\"30\">\n            <ion-label>Plan</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button (click)=\"tab3()\" tab=\"tab3\">\n            <!-- <ion-icon name=\"square\"></ion-icon> -->\n            <img src=\"../../assets/Homepage/contactPhone.png\" height=\"30\">\n            <ion-label>Contact</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button (click)=\"tab4()\" tab=\"tab4\">\n            <!-- <ion-icon name=\"square\"></ion-icon> -->\n            <img src=\"../../assets/Homepage/Shelters.png\" height=\"30\">\n            <ion-label>Shelters</ion-label>\n        </ion-tab-button>\n        \n        <ion-tab-button (click)=\"tab5()\" tab=\"tab5\">\n            <!-- <ion-icon name=\"square\"></ion-icon> -->\n            <img src=\"../../assets/Homepage/ReportDamage.png\" height=\"30\">\n            <ion-label>Report</ion-label>\n        </ion-tab-button>\n    </ion-tab-bar>\n</ion-tabs>";
      /***/
    },

    /***/
    "./src/app/tabs/tabs-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tabs/tabs-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: TabsPageRoutingModule */

    /***/
    function srcAppTabsTabsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
        return TabsPageRoutingModule;
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


      var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tabs.page */
      "./src/app/tabs/tabs.page.ts");

      var routes = [{
        path: "tabs",
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [{
          path: "tab1",
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | tab1-tab1-module */
            [__webpack_require__.e("common"), __webpack_require__.e("tab1-tab1-module")]).then(__webpack_require__.bind(null,
            /*! ../tab1/tab1.module */
            "./src/app/tab1/tab1.module.ts")).then(function (m) {
              return m.Tab1PageModule;
            });
          }
        }, {
          path: "tab2",
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | tab2-tab2-module */
            [__webpack_require__.e("common"), __webpack_require__.e("tab2-tab2-module")]).then(__webpack_require__.bind(null,
            /*! ../tab2/tab2.module */
            "./src/app/tab2/tab2.module.ts")).then(function (m) {
              return m.Tab2PageModule;
            });
          }
        }, {
          path: "tab3",
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | tab3-tab3-module */
            [__webpack_require__.e("common"), __webpack_require__.e("tab3-tab3-module")]).then(__webpack_require__.bind(null,
            /*! ../tab3/tab3.module */
            "./src/app/tab3/tab3.module.ts")).then(function (m) {
              return m.Tab3PageModule;
            });
          }
        }, {
          path: "tab4",
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | tab4-tab4-module */
            "tab4-tab4-module").then(__webpack_require__.bind(null,
            /*! ../tab4/tab4.module */
            "./src/app/tab4/tab4.module.ts")).then(function (m) {
              return m.Tab4PageModule;
            });
          }
        }, {
          path: "tab5",
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | tab5-tab5-module */
            "tab5-tab5-module").then(__webpack_require__.bind(null,
            /*! ../tab5/tab5.module */
            "./src/app/tab5/tab5.module.ts")).then(function (m) {
              return m.Tab5PageModule;
            });
          }
        }, {
          path: "",
          redirectTo: "/tabs/tab1",
          pathMatch: "full"
        }]
      }, {
        path: "",
        redirectTo: "/tabs/tab1",
        pathMatch: "full"
      }];

      var TabsPageRoutingModule = function TabsPageRoutingModule() {
        _classCallCheck(this, TabsPageRoutingModule);
      };

      TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TabsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tabs/tabs.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tabs/tabs.module.ts ***!
      \*************************************/

    /*! exports provided: TabsPageModule */

    /***/
    function srcAppTabsTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
        return TabsPageModule;
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


      var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tabs-routing.module */
      "./src/app/tabs/tabs-routing.module.ts");
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tabs.page */
      "./src/app/tabs/tabs.page.ts");

      var TabsPageModule = function TabsPageModule() {
        _classCallCheck(this, TabsPageModule);
      };

      TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
      })], TabsPageModule);
      /***/
    },

    /***/
    "./src/app/tabs/tabs.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tabs/tabs.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTabsTabsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/tabs/tabs.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tabs/tabs.page.ts ***!
      \***********************************/

    /*! exports provided: TabsPage */

    /***/
    function srcAppTabsTabsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
        return TabsPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js"); // imported Nav Controller. It is the basic navigation for tabs or navs.


      var TabsPage = /*#__PURE__*/function () {
        function TabsPage(navCtrl) {
          _classCallCheck(this, TabsPage);

          this.navCtrl = navCtrl;
        }

        _createClass(TabsPage, [{
          key: "tab1",
          value: function tab1() {
            this.navCtrl.navigateRoot("tabs/tab1"); //In tab 1, which is the home time, the site is in an iframe, so route is will be under tabs/tab1, no matter where you navgivate on the site.
          }
        }, {
          key: "tab2",
          value: function tab2() {
            this.navCtrl.navigateRoot("tabs/tab2"); //In Ionic 4/5 relies on angular routing, and navigateRoot is one of the methods used to assist Ionic with dealing with different routing navagations within a tab. The line above, from my understanding sets "tabs/tab2" as the main ROOTpage of this particular time. So when a user navigates back and forth within tabs, it automatically reloads to main root page.
          }
        }, {
          key: "tab3",
          value: function tab3() {
            this.navCtrl.navigateRoot("tabs/tab3");
          }
        }, {
          key: "tab4",
          value: function tab4() {
            this.navCtrl.navigateRoot("tabs/tab4");
          }
        }, {
          key: "tab5",
          value: function tab5() {
            this.navCtrl.navigateRoot("tabs/tab5");
          }
        }]);

        return TabsPage;
      }();

      TabsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }];
      };

      TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-tabs",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tabs.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tabs.page.scss */
        "./src/app/tabs/tabs.page.scss"))["default"]]
      })], TabsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tabs-tabs-module-es5.js.map