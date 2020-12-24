import { Injectable} from '@angular/core';
import {ToastController,AlertController,LoadingController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { Storage } from '@ionic/storage';
import {GlobalService} from './global.service';
import { from } from 'rxjs';
import {apiurl,SessionStatus} from '../model/global-api';


@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
selectsessionid:string;selectasgmtid:string;selectedasgmtlist:any;selectedsessionheader:any;selectedsessionstatus:any;selectedinitiatorid:any;selectedparticipantid:any;datareceivedyesno:any;selectedtutorname:any;
constructor(private globalService: GlobalService,private nativeHttp:HTTP, private toastCtrl: ToastController,private alertController:AlertController,public loadingController: LoadingController,private storage:Storage) {}
//UserInfo
token:any;studentid:any;

 isLoading = false; //Upload assignment etc
 public data:any = [];
 //Global (Set & Get)
 //SessionID
setselectedsessionid(sessionid){
this.selectsessionid=sessionid;
}
getselectedsessionid(){
 return this.selectsessionid;
  }
//AssignmentID
setselectedasgmtid(asgmtid){
  this.selectasgmtid=asgmtid;
  }
  getselectedasgmtid(){
   return this.selectasgmtid;
    }
 //AssignmentList
setselectedasgmtlist(asgmtlist){
  this.selectedasgmtlist=asgmtlist;
}
 getselectedasgmtlist(){
   return this.selectedasgmtlist;
  }
  //SessionHeader
setselectedsessionheader(sessionheader){
  this.selectedsessionheader=sessionheader;
}
 getselectedsessionheader(){
   return this.selectedsessionheader;
  }
   //SessionStatus
setselectedsessionstatus(sessionstatus){
  this.selectedsessionstatus=sessionstatus;
}
 getselectedsessionstatus(){
   return this.selectedsessionstatus;
  }
  //InitiatorId
setselectedinitiatorid(initiatorid){
  this.selectedinitiatorid=initiatorid;
}
 getselectedinitiatorid(){
   return this.selectedinitiatorid;
  }
   //ParticipantId
setselectedparticipantid(participantid){
  this.selectedparticipantid=participantid;
}
 getselectedparticipantid(){
   return this.selectedparticipantid;
  }

    //Tutor Name
setselectedtutorname(tutorname){
  this.selectedtutorname=tutorname;
}
getselectedtutorname(){
   return this.selectedtutorname;
  }
  async presentError() {
    const toast = await this.toastCtrl.create({
      message: 'Internal Server Error 404',
      duration: 4000,
      position: 'middle'
    });
    toast.present();
  }
  async presentinvitefail() {
    const toast = await this.toastCtrl.create({
      message: "Please 'add' participants before inviting ",
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }
  async presentpasswordsuccess() {
    const toast = await this.toastCtrl.create({
      message: "Password changed ",
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }
  async presentErrorchat() {
    const toast = await this.toastCtrl.create({
      message: 'Internal Server Error 404, message did not send',
      duration: 4000,
      position: 'middle'
    });
    toast.present();
  }
  async missingtitle() {
    const toast = await this.toastCtrl.create({
      message: 'please input text in the question space',
      duration: 4000,
      position: 'middle'
    });
    toast.present();
  }

    //Get All Levels
    getAllLevels(){
      let nativeCall=this.nativeHttp.post(apiurl.apiUrl+'Data/Level',{},{
          'Content-Type': 'application/json'
         });
        from(nativeCall).pipe()
      .subscribe(data=>{
         this.data=JSON.parse(data.data);
         this.storage.set('alllevels', this.data);
         //console.log(this.data)
      },err=>{
        console.log('JS Call error:',err)
      });
      }

    //Get All Schools
    getAllSchools(){
      let nativeCall=this.nativeHttp.post(apiurl.apiUrl+'Data/School',{},{
          'Content-Type': 'application/json'
         });
        from(nativeCall).pipe()
      .subscribe(data=>{
         this.data=JSON.parse(data.data);
         this.storage.set('allschools', this.data);
         //console.log(this.data)
      },err=>{
        console.log('JS Call error:',err)
      });
      }
      
/*Get My Session by Specific User*/
// getSessionsByStudent()
// {
//  this.token=this.globalService.getselectedtoken()
//  this.studentid=this.globalService.getselectedStudentId()
//  this.nativeHttp.setDataSerializer('json');
//  let header =  {'Accept': 'application/json','Content-Type': 'application/json' }
//  let fetchinfo = {"Authentication_Token":this.token, "Student_Id":this.studentid,"inDepth": "Y"}

//    this.nativeHttp.post(apiurl.apiUrl+'session/mySessions',fetchinfo, header).then(response => {
//    try {
//      response.data = JSON.parse(response.data);
//      this.data=response.data;
//      this.storage.set('mysession', this.data).then(val =>{
//       this.storage.get('AssignmentDiscussion').then((val) =>{

//       })
//     })

//    } catch(e) {
//      console.error('JSON parsing error');
//    }
// })
// .catch(response => {
//   // prints 403
//   console.log(response.status + "error1");

//   // prints Permission denied
//   console.log(response.error + "error2");
// });

// }


//  getSessionsBydisc()
// {
  
//   this.token=this.globalService.getselectedtoken()
//   this.studentid=this.globalService.getselectedStudentId()
//   // this.sessionmypage.CallAPIMysessions()
//   console.log(' getting from database ')
//   let header =  {'Accept': 'application/json','Content-Type': 'application/json' }
//   let fetchinfo = {"Authentication_Token":this.token, "Student_Id":this.studentid, "inDepth": "Y"}
//   this.nativeHttp.setDataSerializer('json');

//   console.log('test1 ')

//   this.nativeHttp.post(apiurl.apiUrl+'session/mySessions', fetchinfo,header).then( response => {
//   console.log('test2 ')
//    try {
//     console.log('test3')

//      response.data = JSON.parse(response.data);//whole asgmtlist of particular session ,returns a promise
//     //  console.log('this is a token', this.token)
//     //  console.log('this is a studentid', this.studentid)
//     console.log('storage prepare ')
//      this.storage.set('AssignmentDiscussion',response.data).then(val =>{
//       this.storage.get('AssignmentDiscussion')
//       console.log('storage get ',this.storage.get('AssignmentDiscussion'));

//      })
//     console.log('storage set ')
//  } 
//  catch(e) {
//   console.error('JSON parsing error');
// }

// }).catch(response => {
//   this.dismissLoading();
//   // prints 403
//   console.log(response.status, ' errorsss');

//   // prints Permission denied
//   console.log(response.error, ' error');
//   });
//   console.log('test4')


// }
 // goodluck friendo

 /*Get list of Sessions that are accepted by tutor but student not yet join*/
//  getListAvailableSessionsToJoin()
//  {
//   this.token=this.globalService.getselectedtoken()
//   this.studentid=this.globalService.getselectedStudentId()
//   this.nativeHttp.setDataSerializer('json');
//    let header =  {'Accept': 'application/json','Content-Type': 'application/json' }
//    let fetchinfo = {"Authentication_Token":this.token, "Student_Id":this.studentid,"inDepth": "Y"}
//      this.nativeHttp.post(apiurl.apiUrl+'session/mySessions',fetchinfo, header).then(response => {
//     try {
//       response.data = JSON.parse(response.data);
//       this.data=response.data;
//      // console.log(this.data)
//       this.storage.set('joinsession', this.data);
//       console.log(this.data)

//     } catch(e) {
//       console.error('JSON parsing error');
//     }
//  })
//  .catch(response => {
//    // prints 403
//    console.log(response.status);
 
//    // prints Permission denied
//    console.log(response.error);
//  });
//  }


  //Pop-up message
async presentToastWithOptions(text) {
  const toast = await this.toastCtrl.create({
    header: text,
    duration: 3000,
    position: 'bottom',
    buttons: [{
      text: 'CLOSE',
      role: 'cancel'
    }],
    cssClass: 'toastCSS'
  });
  toast.present();
}

/*Successful Message Initiate Session*/
async presentInitiateSession(okText: any): Promise<any> {
return new Promise(async (resolve) => {
  const alert = await this.alertController.create({
    header: 'Request Tuition',
    message: 'Question has been submitted successfully.<br>',
    buttons: [
      {
        text: okText,
        role: 'ok',
        cssClass: 'secondary',
        handler: (Ok) => {
          resolve('Ok');
        }
        }
      ]
    });
    alert.present();
  });
}
/*Successful Request To Join Session*/
async presentJoinSession(okText: any): Promise<any> {
  return new Promise(async (resolve) => {
    const alert = await this.alertController.create({
      header: 'Request Join Session',
      message: 'You have requested to Join this Session.<br>',
      buttons: [
        {
          text: okText,
          role: 'ok',
          cssClass: 'secondary',
          handler: (Ok) => {
            resolve('Ok');
          }
          }
        ]
      });
      alert.present();
    });
  }
/*Successful Message Upload Assignment in Session*/
async presentUploadAssignment(okText: any): Promise<any> {
return new Promise(async (resolve) => {
  const alert = await this.alertController.create({
    header: 'Upload Assignment',
    message: 'Question has been submitted successfully.<br>',
    buttons: [
      {
        text: okText,
        role: 'ok',
        cssClass: 'secondary',
        handler: (Ok) => {
          resolve('Ok');
        }
        }
      ]
    });
    alert.present();
  });
}
/*Loading for Waiting to upload*/
async presentLoading() {
this.isLoading = true;
return await this.loadingController.create({
  message: 'Please wait...'
}).then(a => {
  a.present().then(() => {
    if (!this.isLoading) {
      a.dismiss().then(() => console.log('abort presenting'));
    }
  });
});
}
async dismissLoading() {
this.isLoading = false;
return await this.loadingController.dismiss().then(() => console.log('dismissed'));
}
 /*Confirmation to enter Edit Page(Drawing)*/
async presentDrawing(cancelText: any,confirmText: any): Promise<any> {
  return new Promise(async (resolve) => {
    const alert = await this.alertController.create({
      header: 'About to Enter Edit Page',
      message: 'You will be able to edit the <label>Question Uploaded</label><br>',
      cssClass:"presentDrawingcss",
      buttons: [
        {
          text: cancelText,
          role: 'cancel',
          cssClass: 'secondary',
          handler: (Cancel) => {
            resolve('Cancel');
          }
        }, {
          text: confirmText,
          handler: (Confirm) => {
            resolve('Confirm');
          }
        }
      ]
    });
    alert.present();
  });
  
}
/*Acknowledge to submit before clicking other tabs*/
async presentAcknowledgeEditing(okText: any): Promise<any> {
  return new Promise(async (resolve) => {
    const alert = await this.alertController.create({
      header: 'Acknowledgement',
      message: 'You have to click <img src="assets/images/save.svg"> <label>before leaving</label> this page.<br> If not the drawings will be <label>gone</label>.',
      cssClass:"presentAcknowledgeEditingcss",
      
      buttons: [
        {
          text: okText,
          role: 'ok',
          cssClass: 'secondary',
          
          handler: (Ok) => {
            resolve('Ok');
          }
          }
        ],
        backdropDismiss:false
      });
      alert.present();
    });
  }
/*Upload Assignment In Edit Assignment*/
async UploadAssignmentConfirmation(cancelText: any,saveText: any): Promise<any> {
  return new Promise(async (resolve) => {
    const alert = await this.alertController.create({
      header: "Are you sure you want to save the latest drawing?",
      message: "Once saved, you will <label>leave this page!</label>",
      cssClass:"UploadAssignmentConfirmationcss",
      buttons: [
        {
          text: cancelText,
          role: 'Cancel',
          cssClass: 'secondary',
          handler: (Cancel) => {
            resolve('Cancel');
          }
        }, {
          text: saveText,
          handler: (Save) => {
            resolve('Save');
          }
        }
      ]
    });
    alert.present();
  });
}
/*Acknowledge to submit before clicking other tabs*/
async presentEditAssignment(okText: any): Promise<any> {
  return new Promise(async (resolve) => {
    const alert = await this.alertController.create({
      header: 'Edit Assignment',
      message: 'You have successfully modified this assignment.<br>',
      buttons: [
        {
          text: okText,
          role: 'ok',
          cssClass: 'secondary',
          handler: (Ok) => {
            resolve('Ok');
          }
          }
        ]
      });
      alert.present();
    });
  }
  /*EndSession*/
async EndSessionConfirmation(cancelText: any,endText: any): Promise<any> {
  return new Promise(async (resolve) => {
    const alert = await this.alertController.create({
      header: "Are you sure you want to End Session?",
      message: "",
      cssClass:"",
      buttons: [
        {
          text: cancelText,
          role: 'Cancel',
          cssClass: 'secondary',
          handler: (Cancel) => {
            resolve('Cancel');
          }
        }, {
          text: endText,
          handler: (End) => {
            resolve('End');
          }
        }
      ]
    });
    alert.present();
  });
}
}
