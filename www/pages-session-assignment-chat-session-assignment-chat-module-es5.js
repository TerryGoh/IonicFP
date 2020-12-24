function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-session-assignment-chat-session-assignment-chat-module"], {
  /***/
  "./src/app/pages/session-assignment-chat/session-assignment-chat-routing.module.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/pages/session-assignment-chat/session-assignment-chat-routing.module.ts ***!
    \*****************************************************************************************/

  /*! exports provided: SessionAssignmentChatPageRoutingModule */

  /***/
  function srcAppPagesSessionAssignmentChatSessionAssignmentChatRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionAssignmentChatPageRoutingModule", function () {
      return SessionAssignmentChatPageRoutingModule;
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
    /* harmony import */


    var _session_assignment_chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./session-assignment-chat.page */
    "./src/app/pages/session-assignment-chat/session-assignment-chat.page.ts");

    var routes = [{
      path: '',
      component: _session_assignment_chat_page__WEBPACK_IMPORTED_MODULE_3__["SessionAssignmentChatPage"]
    }];

    var SessionAssignmentChatPageRoutingModule = function SessionAssignmentChatPageRoutingModule() {
      _classCallCheck(this, SessionAssignmentChatPageRoutingModule);
    };

    SessionAssignmentChatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SessionAssignmentChatPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/session-assignment-chat/session-assignment-chat.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/session-assignment-chat/session-assignment-chat.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: SessionAssignmentChatPageModule */

  /***/
  function srcAppPagesSessionAssignmentChatSessionAssignmentChatModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionAssignmentChatPageModule", function () {
      return SessionAssignmentChatPageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _session_assignment_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./session-assignment-chat-routing.module */
    "./src/app/pages/session-assignment-chat/session-assignment-chat-routing.module.ts");
    /* harmony import */


    var _session_assignment_chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./session-assignment-chat.page */
    "./src/app/pages/session-assignment-chat/session-assignment-chat.page.ts");

    var SessionAssignmentChatPageModule = function SessionAssignmentChatPageModule() {
      _classCallCheck(this, SessionAssignmentChatPageModule);
    };

    SessionAssignmentChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _session_assignment_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["SessionAssignmentChatPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_session_assignment_chat_page__WEBPACK_IMPORTED_MODULE_6__["SessionAssignmentChatPage"]]
    })], SessionAssignmentChatPageModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-session-assignment-chat-session-assignment-chat-module-es5.js.map