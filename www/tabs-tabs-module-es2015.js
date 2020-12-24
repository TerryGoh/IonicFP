(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"main\" (click)=\"check(0);\">\n      <ion-icon name=\"home\" style=\"zoom:1.2;\"></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"session-view\" (click)=\"check(1);\">\n      <ion-icon name=\"people-circle\" style=\"zoom:1.2;\"></ion-icon>\n      <ion-label>Session</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"support\" (click)=\"check(2);\">\n      <ion-icon name=\"settings\" style=\"zoom:1.2;\"></ion-icon>\n      <ion-label>Support</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n");

/***/ }),

/***/ "./src/app/tabs/tabs-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'main',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | pages-main-main-module */[__webpack_require__.e("default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~1c7471a3"), __webpack_require__.e("default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~63b2cdb3"), __webpack_require__.e("default~pages-main-main-module~pages-session-assignment-create-session-assignment-create-module~page~a3c115ef"), __webpack_require__.e("pages-main-main-module")]).then(__webpack_require__.bind(null, /*! ../pages/main/main.module */ "./src/app/pages/main/main.module.ts")).then(m => m.MainPageModule)
                    },
                ]
            },
            {
                path: 'session-view',
                children: [
                    {
                        path: 'session-my',
                        loadChildren: () => Promise.all(/*! import() | pages-session-my-session-my-module */[__webpack_require__.e("default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~1c7471a3"), __webpack_require__.e("default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~63b2cdb3"), __webpack_require__.e("default~pages-main-main-module~pages-session-assignment-create-session-assignment-create-module~page~a3c115ef"), __webpack_require__.e("default~pages-session-assignment-view-session-assignment-view-module~pages-session-my-session-my-module"), __webpack_require__.e("pages-session-my-session-my-module")]).then(__webpack_require__.bind(null, /*! ../pages/session-my/session-my.module */ "./src/app/pages/session-my/session-my.module.ts")).then(m => m.SessionMyPageModule)
                    },
                    {
                        path: 'session-initiate',
                        loadChildren: () => Promise.all(/*! import() | pages-session-initiate-session-initiate-module */[__webpack_require__.e("default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~1c7471a3"), __webpack_require__.e("default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~63b2cdb3"), __webpack_require__.e("default~pages-main-main-module~pages-session-assignment-create-session-assignment-create-module~page~a3c115ef"), __webpack_require__.e("pages-session-initiate-session-initiate-module")]).then(__webpack_require__.bind(null, /*! ../pages/session-initiate/session-initiate.module */ "./src/app/pages/session-initiate/session-initiate.module.ts")).then(m => m.SessionInitiatePageModule)
                    },
                    {
                        path: 'session-join',
                        loadChildren: () => Promise.all(/*! import() | pages-session-join-session-join-module */[__webpack_require__.e("default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~1c7471a3"), __webpack_require__.e("default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~63b2cdb3"), __webpack_require__.e("default~pages-main-main-module~pages-session-assignment-create-session-assignment-create-module~page~a3c115ef"), __webpack_require__.e("pages-session-join-session-join-module")]).then(__webpack_require__.bind(null, /*! ../pages/session-join/session-join.module */ "./src/app/pages/session-join/session-join.module.ts")).then(m => m.SessionJoinPageModule)
                    },
                    {
                        path: 'session-header/:id',
                        loadChildren: () => Promise.all(/*! import() | components-session-header-session-header-module */[__webpack_require__.e("default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~1c7471a3"), __webpack_require__.e("default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~63b2cdb3"), __webpack_require__.e("components-session-header-session-header-module")]).then(__webpack_require__.bind(null, /*! ../components/session-header/session-header.module */ "./src/app/components/session-header/session-header.module.ts")).then(m => m.SessionHeaderPageModule)
                    },
                    {
                        path: 'session-view/:id',
                        loadChildren: () => Promise.all(/*! import() | pages-session-view-session-view-module */[__webpack_require__.e("default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~1c7471a3"), __webpack_require__.e("default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~63b2cdb3"), __webpack_require__.e("default~pages-main-main-module~pages-session-assignment-create-session-assignment-create-module~page~a3c115ef"), __webpack_require__.e("pages-session-view-session-view-module")]).then(__webpack_require__.bind(null, /*! ../pages/session-view/session-view.module */ "./src/app/pages/session-view/session-view.module.ts")).then(m => m.SessionViewPageModule)
                    },
                    {
                        path: 'session-assignment-create/:id',
                        loadChildren: () => Promise.all(/*! import() | pages-session-assignment-create-session-assignment-create-module */[__webpack_require__.e("default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~1c7471a3"), __webpack_require__.e("default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~63b2cdb3"), __webpack_require__.e("default~pages-main-main-module~pages-session-assignment-create-session-assignment-create-module~page~a3c115ef"), __webpack_require__.e("pages-session-assignment-create-session-assignment-create-module")]).then(__webpack_require__.bind(null, /*! ../pages/session-assignment-create/session-assignment-create.module */ "./src/app/pages/session-assignment-create/session-assignment-create.module.ts")).then(m => m.SessionAssignmentCreatePageModule)
                    },
                    {
                        path: 'session-assignment-view/:id/:asgmtid',
                        loadChildren: () => Promise.all(/*! import() | pages-session-assignment-view-session-assignment-view-module */[__webpack_require__.e("default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~1c7471a3"), __webpack_require__.e("default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~63b2cdb3"), __webpack_require__.e("default~pages-main-main-module~pages-session-assignment-create-session-assignment-create-module~page~a3c115ef"), __webpack_require__.e("default~pages-session-assignment-view-session-assignment-view-module~pages-session-my-session-my-module"), __webpack_require__.e("default~pages-session-assignment-chat-session-assignment-chat-module~pages-session-assignment-view-s~7063bba7"), __webpack_require__.e("common"), __webpack_require__.e("pages-session-assignment-view-session-assignment-view-module")]).then(__webpack_require__.bind(null, /*! ../pages/session-assignment-view/session-assignment-view.module */ "./src/app/pages/session-assignment-view/session-assignment-view.module.ts")).then(m => m.SessionAssignmentViewPageModule)
                    },
                    {
                        path: 'session-assignment-edit/:id/:asgmtid',
                        loadChildren: () => Promise.all(/*! import() | pages-session-assignment-edit-session-assignment-edit-module */[__webpack_require__.e("default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~1c7471a3"), __webpack_require__.e("default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~63b2cdb3"), __webpack_require__.e("default~pages-main-main-module~pages-session-assignment-create-session-assignment-create-module~page~a3c115ef"), __webpack_require__.e("pages-session-assignment-edit-session-assignment-edit-module")]).then(__webpack_require__.bind(null, /*! ../pages/session-assignment-edit/session-assignment-edit.module */ "./src/app/pages/session-assignment-edit/session-assignment-edit.module.ts")).then(m => m.SessionAssignmentEditPageModule)
                    },
                    {
                        path: 'session-assignment-chat/:id',
                        loadChildren: () => Promise.all(/*! import() | pages-session-assignment-chat-session-assignment-chat-module */[__webpack_require__.e("default~pages-session-assignment-chat-session-assignment-chat-module~pages-session-assignment-view-s~7063bba7"), __webpack_require__.e("pages-session-assignment-chat-session-assignment-chat-module")]).then(__webpack_require__.bind(null, /*! ../pages/session-assignment-chat/session-assignment-chat.module */ "./src/app/pages/session-assignment-chat/session-assignment-chat.module.ts")).then(m => m.SessionAssignmentChatPageModule)
                    },
                ]
            },
            {
                path: 'support',
                children: [
                    {
                        path: 'logout',
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-logout-logout-module */ "pages-logout-logout-module").then(__webpack_require__.bind(null, /*! ../pages/logout/logout.module */ "./src/app/pages/logout/logout.module.ts")).then(m => m.LogoutPageModule)
                    },
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/main',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        //redirectTo: '/tabs/main',//temporary
        redirectTo: '/login',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tab-selected {\n  background-color: #146778;\n  color: #fdf9f2;\n}\n\nion-tab-button:not(.tab-selected) {\n  background-color: #33404d;\n  color: #a5988f;\n}\n\nion-tab-bar {\n  --border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9DOlxcd29ya2luZ1xcTllQX1Byb2pcXGlvbmljX3Byb2plY3RcXEZTUF9TTFBfQVBQQUkvc3JjXFxhcHBcXHRhYnNcXHRhYnMucGFnZS5zY3NzIiwic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNJLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFiLXNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQ2Nzc4O1xuICAgIGNvbG9yOiAjZmRmOWYyO1xufVxuXG5pb24tdGFiLWJ1dHRvbjpub3QoLnRhYi1zZWxlY3RlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM0MDRkO1xuICBjb2xvcjojYTU5ODhmO1xufVxuXG5pb24tdGFiLWJhciB7XG4gICAgLS1ib3JkZXI6IG5vbmU7XG59IiwiLnRhYi1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDY3Nzg7XG4gIGNvbG9yOiAjZmRmOWYyO1xufVxuXG5pb24tdGFiLWJ1dHRvbjpub3QoLnRhYi1zZWxlY3RlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM0MDRkO1xuICBjb2xvcjogI2E1OTg4Zjtcbn1cblxuaW9uLXRhYi1iYXIge1xuICAtLWJvcmRlcjogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let TabsPage = class TabsPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.styles = ['color: #fdf9f2', 'background-color: #146778'].join(";");
    }
    ngOnInit() { }
    check(location) {
        let locations = ["/tabs/main", "/tabs/session-view/session-my", "/tabs/support/logout"];
        this.navCtrl.navigateRoot(locations[location]);
    }
};
TabsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")).default]
    })
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map