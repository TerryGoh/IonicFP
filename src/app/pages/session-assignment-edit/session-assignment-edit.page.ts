import { Component,OnInit, ViewChild,Renderer2  } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Platform } from "@ionic/angular";
import { Storage } from '@ionic/storage';

import { Canvas } from './../../model/canvas.model';
import { AssignmentsService } from '../../services/assignments.service';
import {NetworkService} from '../../services/network.service';
import {SessionStatus,apiurl} from '../../model/global-api';
import { HTTP } from '@ionic-native/http/ngx';
import {  GlobalService} from '../../services/global.service';
@Component({
  selector: 'app-session-assignment-edit',
  templateUrl: './session-assignment-edit.page.html',
  styleUrls: ['./session-assignment-edit.page.scss'],
})
export class SessionAssignmentEditPage implements OnInit {

constructor(private globalService: GlobalService, private platform: Platform,private nativeHttp:HTTP,private activatedRoute: ActivatedRoute,private router:Router,private assignmentsService: AssignmentsService,private networkService:NetworkService,private plt: Platform,private renderer:Renderer2,private storage:Storage) {}
	
//Segment
segmentModel = "assignment";sessionid:any;asgmtid:any;
asgmtlist:any;sessionstatusended:any;sessionstatus:any;
isactiveassignment:string;isactivevideoorvoice:string;image:any;assignmentdiscussimage:any;

 //User Info
 token:any;studentid:any;
//Drawing
@ViewChild("DrawingCanvas", {static:false}) canvasDrawing: any;
canvasDrawingElement: any;
lineWidth="1";
width: number;
height: number;
lastX: number;
lastY: number;

emptbackground = "111111";
/*Pen, Pencil,*/
selectedColorPenPencil = "#000000";
colorsPenPencil = ["#000000","#ffffff","#c2281d","#de722f","#edbf4c","#5db37e","#459cde","#4250ad","#802fa3"];
/*Highlighter*/
selectedColorHighlighter = "rgba(152, 247, 0, 0.3)";
colorsHighlighter = ["rgba(152, 247, 0, 0.2)","rgba(0, 186, 243, 0.2)","rgba(248, 0, 236, 0.2)","rgba(255, 255, 0, 0.2)","rgba(255, 255, 255, 0.2)"];
//Boolean
drawpencil=true;drawpen=false;drawhighlighter=false;
canDraw: boolean = true;canUndo: boolean = false;canRedo: boolean = false;
isDrawing: boolean = false; 
tempPolyline: Canvas;
history: Canvas[] = [];
redoHistory: Canvas[] = [];
historyIndex = 0;
actions = [];
redoActions = [];

ngOnInit(){
//Segment
this.isactiveassignment="activesegment";

this.token=this.globalService.getselectedtoken()
this.studentid=this.globalService.getselectedStudentId()
} 

ionViewWillEnter(){
  this.getAssignmentList();
//  this.NotificationFirstEntered(null)
}


ionViewDidEnter(){
  this.platform.backButton.subscribeWithPriority(10, () => {

    this.router.navigateByUrl('tabs/session-view/session-assignment-view/'+this.sessionid+'/'+this.asgmtid)
  });
  const fheight =document.getElementById('canvas').clientHeight;

}


/*Get AssignmentList*/
getAssignmentList()
{
  this.sessionstatusended = SessionStatus.SESSION_STATUS_ENDED;
   // Get the ID that was passed with the URL
  let id = this.activatedRoute.snapshot.paramMap.get('id');
  this.sessionid=id;
  let asgmtid = this.activatedRoute.snapshot.paramMap.get('asgmtid');
  this.asgmtid=asgmtid;
  this.sessionstatus=this.assignmentsService.getselectedsessionstatus();
  this.storage.get('assignmentdetails').then((val) => {
      val.forEach((valor) => {
      if(this.asgmtid==valor.asgmt_Id)
      {
        this.asgmtlist=valor;
        this.image='data:image/jpeg;base64, '+this.asgmtlist.asgmt_Data;
        if(this.asgmtlist.asgmt_Data == null){
            this.image = 'data:image/png;base64,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';
            // this.image link is 'https://www.macmillandictionary.com/external/slideshow/thumb/White_thumb.png';

            
        }
        console.log("Found Session Assignment Edit!")
      }
    })
  });
  this.token=this.globalService.getselectedtoken()
  this.studentid=this.globalService.getselectedStudentId()
//Drawing
this.assignmentsService.presentAcknowledgeEditing('Ok').then((res) => {
  if (res === 'Ok') {
    // console.log("I acknowledge")
    this.canvasDrawingElement = this.canvasDrawing.nativeElement

     this.renderer.setAttribute(this.canvasDrawingElement, 'width', this.plt.width());
     this.renderer.setAttribute(this.canvasDrawingElement, 'height', 350 + '');
     this.setBackground();
  }
 });

}

/*Segment */
segmentChanged(event) {
  if(this.segmentModel!="assignment")
  {
  this.isactiveassignment="inactivesegment";
  this.isactivevideoorvoice="activesegment";
  }
  else if (this.segmentModel=="assignment"){
    this.isactiveassignment="activesegment";
    this.isactivevideoorvoice="inactivesegment"
  }
}
/*Select color*/
selectColor(color) {
  if(this.drawpencil||this.drawpen)
  {
  this.selectedColorPenPencil = color;
  }
  else if(this.drawhighlighter)
  {
  this.selectedColorHighlighter = color;
  }
}
/*Save Drawing*/ 
exportCanvasImage() {
  if(this.networkService.online == false )
  {
    this.networkService.presentNetworkMsg(); 
  }
  else{
  this.assignmentsService.UploadAssignmentConfirmation('Cancel','Save').then((res) => {
    if (res === 'Save') {
      var background = new Image();
      background.src = this.image;
      let ctx = this.canvasDrawingElement.getContext("2d");
    
      background.onload = () => {
        ctx.drawImage(
          background,
          0,
          0,
          this.canvasDrawingElement.width,
          this.canvasDrawingElement.height
        );
      };
    let dataUrl = this.canvasDrawingElement.toDataURL();
    var strImage = dataUrl.replace(/^data:image\/[a-z]+;base64,/, "");
    this.assignmentdiscussimage=strImage;
    this.assignmentsService.presentLoading();
    this.nativeHttp.setDataSerializer('json');
    this.nativeHttp.post(apiurl.apiUrl+'session/uploadAsgmtDisc', {
  "Authentication_Token":this.token, //Get from storage
  "Student_Id":this.studentid,
  "Session_Id":this.sessionid,
  "Asgmt_Id":this.asgmtid,
  "AsgmtDiscuss_Value": "Test",
  "AsgmtDiscuss_Data": this.assignmentdiscussimage,
  }, {
  'Accept': 'application/json',
  'Content-Type': 'application/json' })
  .then(response => {
    try {
      console.log('this is token tutor session asgmt,',this.token,',',this.studentid,'',this.sessionid,',',this.asgmtid,',',this.assignmentdiscussimage)
      console.log('this is response data',response.data)
     response.data = JSON.parse(response.data);//whole asgmtlist of particular session
     console.log(response.data)
     this.storage.set('mysession', response.data); 
     this.storage.set('assignmentdetails',response.data.assignments);
     this.sessionid=response.data.session_Id;
     this.assignmentsService.dismissLoading()
     this.assignmentsService.presentEditAssignment('Ok').then(   (res) => {
      if (res === 'Ok') {
       this.router.navigateByUrl('/tabs/session-view/session-assignment-view/'+this.sessionid+'/'+this.asgmtid);
      }
     });
   }
      catch(e) 
      {
        console.error('JSON parsing error');
        this.assignmentsService.presentError()
        setTimeout(() => {
          this.assignmentsService.dismissLoading();
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
        this.assignmentsService.dismissLoading();
       this.router.navigateByUrl('tabs/main');  
 
     }, 3000);
      });
    }
  });
  }
}
/*Three features Pencil,Pen,Highlighter*/
DrawByPencil(){
this.canDraw=true;
this.lineWidth = '1';
  this.drawpencil=true;
  this.drawpen=false;
  this.drawhighlighter=false;
}
DrawByPen(){
this.canDraw=true;
this.lineWidth = '5';
  this.drawpen=true;
  this.drawpencil=false;
  this.drawhighlighter=false;
}
DrawByHighlighter(){
this.canDraw=true;
this.lineWidth = '15';
  this.drawhighlighter=true;
  this.drawpen=false;
  this.drawpencil=false;
}
handleStart(ev) {
  const canvasposition = this.canvasDrawingElement.getBoundingClientRect();
  this.lastX = ev.touches[0].pageX - canvasposition.x;
  this.lastY = ev.touches[0].pageY - canvasposition.y;
}
handleMove(ev) {
  const canvasposition = this.canvasDrawingElement.getBoundingClientRect();
  let currentX = ev.touches[0].pageX - canvasposition.x;
  let currentY = ev.touches[0].pageY - canvasposition.y;
  let ctx = this.canvasDrawingElement.getContext("2d");

  if(this.drawpencil===true)
  {
  ctx.strokeStyle = this.selectedColorPenPencil;
  }
  else if(this.drawpen===true)
  {
    ctx.strokeStyle = this.selectedColorPenPencil;
  }
  else if(this.drawhighlighter===true)
  {       
    ctx.strokeStyle = this.selectedColorHighlighter;
  } 
  if(this.canDraw) {
    if(this.isDrawing) {
      this.tempPolyline.points.push({
        x: currentX,
        y: currentY
      });
    } 
    else {
        if(this.drawpencil===true)
        {
         this.tempPolyline = new Canvas(this.selectedColorPenPencil, 1);
        }
        else if(this.drawpen===true)
        {
         this.tempPolyline = new Canvas(this.selectedColorPenPencil, 5);
        }
        else if(this.drawhighlighter===true)
          {
          this.tempPolyline = new Canvas(this.selectedColorHighlighter, 15);
          }
          this.tempPolyline.points.push({
            x: this.lastX,
            y: this.lastY
          });
          this.isDrawing = true;
        }
    if(this.drawpencil===true)
    {
    this.draw(this.lastX, this.lastY, currentX, currentY, this.lineWidth, this.selectedColorPenPencil);
    }
    else if(this.drawpen===true)
    {
    this.draw(this.lastX, this.lastY, currentX, currentY, this.lineWidth, this.selectedColorPenPencil);
    console.log(this.lastX, this.lastY, currentX, currentY, this.lineWidth, this.selectedColorPenPencil)
    }
    else if(this.drawhighlighter===true)
    {
      this.draw(this.lastX, this.lastY, currentX, currentY, this.lineWidth, this.selectedColorHighlighter);
    }

  }
 
  this.lastX = currentX;
  this.lastY = currentY;
}
draw(p_x, p_y, c_x, c_y, b_s, c_c) {
  let ctx = this.canvasDrawingElement.getContext('2d');

  ctx.lineJoin = "round";
  ctx.strokeStyle = c_c;

  ctx.beginPath();
  ctx.moveTo(p_x, p_y);
  ctx.lineTo(c_x, c_y);
  ctx.lineWidth = b_s;


  ctx.closePath();

  ctx.stroke();
}

handleStop() {
  if(this.isDrawing) {
    this.history.push(this.tempPolyline);
    console.log('this is history', this.history)
    this.isDrawing = false;
    this.historyIndex++;
    this.actions.push('draw');

    this.redoActions = [];
    this.redoHistory = [];
  }
  if(this.actions.length != 0){
    this.canUndo=true;
    }
  if(this.redoActions.length != 0) {
    this.canRedo=true;
    }
}

drawAllHistory() {
  this.setBackground();
  setTimeout(() => {
    for(let polyline of this.history) {
      let startX = polyline.points[0].x;
      let startY = polyline.points[0].y;
      for(let point of polyline.points) {
        this.draw(startX, startY, point.x, point.y, polyline.width, polyline.color);
        startX = point.x;
        startY = point.y;
      }
    }
  }, 100);


}
/*Undo & Redo Features*/
undo() {
  if(this.redoActions.length == 0) {
    this.canRedo=true;
  }
     if(this.actions.length == 0) {
       this.canUndo=false;
      return;
     }
  let tempAction = this.actions.pop();
  this.redoActions.push(tempAction);
    if(this.history.length > 0) {
      this.redoHistory.push(this.history.pop());
      this.historyIndex--;
    }
  let ctx = this.canvasDrawingElement.getContext('2d');
  ctx.globalCompositeOperation = 'source-over';  
  this.drawAllHistory();
}
redo() {
  if(this.actions.length == 0) {
    this.canUndo=true;
  }
    if(this.redoActions.length == 0) {
      this.canRedo=false;
      return;
    }
  let tempAction = this.redoActions.pop();
  this.actions.push(tempAction);
  let ctx = this.canvasDrawingElement.getContext('2d');
  ctx.globalCompositeOperation = 'source-over';  
  if(tempAction == 'draw') {
    if(this.redoHistory.length > 0) {
      this.history.push(this.redoHistory.pop());
      for(var i = this.historyIndex; i < this.history.length; i++) {
        let polyline = this.history[i];
        let startX = polyline.points[0].x;
        let startY = polyline.points[0].y;
        for(let point of polyline.points) {
          this.draw(startX, startY, point.x, point.y, polyline.width, polyline.color);
          startX = point.x;
          startY = point.y;
        }
      }
      this.historyIndex++;
    }
  }     console.log('history is :'+ this.history +'temppolyline is :' + this.tempPolyline)

}
//Image from API
setBackground() {
  var background = new Image();
  background.src = this.image;

    console.log('alo',background.src, 'this is background')
  let ctx = this.canvasDrawingElement.getContext("2d");

  background.onload = () => {
    ctx.drawImage(
      background,
      0,
      0,
      this.canvasDrawingElement.width,
      this.canvasDrawingElement.height
    );
  };
}
PreviousPage(){
  if(this.networkService.online == false )
  {
    this.networkService.presentNetworkMsg(); 
  }
  else{
  this.router.navigateByUrl('/tabs/session-view/session-assignment-view/'+this.sessionid+'/'+this.asgmtid);
  }  
}
}



//use bounding then percentage it

// NotificationFirstEntered(event){
//   this.token=this.globalService.getselectedtoken()
//   this.studentid=this.globalService.getselectedStudentId()
  
//   console.log(this.globalService.getselectedtoken())
//   console.log(this.globalService.getselectedStudentId())
// //Drawing
// this.assignmentsService.presentAcknowledgeEditing('Ok').then((res) => {
//   if (res === 'Ok') {
//     // console.log("I acknowledge")
//   }
//  });
//  this.canvasDrawingElement = this.canvasDrawing.nativeElement
// //  this.canvasDrawingElement.width = this.plt.width()+ '';
// //  this.canvasDrawingElement.height = this.plt.width()+ '' ;
//  this.renderer.setAttribute(this.canvasDrawingElement, 'width', this.plt.width());
//  this.renderer.setAttribute(this.canvasDrawingElement, 'height', 350 + '');
//  this.setBackground();
//  setTimeout(() => {
//   console.log('Async operation has ended');
//   event.target.complete();
// }, 2000);
// }
