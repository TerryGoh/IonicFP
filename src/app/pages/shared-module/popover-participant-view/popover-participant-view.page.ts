import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import {PopoverController,IonInfiniteScroll } from '@ionic/angular';
import { AssignmentsService } from '../../../services/assignments.service';
import { PopoverParticipantInvitePage } from '../popover-participant-invite/popover-participant-invite.page';
import {SessionStatus, ParticipantStatus} from '../../../model/global-api';
import { HTTP } from '@ionic-native/http/ngx';
import {apiurl} from '../../../model/global-api';
import {  GlobalService} from '../../../services/global.service';
@Component({
  selector: 'app-popover-participant-view',
  templateUrl: './popover-participant-view.page.html',
  styleUrls: ['./popover-participant-view.page.scss'],
})
export class PopoverParticipantViewPage implements OnInit {

  constructor(private globalService: GlobalService,private assignmentsService: AssignmentsService,private nativeHttp:HTTP,private storage:Storage,private router: Router,private popoverController:PopoverController ) {
   }
  //API Data
  textdisplayparticipant:any;numofparticipants:any;
  
  data = [];sessionid:any;initiatorid:any;
  //API Status
 participantstatusremoved:any;participantstatusaccepted:any;
 public sessionstatuspending: any;sessionstatusaccepted:any;sessionstatusended:any;sessionstatus:any;

 //UserInfo
token:any;studentid:any;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  ngOnInit() {}
  ionViewWillEnter(){
  this.token=this.globalService.getselectedtoken()
  this.studentid=this.globalService.getselectedStudentId()//Check to see whether is initiator to be able to view invite button

    this.CallAPIgetParticipants();
    
}
/*Get All Participants*/
CallAPIgetParticipants()
{
  this.sessionstatus=this.assignmentsService.getselectedsessionstatus()//Get sessionstatus
    this.sessionid=this.assignmentsService.getselectedsessionid();//Get Sessionid
    this.initiatorid=this.assignmentsService.getselectedinitiatorid();//Get Initiator
    this.participantstatusremoved=ParticipantStatus.PARTICIPANT_STATUS_REMOVED;
    this.participantstatusaccepted=ParticipantStatus.PARTICIPANT_STATUS_ACCEPTED;
    this.sessionstatuspending = SessionStatus.SESSION_STATUS_PENDING;
    this.sessionstatusaccepted = SessionStatus.SESSION_STATUS_ACCEPTED;
    this.sessionstatusended = SessionStatus.SESSION_STATUS_ENDED;
  
    this.nativeHttp.setDataSerializer('json');
    this.nativeHttp.post(apiurl.apiUrl+'session/listParticipants', {
      "Authentication_Token":this.token, //Get from storage 
      "Session_Id":this.sessionid,
      "Student_Id":this.studentid,
  }, {
   'Accept': 'application/json',
   'Content-Type': 'application/json' })
   .then(response => {
     try {
       response.data = JSON.parse(response.data);
       //console.log(response.data)
       this.textdisplayparticipant=response.data;
      this.numofparticipants=this.textdisplayparticipant.length;
     } catch(e) {
      this.assignmentsService.presentError()
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
    this.assignmentsService.presentError()
    setTimeout(() => {
      this.closePopover();
      this.router.navigateByUrl('tabs/main'); 
   
  
    }, 3000);
    
  });
 
}


//Remove Participant
RemoveParticipant(participantid){
  this.nativeHttp.setDataSerializer('json');
  this.nativeHttp.post(apiurl.apiUrl+'session/participant_remove', {
    "Authentication_Token":this.token, //Get from storage 
    "Owner_Id":this.studentid,
   "Session_Id":this.sessionid,
   "Participant_Id": participantid
}, {
 'Accept': 'application/json',
 'Content-Type': 'application/json' })
 .then(response => {
   try {
     response.data = JSON.parse(response.data);
     this.textdisplayparticipant=response.data;
     this.closePopover();
     
   } catch(e) {
     console.error('JSON parsing error');
     this.assignmentsService.presentError()
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
  this.assignmentsService.presentError()
  setTimeout(() => {
    this.closePopover();
    this.router.navigateByUrl('tabs/main'); 
 

  }, 3000);
});
}
  closePopover(){
    this.popoverController.dismiss();
  }
  /*Pop over for participants*/
async invitefriend(ev: any) {
  this.popoverController.dismiss();
  const popover = await this.popoverController.create({
    component: PopoverParticipantInvitePage,
    event: ev,
  });
  return await popover.present();
}
}
