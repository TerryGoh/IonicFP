import { Component,ViewChild,OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {NetworkService} from '../../services/network.service';
import {ChatService} from '../../services/chat.service';
import { HTTP } from '@ionic-native/http/ngx';
import { AssignmentsService } from '../../services/assignments.service';
import {SessionStatus,apiurl} from '../../model/global-api';
import { Storage } from '@ionic/storage';
import {  GlobalService} from '../../services/global.service';
@Component({
  selector: 'app-session-assignment-chat',
  templateUrl: './session-assignment-chat.page.html',
  styleUrls: ['./session-assignment-chat.page.scss'],
})
export class SessionAssignmentChatPage implements OnInit {
  constructor(private globalService: GlobalService,private nativeHttp:HTTP,private storage:Storage,private assignmentsService: AssignmentsService,private activatedRoute: ActivatedRoute, public formBuilder: FormBuilder, private modalController:ModalController,private networkService:NetworkService,private chatService:ChatService) {
    this.createchatForm = formBuilder.group({
      recipientname: [''],
      chattext: ['', Validators.required]
  });
  }
  
  @ViewChild('content') content: any;
  public recipients: Array<string>;
  public currentRecipient: string;
 sessionstatus:any;sessionstatusended:any;asgmid:any;chatIRecived:any;
 //Form 
 public createchatForm: FormGroup;recipientname:any;chattext:any;listRecipient:any;noofparticipant:any;

 //User Info
 token:any;studentid:any;
  ngOnInit(){
    this.currentRecipient = "Everyone";
    this.recipientname="Everyone";
  }
  ionViewWillEnter(): void {
    this.token=this.globalService.getselectedtoken() //Get Token
    this.studentid=this.globalService.getselectedStudentId()//Get Tutor
    this.sessionstatusended=SessionStatus.SESSION_STATUS_ENDED;
    this.APIRetrieveChatInAssignment();//Retrive Chats
    this.CallAPIListOfRecipient();//Receive Participant in Session
    this.sessionstatus=this.assignmentsService.getselectedsessionstatus();//Get Session Status
   setTimeout(() => {
      this.content.scrollToBottom(300);
  }, 2000);
  
}
    //Close Chat
    DismissModal(){
      this.modalController.dismiss();
    }
    //Change of selected recipient
    selectChanged(selectrecipient) {
      this.currentRecipient = selectrecipient;
      this.recipientname = selectrecipient;
     // console.log(this.recipientname)
     }
    SendMessage(){
      if(this.networkService.online == false )
      {
        this.networkService.presentNetworkMsg(); 
      }
      else{
      if(this.createchatForm.valid)
      {
        //POST METHOD
       // console.log(this.recipientname)
       // console.log(this.chattext)
        this.APISendChatInAssignment() //Send Message
         this.chattext="";
      }
      }
    }
    /*POST METHOD*/
 APIRetrieveChatInAssignment()
 {
   this.asgmid=this.assignmentsService.getselectedasgmtid()
  this.nativeHttp.setDataSerializer('json');
   this.nativeHttp.post(apiurl.apiUrl+'chat/retrieve', {
    "Authentication_Token":this.token, //Get from storage 
   "Asgmt_Id":this.asgmid,
   "User_Id": this.studentid,//Get from storage 
}, {
  'Accept': 'application/json',
  'Content-Type': 'application/json' })
  .then(response => {
    try {
      response.data = JSON.parse(response.data);
      this.storage.set('chatdetails', response.data); 
      console.log(response.data)
      this.storage.get('chatdetails').then((val) => {
        this.chatIRecived=val;
        });
    } catch(e) {
      console.error(e);
      this.modalController.dismiss();
      this.assignmentsService.presentError()
    }
 })
 .catch(response => {
   // prints 403
  console.log(response.status);

   // prints Permission denied
  console.log(response.error);
  this.modalController.dismiss();
  this.assignmentsService.presentError()

 });
 }
   /*POST METHOD*/
   APISendChatInAssignment()
   {
     this.asgmid=this.assignmentsService.getselectedasgmtid()//Get Assignment Id
    this.nativeHttp.setDataSerializer('json');
     this.nativeHttp.post(apiurl.apiUrl+'chat/send', {
    "Authentication_Token":this.token, //Get from storage 
     "Asgmt_Id":this.asgmid,
     "Sender":this.studentid,
     "Recipient":this.recipientname,
     "Chat_Value":this.chattext
  }, {
    'Accept': 'application/json',
    'Content-Type': 'application/json' })
    .then(response => {
      try {
       response.data = JSON.parse(response.data);
       // this.APIRetrieveChatInAssignment();
        setInterval(() => { 
          this.APIRetrieveChatInAssignment(); // Now the "this" still references the component
       }, 500);//half a second
       this.content.scrollToBottom();
     
      } catch(e) {
        console.error(e);
        this.assignmentsService.presentErrorchat()
      }
   })
   .catch(response => {
     // prints 403
    console.log(response.status);
  
     // prints Permission denied
    console.log(response.error);
    this.assignmentsService.presentErrorchat()
   });
   }
  /*Call APIListRecipient METHOD*/
   CallAPIListOfRecipient(){
    this.asgmid=this.assignmentsService.getselectedasgmtid() //Get asgmt id
    this.nativeHttp.setDataSerializer('json');
    this.nativeHttp.post(apiurl.apiUrl+'chat/listRecipient', {
   "Authentication_Token":this.token, //Get from storage 
    "Asgmt_Id":this.asgmid,
    "User_Id": this.studentid,
 }, {
   'Accept': 'application/json',
   'Content-Type': 'application/json' })
   .then(response => {
     try {
       response.data = JSON.parse(response.data);
       //console.log(response.data)
       this.listRecipient=response.data;
       this.noofparticipant=this.listRecipient.length;
     } catch(e) {
       console.error(e);
       this.modalController.dismiss();
       this.assignmentsService.presentError()
     }
  })
  .catch(response => {
    // prints 403
   console.log(response.status);
 
    // prints Permission denied
   console.log(response.error);
   this.modalController.dismiss();
   this.assignmentsService.presentError() 
   });
   }
}
