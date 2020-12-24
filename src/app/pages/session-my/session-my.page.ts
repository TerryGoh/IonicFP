


import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import {NetworkService} from '../../services/network.service';
import { AssignmentsService } from '../../services/assignments.service';
import {SessionStatus, ParticipantStatus,apiurl} from '../../model/global-api';
import { HTTP } from '@ionic-native/http/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import {  GlobalService} from '../../services/global.service';
import { Observable } from 'rxjs/internal/Observable';
import { LoadingController, Platform, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-session-my',
  templateUrl: './session-my.page.html',
  styleUrls: ['./session-my.page.scss'],
})
@Injectable({
  providedIn:'root'
})

export class SessionMyPage implements OnInit {
  loading:any;
  automaticClose = false;
  bread: number;
  constructor( private globalService: GlobalService,private platform:Platform, public dms:DomSanitizer,public toastController : ToastController, public loadingController: LoadingController,private router:Router,private assignmentsService: AssignmentsService,private nativeHttp:HTTP,private activatedRoute: ActivatedRoute,private storage:Storage,private networkService:NetworkService) {
    }
    

  //Status from API
  public sessionstatuspending: any;sessionstatusaccepted:any;sessionstatusended:any;
  participantstausinviting:any;participantstausrequest:any;participantstatusaccepted:any;imgdisplayinapp:any;
  textdisplay:any;
  //No Session Text
 NoSessionText:any;boolHaveSession=false;
 //User Info
 token:any;studentid:any;

 ngOnInit(){
 }
  async ionViewWillEnter(){
    this.bread = 1;
    this.token=this.globalService.getselectedtoken()
    this.studentid=this.globalService.getselectedStudentId()
      this.CallAPIMysessions();
      if (this.textdisplay == null){
        this.presentLoading()



      }else{ 
        console.log('data already found'),
        this.loading.dismiss()
        console.log(this.bread)
    };

  }
  ionViewDidEnter(){
    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Handler was called!');
      this.router.navigateByUrl('tabs/main')
    });
    
  }


  ionViewWillLeave(){
    this.loading.dismiss();
    this.bread = 0;
    this.toastController.dismiss()

  }
  UpdateData(event){
    this.token=this.globalService.getselectedtoken()
    this.studentid=this.globalService.getselectedStudentId()
    this.nativeHttp.setDataSerializer('json');
    let header =  {'Accept': 'application/json','Content-Type': 'application/json' }
    let fetchinfo = {"Authentication_Token":this.token, "Student_Id":this.studentid,"inDepth": "Y"}
   
      this.nativeHttp.post(apiurl.apiUrl+'session/mySessions',fetchinfo, header).then(response => {
      try {
        response.data = JSON.parse(response.data);
        this.storage.set('mysession', response.data).then(val =>{
         this.storage.get('mysession').then((val) =>{
          this.textdisplay = val;
    
          this.sessionstatuspending = SessionStatus.SESSION_STATUS_PENDING;
          this.sessionstatusaccepted = SessionStatus.SESSION_STATUS_ACCEPTED;
          this.sessionstatusended = SessionStatus.SESSION_STATUS_ENDED;
          this.participantstausinviting=ParticipantStatus.PARTICIPANT_STATUS_INVITING;
          this.participantstausrequest=ParticipantStatus.PARTICIPANT_STATUS_REQUEST;
          this.participantstatusaccepted=ParticipantStatus.PARTICIPANT_STATUS_ACCEPTED;
          this.loading.dismiss();
          event.target.complete();
        })
       })
   
      } catch(e) {
        console.error('JSON parsing error');
        this.assignmentsService.presentError()
        setTimeout(() => {
         this.loading.dismiss()
         event.target.complete()
         this.router.navigateByUrl('tabs/main');  
   
       }, 3000);
    
      }
   })
   .catch(response => {
     // prints 403
     console.log(response.status + "error1");
     // prints Permission denieddd
     console.log(response.error + "error2");
     this.assignmentsService.presentError()
     setTimeout(() => {
      this.loading.dismiss()
      event.target.complete()
      this.router.navigateByUrl('tabs/main');  

    }, 3000);
 
   });


  }


  CallAPIMysessions(){
    this.token=this.globalService.getselectedtoken()
    this.studentid=this.globalService.getselectedStudentId()
    this.nativeHttp.setDataSerializer('json');
    let header =  {'Accept': 'application/json','Content-Type': 'application/json' }
    let fetchinfo = {"Authentication_Token":this.token, "Student_Id":this.studentid,"inDepth": "Y"}
   
      this.nativeHttp.post(apiurl.apiUrl+'session/mySessions',fetchinfo, header).then(response => {
      try {
        response.data = JSON.parse(response.data);
        this.storage.set('mysession', response.data).then(val =>{
         this.storage.get('mysession').then((val) =>{
          this.textdisplay = val;
          if (this.textdisplay == null){
            if (this.bread == 1){
              this.presentToast();
            }else {console.log('continue ')}
          }else{
          }
    
          this.sessionstatuspending = SessionStatus.SESSION_STATUS_PENDING;
          this.sessionstatusaccepted = SessionStatus.SESSION_STATUS_ACCEPTED;
          this.sessionstatusended = SessionStatus.SESSION_STATUS_ENDED;
          this.participantstausinviting=ParticipantStatus.PARTICIPANT_STATUS_INVITING;
          this.participantstausrequest=ParticipantStatus.PARTICIPANT_STATUS_REQUEST;
          this.participantstatusaccepted=ParticipantStatus.PARTICIPANT_STATUS_ACCEPTED;
          this.loading.dismiss();
          console.log(' this is textdisplay', this.textdisplay)
         })
       })
   
      } catch(e) {
        console.error('JSON parsing error');
        this.assignmentsService.presentError()
        setTimeout(() => {
         this.loading.dismiss()
         this.router.navigateByUrl('tabs/main');  
   
       }, 3000);
    
      }
   })
   .catch(response => {
     // prints 403
     console.log(response.status + "error1");
     
   
     // prints Permission denied
     console.log(response.error + "error2");
     this.assignmentsService.presentError()
     setTimeout(() => {
      this.loading.dismiss()
      this.router.navigateByUrl('tabs/main');  

    }, 3000);
   
   });



  }
  

  
  toggleSection(index) {
    this.textdisplay[index].open = !this.textdisplay[index].open;
      this.textdisplay
      .filter((item, itemIndex ) => itemIndex != index)
      .map(item => item.open = false)

  }


  /*Network*/
  StayonPage()
  {
    if(this.networkService.online == false )
    {
      this.networkService.presentNetworkMsg(); 
      this.router.navigateByUrl('tabs/session-view/session-my');
    }
  }

SanitizeImage(imagefromAPI){
  //console.log(imagefromAPI)
  this.imgdisplayinapp=this.display(imagefromAPI)
  //console.log(this.imgdisplayinapp)
}

//Image Sanitize
display(bImg:string)
{
  return this.dms.bypassSecurityTrustUrl("data:image/jpeg;base64, "+bImg)
}
async presentToast() {
  const toast = await this.toastController.create({
    message: 'no session can be found ',
    duration: 5000,
    position: 'middle'
  });
  toast.present();
}

async presentLoading() {
  // Prepare a loading controller
  this.loading = await this.loadingController.create({
      message: 'Please Wait',
      cssClass: 'custom-class custom-loading',
      duration: 60000,
      backdropDismiss: false
  });
  // Present the loading controller

await this.loading.present();

}

CallAPIToAcceptInvitation(sessionid,participantid,initiatorid){
    
  if(this.networkService.online == false )
  {
    this.networkService.presentNetworkMsg(); 
    this.router.navigateByUrl('tabs/session-view/session-my');
  }
  else{
    console.log('session part and initiator',sessionid,participantid,initiatorid)
    //console.log(participantid)
    //console.log(initiatorid)
  //POST METHOD (Accept Invitation)
 this.nativeHttp.setDataSerializer('json');
 this.nativeHttp.post(apiurl.apiUrl+'session/participant_accept', {
"Authentication_Token":this.token, //Get from storage 
 "Owner_Id":initiatorid,
 "Session_Id": sessionid,
 "Participant_Id": participantid
}, {
'Accept': 'application/json',
'Content-Type': 'application/json' })
.then(response => {
  try {
    
    response.data = JSON.parse(response.data);
    this.storage.set('mysession', response.data); 
    this.storage.set('assignmentdetails',response.data.assignments);
    this.assignmentsService.setselectedsessionheader(response.data);
    this.router.navigateByUrl('tabs/session-view/session-view/'+sessionid);

  } catch(e) { 
    console.error('JSON parsing error');
    this.assignmentsService.presentError()
    setTimeout(() => {
      this.loading.dismiss()
      this.router.navigateByUrl('tabs/main');  

    }, 3000);  
  }
})
.catch(response => {
 // prints 403
console.log(response.status);

 // prints Permission denied
console.log(response.error);
this.assignmentsService.presentError()
setTimeout(() => {
  this.loading.dismiss()
  this.router.navigateByUrl('tabs/main');  

}, 3000);     
});
}
}

}





// xing yee code 
// CallAPIMysessions(){
    
//   this.assignmentsService.getSessionsByStudent();
//   console.log(this.assignmentsService.getSessionsByStudent(), 'test1')
//   console.log(this.assignmentsService, 'test2')
//   console.log(this.storage.get('mysession'),'test4')
//     this.storage.get('mysession').then((val) => {
//       //console.log(val)
//       if(val==0){
//         this.boolHaveSession=true;
//        this.NoSessionText="Currently, you are not in any session"
//        console.log(this.textdisplay, 'test7')

//        }
//        else if(val==1){
//          this.textdisplay=[val];
//          console.log(this.textdisplay, 'test6')

//        }
//        else{
//        this.textdisplay=val;
//        console.log(this.textdisplay, 'test5')

//        }
//        console.log(val, 'test3')
//       });
//       this.sessionstatuspending = SessionStatus.SESSION_STATUS_PENDING;
//       this.sessionstatusaccepted = SessionStatus.SESSION_STATUS_ACCEPTED;
//       this.sessionstatusended = SessionStatus.SESSION_STATUS_ENDED;
//       this.participantstausinviting=ParticipantStatus.PARTICIPANT_STATUS_INVITING;
//       this.participantstausrequest=ParticipantStatus.PARTICIPANT_STATUS_REQUEST;
//       this.participantstatusaccepted=ParticipantStatus.PARTICIPANT_STATUS_ACCEPTED;
// }


