import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-modalpopup',
  templateUrl: './modalpopup.page.html',
  styleUrls: ['./modalpopup.page.scss'],
})
export class ModalpopupPage implements OnInit {

  displayUserData: any;
  username: any;
  levelInfo_DisplayName: any;
  schoolInfo_Name: any;
  // displayPostData: any;
  
  constructor(private modalController:ModalController, private storage:Storage) { }

  ngOnInit() {
this.profile();
  }

  CloseModal()
  {
    this.modalController.dismiss();
  }
  
  profile() {
    this.storage.get('authlogin').then((val) => {
      console.log(val)
      this.displayUserData = val
      this.username = val.username
      this.levelInfo_DisplayName = val.levelInfo_DisplayName
      this.schoolInfo_Name = val.schoolInfo_Name
      });
  }
  

  
}
