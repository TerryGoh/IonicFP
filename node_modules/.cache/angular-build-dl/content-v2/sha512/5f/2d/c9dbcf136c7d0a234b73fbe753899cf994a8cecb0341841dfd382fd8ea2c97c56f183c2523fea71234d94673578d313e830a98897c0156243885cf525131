(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~63b2cdb3"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared-module/popover-participant-view/popover-participant-view.page.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared-module/popover-participant-view/popover-participant-view.page.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!---check-->\n<ion-header>\n  <h2 class=\"title\" style=\"font-size: large;padding: 2%;\"><b>Participants <b *ngIf=\"this.sessionstatusended!==this.sessionstatus\">({{numofparticipants}})</b> </b><ion-icon style=\"float: right;\" src=\"assets/images/pop-up-cross.svg\" (click)=\"closePopover()\"></ion-icon></h2>\n</ion-header>\n<ion-content >\n  <div class=\"container\" *ngIf=\"this.sessionstatusended!==this.sessionstatus\">\n<div *ngFor=\"let participant of textdisplayparticipant\">\n<div class=\"popovercss\" *ngIf=\"participant.participant_Id==='TUTOR'\">\n  [SV] <b>{{participant.username}}</b>   <!--Tutor(SESSION_STATUS_ACCEPTED)-->\n</div>\n</div>\n<div *ngFor=\"let participant of textdisplayparticipant\">\n<div class=\"popovercss\" *ngIf=\"participant.is_Initiator==='Y'\">\n[IS] ({{participant.levelInfo_DisplayName}}) <b>{{participant.username}}</b>   <!--Session Initiator-->\n</div>\n</div>\n<div *ngFor=\"let participant of textdisplayparticipant\">\n<div  *ngIf=\"participant.status==this.participantstatusaccepted&&participant.sessionstatus!=this.sessionstatusaccepted&&participant.is_Initiator!=='Y'\">\n  <div class=\"popovercss\" >({{participant.levelInfo_DisplayName}}) <b>{{participant.username}}</b><button *ngIf=\"this.studentid==this.initiatorid&&this.sessionstatus!=this.sessionstatusaccepted\" (click) = \"RemoveParticipant(participant.participant_Id)\"  class=\"popoverremovebutton\">Remove</button>   \n  </div>\n</div>\n</div>\n<div><button class=\"popoverinvitebutton\" *ngIf=\"sessionstatus!=this.sessionstatusaccepted&&this.studentid==this.initiatorid\" (click)=\"invitefriend()\"><b>Invite Friend</b></button></div>\n</div>\n<div *ngIf=\"this.sessionstatusended===this.sessionstatus\" style=\"font-size: larger;text-align: center;\"><b>Session has ended.</b></div>\n");

/***/ }),

/***/ "./src/app/pages/shared-module/popover-participant-view/popover-participant-view.page.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/shared-module/popover-participant-view/popover-participant-view.page.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  padding: 0 4% 0 4%;\n}\n\nion-toolbar {\n  --min-height:0px!important;\n}\n\n.popovercss {\n  border: solid #000000;\n  background-color: white;\n  margin-bottom: 0.5em;\n  padding: 0.3em;\n}\n\n.popoverremovebutton {\n  border: solid 0.1em black;\n  color: white;\n  background-color: #1c91a8;\n  float: right;\n  padding: 0.1em;\n}\n\n.popoverinvitebutton {\n  border: solid 0.1em black;\n  color: white;\n  background-color: #1c91a8;\n  display: block;\n  margin: 0 auto;\n  text-align: center;\n  padding: 0.5em;\n}\n\n.popoverremovedlabel {\n  color: blakc;\n  float: right;\n  padding: 0.1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2hhcmVkLW1vZHVsZS9wb3BvdmVyLXBhcnRpY2lwYW50LXZpZXcvQzpcXHdvcmtpbmdcXE5ZUF9Qcm9qXFxpb25pY19wcm9qZWN0XFxGU1BfU0xQX0FQUEFJL3NyY1xcYXBwXFxwYWdlc1xcc2hhcmVkLW1vZHVsZVxccG9wb3Zlci1wYXJ0aWNpcGFudC12aWV3XFxwb3BvdmVyLXBhcnRpY2lwYW50LXZpZXcucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zaGFyZWQtbW9kdWxlL3BvcG92ZXItcGFydGljaXBhbnQtdmlldy9wb3BvdmVyLXBhcnRpY2lwYW50LXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURDRTtFQUNFLDBCQUFBO0FDRUo7O0FEQUE7RUFDRSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FDR0Y7O0FEREE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDSUY7O0FERkE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDS0Y7O0FESEE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNNRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NoYXJlZC1tb2R1bGUvcG9wb3Zlci1wYXJ0aWNpcGFudC12aWV3L3BvcG92ZXItcGFydGljaXBhbnQtdmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIHBhZGRpbmc6IDAgNCUgMCA0JTtcbiAgfVxuICBpb24tdG9vbGJhcntcbiAgICAtLW1pbi1oZWlnaHQ6MHB4IWltcG9ydGFudDtcbiAgfVxuLnBvcG92ZXJjc3N7XG4gIGJvcmRlcjpzb2xpZCAjMDAwMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTowLjVlbTtcbiAgcGFkZGluZzowLjNlbTtcbn1cbi5wb3BvdmVycmVtb3ZlYnV0dG9ue1xuICBib3JkZXI6c29saWQgMC4xZW0gYmxhY2s7XG4gIGNvbG9yOndoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMxYzkxYTg7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZzowLjFlbTtcbn1cbi5wb3BvdmVyaW52aXRlYnV0dG9ue1xuICBib3JkZXI6c29saWQgMC4xZW0gYmxhY2s7XG4gIGNvbG9yOndoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMxYzkxYTg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwLjVlbTtcbn1cbi5wb3BvdmVycmVtb3ZlZGxhYmVse1xuICBjb2xvcjpibGFrYztcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOjAuMWVtO1xufVxuIiwiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgNCUgMCA0JTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLW1pbi1oZWlnaHQ6MHB4IWltcG9ydGFudDtcbn1cblxuLnBvcG92ZXJjc3Mge1xuICBib3JkZXI6IHNvbGlkICMwMDAwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgcGFkZGluZzogMC4zZW07XG59XG5cbi5wb3BvdmVycmVtb3ZlYnV0dG9uIHtcbiAgYm9yZGVyOiBzb2xpZCAwLjFlbSBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWM5MWE4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmc6IDAuMWVtO1xufVxuXG4ucG9wb3Zlcmludml0ZWJ1dHRvbiB7XG4gIGJvcmRlcjogc29saWQgMC4xZW0gYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjOTFhODtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNWVtO1xufVxuXG4ucG9wb3ZlcnJlbW92ZWRsYWJlbCB7XG4gIGNvbG9yOiBibGFrYztcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOiAwLjFlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/shared-module/popover-participant-view/popover-participant-view.page.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/shared-module/popover-participant-view/popover-participant-view.page.ts ***!
  \***********************************************************************************************/
/*! exports provided: PopoverParticipantViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverParticipantViewPage", function() { return PopoverParticipantViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_assignments_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/assignments.service */ "./src/app/services/assignments.service.ts");
/* harmony import */ var _popover_participant_invite_popover_participant_invite_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../popover-participant-invite/popover-participant-invite.page */ "./src/app/pages/shared-module/popover-participant-invite/popover-participant-invite.page.ts");
/* harmony import */ var _model_global_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../model/global-api */ "./src/app/model/global-api.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/global.service */ "./src/app/services/global.service.ts");











let PopoverParticipantViewPage = class PopoverParticipantViewPage {
    constructor(globalService, assignmentsService, nativeHttp, storage, router, popoverController) {
        this.globalService = globalService;
        this.assignmentsService = assignmentsService;
        this.nativeHttp = nativeHttp;
        this.storage = storage;
        this.router = router;
        this.popoverController = popoverController;
        this.data = [];
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.token = this.globalService.getselectedtoken();
        this.studentid = this.globalService.getselectedStudentId(); //Check to see whether is initiator to be able to view invite button
        this.CallAPIgetParticipants();
    }
    /*Get All Participants*/
    CallAPIgetParticipants() {
        this.sessionstatus = this.assignmentsService.getselectedsessionstatus(); //Get sessionstatus
        this.sessionid = this.assignmentsService.getselectedsessionid(); //Get Sessionid
        this.initiatorid = this.assignmentsService.getselectedinitiatorid(); //Get Initiator
        this.participantstatusremoved = _model_global_api__WEBPACK_IMPORTED_MODULE_7__["ParticipantStatus"].PARTICIPANT_STATUS_REMOVED;
        this.participantstatusaccepted = _model_global_api__WEBPACK_IMPORTED_MODULE_7__["ParticipantStatus"].PARTICIPANT_STATUS_ACCEPTED;
        this.sessionstatuspending = _model_global_api__WEBPACK_IMPORTED_MODULE_7__["SessionStatus"].SESSION_STATUS_PENDING;
        this.sessionstatusaccepted = _model_global_api__WEBPACK_IMPORTED_MODULE_7__["SessionStatus"].SESSION_STATUS_ACCEPTED;
        this.sessionstatusended = _model_global_api__WEBPACK_IMPORTED_MODULE_7__["SessionStatus"].SESSION_STATUS_ENDED;
        this.nativeHttp.setDataSerializer('json');
        this.nativeHttp.post(_model_global_api__WEBPACK_IMPORTED_MODULE_7__["apiurl"].apiUrl + 'session/listParticipants', {
            "Authentication_Token": this.token,
            "Session_Id": this.sessionid,
            "Student_Id": this.studentid,
        }, {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
            .then(response => {
            try {
                response.data = JSON.parse(response.data);
                //console.log(response.data)
                this.textdisplayparticipant = response.data;
                this.numofparticipants = this.textdisplayparticipant.length;
            }
            catch (e) {
                this.assignmentsService.presentError();
                setTimeout(() => {
                    this.closePopover();
                    this.router.navigateByUrl('tabs/main');
                }, 3000);
            }
        })
            .catch(response => {
            // prints 403
            console.log(response.status);
            // prints Permission denied
            console.log(response.error);
            this.assignmentsService.presentError();
            setTimeout(() => {
                this.closePopover();
                this.router.navigateByUrl('tabs/main');
            }, 3000);
        });
    }
    //Remove Participant
    RemoveParticipant(participantid) {
        this.nativeHttp.setDataSerializer('json');
        this.nativeHttp.post(_model_global_api__WEBPACK_IMPORTED_MODULE_7__["apiurl"].apiUrl + 'session/participant_remove', {
            "Authentication_Token": this.token,
            "Owner_Id": this.studentid,
            "Session_Id": this.sessionid,
            "Participant_Id": participantid
        }, {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
            .then(response => {
            try {
                response.data = JSON.parse(response.data);
                this.textdisplayparticipant = response.data;
                this.closePopover();
            }
            catch (e) {
                console.error('JSON parsing error');
                this.assignmentsService.presentError();
                setTimeout(() => {
                    this.closePopover();
                    this.router.navigateByUrl('tabs/main');
                }, 3000);
            }
        })
            .catch(response => {
            // prints 403
            console.log(response.status);
            // prints Permission denied
            console.log(response.error);
            this.assignmentsService.presentError();
            setTimeout(() => {
                this.closePopover();
                this.router.navigateByUrl('tabs/main');
            }, 3000);
        });
    }
    closePopover() {
        this.popoverController.dismiss();
    }
    /*Pop over for participants*/
    invitefriend(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.popoverController.dismiss();
            const popover = yield this.popoverController.create({
                component: _popover_participant_invite_popover_participant_invite_page__WEBPACK_IMPORTED_MODULE_6__["PopoverParticipantInvitePage"],
                event: ev,
            });
            return yield popover.present();
        });
    }
};
PopoverParticipantViewPage.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_9__["GlobalService"] },
    { type: _services_assignments_service__WEBPACK_IMPORTED_MODULE_5__["AssignmentsService"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__["HTTP"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"])
], PopoverParticipantViewPage.prototype, "infiniteScroll", void 0);
PopoverParticipantViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popover-participant-view',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./popover-participant-view.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shared-module/popover-participant-view/popover-participant-view.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./popover-participant-view.page.scss */ "./src/app/pages/shared-module/popover-participant-view/popover-participant-view.page.scss")).default]
    })
], PopoverParticipantViewPage);



/***/ })

}]);
//# sourceMappingURL=default~components-session-header-session-header-module~pages-main-main-module~pages-session-assignm~63b2cdb3-es2015.js.map