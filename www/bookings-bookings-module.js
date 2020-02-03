(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bookings-bookings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/bookings.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/bookings.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-menu-button menu=\"m1\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Your Bookings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size-md=\"8\" offset-md=\"2\" *ngIf=\"isLoading\" class=\"ion-text-center\">\n        <ion-spinner color=\"primary\"></ion-spinner>\n      </ion-col>\n      <ion-col size-md=\"8\" offset-md=\"2\" *ngIf=\"!isLoading && (!loadedBookings || loadedBookings.length == 0)\" class=\"ion-text-center\">\n        <p> No bookings found !!!</p>\n      </ion-col>\n      <ion-col size-md=\"8\" offset-md=\"2\" *ngIf=\"!isLoading && loadedBookings && loadedBookings.length > 0\">\n        <ion-list>\n          <ion-item-sliding *ngFor=\"let booking of loadedBookings\" #slidingBooking>\n            <ion-item>\n              <ion-avatar slot=\"start\">\n                <ion-img [src]=\"booking.placeImage\"></ion-img>\n              </ion-avatar>\n              <ion-label>\n                <h5> {{ booking.placeTitle}}</h5>\n                <p> Guests: {{ booking.guestNumber }}</p>\n              </ion-label>\n            </ion-item>\n            <ion-item-options>\n              <ion-item-option color=\"danger\" (click)=\"onCancelBooking(booking.id, slidingBooking)\">\n                <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n              </ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n</ion-content>\n");

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

/***/ "./src/app/bookings/bookings-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/bookings/bookings-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: BookingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsPageRoutingModule", function() { return BookingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bookings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookings.page */ "./src/app/bookings/bookings.page.ts");




var routes = [
    {
        path: '',
        component: _bookings_page__WEBPACK_IMPORTED_MODULE_3__["BookingsPage"]
    }
];
var BookingsPageRoutingModule = /** @class */ (function () {
    function BookingsPageRoutingModule() {
    }
    BookingsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], BookingsPageRoutingModule);
    return BookingsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/bookings/bookings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/bookings/bookings.module.ts ***!
  \*********************************************/
/*! exports provided: BookingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsPageModule", function() { return BookingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bookings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bookings-routing.module */ "./src/app/bookings/bookings-routing.module.ts");
/* harmony import */ var _bookings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bookings.page */ "./src/app/bookings/bookings.page.ts");







var BookingsPageModule = /** @class */ (function () {
    function BookingsPageModule() {
    }
    BookingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _bookings_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookingsPageRoutingModule"]
            ],
            declarations: [_bookings_page__WEBPACK_IMPORTED_MODULE_6__["BookingsPage"]]
        })
    ], BookingsPageModule);
    return BookingsPageModule;
}());



/***/ }),

/***/ "./src/app/bookings/bookings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/bookings/bookings.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmdzL2Jvb2tpbmdzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/bookings/bookings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/bookings/bookings.page.ts ***!
  \*******************************************/
/*! exports provided: BookingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsPage", function() { return BookingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _booking_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./booking.service */ "./src/app/bookings/booking.service.ts");




var BookingsPage = /** @class */ (function () {
    function BookingsPage(bookingService, loadingCtrl) {
        this.bookingService = bookingService;
        this.loadingCtrl = loadingCtrl;
        this.isLoading = false;
    }
    BookingsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.bookingSub = this.bookingService.bookings.subscribe(function (bookings) {
            _this.loadedBookings = bookings;
        });
    };
    BookingsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.isLoading = true;
        this.bookingService.fetchBookings().subscribe(function () {
            _this.isLoading = false;
        });
    };
    BookingsPage.prototype.onCancelBooking = function (bookingId, slidingEl) {
        var _this = this;
        slidingEl.close();
        console.log("cancel booking with id:", bookingId);
        this.loadingCtrl.create({ message: 'Cancelling..' }).then(function (loadingEl) {
            loadingEl.present();
            _this.bookingService.cancelBooking(bookingId).subscribe(function () { return loadingEl.dismiss(); });
        });
    };
    BookingsPage.prototype.ngOnDestroy = function () {
        if (this.bookingSub) {
            this.bookingSub.unsubscribe();
        }
    };
    BookingsPage.ctorParameters = function () { return [
        { type: _booking_service__WEBPACK_IMPORTED_MODULE_3__["BookingService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
    ]; };
    BookingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bookings',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bookings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/bookings.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bookings.page.scss */ "./src/app/bookings/bookings.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_booking_service__WEBPACK_IMPORTED_MODULE_3__["BookingService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], BookingsPage);
    return BookingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=bookings-bookings-module.js.map