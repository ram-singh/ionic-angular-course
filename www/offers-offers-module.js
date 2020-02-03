(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offers-offers-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offer-item/offer-item.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offer-item/offer-item.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item  details  [routerLink]=\"['/', 'places', 'tabs', 'offers', 'edit', offer.id]\">\n  <ion-thumbnail slot=\"start\">\n    <ion-img [src]=\"offer?.imageUrl\"></ion-img>\n  </ion-thumbnail>\n  <ion-label>\n    <h1>{{ offer?.title}}</h1>\n    <div class=\"offer-detail\">\n      <ion-icon name=\"calendar\" color=\"secondary\"></ion-icon>\n      <ion-text  color=\"tertiary\" class=\"space-left\">{{ offer.availableTo | date }}</ion-text>\n      <span class=\"space-left\">to</span>\n      <ion-icon name=\"calendar\" color=\"secondary\" class=\"space-left\"></ion-icon>\n      <ion-text color=\"tertiary\" class=\"space-left\">{{ offer.availableTo | date }}</ion-text>\n    </div>\n  </ion-label>\n</ion-item>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offers.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offers.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-menu-button menu=\"m1\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>My Offers</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button routerLink=\"/places/tabs/offers/new\">\n        <ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"\">\n<ion-grid>\n  <ion-row >\n    <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" class=\"ion-text-center\">\n      <div *ngIf=\"isLoading\">\n        <ion-spinner color=\"primary\"></ion-spinner>\n      </div>\n      <div class=\"ion-text-center\" *ngIf=\"!isLoading && offers.length == 0\">\n        <p>No Offers Found!!! Please create one first!</p>\n        <ion-button color=\"primary\" routerLink=\"/places/tabs/offers/new\">Offer New Place</ion-button>\n      </div>\n      \n      <ion-list *ngIf=\"!isLoading && offers.length > 0\">\n        <ion-item-sliding *ngFor=\"let offer of offers\">\n          <app-offer-item [offer]=\"offer\"></app-offer-item>\n          <ion-item-options>\n            <ion-item-option color=\"secondary\" [routerLink]=\"['/', 'places', 'tabs', 'offers', 'edit', offer.id]\">\n              <ion-icon name=\"create\" slot=\"icon-only\"></ion-icon>\n            </ion-item-option>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/places/offers/offer-item/offer-item.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/places/offers/offer-item/offer-item.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  font-size: 18px;\n  color: var(--ion-color-primary);\n}\n\n.offer-detail {\n  display: flex;\n  align-items: center;\n}\n\n.offer-detail .space-left {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZzAzMDQxODUvRGVza3RvcC9wcm9qZWN0cy9Bbmd1bGFyL2lvbmljLWFuZ3VsYXItY291cnNlL3NyYy9hcHAvcGxhY2VzL29mZmVycy9vZmZlci1pdGVtL29mZmVyLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BsYWNlcy9vZmZlcnMvb2ZmZXItaXRlbS9vZmZlci1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLCtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURESTtFQUNJLGdCQUFBO0FDR1IiLCJmaWxlIjoic3JjL2FwcC9wbGFjZXMvb2ZmZXJzL29mZmVyLWl0ZW0vb2ZmZXItaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5vZmZlci1kZXRhaWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAuc3BhY2UtbGVmdCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgfVxufSIsImgxIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4ub2ZmZXItZGV0YWlsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5vZmZlci1kZXRhaWwgLnNwYWNlLWxlZnQge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/places/offers/offer-item/offer-item.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/places/offers/offer-item/offer-item.component.ts ***!
  \******************************************************************/
/*! exports provided: OfferItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferItemComponent", function() { return OfferItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _place_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../place.model */ "./src/app/places/place.model.ts");



var OfferItemComponent = /** @class */ (function () {
    function OfferItemComponent() {
    }
    OfferItemComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _place_model__WEBPACK_IMPORTED_MODULE_2__["Place"])
    ], OfferItemComponent.prototype, "offer", void 0);
    OfferItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-offer-item',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./offer-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offer-item/offer-item.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./offer-item.component.scss */ "./src/app/places/offers/offer-item/offer-item.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OfferItemComponent);
    return OfferItemComponent;
}());



/***/ }),

/***/ "./src/app/places/offers/offers-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/places/offers/offers-routing.module.ts ***!
  \********************************************************/
/*! exports provided: OffersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPageRoutingModule", function() { return OffersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _offers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offers.page */ "./src/app/places/offers/offers.page.ts");




var routes = [
    {
        path: '',
        component: _offers_page__WEBPACK_IMPORTED_MODULE_3__["OffersPage"]
    },
    {
        path: 'new-offer',
        loadChildren: function () { return Promise.all(/*! import() | new-offer-new-offer-module */[__webpack_require__.e("default~discover-place-detail-place-detail-module~new-offer-new-offer-module~offers-new-offer-new-of~089e34c1"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null, /*! ./new-offer/new-offer.module */ "./src/app/places/offers/new-offer/new-offer.module.ts")).then(function (m) { return m.NewOfferPageModule; }); }
    },
    {
        path: 'edit-offer',
        loadChildren: function () { return __webpack_require__.e(/*! import() | edit-offer-edit-offer-module */ "common").then(__webpack_require__.bind(null, /*! ./edit-offer/edit-offer.module */ "./src/app/places/offers/edit-offer/edit-offer.module.ts")).then(function (m) { return m.EditOfferPageModule; }); }
    }
];
var OffersPageRoutingModule = /** @class */ (function () {
    function OffersPageRoutingModule() {
    }
    OffersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], OffersPageRoutingModule);
    return OffersPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/places/offers/offers.module.ts":
/*!************************************************!*\
  !*** ./src/app/places/offers/offers.module.ts ***!
  \************************************************/
/*! exports provided: OffersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPageModule", function() { return OffersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _offers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./offers-routing.module */ "./src/app/places/offers/offers-routing.module.ts");
/* harmony import */ var _offers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offers.page */ "./src/app/places/offers/offers.page.ts");
/* harmony import */ var _offer_item_offer_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./offer-item/offer-item.component */ "./src/app/places/offers/offer-item/offer-item.component.ts");








var OffersPageModule = /** @class */ (function () {
    function OffersPageModule() {
    }
    OffersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _offers_routing_module__WEBPACK_IMPORTED_MODULE_5__["OffersPageRoutingModule"]
            ],
            declarations: [_offers_page__WEBPACK_IMPORTED_MODULE_6__["OffersPage"], _offer_item_offer_item_component__WEBPACK_IMPORTED_MODULE_7__["OfferItemComponent"]]
        })
    ], OffersPageModule);
    return OffersPageModule;
}());



/***/ }),

/***/ "./src/app/places/offers/offers.page.scss":
/*!************************************************!*\
  !*** ./src/app/places/offers/offers.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9vZmZlcnMvb2ZmZXJzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/places/offers/offers.page.ts":
/*!**********************************************!*\
  !*** ./src/app/places/offers/offers.page.ts ***!
  \**********************************************/
/*! exports provided: OffersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPage", function() { return OffersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../places.service */ "./src/app/places/places.service.ts");



var OffersPage = /** @class */ (function () {
    function OffersPage(placesService) {
        this.placesService = placesService;
        this.isLoading = false;
    }
    OffersPage.prototype.ngOnInit = function () {
        var _this = this;
        this.placesSub = this.placesService.places.subscribe(function (places) {
            _this.offers = places;
        });
    };
    OffersPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.isLoading = true;
        this.placesService.fetchPlaces().subscribe((function () {
            _this.isLoading = false;
        }));
    };
    OffersPage.prototype.ngOnDestroy = function () {
        if (this.placesSub) {
            this.placesSub.unsubscribe();
        }
    };
    OffersPage.ctorParameters = function () { return [
        { type: _places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"] }
    ]; };
    OffersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-offers',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./offers.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offers.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./offers.page.scss */ "./src/app/places/offers/offers.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"]])
    ], OffersPage);
    return OffersPage;
}());



/***/ })

}]);
//# sourceMappingURL=offers-offers-module.js.map