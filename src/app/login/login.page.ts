import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Storage} from '@ionic/storage';
import { HTTP } from '@ionic-native/http/ngx';
import {apiurl} from '../model/global-api';
import { ToastService } from './../services/toast.service';
import {EmailComposer} from '@ionic-native/email-composer/ngx';
import { Platform } from '@ionic/angular';
import { LoadingController, AlertController} from '@ionic/angular';
import { AssignmentsService } from '../services/assignments.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    private alertController: AlertController,
    public loadingController: LoadingController,
    private router:Router,
    private platform: Platform,
    private storage:Storage,
    private nativeHttp:HTTP,
    private toastService: ToastService,
    private assignmentsService: AssignmentsService,
    public composer: EmailComposer, 
    private camera: Camera) { }

  loading: any;
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
      console.log(response.data)
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

  //Loading Pop up
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
  }

 openCamera() {
   const cameraOptions = {
    saveToPhotoAlbum: false,
    cameraDirection: 1, // front-facing camera = 1, back-facing(def) = 0
    destinationType: 0, // base-64 = 0, file-uri(def) = 1
    quality: 10
   }
   this.camera.getPicture(cameraOptions).then((imageData) => {
    this.presentLoading()
    console.log(imageData)
    this.faceapiCall(imageData).then((resp) => {
      this.loading.dismiss()
      console.log(resp)
      // this if statement just checks whether the response from the api
      // says if there is a face or not.
      if (resp._label == "azim") {
        this.postData.Username = "john"
        this.postData.Password = "Pwd123"

        this.AuthLogin()
      }
      else if (resp._label) {
        this.toastService.presentToast(
          "Face detected but not recognised."
        )
      }
      else {
        this.toastService.presentToast(
          "No faces detected in image."
        )
      }

    })
   }, (err) => {
     console.log("Camera issue:" + err)
   })
 }
 
faceapiCall(imageData) {
  // https://stackoverflow.com/questions/43262121/trying-to-use-fetch-and-pass-in-mode-no-cors
  var proxyUrl = "https://serene-shelf-84252.herokuapp.com/" //proxy for CORS
  var apiUrl = "https://stark-shore-14544.herokuapp.com/face"

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var jsonData = {
    face: imageData
  }

  var requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(jsonData),
    redirect: 'follow'
  };

  return fetch(proxyUrl+ apiUrl, requestOptions)
    .then(resp => resp.json())
    .catch(error => console.log('error: ', error));
 }


}
