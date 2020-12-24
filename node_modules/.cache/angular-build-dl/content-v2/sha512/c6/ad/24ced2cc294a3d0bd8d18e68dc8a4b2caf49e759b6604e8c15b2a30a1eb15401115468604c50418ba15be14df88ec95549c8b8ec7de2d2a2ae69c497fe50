(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-session-view-session-view-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-view/session-view.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-view/session-view.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-session-header></app-session-header>\n  <ion-segment [(ngModel)]=\"segmentModel\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button class=\"{{isactivevideoorvoice}}\" value=\"conferencing\" >\n      <ion-label>Conferencing</ion-label>\n    </ion-segment-button>\n    <ion-segment-button class=\"{{isactiveassignment}}\" value=\"assignment\">\n      <ion-label>Assignment</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"segmentModel === 'conferencing'\">\n    <ion-col>\n    <div style=\"text-align: center;\">No Conference Call</div>\n    </ion-col>\n  </div>    \n  <div *ngIf=\"segmentModel === 'assignment'\">\n    <div class=\"thirdcontent\">\n      <ion-list *ngFor=\"let assignment of asgmtlist\"  [routerLink]=\"['/tabs/session-view/', 'session-assignment-view',assignment.session_Id,assignment.asgmt_Id]\">\n        <div class=\"box\" *ngIf=\"this.sessionstatus!==this.sessionstatusended\">\n            <ion-label>\n                [{{assignment.created_By_Username}}-{{assignment.created_By_Level}}]  {{assignment.asgmt_Title}}\n            </ion-label>\n            <ion-icon style=\"position: absolute;right:1em;\" button src=\"assets/images/details-assignment.svg\"></ion-icon>\n            <br/>\n          </div>\n          <div class=\"boxSessionEnd\" *ngIf=\"this.sessionstatus===this.sessionstatusended\">\n            <ion-label>\n                [{{assignment.created_By_Username}}-{{assignment.created_By_Level}}]  {{assignment.asgmt_Title}} \n            </ion-label>\n            <ion-icon style=\"position: absolute;right:1em;\" button src=\"assets/images/details-assignment.svg\"></ion-icon>\n            <br/>\n          </div>\n    </ion-list>\n  </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <br/>\n  <ion-fab-button *ngIf=\"segmentModel === 'assignment' && asgmtlist &&this.sessionstatus!==this.sessionstatusended\" (click)=\"StayonPage()\" vertical=\"end\" horizontal=\"end\" slot=\"fixed\" style=\"position: absolute;bottom: 1em;right: 1em;\"><img src=\"assets/images/126-plus.svg\"></ion-fab-button>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pages/session-view/session-view-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/session-view/session-view-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: SessionViewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionViewPageRoutingModule", function() { return SessionViewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _session_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session-view.page */ "./src/app/pages/session-view/session-view.page.ts");




const routes = [
    {
        path: '',
        component: _session_view_page__WEBPACK_IMPORTED_MODULE_3__["SessionViewPage"]
    }
];
let SessionViewPageRoutingModule = class SessionViewPageRoutingModule {
};
SessionViewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SessionViewPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/session-view/session-view.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/session-view/session-view.module.ts ***!
  \***********************************************************/
/*! exports provided: SessionViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionViewPageModule", function() { return SessionViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _session_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./session-view-routing.module */ "./src/app/pages/session-view/session-view-routing.module.ts");
/* harmony import */ var _session_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./session-view.page */ "./src/app/pages/session-view/session-view.page.ts");
/* harmony import */ var _components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components.module */ "./src/app/components.module.ts");








let SessionViewPageModule = class SessionViewPageModule {
};
SessionViewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _session_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["SessionViewPageRoutingModule"],
            _components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_session_view_page__WEBPACK_IMPORTED_MODULE_6__["SessionViewPage"]]
    })
], SessionViewPageModule);



/***/ }),

/***/ "./src/app/pages/session-view/session-view.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/session-view/session-view.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nlc3Npb24tdmlldy9zZXNzaW9uLXZpZXcucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/session-view/session-view.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/session-view/session-view.page.ts ***!
  \*********************************************************/
/*! exports provided: SessionViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionViewPage", function() { return SessionViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _services_assignments_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/assignments.service */ "./src/app/services/assignments.service.ts");
/* harmony import */ var _services_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/network.service */ "./src/app/services/network.service.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _model_global_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../model/global-api */ "./src/app/model/global-api.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");









let SessionViewPage = class SessionViewPage {
    constructor(activatedRoute, platform, nativeHttp, assignmentsService, router, networkService, storage) {
        this.activatedRoute = activatedRoute;
        this.platform = platform;
        this.nativeHttp = nativeHttp;
        this.assignmentsService = assignmentsService;
        this.router = router;
        this.networkService = networkService;
        this.storage = storage;
        //Segment
        this.segmentModel = "assignment";
    }
    ngOnInit() {
        //Segment
        this.isactiveassignment = "activesegment";
        this.getAssignmentList();
    }
    ionViewDidEnter() {
        this.platform.backButton.subscribeWithPriority(10, () => {
            console.log('Handler was called!');
            this.router.navigateByUrl('tabs/session-view/session-my');
        });
    }
    /*Get AssignmentList*/
    getAssignmentList() {
        this.sessionstatusended = _model_global_api__WEBPACK_IMPORTED_MODULE_7__["SessionStatus"].SESSION_STATUS_ENDED;
        // Get the ID that was passed with the URL
        let id = this.activatedRoute.snapshot.paramMap.get('id');
        this.sessionid = id;
        //Global
        this.assignmentsService.setselectedsessionid(id);
        this.storage.get('mysession').then((val) => {
            this.sessionstatus = val.session_Status;
            this.assignmentsService.setselectedsessionstatus(this.sessionstatus); //Set session status
            this.asgmtlist = val.assignments;
            this.assignmentsService.setselectedasgmtlist(this.asgmtlist); //Set assignment list
            val.forEach((valor) => {
                if (valor.session_Id == this.assignmentsService.getselectedsessionid()) //Get session id
                 {
                    this.assignmentsService.setselectedtutorname(valor.tutor_Name);
                    this.asgmtlist = valor.assignments;
                    this.assignmentsService.setselectedasgmtlist(this.asgmtlist); //Set assignment list
                    this.storage.set('assignmentdetails', this.asgmtlist);
                    this.sessionstatus = valor.session_Status;
                    this.assignmentsService.setselectedparticipantid(valor.participant_Id); //Set Participant Id
                    this.assignmentsService.setselectedsessionstatus(this.sessionstatus); //Set session status
                    console.log("Found Session View!");
                }
            });
        });
    }
    /*Segment Changed*/
    segmentChanged(event) {
        if (this.segmentModel != "assignment") {
            this.isactiveassignment = "inactivesegment";
            this.isactivevideoorvoice = "activesegment";
        }
        else if (this.segmentModel == "assignment") {
            this.isactiveassignment = "activesegment";
            this.isactivevideoorvoice = "inactivesegment";
        }
    }
    /*Network*/
    StayonPage() {
        if (this.networkService.online == false) {
            this.networkService.presentNetworkMsg();
        }
        else {
            this.router.navigateByUrl('tabs/session-view/session-assignment-create/' + this.sessionid);
        }
    }
    NextPage() {
        if (this.networkService.online == false) {
            this.networkService.presentNetworkMsg();
        }
    }
};
SessionViewPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"] },
    { type: _services_assignments_service__WEBPACK_IMPORTED_MODULE_4__["AssignmentsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
];
SessionViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-session-view',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./session-view.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-view/session-view.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./session-view.page.scss */ "./src/app/pages/session-view/session-view.page.scss")).default]
    })
], SessionViewPage);



/***/ })

}]);
//# sourceMappingURL=pages-session-view-session-view-module-es2015.js.map