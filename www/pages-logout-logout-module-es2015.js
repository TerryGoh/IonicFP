(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-logout-logout-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/logout/logout.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/logout/logout.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Logout</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ul class=\"breadcrumb\" id=\"breadcrumbs\">\n    <li style=\"display: inline;\"><a href=\"/tabs/main\"> Home </a><i class=\"ion-chevron-right\"></i></li>\n    <li style=\"display: inline;\" class=\"active\"> Help </li>\n  </ul>    \n<ion-button style=\"color:white\" (click)=\"Logout()\">Logout</ion-button>\n\n<br>\n<br>\n<button class=\"accordion\" (click)='ionViewDidLoad()'>\n  Reset Password\n</button>\n\n<div style=\"margin: 5px 90px\" class=\"panel\">\n  <br>\n  <form class=\"container\" [formGroup]=\"loginForm1\">\n    <div class=\"form-group\"> \n            <ion-label position=\"stacked\">New Password <span style=\"color: red\">*</span></ion-label>\n            <div class=\"form\">\n            <input autocomplete=\"off\" name=\"password\" class=\"form-control\" formControlName=\"password\" [type]=\"showPassword4 ? 'text': 'password'\" >\n            <ion-icon slot=\"end\" [name]=\"passwordToggleIcon4\" (click)=\"togglePassword4()\"></ion-icon>\n            </div>\n    </div>\n    <div class=\"error-messages\">\n      <ng-container *ngFor=\"let error of error_messages.password\">\n        <div class=\"error-message\" *ngIf=\"loginForm1.get('password').hasError(error.type) && (loginForm1.get('password').dirty || loginForm1.get('password').touched)\">\n          {{ error.message }}\n        </div>\n      </ng-container>\n    </div>\n          \n    <br>\n    <div class=\"form-group\">\n            <ion-label position=\"stacked\">Confirm New Password <span style=\"color: red\">*</span></ion-label>\n            <div class=\"form\">\n            <input autocomplete=\"off\" name=\"confirmpassword\" class=\"form-control\" formControlName=\"confirmpassword\" [type]=\"showPassword5 ? 'text': 'password'\" />\n            <ion-icon slot=\"end\" [name]=\"passwordToggleIcon5\" (click)=\"togglePassword5()\"></ion-icon>\n          </div> \n          </div>\n          <div class=\"error-messages\">\n            <ng-container *ngFor=\"let error of error_messages.confirmpassword\">\n              <div class=\"error-message\" *ngIf=\"loginForm1.get('confirmpassword').hasError(error.type) && (loginForm1.get('confirmpassword').dirty || loginForm1.get('confirmpassword').touched)\">\n                {{ error.message }}\n              </div>\n            </ng-container>\n            <div class=\"error-message\" *ngIf=\"!loginForm1.get('confirmpassword').errors && loginForm1.hasError('passwordNotMatch') && (loginForm1.get('confirmpassword').dirty || loginForm1.get('confirmpassword').touched)\">\n              Password and Confirm Password fields should match\n            </div>\n          </div>\n         <br>\n         <div class=\"ionbutton\">\n          <ion-button class=\"form-control btn btn-primary\" [disabled]=\"!loginForm1.valid\" share=\"round\" (click)=\"presentAlert()\">Confirm</ion-button></div>\n<br><br><br><br><br>\n</form>\n   </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/logout/hello.component.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/logout/hello.component.ts ***!
  \*************************************************/
/*! exports provided: HelloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloComponent", function() { return HelloComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HelloComponent = class HelloComponent {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HelloComponent.prototype, "name", void 0);
HelloComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'hello',
        template: `<h1>Hello {{name}}!</h1>`,
        styles: ["h1 { font-family: Lato; }"]
    })
], HelloComponent);



/***/ }),

/***/ "./src/app/pages/logout/logout-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/logout/logout-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: LogoutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutPageRoutingModule", function() { return LogoutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _logout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logout.page */ "./src/app/pages/logout/logout.page.ts");




const routes = [
    {
        path: '',
        component: _logout_page__WEBPACK_IMPORTED_MODULE_3__["LogoutPage"]
    }
];
let LogoutPageRoutingModule = class LogoutPageRoutingModule {
};
LogoutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LogoutPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/logout/logout.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/logout/logout.module.ts ***!
  \***********************************************/
/*! exports provided: LogoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutPageModule", function() { return LogoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _logout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logout-routing.module */ "./src/app/pages/logout/logout-routing.module.ts");
/* harmony import */ var _logout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logout.page */ "./src/app/pages/logout/logout.page.ts");
/* harmony import */ var _hello_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hello.component */ "./src/app/pages/logout/hello.component.ts");








let LogoutPageModule = class LogoutPageModule {
};
LogoutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _logout_routing_module__WEBPACK_IMPORTED_MODULE_5__["LogoutPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_logout_page__WEBPACK_IMPORTED_MODULE_6__["LogoutPage"], _hello_component__WEBPACK_IMPORTED_MODULE_7__["HelloComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], LogoutPageModule);



/***/ }),

/***/ "./src/app/pages/logout/logout.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/logout/logout.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.form > input {\n  clear: right;\n}\n.form > ion-icon {\n  margin: -25px 10px;\n  float: right;\n}\n.accordion {\n  background-color: #d9f6ff;\n  color: #444;\n  cursor: pointer;\n  padding: 16px;\n  width: 90%;\n  height: auto;\n  border: none;\n  text-align: center;\n  outline: none;\n  font-size: 1em;\n  transition: 0.2s;\n  margin-bottom: 10px;\n  margin-left: 15px;\n  align-items: center;\n  border-radius: 5px;\n  font: #333f50;\n  font-weight: bold;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n.accordionLabel {\n  display: inline-block;\n  padding: 0 10px;\n}\n.active1, .accordion:hover {\n  background-color: #5798fa;\n}\n.accordion:after {\n  content: \"↲\";\n  color: #070000;\n  font-weight: bold;\n  float: right;\n  margin-left: 20px;\n}\n.active1:after {\n  content: \"↰\";\n}\n.panel {\n  padding: 0 10px;\n  margin: 20px 20px;\n  max-height: 0;\n  height: 1000px;\n  overflow: hidden;\n  transition: max-height 0.2s ease-out;\n  border-radius: 10px;\n  background-color: #FBF4F4;\n}\n.ionbutton {\n  text-align: center;\n}\n.error-message {\n  color: red;\n}\ninput.ng-touched.ng-invalid {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9nb3V0L2xvZ291dC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ291dC9DOlxcd29ya2luZ1xcTllQX1Byb2pcXGlvbmljX3Byb2plY3RcXEZTUF9TTFBfQVBQQUkvc3JjXFxhcHBcXHBhZ2VzXFxsb2dvdXRcXGxvZ291dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBR0UsWUFBQTtBREFGO0FDR0E7RUFFRSxrQkFBQTtFQUNBLFlBQUE7QURERjtBQ0lBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHdJQUFBO0FEREY7QUNLQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtBREZKO0FDS0E7RUFDRSx5QkFBQTtBREZGO0FDS0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FERkY7QUNLQTtFQUNFLFlBQUE7QURGRjtBQ0tBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBREhGO0FDTUE7RUFDRSxrQkFBQTtBREhGO0FDTUE7RUFDRSxVQUFBO0FESEY7QUNLQTtFQUNFLHFCQUFBO0FERkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dvdXQvbG9nb3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5mb3JtID4gaW5wdXQge1xuICBjbGVhcjogcmlnaHQ7XG59XG5cbi5mb3JtID4gaW9uLWljb24ge1xuICBtYXJnaW46IC0yNXB4IDEwcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmFjY29yZGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWY2ZmY7XG4gIGNvbG9yOiAjNDQ0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250OiAjMzMzZjUwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmFjY29yZGlvbkxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi5hY3RpdmUxLCAuYWNjb3JkaW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU3OThmYTtcbn1cblxuLmFjY29yZGlvbjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4oayXCI7XG4gIGNvbG9yOiAjMDcwMDAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmFjdGl2ZTE6YWZ0ZXIge1xuICBjb250ZW50OiBcIuKGsFwiO1xufVxuXG4ucGFuZWwge1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIG1hcmdpbjogMjBweCAyMHB4O1xuICBtYXgtaGVpZ2h0OiAwO1xuICBoZWlnaHQ6IDEwMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjJzIGVhc2Utb3V0O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGNEY0O1xufVxuXG4uaW9uYnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbmlucHV0Lm5nLXRvdWNoZWQubmctaW52YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn0iLCIuZm9ybSA+IGlucHV0XG57XG4gIC8vIGZsb2F0OiBsZWZ0O1xuICBjbGVhcjogcmlnaHQ7XG59XG5cbi5mb3JtID4gaW9uLWljb25cbntcbiAgbWFyZ2luOiAtMjVweCAxMHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5hY2NvcmRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDlmNmZmO1xuICBjb2xvcjogIzQ0NDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxNnB4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDFlbTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udDogIzMzM2Y1MDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gIFxufVxuXG4uYWNjb3JkaW9uTGFiZWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi5hY3RpdmUxLCAuYWNjb3JkaW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg3LCAxNTIsIDI1MCk7XG59XG5cbi5hY2NvcmRpb246YWZ0ZXIge1xuICBjb250ZW50OiAnXFwyMUIyJztcbiAgY29sb3I6IHJnYig3LCAwLCAwKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5hY3RpdmUxOmFmdGVyIHtcbiAgY29udGVudDogXCJcXDIxQjBcIjtcbn1cblxuLnBhbmVsIHtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBtYXJnaW46IDIwcHggMjBweDtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIGhlaWdodDogMTAwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMnMgZWFzZS1vdXQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQkY0RjQ7XG59XG5cbi5pb25idXR0b24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6IHJlZDtcbn1cbmlucHV0Lm5nLXRvdWNoZWQubmctaW52YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/logout/logout.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/logout/logout.page.ts ***!
  \*********************************************/
/*! exports provided: LogoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutPage", function() { return LogoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _model_global_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/global-api */ "./src/app/model/global-api.ts");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_assignments_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/assignments.service */ "./src/app/services/assignments.service.ts");










let LogoutPage = class LogoutPage {
    constructor(router, platform, storage, assignmentsService, nativeHttp, globalService, alertController, formBuilder) {
        this.router = router;
        this.platform = platform;
        this.storage = storage;
        this.assignmentsService = assignmentsService;
        this.nativeHttp = nativeHttp;
        this.globalService = globalService;
        this.alertController = alertController;
        this.formBuilder = formBuilder;
        this.showPassword4 = false;
        this.passwordToggleIcon4 = "eye";
        this.showPassword5 = false;
        this.passwordToggleIcon5 = "eye";
        this.error_messages = {
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password length is required to be between 6 to 30.' },
                { type: 'maxlength', message: 'Password length is required to be between 6 to 30.' }
            ],
            'confirmpassword': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password length is required to be between 6 to 30.' },
                { type: 'maxlength', message: 'Password length is required to be between 6 to 30.' },
            ],
        };
        this.loginForm1 = this.formBuilder.group({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(30)
            ])),
            confirmpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(30)
            ])),
        }, {
            validators: this.password.bind(this)
        });
    }
    ionViewDidEnter() {
        this.platform.backButton.subscribeWithPriority(10, () => {
            console.log('Handler was called!');
            this.router.navigateByUrl('tabs/main');
        });
        console.log(this.storage);
    }
    password(formGroup) {
        const { value: password } = formGroup.get('password');
        const { value: confirmPassword } = formGroup.get('confirmpassword');
        return password === confirmPassword ? null : { passwordNotMatch: true };
    }
    ionViewDidLoad() {
        var acc = document.getElementsByClassName("accordion");
        var i;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                }
                else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.token = this.globalService.getselectedtoken();
        this.studentid = this.globalService.getselectedStudentId();
    }
    ionViewWillLeave() {
    }
    Logout() {
        console.log(this.studentid);
        console.log(this.token);
        this.nativeHttp.setDataSerializer('json');
        this.nativeHttp.post(_model_global_api__WEBPACK_IMPORTED_MODULE_4__["apiurl"].apiUrl + 'student/logout', {
            "Authentication_Token": this.token,
            "User_Id": this.studentid
        }, {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
            .then((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const alert = yield this.alertController.create({
                    header: 'Logout',
                    // subHeader: 'Sub Alert',
                    message: 'Are you sure you want to logout?',
                    buttons: [{
                            text: 'Cancel',
                            role: 'cancel',
                            handler: () => {
                                console.log('You clicked me');
                            }
                        },
                        {
                            text: 'Okay',
                            cssClass: 'secondary',
                            handler: () => {
                                //  console.log('Second Handler');
                                this.storage.remove('mysession');
                                this.storage.remove('assignmentdetails');
                                this.storage.remove('authlogin');
                                this.storage.remove('joinsession');
                                this.storage.remove('chatdetails');
                                this.storage.remove('User_Id');
                                this.storage.remove('Authentication_Token');
                                this.router.navigateByUrl('/login');
                            }
                        }]
                });
                yield alert.present();
            }
            catch (e) {
                console.error(e);
            }
        }))
            .catch(response => {
            // prints 403
            console.log(response.status);
            // prints Permission denied
            console.log(response.error);
            this.assignmentsService.presentError();
        });
    }
    togglePassword4() {
        this.showPassword4 = !this.showPassword4;
        if (this.passwordToggleIcon4 == "eye") {
            this.passwordToggleIcon4 = 'eye-off';
        }
        else {
            this.passwordToggleIcon4 = 'eye';
        }
    }
    togglePassword5() {
        this.showPassword5 = !this.showPassword5;
        if (this.passwordToggleIcon5 == "eye") {
            this.passwordToggleIcon5 = 'eye-off';
        }
        else {
            this.passwordToggleIcon5 = 'eye';
        }
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Reset Password',
                // subHeader: 'Sub Alert',
                message: 'Reset Password Successful',
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            console.log('You clicked me');
                        }
                    },
                    {
                        text: 'Okay',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Second Handler');
                            this.assignmentsService.presentpasswordsuccess();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
LogoutPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: src_app_services_assignments_service__WEBPACK_IMPORTED_MODULE_9__["AssignmentsService"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] }
];
LogoutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logout',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./logout.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/logout/logout.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./logout.page.scss */ "./src/app/pages/logout/logout.page.scss")).default]
    })
], LogoutPage);



/***/ })

}]);
//# sourceMappingURL=pages-logout-logout-module-es2015.js.map