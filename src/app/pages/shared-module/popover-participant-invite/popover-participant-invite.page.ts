import { Component, OnInit,ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import {PopoverController,IonInfiniteScroll } from '@ionic/angular';
import { AssignmentsService } from '../../../services/assignments.service';
import { HTTP } from '@ionic-native/http/ngx';
import {apiurl} from '../../../model/global-api';
import {  GlobalService} from '../../../services/global.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-popover-participant-invite',
  templateUrl: './popover-participant-invite.page.html',
  styleUrls: ['./popover-participant-invite.page.scss'],
})
export class PopoverParticipantInvitePage implements OnInit {
  countaddedparticipant: number;  data = []; sessionid:any;searchParticipant="";
  textdisplayparticipant:any;displayaddedparticipants:any;invitedfriends:any;
//UserInfo
token:any;studentid:any;
  constructor(private globalService: GlobalService,private nativeHttp:HTTP,private router:Router,private assignmentsService: AssignmentsService,private storage:Storage,private popoverController:PopoverController ) {
    this.countaddedparticipant = 0;
    this.displayaddedparticipants=this.countaddedparticipant+" Student(s) added";
   }
  
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  ngOnInit() {}
  ionViewWillEnter(){
    this.token=this.globalService.getselectedtoken()
  this.studentid=this.globalService.getselectedStudentId()
    this.CallAPISearchStudentsToInvite();
  }
  /*Get Search Students to Invite*/
CallAPISearchStudentsToInvite()
{
  this.sessionid=this.assignmentsService.getselectedsessionid();
 this.nativeHttp.setDataSerializer('json');
  this.nativeHttp.post(apiurl.apiUrl+'session/searchStudents2Invite', {
    "Authentication_Token":this.token, //Get from storage 
   "Student_Id":this.studentid,
  "Session_Id":this.sessionid,
}, {
 'Accept': 'application/json',
 'Content-Type': 'application/json' })
 .then(response => {
   try {
    console.log('this is response data',response)
     response.data = JSON.parse(response.data);
     this.textdisplayparticipant=response.data;
   } catch(e) {
     console.error('JSON parsing error plaese be patient');
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
  AddParticipant(participant){
    this.countaddedparticipant++;
    this.displayaddedparticipants=this.countaddedparticipant+" Student(s) added";
    participant.toBeInvited = participant.toBeInvited == 'N' ? 'Y' : 'N';
    this.invitedfriends=participant;
    this.data.push(this.invitedfriends);
  }
 
  invitefriends(){
    //console.log(this.data)-->Add more than  a student at a time
    this.nativeHttp.setDataSerializer('json');
    this.nativeHttp.post(apiurl.apiUrl+'session/participant_invite', {
      "Authentication_Token":this.token, //Get from storage 
    "Owner_Id":this.studentid,
    "Session_Id": this.sessionid,
    "StudentList":JSON.stringify(this.data)
 }, {
   'Accept': 'application/json',
   'Content-Type': 'application/json' })
   .then(response => {
    this.assignmentsService.presentLoading()
     try {
       response.data = JSON.parse(response.data);
       //console.log(response.data)
      this.storage.set('mysession', response.data); 
       this.storage.set('assignmentdetails',response.data.assignments);
       this.assignmentsService.dismissLoading()
       this.popoverController.dismiss();
     } catch(e) {
       console.error('JSON parsing error');
       this.assignmentsService.presentError()
       setTimeout(() => {
         this.closePopover();
         this.assignmentsService.dismissLoading()
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
     this.assignmentsService.dismissLoading()
     this.router.navigateByUrl('tabs/main'); 
  
 
   }, 3000); 
  });
  }
  }