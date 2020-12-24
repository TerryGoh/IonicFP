(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-authentication-method-authentication-method-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication-method/authentication-method.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication-method/authentication-method.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-title>Student Learning Platform</ion-title>\n    </ion-toolbar>\n</ion-header>\n<link href=\"https://code.ionicframework.com/nightly/css/ionic.css\" rel=\"stylesheet\">\n\n<ion-content padding='true'>\n    <div class=\"container\">\n\n        <div style=\"margin: 30px\">\n            <p class=\"p\">Select Authentication Method</p>\n            <br>\n            <form class=\"container\" [formGroup]=\"loginForm\">\n\n                    <div class=\"form-group\">\n                      <ion-label position=\"stacked\">Phone <span style=\"color: red\">*</span></ion-label>\n                      <input id=\"numberTxt\" placeholder=\"Enter mobile number\" value=\"\" type=\"tel\" name=\"phoneNo\" />\n                    </div>\n                    <div class=\"error-messages\">\n                      <ng-container *ngFor=\"let error of error_messages.phoneNo\">\n                        <div class=\"error-message\" *ngIf=\"loginForm.get('phoneNo').hasError(error.type) && (loginForm.get('phoneNo').dirty || loginForm.get('phoneNo').touched)\">\n                          {{ error.message }}\n                        </div>\n                      </ng-container>\n                    </div>\n\n                    <br>\n\n                    <div class=\"form-group\">\n                        <ion-label position=\"stacked\">Code Input <span style=\"color: red\">*</span></ion-label>\n                        <input id=\"messageTxt\" placeholder=\"Enter message\" value=\"\" type=\"text\" name=\"code\"/>\n                      </div>\n                      <div class=\"error-messages\">\n                        <ng-container *ngFor=\"let error of error_messages.code\">\n                          <div class=\"error-message\" *ngIf=\"loginForm.get('code').hasError(error.type) && (loginForm.get('code').dirty || loginForm.get('code').touched)\">\n                            {{ error.message }}\n                          </div>\n                        </ng-container>\n                      </div>\n\n                      <br>\n\n                      <ion-button class=\"form-control btn btn-primary\" share=\"round\" style=\"--background:#20a7c2\" (click)=\"sendSMS()\">Send SMS</ion-button>\n            </form>\n        </div>\n    </div>\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/authentication-method/authentication-method-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/authentication-method/authentication-method-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: AuthenticationMethodPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationMethodPageRoutingModule", function() { return AuthenticationMethodPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _authentication_method_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication-method.page */ "./src/app/pages/authentication-method/authentication-method.page.ts");




const routes = [
    {
        path: '',
        component: _authentication_method_page__WEBPACK_IMPORTED_MODULE_3__["AuthenticationMethodPage"]
    }
];
let AuthenticationMethodPageRoutingModule = class AuthenticationMethodPageRoutingModule {
};
AuthenticationMethodPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AuthenticationMethodPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/authentication-method/authentication-method.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/authentication-method/authentication-method.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AuthenticationMethodPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationMethodPageModule", function() { return AuthenticationMethodPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _authentication_method_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication-method-routing.module */ "./src/app/pages/authentication-method/authentication-method-routing.module.ts");
/* harmony import */ var _authentication_method_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentication-method.page */ "./src/app/pages/authentication-method/authentication-method.page.ts");







let AuthenticationMethodPageModule = class AuthenticationMethodPageModule {
};
AuthenticationMethodPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _authentication_method_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthenticationMethodPageRoutingModule"]
        ],
        declarations: [_authentication_method_page__WEBPACK_IMPORTED_MODULE_6__["AuthenticationMethodPage"]]
    })
], AuthenticationMethodPageModule);



/***/ }),

/***/ "./src/app/pages/authentication-method/authentication-method.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/authentication-method/authentication-method.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center {\n  text-align: center;\n}\n\nion-title {\n  text-align: center;\n}\n\n.p {\n  color: #1c91a8;\n  font-weight: bold;\n  font-size: 20px;\n}\n\n.ionbutton {\n  --vertical-align: middle;\n  --padding-start: 100px;\n  --padding-end: 100px;\n  text-align: center;\n  font-family: \"Roboto\";\n  display: flex;\n  align-items: center;\n}\n\n.error-message {\n  color: red;\n}\n\ninput.ng-touched.ng-invalid {\n  border: 1px solid red;\n}\n\nion-button {\n  --vertical-align: middle;\n  --padding-start: 100px;\n  --padding-end: 100px;\n  text-align: center;\n  font-family: \"Roboto\";\n  display: flex;\n  align-items: center;\n  color: white;\n}\n\n.form > input {\n  clear: right;\n}\n\n.form > ion-icon {\n  margin: -25px 100px;\n  float: right;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n  margin-top: -100px;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 500px;\n  background-color: black;\n  color: #fff;\n  text-align: left;\n  border-radius: 6px;\n  padding: 5px 0;\n  position: absolute;\n  z-index: 1;\n}\n\n.tooltip .tooltiptext .tooltip {\n  position: relative;\n  display: inline-block;\n  margin-top: -100px;\n}\n\n.tooltip .tooltiptext .tooltip .tooltiptext {\n  visibility: hidden;\n  width: 500px;\n  background-color: black;\n  color: #fff;\n  text-align: left;\n  border-radius: 6px;\n  padding: 5px 0;\n  position: absolute;\n  z-index: 1;\n}\n\n.tooltip .tooltiptext .tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aGVudGljYXRpb24tbWV0aG9kL0M6XFx3b3JraW5nXFxOWVBfUHJvalxcaW9uaWNfcHJvamVjdFxcRlNQX1NMUF9BUFBBSS9zcmNcXGFwcFxccGFnZXNcXGF1dGhlbnRpY2F0aW9uLW1ldGhvZFxcYXV0aGVudGljYXRpb24tbWV0aG9kLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYXV0aGVudGljYXRpb24tbWV0aG9kL2F1dGhlbnRpY2F0aW9uLW1ldGhvZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUVJLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURNRTtFQUNFLFVBQUE7QUNISjs7QURLRTtFQUNFLHFCQUFBO0FDRko7O0FES0U7RUFFRSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0pKOztBRE9FO0VBR0EsWUFBQTtBQ05GOztBRFNBO0VBRUUsbUJBQUE7RUFDQSxZQUFBO0FDUEY7O0FEVUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNQRjs7QURVQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFzQkEsY0FBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtBQzdCRjs7QURJcUI7RUFDakIsa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDRko7O0FES0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtBQ0pKOztBRE9FO0VBQ0UsbUJBQUE7QUNMSjs7QURhQTtFQUNFLG1CQUFBO0FDVkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdXRoZW50aWNhdGlvbi1tZXRob2QvYXV0aGVudGljYXRpb24tbWV0aG9kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wIHtcbiAgICBjb2xvcjogIzFjOTFhODtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5pb25idXR0b24ge1xuICAgIC8vIC0td2lkdGg6IDUwMHB4O1xuICAgIC0tdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDEwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgLy8gcGFkZGluZzogMTAwMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBcbiAgICBcbiAgfVxuXG4gIC5lcnJvci1tZXNzYWdlIHtcbiAgICBjb2xvcjogcmVkO1xuICB9XG4gIGlucHV0Lm5nLXRvdWNoZWQubmctaW52YWxpZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICB9XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgICAvLyAtLXdpZHRoOiA1MDBweDtcbiAgICAtLXZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMDBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIC8vIHBhZGRpbmc6IDEwMDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5mb3JtID4gaW5wdXRcbntcbiAgLy8gZmxvYXQ6IGxlZnQ7XG4gIGNsZWFyOiByaWdodDtcbn1cblxuLmZvcm0gPiBpb24taWNvblxue1xuICBtYXJnaW46IC0yNXB4IDEwMHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi50b29sdGlwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IC0xMDBweDtcbn1cblxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB3aWR0aDogNTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogNnB4Oy50b29sdGlwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi10b3A6IC0xMDBweDtcbiAgfVxuICBcbiAgLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICBcbiAgLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG4gIHBhZGRpbmc6IDVweCAwO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbiAgIiwiLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucCB7XG4gIGNvbG9yOiAjMWM5MWE4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uaW9uYnV0dG9uIHtcbiAgLS12ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwMHB4O1xuICAtLXBhZGRpbmctZW5kOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogcmVkO1xufVxuXG5pbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLXZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIC0tcGFkZGluZy1zdGFydDogMTAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5mb3JtID4gaW5wdXQge1xuICBjbGVhcjogcmlnaHQ7XG59XG5cbi5mb3JtID4gaW9uLWljb24ge1xuICBtYXJnaW46IC0yNXB4IDEwMHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi50b29sdGlwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IC0xMDBweDtcbn1cblxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB3aWR0aDogNTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiA1cHggMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xufVxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IC50b29sdGlwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IC0xMDBweDtcbn1cbi50b29sdGlwIC50b29sdGlwdGV4dCAudG9vbHRpcCAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHdpZHRoOiA1MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG59XG4udG9vbHRpcCAudG9vbHRpcHRleHQgLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/authentication-method/authentication-method.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/authentication-method/authentication-method.page.ts ***!
  \***************************************************************************/
/*! exports provided: AuthenticationMethodPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationMethodPage", function() { return AuthenticationMethodPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "./node_modules/@ionic-native/email-composer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");








let AuthenticationMethodPage = class AuthenticationMethodPage {
    constructor(alertController, router, platform, storage, nativeHttp, composer) {
        this.alertController = alertController;
        this.router = router;
        this.platform = platform;
        this.storage = storage;
        this.nativeHttp = nativeHttp;
        this.composer = composer;
    }
    ngOnInit() {
    }
    sendSMS() {
        var number = document.getElementById('numberTxt').value.toString(); /* iOS: ensure number is actually a string */
        var message = document.getElementById('messageTxt').value;
        console.log("number=" + number + ", message= " + message);
        //CONFIGURATION
        var options = {
            replaceLineBreaks: false,
            android: {
                intent: 'INTENT' // send SMS with the native android SMS messaging
                //intent: '' // send SMS without opening any other app, require : android.permission.SEND_SMS and android.permission.READ_PHONE_STATE
            }
        };
        var successMsg = function () { alert('Message sent successfully'); };
        var errorMsg = function (e) { alert('Message Failed:' + e); };
        var success = function (hasPermission) {
            if (hasPermission) {
                this.sms.send(number, message, options, successMsg, errorMsg);
            }
            else if (!hasPermission) {
                this.sms.requestPermission(function () {
                    console.log('[OK] Permission accepted');
                }, function (error) {
                    console.info('[WARN] Permission not accepted');
                    // Handle permission not accepted
                });
            }
            else {
                console.log('[WARN] Permission needed for SMS');
                // show a helpful message to explain why you need to require the permission to send a SMS
            }
        };
        var error = function (e) { alert('Something went wrong:' + e); };
        this.sms.hasPermission(this.sendSMS, error);
    }
};
AuthenticationMethodPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"] },
    { type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_5__["EmailComposer"] }
];
AuthenticationMethodPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-authentication-method',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./authentication-method.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication-method/authentication-method.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./authentication-method.page.scss */ "./src/app/pages/authentication-method/authentication-method.page.scss")).default]
    })
], AuthenticationMethodPage);



/***/ })

}]);
//# sourceMappingURL=pages-authentication-method-authentication-method-module-es2015.js.map