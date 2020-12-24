function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-session-assignment-edit-session-assignment-edit-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-assignment-edit/session-assignment-edit.page.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-assignment-edit/session-assignment-edit.page.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSessionAssignmentEditSessionAssignmentEditPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--No Read-->\n<ion-header >\n  <app-session-header>\n    <meta name='viewport' content='user-scalable=no'>\n  </app-session-header>\n  <ion-segment [(ngModel)]=\"segmentModel\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button  class=\"{{isactivevideoorvoice}}\" value=\"conferencing\" >\n      <ion-label>Conferencing</ion-label>\n    </ion-segment-button>\n    <ion-segment-button class=\"{{isactiveassignment}}\" value=\"assignment\">\n      <ion-label>Assignment</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n\n<ion-content [forceOverscroll]=\"false\">\n\n  <div *ngIf=\"segmentModel === 'conferencing'\">\n    <ion-col>\n    <div style=\"text-align: center;\">No Conference Call</div>\n    </ion-col>\n  </div>    \n  <div *ngIf=\"segmentModel === 'assignment'\">\n      <div class=\"thirdcontent\" *ngIf=\"asgmtlist\">\n        <div class=\"box\" >\n          <ion-label>\n            [{{asgmtlist.created_By_Username}}-{{asgmtlist.created_By_Level}}]  {{asgmtlist.asgmt_Title}}  <!---Assignment Owner,level & assgmttitle-->\n        </ion-label>\n          <ion-icon style=\"position: absolute;right:1em;zoom:1.3\" button src=\"assets/images/1001-cross.svg\" (click)=\"PreviousPage()\"></ion-icon>\n         </div> \n         <div id=\"qns\" class=\"card\"><h3  style=\"font-size: medium;\"><b>Question: {{asgmtlist.asgmt_Value}}</b></h3></div>\n        <canvas id=\"canvas\" #DrawingCanvas (touchstart)=\"handleStart($event)\" (touchmove)=\"handleMove($event)\" (touchend)=\"handleStop()\"></canvas>\n    </div>\n    </div>\n  \n\n    </ion-content>\n<ion-footer>\n  <div id=\"wrappalette\" >\n    <ion-row *ngIf=\"drawpencil||drawpen\" > \n      <ion-col *ngFor=\"let color of colorsPenPencil\" [style.background]=\"color\" class=\"color-block\" tappable\n        (click)=\"selectColor(color)\"></ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"drawhighlighter\">\n      <ion-col *ngFor=\"let color of colorsHighlighter\" [style.background]=\"color\" class=\"color-block\" tappable\n      (click)=\"selectColor(color)\"></ion-col>\n    </ion-row>\n  </div>\n  <div class=\"content\" *ngIf=\"segmentModel === 'assignment'\">\n    <span><ion-icon name=\"color-palette\" *ngIf=\"drawpencil||drawpen||drawhighlighter\"></ion-icon></span>\n   <span><ion-icon class='iconclick' src=\"assets/images/009-pencil.svg\" (click)=\"DrawByPencil()\" ></ion-icon></span>\n   <span><ion-icon class='iconclick' src=\"assets/images/030-pen.svg\" (click)=\"DrawByPen()\"></ion-icon></span>\n   <span><ion-icon class='iconclick' src=\"assets/images/018-highlighter.svg\" (click)=\"DrawByHighlighter()\"></ion-icon></span>\n   <span *ngIf=\"canUndo\"><ion-icon src=\"assets/images/undo.svg\" (click)=\"undo()\"></ion-icon></span>\n   <span *ngIf=\"canRedo\"><ion-icon src=\"assets/images/redo.svg\" (click)=\"redo()\"></ion-icon></span>\n   <span><ion-icon src=\"assets/images/save.svg\"  (click)=\"exportCanvasImage()\"></ion-icon></span>\n </div>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/model/canvas.model.ts":
  /*!***************************************!*\
    !*** ./src/app/model/canvas.model.ts ***!
    \***************************************/

  /*! exports provided: Canvas */

  /***/
  function srcAppModelCanvasModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Canvas", function () {
      return Canvas;
    });

    var Canvas = function Canvas(color, width) {
      _classCallCheck(this, Canvas);

      this.points = [];
      this.color = color;
      this.width = width;
    };
    /***/

  },

  /***/
  "./src/app/pages/session-assignment-edit/session-assignment-edit-routing.module.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/pages/session-assignment-edit/session-assignment-edit-routing.module.ts ***!
    \*****************************************************************************************/

  /*! exports provided: SessionAssignmentEditPageRoutingModule */

  /***/
  function srcAppPagesSessionAssignmentEditSessionAssignmentEditRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionAssignmentEditPageRoutingModule", function () {
      return SessionAssignmentEditPageRoutingModule;
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


    var _session_assignment_edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./session-assignment-edit.page */
    "./src/app/pages/session-assignment-edit/session-assignment-edit.page.ts");

    var routes = [{
      path: '',
      component: _session_assignment_edit_page__WEBPACK_IMPORTED_MODULE_3__["SessionAssignmentEditPage"]
    }];

    var SessionAssignmentEditPageRoutingModule = function SessionAssignmentEditPageRoutingModule() {
      _classCallCheck(this, SessionAssignmentEditPageRoutingModule);
    };

    SessionAssignmentEditPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SessionAssignmentEditPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/session-assignment-edit/session-assignment-edit.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/session-assignment-edit/session-assignment-edit.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: SessionAssignmentEditPageModule */

  /***/
  function srcAppPagesSessionAssignmentEditSessionAssignmentEditModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionAssignmentEditPageModule", function () {
      return SessionAssignmentEditPageModule;
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


    var _session_assignment_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./session-assignment-edit-routing.module */
    "./src/app/pages/session-assignment-edit/session-assignment-edit-routing.module.ts");
    /* harmony import */


    var _session_assignment_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./session-assignment-edit.page */
    "./src/app/pages/session-assignment-edit/session-assignment-edit.page.ts");
    /* harmony import */


    var _components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components.module */
    "./src/app/components.module.ts");

    var SessionAssignmentEditPageModule = function SessionAssignmentEditPageModule() {
      _classCallCheck(this, SessionAssignmentEditPageModule);
    };

    SessionAssignmentEditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _session_assignment_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["SessionAssignmentEditPageRoutingModule"], _components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_session_assignment_edit_page__WEBPACK_IMPORTED_MODULE_6__["SessionAssignmentEditPage"]]
    })], SessionAssignmentEditPageModule);
    /***/
  },

  /***/
  "./src/app/pages/session-assignment-edit/session-assignment-edit.page.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/session-assignment-edit/session-assignment-edit.page.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSessionAssignmentEditSessionAssignmentEditPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".color-block {\n  height: 1em;\n}\n\n.content {\n  display: flex;\n  justify-content: space-between;\n  max-width: 100%;\n  margin: 0 auto;\n  background-color: #d9f6ff;\n  padding: 0.5em 0.5em;\n}\n\n.iconclick:active {\n  outline: black solid 1px;\n}\n\nspan {\n  width: 1em;\n  height: 1em;\n  zoom: 2.5;\n}\n\nion-fab-button {\n  --background: transparent;\n}\n\n#qns {\n  background-color: transparent;\n}\n\n.box {\n  margin: 0 auto;\n}\n\n#canvas {\n  position: static;\n  bottom: 0.1em;\n  left: 0em;\n  right: 0em;\n  width: 100%;\n  outline: black solid 1px;\n}\n\n#wrappalette {\n  bottom: 0;\n  width: 100%;\n}\n\n.scrolling-wrapper {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n}\n\n.card {\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2Vzc2lvbi1hc3NpZ25tZW50LWVkaXQvQzpcXHdvcmtpbmdcXE5ZUF9Qcm9qXFxpb25pY19wcm9qZWN0XFxGU1BfU0xQX0FQUEFJL3NyY1xcYXBwXFxwYWdlc1xcc2Vzc2lvbi1hc3NpZ25tZW50LWVkaXRcXHNlc3Npb24tYXNzaWdubWVudC1lZGl0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2Vzc2lvbi1hc3NpZ25tZW50LWVkaXQvc2Vzc2lvbi1hc3NpZ25tZW50LWVkaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBQTtBQ0FGOztBREVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSx3QkFBQTtBQ0VGOztBRElBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDREY7O0FER0E7RUFDRSx5QkFBQTtBQ0FGOztBREVBO0VBRUEsNkJBQUE7QUNBQTs7QURHQTtFQUNFLGNBQUE7QUNBRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUFjLFNBQUE7RUFBVSxVQUFBO0VBQ3hCLFdBQUE7RUFDQSx3QkFBQTtBQ0dGOztBRERBO0VBRUEsU0FBQTtFQUNBLFdBQUE7QUNHQTs7QUREQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0lGOztBRENBO0VBRUUsNkJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nlc3Npb24tYXNzaWdubWVudC1lZGl0L3Nlc3Npb24tYXNzaWdubWVudC1lZGl0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbG9yLWJsb2NrIHtcbiAgaGVpZ2h0OiAxZW07XG59XG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZjZmZjtcbiAgcGFkZGluZzogMC41ZW0gMC41ZW07XG59XG4uaWNvbmNsaWNrOmFjdGl2ZXtcbiAgb3V0bGluZTogYmxhY2sgc29saWQgMXB4O1xufVxuLy8gI2ljb25jbGljazE6Zm9jdXN7XG4vLyAgIG91dGxpbmU6IGJsYWNrIHNvbGlkIDFweDtcbi8vIH1cblxuc3BhbiB7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICB6b29tOjIuNTtcbn1cbmlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbiNxbnN7XG4vLyBwb3NpdGlvbjphYnNvbHV0ZTtcbmJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG59XG4uYm94e1xuICBtYXJnaW46IDAgYXV0bztcbn1cbiNjYW52YXN7XG4gIHBvc2l0aW9uOnN0YXRpYztcbiAgYm90dG9tOjAuMWVtOyBsZWZ0OjBlbTsgcmlnaHQ6IDBlbTtcbiAgd2lkdGg6MTAwJTtcbiAgb3V0bGluZTpibGFjayBzb2xpZCAxcHg7XG59XG4jd3JhcHBhbGV0dGV7XG4vLyBwb3NpdGlvbjogc3RhdGljO1xuYm90dG9tOiAwO1xud2lkdGg6IDEwMCU7XG59XG4uc2Nyb2xsaW5nLXdyYXBwZXIge1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuXG5cbn1cbi5jYXJkIHtcbiAgLy8gZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG59XG4iLCIuY29sb3ItYmxvY2sge1xuICBoZWlnaHQ6IDFlbTtcbn1cblxuLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWY2ZmY7XG4gIHBhZGRpbmc6IDAuNWVtIDAuNWVtO1xufVxuXG4uaWNvbmNsaWNrOmFjdGl2ZSB7XG4gIG91dGxpbmU6IGJsYWNrIHNvbGlkIDFweDtcbn1cblxuc3BhbiB7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICB6b29tOiAyLjU7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuI3FucyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uYm94IHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbiNjYW52YXMge1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBib3R0b206IDAuMWVtO1xuICBsZWZ0OiAwZW07XG4gIHJpZ2h0OiAwZW07XG4gIHdpZHRoOiAxMDAlO1xuICBvdXRsaW5lOiBibGFjayBzb2xpZCAxcHg7XG59XG5cbiN3cmFwcGFsZXR0ZSB7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zY3JvbGxpbmctd3JhcHBlciB7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/session-assignment-edit/session-assignment-edit.page.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/session-assignment-edit/session-assignment-edit.page.ts ***!
    \*******************************************************************************/

  /*! exports provided: SessionAssignmentEditPage */

  /***/
  function srcAppPagesSessionAssignmentEditSessionAssignmentEditPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionAssignmentEditPage", function () {
      return SessionAssignmentEditPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _model_canvas_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../model/canvas.model */
    "./src/app/model/canvas.model.ts");
    /* harmony import */


    var _services_assignments_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/assignments.service */
    "./src/app/services/assignments.service.ts");
    /* harmony import */


    var _services_network_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/network.service */
    "./src/app/services/network.service.ts");
    /* harmony import */


    var _model_global_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../model/global-api */
    "./src/app/model/global-api.ts");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _services_global_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../services/global.service */
    "./src/app/services/global.service.ts");

    var SessionAssignmentEditPage = /*#__PURE__*/function () {
      function SessionAssignmentEditPage(globalService, platform, nativeHttp, activatedRoute, router, assignmentsService, networkService, plt, renderer, storage) {
        _classCallCheck(this, SessionAssignmentEditPage);

        this.globalService = globalService;
        this.platform = platform;
        this.nativeHttp = nativeHttp;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.assignmentsService = assignmentsService;
        this.networkService = networkService;
        this.plt = plt;
        this.renderer = renderer;
        this.storage = storage; //Segment

        this.segmentModel = "assignment";
        this.lineWidth = "1";
        this.emptbackground = "111111";
        /*Pen, Pencil,*/

        this.selectedColorPenPencil = "#000000";
        this.colorsPenPencil = ["#000000", "#ffffff", "#c2281d", "#de722f", "#edbf4c", "#5db37e", "#459cde", "#4250ad", "#802fa3"];
        /*Highlighter*/

        this.selectedColorHighlighter = "rgba(152, 247, 0, 0.3)";
        this.colorsHighlighter = ["rgba(152, 247, 0, 0.2)", "rgba(0, 186, 243, 0.2)", "rgba(248, 0, 236, 0.2)", "rgba(255, 255, 0, 0.2)", "rgba(255, 255, 255, 0.2)"]; //Boolean

        this.drawpencil = true;
        this.drawpen = false;
        this.drawhighlighter = false;
        this.canDraw = true;
        this.canUndo = false;
        this.canRedo = false;
        this.isDrawing = false;
        this.history = [];
        this.redoHistory = [];
        this.historyIndex = 0;
        this.actions = [];
        this.redoActions = [];
      }

      _createClass(SessionAssignmentEditPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //Segment
          this.isactiveassignment = "activesegment";
          this.token = this.globalService.getselectedtoken();
          this.studentid = this.globalService.getselectedStudentId();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getAssignmentList(); //  this.NotificationFirstEntered(null)
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this = this;

          this.platform.backButton.subscribeWithPriority(10, function () {
            _this.router.navigateByUrl('tabs/session-view/session-assignment-view/' + _this.sessionid + '/' + _this.asgmtid);
          });
          var fheight = document.getElementById('canvas').clientHeight;
        }
        /*Get AssignmentList*/

      }, {
        key: "getAssignmentList",
        value: function getAssignmentList() {
          var _this2 = this;

          this.sessionstatusended = _model_global_api__WEBPACK_IMPORTED_MODULE_8__["SessionStatus"].SESSION_STATUS_ENDED; // Get the ID that was passed with the URL

          var id = this.activatedRoute.snapshot.paramMap.get('id');
          this.sessionid = id;
          var asgmtid = this.activatedRoute.snapshot.paramMap.get('asgmtid');
          this.asgmtid = asgmtid;
          this.sessionstatus = this.assignmentsService.getselectedsessionstatus();
          this.storage.get('assignmentdetails').then(function (val) {
            val.forEach(function (valor) {
              if (_this2.asgmtid == valor.asgmt_Id) {
                _this2.asgmtlist = valor;
                _this2.image = 'data:image/jpeg;base64, ' + _this2.asgmtlist.asgmt_Data;

                if (_this2.asgmtlist.asgmt_Data == null) {
                  _this2.image = 'data:image/png;base64,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'; // this.image link is 'https://www.macmillandictionary.com/external/slideshow/thumb/White_thumb.png';
                }

                console.log("Found Session Assignment Edit!");
              }
            });
          });
          this.token = this.globalService.getselectedtoken();
          this.studentid = this.globalService.getselectedStudentId(); //Drawing

          this.assignmentsService.presentAcknowledgeEditing('Ok').then(function (res) {
            if (res === 'Ok') {
              // console.log("I acknowledge")
              _this2.canvasDrawingElement = _this2.canvasDrawing.nativeElement;

              _this2.renderer.setAttribute(_this2.canvasDrawingElement, 'width', _this2.plt.width());

              _this2.renderer.setAttribute(_this2.canvasDrawingElement, 'height', 350 + '');

              _this2.setBackground();
            }
          });
        }
        /*Segment */

      }, {
        key: "segmentChanged",
        value: function segmentChanged(event) {
          if (this.segmentModel != "assignment") {
            this.isactiveassignment = "inactivesegment";
            this.isactivevideoorvoice = "activesegment";
          } else if (this.segmentModel == "assignment") {
            this.isactiveassignment = "activesegment";
            this.isactivevideoorvoice = "inactivesegment";
          }
        }
        /*Select color*/

      }, {
        key: "selectColor",
        value: function selectColor(color) {
          if (this.drawpencil || this.drawpen) {
            this.selectedColorPenPencil = color;
          } else if (this.drawhighlighter) {
            this.selectedColorHighlighter = color;
          }
        }
        /*Save Drawing*/

      }, {
        key: "exportCanvasImage",
        value: function exportCanvasImage() {
          var _this3 = this;

          if (this.networkService.online == false) {
            this.networkService.presentNetworkMsg();
          } else {
            this.assignmentsService.UploadAssignmentConfirmation('Cancel', 'Save').then(function (res) {
              if (res === 'Save') {
                var background = new Image();
                background.src = _this3.image;

                var ctx = _this3.canvasDrawingElement.getContext("2d");

                background.onload = function () {
                  ctx.drawImage(background, 0, 0, _this3.canvasDrawingElement.width, _this3.canvasDrawingElement.height);
                };

                var dataUrl = _this3.canvasDrawingElement.toDataURL();

                var strImage = dataUrl.replace(/^data:image\/[a-z]+;base64,/, "");
                _this3.assignmentdiscussimage = strImage;

                _this3.assignmentsService.presentLoading();

                _this3.nativeHttp.setDataSerializer('json');

                _this3.nativeHttp.post(_model_global_api__WEBPACK_IMPORTED_MODULE_8__["apiurl"].apiUrl + 'session/uploadAsgmtDisc', {
                  "Authentication_Token": _this3.token,
                  "Student_Id": _this3.studentid,
                  "Session_Id": _this3.sessionid,
                  "Asgmt_Id": _this3.asgmtid,
                  "AsgmtDiscuss_Value": "Test",
                  "AsgmtDiscuss_Data": _this3.assignmentdiscussimage
                }, {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                }).then(function (response) {
                  try {
                    console.log('this is token tutor session asgmt,', _this3.token, ',', _this3.studentid, '', _this3.sessionid, ',', _this3.asgmtid, ',', _this3.assignmentdiscussimage);
                    console.log('this is response data', response.data);
                    response.data = JSON.parse(response.data); //whole asgmtlist of particular session

                    console.log(response.data);

                    _this3.storage.set('mysession', response.data);

                    _this3.storage.set('assignmentdetails', response.data.assignments);

                    _this3.sessionid = response.data.session_Id;

                    _this3.assignmentsService.dismissLoading();

                    _this3.assignmentsService.presentEditAssignment('Ok').then(function (res) {
                      if (res === 'Ok') {
                        _this3.router.navigateByUrl('/tabs/session-view/session-assignment-view/' + _this3.sessionid + '/' + _this3.asgmtid);
                      }
                    });
                  } catch (e) {
                    console.error('JSON parsing error');

                    _this3.assignmentsService.presentError();

                    setTimeout(function () {
                      _this3.assignmentsService.dismissLoading();

                      _this3.router.navigateByUrl('tabs/main');
                    }, 3000);
                  }
                })["catch"](function (response) {
                  // prints 403
                  console.log(response.status); // prints Permission denied

                  console.log(response.error);

                  _this3.assignmentsService.presentError();

                  setTimeout(function () {
                    _this3.assignmentsService.dismissLoading();

                    _this3.router.navigateByUrl('tabs/main');
                  }, 3000);
                });
              }
            });
          }
        }
        /*Three features Pencil,Pen,Highlighter*/

      }, {
        key: "DrawByPencil",
        value: function DrawByPencil() {
          this.canDraw = true;
          this.lineWidth = '1';
          this.drawpencil = true;
          this.drawpen = false;
          this.drawhighlighter = false;
        }
      }, {
        key: "DrawByPen",
        value: function DrawByPen() {
          this.canDraw = true;
          this.lineWidth = '5';
          this.drawpen = true;
          this.drawpencil = false;
          this.drawhighlighter = false;
        }
      }, {
        key: "DrawByHighlighter",
        value: function DrawByHighlighter() {
          this.canDraw = true;
          this.lineWidth = '15';
          this.drawhighlighter = true;
          this.drawpen = false;
          this.drawpencil = false;
        }
      }, {
        key: "handleStart",
        value: function handleStart(ev) {
          var canvasposition = this.canvasDrawingElement.getBoundingClientRect();
          this.lastX = ev.touches[0].pageX - canvasposition.x;
          this.lastY = ev.touches[0].pageY - canvasposition.y;
        }
      }, {
        key: "handleMove",
        value: function handleMove(ev) {
          var canvasposition = this.canvasDrawingElement.getBoundingClientRect();
          var currentX = ev.touches[0].pageX - canvasposition.x;
          var currentY = ev.touches[0].pageY - canvasposition.y;
          var ctx = this.canvasDrawingElement.getContext("2d");

          if (this.drawpencil === true) {
            ctx.strokeStyle = this.selectedColorPenPencil;
          } else if (this.drawpen === true) {
            ctx.strokeStyle = this.selectedColorPenPencil;
          } else if (this.drawhighlighter === true) {
            ctx.strokeStyle = this.selectedColorHighlighter;
          }

          if (this.canDraw) {
            if (this.isDrawing) {
              this.tempPolyline.points.push({
                x: currentX,
                y: currentY
              });
            } else {
              if (this.drawpencil === true) {
                this.tempPolyline = new _model_canvas_model__WEBPACK_IMPORTED_MODULE_5__["Canvas"](this.selectedColorPenPencil, 1);
              } else if (this.drawpen === true) {
                this.tempPolyline = new _model_canvas_model__WEBPACK_IMPORTED_MODULE_5__["Canvas"](this.selectedColorPenPencil, 5);
              } else if (this.drawhighlighter === true) {
                this.tempPolyline = new _model_canvas_model__WEBPACK_IMPORTED_MODULE_5__["Canvas"](this.selectedColorHighlighter, 15);
              }

              this.tempPolyline.points.push({
                x: this.lastX,
                y: this.lastY
              });
              this.isDrawing = true;
            }

            if (this.drawpencil === true) {
              this.draw(this.lastX, this.lastY, currentX, currentY, this.lineWidth, this.selectedColorPenPencil);
            } else if (this.drawpen === true) {
              this.draw(this.lastX, this.lastY, currentX, currentY, this.lineWidth, this.selectedColorPenPencil);
              console.log(this.lastX, this.lastY, currentX, currentY, this.lineWidth, this.selectedColorPenPencil);
            } else if (this.drawhighlighter === true) {
              this.draw(this.lastX, this.lastY, currentX, currentY, this.lineWidth, this.selectedColorHighlighter);
            }
          }

          this.lastX = currentX;
          this.lastY = currentY;
        }
      }, {
        key: "draw",
        value: function draw(p_x, p_y, c_x, c_y, b_s, c_c) {
          var ctx = this.canvasDrawingElement.getContext('2d');
          ctx.lineJoin = "round";
          ctx.strokeStyle = c_c;
          ctx.beginPath();
          ctx.moveTo(p_x, p_y);
          ctx.lineTo(c_x, c_y);
          ctx.lineWidth = b_s;
          ctx.closePath();
          ctx.stroke();
        }
      }, {
        key: "handleStop",
        value: function handleStop() {
          if (this.isDrawing) {
            this.history.push(this.tempPolyline);
            console.log('this is history', this.history);
            this.isDrawing = false;
            this.historyIndex++;
            this.actions.push('draw');
            this.redoActions = [];
            this.redoHistory = [];
          }

          if (this.actions.length != 0) {
            this.canUndo = true;
          }

          if (this.redoActions.length != 0) {
            this.canRedo = true;
          }
        }
      }, {
        key: "drawAllHistory",
        value: function drawAllHistory() {
          var _this4 = this;

          this.setBackground();
          setTimeout(function () {
            var _iterator = _createForOfIteratorHelper(_this4.history),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var polyline = _step.value;
                var startX = polyline.points[0].x;
                var startY = polyline.points[0].y;

                var _iterator2 = _createForOfIteratorHelper(polyline.points),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var point = _step2.value;

                    _this4.draw(startX, startY, point.x, point.y, polyline.width, polyline.color);

                    startX = point.x;
                    startY = point.y;
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }, 100);
        }
        /*Undo & Redo Features*/

      }, {
        key: "undo",
        value: function undo() {
          if (this.redoActions.length == 0) {
            this.canRedo = true;
          }

          if (this.actions.length == 0) {
            this.canUndo = false;
            return;
          }

          var tempAction = this.actions.pop();
          this.redoActions.push(tempAction);

          if (this.history.length > 0) {
            this.redoHistory.push(this.history.pop());
            this.historyIndex--;
          }

          var ctx = this.canvasDrawingElement.getContext('2d');
          ctx.globalCompositeOperation = 'source-over';
          this.drawAllHistory();
        }
      }, {
        key: "redo",
        value: function redo() {
          if (this.actions.length == 0) {
            this.canUndo = true;
          }

          if (this.redoActions.length == 0) {
            this.canRedo = false;
            return;
          }

          var tempAction = this.redoActions.pop();
          this.actions.push(tempAction);
          var ctx = this.canvasDrawingElement.getContext('2d');
          ctx.globalCompositeOperation = 'source-over';

          if (tempAction == 'draw') {
            if (this.redoHistory.length > 0) {
              this.history.push(this.redoHistory.pop());

              for (var i = this.historyIndex; i < this.history.length; i++) {
                var polyline = this.history[i];
                var startX = polyline.points[0].x;
                var startY = polyline.points[0].y;

                var _iterator3 = _createForOfIteratorHelper(polyline.points),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var point = _step3.value;
                    this.draw(startX, startY, point.x, point.y, polyline.width, polyline.color);
                    startX = point.x;
                    startY = point.y;
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }

              this.historyIndex++;
            }
          }

          console.log('history is :' + this.history + 'temppolyline is :' + this.tempPolyline);
        } //Image from API

      }, {
        key: "setBackground",
        value: function setBackground() {
          var _this5 = this;

          var background = new Image();
          background.src = this.image;
          console.log('alo', background.src, 'this is background');
          var ctx = this.canvasDrawingElement.getContext("2d");

          background.onload = function () {
            ctx.drawImage(background, 0, 0, _this5.canvasDrawingElement.width, _this5.canvasDrawingElement.height);
          };
        }
      }, {
        key: "PreviousPage",
        value: function PreviousPage() {
          if (this.networkService.online == false) {
            this.networkService.presentNetworkMsg();
          } else {
            this.router.navigateByUrl('/tabs/session-view/session-assignment-view/' + this.sessionid + '/' + this.asgmtid);
          }
        }
      }]);

      return SessionAssignmentEditPage;
    }();

    SessionAssignmentEditPage.ctorParameters = function () {
      return [{
        type: _services_global_service__WEBPACK_IMPORTED_MODULE_10__["GlobalService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__["HTTP"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_assignments_service__WEBPACK_IMPORTED_MODULE_6__["AssignmentsService"]
      }, {
        type: _services_network_service__WEBPACK_IMPORTED_MODULE_7__["NetworkService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("DrawingCanvas", {
      "static": false
    })], SessionAssignmentEditPage.prototype, "canvasDrawing", void 0);
    SessionAssignmentEditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-session-assignment-edit',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./session-assignment-edit.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-assignment-edit/session-assignment-edit.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./session-assignment-edit.page.scss */
      "./src/app/pages/session-assignment-edit/session-assignment-edit.page.scss"))["default"]]
    })], SessionAssignmentEditPage); //use bounding then percentage it
    // NotificationFirstEntered(event){
    //   this.token=this.globalService.getselectedtoken()
    //   this.studentid=this.globalService.getselectedStudentId()
    //   console.log(this.globalService.getselectedtoken())
    //   console.log(this.globalService.getselectedStudentId())
    // //Drawing
    // this.assignmentsService.presentAcknowledgeEditing('Ok').then((res) => {
    //   if (res === 'Ok') {
    //     // console.log("I acknowledge")
    //   }
    //  });
    //  this.canvasDrawingElement = this.canvasDrawing.nativeElement
    // //  this.canvasDrawingElement.width = this.plt.width()+ '';
    // //  this.canvasDrawingElement.height = this.plt.width()+ '' ;
    //  this.renderer.setAttribute(this.canvasDrawingElement, 'width', this.plt.width());
    //  this.renderer.setAttribute(this.canvasDrawingElement, 'height', 350 + '');
    //  this.setBackground();
    //  setTimeout(() => {
    //   console.log('Async operation has ended');
    //   event.target.complete();
    // }, 2000);
    // }

    /***/
  }
}]);
//# sourceMappingURL=pages-session-assignment-edit-session-assignment-edit-module-es5.js.map