import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from './../../services/toast.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {AlertController, Platform} from '@ionic/angular';
import {Storage} from '@ionic/storage';
import { HTTP } from '@ionic-native/http/ngx';
import {apiurl} from '../../model/global-api';
import {DatePicker} from '@ionic-native/date-picker/ngx';
import {DatePipe} from '@angular/common';
import { AssignmentsService } from 'src/app/services/assignments.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss']
})
export class SignupPage implements OnInit {

  textdisplaylevel:any; textdisplayschool:any;

  showPassword = false;
  passwordToggleIcon = "eye";

  showPassword1 = false;
  passwordToggleIcon1 = "eye";

 loginForm: FormGroup;

 error_messages = {
   'username': [
     { type: 'required', message: 'Username is required.' }
   ],

  'dob': [
    { type: 'required', message: 'Date of Birth is required.' },
    // { type: 'minlength', message: 'Please enter a valid date of birth.' },
    // { type: 'maxlength', message: 'Please enter a valid date of birth.' }
  ],

  'level': [
    { type: 'required', message: 'Level is required.' },
  ],

  'school': [
    { type: 'required', message: 'School is required.' },
  ],

  'coupon': [
    { type: 'required', message: 'Coupon Code is required.' },
  ],

  'email': [
    { type: 'required', message: 'Email is required.' },
    { type: 'email', message: 'Please enter a valid email address.' },
    // { type: 'pattern', message: 'Please enter a valid email address.' }
   ],

  'password': [
    { type: 'required', message: 'Password is required.' },
    { type: 'minlength', message: 'Password must be at least 5 characters long.' },
    { type: 'maxlength', message: 'Password cannot be more than 25 characters.' }
   ],

  'confirmpassword': [
    { type: 'required', message: 'Password is required.' },
    { type: 'minlength', message: 'Password must be at least 5 characters long.' },
    { type: 'maxlength', message: 'Password cannot be more than 25 characters.' },
   ],
 }

 public postData = {
  Username: '',
  Password: '',
  Email: '',
  School_Id: '',
  Level_Id: '',
  DateOfBirth: '',
  Voucher_Code: ''
  };

 constructor(
   public formBuilder: FormBuilder,
   private router: Router,
   private alertController: AlertController,
   private storage:Storage,
   private nativeHttp:HTTP,
   public platform: Platform,
   public datePicker: DatePicker,
   public datePipe: DatePipe, 

 ) 
 {
   this.loginForm = new FormGroup({
     username: new FormControl('', Validators.compose([
       Validators.required
     ])),
     dob: new FormControl('', Validators.compose([
      Validators.required,
      // Validators.minLength(6),
      // Validators.maxLength(8)
    ])),
    level: new FormControl('', Validators.compose([
      Validators.required
    ])),
    school: new FormControl('', Validators.compose([
      Validators.required
    ])),
     email: new FormControl('', Validators.compose([
       Validators.required,
       Validators.email
      //  Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
     ])),
     password: new FormControl('', Validators.compose([
       Validators.required,
       Validators.minLength(5),
       Validators.maxLength(25)
     ])),
     confirmpassword: new FormControl('', Validators.compose([
       Validators.required,
       Validators.minLength(5),
       Validators.maxLength(25)
     ])),
     coupon: new FormControl('', Validators.compose([
       Validators.required
    ])),

   }, { 
     validators: this.password.bind(this)
   });
 }

 SelectDate() {
  var options = {
    date: new Date(),
    mode: 'date',
    androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
  }
  this.datePicker.show(options).then((date) => {
    this.postData.DateOfBirth = this.datePipe.transform(date, "yyyyMMdd"); //Returns date string in desired format
    console.log(this.postData.DateOfBirth)
    
    var year = this.postData.DateOfBirth.slice(0, 4);
    console.log(year)

    var month = this.postData.DateOfBirth.slice(4, 6);
    console.log(month)

    var day = this.postData.DateOfBirth.slice(6);
    console.log(day)

    //Replace month values from number to text 
    // var chars = { '01': 'Jan', '02': 'Feb', '03': 'Mar', '04': 'Apr', '05': 'May', '06': 'Jun',
    //              '07': 'Jul', '08': 'Aug', '09': 'Sep', '10': 'Oct', '11': 'Nov', '12': 'Dec' };

    // var monthName = month.replace(/01|02|03|04|05|06|07|08|09|10|11|12/g, m => chars[m]);
    // console.log(monthName);
    // this.displayDate = day + ' ' + monthName + ' ' + year;
    // console.log(this.displayDate)

    this.postData.DateOfBirth = day + '/' + month + '/' + year;
    console.log(this.postData.DateOfBirth)
  })
}

 ngOnInit() {
  
}
 ionViewWillEnter(){
    this.getList();
  }
  
  getList(){  
    this.storage.get('alllevels').then((res) => {
      this.textdisplaylevel=res;
    })

    this.storage.get('allschools').then((res) => {
      this.textdisplayschool=res;
    })
}
 ionViewDidEnter(){
  this.platform.backButton.subscribeWithPriority(10, () => {
    console.log('Handler was called!');
    this.router.navigateByUrl('/login')
  });
}
 togglePassword(): void {
   this.showPassword = !this.showPassword;
   if(this.passwordToggleIcon == "eye") {
     this.passwordToggleIcon = 'eye-off';
   }
   else {
     this.passwordToggleIcon = 'eye';
   }
 }

 togglePassword1(): void {
  this.showPassword1 = !this.showPassword1;
  if(this.passwordToggleIcon1 == "eye") {
    this.passwordToggleIcon1 = 'eye-off';
  }
  else {
    this.passwordToggleIcon1 = 'eye';
  }
}

 password(formGroup: FormGroup) {
   const { value: password } = formGroup.get('password');
   const { value: confirmPassword } = formGroup.get('confirmpassword');
   return password === confirmPassword ? null : { passwordNotMatch: true };
 }

 login() {
  this.router.navigateByUrl('');  
}

//   async presentAlert() {
// const alert = await this.alertController.create({
//   header: 'Sign Up',
//   // subHeader: 'Sub Alert',
//   message: 'Sign Up Sucessful',
//   buttons: [{
//     text: 'Cancel',
//     role: 'cancel',
//     handler: () => {
//       console.log('You clicked me');
//       this.router.navigateByUrl('/signup')
//     }
//   },
// {
//   text: 'Okay',
//   cssClass: 'secondary',
//   handler: () => {
//     //  console.log('Second Handler');
//     this.router.navigateByUrl('/signup') }
  
// }
// ]
// });
// await alert.present();
//   }

 
  Signup(){
   this.AuthSignup() 
  }
  
 AuthSignup()
 {
   console.log(this.postData.Username)
   console.log(this.postData.Password)
   console.log(this.postData.Email)
   console.log(this.postData.School_Id)
   console.log(this.postData.Level_Id)
   console.log(this.postData.DateOfBirth)
   console.log(this.postData.Voucher_Code)
  this.nativeHttp.setDataSerializer('json');
   this.nativeHttp.post(apiurl.apiUrl+'student/register', {
    "Username": this.postData.Username,
    "Password": this.postData.Password,
    "Email": this.postData.Email,
    "School_Id": this.postData.School_Id,
    "Level_Id": this.postData.Level_Id,
    "DateOfBirth": this.postData.DateOfBirth,
    "Voucher_Code": this.postData.Voucher_Code,
}, {
  'Accept': 'application/json',
  'Content-Type': 'application/json' })
  .then(async response => {
    try {
      response.data = JSON.parse(response.data);
      console.log(response.data);
      if (response.data == "Invalid Voucher") {
        
        const alert = await this.alertController.create({
          header: 'Sign Up',
          // subHeader: 'Sub Alert',
          message: 'Please give Valid Voucher',
          buttons: [{
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('You clicked me');
              this.router.navigateByUrl('/signup')
            }
          },
        {
          text: 'Okay',
          cssClass: 'secondary',
          handler: () => {
            //  console.log('Second Handler');
            this.router.navigateByUrl('/signup') }
          
        }
        ]
        });
       await alert.present();
      }

      else if (response.data == "Username Exists") {
        const alert = await this.alertController.create({
          header: 'Sign Up',
          // subHeader: 'Sub Alert',
          message: 'Username is taken',
          buttons: [{
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('You clicked me');
              this.router.navigateByUrl('/signup')
            }
          },
        {
          text: 'Okay',
          cssClass: 'secondary',
          handler: () => {
            //  console.log('Second Handler');
            this.router.navigateByUrl('/signup') }
          
        }
        ]
        });
       await alert.present();
      }
      else {
      this.storage.set('authlogin', response.data); 

      const alert = await this.alertController.create({
        header: 'Sign Up',
        // subHeader: 'Sub Alert',
        message: 'Registration Successful!',
        buttons: [{
          text: 'Okay',
          role: 'cancel',
          handler: () => {
            console.log('You clicked me. Account registered!');
            this.router.navigateByUrl('/login')
          }
        }
      ]
      });
     await alert.present();
      
      }
    } catch(e) {
      console.error(e);
    }
 })
 .catch(response => {
   // prints 403
  console.log(response.status);

   // prints Permission denied
  console.log(response.error);
 });
 }
}
