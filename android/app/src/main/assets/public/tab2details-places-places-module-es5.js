(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2details-places-places-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2details/places/places.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2details/places/places.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab2detailsPlacesPlacesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-row>\n            <ion-col>\n                <ion-nav-link [routerLink]=\"['/tabs/tab2/']\">BACK</ion-nav-link>\n            </ion-col>\n        </ion-row>\n        <ion-title>YOUR PLAN</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card-header style=\"text-align: center;\">EMERGENCY MEETING PLACES</ion-card-header>\n    <ion-item *ngFor=\"let emergencyPlaces of emergencyPlace\">\n        <ion-text>{{emergencyPlaces.title}} <br />\n            <ion-text>{{emergencyPlaces.name}} </ion-text>\n            <ion-card-content>\n                <ion-label>Instructions:</ion-label>\n                <ion-input type=\"text\" [(ngModel)]=\"emergencyPlaces.input\" [inputmode]=\"emergencyPlaces.name\"></ion-input>\n            </ion-card-content>\n        </ion-text>\n    </ion-item>\n    <ion-button (click)=\"onClick(emergencyPlace)\">SAVE</ion-button>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/tab2details/places/places-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/tab2details/places/places-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: PlacesPageRoutingModule */

    /***/
    function srcAppTab2detailsPlacesPlacesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlacesPageRoutingModule", function () {
        return PlacesPageRoutingModule;
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


      var _places_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./places.page */
      "./src/app/tab2details/places/places.page.ts");

      var routes = [{
        path: '',
        component: _places_page__WEBPACK_IMPORTED_MODULE_3__["PlacesPage"]
      }];

      var PlacesPageRoutingModule = function PlacesPageRoutingModule() {
        _classCallCheck(this, PlacesPageRoutingModule);
      };

      PlacesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PlacesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab2details/places/places.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/tab2details/places/places.module.ts ***!
      \*****************************************************/

    /*! exports provided: PlacesPageModule */

    /***/
    function srcAppTab2detailsPlacesPlacesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlacesPageModule", function () {
        return PlacesPageModule;
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


      var _places_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./places-routing.module */
      "./src/app/tab2details/places/places-routing.module.ts");
      /* harmony import */


      var _places_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./places.page */
      "./src/app/tab2details/places/places.page.ts");

      var PlacesPageModule = function PlacesPageModule() {
        _classCallCheck(this, PlacesPageModule);
      };

      PlacesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _places_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlacesPageRoutingModule"]],
        declarations: [_places_page__WEBPACK_IMPORTED_MODULE_6__["PlacesPage"]]
      })], PlacesPageModule);
      /***/
    },

    /***/
    "./src/app/tab2details/places/places.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/tab2details/places/places.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab2detailsPlacesPlacesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjJkZXRhaWxzL3BsYWNlcy9wbGFjZXMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/tab2details/places/places.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/tab2details/places/places.page.ts ***!
      \***************************************************/

    /*! exports provided: PlacesPage */

    /***/
    function srcAppTab2detailsPlacesPlacesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlacesPage", function () {
        return PlacesPage;
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
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var PlacesPage = /*#__PURE__*/function () {
        function PlacesPage(navCtrl) {
          _classCallCheck(this, PlacesPage);

          this.navCtrl = navCtrl;
          this.input = "";
          this.title = "";
          this.name = "";
          this.emergencyPlace = [{
            title: "INDOOR",
            name: "If you live in an area where tornadoes, hurricanes, or other high-wind storms can happen, make sure everyone knows where to go for protection. This could be a small, interior, windowless room, such as a closet or bathroom, on the lowest level of sturdy building, or a tornado safe room or storm shelter.",
            input: this.input
          }, {
            title: "NEIGHBORHOOD",
            name: "This is a place in your neighborhood where your household members will meet if there is a fire or other emergency and you need to leave your home. The meeting place could be a big tree, a mailbox at the end of the driveway, or a neighbor's house.",
            input: this.input
          }, {
            title: "OUT-OF-NEIGHBORHOOD",
            name: "This is a place where your family will meet if a diaster happens when you're not at home and you can't get back to your home. This could be a library, community center, house of worship, or family friend's home",
            input: this.input
          }, {
            title: "OUT-OF-TOWN",
            name: "Having an out-of-town meeting place can help you reunite if a diaster happens and you cannot get home or to your out-of-neighborhood meeting place; or your family is not together and your community is instructed to evacuate the area. This meeting place could be the home of a relative or family friend. Make sure everyone knows the address of the meeting place and dicuss ways you could get there.",
            input: this.input
          }]; // Called first time before the ngOnInit()

          var myArr = [];
          console.log("constructor()... "); // If localStorage has not been initialized, then initialize it by setting them all to false.

          if (localStorage.length == 0) {
            for (var i = 0; i < this.emergencyPlace.length; i++) {
              localStorage.setItem(this.emergencyPlace[i].name, this.emergencyPlace[i].input);
            }
          }

          console.log("Local Storage: " + localStorage.length);
        }

        _createClass(PlacesPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            //Load the emergencyItems from localStorage
            console.log("I just entered the supplies page"); // console.log(this.emergencyItem);
            // Iterating through the localStorage to get the "true"/"false" boolean.

            for (var i = 0; i < this.emergencyPlace.length; i++) {
              // When true, set emergency items to true. If false, set emergency items to false. Has to use "startsWith", because the value in localStorage is actually a string. Couldn't find a "toBoolean()" method.
              this.emergencyPlace[i].input = localStorage.getItem(this.emergencyPlace[i].name);
            } // console.log(localStorage);

          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            //Set the emergencyItems into localStorage
            // The "checked" flags could have changed from "false". Need to set them if so.
            for (var i = 0; i < this.emergencyPlace.length; i++) {
              localStorage.getItem(this.emergencyPlace[i].name);
            }

            console.log("I just left the supplies page"); // console.log(this.emergencyItem);

            console.log(localStorage);
          }
        }, {
          key: "onClick",
          value: function onClick(emergencyPlace) {
            // Clicking an emergencyItem changes the "checked" flag. Need to change it in storage.
            // if (localStorage.getItem(emergencyItem.name) == "false")
            // localStorage.setItem(emergencyItem.name, "true");
            // else localStorage.setItem(emergencyItem.name, "false");
            for (var i = 0; i < emergencyPlace.length; i++) {
              localStorage.setItem(emergencyPlace[i].name, emergencyPlace[i].input);
            } // localStorage.setItem(emergencyPlace.name, emergencyPlace.input);
            // console.log("Local: " + localStorage.getItem(emergencyItem.name));


            console.log("Emergency place: ", emergencyPlace);
            console.log("Local storage: ", localStorage);
            this.navCtrl.navigateRoot("tabs/tab2");
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PlacesPage;
      }();

      PlacesPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }];
      };

      PlacesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-places",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./places.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2details/places/places.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./places.page.scss */
        "./src/app/tab2details/places/places.page.scss"))["default"]]
      })], PlacesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab2details-places-places-module-es5.js.map