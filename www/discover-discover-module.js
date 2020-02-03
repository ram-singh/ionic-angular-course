(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["discover-discover-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/discover.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/discover.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <!-- <ion-button (click)=\"onOpenMenu()\">menu</ion-button> -->\n    </ion-buttons>\n    <ion-title>Discover Places</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-segment (ionChange)=\"onFilterUpdate($event.detail.value)\">\n    <ion-segment-button value=\"all\" checked> All Places</ion-segment-button>\n    <ion-segment-button value=\"bookable\">Bookable Places</ion-segment-button>\n  </ion-segment>\n  <ion-grid *ngIf=\"isLoading\">\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" class=\"ion-text-center\">\n        <ion-spinner color=\"primary\"></ion-spinner>\n      </ion-col>\n      </ion-row>\n  </ion-grid>\n  <ion-grid *ngIf=\"!isLoading && (!relevantPlaces || relevantPlaces.length==0)\">\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" class=\"ion-text-center\">\n        Ther are no bookable places currently. Please come back later !!!\n      </ion-col>\n      </ion-row>\n  </ion-grid>\n<ion-grid *ngIf=\"!isLoading && relevantPlaces && relevantPlaces.length > 0\">\n  <ion-row>\n    <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" class=\"ion-text-center\">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>{{relevantPlaces[0].title}}</ion-card-title>\n          <ion-card-subtitle>{{relevantPlaces[0]?.price | currency}} / Night</ion-card-subtitle>\n        </ion-card-header>\n        <ion-img [src]=\"relevantPlaces[0]?.imageUrl\"></ion-img>\n        <ion-card-content>\n          <p>{{relevantPlaces[0]?.description}}</p>\n        </ion-card-content>\n        <div class=\"ion-text-center\">\n          <ion-button fill=\"clear\" color=\"primary\" [routerLink]=\"['/', 'places', 'tabs', 'discover', loadedPlaces[0].id]\">More</ion-button>\n        </div>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" class=\"ion-text-center\">\n      <ion-virtual-scroll [items]=\"listedLoadedPlaces\" approxItemHeight=\"70px\">\n        <ion-item detail [routerLink]=\"['/', 'places', 'tabs', 'discover', place.id]\" *virtualItem=\"let place\">\n          <ion-thumbnail slot=\"start\">\n            <ion-img [src]=\"place?.imageUrl\"></ion-img>\n          </ion-thumbnail>\n          <ion-label>\n            <h2>{{ place?.title}}</h2>\n            <p>{{place?.description}}</p>\n          </ion-label>\n        </ion-item>\n      </ion-virtual-scroll>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/places/discover/discover-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/places/discover/discover-routing.module.ts ***!
  \************************************************************/
/*! exports provided: DiscoverPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverPageRoutingModule", function() { return DiscoverPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _discover_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./discover.page */ "./src/app/places/discover/discover.page.ts");




var routes = [
    {
        path: '',
        component: _discover_page__WEBPACK_IMPORTED_MODULE_3__["DiscoverPage"]
    },
    {
        path: 'place-detail',
        loadChildren: function () { return Promise.all(/*! import() | place-detail-place-detail-module */[__webpack_require__.e("default~discover-place-detail-place-detail-module~new-offer-new-offer-module~offers-new-offer-new-of~089e34c1"), __webpack_require__.e("default~discover-place-detail-place-detail-module~place-detail-place-detail-module")]).then(__webpack_require__.bind(null, /*! ./place-detail/place-detail.module */ "./src/app/places/discover/place-detail/place-detail.module.ts")).then(function (m) { return m.PlaceDetailPageModule; }); }
    }
];
var DiscoverPageRoutingModule = /** @class */ (function () {
    function DiscoverPageRoutingModule() {
    }
    DiscoverPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DiscoverPageRoutingModule);
    return DiscoverPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/places/discover/discover.module.ts":
/*!****************************************************!*\
  !*** ./src/app/places/discover/discover.module.ts ***!
  \****************************************************/
/*! exports provided: DiscoverPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverPageModule", function() { return DiscoverPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _discover_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./discover-routing.module */ "./src/app/places/discover/discover-routing.module.ts");
/* harmony import */ var _discover_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./discover.page */ "./src/app/places/discover/discover.page.ts");







var DiscoverPageModule = /** @class */ (function () {
    function DiscoverPageModule() {
    }
    DiscoverPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _discover_routing_module__WEBPACK_IMPORTED_MODULE_5__["DiscoverPageRoutingModule"]
            ],
            declarations: [_discover_page__WEBPACK_IMPORTED_MODULE_6__["DiscoverPage"]]
        })
    ], DiscoverPageModule);
    return DiscoverPageModule;
}());



/***/ }),

/***/ "./src/app/places/discover/discover.page.scss":
/*!****************************************************!*\
  !*** ./src/app/places/discover/discover.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9kaXNjb3Zlci9kaXNjb3Zlci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/places/discover/discover.page.ts":
/*!**************************************************!*\
  !*** ./src/app/places/discover/discover.page.ts ***!
  \**************************************************/
/*! exports provided: DiscoverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverPage", function() { return DiscoverPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../places.service */ "./src/app/places/places.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");





var DiscoverPage = /** @class */ (function () {
    function DiscoverPage(placesService, menuCtrl, authService) {
        this.placesService = placesService;
        this.menuCtrl = menuCtrl;
        this.authService = authService;
        this.isLoading = false;
        this.filter = 'all';
    }
    DiscoverPage.prototype.ngOnInit = function () {
        var _this = this;
        this.loadedPlaceSub = this.placesService.places.subscribe(function (places) {
            _this.loadedPlaces = places;
            _this.onFilterUpdate(_this.filter);
        });
    };
    DiscoverPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.isLoading = true;
        this.placesService.fetchPlaces().subscribe(function () {
            _this.isLoading = false;
        });
    };
    DiscoverPage.prototype.onOpenMenu = function () {
        this.menuCtrl.toggle();
    };
    DiscoverPage.prototype.onFilterUpdate = function (filter) {
        // const isShown = place => filter === 'all' || place.userId !== this.authService.userId;
        // this.relevantPlaces = this.loadedPlaces.filter(isShown);
        // this.listedLoadedPlaces = this.relevantPlaces.slice(1);
        // this.filter = filter;
        var _this = this;
        if (filter === 'all') {
            this.relevantPlaces = this.loadedPlaces;
            this.listedLoadedPlaces = this.relevantPlaces.slice(1);
        }
        else {
            this.relevantPlaces = this.relevantPlaces.filter(function (place) { return place.userId !== _this.authService.userId; });
            this.listedLoadedPlaces = this.relevantPlaces.slice(1);
        }
    };
    DiscoverPage.prototype.ngOnDestroy = function () {
        if (this.loadedPlaceSub) {
            this.loadedPlaceSub.unsubscribe();
        }
    };
    DiscoverPage.ctorParameters = function () { return [
        { type: _places_service__WEBPACK_IMPORTED_MODULE_3__["PlacesService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    DiscoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-discover',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./discover.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/discover.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./discover.page.scss */ "./src/app/places/discover/discover.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_places_service__WEBPACK_IMPORTED_MODULE_3__["PlacesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], DiscoverPage);
    return DiscoverPage;
}());



/***/ })

}]);
//# sourceMappingURL=discover-discover-module.js.map