function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-session-view-session-view-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-view/session-view.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-view/session-view.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSessionViewSessionViewPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <app-session-header></app-session-header>\n  <ion-segment [(ngModel)]=\"segmentModel\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button class=\"{{isactivevideoorvoice}}\" value=\"conferencing\" >\n      <ion-label>Conferencing</ion-label>\n    </ion-segment-button>\n    <ion-segment-button class=\"{{isactiveassignment}}\" value=\"assignment\">\n      <ion-label>Assignment</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"segmentModel === 'conferencing'\">\n    <ion-col>\n    <div style=\"text-align: center;\">No Conference Call</div>\n    </ion-col>\n  </div>    \n  <div *ngIf=\"segmentModel === 'assignment'\">\n    <div class=\"thirdcontent\">\n      <ion-list *ngFor=\"let assignment of asgmtlist\"  [routerLink]=\"['/tabs/session-view/', 'session-assignment-view',assignment.session_Id,assignment.asgmt_Id]\">\n        <div class=\"box\" *ngIf=\"this.sessionstatus!==this.sessionstatusended\">\n            <ion-label>\n                [{{assignment.created_By_Username}}-{{assignment.created_By_Level}}]  {{assignment.asgmt_Title}}\n            </ion-label>\n            <ion-icon style=\"position: absolute;right:1em;\" button src=\"assets/images/details-assignment.svg\"></ion-icon>\n            <br/>\n          </div>\n          <div class=\"boxSessionEnd\" *ngIf=\"this.sessionstatus===this.sessionstatusended\">\n            <ion-label>\n                [{{assignment.created_By_Username}}-{{assignment.created_By_Level}}]  {{assignment.asgmt_Title}} \n            </ion-label>\n            <ion-icon style=\"position: absolute;right:1em;\" button src=\"assets/images/details-assignment.svg\"></ion-icon>\n            <br/>\n          </div>\n    </ion-list>\n  </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <br/>\n  <ion-fab-button *ngIf=\"segmentModel === 'assignment' && asgmtlist &&this.sessionstatus!==this.sessionstatusended\" (click)=\"StayonPage()\" vertical=\"end\" horizontal=\"end\" slot=\"fixed\" style=\"position: absolute;bottom: 1em;right: 1em;\"><img src=\"assets/images/126-plus.svg\"></ion-fab-button>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/pages/session-view/session-view-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/session-view/session-view-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: SessionViewPageRoutingModule */

  /***/
  function srcAppPagesSessionViewSessionViewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionViewPageRoutingModule", function () {
      return SessionViewPageRoutingModule;
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


    var _session_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./session-view.page */
    "./src/app/pages/session-view/session-view.page.ts");

    var routes = [{
      path: '',
      component: _session_view_page__WEBPACK_IMPORTED_MODULE_3__["SessionViewPage"]
    }];

    var SessionViewPageRoutingModule = function SessionViewPageRoutingModule() {
      _classCallCheck(this, SessionViewPageRoutingModule);
    };

    SessionViewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SessionViewPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/session-view/session-view.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/session-view/session-view.module.ts ***!
    \***********************************************************/

  /*! exports provided: SessionViewPageModule */

  /***/
  function srcAppPagesSessionViewSessionViewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionViewPageModule", function () {
      return SessionViewPageModule;
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


    var _session_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./session-view-routing.module */
    "./src/app/pages/session-view/session-view-routing.module.ts");
    /* harmony import */


    var _session_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./session-view.page */
    "./src/app/pages/session-view/session-view.page.ts");
    /* harmony import */


    var _components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components.module */
    "./src/app/components.module.ts");

    var SessionViewPageModule = function SessionViewPageModule() {
      _classCallCheck(this, SessionViewPageModule);
    };

    SessionViewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _session_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["SessionViewPageRoutingModule"], _components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_session_view_page__WEBPACK_IMPORTED_MODULE_6__["SessionViewPage"]]
    })], SessionViewPageModule);
    /***/
  },

  /***/
  "./src/app/pages/session-view/session-view.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/session-view/session-view.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSessionViewSessionViewPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nlc3Npb24tdmlldy9zZXNzaW9uLXZpZXcucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/session-view/session-view.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/session-view/session-view.page.ts ***!
    \*********************************************************/

  /*! exports provided: SessionViewPage */

  /***/
  function srcAppPagesSessionViewSessionViewPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionViewPage", function () {
      return SessionViewPage;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _services_assignments_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/assignments.service */
    "./src/app/services/assignments.service.ts");
    /* harmony import */


    var _services_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/network.service */
    "./src/app/services/network.service.ts");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _model_global_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../model/global-api */
    "./src/app/model/global-api.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var SessionViewPage = /*#__PURE__*/function () {
      function SessionViewPage(activatedRoute, platform, nativeHttp, assignmentsService, router, networkService, storage) {
        _classCallCheck(this, SessionViewPage);

        this.activatedRoute = activatedRoute;
        this.platform = platform;
        this.nativeHttp = nativeHttp;
        this.assignmentsService = assignmentsService;
        this.router = router;
        this.networkService = networkService;
        this.storage = storage; //Segment

        this.segmentModel = "assignment";
      }

      _createClass(SessionViewPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //Segment
          this.isactiveassignment = "activesegment";
          this.getAssignmentList();
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this = this;

          this.platform.backButton.subscribeWithPriority(10, function () {
            console.log('Handler was called!');

            _this.router.navigateByUrl('tabs/session-view/session-my');
          });
        }
        /*Get AssignmentList*/

      }, {
        key: "getAssignmentList",
        value: function getAssignmentList() {
          var _this2 = this;

          this.sessionstatusended = _model_global_api__WEBPACK_IMPORTED_MODULE_7__["SessionStatus"].SESSION_STATUS_ENDED; // Get the ID that was passed with the URL

          var id = this.activatedRoute.snapshot.paramMap.get('id');
          this.sessionid = id; //Global

          this.assignmentsService.setselectedsessionid(id);
          this.storage.get('mysession').then(function (val) {
            _this2.sessionstatus = val.session_Status;

            _this2.assignmentsService.setselectedsessionstatus(_this2.sessionstatus); //Set session status


            _this2.asgmtlist = val.assignments;

            _this2.assignmentsService.setselectedasgmtlist(_this2.asgmtlist); //Set assignment list


            val.forEach(function (valor) {
              if (valor.session_Id == _this2.assignmentsService.getselectedsessionid()) //Get session id
                {
                  _this2.assignmentsService.setselectedtutorname(valor.tutor_Name);

                  _this2.asgmtlist = valor.assignments;

                  _this2.assignmentsService.setselectedasgmtlist(_this2.asgmtlist); //Set assignment list


                  _this2.storage.set('assignmentdetails', _this2.asgmtlist);

                  _this2.sessionstatus = valor.session_Status;

                  _this2.assignmentsService.setselectedparticipantid(valor.participant_Id); //Set Participant Id


                  _this2.assignmentsService.setselectedsessionstatus(_this2.sessionstatus); //Set session status


                  console.log("Found Session View!");
                }
            });
          });
        }
        /*Segment Changed*/

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
        /*Network*/

      }, {
        key: "StayonPage",
        value: function StayonPage() {
          if (this.networkService.online == false) {
            this.networkService.presentNetworkMsg();
          } else {
            this.router.navigateByUrl('tabs/session-view/session-assignment-create/' + this.sessionid);
          }
        }
      }, {
        key: "NextPage",
        value: function NextPage() {
          if (this.networkService.online == false) {
            this.networkService.presentNetworkMsg();
          }
        }
      }]);

      return SessionViewPage;
    }();

    SessionViewPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"]
      }, {
        type: _services_assignments_service__WEBPACK_IMPORTED_MODULE_4__["AssignmentsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }];
    };

    SessionViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-session-view',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./session-view.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-view/session-view.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./session-view.page.scss */
      "./src/app/pages/session-view/session-view.page.scss"))["default"]]
    })], SessionViewPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-session-view-session-view-module-es5.js.map