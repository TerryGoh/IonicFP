(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-session-header-session-header-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/session-header/session-header.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/session-header/session-header.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar>\n  <ion-buttons slot=\"start\">\n  <button style=\"background-color:transparent;\" (click)=\"presentPopover()\"><img src=\"assets/images/Human.png\"><br/></button>\n  </ion-buttons>\n  <div *ngIf=\"sessionheaderdata\">\n  <ion-title style=\"text-align: center;\" ><b>{{sessionheaderdata.session_Title}}</b><br/><ion-label style=\"font-size: medium;\" *ngIf=\"sessionheaderdata.subject_DisplayName!=null||sessionheaderdata.level_DisplayName!=null\" >{{sessionheaderdata.subject_DisplayName}} ({{sessionheaderdata.level_DisplayName}})</ion-label></ion-title>\n</div>\n  <ion-buttons slot=\"end\">\n    <button style=\"background-color:transparent;\" (click)=\"EndSession()\"><img src=\"assets/images/EndButton.png\"><br/></button>\n  </ion-buttons>\n</ion-toolbar>");

/***/ }),

/***/ "./src/app/components/session-header/session-header-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/session-header/session-header-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: SessionHeaderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionHeaderPageRoutingModule", function() { return SessionHeaderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _session_header_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session-header.page */ "./src/app/components/session-header/session-header.page.ts");




const routes = [
    {
        path: '',
        component: _session_header_page__WEBPACK_IMPORTED_MODULE_3__["SessionHeaderPage"]
    }
];
let SessionHeaderPageRoutingModule = class SessionHeaderPageRoutingModule {
};
SessionHeaderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SessionHeaderPageRoutingModule);



/***/ }),

/***/ "./src/app/components/session-header/session-header.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/session-header/session-header.module.ts ***!
  \********************************************************************/
/*! exports provided: SessionHeaderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionHeaderPageModule", function() { return SessionHeaderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _session_header_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./session-header-routing.module */ "./src/app/components/session-header/session-header-routing.module.ts");
/* harmony import */ var _session_header_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./session-header.page */ "./src/app/components/session-header/session-header.page.ts");







let SessionHeaderPageModule = class SessionHeaderPageModule {
};
SessionHeaderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _session_header_routing_module__WEBPACK_IMPORTED_MODULE_5__["SessionHeaderPageRoutingModule"]
        ],
        declarations: [_session_header_page__WEBPACK_IMPORTED_MODULE_6__["SessionHeaderPage"]]
    })
], SessionHeaderPageModule);



/***/ }),

/***/ "./src/app/components/session-header/session-header.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/session-header/session-header.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2Vzc2lvbi1oZWFkZXIvc2Vzc2lvbi1oZWFkZXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/session-header/session-header.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/session-header/session-header.page.ts ***!
  \******************************************************************/
/*! exports provided: SessionHeaderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionHeaderPage", function() { return SessionHeaderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_assignments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/assignments.service */ "./src/app/services/assignments.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _pages_shared_module_popover_participant_view_popover_participant_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/shared-module/popover-participant-view/popover-participant-view.page */ "./src/app/pages/shared-module/popover-participant-view/popover-participant-view.page.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _model_global_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../model/global-api */ "./src/app/model/global-api.ts");
/* harmony import */ var _services_network_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/network.service */ "./src/app/services/network.service.ts");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");











let SessionHeaderPage = class SessionHeaderPage {
    constructor(globalService, router, activatedRoute, nativeHttp, assignmentsService, networkService, popoverController, storage) {
        this.globalService = globalService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.nativeHttp = nativeHttp;
        this.assignmentsService = assignmentsService;
        this.networkService = networkService;
        this.popoverController = popoverController;
        this.storage = storage;
    }
    ngOnInit() {
        this.getSessionHeaderData();
        this.token = this.globalService.getselectedtoken();
        this.studentid = this.globalService.getselectedStudentId();
    }
    /*Get Session Header Data*/
    getSessionHeaderData() {
        // Get the ID that was passed with the URL
        let id = this.activatedRoute.snapshot.paramMap.get('id');
        this.sessionid = id;
        //Global
        this.assignmentsService.setselectedsessionid(id);
        this.storage.get('mysession').then((val) => {
            this.sessionheaderdata = val;
            this.assignmentsService.getselectedparticipantid();
            this.assignmentsService.setselectedsessionheader(this.sessionheaderdata);
            try {
                val.forEach((valor) => {
                    if (valor.session_Id == this.assignmentsService.getselectedsessionid()) {
                        this.sessionheaderdata = valor;
                        this.initiatorid = valor.initiator_Id;
                        this.assignmentsService.setselectedinitiatorid(this.initiatorid);
                        //console.log(this.initiatorid)
                        this.assignmentsService.setselectedsessionheader(this.sessionheaderdata);
                        this.assignmentsService.setselectedsessionstatus(valor.session_Status);
                        console.log("Found Session Header!");
                    }
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    /*End A Session*/
    EndSession() {
        if (this.networkService.online == false) {
            this.networkService.presentNetworkMsg();
        }
        else {
            this.assignmentsService.EndSessionConfirmation('Cancel', 'End').then((res) => {
                if (res === 'End') {
                    //POST Method
                    this.LeaveSession();
                    this.router.navigateByUrl('tabs/main');
                }
            });
        }
    }
    /*Leave A Session*/
    LeaveSession() {
        console.log(this.assignmentsService.getselectedparticipantid());
        this.nativeHttp.setDataSerializer('json');
        this.nativeHttp.post(_model_global_api__WEBPACK_IMPORTED_MODULE_8__["apiurl"].apiUrl + 'session/participant_leave', {
            "Authentication_Token": this.token,
            "Student_Id": this.studentid,
            "Session_Id": this.sessionid,
            "Participant_Id": this.assignmentsService.getselectedparticipantid()
        }, {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
            .then(response => {
            try {
                response.data = JSON.parse(response.data);
                this.sessionheaderdata = response.data;
                this.storage.set('mysession', response.data);
                this.storage.set('assignmentdetails', response.data.assignments);
                // console.log(response.data)
            }
            catch (e) {
                console.error('JSON parsing error');
            }
        })
            .catch(response => {
            // prints 403
            console.log(response.status);
            // prints Permission denied
            console.log(response);
        });
    }
    /*Pop up (View Participant)*/
    presentPopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.networkService.online == false) {
                this.networkService.presentNetworkMsg();
            }
            else {
                const popover = yield this.popoverController.create({
                    component: _pages_shared_module_popover_participant_view_popover_participant_view_page__WEBPACK_IMPORTED_MODULE_6__["PopoverParticipantViewPage"],
                    event: ev,
                });
                return yield popover.present();
            }
        });
    }
};
SessionHeaderPage.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_10__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"] },
    { type: _services_assignments_service__WEBPACK_IMPORTED_MODULE_2__["AssignmentsService"] },
    { type: _services_network_service__WEBPACK_IMPORTED_MODULE_9__["NetworkService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
];
SessionHeaderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-session-header',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./session-header.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/session-header/session-header.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./session-header.page.scss */ "./src/app/components/session-header/session-header.page.scss")).default]
    })
], SessionHeaderPage);



/***/ })

}]);
//# sourceMappingURL=components-session-header-session-header-module-es2015.js.map