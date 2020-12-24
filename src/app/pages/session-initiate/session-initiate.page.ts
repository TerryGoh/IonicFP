import { Component, OnInit  } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Storage} from '@ionic/storage';
import { AssignmentsService } from '../../services/assignments.service';
import {NetworkService} from '../../services/network.service';
import { HTTP } from '@ionic-native/http/ngx';
import {apiurl} from '../../model/global-api';
import { DomSanitizer } from '@angular/platform-browser';
import { GlobalService} from '../../services/global.service';
import { NgxImageCompressService } from 'ngx-image-compress';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-session-initiate',
  templateUrl: './session-initiate.page.html',
  styleUrls: ['./session-initiate.page.scss'],
})
export class SessionInitiatePage implements OnInit {

  constructor(private imageCompress: NgxImageCompressService,private platform: Platform,private camera: Camera, private assignmentsService: AssignmentsService,public dms:DomSanitizer,public base64:Base64,public formBuilder: FormBuilder,private storage:Storage,private router:Router,private networkService:NetworkService,private nativeHttp:HTTP,private globalService: GlobalService) {
    this.initiatesessionForm = formBuilder.group({
      assignmenttitle: ['', Validators.required],
      assignmenttext: ['']
  });
    }
  //Form
  public initiatesessionForm: FormGroup; assignmenttitle:any; assignmenttext:any;assignmentimage: any;session_id:any;
  public showtextarea=false; public imagevalid=false;imgdisplayinapp:any;
  //User Info
  token:any;studentid:any;

  //Image compress
imgResultBeforeCompress:string;
imgResultAfterCompress:string;
localUrl: any;
localCompressedURl:any;
sizeOfOriginalImage:number;
sizeOFCompressedImage:number;
ngOnInit(){}
ionViewDidEnter(){
  this.platform.backButton.subscribeWithPriority(10, () => {
    console.log('Handler was called!');
    this.router.navigateByUrl('tabs/main')
  });
}
ionViewWillEnter()
{
  this.token=this.globalService.getselectedtoken()
  this.studentid=this.globalService.getselectedStudentId()
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
    mediaType: this.camera.MediaType.PICTURE,
  }
  this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64 (DATA_URL):
    this.assignmentimage = imageData;
    this.imgdisplayinapp=this.display(this.assignmentimage)
   this.imagevalid=true;

   //count byte (purpose)
   this.sizeOfOriginalImage = this.imageCompress.byteCount(this.imgdisplayinapp)/(1024*1024);   
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

UpdateData(event){
  console.log( 'this is the text and title',this.assignmenttext, this.assignmenttitle)
  event.target.complete()
}

/*Upload */
UploadAssignment()
{
  if(this.networkService.online == false )
  {
    this.networkService.presentNetworkMsg(); 
  }
  if(this.initiatesessionForm.valid)
  {
    if(this.assignmenttext != undefined && this.assignmenttext != "")
    {
      this.PostSession();
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
 /*POST METHOD*/
 PostSession()
 {
  this.assignmentsService.presentLoading()
  this.nativeHttp.setDataSerializer('json');
 // console.log(this.studentid)
  //console.log(this.token)
   this.nativeHttp.post(apiurl.apiUrl+'session/requestTuition', {
    "Authentication_Token":this.token, //Get from storage 
    "Student_Id":this.studentid, //Get from storage  
    "Session_Title": this.assignmenttitle,
    "Session_Question_Text": this.assignmenttext,
    "Session_Question_Data": this.assignmentimage,
}, {
  'Accept': 'application/json',
  'Content-Type': 'application/json' })
  .then(response => {
  this.initiatesessionForm.reset() //Reset Form
   this.imagevalid=false; //Clear Image
  // console.log(response)
    try {
      //console.log(response.data)
      response.data = JSON.parse(response.data);
      this.storage.set('mysession', response.data); 
      this.storage.set('assignmentdetails',response.data.assignments);
      this.session_id=response.data.session_Id;
      this.assignmentsService.setselectedsessionid(this.session_id)
      this.assignmentsService.setselectedinitiatorid(this.studentid)
      this.assignmentsService.dismissLoading()
      this.assignmentsService.presentInitiateSession('Ok').then((res) => {
       if (res === 'Ok') {
        this.router.navigateByUrl('tabs/session-view/session-view/'+this.session_id);
       }else{
         this.assignmentsService.missingtitle() 
       }
      });
    } catch(e) {
      this.assignmentsService.presentError()

      setTimeout(() => {
        this.assignmentsService.dismissLoading()
        this.router.navigateByUrl('tabs/main');  

      }, 3000);
    }
 })
 .catch(response => {
  console.log(response.status);
  console.log(response.error);
  this.assignmentsService.presentError()

  setTimeout(() => {
    this.assignmentsService.dismissLoading()
    this.router.navigateByUrl('tabs/main');  

  }, 3000);
 });
 }
 
}
