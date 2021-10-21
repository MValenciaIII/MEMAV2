(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab2Tab2PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"false\">\n    <ion-toolbar id=\"toolbarColor\">\n        <ion-title style=\"font-size: 40px; font-weight: bolder; color: #fff;\">  <img src=\"assets/mema-seal.png\" height=\"35\"> MEMA</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content [fullscreen]=\"true\" class = \"content-with-full-height \"  padding>\n    <ion-card-header class=\"headerText \">\n        <h1>YOUR DISASTER PLAN</h1>\n        <div class=\"line\"></div>\n    </ion-card-header>\n\n\n    <ion-grid>\n        <div class=\"iconGrid\"></div>\n        <ion-row class=\"buttonText ion-align-items-center\">\n            <ion-col class=\"ion-text-center\">\n                \n                <button [routerLink]=\"['/tabs/tab2/supplies']\" class=\"btn iconButton\" >\n                    <img class=\"imgDocs\" src=\"../../assets/checklist.png\" alt=\"\">\n                </button>\n                <p>SUPPLIES CHECKLIST</p>\n            </ion-col>\n            \n            <ion-col class=\"ion-text-center\">\n                <button [routerLink]=\"['/tabs/tab2/contacts']\" class=\"btn iconButton\">\n                    <img  class=\"imgDocs \" src=\"../../assets/Contacts.png\" alt=\"\"> \n                </button>\n                <p>EMERGENCY CONTACTS</p>\n            </ion-col>\n        </ion-row>\n        \n        <ion-row class=\"buttonText ion-align-items-center\">\n            <ion-col class=\"ion-text-center\">\n                <button [routerLink]=\"['/tabs/tab2/misc']\" class=\"btn iconButton\">       \n                    <img  class=\"imgDocs \" src=\"../../assets/handicap.png\" alt=\"\">\n                </button>\n                <p>DISABILITY PLANNING</p>\n            </ion-col>\n            \n            <ion-col class=\"ion-text-center\">\n                <button [routerLink]=\"['/tabs/tab2/insurance']\" class=\"btn iconButton \">\n                    <img class=\"imgDocs \" src=\"../../assets/importantDocs.png\" alt=\"\"> \n                </button>\n                \n                <p>IMPORTANT DOCUMENTS</p>\n            </ion-col>\n        </ion-row>\n\n        <ion-row class=\"buttonText ion-align-items-center\">\n            <ion-col class=\"ion-text-center\">\n                <button [routerLink]=\"['/tabs/tab2/places']\" class=\"btn iconButton\"> \n                   <img class=\"imgDocs \" src=\"../../assets/meeting.png\" alt=\"\">\n                </button>\n                <p>MEETING PLACES</p>\n            </ion-col>\n            <ion-col class=\"ion-text-center\">\n                <button [routerLink]=\"['/tabs/tab2/pets']\" class=\"btn iconButton\">\n                    <img src=\"../../assets/Pet.png\" alt=\"\">\n                </button>\n                <p>PET CHECKLIST</p>\n            </ion-col>\n        </ion-row>\n\n\n    </ion-grid>\n\n\n\n\n\n\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2details/supplies/supplies.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2details/supplies/supplies.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab2detailsSuppliesSuppliesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-row>\n            <ion-col>\n                <ion-nav-link [routerLink]=\"['/tabs/tab2/']\">BACK</ion-nav-link>\n            </ion-col>\n        </ion-row>\n        <ion-title>YOUR PLAN</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card-header style=\"text-align: center; background-color:#061e3d; color: #ffffff;\">CHECKLIST</ion-card-header>\n    <ion-item *ngFor=\"let emergencyItems of emergencyItem\" (click)=\"onClick(emergencyItems)\">\n        <ion-label>{{emergencyItems.name}}</ion-label>\n        <ion-checkbox type=\"checkbox\" [(ngModel)]=\"emergencyItems.checked\" [checked]=\"emergencyItems.name\"></ion-checkbox>\n    </ion-item>\n    <!-- <ion-card-header>\n        <ion-title>Your Checklist</ion-title>\n    </ion-card-header>\n    <ion-input type=\"text\"></ion-input>\n    <ion-button style=\"align-content: center\">ADD</ion-button> -->\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/tab2/tab2-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tab2/tab2-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab2PageRoutingModule */

    /***/
    function srcAppTab2Tab2RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function () {
        return Tab2PageRoutingModule;
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


      var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab2.page */
      "./src/app/tab2/tab2.page.ts");

      var routes = [{
        path: "",
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"]
      }, {
        path: "supplies",
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ../tab2details/supplies/supplies.module */
          "./src/app/tab2details/supplies/supplies.module.ts")).then(function (m) {
            return m.SuppliesPageModule;
          });
        }
      }, {
        path: "contacts",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tab2details-contacts-contacts-module */
          "tab2details-contacts-contacts-module").then(__webpack_require__.bind(null,
          /*! ../tab2details/contacts/contacts.module */
          "./src/app/tab2details/contacts/contacts.module.ts")).then(function (m) {
            return m.ContactsPageModule;
          });
        }
      }, {
        path: "places",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tab2details-places-places-module */
          "tab2details-places-places-module").then(__webpack_require__.bind(null,
          /*! ../tab2details/places/places.module */
          "./src/app/tab2details/places/places.module.ts")).then(function (m) {
            return m.PlacesPageModule;
          });
        }
      }, {
        path: "insurance",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tab2details-insurance-insurance-module */
          "tab2details-insurance-insurance-module").then(__webpack_require__.bind(null,
          /*! ../tab2details/insurance/insurance.module */
          "./src/app/tab2details/insurance/insurance.module.ts")).then(function (m) {
            return m.InsurancePageModule;
          });
        }
      }, {
        path: "pets",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tab2details-pets-pets-module */
          "tab2details-pets-pets-module").then(__webpack_require__.bind(null,
          /*! ../tab2details/pets/pets.module */
          "./src/app/tab2details/pets/pets.module.ts")).then(function (m) {
            return m.PetsPageModule;
          });
        }
      }, {
        path: "misc",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tab2details-miscnumbers-miscnumbers-module */
          "tab2details-miscnumbers-miscnumbers-module").then(__webpack_require__.bind(null,
          /*! ../tab2details/miscnumbers/miscnumbers.module */
          "./src/app/tab2details/miscnumbers/miscnumbers.module.ts")).then(function (m) {
            return m.MiscnumbersPageModule;
          });
        }
      }, {
        path: "share",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tab2details-share-share-module */
          "tab2details-share-share-module").then(__webpack_require__.bind(null,
          /*! ../tab2details/share/share.module */
          "./src/app/tab2details/share/share.module.ts")).then(function (m) {
            return m.SharePageModule;
          });
        }
      }, {
        path: "",
        redirectTo: "/tabs/tab2",
        pathMatch: "full"
      }];

      var Tab2PageRoutingModule = function Tab2PageRoutingModule() {
        _classCallCheck(this, Tab2PageRoutingModule);
      };

      Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab2PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab2/tab2.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tab2/tab2.module.ts ***!
      \*************************************/

    /*! exports provided: Tab2PageModule */

    /***/
    function srcAppTab2Tab2ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function () {
        return Tab2PageModule;
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


      var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab2.page */
      "./src/app/tab2/tab2.page.ts");
      /* harmony import */


      var _tab2details_supplies_supplies_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../tab2details/supplies/supplies.module */
      "./src/app/tab2details/supplies/supplies.module.ts");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "./src/app/explore-container/explore-container.module.ts");
      /* harmony import */


      var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./tab2-routing.module */
      "./src/app/tab2/tab2-routing.module.ts");

      var Tab2PageModule = function Tab2PageModule() {
        _classCallCheck(this, Tab2PageModule);
      };

      Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _tab2_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab2PageRoutingModule"], _tab2details_supplies_supplies_module__WEBPACK_IMPORTED_MODULE_6__["SuppliesPageModule"]],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
      })], Tab2PageModule);
      /***/
    },

    /***/
    "./src/app/tab2/tab2.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tab2/tab2.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab2Tab2PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#toolbarColor {\n  --background: #061e3d;\n}\n\n.headerText {\n  text-align: center;\n  font-weight: bolder;\n  color: #061e3d;\n}\n\n.line {\n  border-top: solid #061e3d 10px;\n  width: 120%;\n  margin-left: -10%;\n}\n\n.content-with-full-height {\n  --background:white ;\n}\n\n.equal-sized-item {\n  height: 10%;\n}\n\nion-grid {\n  position: relative;\n  opacity: 1;\n  z-index: 2;\n}\n\n.iconGrid {\n  position: absolute;\n  background: url('mema-seal.png') 50% 50% no-repeat;\n  background-size: contain;\n  height: 100%;\n  width: 100%;\n  opacity: 0.25;\n  z-index: 0;\n}\n\n.buttonText p {\n  margin: 2%;\n  font-size: 18px;\n  font-weight: bolder;\n  color: #061e3d;\n}\n\n.imgDocs {\n  height: auto;\n  width: auto;\n}\n\n.iconButton {\n  padding: 20% 23%;\n  border-style: none;\n  border-radius: 100%;\n  background: #061e3d;\n  background-position: 50% center;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUdJLG1CQUFBO0FBREo7O0FBVUU7RUFDRSxXQUFBO0FBUEo7O0FBV0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBUko7O0FBV0E7RUFDSSxrQkFBQTtFQUNBLGtEQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FBUko7O0FBY0E7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQVhGOztBQWNBO0VBQ0MsWUFBQTtFQUNBLFdBQUE7QUFYRDs7QUFjQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtBQVhGIiwiZmlsZSI6InNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0b29sYmFyQ29sb3Ige1xuICAtLWJhY2tncm91bmQ6ICMwNjFlM2Q7XG59XG5cbi5oZWFkZXJUZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBjb2xvcjogIzA2MWUzZDtcbn1cblxuLmxpbmUge1xuICBib3JkZXItdG9wOnNvbGlkICMwNjFlM2QgMTBweDtcbiAgd2lkdGg6IDEyMCU7XG4gIG1hcmdpbi1sZWZ0OiAtMTAlO1xufVxuXG4uY29udGVudC13aXRoLWZ1bGwtaGVpZ2h0e1xuICAgIC8vIGhlaWdodDogMTAwJTtcbiAgICAvL21hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOndoaXRlIDtcblxuICB9XG5cbi8vIC5jb250ZW50LXdpdGgtZnVsbC1oZWlnaHQ6OmJlZm9yZXtcbi8vICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9tZW1hLnBuZykgbm8tcmVwZWF0O1xuLy8gICBvcGFjaXR5OiAuNzU7XG4vLyB9XG4gIFxuICAuZXF1YWwtc2l6ZWQtaXRlbXtcbiAgICBoZWlnaHQ6IDEwJVxuICB9XG4gIFxuXG4gIGlvbi1ncmlkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3BhY2l0eTogMTtcbiAgICB6LWluZGV4OiAyO1xufVxuXG4uaWNvbkdyaWQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL21lbWEtc2VhbC5wbmcpIDUwJSA1MCUgbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3BhY2l0eTogLjI1O1xuICAgIHotaW5kZXg6IDA7XG59XG5cblxuXG5cbi5idXR0b25UZXh0IHAge1xuICBtYXJnaW46IDIlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGNvbG9yOiAjMDYxZTNkO1xufVxuXG4uaW1nRG9jcyB7XG4gaGVpZ2h0OiBhdXRvO1xuIHdpZHRoOiBhdXRvO1xufVxuXG4uaWNvbkJ1dHRvbiB7XG4gIHBhZGRpbmc6IDIwJSAyMyU7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZDogIzA2MWUzZCA7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cbn1cblxuXG5cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/tab2/tab2.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tab2/tab2.page.ts ***!
      \***********************************/

    /*! exports provided: Tab2Page */

    /***/
    function srcAppTab2Tab2PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2Page", function () {
        return Tab2Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var Tab2Page = function Tab2Page() {
        _classCallCheck(this, Tab2Page);
      };

      Tab2Page.ctorParameters = function () {
        return [];
      };

      Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-tab2",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tab2.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tab2.page.scss */
        "./src/app/tab2/tab2.page.scss"))["default"]]
      })], Tab2Page);
      /***/
    },

    /***/
    "./src/app/tab2details/supplies/supplies-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/tab2details/supplies/supplies-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: SuppliesPageRoutingModule */

    /***/
    function srcAppTab2detailsSuppliesSuppliesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuppliesPageRoutingModule", function () {
        return SuppliesPageRoutingModule;
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


      var _supplies_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./supplies.page */
      "./src/app/tab2details/supplies/supplies.page.ts");

      var routes = [{
        path: "",
        component: _supplies_page__WEBPACK_IMPORTED_MODULE_3__["SuppliesPage"]
      }];

      var SuppliesPageRoutingModule = function SuppliesPageRoutingModule() {
        _classCallCheck(this, SuppliesPageRoutingModule);
      };

      SuppliesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SuppliesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab2details/supplies/supplies.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/tab2details/supplies/supplies.module.ts ***!
      \*********************************************************/

    /*! exports provided: SuppliesPageModule */

    /***/
    function srcAppTab2detailsSuppliesSuppliesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuppliesPageModule", function () {
        return SuppliesPageModule;
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


      var _supplies_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./supplies-routing.module */
      "./src/app/tab2details/supplies/supplies-routing.module.ts");
      /* harmony import */


      var _supplies_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./supplies.page */
      "./src/app/tab2details/supplies/supplies.page.ts");

      var SuppliesPageModule = function SuppliesPageModule() {
        _classCallCheck(this, SuppliesPageModule);
      };

      SuppliesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _supplies_routing_module__WEBPACK_IMPORTED_MODULE_5__["SuppliesPageRoutingModule"]],
        declarations: [_supplies_page__WEBPACK_IMPORTED_MODULE_6__["SuppliesPage"]]
      })], SuppliesPageModule);
      /***/
    },

    /***/
    "./src/app/tab2details/supplies/supplies.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/tab2details/supplies/supplies.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab2detailsSuppliesSuppliesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjJkZXRhaWxzL3N1cHBsaWVzL3N1cHBsaWVzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/tab2details/supplies/supplies.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/tab2details/supplies/supplies.page.ts ***!
      \*******************************************************/

    /*! exports provided: SuppliesPage */

    /***/
    function srcAppTab2detailsSuppliesSuppliesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuppliesPage", function () {
        return SuppliesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SuppliesPage = /*#__PURE__*/function () {
        function SuppliesPage() {
          _classCallCheck(this, SuppliesPage);

          this.emergencyItem = [{
            name: "FLASHLIGHT",
            checked: false
          }, {
            name: "FIRST AID KIT",
            checked: false
          }, {
            name: "MEDICINES AND MEDICAL RECORDS",
            checked: false
          }, {
            name: "WATER",
            checked: false
          }, {
            name: "FOOD",
            checked: false
          }, {
            name: "RADIO",
            checked: false
          }, {
            name: "EXTRA BATTERIES",
            checked: false
          }, {
            name: "CAN OPENER",
            checked: false
          }, {
            name: "WHISTLE",
            checked: false
          }, {
            name: "WRENCH OR PLIES",
            checked: false
          }, {
            name: "LOCAL MAP",
            checked: false
          }, {
            name: "MOBILE DEVICE EMERGENCY CHARGER",
            checked: false
          }, {
            name: "TOWELS,GARBAGE BAGS, AND PLASTIC TIES",
            checked: false
          }, {
            name: "FACE MASK",
            checked: false
          }]; // Called when application is first initialized, or when page is refreshed..

          console.log("constructor()... "); // If localStorage has not been initialized, then initialize it by setting them all to false.

          if (localStorage.length == 0) {
            // For each item in emergencyItem, set the "name" and "checked" in localStorage.
            for (var i = 0; i < this.emergencyItem.length; i++) {
              console.log("i: ", i, "localStorage: ", localStorage.key(i), this.emergencyItem[i].name);
              localStorage.setItem(this.emergencyItem[i].name, this.emergencyItem[i].checked.toString());
              console.log("localStorage: ", localStorage);
            }
          }

          console.log("Local Storage: " + localStorage.length);
        }

        _createClass(SuppliesPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            console.log("I just entered the pets page"); // Load the emergencyItems from localStorage
            // Iterating through the localStorage to get the "true"/"false" boolean.

            for (var i = 0; i < this.emergencyItem.length; i++) {
              // When true, set emergency items to true. If false, set emergency items to false.
              this.emergencyItem[i].checked = JSON.parse(localStorage.getItem(this.emergencyItem[i].name));
            }
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            // Set the emergencyItems into localStorage
            // The "checked" flags could have changed from "false". Need to set them if so.
            for (var i = 0; i < this.emergencyItem.length; i++) {
              localStorage.getItem(this.emergencyItem[i].name);
            }

            console.log("I just left the supplies page");
            console.log(localStorage);
          }
        }, {
          key: "onClick",
          value: function onClick(emergencyItem) {
            // Clicking an emergencyItem changes the "checked" flag. Need to change it in storage.
            localStorage.setItem(emergencyItem.name, emergencyItem.checked);
            console.log(emergencyItem);
          }
        }]);

        return SuppliesPage;
      }();

      SuppliesPage.ctorParameters = function () {
        return [];
      };

      SuppliesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-supplies",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./supplies.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2details/supplies/supplies.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./supplies.page.scss */
        "./src/app/tab2details/supplies/supplies.page.scss"))["default"]]
      })], SuppliesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab2-tab2-module-es5.js.map