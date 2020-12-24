import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../../services/assignments.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { PopoverController } from '@ionic/angular';
import { PopoverParticipantViewPage } from '../../pages/shared-module/popover-participant-view/popover-participant-view.page';
import { HTTP } from '@ionic-native/http/ngx';
import {apiurl} from '../../model/global-api';
import {NetworkService} from '../../services/network.service';
import { GlobalService} from '../../services/global.service';
@Component({
  selector: 'app-session-header',
  templateUrl: './session-header.page.html',
  styleUrls: ['./session-header.page.scss'],
})
export class SessionHeaderPage implements OnInit {

  constructor(private globalService: GlobalService,private router:Router,private activatedRoute: ActivatedRoute, private nativeHttp:HTTP,private assignmentsService: AssignmentsService,private networkService:NetworkService,public popoverController: PopoverController,private storage:Storage) { }
 
 sessionid:any;participantid:any;initiatorid:any;
 //From Storage
 sessionheaderdata:any;
  //User Info
  token:any;studentid:any;
  ngOnInit() {  
     this.getSessionHeaderData();
     this.token=this.globalService.getselectedtoken()
     this.studentid=this.globalService.getselectedStudentId()
     }
  /*Get Session Header Data*/
   getSessionHeaderData(){
     
    // Get the ID that was passed with the URL
 let id = this.activatedRoute.snapshot.paramMap.get('id');
 this.sessionid=id;

 //Global
 this.assignmentsService.setselectedsessionid(id);

 this.storage.get('mysession').then((val) => {
  this.sessionheaderdata=val;
  this.assignmentsService.getselectedparticipantid();
  this.assignmentsService.setselectedsessionheader(this.sessionheaderdata);
try
{
 val.forEach((valor) => {
   if(valor.session_Id==this.assignmentsService.getselectedsessionid())
   {
     this.sessionheaderdata=valor;
     this.initiatorid=valor.initiator_Id
     this.assignmentsService.setselectedinitiatorid(this.initiatorid)
     //console.log(this.initiatorid)
     this.assignmentsService.setselectedsessionheader(this.sessionheaderdata);
     this.assignmentsService.setselectedsessionstatus(valor.session_Status)
     console.log("Found Session Header!")
   }
 });
}
catch(error){
console.log(error)
}});
 }
  /*End A Session*/
  EndSession(){
    if(this.networkService.online == false )
    {
      this.networkService.presentNetworkMsg(); 
    }
    else
    {
  this.assignmentsService.EndSessionConfirmation('Cancel','End').then((res) => {
    if (res === 'End') {
     //POST Method
     this.LeaveSession();
     this.router.navigateByUrl('tabs/main');
    }
  });
    }   
  }
   /*Leave A Session*/
   LeaveSession(){
    console.log(this.assignmentsService.getselectedparticipantid())
    this.nativeHttp.setDataSerializer('json');
    this.nativeHttp.post(apiurl.apiUrl+'session/participant_leave', {
     "Authentication_Token":this.token, //Get from storage 
     "Student_Id":this.studentid,
     "Session_Id":this.sessionid,
     "Participant_Id":this.assignmentsService.getselectedparticipantid()
  }, {
   'Accept': 'application/json',
   'Content-Type': 'application/json' })
   .then(response => {
     try {
       response.data = JSON.parse(response.data);
       this.sessionheaderdata=response.data;
       this.storage.set('mysession', response.data); 
       this.storage.set('assignmentdetails',response.data.assignments);
      // console.log(response.data)
     } catch(e) {
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
async presentPopover(ev: any) {
  if(this.networkService.online == false )
  {
    this.networkService.presentNetworkMsg(); 
  }
  else
  {
  const popover = await this.popoverController.create({
    component: PopoverParticipantViewPage, 
    event: ev,
  });
  return await popover.present();
}
}
}
