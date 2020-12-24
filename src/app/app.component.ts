import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {NetworkService} from './services/network.service';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';
import {AssignmentsService} from './services/assignments.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private networkService:NetworkService,
    private storage:Storage,
    private router:Router,
    private assignmentsService:AssignmentsService,
      ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.storage.get('authlogin').then((val) => {
        if(val===null){
          this.router.navigateByUrl('/login')
        }
        else{
          this.router.navigateByUrl('/tabs/main')
        }
        
        });
      this.networkService.initializeNetworkEvents();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      console.log("Platform ready");
      this.assignmentsService.getAllLevels();
      this.assignmentsService.getAllSchools();
    });
  }
}
