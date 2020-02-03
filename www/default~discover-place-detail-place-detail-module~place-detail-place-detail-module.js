(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~discover-place-detail-place-detail-module~place-detail-place-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/create-booking/create-booking.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/create-booking/create-booking.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ selectedPlace.title }}</ion-title>\n    <ion-buttons>\n      <ion-button (click)=\"onCancel()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding ion-text-center\">\n  <p>{{ selectedPlace.description }}</p>\n  <form (ngSubmit)=\"onBookPlace()\" #createBookingForm=\"ngForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">First Name</ion-label>\n            <ion-input type=\"text\" required ngModel name=\"fname\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Last Name</ion-label>\n            <ion-input type=\"text\" required ngModel name=\"lname\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Number of guests</ion-label>\n            <ion-select [ngModel]=\"'2'\" name=\"guestCount\">\n              <ion-select-option value=\"1\">1</ion-select-option>\n              <ion-select-option value=\"2\">2</ion-select-option>\n              <ion-select-option value=\"3\">3</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"3\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">From</ion-label>\n            <ion-datetime\n              display-format=\"MMM DD YYYY\"\n              picker-format=\"YY MMM DD\"\n              [min]=\"selectedPlace.availableFrom.toISOString()\"\n              [max]=\"selectedPlace.availableTo.toISOString()\"\n              [ngModel]=\"startDate\"\n              name=\"date-from\"\n              required\n              #startDateCtrl=\"ngModel\"\n            ></ion-datetime>\n          </ion-item>\n        </ion-col>\n        <ion-col size-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">To</ion-label>\n            <ion-datetime\n              display-format=\"MMM DD YYYY\"\n              picker-format=\"YY MMM DD\"\n              [min]=\"selectedPlace.availableFrom.toISOString()\"\n              [max]=\"selectedPlace.availableTo.toISOString()\"\n              [ngModel]=\"endDate\"\n              name=\"date-to\"\n              required\n            ></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-button color=\"primary\" type=\"submit\" expand=\"block\" [disabled]=\"!createBookingForm.valid || !datesValid()\">\n            Book!\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/place-detail/place-detail.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/place-detail/place-detail.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/places/tabs/discover\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ isLoading ? 'Loading..' : place?.title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <p *ngIf=\"isLoading\">\n    <ion-spinner color=\"primary\"></ion-spinner>\n  </p>\n  <ion-grid class=\"ion-no-padding\" *ngIf=\"!isLoading\">\n    <ion-row>\n      <ion-col size-sm=\"6\" offset-sm=\"3\" class=\"ion-no-padding\">\n        <ion-img [src]=\"place?.imageUrl\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size-sm=\"6\" offset-sm=\"3\" class=\"ion-text-center\">\n        <p>{{ place?.description}}</p>\n        <p>{{ place.location.address}}</p>\n        <ion-img role=\"button\" (click)=\"onShowFullMap()\" class=\"location-image\" [src]=\"place.location.staticMapImageUrl\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"isBookable\">\n      <ion-col size-sm=\"6\" offset-sm=\"3\" class=\"ion-text-center\">\n        <ion-button class=\"ion-margin\" (click)=\"onBookPlace()\">Book</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n\n\n");

/***/ }),

/***/ "./src/app/bookings/booking.model.ts":
/*!*******************************************!*\
  !*** ./src/app/bookings/booking.model.ts ***!
  \*******************************************/
/*! exports provided: Booking */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Booking", function() { return Booking; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Booking = /** @class */ (function () {
    function Booking(id, placeId, userId, placeTitle, placeImage, firstName, lastName, guestNumber, bookedFrom, bookedTo) {
        this.id = id;
        this.placeId = placeId;
        this.userId = userId;
        this.placeTitle = placeTitle;
        this.placeImage = placeImage;
        this.firstName = firstName;
        this.lastName = lastName;
        this.guestNumber = guestNumber;
        this.bookedFrom = bookedFrom;
        this.bookedTo = bookedTo;
    }
    return Booking;
}());



/***/ }),

/***/ "./src/app/bookings/booking.service.ts":
/*!*********************************************!*\
  !*** ./src/app/bookings/booking.service.ts ***!
  \*********************************************/
/*! exports provided: BookingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingService", function() { return BookingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _booking_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booking.model */ "./src/app/bookings/booking.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var BookingService = /** @class */ (function () {
    function BookingService(authService, http) {
        this.authService = authService;
        this.http = http;
        this._bookings = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
    Object.defineProperty(BookingService.prototype, "bookings", {
        get: function () {
            return this._bookings.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    BookingService.prototype.getBooking = function (id) {
        return this.bookings.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (bookings) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, bookings.find(function (b) { return b.id === id; }));
        }));
    };
    BookingService.prototype.fetchBookings = function () {
        var _this = this;
        return this.http
            .get("https://ionic-angular-course-b1b7f.firebaseio.com/bookings.json?orderBy=\"userId\"&equalTo=\"" + this.authService.userId + "\"")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (bookingData) {
            var bookings = [];
            for (var key in bookingData) {
                if (bookingData.hasOwnProperty(key)) {
                    var data = bookingData[key];
                    bookings.push(new _booking_model__WEBPACK_IMPORTED_MODULE_2__["Booking"](key, data.placeId, data.userId, data.placeTitle, data.placeImage, data.firstName, data.lastName, data.guestNumber, new Date(data.bookedFrom), new Date(data.bookedTo)));
                }
            }
            return bookings;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (bookings) {
            _this._bookings.next(bookings);
        }));
    };
    BookingService.prototype.addBooking = function (placeId, placeTitle, placeImage, firstName, lastName, guestNumber, dateFrom, dateTo) {
        var _this = this;
        var generatedId;
        var newBooking = new _booking_model__WEBPACK_IMPORTED_MODULE_2__["Booking"](Math.random().toString(), placeId, this.authService.userId, placeTitle, placeImage, firstName, lastName, guestNumber, dateFrom, dateTo);
        return this.http
            .post("https://ionic-angular-course-b1b7f.firebaseio.com/bookings.json", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, newBooking, { id: null }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (resData) {
            generatedId = resData.name;
            return _this.bookings;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (bookings) {
            newBooking.id = generatedId;
            return _this._bookings.next(bookings.concat(newBooking));
        }));
    };
    BookingService.prototype.cancelBooking = function (bookingId) {
        var _this = this;
        return this.http.delete("https://ionic-angular-course-b1b7f.firebaseio.com/bookings/" + bookingId + ".json")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
            return _this.bookings;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (bookings) {
            _this._bookings.next(bookings.filter(function (b) { return b.id !== bookingId; }));
        }));
    };
    BookingService.ctorParameters = function () { return [
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
    ]; };
    BookingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], BookingService);
    return BookingService;
}());



/***/ }),

/***/ "./src/app/bookings/create-booking/create-booking.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/bookings/create-booking/create-booking.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmdzL2NyZWF0ZS1ib29raW5nL2NyZWF0ZS1ib29raW5nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/bookings/create-booking/create-booking.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/bookings/create-booking/create-booking.component.ts ***!
  \*********************************************************************/
/*! exports provided: CreateBookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBookingComponent", function() { return CreateBookingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_places_place_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/places/place.model */ "./src/app/places/place.model.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var CreateBookingComponent = /** @class */ (function () {
    function CreateBookingComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    CreateBookingComponent.prototype.ngOnInit = function () {
        var availableFrom = new Date(this.selectedPlace.availableFrom);
        var availableTo = new Date(this.selectedPlace.availableTo);
        if (this.selectedMode === 'random') {
            var dayInMS = 24 * 60 * 60 * 1000;
            this.startDate = new Date(availableFrom.getTime() +
                Math.random() *
                    (availableTo.getTime() - 7 * dayInMS - availableFrom.getTime())).toISOString();
            this.endDate = new Date(new Date(this.startDate).getTime() +
                Math.random() *
                    (new Date(this.startDate).getTime() +
                        6 * dayInMS -
                        new Date(this.startDate).getTime())).toISOString();
        }
    };
    CreateBookingComponent.prototype.onCancel = function () {
        this.modalCtrl.dismiss(null, 'cancel');
    };
    CreateBookingComponent.prototype.onBookPlace = function () {
        if (!this.form.valid || !this.datesValid) {
            return;
        }
        this.modalCtrl.dismiss({
            bookingData: {
                firstName: this.form.value['fname'],
                lastName: this.form.value['lname'],
                guestNumber: +this.form.value['guestCount'],
                startDate: new Date(this.form.value['date-from']),
                endDate: new Date(this.form.value['date-to'])
            }
        }, 'confirm');
    };
    CreateBookingComponent.prototype.datesValid = function () {
        if (this.form) {
            var startDate = new Date(this.form.value['date-from']);
            var endDate = new Date(this.form.value['date-to']);
            return endDate > startDate;
        }
    };
    CreateBookingComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_places_place_model__WEBPACK_IMPORTED_MODULE_2__["Place"])
    ], CreateBookingComponent.prototype, "selectedPlace", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CreateBookingComponent.prototype, "selectedMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('createBookingForm', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], CreateBookingComponent.prototype, "form", void 0);
    CreateBookingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-booking',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-booking.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/create-booking/create-booking.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-booking.component.scss */ "./src/app/bookings/create-booking/create-booking.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], CreateBookingComponent);
    return CreateBookingComponent;
}());



/***/ }),

/***/ "./src/app/places/discover/place-detail/place-detail-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/places/discover/place-detail/place-detail-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: PlaceDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceDetailPageRoutingModule", function() { return PlaceDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _place_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./place-detail.page */ "./src/app/places/discover/place-detail/place-detail.page.ts");




var routes = [
    {
        path: '',
        component: _place_detail_page__WEBPACK_IMPORTED_MODULE_3__["PlaceDetailPage"]
    }
];
var PlaceDetailPageRoutingModule = /** @class */ (function () {
    function PlaceDetailPageRoutingModule() {
    }
    PlaceDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PlaceDetailPageRoutingModule);
    return PlaceDetailPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/places/discover/place-detail/place-detail.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/places/discover/place-detail/place-detail.module.ts ***!
  \*********************************************************************/
/*! exports provided: PlaceDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceDetailPageModule", function() { return PlaceDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _place_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./place-detail-routing.module */ "./src/app/places/discover/place-detail/place-detail-routing.module.ts");
/* harmony import */ var _place_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./place-detail.page */ "./src/app/places/discover/place-detail/place-detail.page.ts");
/* harmony import */ var _bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../bookings/create-booking/create-booking.component */ "./src/app/bookings/create-booking/create-booking.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");









var PlaceDetailPageModule = /** @class */ (function () {
    function PlaceDetailPageModule() {
    }
    PlaceDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _place_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlaceDetailPageRoutingModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
            ],
            declarations: [_place_detail_page__WEBPACK_IMPORTED_MODULE_6__["PlaceDetailPage"], _bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_7__["CreateBookingComponent"]],
            entryComponents: [_bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_7__["CreateBookingComponent"]]
        })
    ], PlaceDetailPageModule);
    return PlaceDetailPageModule;
}());



/***/ }),

/***/ "./src/app/places/discover/place-detail/place-detail.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/places/discover/place-detail/place-detail.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".location-image {\n  width: 100%;\n  height: 25rem;\n  max-height: 30vh;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZzAzMDQxODUvRGVza3RvcC9wcm9qZWN0cy9Bbmd1bGFyL2lvbmljLWFuZ3VsYXItY291cnNlL3NyYy9hcHAvcGxhY2VzL2Rpc2NvdmVyL3BsYWNlLWRldGFpbC9wbGFjZS1kZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9wbGFjZXMvZGlzY292ZXIvcGxhY2UtZGV0YWlsL3BsYWNlLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGxhY2VzL2Rpc2NvdmVyL3BsYWNlLWRldGFpbC9wbGFjZS1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvY2F0aW9uLWltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI1cmVtO1xuICAgIG1heC1oZWlnaHQ6IDMwdmg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59IiwiLmxvY2F0aW9uLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjVyZW07XG4gIG1heC1oZWlnaHQ6IDMwdmg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/places/discover/place-detail/place-detail.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/places/discover/place-detail/place-detail.page.ts ***!
  \*******************************************************************/
/*! exports provided: PlaceDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceDetailPage", function() { return PlaceDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../bookings/create-booking/create-booking.component */ "./src/app/bookings/create-booking/create-booking.component.ts");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../places.service */ "./src/app/places/places.service.ts");
/* harmony import */ var src_app_bookings_booking_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/bookings/booking.service */ "./src/app/bookings/booking.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var src_app_shared_map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/map-modal/map-modal.component */ "./src/app/shared/map-modal/map-modal.component.ts");









var PlaceDetailPage = /** @class */ (function () {
    function PlaceDetailPage(route, placesService, navCtrl, modalCtrl, actionSheetCtrl, bookingService, loadingCtrl, authService, alertCtrl, router) {
        this.route = route;
        this.placesService = placesService;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.bookingService = bookingService;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.isBookable = false;
        this.isLoading = false;
    }
    PlaceDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            if (!paramMap.has('placeId')) {
                _this.navCtrl.navigateBack('/places/tabs/offers');
                return;
            }
            _this.isLoading = true;
            _this.placeSub = _this.placesService
                .getPlace(paramMap.get('placeId'))
                .subscribe(function (place) {
                _this.place = place;
                _this.isBookable = place.userId !== _this.authService.userId;
                _this.isLoading = false;
            }, function (error) {
                _this.alertCtrl.create({
                    header: 'An error ocurred!!',
                    message: 'Could not load place.',
                    buttons: [{
                            text: 'Okay',
                            handler: function () {
                                _this.router.navigate(['/places/tabs/discover']);
                            }
                        }]
                }).then(function (alertEl) {
                    alertEl.present();
                });
            });
        });
    };
    PlaceDetailPage.prototype.onBookPlace = function () {
        var _this = this;
        // this.router.navigateByUrl('/places/tabs/discover');
        // this.navCtrl.pop();
        // this.navCtrl.navigateBack('/places/tabs/discover');
        this.actionSheetCtrl
            .create({
            header: 'Choose an Action',
            buttons: [
                {
                    text: 'Select Date',
                    handler: function () {
                        _this.openBookingModal('select');
                    }
                },
                {
                    text: 'Random Date',
                    handler: function () {
                        _this.openBookingModal('random');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        })
            .then(function (actionSheetEl) {
            actionSheetEl.present();
        });
    };
    PlaceDetailPage.prototype.openBookingModal = function (mode) {
        var _this = this;
        console.log('mode: ', mode);
        this.modalCtrl
            .create({
            component: _bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_4__["CreateBookingComponent"],
            componentProps: { selectedPlace: this.place, selectedMode: mode }
        })
            .then(function (modalEl) {
            modalEl.present();
            return modalEl.onDidDismiss();
        })
            .then(function (resultData) {
            console.log(resultData.data, ' --> ', resultData.role);
            if (resultData.role === 'confirm') {
                _this.loadingCtrl.create({ message: 'Booking place ...' }).then(function (loadingEl) {
                    loadingEl.present();
                    var bookingData = resultData.data.bookingData;
                    _this.bookingService.addBooking(_this.place.id, _this.place.title, _this.place.imageUrl, bookingData.firstName, bookingData.lastName, bookingData.guestNumber, bookingData.startDate, bookingData.endDate).subscribe(function () { return loadingEl.dismiss(); });
                    console.log('Booked...');
                });
            }
        });
    };
    PlaceDetailPage.prototype.onShowFullMap = function () {
        this.modalCtrl.create({ component: src_app_shared_map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_8__["MapModalComponent"], componentProps: {
                center: { lat: this.place.location.lat, lng: this.place.location.lng },
                selectable: false,
                closeButtonText: 'Close',
                title: this.place.location.address
            } }).then(function (modalEl) {
            modalEl.present();
        });
    };
    PlaceDetailPage.prototype.ngOnDestroy = function () {
        this.placeSub.unsubscribe();
    };
    PlaceDetailPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _places_service__WEBPACK_IMPORTED_MODULE_5__["PlacesService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
        { type: src_app_bookings_booking_service__WEBPACK_IMPORTED_MODULE_6__["BookingService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    PlaceDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-place-detail',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./place-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/place-detail/place-detail.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./place-detail.page.scss */ "./src/app/places/discover/place-detail/place-detail.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _places_service__WEBPACK_IMPORTED_MODULE_5__["PlacesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
            src_app_bookings_booking_service__WEBPACK_IMPORTED_MODULE_6__["BookingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PlaceDetailPage);
    return PlaceDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~discover-place-detail-place-detail-module~place-detail-place-detail-module.js.map