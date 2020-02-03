(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~discover-place-detail-place-detail-module~new-offer-new-offer-module~offers-new-offer-new-of~089e34c1"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/map-modal/map-modal.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/map-modal/map-modal.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{title}}</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onCancel()\">{{ closeButtonText }}</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"map\" #map></div>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pickers/image-picker/image-picker.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pickers/image-picker/image-picker.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"picker\">\n  <ion-img role=\"button\" (click)=\"onPickImage()\" class=\"image\" [src]=\"selectedImage\" *ngIf=\"selectedImage\"></ion-img>\n  <ion-button color=\"primary\" (click)=\"onPickImage()\" *ngIf=\"!selectedImage\">\n    <ion-icon name=\"camera\" slot=\"start\"></ion-icon>\n    <ion-label>Take Picture</ion-label>\n    </ion-button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pickers/location-picker/location-picker.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pickers/location-picker/location-picker.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"picker\">\n  <ion-spinner color=\"primary\" *ngIf=\"isLoading\"></ion-spinner>\n  <ion-img role=\"button\" (click)=\"onPickLocation()\" class=\"location-image\" [src]=\"selectedLocationImage\" *ngIf=\"!isLoading && selectedLocationImage\"></ion-img>\n  <ion-button color=\"primary\" (click)=\"onPickLocation()\" *ngIf=\"!isLoading && !selectedLocationImage\">\n    <ion-icon name=\"map\" slot=\"start\"></ion-icon>\n    <ion-label>Select Location</ion-label>\n    </ion-button>\n</div>\n");

/***/ }),

/***/ "./src/app/shared/map-modal/map-modal.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/shared/map-modal/map-modal.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".map {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: transparent;\n  opacity: 0;\n  transition: opacity 150ms ease-in;\n}\n\n.map.visible {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZzAzMDQxODUvRGVza3RvcC9wcm9qZWN0cy9Bbmd1bGFyL2lvbmljLWFuZ3VsYXItY291cnNlL3NyYy9hcHAvc2hhcmVkL21hcC1tb2RhbC9tYXAtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9tYXAtbW9kYWwvbWFwLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLGlDQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbWFwLW1vZGFsL21hcC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGVhc2UtaW47XG59XG5cbi5tYXAudmlzaWJsZSB7XG4gICAgb3BhY2l0eTogMTtcbn0iLCIubWFwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluO1xufVxuXG4ubWFwLnZpc2libGUge1xuICBvcGFjaXR5OiAxO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/shared/map-modal/map-modal.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/map-modal/map-modal.component.ts ***!
  \*********************************************************/
/*! exports provided: MapModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModalComponent", function() { return MapModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var MapModalComponent = /** @class */ (function () {
    function MapModalComponent(modalCtrl, renderer) {
        this.modalCtrl = modalCtrl;
        this.renderer = renderer;
        this.selectable = true;
        this.closeButtonText = 'Cancel';
        this.title = 'Pick Location';
    }
    MapModalComponent.prototype.ngOnInit = function () { };
    MapModalComponent.prototype.ngAfterViewInit = function () {
        this.showCurrentLocation();
    };
    MapModalComponent.prototype.onCancel = function () {
        this.modalCtrl.dismiss();
    };
    MapModalComponent.prototype.showCurrentLocation = function () {
        var _this = this;
        if (!this.center && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.center = { lat: position.coords.latitude, lng: position.coords.longitude };
                _this.initGoogleMap();
            });
        }
        else {
            this.initGoogleMap();
            console.log('Geolocation is not supported by this browser.');
        }
    };
    MapModalComponent.prototype.ngOnDestroy = function () {
        if (this.clickListener) {
            this.googleMaps.event.removeListener(this.clickListener);
        }
    };
    MapModalComponent.prototype.initGoogleMap = function () {
        var _this = this;
        this.getGoogleMaps().then(function (googleMaps) {
            _this.googleMaps = googleMaps;
            var mapEl = _this.mapElementRef.nativeElement;
            var map = new googleMaps.Map(mapEl, {
                center: _this.center,
                zoom: 16
            });
            _this.googleMaps.event.addListenerOnce(map, 'idle', function () {
                _this.renderer.addClass(mapEl, 'visible');
            });
            if (_this.selectable) {
                _this.clickListener = map.addListener('click', function (event) {
                    var selectedCoords = {
                        lat: event.latLng.lat(),
                        lng: event.latLng.lng()
                    };
                    _this.modalCtrl.dismiss(selectedCoords);
                });
            }
            else {
                var marker = new googleMaps.Marker({
                    position: _this.center,
                    map: map,
                    title: 'Picked Location'
                });
                marker.setMap(map);
            }
        }).catch(function (err) {
            alert(err);
        });
    };
    MapModalComponent.prototype.getGoogleMaps = function () {
        var win = window;
        var googleModule = win.google;
        if (googleModule && googleModule.maps) {
            return Promise.resolve(googleModule.maps);
        }
        return new Promise(function (resolve, reject) {
            var script = document.createElement('script');
            script.src = 'https://maps.googleapis.com/maps/api/js?key=' + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].googleMapsAPIKey;
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
            script.onload = function () {
                var loadedGoogleModule = win.google;
                if (loadedGoogleModule && loadedGoogleModule.maps) {
                    resolve(loadedGoogleModule.maps);
                }
                else {
                    resolve('Google maps SDK not available.');
                }
            };
        });
    };
    MapModalComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MapModalComponent.prototype, "mapElementRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MapModalComponent.prototype, "center", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MapModalComponent.prototype, "selectable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MapModalComponent.prototype, "closeButtonText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MapModalComponent.prototype, "title", void 0);
    MapModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./map-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/map-modal/map-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./map-modal.component.scss */ "./src/app/shared/map-modal/map-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], MapModalComponent);
    return MapModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/pickers/image-picker/image-picker.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/shared/pickers/image-picker/image-picker.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".picker {\n  width: 30rem;\n  max-width: 80%;\n  height: 20rem;\n  max-height: 30vh;\n  border: 1px solid var(--ion-color-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: auto;\n}\n\n.image {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZzAzMDQxODUvRGVza3RvcC9wcm9qZWN0cy9Bbmd1bGFyL2lvbmljLWFuZ3VsYXItY291cnNlL3NyYy9hcHAvc2hhcmVkL3BpY2tlcnMvaW1hZ2UtcGlja2VyL2ltYWdlLXBpY2tlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3BpY2tlcnMvaW1hZ2UtcGlja2VyL2ltYWdlLXBpY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3BpY2tlcnMvaW1hZ2UtcGlja2VyL2ltYWdlLXBpY2tlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waWNrZXIge1xuICAgIHdpZHRoOiAzMHJlbTtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDIwcmVtO1xuICAgIG1heC1oZWlnaHQ6IDMwdmg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IGF1dG87XG59XG4uaW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn0iLCIucGlja2VyIHtcbiAgd2lkdGg6IDMwcmVtO1xuICBtYXgtd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAyMHJlbTtcbiAgbWF4LWhlaWdodDogMzB2aDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/pickers/image-picker/image-picker.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/pickers/image-picker/image-picker.component.ts ***!
  \***********************************************************************/
/*! exports provided: ImagePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePickerComponent", function() { return ImagePickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");



var ImagePickerComponent = /** @class */ (function () {
    function ImagePickerComponent() {
        this.imagePick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ImagePickerComponent.prototype.ngOnInit = function () { };
    ImagePickerComponent.prototype.onPickImage = function () {
        var _this = this;
        if (!_capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Capacitor"].isPluginAvailable('Camera')) {
            return;
        }
        _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Camera.getPhoto({
            quality: 50,
            source: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Prompt,
            correctOrientation: true,
            height: 320,
            width: 200,
            resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64
        }).then(function (image) {
            _this.selectedImage = image.base64String;
            _this.imagePick.emit(image.base64String);
        }).catch(function (err) {
            console.log(err);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ImagePickerComponent.prototype, "imagePick", void 0);
    ImagePickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-picker',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./image-picker.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pickers/image-picker/image-picker.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./image-picker.component.scss */ "./src/app/shared/pickers/image-picker/image-picker.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ImagePickerComponent);
    return ImagePickerComponent;
}());



/***/ }),

/***/ "./src/app/shared/pickers/location-picker/location-picker.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/pickers/location-picker/location-picker.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".picker {\n  width: 30rem;\n  max-width: 80%;\n  height: 20rem;\n  max-height: 30vh;\n  border: 1px solid var(--ion-color-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: auto;\n}\n\n.location-image {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZzAzMDQxODUvRGVza3RvcC9wcm9qZWN0cy9Bbmd1bGFyL2lvbmljLWFuZ3VsYXItY291cnNlL3NyYy9hcHAvc2hhcmVkL3BpY2tlcnMvbG9jYXRpb24tcGlja2VyL2xvY2F0aW9uLXBpY2tlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3BpY2tlcnMvbG9jYXRpb24tcGlja2VyL2xvY2F0aW9uLXBpY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3BpY2tlcnMvbG9jYXRpb24tcGlja2VyL2xvY2F0aW9uLXBpY2tlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waWNrZXIge1xuICAgIHdpZHRoOiAzMHJlbTtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDIwcmVtO1xuICAgIG1heC1oZWlnaHQ6IDMwdmg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IGF1dG87XG59XG4ubG9jYXRpb24taW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn0iLCIucGlja2VyIHtcbiAgd2lkdGg6IDMwcmVtO1xuICBtYXgtd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAyMHJlbTtcbiAgbWF4LWhlaWdodDogMzB2aDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ubG9jYXRpb24taW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/pickers/location-picker/location-picker.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/pickers/location-picker/location-picker.component.ts ***!
  \*****************************************************************************/
/*! exports provided: LocationPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPickerComponent", function() { return LocationPickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../map-modal/map-modal.component */ "./src/app/shared/map-modal/map-modal.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");









var LocationPickerComponent = /** @class */ (function () {
    function LocationPickerComponent(modalCtrl, http, alertCtrl, actionSheetCtrl) {
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.locationPick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isLoading = false;
    }
    LocationPickerComponent.prototype.ngOnInit = function () { };
    LocationPickerComponent.prototype.onPickLocation = function () {
        var _this = this;
        this.actionSheetCtrl
            .create({
            header: 'Please Choose',
            buttons: [
                {
                    text: 'Auto-Locate',
                    handler: function () {
                        _this.locateUser();
                    }
                },
                {
                    text: 'Pick on Map',
                    handler: function () {
                        _this.openMap();
                    }
                },
                { text: 'Cancel', role: 'cancel' }
            ]
        })
            .then(function (actionSheetEl) {
            actionSheetEl.present();
        });
    };
    LocationPickerComponent.prototype.locateUser = function () {
        var _this = this;
        if (!_capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Capacitor"].isPluginAvailable('Geolocation')) {
            this.showErrorAlert();
            return;
        }
        this.isLoading = true;
        _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"].Geolocation.getCurrentPosition().then((function (position) {
            // const coordinates: Coordinates = { lat: position.coords.latitude, lng: position.coords.longitude};
            _this.createPlace(position.coords.latitude, position.coords.longitude);
            _this.isLoading = false;
        })).catch(function () {
            _this.isLoading = false;
            _this.showErrorAlert();
        });
    };
    LocationPickerComponent.prototype.showErrorAlert = function () {
        this.alertCtrl.create({
            header: 'Could not fetch location',
            message: 'Please use the map to pick a location!',
            buttons: ['Okay']
        }).then(function (alertEl) { return alertEl.present(); });
    };
    LocationPickerComponent.prototype.openMap = function () {
        var _this = this;
        this.modalCtrl.create({ component: _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_5__["MapModalComponent"] }).then(function (modalEl) {
            modalEl.onDidDismiss().then(function (modalData) {
                console.log(modalData.data);
                if (!modalData.data) {
                    return;
                }
                _this.createPlace(modalData.data.lat, modalData.data.lng);
            });
            modalEl.present();
        });
    };
    LocationPickerComponent.prototype.createPlace = function (lat, lng) {
        var _this = this;
        var pickedLocation = {
            lat: lat,
            lng: lng,
            address: null,
            staticMapImageUrl: null
        };
        this.isLoading = true;
        this.getAddress(lat, lng)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (address) {
            pickedLocation.address = address;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(_this.getMapImage(pickedLocation.lat, pickedLocation.lng, 16));
        }))
            .subscribe(function (staticMapImageUrl) {
            pickedLocation.staticMapImageUrl = staticMapImageUrl;
            _this.selectedLocationImage = staticMapImageUrl;
            _this.isLoading = false;
            _this.locationPick.emit(pickedLocation);
        });
    };
    LocationPickerComponent.prototype.getAddress = function (lat, lng) {
        var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=" + _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].googleMapsAPIKey;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (geoData) {
            if (!geoData || !geoData.results || geoData.results.length === 0) {
                return null;
            }
            return geoData.results[0].formatted_address;
        }));
    };
    LocationPickerComponent.prototype.getMapImage = function (lat, lng, zoom) {
        return "https://maps.googleapis.com/maps/api/staticmap?center=" + lat + "," + lng + "&zoom=" + zoom + "&size=500x300&maptype=roadmap\n    &markers=color:red%7Clabel:Place%7C" + lat + "," + lng + "&key=" + _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].googleMapsAPIKey;
    };
    LocationPickerComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LocationPickerComponent.prototype, "locationPick", void 0);
    LocationPickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-location-picker',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./location-picker.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pickers/location-picker/location-picker.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./location-picker.component.scss */ "./src/app/shared/pickers/location-picker/location-picker.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]])
    ], LocationPickerComponent);
    return LocationPickerComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pickers_location_picker_location_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pickers/location-picker/location-picker.component */ "./src/app/shared/pickers/location-picker/location-picker.component.ts");
/* harmony import */ var _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map-modal/map-modal.component */ "./src/app/shared/map-modal/map-modal.component.ts");
/* harmony import */ var _pickers_image_picker_image_picker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pickers/image-picker/image-picker.component */ "./src/app/shared/pickers/image-picker/image-picker.component.ts");







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_pickers_location_picker_location_picker_component__WEBPACK_IMPORTED_MODULE_4__["LocationPickerComponent"], _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_5__["MapModalComponent"], _pickers_image_picker_image_picker_component__WEBPACK_IMPORTED_MODULE_6__["ImagePickerComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
            exports: [_pickers_location_picker_location_picker_component__WEBPACK_IMPORTED_MODULE_4__["LocationPickerComponent"], _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_5__["MapModalComponent"], _pickers_image_picker_image_picker_component__WEBPACK_IMPORTED_MODULE_6__["ImagePickerComponent"]],
            entryComponents: [_map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_5__["MapModalComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~discover-place-detail-place-detail-module~new-offer-new-offer-module~offers-new-offer-new-of~089e34c1.js.map