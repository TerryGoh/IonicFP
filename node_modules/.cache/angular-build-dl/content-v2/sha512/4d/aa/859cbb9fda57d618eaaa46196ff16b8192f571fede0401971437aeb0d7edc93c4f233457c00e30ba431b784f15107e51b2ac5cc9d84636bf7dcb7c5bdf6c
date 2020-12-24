(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <ion-header>\n    <ion-toolbar class=\"new-background-color\">\n      <ion-title>Student Learning Platform</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <link href=\"https://code.ionicframework.com/nightly/css/ionic.css\" rel=\"stylesheet\"> \n\n  <ion-content padding='true'>\n    <div class=\"container\">\n\n      <div style=\"margin: 30px\">\n        <p class=\"p\">Sign Up An Account (Student)</p>\n    <br>\n        <form class=\"container\" [formGroup]=\"loginForm\">\n          <div class=\"form-group\">\n            <ion-label position=\"stacked\">Username <span style=\"color: red\">*</span></ion-label>\n            <input class=\"form-control userInput\" formControlName=\"username\" type=\"text\" autocomplete=\"off\" name=\"username\" placeholder=\"Enter username\" [(ngModel)]=\"postData.Username\"/>\n          </div>\n          <div class=\"error-messages\">\n            <ng-container *ngFor=\"let error of error_messages.username\">\n              <div class=\"error-message\" *ngIf=\"loginForm.get('username').hasError(error.type) && (loginForm.get('username').dirty || loginForm.get('username').touched)\">\n                {{ error.message }}\n              </div>\n            </ng-container>\n          </div>\n    <br>\n          <div class=\"form-group\">\n            <ion-label position=\"stacked\">Password <span style=\"color: red\">*</span></ion-label>\n            <div class=\"form\">\n            <input autocomplete=\"off\" name=\"password\" class=\"form-control userInput\" formControlName=\"password\" placeholder=\"Enter password\" [type]=\"showPassword ? 'text': 'password'\" [(ngModel)]=\"postData.Password\"/>\n            <ion-icon slot=\"end\" [name]=\"passwordToggleIcon\" (click)=\"togglePassword()\"></ion-icon>\n            </div >\n          </div>\n          <div class=\"error-messages\">\n            <ng-container *ngFor=\"let error of error_messages.password\">\n              <div class=\"error-message\" *ngIf=\"loginForm.get('password').hasError(error.type) && (loginForm.get('password').dirty || loginForm.get('password').touched)\">\n                {{ error.message }}\n              </div>\n            </ng-container>\n          </div>\n          \n    <br>\n          <div class=\"form-group\">\n            <ion-label position=\"stacked\">Confirm Password <span style=\"color: red\">*</span></ion-label>\n            <div class=\"form\">\n            <input autocomplete=\"off\" name=\"confirmpassword\" class=\"form-control userInput\" formControlName=\"confirmpassword\" placeholder=\"Enter password to confirm\" [type]=\"showPassword1 ? 'text': 'password'\" />\n            <ion-icon slot=\"end\" [name]=\"passwordToggleIcon1\" (click)=\"togglePassword1()\"></ion-icon>\n          </div>\n          </div>\n          <div class=\"error-messages\">\n            <ng-container *ngFor=\"let error of error_messages.confirmpassword\">\n              <div class=\"error-message\" *ngIf=\"loginForm.get('confirmpassword').hasError(error.type) && (loginForm.get('confirmpassword').dirty || loginForm.get('confirmpassword').touched)\">\n                {{ error.message }}\n              </div>\n            </ng-container>\n            <div class=\"error-message\" *ngIf=\"!loginForm.get('confirmpassword').errors && loginForm.hasError('passwordNotMatch') && (loginForm.get('confirmpassword').dirty || loginForm.get('confirmpassword').touched)\">\n              Password and Confirm Password fields should match\n            </div>\n          </div>\n<br>\n            <div class=\"form-group\">\n              <ion-label position=\"stacked\">Email <span style=\"color: red\">*</span></ion-label>\n              <input autocomplete=\"off\" name=\"email\" class=\"form-control userInput\" formControlName=\"email\" type=\"email\" placeholder=\"Eg.sally@gmail.com\" [(ngModel)]=\"postData.Email\"/>\n            </div>\n            <div class=\"error-messages\">\n              <ng-container *ngFor=\"let error of error_messages.email\">\n                <div class=\"error-message\" *ngIf=\"loginForm.get('email').hasError(error.type) && \n          (loginForm.get('email').dirty || loginForm.get('email').touched)\">\n                  {{ error.message }}\n                </div>\n              </ng-container>\n            </div>\n<br>\n            <div class=\"form-group\">\n              <ion-label position=\"stacked\">School <span style=\"color: red\">*</span></ion-label>\n              <ion-select autocomplete=\"off\" name=\"school\" formControlName=\"school\" class=\"form-control list\" placeholder=\"Select school\" [(ngModel)]=\"postData.School_Id\">\n                <ion-select-option *ngFor=\"let school of textdisplayschool\" value=\"{{school.school_Id}}\">{{school.school_DisplayName}}</ion-select-option>\n              </ion-select>\n              <!-- <ion-select name=\"school\" class=\"form-control list\" formControlName=\"school\" type=\"text\" placeholder=\"Select school\" [(ngModel)]=\"postData.School_Id\">\n                <ion-select-option value=\"S001\" placeholder = 'S001'>Admiralty PS</ion-select-option>\n                <ion-select-option value=\"S002\">Ahmad Ibrahim PS</ion-select-option>\n                <ion-select-option value=\"S003\">Ai Tong School</ion-select-option>\n                <ion-select-option value=\"S004\">Alexandra PS</ion-select-option>\n                <ion-select-option value=\"S005\">Anchor Green PS</ion-select-option>\n                <ion-select-option value=\"S006\">Anderson PS</ion-select-option>\n                <ion-select-option value=\"S007\">Ang Mo Kio PS</ion-select-option>\n                <ion-select-option value=\"S008\">Anglo-Chinese School</ion-select-option>\n                <ion-select-option value=\"S010\">Angsana PS</ion-select-option>\n                <ion-select-option value=\"S011\">Beacon PS</ion-select-option>\n                <ion-select-option value=\"S012\">Bedok Green PS</ion-select-option>\n              </ion-select> -->\n            </div>\n            <div class=\"error-messages\">\n              <ng-container *ngFor=\"let error of error_messages.school\">\n                <div class=\"error-message\" *ngIf=\"loginForm.get('school').hasError(error.type) && \n          (loginForm.get('school').dirty || loginForm.get('school').touched)\">\n                  {{ error.message }}\n                </div>\n              </ng-container>\n            </div>\n\n\n\n<br>\n            <div class=\"form-group\">\n              <ion-label position=\"stacked\">Level <span style=\"color: red\">*</span></ion-label>\n              <ion-select autocomplete=\"off\" name=\"level\" formControlName=\"level\" class=\"form-control list\" [(ngModel)]=\"postData.Level_Id\" placeholder=\"Select level\">\n                <ion-select-option *ngFor=\"let level of textdisplaylevel\" value=\"{{level.level_Id}}\">{{level.level_Name}} {{level.level_Num}} ({{level.level_Id}})</ion-select-option>\n              </ion-select>\n            <!-- <ion-select autocomplete=\"off\" name=\"level\" class=\"form-control list\" formControlName=\"level\" type=\"text\" placeholder=\"Select level\" [(ngModel)]=\"postData.Level_Id\">\n              <ion-select-option value=\"p1\">P1</ion-select-option>\n              <ion-select-option value=\"p2\">P2</ion-select-option>\n              <ion-select-option value=\"p3\">P3</ion-select-option>\n              <ion-select-option value=\"p4\">P4</ion-select-option>\n              <ion-select-option value=\"p5\">P5</ion-select-option>\n              <ion-select-option value=\"p6\">P6</ion-select-option>\n            </ion-select> -->\n            </div>\n            <div class=\"error-messages\">\n              <ng-container *ngFor=\"let error of error_messages.level\">\n                <div class=\"error-message\" *ngIf=\"loginForm.get('level').hasError(error.type) && \n          (loginForm.get('level').dirty || loginForm.get('level').touched)\">\n                  {{ error.message }}\n                </div>\n              </ng-container>\n            </div>\n<br>\n            <div class=\"form-group\">\n              <ion-label position=\"stacked\">Date of Birth <span style=\"color: red\">*</span></ion-label>\n              <ion-input [(ngModel)]=\"postData.DateOfBirth\" (click)=\"SelectDate()\" placeholder=\"Enter date of birth\" autocomplete=\"off\" name=\"dob\" class=\"form-control date\" formControlName=\"dob\">&nbsp;&nbsp;&nbsp;</ion-input>         \n\n            </div>\n            <div class=\"error-messages\">\n              <ng-container *ngFor=\"let error of error_messages.dob\">\n                <div class=\"error-message\" *ngIf=\"loginForm.get('dob').hasError(error.type) && \n          (loginForm.get('dob').dirty || loginForm.get('dob').touched)\">\n                  {{ error.message }}\n                </div>\n              </ng-container>\n            </div> \n\n<br>\n            <div class=\"form-group\" id=\"coupon\">\n              <ion-label position=\"stacked\">Coupon Code <span style=\"color: red\">*</span></ion-label>\n              <input autocomplete=\"off\" name=\"coupon\" class=\"form-control coupon\" formControlName=\"coupon\" type=\"text\" placeholder=\"Enter coupon code\" [(ngModel)]=\"postData.Voucher_Code\"/>\n            </div>\n            <div class=\"error-messages\">\n              <ng-container *ngFor=\"let error of error_messages.coupon\">\n                <div class=\"error-message\" *ngIf=\"loginForm.get('coupon').hasError(error.type) && \n          (loginForm.get('coupon').dirty || loginForm.get('coupon').touched)\">\n                  {{ error.message }}\n                </div>\n              </ng-container>\n            </div>\n<br>\n            <div class=\"center\">\n                <p (click)=\"login()\">Already have an account? </p>\n              <br>\n            </div>\n          <br>\n          <ion-button class=\"form-control btn btn-primary\" share=\"round\" style=\"--background:#20a7c2\" (click)=\"Signup()\">Submit</ion-button>\n          <!-- <ion-button class=\"form-control btn btn-primary\" [disabled]=\"!loginForm.valid\" share=\"round\" style=\"--background:#20a7c2\" (click)=\"Signup()\">Submit</ion-button> -->\n\n        </form>\n      </div>\n    </div>\n\n\n  </ion-content>\n  ");

/***/ }),

/***/ "./src/app/pages/signup/hello.component.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/signup/hello.component.ts ***!
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

/***/ "./src/app/pages/signup/signup-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/signup/signup-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/signup/signup.page.ts");




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/signup/signup.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/pages/signup/signup-routing.module.ts");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/signup/signup.page.ts");
/* harmony import */ var _hello_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hello.component */ "./src/app/pages/signup/hello.component.ts");









let SignupPageModule = class SignupPageModule {
};
SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_6__["SignupPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["IonicStorageModule"].forRoot()
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_7__["SignupPage"], _hello_component__WEBPACK_IMPORTED_MODULE_8__["HelloComponent"]]
    })
], SignupPageModule);



/***/ }),

/***/ "./src/app/pages/signup/signup.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center {\n  text-align: center;\n}\n\nion-title {\n  text-align: center;\n}\n\n.p {\n  color: #1c91a8;\n  font-weight: bold;\n  font-size: 20px;\n}\n\n.ionbutton {\n  --vertical-align: middle;\n  --padding-start: 100px;\n  --padding-end: 100px;\n  text-align: center;\n  font-family: \"Roboto\";\n  display: flex;\n  align-items: center;\n}\n\n.error-message {\n  color: red;\n}\n\ninput.ng-touched.ng-invalid {\n  border: 1px solid red;\n}\n\nion-button {\n  --vertical-align: middle;\n  --padding-start: 100px;\n  --padding-end: 100px;\n  text-align: center;\n  font-family: \"Roboto\";\n  display: flex;\n  align-items: center;\n  color: white;\n}\n\n.form > input {\n  clear: right;\n}\n\n.form > ion-icon {\n  margin: -38px 25px;\n  float: right;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n  margin-top: -100px;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 500px;\n  background-color: black;\n  color: #fff;\n  text-align: left;\n  border-radius: 6px;\n  padding: 5px 0;\n  position: absolute;\n  z-index: 1;\n}\n\n.tooltip .tooltiptext .tooltip {\n  position: relative;\n  display: inline-block;\n  margin-top: -100px;\n}\n\n.tooltip .tooltiptext .tooltip .tooltiptext {\n  visibility: hidden;\n  width: 500px;\n  background-color: black;\n  color: #fff;\n  text-align: left;\n  border-radius: 6px;\n  padding: 5px 0;\n  position: absolute;\n  z-index: 1;\n}\n\n.tooltip .tooltiptext .tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.form-control.userInput {\n  width: 100%;\n  border: 1px solid lightgrey;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  padding: 20px 0 20px 17px;\n}\n\n.form-control.date {\n  width: 100%;\n  border: 1px solid lightgrey;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  padding: 25px 0 25px 30px;\n}\n\n.form-control.list {\n  width: 100%;\n  border: 1px solid lightgrey;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  padding: 10px 23px 10px 17px;\n}\n\n.form-control.coupon {\n  width: 100%;\n  border: 1px solid lightgrey;\n  border-radius: 10px;\n  padding: 20px 0 20px 17px;\n}\n\n::-moz-placeholder {\n  margin-left: 5px;\n}\n\n::-ms-input-placeholder {\n  margin-left: 5px;\n}\n\n::placeholder {\n  margin-left: 5px;\n}\n\n#coupon {\n  border: 2px dashed darkblue;\n  padding: 15px;\n  margin-bottom: 10px;\n}\n\n.new-background-color {\n  --background: #1c91a8;\n}\n\nion-title {\n  --color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL0M6XFx3b3JraW5nXFxOWVBfUHJvalxcaW9uaWNfcHJvamVjdFxcRlNQX1NMUF9BUFBBSS9zcmNcXGFwcFxccGFnZXNcXHNpZ251cFxcc2lnbnVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUVJLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURNRTtFQUNFLFVBQUE7QUNISjs7QURLRTtFQUNFLHFCQUFBO0FDRko7O0FES0U7RUFFRSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0pKOztBRE9FO0VBR0EsWUFBQTtBQ05GOztBRFNBO0VBRUUsa0JBQUE7RUFDQSxZQUFBO0FDUEY7O0FEVUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNQRjs7QURVQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFzQkEsY0FBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtBQzdCRjs7QURJcUI7RUFDakIsa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDRko7O0FES0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtBQ0pKOztBRE9FO0VBQ0UsbUJBQUE7QUNMSjs7QURhQTtFQUNFLG1CQUFBO0FDVkY7O0FEYUE7RUFDRSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNWRjs7QURZQTtFQUNFLFdBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ1RGOztBRFlBO0VBQ0UsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FDVEY7O0FEWUE7RUFDRSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDVEY7O0FEWUE7RUFDRSxnQkFBQTtBQ1RGOztBRFFBO0VBQ0UsZ0JBQUE7QUNURjs7QURRQTtFQUNFLGdCQUFBO0FDVEY7O0FEWUE7RUFDRSwyQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtBQ1ZGOztBRGFBO0VBQ0UscUJBQUE7QUNWRjs7QURhQTtFQUNFLGdCQUFBO0FDVkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wIHtcbiAgICBjb2xvcjogIzFjOTFhODtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5pb25idXR0b24ge1xuICAgIC8vIC0td2lkdGg6IDUwMHB4O1xuICAgIC0tdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDEwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgLy8gcGFkZGluZzogMTAwMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBcbiAgICBcbiAgfVxuXG4gIC5lcnJvci1tZXNzYWdlIHtcbiAgICBjb2xvcjogcmVkO1xuICB9XG4gIGlucHV0Lm5nLXRvdWNoZWQubmctaW52YWxpZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICB9XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgICAvLyAtLXdpZHRoOiA1MDBweDtcbiAgICAtLXZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMDBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIC8vIHBhZGRpbmc6IDEwMDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5mb3JtID4gaW5wdXRcbntcbiAgLy8gZmxvYXQ6IGxlZnQ7XG4gIGNsZWFyOiByaWdodDtcbn1cblxuLmZvcm0gPiBpb24taWNvblxue1xuICBtYXJnaW46IC0zOHB4IDI1cHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnRvb2x0aXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogLTEwMHB4O1xufVxuXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHdpZHRoOiA1MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiA2cHg7LnRvb2x0aXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogLTEwMHB4O1xuICB9XG4gIFxuICAudG9vbHRpcCAudG9vbHRpcHRleHQge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgcGFkZGluZzogNXB4IDA7XG4gIFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIFxuICAudG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cbiAgcGFkZGluZzogNXB4IDA7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xufVxuXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uZm9ybS1jb250cm9sLnVzZXJJbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDIwcHggMCAyMHB4IDE3cHg7XG59XG4uZm9ybS1jb250cm9sLmRhdGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiAyNXB4IDAgMjVweCAzMHB4O1xufVxuXG4uZm9ybS1jb250cm9sLmxpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDIzcHggMTBweCAxN3B4O1xufVxuXG4uZm9ybS1jb250cm9sLmNvdXBvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDIwcHggMCAyMHB4IDE3cHg7XG59XG5cbjo6cGxhY2Vob2xkZXJ7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4gIFxuI2NvdXBvbiB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCBkYXJrYmx1ZTtcbiAgLy8gYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubmV3LWJhY2tncm91bmQtY29sb3Ige1xuICAtLWJhY2tncm91bmQ6ICMxYzkxYTg7XG59XG5cbmlvbi10aXRsZXtcbiAgLS1jb2xvcjogI2ZmZmZmZjtcbn0iLCIuY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wIHtcbiAgY29sb3I6ICMxYzkxYTg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5pb25idXR0b24ge1xuICAtLXZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIC0tcGFkZGluZy1zdGFydDogMTAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbmlucHV0Lm5nLXRvdWNoZWQubmctaW52YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZvcm0gPiBpbnB1dCB7XG4gIGNsZWFyOiByaWdodDtcbn1cblxuLmZvcm0gPiBpb24taWNvbiB7XG4gIG1hcmdpbjogLTM4cHggMjVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4udG9vbHRpcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiAtMTAwcHg7XG59XG5cbi50b29sdGlwIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lkdGg6IDUwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbn1cbi50b29sdGlwIC50b29sdGlwdGV4dCAudG9vbHRpcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiAtMTAwcHg7XG59XG4udG9vbHRpcCAudG9vbHRpcHRleHQgLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB3aWR0aDogNTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiA1cHggMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xufVxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IC50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5mb3JtLWNvbnRyb2wudXNlcklucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZzogMjBweCAwIDIwcHggMTdweDtcbn1cblxuLmZvcm0tY29udHJvbC5kYXRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZzogMjVweCAwIDI1cHggMzBweDtcbn1cblxuLmZvcm0tY29udHJvbC5saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZzogMTBweCAyM3B4IDEwcHggMTdweDtcbn1cblxuLmZvcm0tY29udHJvbC5jb3Vwb24ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAyMHB4IDAgMjBweCAxN3B4O1xufVxuXG46OnBsYWNlaG9sZGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuI2NvdXBvbiB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCBkYXJrYmx1ZTtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMWM5MWE4O1xufVxuXG5pb24tdGl0bGUge1xuICAtLWNvbG9yOiAjZmZmZmZmO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/signup/signup.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/signup/signup.page.ts ***!
  \*********************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _model_global_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../model/global-api */ "./src/app/model/global-api.ts");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










let SignupPage = class SignupPage {
    constructor(formBuilder, router, alertController, storage, nativeHttp, platform, datePicker, datePipe) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.alertController = alertController;
        this.storage = storage;
        this.nativeHttp = nativeHttp;
        this.platform = platform;
        this.datePicker = datePicker;
        this.datePipe = datePipe;
        this.showPassword = false;
        this.passwordToggleIcon = "eye";
        this.showPassword1 = false;
        this.passwordToggleIcon1 = "eye";
        this.error_messages = {
            'username': [
                { type: 'required', message: 'Username is required.' }
            ],
            'dob': [
                { type: 'required', message: 'Date of Birth is required.' },
            ],
            'level': [
                { type: 'required', message: 'Level is required.' },
            ],
            'school': [
                { type: 'required', message: 'School is required.' },
            ],
            'coupon': [
                { type: 'required', message: 'Coupon Code is required.' },
            ],
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'email', message: 'Please enter a valid email address.' },
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 5 characters long.' },
                { type: 'maxlength', message: 'Password cannot be more than 25 characters.' }
            ],
            'confirmpassword': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 5 characters long.' },
                { type: 'maxlength', message: 'Password cannot be more than 25 characters.' },
            ],
        };
        this.postData = {
            Username: '',
            Password: '',
            Email: '',
            School_Id: '',
            Level_Id: '',
            DateOfBirth: '',
            Voucher_Code: ''
        };
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ])),
            level: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
            school: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email
                //  Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25)
            ])),
            confirmpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25)
            ])),
            coupon: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
        }, {
            validators: this.password.bind(this)
        });
    }
    SelectDate() {
        var options = {
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
        };
        this.datePicker.show(options).then((date) => {
            this.postData.DateOfBirth = this.datePipe.transform(date, "yyyyMMdd"); //Returns date string in desired format
            console.log(this.postData.DateOfBirth);
            var year = this.postData.DateOfBirth.slice(0, 4);
            console.log(year);
            var month = this.postData.DateOfBirth.slice(4, 6);
            console.log(month);
            var day = this.postData.DateOfBirth.slice(6);
            console.log(day);
            //Replace month values from number to text 
            // var chars = { '01': 'Jan', '02': 'Feb', '03': 'Mar', '04': 'Apr', '05': 'May', '06': 'Jun',
            //              '07': 'Jul', '08': 'Aug', '09': 'Sep', '10': 'Oct', '11': 'Nov', '12': 'Dec' };
            // var monthName = month.replace(/01|02|03|04|05|06|07|08|09|10|11|12/g, m => chars[m]);
            // console.log(monthName);
            // this.displayDate = day + ' ' + monthName + ' ' + year;
            // console.log(this.displayDate)
            this.postData.DateOfBirth = day + '/' + month + '/' + year;
            console.log(this.postData.DateOfBirth);
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.getList();
    }
    getList() {
        this.storage.get('alllevels').then((res) => {
            this.textdisplaylevel = res;
        });
        this.storage.get('allschools').then((res) => {
            this.textdisplayschool = res;
        });
    }
    ionViewDidEnter() {
        this.platform.backButton.subscribeWithPriority(10, () => {
            console.log('Handler was called!');
            this.router.navigateByUrl('/login');
        });
    }
    togglePassword() {
        this.showPassword = !this.showPassword;
        if (this.passwordToggleIcon == "eye") {
            this.passwordToggleIcon = 'eye-off';
        }
        else {
            this.passwordToggleIcon = 'eye';
        }
    }
    togglePassword1() {
        this.showPassword1 = !this.showPassword1;
        if (this.passwordToggleIcon1 == "eye") {
            this.passwordToggleIcon1 = 'eye-off';
        }
        else {
            this.passwordToggleIcon1 = 'eye';
        }
    }
    password(formGroup) {
        const { value: password } = formGroup.get('password');
        const { value: confirmPassword } = formGroup.get('confirmpassword');
        return password === confirmPassword ? null : { passwordNotMatch: true };
    }
    login() {
        this.router.navigateByUrl('');
    }
    //   async presentAlert() {
    // const alert = await this.alertController.create({
    //   header: 'Sign Up',
    //   // subHeader: 'Sub Alert',
    //   message: 'Sign Up Sucessful',
    //   buttons: [{
    //     text: 'Cancel',
    //     role: 'cancel',
    //     handler: () => {
    //       console.log('You clicked me');
    //       this.router.navigateByUrl('/signup')
    //     }
    //   },
    // {
    //   text: 'Okay',
    //   cssClass: 'secondary',
    //   handler: () => {
    //     //  console.log('Second Handler');
    //     this.router.navigateByUrl('/signup') }
    // }
    // ]
    // });
    // await alert.present();
    //   }
    Signup() {
        this.AuthSignup();
    }
    AuthSignup() {
        console.log(this.postData.Username);
        console.log(this.postData.Password);
        console.log(this.postData.Email);
        console.log(this.postData.School_Id);
        console.log(this.postData.Level_Id);
        console.log(this.postData.DateOfBirth);
        console.log(this.postData.Voucher_Code);
        this.nativeHttp.setDataSerializer('json');
        this.nativeHttp.post(_model_global_api__WEBPACK_IMPORTED_MODULE_7__["apiurl"].apiUrl + 'student/register', {
            "Username": this.postData.Username,
            "Password": this.postData.Password,
            "Email": this.postData.Email,
            "School_Id": this.postData.School_Id,
            "Level_Id": this.postData.Level_Id,
            "DateOfBirth": this.postData.DateOfBirth,
            "Voucher_Code": this.postData.Voucher_Code,
        }, {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
            .then((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                response.data = JSON.parse(response.data);
                console.log(response.data);
                if (response.data == "Invalid Voucher") {
                    const alert = yield this.alertController.create({
                        header: 'Sign Up',
                        // subHeader: 'Sub Alert',
                        message: 'Please give Valid Voucher',
                        buttons: [{
                                text: 'Cancel',
                                role: 'cancel',
                                handler: () => {
                                    console.log('You clicked me');
                                    this.router.navigateByUrl('/signup');
                                }
                            },
                            {
                                text: 'Okay',
                                cssClass: 'secondary',
                                handler: () => {
                                    //  console.log('Second Handler');
                                    this.router.navigateByUrl('/signup');
                                }
                            }
                        ]
                    });
                    yield alert.present();
                }
                else if (response.data == "Username Exists") {
                    const alert = yield this.alertController.create({
                        header: 'Sign Up',
                        // subHeader: 'Sub Alert',
                        message: 'Username is taken',
                        buttons: [{
                                text: 'Cancel',
                                role: 'cancel',
                                handler: () => {
                                    console.log('You clicked me');
                                    this.router.navigateByUrl('/signup');
                                }
                            },
                            {
                                text: 'Okay',
                                cssClass: 'secondary',
                                handler: () => {
                                    //  console.log('Second Handler');
                                    this.router.navigateByUrl('/signup');
                                }
                            }
                        ]
                    });
                    yield alert.present();
                }
                else {
                    this.storage.set('authlogin', response.data);
                    const alert = yield this.alertController.create({
                        header: 'Sign Up',
                        // subHeader: 'Sub Alert',
                        message: 'Registration Successful!',
                        buttons: [{
                                text: 'Okay',
                                role: 'cancel',
                                handler: () => {
                                    console.log('You clicked me. Account registered!');
                                    this.router.navigateByUrl('/login');
                                }
                            }
                        ]
                    });
                    yield alert.present();
                }
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
        });
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_8__["DatePicker"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"] }
];
SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./signup.page.scss */ "./src/app/pages/signup/signup.page.scss")).default]
    })
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=pages-signup-signup-module-es2015.js.map