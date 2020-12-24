(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-session-assignment-chat-session-assignment-chat-module~pages-session-assignment-view-s~7063bba7"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-assignment-chat/session-assignment-chat.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-assignment-chat/session-assignment-chat.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *ngIf=\"this.sessionstatus!==this.sessionstatusended\" style=\"padding:3%;background-color:#274c9c;\">\n  <ion-title style=\"text-align: center;color:white;display:inline-flexbox;\" ><b>Instant Messaging</b><img (click)=\"DismissModal()\" style=\"width: 1.2em;position:absolute;right:0;\" src=\"assets/images/criss-cross_grayblue.png\"></ion-title>\n  </ion-header>\n  <!--Read-->\n  <ion-header *ngIf=\"this.sessionstatus===this.sessionstatusended\" style=\"padding:3%;background-color:#b2b2b2;\">\n    <ion-title style=\"text-align: center;color:#808080;display:inline-flexbox;\" ><b>Instant Messaging</b><img (click)=\"DismissModal()\" style=\"width: 1.2em;position:absolute;right:0;\" src=\"assets/images/criss-cross_grayblue.png\"></ion-title>\n    </ion-header>\n<ion-content #content overflow-scroll=\"true\">\n<div class=\"thirdcontent\" *ngFor=\"let chat of chatIRecived\">\n<ion-row >\n  <ion-col *ngIf=\"chat.sender_Id!=this.studentid\" size=\"9\"  class=\"message other-message\">\n    <b>{{chat.sender_Username}} to {{chat.recipient_Username}}:</b><br>\n    <span>{{chat.chat_Value}}</span>\n    <div class=\"time\" text-right><br>\n      <ion-label> {{chat.created_On| date:'medium'}}</ion-label>\n    </div>\n  </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col offset=\"3\" *ngIf=\"chat.sender_Id==this.studentid\"  size=\"9\" class=\"message my-message\">\n      <b>{{chat.sender_Username}} to {{chat.recipient_Username}}:</b><br>\n      <span>{{chat.chat_Value}}</span>\n      <div class=\"time\" text-right><br>\n        <ion-label> {{chat.created_On| date:'medium'}}</ion-label>\n        <!-- <ion-datetime value=\"{{chat.created_On}}\" displayFormat=\"D MMM YYYY, H:mm\" display-timezone=\"utc\"></ion-datetime>    -->\n      </div>\n    </ion-col>\n    </ion-row>\n    \n    \n</div>\n</ion-content>\n<!--No Read-->\n<ion-footer>\n<ion-toolbar >\n  <form [formGroup]=\"createchatForm\" *ngIf=\"this.sessionstatus!==this.sessionstatusended\">\n<ion-row>  \n  <ion-col size=\"2\" class=\"ion-align-self-center\">\n  <ion-text>To:</ion-text>\n  </ion-col>\n      <ion-col offset=\"-1\" size=\"5\">\n      <ion-select [(ngModel)]=\"recipientname\"  formControlName=\"recipientname\" style=\"background-color: #808080;color:black;\" #mySelect  (ionChange)=\"selectChanged(mySelect.value)\">\n        <ion-select-option><label>Everyone</label></ion-select-option>\n        <div *ngFor=\"let recipient of listRecipient\">\n        <ion-select-option value=\"{{recipient.user_Id}}\" *ngIf=\"recipient.user_Id!=this.studentid&&this.noofparticipant!=1\"><label>{{ recipient.user_Username }}</label></ion-select-option>\n      </div>\n      </ion-select>\n    </ion-col>\n  <ion-col size=\"10\">\n  <textarea formControlName=\"chattext\" autosize maxRows=\"4\"  [(ngModel)]=\"chattext\" class=\"message-input\"></textarea>\n  </ion-col>\n  <ion-col size=\"2\" class=\"ion-align-self-center\">\n    <img style=\"width:2em;\" src=\"assets/images/user-interface.png\" (click)=\"SendMessage()\"><br/>\n  </ion-col>\n</ion-row>\n</form>\n</ion-toolbar>\n</ion-footer>\n\n\n");

/***/ }),

/***/ "./src/app/pages/session-assignment-chat/session-assignment-chat.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/session-assignment-chat/session-assignment-chat.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".message {\n  padding: 1em;\n  border-radius: 1em;\n  margin-bottom: 1em;\n  white-space: pre-wrap;\n}\n\n.other-message {\n  background: #f0f0a7;\n  color: #000000;\n}\n\n.my-message {\n  background: #d9f6ff;\n  color: #000000;\n}\n\n.time {\n  color: #808080;\n  float: right;\n  font-size: small;\n}\n\n.message-input {\n  width: 100%;\n  border: 0.1em solid var(--ion-color-medium);\n  border-radius: 1em;\n  resize: none;\n  padding-left: 1em;\n  padding-right: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2Vzc2lvbi1hc3NpZ25tZW50LWNoYXQvQzpcXHdvcmtpbmdcXE5ZUF9Qcm9qXFxpb25pY19wcm9qZWN0XFxGU1BfU0xQX0FQUEFJL3NyY1xcYXBwXFxwYWdlc1xcc2Vzc2lvbi1hc3NpZ25tZW50LWNoYXRcXHNlc3Npb24tYXNzaWdubWVudC1jaGF0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2Vzc2lvbi1hc3NpZ25tZW50LWNoYXQvc2Vzc2lvbi1hc3NpZ25tZW50LWNoYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FDQ0Q7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNDLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURFQTtFQUNFLFdBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nlc3Npb24tYXNzaWdubWVudC1jaGF0L3Nlc3Npb24tYXNzaWdubWVudC1jaGF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlIHtcbiAgcGFkZGluZzogMWVtO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG4ub3RoZXItbWVzc2FnZSB7XG4gYmFja2dyb3VuZDogI2YwZjBhNztcbiBjb2xvcjogIzAwMDAwMDtcbn1cblxuLm15LW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kOiAjZDlmNmZmO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLnRpbWUge1xuIGNvbG9yOiAjODA4MDgwO1xuIGZsb2F0OiByaWdodDtcbiBmb250LXNpemU6IHNtYWxsO1xufVxuXG4ubWVzc2FnZS1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDAuMWVtIHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG4gIHJlc2l6ZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAxZW07XG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcbn0iLCIubWVzc2FnZSB7XG4gIHBhZGRpbmc6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cblxuLm90aGVyLW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kOiAjZjBmMGE3O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLm15LW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kOiAjZDlmNmZmO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLnRpbWUge1xuICBjb2xvcjogIzgwODA4MDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuXG4ubWVzc2FnZS1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDAuMWVtIHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG4gIHJlc2l6ZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAxZW07XG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/session-assignment-chat/session-assignment-chat.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/session-assignment-chat/session-assignment-chat.page.ts ***!
  \*******************************************************************************/
/*! exports provided: SessionAssignmentChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionAssignmentChatPage", function() { return SessionAssignmentChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/network.service */ "./src/app/services/network.service.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _services_assignments_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/assignments.service */ "./src/app/services/assignments.service.ts");
/* harmony import */ var _model_global_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../model/global-api */ "./src/app/model/global-api.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");












let SessionAssignmentChatPage = class SessionAssignmentChatPage {
    constructor(globalService, nativeHttp, storage, assignmentsService, activatedRoute, formBuilder, modalController, networkService, chatService) {
        this.globalService = globalService;
        this.nativeHttp = nativeHttp;
        this.storage = storage;
        this.assignmentsService = assignmentsService;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.networkService = networkService;
        this.chatService = chatService;
        this.createchatForm = formBuilder.group({
            recipientname: [''],
            chattext: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    ngOnInit() {
        this.currentRecipient = "Everyone";
        this.recipientname = "Everyone";
    }
    ionViewWillEnter() {
        this.token = this.globalService.getselectedtoken(); //Get Token
        this.studentid = this.globalService.getselectedStudentId(); //Get Tutor
        this.sessionstatusended = _model_global_api__WEBPACK_IMPORTED_MODULE_9__["SessionStatus"].SESSION_STATUS_ENDED;
        this.APIRetrieveChatInAssignment(); //Retrive Chats
        this.CallAPIListOfRecipient(); //Receive Participant in Session
        this.sessionstatus = this.assignmentsService.getselectedsessionstatus(); //Get Session Status
        setTimeout(() => {
            this.content.scrollToBottom(300);
        }, 2000);
    }
    //Close Chat
    DismissModal() {
        this.modalController.dismiss();
    }
    //Change of selected recipient
    selectChanged(selectrecipient) {
        this.currentRecipient = selectrecipient;
        this.recipientname = selectrecipient;
        // console.log(this.recipientname)
    }
    SendMessage() {
        if (this.networkService.online == false) {
            this.networkService.presentNetworkMsg();
        }
        else {
            if (this.createchatForm.valid) {
                //POST METHOD
                // console.log(this.recipientname)
                // console.log(this.chattext)
                this.APISendChatInAssignment(); //Send Message
                this.chattext = "";
            }
        }
    }
    /*POST METHOD*/
    APIRetrieveChatInAssignment() {
        this.asgmid = this.assignmentsService.getselectedasgmtid();
        this.nativeHttp.setDataSerializer('json');
        this.nativeHttp.post(_model_global_api__WEBPACK_IMPORTED_MODULE_9__["apiurl"].apiUrl + 'chat/retrieve', {
            "Authentication_Token": this.token,
            "Asgmt_Id": this.asgmid,
            "User_Id": this.studentid,
        }, {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
            .then(response => {
            try {
                response.data = JSON.parse(response.data);
                this.storage.set('chatdetails', response.data);
                console.log(response.data);
                this.storage.get('chatdetails').then((val) => {
                    this.chatIRecived = val;
                });
            }
            catch (e) {
                console.error(e);
                this.modalController.dismiss();
                this.assignmentsService.presentError();
            }
        })
            .catch(response => {
            // prints 403
            console.log(response.status);
            // prints Permission denied
            console.log(response.error);
            this.modalController.dismiss();
            this.assignmentsService.presentError();
        });
    }
    /*POST METHOD*/
    APISendChatInAssignment() {
        this.asgmid = this.assignmentsService.getselectedasgmtid(); //Get Assignment Id
        this.nativeHttp.setDataSerializer('json');
        this.nativeHttp.post(_model_global_api__WEBPACK_IMPORTED_MODULE_9__["apiurl"].apiUrl + 'chat/send', {
            "Authentication_Token": this.token,
            "Asgmt_Id": this.asgmid,
            "Sender": this.studentid,
            "Recipient": this.recipientname,
            "Chat_Value": this.chattext
        }, {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
            .then(response => {
            try {
                response.data = JSON.parse(response.data);
                // this.APIRetrieveChatInAssignment();
                setInterval(() => {
                    this.APIRetrieveChatInAssignment(); // Now the "this" still references the component
                }, 500); //half a second
                this.content.scrollToBottom();
            }
            catch (e) {
                console.error(e);
                this.assignmentsService.presentErrorchat();
            }
        })
            .catch(response => {
            // prints 403
            console.log(response.status);
            // prints Permission denied
            console.log(response.error);
            this.assignmentsService.presentErrorchat();
        });
    }
    /*Call APIListRecipient METHOD*/
    CallAPIListOfRecipient() {
        this.asgmid = this.assignmentsService.getselectedasgmtid(); //Get asgmt id
        this.nativeHttp.setDataSerializer('json');
        this.nativeHttp.post(_model_global_api__WEBPACK_IMPORTED_MODULE_9__["apiurl"].apiUrl + 'chat/listRecipient', {
            "Authentication_Token": this.token,
            "Asgmt_Id": this.asgmid,
            "User_Id": this.studentid,
        }, {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
            .then(response => {
            try {
                response.data = JSON.parse(response.data);
                //console.log(response.data)
                this.listRecipient = response.data;
                this.noofparticipant = this.listRecipient.length;
            }
            catch (e) {
                console.error(e);
                this.modalController.dismiss();
                this.assignmentsService.presentError();
            }
        })
            .catch(response => {
            // prints 403
            console.log(response.status);
            // prints Permission denied
            console.log(response.error);
            this.modalController.dismiss();
            this.assignmentsService.presentError();
        });
    }
};
SessionAssignmentChatPage.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_11__["GlobalService"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"] },
    { type: _services_assignments_service__WEBPACK_IMPORTED_MODULE_8__["AssignmentsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _services_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"] },
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_6__["ChatService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content')
], SessionAssignmentChatPage.prototype, "content", void 0);
SessionAssignmentChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-session-assignment-chat',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./session-assignment-chat.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-assignment-chat/session-assignment-chat.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./session-assignment-chat.page.scss */ "./src/app/pages/session-assignment-chat/session-assignment-chat.page.scss")).default]
    })
], SessionAssignmentChatPage);



/***/ }),

/***/ "./src/app/services/chat.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");





let ChatService = class ChatService {
    constructor(nativeHttp, toastCtrl, alertController, loadingController, storage) {
        this.nativeHttp = nativeHttp;
        this.toastCtrl = toastCtrl;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.storage = storage;
    }
    //Pop-up message
    presentToastWithOptions(text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                header: text,
                duration: 3000,
                position: 'bottom',
                buttons: [{
                        text: 'CLOSE',
                        role: 'cancel'
                    }],
                cssClass: 'toastCSS'
            });
            toast.present();
        });
    }
};
ChatService.ctorParameters = () => [
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
];
ChatService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ChatService);



/***/ })

}]);
//# sourceMappingURL=default~pages-session-assignment-chat-session-assignment-chat-module~pages-session-assignment-view-s~7063bba7-es2015.js.map