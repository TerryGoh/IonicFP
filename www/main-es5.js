function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | login-login-module */
        "login-login-module").then(__webpack_require__.bind(null,
        /*! ./login/login.module */
        "./src/app/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tabs-tabs-module */
        "tabs-tabs-module").then(__webpack_require__.bind(null,
        /*! ./tabs/tabs.module */
        "./src/app/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      }
    }, {
      path: 'signup',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-signup-signup-module */
        "pages-signup-signup-module").then(__webpack_require__.bind(null,
        /*! ./pages/signup/signup.module */
        "./src/app/pages/signup/signup.module.ts")).then(function (m) {
          return m.SignupPageModule;
        });
      }
    }, {
      path: 'main',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-main-main-module */
        [__webpack_require__.e("default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~1c7471a3"), __webpack_require__.e("default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~63b2cdb3"), __webpack_require__.e("default~pages-main-main-module~pages-session-assignment-create-session-assignment-create-module~page~a3c115ef"), __webpack_require__.e("pages-main-main-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/main/main.module */
        "./src/app/pages/main/main.module.ts")).then(function (m) {
          return m.MainPageModule;
        });
      }
    }, {
      path: 'session-initiate',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-session-initiate-session-initiate-module */
        [__webpack_require__.e("default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~1c7471a3"), __webpack_require__.e("default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~63b2cdb3"), __webpack_require__.e("default~pages-main-main-module~pages-session-assignment-create-session-assignment-create-module~page~a3c115ef"), __webpack_require__.e("pages-session-initiate-session-initiate-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/session-initiate/session-initiate.module */
        "./src/app/pages/session-initiate/session-initiate.module.ts")).then(function (m) {
          return m.SessionInitiatePageModule;
        });
      }
    }, {
      path: 'session-join',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-session-join-session-join-module */
        [__webpack_require__.e("default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~1c7471a3"), __webpack_require__.e("default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~63b2cdb3"), __webpack_require__.e("default~pages-main-main-module~pages-session-assignment-create-session-assignment-create-module~page~a3c115ef"), __webpack_require__.e("pages-session-join-session-join-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/session-join/session-join.module */
        "./src/app/pages/session-join/session-join.module.ts")).then(function (m) {
          return m.SessionJoinPageModule;
        });
      }
    }, {
      path: 'session-my',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-session-my-session-my-module */
        [__webpack_require__.e("default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~1c7471a3"), __webpack_require__.e("default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~63b2cdb3"), __webpack_require__.e("default~pages-main-main-module~pages-session-assignment-create-session-assignment-create-module~page~a3c115ef"), __webpack_require__.e("default~pages-session-assignment-view-session-assignment-view-module~pages-session-my-session-my-module"), __webpack_require__.e("pages-session-my-session-my-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/session-my/session-my.module */
        "./src/app/pages/session-my/session-my.module.ts")).then(function (m) {
          return m.SessionMyPageModule;
        });
      }
    }, {
      path: 'session-view/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-session-view-session-view-module */
        [__webpack_require__.e("default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~1c7471a3"), __webpack_require__.e("default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~63b2cdb3"), __webpack_require__.e("default~pages-main-main-module~pages-session-assignment-create-session-assignment-create-module~page~a3c115ef"), __webpack_require__.e("pages-session-view-session-view-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/session-view/session-view.module */
        "./src/app/pages/session-view/session-view.module.ts")).then(function (m) {
          return m.SessionViewPageModule;
        });
      }
    }, {
      path: 'session-assignment-create/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-session-assignment-create-session-assignment-create-module */
        [__webpack_require__.e("default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~1c7471a3"), __webpack_require__.e("default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~63b2cdb3"), __webpack_require__.e("default~pages-main-main-module~pages-session-assignment-create-session-assignment-create-module~page~a3c115ef"), __webpack_require__.e("pages-session-assignment-create-session-assignment-create-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/session-assignment-create/session-assignment-create.module */
        "./src/app/pages/session-assignment-create/session-assignment-create.module.ts")).then(function (m) {
          return m.SessionAssignmentCreatePageModule;
        });
      }
    }, {
      path: 'session-assignment-view/:id/:asgmtid',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-session-assignment-view-session-assignment-view-module */
        [__webpack_require__.e("default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~1c7471a3"), __webpack_require__.e("default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~63b2cdb3"), __webpack_require__.e("default~pages-main-main-module~pages-session-assignment-create-session-assignment-create-module~page~a3c115ef"), __webpack_require__.e("default~pages-session-assignment-view-session-assignment-view-module~pages-session-my-session-my-module"), __webpack_require__.e("default~pages-session-assignment-chat-session-assignment-chat-module~pages-session-assignment-view-s~7063bba7"), __webpack_require__.e("common"), __webpack_require__.e("pages-session-assignment-view-session-assignment-view-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/session-assignment-view/session-assignment-view.module */
        "./src/app/pages/session-assignment-view/session-assignment-view.module.ts")).then(function (m) {
          return m.SessionAssignmentViewPageModule;
        });
      }
    }, {
      path: 'session-assignment-edit/:id/:asgmtid',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-session-assignment-edit-session-assignment-edit-module */
        [__webpack_require__.e("default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~1c7471a3"), __webpack_require__.e("default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~63b2cdb3"), __webpack_require__.e("default~pages-main-main-module~pages-session-assignment-create-session-assignment-create-module~page~a3c115ef"), __webpack_require__.e("pages-session-assignment-edit-session-assignment-edit-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/session-assignment-edit/session-assignment-edit.module */
        "./src/app/pages/session-assignment-edit/session-assignment-edit.module.ts")).then(function (m) {
          return m.SessionAssignmentEditPageModule;
        });
      }
    }, {
      path: 'session-header/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | components-session-header-session-header-module */
        [__webpack_require__.e("default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~1c7471a3"), __webpack_require__.e("default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~63b2cdb3"), __webpack_require__.e("components-session-header-session-header-module")]).then(__webpack_require__.bind(null,
        /*! ./components/session-header/session-header.module */
        "./src/app/components/session-header/session-header.module.ts")).then(function (m) {
          return m.SessionHeaderPageModule;
        });
      }
    }, {
      path: 'popover-participant-view',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-shared-module-popover-participant-view-popover-participant-view-module */
        [__webpack_require__.e("default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~1c7471a3"), __webpack_require__.e("default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~63b2cdb3"), __webpack_require__.e("pages-shared-module-popover-participant-view-popover-participant-view-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/shared-module/popover-participant-view/popover-participant-view.module */
        "./src/app/pages/shared-module/popover-participant-view/popover-participant-view.module.ts")).then(function (m) {
          return m.PopoverParticipantViewPageModule;
        });
      }
    }, {
      path: 'popover-participant-invite',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-shared-module-popover-participant-invite-popover-participant-invite-module */
        [__webpack_require__.e("default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~1c7471a3"), __webpack_require__.e("pages-shared-module-popover-participant-invite-popover-participant-invite-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/shared-module/popover-participant-invite/popover-participant-invite.module */
        "./src/app/pages/shared-module/popover-participant-invite/popover-participant-invite.module.ts")).then(function (m) {
          return m.PopoverParticipantInvitePageModule;
        });
      }
    }, {
      path: 'session-assignment-chat/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-session-assignment-chat-session-assignment-chat-module */
        [__webpack_require__.e("default~pages-session-assignment-chat-session-assignment-chat-module~pages-session-assignment-view-s~7063bba7"), __webpack_require__.e("pages-session-assignment-chat-session-assignment-chat-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/session-assignment-chat/session-assignment-chat.module */
        "./src/app/pages/session-assignment-chat/session-assignment-chat.module.ts")).then(function (m) {
          return m.SessionAssignmentChatPageModule;
        });
      }
    }, {
      path: 'logout',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-logout-logout-module */
        "pages-logout-logout-module").then(__webpack_require__.bind(null,
        /*! ./pages/logout/logout.module */
        "./src/app/pages/logout/logout.module.ts")).then(function (m) {
          return m.LogoutPageModule;
        });
      }
    }, {
      path: 'session-view-image-discussion',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-shared-module-session-view-image-discussion-session-view-image-discussion-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-shared-module-session-view-image-discussion-session-view-image-discussion-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/shared-module/session-view-image-discussion/session-view-image-discussion.module */
        "./src/app/pages/shared-module/session-view-image-discussion/session-view-image-discussion.module.ts")).then(function (m) {
          return m.SessionViewImageDiscussionPageModule;
        });
      }
    }, {
      path: 'authentication-method',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-authentication-method-authentication-method-module */
        "pages-authentication-method-authentication-method-module").then(__webpack_require__.bind(null,
        /*! ./pages/authentication-method/authentication-method.module */
        "./src/app/pages/authentication-method/authentication-method.module.ts")).then(function (m) {
          return m.AuthenticationMethodPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _services_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/network.service */
    "./src/app/services/network.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_assignments_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/assignments.service */
    "./src/app/services/assignments.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, networkService, storage, router, assignmentsService) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.networkService = networkService;
        this.storage = storage;
        this.router = router;
        this.assignmentsService = assignmentsService;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.storage.get('authlogin').then(function (val) {
              if (val === null) {
                _this.router.navigateByUrl('/login');
              } else {
                _this.router.navigateByUrl('/tabs/main');
              }
            });

            _this.networkService.initializeNetworkEvents();

            _this.statusBar.styleDefault();

            _this.splashScreen.hide();

            console.log("Platform ready");

            _this.assignmentsService.getAllLevels();

            _this.assignmentsService.getAllSchools();
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _services_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _services_assignments_service__WEBPACK_IMPORTED_MODULE_8__["AssignmentsService"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/base64/ngx */
    "./node_modules/@ionic-native/base64/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ngx-ionic-image-viewer */
    "./node_modules/ngx-ionic-image-viewer/__ivy_ngcc__/fesm2015/ngx-ionic-image-viewer.js");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var ngx_image_compress__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ngx-image-compress */
    "./node_modules/ngx-image-compress/__ivy_ngcc__/fesm2015/ngx-image-compress.js");
    /* harmony import */


    var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/email-composer/ngx */
    "./node_modules/@ionic-native/email-composer/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/date-picker/ngx */
    "./node_modules/@ionic-native/date-picker/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); //Json in ionic storage
    //Call Api
    //Camera
    //Image
    //Network
    //Image Compress
    //Email Composer


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_14__["NgxIonicImageViewerModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["IonicStorageModule"].forRoot()],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__["Camera"], _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_13__["Base64"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_15__["Network"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_11__["HTTP"], ngx_image_compress__WEBPACK_IMPORTED_MODULE_16__["NgxImageCompressService"], _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_17__["EmailComposer"], _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_18__["DatePicker"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["DatePipe"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/model/global-api.ts":
  /*!*************************************!*\
    !*** ./src/app/model/global-api.ts ***!
    \*************************************/

  /*! exports provided: SessionStatus, ParticipantStatus, apiurl, emptybackground */

  /***/
  function srcAppModelGlobalApiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionStatus", function () {
      return SessionStatus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParticipantStatus", function () {
      return ParticipantStatus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "apiurl", function () {
      return apiurl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "emptybackground", function () {
      return emptybackground;
    });

    var SessionStatus = function SessionStatus() {
      _classCallCheck(this, SessionStatus);
    };

    SessionStatus.SESSION_STATUS_PENDING = "S1"; //My Session

    SessionStatus.SESSION_STATUS_ACCEPTED = "S2"; // Will be at Join Session --> Tutor accepted

    SessionStatus.SESSION_STATUS_ENDED = "S3"; //My Session

    SessionStatus.SESSION_STATUS_DEACTIVATED = "S4"; //Not Yet

    var ParticipantStatus = function ParticipantStatus() {
      _classCallCheck(this, ParticipantStatus);
    };

    ParticipantStatus.PARTICIPANT_STATUS_INVITING = "P1"; //Accept at Invited Friends

    ParticipantStatus.PARTICIPANT_STATUS_REQUEST = "P2"; //Pending italic at Invited Friends

    ParticipantStatus.PARTICIPANT_STATUS_ACCEPTED = "P3"; //Discuss

    ParticipantStatus.PARTICIPANT_STATUS_IGNORED = "P4"; //Tutor

    ParticipantStatus.PARTICIPANT_STATUS_LEFT = "P5"; //End Session

    ParticipantStatus.PARTICIPANT_STATUS_REMOVED = "P6"; //Tutor

    var apiurl = function apiurl() {
      _classCallCheck(this, apiurl);
    };

    apiurl.apiUrl = 'http://slpwsdev.azurewebsites.net/api/';

    var emptybackground = function emptybackground() {
      _classCallCheck(this, emptybackground);
    };

    emptybackground.emptybackground = 'data:image/png;base64,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';
    /***/
  },

  /***/
  "./src/app/services/assignments.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/assignments.service.ts ***!
    \*************************************************/

  /*! exports provided: AssignmentsService */

  /***/
  function srcAppServicesAssignmentsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssignmentsService", function () {
      return AssignmentsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./global.service */
    "./src/app/services/global.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _model_global_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../model/global-api */
    "./src/app/model/global-api.ts");

    var AssignmentsService = /*#__PURE__*/function () {
      function AssignmentsService(globalService, nativeHttp, toastCtrl, alertController, loadingController, storage) {
        _classCallCheck(this, AssignmentsService);

        this.globalService = globalService;
        this.nativeHttp = nativeHttp;
        this.toastCtrl = toastCtrl;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.storage = storage;
        this.isLoading = false; //Upload assignment etc

        this.data = [];
      } //Global (Set & Get)
      //SessionID


      _createClass(AssignmentsService, [{
        key: "setselectedsessionid",
        value: function setselectedsessionid(sessionid) {
          this.selectsessionid = sessionid;
        }
      }, {
        key: "getselectedsessionid",
        value: function getselectedsessionid() {
          return this.selectsessionid;
        } //AssignmentID

      }, {
        key: "setselectedasgmtid",
        value: function setselectedasgmtid(asgmtid) {
          this.selectasgmtid = asgmtid;
        }
      }, {
        key: "getselectedasgmtid",
        value: function getselectedasgmtid() {
          return this.selectasgmtid;
        } //AssignmentList

      }, {
        key: "setselectedasgmtlist",
        value: function setselectedasgmtlist(asgmtlist) {
          this.selectedasgmtlist = asgmtlist;
        }
      }, {
        key: "getselectedasgmtlist",
        value: function getselectedasgmtlist() {
          return this.selectedasgmtlist;
        } //SessionHeader

      }, {
        key: "setselectedsessionheader",
        value: function setselectedsessionheader(sessionheader) {
          this.selectedsessionheader = sessionheader;
        }
      }, {
        key: "getselectedsessionheader",
        value: function getselectedsessionheader() {
          return this.selectedsessionheader;
        } //SessionStatus

      }, {
        key: "setselectedsessionstatus",
        value: function setselectedsessionstatus(sessionstatus) {
          this.selectedsessionstatus = sessionstatus;
        }
      }, {
        key: "getselectedsessionstatus",
        value: function getselectedsessionstatus() {
          return this.selectedsessionstatus;
        } //InitiatorId

      }, {
        key: "setselectedinitiatorid",
        value: function setselectedinitiatorid(initiatorid) {
          this.selectedinitiatorid = initiatorid;
        }
      }, {
        key: "getselectedinitiatorid",
        value: function getselectedinitiatorid() {
          return this.selectedinitiatorid;
        } //ParticipantId

      }, {
        key: "setselectedparticipantid",
        value: function setselectedparticipantid(participantid) {
          this.selectedparticipantid = participantid;
        }
      }, {
        key: "getselectedparticipantid",
        value: function getselectedparticipantid() {
          return this.selectedparticipantid;
        } //Tutor Name

      }, {
        key: "setselectedtutorname",
        value: function setselectedtutorname(tutorname) {
          this.selectedtutorname = tutorname;
        }
      }, {
        key: "getselectedtutorname",
        value: function getselectedtutorname() {
          return this.selectedtutorname;
        }
      }, {
        key: "presentError",
        value: function presentError() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastCtrl.create({
                      message: 'Internal Server Error 404',
                      duration: 4000,
                      position: 'middle'
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentinvitefail",
        value: function presentinvitefail() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toastCtrl.create({
                      message: "Please 'add' participants before inviting ",
                      duration: 3000,
                      position: 'middle'
                    });

                  case 2:
                    toast = _context2.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "presentpasswordsuccess",
        value: function presentpasswordsuccess() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var toast;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.toastCtrl.create({
                      message: "Password changed ",
                      duration: 3000,
                      position: 'middle'
                    });

                  case 2:
                    toast = _context3.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "presentErrorchat",
        value: function presentErrorchat() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var toast;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.toastCtrl.create({
                      message: 'Internal Server Error 404, message did not send',
                      duration: 4000,
                      position: 'middle'
                    });

                  case 2:
                    toast = _context4.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "missingtitle",
        value: function missingtitle() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var toast;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.toastCtrl.create({
                      message: 'please input text in the question space',
                      duration: 4000,
                      position: 'middle'
                    });

                  case 2:
                    toast = _context5.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        } //Get All Levels

      }, {
        key: "getAllLevels",
        value: function getAllLevels() {
          var _this2 = this;

          var nativeCall = this.nativeHttp.post(_model_global_api__WEBPACK_IMPORTED_MODULE_7__["apiurl"].apiUrl + 'Data/Level', {}, {
            'Content-Type': 'application/json'
          });
          Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(nativeCall).pipe().subscribe(function (data) {
            _this2.data = JSON.parse(data.data);

            _this2.storage.set('alllevels', _this2.data); //console.log(this.data)

          }, function (err) {
            console.log('JS Call error:', err);
          });
        } //Get All Schools

      }, {
        key: "getAllSchools",
        value: function getAllSchools() {
          var _this3 = this;

          var nativeCall = this.nativeHttp.post(_model_global_api__WEBPACK_IMPORTED_MODULE_7__["apiurl"].apiUrl + 'Data/School', {}, {
            'Content-Type': 'application/json'
          });
          Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(nativeCall).pipe().subscribe(function (data) {
            _this3.data = JSON.parse(data.data);

            _this3.storage.set('allschools', _this3.data); //console.log(this.data)

          }, function (err) {
            console.log('JS Call error:', err);
          });
        }
        /*Get My Session by Specific User*/
        // getSessionsByStudent()
        // {
        //  this.token=this.globalService.getselectedtoken()
        //  this.studentid=this.globalService.getselectedStudentId()
        //  this.nativeHttp.setDataSerializer('json');
        //  let header =  {'Accept': 'application/json','Content-Type': 'application/json' }
        //  let fetchinfo = {"Authentication_Token":this.token, "Student_Id":this.studentid,"inDepth": "Y"}
        //    this.nativeHttp.post(apiurl.apiUrl+'session/mySessions',fetchinfo, header).then(response => {
        //    try {
        //      response.data = JSON.parse(response.data);
        //      this.data=response.data;
        //      this.storage.set('mysession', this.data).then(val =>{
        //       this.storage.get('AssignmentDiscussion').then((val) =>{
        //       })
        //     })
        //    } catch(e) {
        //      console.error('JSON parsing error');
        //    }
        // })
        // .catch(response => {
        //   // prints 403
        //   console.log(response.status + "error1");
        //   // prints Permission denied
        //   console.log(response.error + "error2");
        // });
        // }
        //  getSessionsBydisc()
        // {
        //   this.token=this.globalService.getselectedtoken()
        //   this.studentid=this.globalService.getselectedStudentId()
        //   // this.sessionmypage.CallAPIMysessions()
        //   console.log(' getting from database ')
        //   let header =  {'Accept': 'application/json','Content-Type': 'application/json' }
        //   let fetchinfo = {"Authentication_Token":this.token, "Student_Id":this.studentid, "inDepth": "Y"}
        //   this.nativeHttp.setDataSerializer('json');
        //   console.log('test1 ')
        //   this.nativeHttp.post(apiurl.apiUrl+'session/mySessions', fetchinfo,header).then( response => {
        //   console.log('test2 ')
        //    try {
        //     console.log('test3')
        //      response.data = JSON.parse(response.data);//whole asgmtlist of particular session ,returns a promise
        //     //  console.log('this is a token', this.token)
        //     //  console.log('this is a studentid', this.studentid)
        //     console.log('storage prepare ')
        //      this.storage.set('AssignmentDiscussion',response.data).then(val =>{
        //       this.storage.get('AssignmentDiscussion')
        //       console.log('storage get ',this.storage.get('AssignmentDiscussion'));
        //      })
        //     console.log('storage set ')
        //  } 
        //  catch(e) {
        //   console.error('JSON parsing error');
        // }
        // }).catch(response => {
        //   this.dismissLoading();
        //   // prints 403
        //   console.log(response.status, ' errorsss');
        //   // prints Permission denied
        //   console.log(response.error, ' error');
        //   });
        //   console.log('test4')
        // }
        // goodluck friendo

        /*Get list of Sessions that are accepted by tutor but student not yet join*/
        //  getListAvailableSessionsToJoin()
        //  {
        //   this.token=this.globalService.getselectedtoken()
        //   this.studentid=this.globalService.getselectedStudentId()
        //   this.nativeHttp.setDataSerializer('json');
        //    let header =  {'Accept': 'application/json','Content-Type': 'application/json' }
        //    let fetchinfo = {"Authentication_Token":this.token, "Student_Id":this.studentid,"inDepth": "Y"}
        //      this.nativeHttp.post(apiurl.apiUrl+'session/mySessions',fetchinfo, header).then(response => {
        //     try {
        //       response.data = JSON.parse(response.data);
        //       this.data=response.data;
        //      // console.log(this.data)
        //       this.storage.set('joinsession', this.data);
        //       console.log(this.data)
        //     } catch(e) {
        //       console.error('JSON parsing error');
        //     }
        //  })
        //  .catch(response => {
        //    // prints 403
        //    console.log(response.status);
        //    // prints Permission denied
        //    console.log(response.error);
        //  });
        //  }
        //Pop-up message

      }, {
        key: "presentToastWithOptions",
        value: function presentToastWithOptions(text) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var toast;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.toastCtrl.create({
                      header: text,
                      duration: 3000,
                      position: 'bottom',
                      buttons: [{
                        text: 'CLOSE',
                        role: 'cancel'
                      }],
                      cssClass: 'toastCSS'
                    });

                  case 2:
                    toast = _context6.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
        /*Successful Message Initiate Session*/

      }, {
        key: "presentInitiateSession",
        value: function presentInitiateSession(okText) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    return _context8.abrupt("return", new Promise(function (resolve) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee7$(_context7) {
                          while (1) {
                            switch (_context7.prev = _context7.next) {
                              case 0:
                                _context7.next = 2;
                                return this.alertController.create({
                                  header: 'Request Tuition',
                                  message: 'Question has been submitted successfully.<br>',
                                  buttons: [{
                                    text: okText,
                                    role: 'ok',
                                    cssClass: 'secondary',
                                    handler: function handler(Ok) {
                                      resolve('Ok');
                                    }
                                  }]
                                });

                              case 2:
                                alert = _context7.sent;
                                alert.present();

                              case 4:
                              case "end":
                                return _context7.stop();
                            }
                          }
                        }, _callee7, this);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8);
          }));
        }
        /*Successful Request To Join Session*/

      }, {
        key: "presentJoinSession",
        value: function presentJoinSession(okText) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var _this5 = this;

            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    return _context10.abrupt("return", new Promise(function (resolve) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee9$(_context9) {
                          while (1) {
                            switch (_context9.prev = _context9.next) {
                              case 0:
                                _context9.next = 2;
                                return this.alertController.create({
                                  header: 'Request Join Session',
                                  message: 'You have requested to Join this Session.<br>',
                                  buttons: [{
                                    text: okText,
                                    role: 'ok',
                                    cssClass: 'secondary',
                                    handler: function handler(Ok) {
                                      resolve('Ok');
                                    }
                                  }]
                                });

                              case 2:
                                alert = _context9.sent;
                                alert.present();

                              case 4:
                              case "end":
                                return _context9.stop();
                            }
                          }
                        }, _callee9, this);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10);
          }));
        }
        /*Successful Message Upload Assignment in Session*/

      }, {
        key: "presentUploadAssignment",
        value: function presentUploadAssignment(okText) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var _this6 = this;

            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    return _context12.abrupt("return", new Promise(function (resolve) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee11$(_context11) {
                          while (1) {
                            switch (_context11.prev = _context11.next) {
                              case 0:
                                _context11.next = 2;
                                return this.alertController.create({
                                  header: 'Upload Assignment',
                                  message: 'Question has been submitted successfully.<br>',
                                  buttons: [{
                                    text: okText,
                                    role: 'ok',
                                    cssClass: 'secondary',
                                    handler: function handler(Ok) {
                                      resolve('Ok');
                                    }
                                  }]
                                });

                              case 2:
                                alert = _context11.sent;
                                alert.present();

                              case 4:
                              case "end":
                                return _context11.stop();
                            }
                          }
                        }, _callee11, this);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12);
          }));
        }
        /*Loading for Waiting to upload*/

      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var _this7 = this;

            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    this.isLoading = true;
                    _context13.next = 3;
                    return this.loadingController.create({
                      message: 'Please wait...'
                    }).then(function (a) {
                      a.present().then(function () {
                        if (!_this7.isLoading) {
                          a.dismiss().then(function () {
                            return console.log('abort presenting');
                          });
                        }
                      });
                    });

                  case 3:
                    return _context13.abrupt("return", _context13.sent);

                  case 4:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "dismissLoading",
        value: function dismissLoading() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    this.isLoading = false;
                    _context14.next = 3;
                    return this.loadingController.dismiss().then(function () {
                      return console.log('dismissed');
                    });

                  case 3:
                    return _context14.abrupt("return", _context14.sent);

                  case 4:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
        /*Confirmation to enter Edit Page(Drawing)*/

      }, {
        key: "presentDrawing",
        value: function presentDrawing(cancelText, confirmText) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
            var _this8 = this;

            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    return _context16.abrupt("return", new Promise(function (resolve) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee15$(_context15) {
                          while (1) {
                            switch (_context15.prev = _context15.next) {
                              case 0:
                                _context15.next = 2;
                                return this.alertController.create({
                                  header: 'About to Enter Edit Page',
                                  message: 'You will be able to edit the <label>Question Uploaded</label><br>',
                                  cssClass: "presentDrawingcss",
                                  buttons: [{
                                    text: cancelText,
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function handler(Cancel) {
                                      resolve('Cancel');
                                    }
                                  }, {
                                    text: confirmText,
                                    handler: function handler(Confirm) {
                                      resolve('Confirm');
                                    }
                                  }]
                                });

                              case 2:
                                alert = _context15.sent;
                                alert.present();

                              case 4:
                              case "end":
                                return _context15.stop();
                            }
                          }
                        }, _callee15, this);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16);
          }));
        }
        /*Acknowledge to submit before clicking other tabs*/

      }, {
        key: "presentAcknowledgeEditing",
        value: function presentAcknowledgeEditing(okText) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
            var _this9 = this;

            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    return _context18.abrupt("return", new Promise(function (resolve) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee17$(_context17) {
                          while (1) {
                            switch (_context17.prev = _context17.next) {
                              case 0:
                                _context17.next = 2;
                                return this.alertController.create({
                                  header: 'Acknowledgement',
                                  message: 'You have to click <img src="assets/images/save.svg"> <label>before leaving</label> this page.<br> If not the drawings will be <label>gone</label>.',
                                  cssClass: "presentAcknowledgeEditingcss",
                                  buttons: [{
                                    text: okText,
                                    role: 'ok',
                                    cssClass: 'secondary',
                                    handler: function handler(Ok) {
                                      resolve('Ok');
                                    }
                                  }],
                                  backdropDismiss: false
                                });

                              case 2:
                                alert = _context17.sent;
                                alert.present();

                              case 4:
                              case "end":
                                return _context17.stop();
                            }
                          }
                        }, _callee17, this);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18);
          }));
        }
        /*Upload Assignment In Edit Assignment*/

      }, {
        key: "UploadAssignmentConfirmation",
        value: function UploadAssignmentConfirmation(cancelText, saveText) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
            var _this10 = this;

            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    return _context20.abrupt("return", new Promise(function (resolve) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee19$(_context19) {
                          while (1) {
                            switch (_context19.prev = _context19.next) {
                              case 0:
                                _context19.next = 2;
                                return this.alertController.create({
                                  header: "Are you sure you want to save the latest drawing?",
                                  message: "Once saved, you will <label>leave this page!</label>",
                                  cssClass: "UploadAssignmentConfirmationcss",
                                  buttons: [{
                                    text: cancelText,
                                    role: 'Cancel',
                                    cssClass: 'secondary',
                                    handler: function handler(Cancel) {
                                      resolve('Cancel');
                                    }
                                  }, {
                                    text: saveText,
                                    handler: function handler(Save) {
                                      resolve('Save');
                                    }
                                  }]
                                });

                              case 2:
                                alert = _context19.sent;
                                alert.present();

                              case 4:
                              case "end":
                                return _context19.stop();
                            }
                          }
                        }, _callee19, this);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20);
          }));
        }
        /*Acknowledge to submit before clicking other tabs*/

      }, {
        key: "presentEditAssignment",
        value: function presentEditAssignment(okText) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
            var _this11 = this;

            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    return _context22.abrupt("return", new Promise(function (resolve) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee21$(_context21) {
                          while (1) {
                            switch (_context21.prev = _context21.next) {
                              case 0:
                                _context21.next = 2;
                                return this.alertController.create({
                                  header: 'Edit Assignment',
                                  message: 'You have successfully modified this assignment.<br>',
                                  buttons: [{
                                    text: okText,
                                    role: 'ok',
                                    cssClass: 'secondary',
                                    handler: function handler(Ok) {
                                      resolve('Ok');
                                    }
                                  }]
                                });

                              case 2:
                                alert = _context21.sent;
                                alert.present();

                              case 4:
                              case "end":
                                return _context21.stop();
                            }
                          }
                        }, _callee21, this);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22);
          }));
        }
        /*EndSession*/

      }, {
        key: "EndSessionConfirmation",
        value: function EndSessionConfirmation(cancelText, endText) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
            var _this12 = this;

            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    return _context24.abrupt("return", new Promise(function (resolve) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this12, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee23$(_context23) {
                          while (1) {
                            switch (_context23.prev = _context23.next) {
                              case 0:
                                _context23.next = 2;
                                return this.alertController.create({
                                  header: "Are you sure you want to End Session?",
                                  message: "",
                                  cssClass: "",
                                  buttons: [{
                                    text: cancelText,
                                    role: 'Cancel',
                                    cssClass: 'secondary',
                                    handler: function handler(Cancel) {
                                      resolve('Cancel');
                                    }
                                  }, {
                                    text: endText,
                                    handler: function handler(End) {
                                      resolve('End');
                                    }
                                  }]
                                });

                              case 2:
                                alert = _context23.sent;
                                alert.present();

                              case 4:
                              case "end":
                                return _context23.stop();
                            }
                          }
                        }, _callee23, this);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24);
          }));
        }
      }]);

      return AssignmentsService;
    }();

    AssignmentsService.ctorParameters = function () {
      return [{
        type: _global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }];
    };

    AssignmentsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AssignmentsService);
    /***/
  },

  /***/
  "./src/app/services/global.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/global.service.ts ***!
    \********************************************/

  /*! exports provided: GlobalService */

  /***/
  function srcAppServicesGlobalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalService", function () {
      return GlobalService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

    var GlobalService = /*#__PURE__*/function () {
      function GlobalService(nativeHttp, storage) {
        _classCallCheck(this, GlobalService);

        this.nativeHttp = nativeHttp;
        this.storage = storage;
      }

      _createClass(GlobalService, [{
        key: "GenerateLoginInfo",
        value: function GenerateLoginInfo() {
          var _this13 = this;

          this.storage.get('authlogin').then(function (val) {
            //console.log(val.authentication_Token)
            _this13.authtoken = val.authentication_Token;
            _this13.studentid = val.student_Id;

            _this13.setselectedtoken(_this13.authtoken);

            _this13.setselectedStudentId(_this13.studentid);

            console.log(_this13.getselectedtoken());
            console.log(_this13.getselectedStudentId());
          });
        }
      }, {
        key: "setselectedtoken",
        value: function setselectedtoken(authtoken) {
          this.authtoken = authtoken;
        }
      }, {
        key: "getselectedtoken",
        value: function getselectedtoken() {
          return this.authtoken;
        }
      }, {
        key: "setselectedStudentId",
        value: function setselectedStudentId(studentid) {
          this.studentid = studentid;
        }
      }, {
        key: "getselectedStudentId",
        value: function getselectedStudentId() {
          return this.studentid;
        }
      }]);

      return GlobalService;
    }();

    GlobalService.ctorParameters = function () {
      return [{
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }];
    };

    GlobalService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], GlobalService);
    /***/
  },

  /***/
  "./src/app/services/network.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/network.service.ts ***!
    \*********************************************/

  /*! exports provided: ConnectionStatusEnum, NetworkService */

  /***/
  function srcAppServicesNetworkServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectionStatusEnum", function () {
      return ConnectionStatusEnum;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NetworkService", function () {
      return NetworkService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var ConnectionStatusEnum;

    (function (ConnectionStatusEnum) {
      ConnectionStatusEnum[ConnectionStatusEnum["Online"] = 0] = "Online";
      ConnectionStatusEnum[ConnectionStatusEnum["Offline"] = 1] = "Offline";
    })(ConnectionStatusEnum || (ConnectionStatusEnum = {}));

    var NetworkService = /*#__PURE__*/function () {
      function NetworkService(network, alertController) {
        _classCallCheck(this, NetworkService);

        this.network = network;
        this.alertController = alertController;
        this.online = false;
        console.log('Hello NetworkProvider Provider');
        this.previousStatus = ConnectionStatusEnum.Online;
        this.online = true;
      }

      _createClass(NetworkService, [{
        key: "initializeNetworkEvents",
        value: function initializeNetworkEvents() {
          var _this14 = this;

          this.network.onDisconnect().subscribe(function () {
            if (_this14.previousStatus === ConnectionStatusEnum.Online) {
              _this14.presentNetworkMsg();

              _this14.online = false;
            }

            _this14.previousStatus = ConnectionStatusEnum.Offline;
          });
          this.network.onConnect().subscribe(function () {
            if (_this14.previousStatus === ConnectionStatusEnum.Offline) {
              _this14.online = true;
            }

            _this14.previousStatus = ConnectionStatusEnum.Online;
          });
        }
        /*Network Message*/

      }, {
        key: "presentNetworkMsg",
        value: function presentNetworkMsg() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
            var alert;
            return regeneratorRuntime.wrap(function _callee25$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    _context25.next = 2;
                    return this.alertController.create({
                      header: 'No Internet Connection',
                      message: '<img src="assets/images/no-wifi.svg"><br/><label>Please check your internet settings.</label>',
                      cssClass: 'presentnetworkmsgcss',
                      buttons: [{
                        text: 'OK'
                      }]
                    });

                  case 2:
                    alert = _context25.sent;
                    _context25.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context25.stop();
                }
              }
            }, _callee25, this);
          }));
        }
      }]);

      return NetworkService;
    }();

    NetworkService.ctorParameters = function () {
      return [{
        type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__["Network"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }];
    };

    NetworkService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], NetworkService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\working\NYP_Proj\ionic_project\FSP_SLP_APPAI\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map