import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AssignmentsService } from '../../services/assignments.service';
import {NetworkService} from '../../services/network.service';
import { HTTP } from '@ionic-native/http/ngx';
import {SessionStatus} from '../../model/global-api';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-session-view',
  templateUrl: './session-view.page.html',
  styleUrls: ['./session-view.page.scss'],
})
export class SessionViewPage implements OnInit {


  constructor(private activatedRoute: ActivatedRoute,private platform: Platform ,private nativeHttp:HTTP,private assignmentsService: AssignmentsService,private router:Router,private networkService:NetworkService,private storage:Storage) { }
  
  //Segment
  segmentModel = "assignment"; isactiveassignment:string;isactivevideoorvoice:string;

  //Return Value From API
  data:any;textdisplayassignment:any;sessionid:any;sessionstatusended:any;
  
  asgmtlist:any;sessionstatus:any;
  
  ngOnInit() {
    //Segment
  this.isactiveassignment="activesegment";
  this.getAssignmentList();

  
  }
  ionViewDidEnter(){
    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Handler was called!');
      this.router.navigateByUrl('tabs/session-view/session-my')
    });

  }

 


   /*Get AssignmentList*/
   getAssignmentList(){
    this.sessionstatusended = SessionStatus.SESSION_STATUS_ENDED;
     // Get the ID that was passed with the URL
  let id = this.activatedRoute.snapshot.paramMap.get('id');
  this.sessionid=id;
  //Global
  this.assignmentsService.setselectedsessionid(id);
  this.storage.get('mysession').then((val) => {
    this.sessionstatus=val.session_Status; 
    this.assignmentsService.setselectedsessionstatus(this.sessionstatus);//Set session status
    this.asgmtlist=val.assignments;
    this.assignmentsService.setselectedasgmtlist(this.asgmtlist);//Set assignment list
    val.forEach((valor) => {
    if(valor.session_Id==this.assignmentsService.getselectedsessionid())//Get session id
    {
      this.assignmentsService.setselectedtutorname(valor.tutor_Name);
      this.asgmtlist=valor.assignments;
      this.assignmentsService.setselectedasgmtlist(this.asgmtlist);//Set assignment list
      this.storage.set('assignmentdetails',this.asgmtlist);
      this.sessionstatus=valor.session_Status;
      this.assignmentsService.setselectedparticipantid(valor.participant_Id);//Set Participant Id
      this.assignmentsService.setselectedsessionstatus(this.sessionstatus);//Set session status
      console.log("Found Session View!")
    }
  })
});
  
}
  
/*Segment Changed*/
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
  /*Network*/
  StayonPage()
  {
    if(this.networkService.online == false )
    {
      this.networkService.presentNetworkMsg(); 
    }
    else{
      this.router.navigateByUrl('tabs/session-view/session-assignment-create/'+this.sessionid);
    }
  }
  NextPage(){
    if(this.networkService.online == false )
    {
      this.networkService.presentNetworkMsg(); 
    }
  }
}
