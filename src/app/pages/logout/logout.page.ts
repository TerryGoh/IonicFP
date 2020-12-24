import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import {apiurl} from '../../model/global-api';
import { GlobalService} from '../../services/global.service';
import {Storage} from '@ionic/storage';
import {AlertController, Platform} from '@ionic/angular';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AssignmentsService } from 'src/app/services/assignments.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  showPassword4 = false;
  passwordToggleIcon4 = "eye";

  showPassword5 = false;
  passwordToggleIcon5 = "eye";


  displayUserData: any;


  loginForm1: FormGroup;

 error_messages = {

   'password': [
     { type: 'required', message: 'Password is required.' },
     { type: 'minlength', message: 'Password length is required to be between 6 to 30.' },
     { type: 'maxlength', message: 'Password length is required to be between 6 to 30.' }
   ],
   'confirmpassword': [
     { type: 'required', message: 'Password is required.' },
     { type: 'minlength', message: 'Password length is required to be between 6 to 30.' },
     { type: 'maxlength', message: 'Password length is required to be between 6 to 30.' },
   ],
 }
  backbutton: any;

  constructor(private router:Router,private platform: Platform,private storage:Storage, private assignmentsService: AssignmentsService,private nativeHttp:HTTP,private globalService: GlobalService,private alertController: AlertController,public formBuilder: FormBuilder) { 
    this.loginForm1 = this.formBuilder.group({

      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
      confirmpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
    }, { 
      validators: this.password.bind(this)
    });
   }

   ionViewDidEnter(){
    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Handler was called!');
      this.router.navigateByUrl('tabs/main')
    });
    console.log(this.storage)
  }
   password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  ionViewDidLoad() {
    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }
  }
 //User Info
 token:any;studentid:any;
  ngOnInit() {
  }
  ionViewWillEnter()
{
  this.token=this.globalService.getselectedtoken()
  this.studentid=this.globalService.getselectedStudentId()
}


  ionViewWillLeave(){
  }

  Logout(){
    console.log(this.studentid)
    console.log(this.token)
    this.nativeHttp.setDataSerializer('json');
   this.nativeHttp.post(apiurl.apiUrl+'student/logout', {
    "Authentication_Token": this.token,
    "User_Id": this.studentid
}, {
  'Accept': 'application/json',
  'Content-Type': 'application/json' })
  .then(async response => {
    try {
      
      const alert = await this.alertController.create({
        header: 'Logout',
        // subHeader: 'Sub Alert',
        message: 'Are you sure you want to logout?',
        buttons: [{
          text: 'Cancel',
          role: 'cancel',
          handler: () => 
          {
            console.log('You clicked me');
          }
        },
          {
            text: 'Okay',
            cssClass: 'secondary',
            handler: () => {
              //  console.log('Second Handler');
              this.storage.remove('mysession')
              this.storage.remove('assignmentdetails')
              this.storage.remove('authlogin')
              this.storage.remove('joinsession')
              this.storage.remove('chatdetails')
              this.storage.remove('User_Id')
              this.storage.remove('Authentication_Token')
              this.router.navigateByUrl('/login') 
            }
        
      }]
      });
     await alert.present();
      
    } catch(e) {
      console.error(e);
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

 togglePassword4(): void {
  this.showPassword4 = !this.showPassword4;
  if(this.passwordToggleIcon4 == "eye") {
    this.passwordToggleIcon4 = 'eye-off';
  }
  else {
    this.passwordToggleIcon4 = 'eye';
  }
}

togglePassword5(): void {
  this.showPassword5 = !this.showPassword5;
  if(this.passwordToggleIcon5 == "eye") {
    this.passwordToggleIcon5 = 'eye-off';
  }
  else {
    this.passwordToggleIcon5 = 'eye';
  }
}


async presentAlert() {
  const alert = await this.alertController.create({
    header: 'Reset Password',
    // subHeader: 'Sub Alert',
    message: 'Reset Password Successful',
    buttons: [{
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('You clicked me');
      }
    },
  {
    text: 'Okay',
    cssClass: 'secondary',
    handler: () => {
      console.log('Second Handler');
      this.assignmentsService.presentpasswordsuccess();
    }
  }
  ]
  });
  await alert.present();
    }
    
}
  

