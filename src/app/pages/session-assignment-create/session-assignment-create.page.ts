import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { ActivatedRoute,Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { AssignmentsService } from '../../services/assignments.service';
import {NetworkService} from '../../services/network.service';
import { HTTP } from '@ionic-native/http/ngx';
import {apiurl} from '../../model/global-api';
import { DomSanitizer } from '@angular/platform-browser';
import {  GlobalService} from '../../services/global.service';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-session-assignment-create',
  templateUrl: './session-assignment-create.page.html',
  styleUrls: ['./session-assignment-create.page.scss'],
})
export class SessionAssignmentCreatePage implements OnInit {

  constructor(private globalService: GlobalService,private nativeHttp:HTTP,private platform : Platform,public dms:DomSanitizer,private activatedRoute: ActivatedRoute,private camera: Camera, private assignmentsService: AssignmentsService,public base64:Base64,public formBuilder: FormBuilder,private storage:Storage,private router:Router,private networkService:NetworkService) {
    this.createassignmentForm = formBuilder.group({
      assignmenttitle: ['', Validators.required],
      assignmenttext: ['']
  });
    }
  //Segment
  segmentModel = "assignment"; isactiveassignment:string;isactivevideoorvoice:string;
  //Form 
  public createassignmentForm: FormGroup;assignmenttitle:any;assignmenttext:any; assignmentimage: any;sessionid:any;
  public showtextarea=false;public imagevalid=false;imgdisplayinapp:any;

  //User Info
 token:any;studentid:any;
ngOnInit(){
   //Segment
   this.isactiveassignment="activesegment";
}
ionViewDidEnter(){
  this.platform.backButton.subscribeWithPriority(10, () => {
    console.log('Handler was called!');
    this.router.navigateByUrl('tabs/session-view/session-my')
  });
  console.log("im here")
}
ionViewWillEnter()
{
  this.token=this.globalService.getselectedtoken()
  this.studentid=this.globalService.getselectedStudentId()
   // Get the ID that was passed with the URL
   let id = this.activatedRoute.snapshot.paramMap.get('id');
   this.sessionid=id;
}
/*Segment */
 segmentChanged(event) {
   if(this.segmentModel!="assignment")
   {
   this.isactiveassignment="inactivesegment";
   this.isactivevideoorvoice="activesegment";
   }
   else if (this.segmentModel=="assignment"){
     this.isactiveassignment="activesegment";
     this.isactivevideoorvoice="inactivesegment";
   }
 }
/*text*/
selecttext(event:Event){
  this.showtextarea=!this.showtextarea;
}
/*Camera & Gallery*/
pickImage(sourceType) {
  const options: CameraOptions = {
    quality: 50,
    sourceType: sourceType,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64 (DATA_URL):
    this.assignmentimage = imageData;
    console.log(imageData)
    this.imgdisplayinapp=this.display(this.assignmentimage)
   this.imagevalid=true;
  }, (err) => {
    // Handle error
  });
}
//Image Sanitize
display(bImg:string)
{
  return this.dms.bypassSecurityTrustUrl("data:image/jpeg;base64, "+bImg)
}
async selectImageCamera(){
  this.pickImage(this.camera.PictureSourceType.CAMERA);
}
async selectImageGallery(){
  this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
}
/*Upload */

UploadAssignment()
{
  if(this.networkService.online == false )
  {
    this.networkService.presentNetworkMsg(); 
  }
  if(this.createassignmentForm.valid)
  {
    if(this.assignmenttext != undefined && this.assignmenttext != "")
    {
      this.UploadJson();
      // console.log('check check it works')
    }else
    {
     this.assignmentsService.presentToastWithOptions("Text in the question field is compulsory"); 
    }
  }
    else
    {
     this.assignmentsService.presentToastWithOptions("Please ensure all required details are filled up"); 
    }
}
//UploadAssignmentAPI
UploadJson()
{
  this.assignmentsService.presentLoading()
  this.nativeHttp.setDataSerializer('json');
   this.nativeHttp.post(apiurl.apiUrl+'session/uploadAsgmt', {
  "Authentication_Token":this.token, //Get from storage
  "Student_Id":this.studentid,
  "Session_Id":this.sessionid,
  "Assignment_Title": this.assignmenttitle, 
  "Session_Question_Text": this.assignmenttext,
   "Session_Question_Data": this.assignmentimage,
}, {
  'Accept': 'application/json',
  'Content-Type': 'application/json' })
  .then(response => {
  this.createassignmentForm.reset()
  this.imagevalid=false;
    try {
      response.data = JSON.parse(response.data);//whole asgmtlist of particular session
      this.storage.set('mysession', response.data); 
      this.storage.set('assignmentdetails',response.data.assignments);
      this.sessionid=response.data.session_Id;
      this.assignmentsService.dismissLoading()
      this.assignmentsService.presentUploadAssignment('Ok').then((res) => {
       if (res === 'Ok') {
       this.router.navigateByUrl('tabs/session-view/session-my');
       } 
      });
    } catch(e) {
      this.assignmentsService.dismissLoading()
      console.error(e);
      this.router.navigateByUrl('tabs/main');   
      this.assignmentsService.presentError()    }
 })
 .catch(response => {
   // prints 403
   console.log(response.status);
   // prints Permission denied
   console.log(response.error);
   this.assignmentsService.dismissLoading()
   this.router.navigateByUrl('tabs/main');  
   this.assignmentsService.presentError();    

 });
 }

}
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