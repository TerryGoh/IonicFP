(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-session-assignment-create-session-assignment-create-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-assignment-create/session-assignment-create.page.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-assignment-create/session-assignment-create.page.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!---No Read-->\n<ion-header>\n  <app-session-header></app-session-header>\n  <ion-segment [(ngModel)]=\"segmentModel\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button class=\"{{isactivevideoorvoice}}\" value=\"conferencing\" >\n      <ion-label>Conferencing</ion-label>\n    </ion-segment-button>\n    <ion-segment-button class=\"{{isactiveassignment}}\" value=\"assignment\">\n      <ion-label>Assignment</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n<ion-content>\n  <div *ngIf=\"segmentModel === 'conferencing'\">\n    <ion-col>\n    <div style=\"text-align: center;\">No Conference Call</div>\n    </ion-col>\n  </div>    \n  <div *ngIf=\"segmentModel === 'assignment'\">\n    <div class=\"secondcontent\">\n      <br/>\n    <ion-col style=\"font-size: large;color:#1c91a8;padding:1em;\">Upload Assignment</ion-col>\n    <form [formGroup]=\"createassignmentForm\">\n      <ion-item>\n        <ion-label position=\"floating\" style=\"color:#1c91a8;\">Title<b style=\"color:red;\">*</b></ion-label>\n        <ion-input formControlName=\"assignmenttitle\" [(ngModel)]=\"assignmenttitle\"></ion-input>\n      </ion-item>\n      <ion-label position=\"floating\" style=\"color:#1c91a8;margin-left: 1em;\">Question<b style=\"color:red;\">*</b></ion-label>\n      <ion-item lines=\"none\" *ngIf=\"imagevalid\">\n        <div style=\" width:auto;margin:0 auto;display:block;float:none;max-width:100%; \">\n          <img [src]=\"imgdisplayinapp\" > \n    </div>\n    </ion-item>\n      <ion-item>\n          <ion-textarea formControlName=\"assignmenttext\" *ngIf=\"showtextarea\" [(ngModel)]=\"assignmenttext\"></ion-textarea>\n        </ion-item>\n    <ion-col>\n      <div class=\"content\">\n        <span><ion-icon button (click)=\"selecttext($event)\" src=\"assets/images/045-text.svg\"></ion-icon></span>\n        <span><ion-icon button (click)=\"selectImageGallery()\" src=\"assets/images/attachment.svg\"></ion-icon></span>\n        <span><ion-icon button (click)=\"selectImageCamera()\" src=\"assets/images/005-camera.svg\"></ion-icon></span>\n      </div>\n    </ion-col>\n    </form>\n    <ion-col>\n      <ion-button expand='full' (click)=\"UploadAssignment()\" style=\"color:#ffffff;\">Submit</ion-button>\n    </ion-col>\n    </div>\n    </div>\n  </ion-content>");

/***/ }),

/***/ "./src/app/pages/session-assignment-create/session-assignment-create-routing.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/session-assignment-create/session-assignment-create-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: SessionAssignmentCreatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionAssignmentCreatePageRoutingModule", function() { return SessionAssignmentCreatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _session_assignment_create_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session-assignment-create.page */ "./src/app/pages/session-assignment-create/session-assignment-create.page.ts");




const routes = [
    {
        path: '',
        component: _session_assignment_create_page__WEBPACK_IMPORTED_MODULE_3__["SessionAssignmentCreatePage"]
    }
];
let SessionAssignmentCreatePageRoutingModule = class SessionAssignmentCreatePageRoutingModule {
};
SessionAssignmentCreatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SessionAssignmentCreatePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/session-assignment-create/session-assignment-create.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/session-assignment-create/session-assignment-create.module.ts ***!
  \*************************************************************************************/
/*! exports provided: SessionAssignmentCreatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionAssignmentCreatePageModule", function() { return SessionAssignmentCreatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _session_assignment_create_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./session-assignment-create-routing.module */ "./src/app/pages/session-assignment-create/session-assignment-create-routing.module.ts");
/* harmony import */ var _session_assignment_create_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./session-assignment-create.page */ "./src/app/pages/session-assignment-create/session-assignment-create.page.ts");
/* harmony import */ var _components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components.module */ "./src/app/components.module.ts");









let SessionAssignmentCreatePageModule = class SessionAssignmentCreatePageModule {
};
SessionAssignmentCreatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _session_assignment_create_routing_module__WEBPACK_IMPORTED_MODULE_5__["SessionAssignmentCreatePageRoutingModule"],
            _components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_session_assignment_create_page__WEBPACK_IMPORTED_MODULE_6__["SessionAssignmentCreatePage"]]
    })
], SessionAssignmentCreatePageModule);



/***/ }),

/***/ "./src/app/pages/session-assignment-create/session-assignment-create.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/session-assignment-create/session-assignment-create.page.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  border: none;\n}\n\n.content {\n  display: flex;\n  max-width: 400em;\n  margin: 0 auto;\n  background: transparent;\n  padding-left: 2em;\n}\n\nspan {\n  zoom: 2;\n  padding: 0.1em;\n}\n\nion-icon {\n  background-color: transparent;\n}\n\nion-icon:hover {\n  background-color: #b9b9b9;\n  border: #b9b9b9 solid 0.1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2Vzc2lvbi1hc3NpZ25tZW50LWNyZWF0ZS9DOlxcd29ya2luZ1xcTllQX1Byb2pcXGlvbmljX3Byb2plY3RcXEZTUF9TTFBfQVBQQUkvc3JjXFxhcHBcXHBhZ2VzXFxzZXNzaW9uLWFzc2lnbm1lbnQtY3JlYXRlXFxzZXNzaW9uLWFzc2lnbm1lbnQtY3JlYXRlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2Vzc2lvbi1hc3NpZ25tZW50LWNyZWF0ZS9zZXNzaW9uLWFzc2lnbm1lbnQtY3JlYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURDRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQUU7RUFDRSxPQUFBO0VBQ0EsY0FBQTtBQ0dKOztBRERFO0VBQ0UsNkJBQUE7QUNJSjs7QURGRTtFQUNFLHlCQUFBO0VBQ0EsMkJBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nlc3Npb24tYXNzaWdubWVudC1jcmVhdGUvc2Vzc2lvbi1hc3NpZ25tZW50LWNyZWF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XG4gICAgYm9yZGVyOm5vbmU7XG4gIH1cbiAgLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWF4LXdpZHRoOiA0MDBlbTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmctbGVmdDoyZW07XG4gIH1cbiAgc3BhbiB7XG4gICAgem9vbToyO1xuICAgIHBhZGRpbmc6IDAuMWVtO1xuICB9XG4gIGlvbi1pY29uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuICB9XG4gIGlvbi1pY29uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiOWI5Yjk7XG4gICAgYm9yZGVyOiNiOWI5Yjkgc29saWQgMC4xZW07XG4gIH1cbiIsImlvbi1pdGVtIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogNDAwZW07XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZy1sZWZ0OiAyZW07XG59XG5cbnNwYW4ge1xuICB6b29tOiAyO1xuICBwYWRkaW5nOiAwLjFlbTtcbn1cblxuaW9uLWljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWljb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjliOWI5O1xuICBib3JkZXI6ICNiOWI5Yjkgc29saWQgMC4xZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/session-assignment-create/session-assignment-create.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/session-assignment-create/session-assignment-create.page.ts ***!
  \***********************************************************************************/
/*! exports provided: SessionAssignmentCreatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionAssignmentCreatePage", function() { return SessionAssignmentCreatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _services_assignments_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/assignments.service */ "./src/app/services/assignments.service.ts");
/* harmony import */ var _services_network_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/network.service */ "./src/app/services/network.service.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _model_global_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../model/global-api */ "./src/app/model/global-api.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");














let SessionAssignmentCreatePage = class SessionAssignmentCreatePage {
    constructor(globalService, nativeHttp, platform, dms, activatedRoute, camera, assignmentsService, base64, formBuilder, storage, router, networkService) {
        this.globalService = globalService;
        this.nativeHttp = nativeHttp;
        this.platform = platform;
        this.dms = dms;
        this.activatedRoute = activatedRoute;
        this.camera = camera;
        this.assignmentsService = assignmentsService;
        this.base64 = base64;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.router = router;
        this.networkService = networkService;
        //Segment
        this.segmentModel = "assignment";
        this.showtextarea = false;
        this.imagevalid = false;
        this.createassignmentForm = formBuilder.group({
            assignmenttitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            assignmenttext: ['']
        });
    }
    ngOnInit() {
        //Segment
        this.isactiveassignment = "activesegment";
    }
    ionViewDidEnter() {
        this.platform.backButton.subscribeWithPriority(10, () => {
            console.log('Handler was called!');
            this.router.navigateByUrl('tabs/session-view/session-my');
        });
        console.log("im here");
    }
    ionViewWillEnter() {
        this.token = this.globalService.getselectedtoken();
        this.studentid = this.globalService.getselectedStudentId();
        // Get the ID that was passed with the URL
        let id = this.activatedRoute.snapshot.paramMap.get('id');
        this.sessionid = id;
    }
    /*Segment */
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
    /*text*/
    selecttext(event) {
        this.showtextarea = !this.showtextarea;
    }
    /*Camera & Gallery*/
    pickImage(sourceType) {
        const options = {
            quality: 50,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            this.assignmentimage = imageData;
            console.log(imageData);
            this.imgdisplayinapp = this.display(this.assignmentimage);
            this.imagevalid = true;
        }, (err) => {
            // Handle error
        });
    }
    //Image Sanitize
    display(bImg) {
        return this.dms.bypassSecurityTrustUrl("data:image/jpeg;base64, " + bImg);
    }
    selectImageCamera() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.pickImage(this.camera.PictureSourceType.CAMERA);
        });
    }
    selectImageGallery() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        });
    }
    /*Upload */
    UploadAssignment() {
        if (this.networkService.online == false) {
            this.networkService.presentNetworkMsg();
        }
        if (this.createassignmentForm.valid) {
            if (this.assignmenttext != undefined && this.assignmenttext != "") {
                this.UploadJson();
                // console.log('check check it works')
            }
            else {
                this.assignmentsService.presentToastWithOptions("Text in the question field is compulsory");
            }
        }
        else {
            this.assignmentsService.presentToastWithOptions("Please ensure all required details are filled up");
        }
    }
    //UploadAssignmentAPI
    UploadJson() {
        this.assignmentsService.presentLoading();
        this.nativeHttp.setDataSerializer('json');
        this.nativeHttp.post(_model_global_api__WEBPACK_IMPORTED_MODULE_10__["apiurl"].apiUrl + 'session/uploadAsgmt', {
            "Authentication_Token": this.token,
            "Student_Id": this.studentid,
            "Session_Id": this.sessionid,
            "Assignment_Title": this.assignmenttitle,
            "Session_Question_Text": this.assignmenttext,
            "Session_Question_Data": this.assignmentimage,
        }, {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
            .then(response => {
            this.createassignmentForm.reset();
            this.imagevalid = false;
            try {
                response.data = JSON.parse(response.data); //whole asgmtlist of particular session
                this.storage.set('mysession', response.data);
                this.storage.set('assignmentdetails', response.data.assignments);
                this.sessionid = response.data.session_Id;
                this.assignmentsService.dismissLoading();
                this.assignmentsService.presentUploadAssignment('Ok').then((res) => {
                    if (res === 'Ok') {
                        this.router.navigateByUrl('tabs/session-view/session-my');
                    }
                });
            }
            catch (e) {
                this.assignmentsService.dismissLoading();
                console.error(e);
                this.router.navigateByUrl('tabs/main');
                this.assignmentsService.presentError();
            }
        })
            .catch(response => {
            // prints 403
            console.log(response.status);
            // prints Permission denied
            console.log(response.error);
            this.assignmentsService.dismissLoading();
            this.router.navigateByUrl('tabs/main');
            this.assignmentsService.presentError();
        });
    }
};
SessionAssignmentCreatePage.ctorParameters = () => [
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_12__["GlobalService"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__["HTTP"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["Platform"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
    { type: _services_assignments_service__WEBPACK_IMPORTED_MODULE_7__["AssignmentsService"] },
    { type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_3__["Base64"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_network_service__WEBPACK_IMPORTED_MODULE_8__["NetworkService"] }
];
SessionAssignmentCreatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-session-assignment-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./session-assignment-create.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-assignment-create/session-assignment-create.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./session-assignment-create.page.scss */ "./src/app/pages/session-assignment-create/session-assignment-create.page.scss")).default]
    })
], SessionAssignmentCreatePage);

// UploadAssignment()
// {
//   if(this.networkService.online == false )
//   {
//     this.networkService.presentNetworkMsg(); 
//   }
//   else{
//   if(this.createassignmentForm.valid)
//   {
//     if(this.assignmenttext!==undefined&&this.assignmenttext!=="")
//     {
//     this.UploadJson();
//     }
//     else if(this.assignmentimage!==undefined&&this.assignmentimage!=="")
//     {
//     this.UploadJson();
//     }
//     else
//     {
//       this.assignmentsService.presentToastWithOptions("Text in the question field is compulsory"); 
//     }
//   }
//     else
//     {
//      this.assignmentsService.presentToastWithOptions("Please ensure all required details are filled up"); 
//     }
//   }
// } 


/***/ })

}]);
//# sourceMappingURL=pages-session-assignment-create-session-assignment-create-module-es2015.js.map