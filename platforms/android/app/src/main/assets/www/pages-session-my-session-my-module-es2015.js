(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-session-my-session-my-module"],{

/***/ "./src/app/pages/session-my/session-my-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/session-my/session-my-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: SessionMyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionMyPageRoutingModule", function() { return SessionMyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _session_my_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session-my.page */ "./src/app/pages/session-my/session-my.page.ts");




const routes = [
    {
        path: '',
        component: _session_my_page__WEBPACK_IMPORTED_MODULE_3__["SessionMyPage"]
    }
];
let SessionMyPageRoutingModule = class SessionMyPageRoutingModule {
};
SessionMyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SessionMyPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/session-my/session-my.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/session-my/session-my.module.ts ***!
  \*******************************************************/
/*! exports provided: SessionMyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionMyPageModule", function() { return SessionMyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _session_my_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./session-my-routing.module */ "./src/app/pages/session-my/session-my-routing.module.ts");
/* harmony import */ var _session_my_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./session-my.page */ "./src/app/pages/session-my/session-my.page.ts");
/* harmony import */ var _components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components.module */ "./src/app/components.module.ts");








let SessionMyPageModule = class SessionMyPageModule {
};
SessionMyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _session_my_routing_module__WEBPACK_IMPORTED_MODULE_5__["SessionMyPageRoutingModule"],
            _components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_session_my_page__WEBPACK_IMPORTED_MODULE_6__["SessionMyPage"]]
    })
], SessionMyPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-session-my-session-my-module-es2015.js.map