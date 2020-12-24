import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Storage} from '@ionic/storage';
import { HTTP } from '@ionic-native/http/ngx';
import {apiurl} from '../model/global-api';
import { ToastService } from './../services/toast.service';
import {EmailComposer} from '@ionic-native/email-composer/ngx';
import { Platform } from '@ionic/angular';
import {AlertController} from '@ionic/angular';
import { AssignmentsService } from '../services/assignments.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    private alertController: AlertController, 
    private router:Router,
    private platform: Platform,
    private storage:Storage,
    private nativeHttp:HTTP,
    private toastService: ToastService,
    private assignmentsService: AssignmentsService,
    public composer: EmailComposer) { }

  showPassword3 = false;
  passwordToggleIcon3 = "eye";

public postData = {
Username: '',
Password: ''
};
ionViewDidEnter(){
  this.platform.backButton.subscribeWithPriority(10, () => {
    console.log('Handler was called! in login');
  });
}
  ngOnInit() {
    
  }
  togglePassword3(): void {
    this.showPassword3 = !this.showPassword3;
    if(this.passwordToggleIcon3 == "eye") {
      this.passwordToggleIcon3 = 'eye-off';
    }
    else {
      this.passwordToggleIcon3 = 'eye';
    }
  }


  signin() {
    this.router.navigateByUrl('/signup');  
  }
  
  OpenEmailComposer() {
    this.composer.open({
      to: 'fypups2020@gmail.com'
    })
  }
  
  Login(){
    if (this.postData.Username == "" && this.postData.Password == "")  {
      this.toastService.presentToast(
        'Please enter username and password.');
    }

    else if (this.postData.Username == "") {
      this.toastService.presentToast(
        'Please enter username.');
    }

    else if (this.postData.Password == "") {
      this.toastService.presentToast(
        'Please enter password.');
    }

    else {
      this.AuthLogin() }
  }
  
 
 AuthLogin()
 {
  this.nativeHttp.setDataSerializer('json');
   this.nativeHttp.post(apiurl.apiUrl+'student/login', {
    "Username": this.postData.Username,
    "Password": this.postData.Password
}, {
  'Accept': 'application/json',
  'Content-Type': 'application/json' })
  .then(async response => {
    try {
      response.data = JSON.parse(response.data);
      this.storage.set('authlogin', response.data); 
      this.postData.Username = ''
      this.postData.Password = ''
 
      const alert = await this.alertController.create({
        header: 'Sign In',
        // subHeader: 'Sub Alert',
        message: 'Login Successful!',
        buttons: [{
          text: 'Okay',
          role: 'cancel',
          handler: () => {
            console.log('You clicked me');
            this.router.navigateByUrl('/tabs/main');
          }
        }
      ]
      });
     await alert.present();
      
    } catch(e) {
      console.error(e);
      console.log("Not a valid account! Wrong details entered!");
      this.toastService.presentToast(
        'Please enter correct details!');
    }
 })
 .catch(response => {
   // prints 403
  console.log(response.status);

   // prints Permission denied
  console.log(response.error);
  this.assignmentsService.presentError();    

 });
 }
}
