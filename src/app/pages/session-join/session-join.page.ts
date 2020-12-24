import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import {NetworkService} from '../../services/network.service';
import { AssignmentsService } from '../../services/assignments.service';
import {apiurl} from '../../model/global-api';
import { HTTP } from '@ionic-native/http/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import {  GlobalService} from '../../services/global.service';
import { LoadingController, Platform, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-session-join',
  templateUrl: './session-join.page.html',
  styleUrls: ['./session-join.page.scss'],
})
export class SessionJoinPage implements OnInit {
  bread: number;

  constructor( private globalService: GlobalService,private platform: Platform,public toastController : ToastController,public loadingController: LoadingController,public dms:DomSanitizer,private nativeHttp:HTTP,private router:Router,private assignmentsService: AssignmentsService,private activatedRoute: ActivatedRoute,private storage:Storage,private networkService:NetworkService) {}

  //Status from API
 sessionstatusaccepted:any;

 textdisplay:any; sessionid:any;imgdisplayinapp:any;
 //UserInfo
 token:any;studentid:any;

 //No Session Text
 NoSessionText:any;boolHaveSession=false;loading:any
  ngOnInit() {
  }
  async ionViewWillEnter(){
  this.token=this.globalService.getselectedtoken()
  this.studentid=this.globalService.getselectedStudentId()
  this.CallAPIGetPublicSessionStudentNotYetJoin();
  this.bread = 1;
  if (this.textdisplay == null){
      this.presentLoading();
  }else{ 
    this.loading.dismiss()  };
    console.log(' this is the student id', this.studentid, 'this is token' ,this.token)
    
  }
  ionViewDidEnter(){
    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Handler was called!');
      this.router.navigateByUrl('tabs/main')
    });
  }
  ionViewWillLeave(){
    this.loading.dismiss()
    this.toastController.dismiss()
    this.bread = 0 
  }

  UpdateData(event){

    this.token=this.globalService.getselectedtoken()
    this.studentid=this.globalService.getselectedStudentId()
    this.nativeHttp.setDataSerializer('json');
    let header =  {'Accept': 'application/json','Content-Type': 'application/json' }
    let fetchinfo = {"Authentication_Token":this.token, "User_Id":this.studentid,"inDepth": "Y"}
   
      this.nativeHttp.post(apiurl.apiUrl+'session/ListAvailableSessionsToJoin',fetchinfo, header).then(response => {
      try {
        response.data = JSON.parse(response.data);
        this.storage.set('joinsession', response.data).then(val =>{
         this.storage.get('joinsession').then((val) =>{
          this.textdisplay = val;
          this.loading.dismiss()
          event.target.complete()
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
   }).catch(response => {
     // prints 403
     console.log(response.status + "error1");
     // prints Permission denied
     console.log(response.error + "error2");
     this.assignmentsService.presentError()
     setTimeout(() => {
      this.loading.dismiss()
      event.target.complete()
      this.router.navigateByUrl('tabs/main');  

    }, 3000);
   });      
  }

  CallAPIGetPublicSessionStudentNotYetJoin(){
    this.token=this.globalService.getselectedtoken()
    this.studentid=this.globalService.getselectedStudentId()
    this.nativeHttp.setDataSerializer('json');
    let header =  {'Accept': 'application/json','Content-Type': 'application/json' }
    let fetchinfo = {"Authentication_Token":this.token, "User_Id":this.studentid,"inDepth": "Y"}
   
      this.nativeHttp.post(apiurl.apiUrl+'session/ListAvailableSessionsToJoin',fetchinfo, header).then(response => {
      try {
        response.data = JSON.parse(response.data);
        this.storage.set('joinsession', response.data).then(val =>{
         this.storage.get('joinsession').then((val) =>{
          this.textdisplay = val;
          console.log('this is text display', this.textdisplay)
          if (this.textdisplay == 0){
            if (this.bread == 1){
              this.loading.dismiss()
              this.presentToast();
            }else {console.log('continue ')
            this.loading.dismiss()}
          }else{
            }
          this.loading.dismiss()
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
   }).catch(response => {
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
   
  SanitizeImage(imagefromAPI){
    this.imgdisplayinapp=this.display(imagefromAPI)
    console.log(this.imgdisplayinapp)
  }
  //Image Sanitize
  display(bImg:string)
  {
    return this.dms.bypassSecurityTrustUrl("data:image/jpeg;base64, "+bImg)
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'No session can be found currently ',
      duration: 7000,
      position: 'middle'
    });
    toast.present();
  }
  async ToastError() {
    const toast = await this.toastController.create({
      message: 'Error: Database Error',
      duration: 7000,
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
  setTimeout(() => {
    if (this.textdisplay == null){
      this.ToastError()
      console.log('fix database')
    }
  }, 60000);
}

CallAPIJoinSession(sessionid){
  {
    if(this.networkService.online == false )
    {
      this.networkService.presentNetworkMsg(); 
      this.router.navigateByUrl('tabs/main/session-join');
    }
    else
    {
    this.nativeHttp.setDataSerializer('json');
 this.nativeHttp.post(apiurl.apiUrl+'session/participant_requestJoin', {
"Authentication_Token":this.token, //Get from storage 
 "Student_Id":this.studentid,
 "Session_Id": sessionid,

}, {
'Accept': 'application/json',
'Content-Type': 'application/json' })
.then(response => 
  {
  try {
      response.data = JSON.parse(response.data);
      console.log(response.data)
      this.assignmentsService.presentJoinSession('Ok').then((res) => {
        if (res === 'Ok')  
          {
            this.storage.set('joinsession', response.data); 
            this.router.navigateByUrl('tabs/main') 
          }
      });
    } catch(e) 
    {
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

}

// xing yee code backup
// CallAPIGetPublicSessionStudentNotYetJoin(){
//   this.assignmentsService.getListAvailableSessionsToJoin();
  
//   this.storage.get('joinsession').then((val) => {
//     if(val==0){
//       this.boolHaveSession=true;
//       this.NoSessionText="Currently, there is no available session"
//      }
//      else if(val==1){
//        this.textdisplay=[val];
//      }d
//      else{
//      this.textdisplay=val;
//      }
//     });
// }









