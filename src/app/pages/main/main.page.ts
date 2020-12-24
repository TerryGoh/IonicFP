import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {  GlobalService} from '../../services/global.service';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})

export class MainPage implements OnInit {
  backbutton: any;
  token:any;studentid:any;
  subscription: any;

  constructor( private router:Router,private platform: Platform,private globalService: GlobalService) {

  }

  ngOnInit() {
     this.globalService.GenerateLoginInfo();
  
  }
  ionViewDidEnter(){
    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Handler was called!');
      this.router.navigateByUrl('tabs/main')
    });
    console.log('the platform height is '+this.platform.height())
    console.log('student id :', this.studentid)

  }


  InitiateSession()
  {
    this.router.navigateByUrl('tabs/session-view/session-initiate');
  }
  JoinSession()
  {
    this.router.navigateByUrl('tabs/session-view/session-join');
  }
  MySession()
  {    
    this.router.navigateByUrl('tabs/session-view/session-my');
  }
  Help(){
    this.router.navigateByUrl('tabs/support/logout');
  }
  
}
