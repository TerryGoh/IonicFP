import { Component, OnInit, AfterViewInit, NgZone } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AssignmentsService } from '../../services/assignments.service';
import { ModalController, Platform } from '@ionic/angular';
import { SessionAssignmentChatPage } from '../../pages/session-assignment-chat/session-assignment-chat.page';
import { Storage } from '@ionic/storage';
import {NetworkService} from '../../services/network.service';
import {apiurl, SessionStatus} from '../../model/global-api';
import { DomSanitizer } from '@angular/platform-browser';
import { GlobalService} from '../../services/global.service';
import { SessionViewImageDiscussionPage } from '../shared-module/session-view-image-discussion/session-view-image-discussion.page';
import { SessionMyPage } from '../session-my/session-my.page';
import { Observable } from 'rxjs/internal/Observable';
import { HTTP } from '@ionic-native/http/ngx';
import { TestBed } from '@angular/core/testing';
import { run } from "../../../assets/js/examples/face_tracking__track_one_face.js";
import { closeCamera } from '../../../assets/js/ui/ui__input__camera.js'
@Component({
  selector: 'app-session-assignment-view',
  templateUrl: './session-assignment-view.page.html',
  styleUrls: ['./session-assignment-view.page.scss'],
})
export class SessionAssignmentViewPage implements OnInit, AfterViewInit {
  textdisplay: any;
  assignlist: any;
  ChangeDetectorRef: any;
  test: any;
  test2: any;
  refreshvalue: boolean = false;
  test3: any;

  constructor(private ngZone:NgZone,private nativeHttp:HTTP,private globalService: GlobalService,private platform:Platform,private sessionmypage:SessionMyPage ,public dms:DomSanitizer,private router:Router,private activatedRoute: ActivatedRoute,private modalController:ModalController, private assignmentsService: AssignmentsService,private storage:Storage,private networkService:NetworkService) { }

  //Segment
  segmentModel = "assignment";isactiveassignment:string; isactivevideoorvoice:string;asgmtid:any;sessionid:any;
 //User Info
 token:any;studentid:any;tutornamefordisplay:any;
  asgmtlist:any;sessionstatusended:any;sessionstatus:any;imgdisplayinapp:any;asgmtdiscusslist:any;discussimgdisplayinapp:any;
  ngOnInit() { 
    //Segment
    console.log('this.router.url','this.rout')
  this.isactiveassignment="activesegment";
  }

  ngAfterViewInit() {
    
  }

  ionViewWillEnter()
  {
    this.token=this.globalService.getselectedtoken()
    this.studentid=this.globalService.getselectedStudentId()
    this.getAssignmentList();
    this.tutornamefordisplay=this.assignmentsService.getselectedtutorname()

    // Starts brfv5 face tracking
    console.log("brfv5 starting...")
    run();
  }
  ionViewDidEnter(){

    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('tabs/session-view/session-view/'+this.sessionid)
    });
  }
  ionViewWillLeave() {
    console.log("Leaving view, closing camera")
    closeCamera();
  }

/*Get AssignmentList*/



getAssignmentList(){
  this.sessionstatusended = SessionStatus.SESSION_STATUS_ENDED;
   // Get the ID that was passed with the URL
   this.activatedRoute.paramMap.subscribe(params => {
     let id = params.getAll('id')
     this.sessionid=id;
   })
  this.activatedRoute.paramMap.subscribe(params => {
    let asgmtid = params.getAll('asgmtid')
    this.asgmtid=asgmtid;
  })

  this.sessionstatus=this.assignmentsService.getselectedsessionstatus();
  this.storage.get('assignmentdetails').then((val) => {
      val.forEach((valor) => {
      if(this.asgmtid==valor.asgmt_Id)
      {
        this.asgmtlist=valor;
        this.imgdisplayinapp=this.display(valor.asgmt_Data)
        this.asgmtdiscusslist=this.asgmtlist.assignmentDiscussions;

      }
    })
  });

}



async UpdateData(event)
{
  this.sessionstatusended = SessionStatus.SESSION_STATUS_ENDED;


  this.token=this.globalService.getselectedtoken()
  this.studentid=this.globalService.getselectedStudentId()
  this.sessionstatus=this.assignmentsService.getselectedsessionstatus();

  let header =  {'Accept': 'application/json','Content-Type': 'application/json' }
  let fetchinfo = {"Authentication_Token":this.token, "Student_Id":this.studentid, "inDepth": "Y"}
  this.nativeHttp.setDataSerializer('json');
  this.nativeHttp.post(apiurl.apiUrl+'session/mySessions', fetchinfo,header).then( response => {
   try {
     response.data = JSON.parse(response.data);//whole asgmtlist of particular session ,returns a promise
     this.storage.set('AssignmentDiscussion',response.data).then(val =>{
      this.storage.get('AssignmentDiscussion').then((val) =>
      {
        // console.log('storage get',this.storage.get('AssignmentDiscussion'))
        val.forEach((valor) => 
        {
            this.test = valor.assignments;
            this.test.forEach(valor2 => 
          {
              this.test2 = valor2.asgmt_Id;
            if(this.asgmtid==this.test2)
            {
              this.test = valor2.assignmentDiscussions;
              this.test3 = valor2 
              console.log('this is the apilist' , this.test.created_On)

              this.imgdisplayinapp=this.display(this.test3.asgmt_Data)
              this.asgmtdiscusslist=this.test;
            }
          });
        })
      })
    event.target.complete();    
    })
 } 
 catch(e) {
  console.error('JSON parsing error');
  this.assignmentsService.presentError()
  setTimeout(() => {
   event.target.complete()
   this.router.navigateByUrl('tabs/main');  

 }, 3000); 
}

}).catch(response => {
  // prints 403
  console.log(response.status, ' errorsss');
  // prints Permission denied
  console.log(response.error, ' error');
  this.assignmentsService.presentError()
  setTimeout(() => {
   event.target.complete()
   this.router.navigateByUrl('tabs/main');  

 }, 3000);
  });

}

  // refreshing(){
  //   this.ngZone.run(() => {
  //     this.refreshvalue = true;
  //   })
  // }


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
/*Chat Pop up*/
async presentModal(ev: any) {
  const popover = await this.modalController.create({
    component: SessionAssignmentChatPage,
    cssClass: 'small-modal',
    backdropDismiss: true
  });
  return await popover.present();
}
/*Edit Drawing*/
EditDrawing(){
  if(this.networkService.online == false )
  {
    this.networkService.presentNetworkMsg(); 
  }
  else{
    this.assignmentsService.presentDrawing('Cancel','Confirm').then((res) => {
      if (res === 'Confirm') {
        this.router.navigateByUrl('/tabs/session-view/session-assignment-edit/'+this.sessionid+'/'+this.asgmtid);   
        //Drawing Page
      }
     });
  }
  }
   /*Open Chat*/
StayonPage(asgmtid)
{
  if(this.networkService.online == false )
  {
    this.networkService.presentNetworkMsg(); 
  }
  else{
    this.assignmentsService.setselectedasgmtid(asgmtid);
    this.presentModal(event);
  }
}
  PreviousPage(){
    if(this.networkService.online == false )
    {
      this.networkService.presentNetworkMsg(); 
    }
    else{
    this.router.navigateByUrl('/tabs/session-view/session-view/'+this.sessionid);
    }  
  }
  //Image Sanitize
  display(bImg:string)
  {
    return this.dms.bypassSecurityTrustResourceUrl("data:image/png;base64, "+bImg)
  }
  //Display Image 
  async presentModalImage(imgdisplayinapp) {
    const modal = await this.modalController.create({
      component: SessionViewImageDiscussionPage,
      componentProps: { 
        imagedisplay: this.imgdisplayinapp,
        discussimgdisplayinapp:this.asgmtlist.asgmtDiscuss_Data
      }
    });
    return await modal.present();
  }
  async presentModalDiscussImage(imgdisplayinapp) {
    const modal = await this.modalController.create({
      component: SessionViewImageDiscussionPage,
      componentProps: { 
        imagedisplay: this.display(imgdisplayinapp),
      }
    });
    return await modal.present();
  }
  
}
