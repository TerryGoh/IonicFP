import { SMS } from '@ionic-native/sms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HTTP } from '@ionic-native/http/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Platform } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-authentication-method',
    templateUrl: './authentication-method.page.html',
    styleUrls: ['./authentication-method.page.scss'],
})
export class AuthenticationMethodPage implements OnInit {
    sms: any;
    constructor(
        private alertController: AlertController,
        private router: Router,
        private platform: Platform,
        private storage: Storage,
        private nativeHttp: HTTP,
        public composer: EmailComposer) { }
        
    ngOnInit() {

    }

    sendSMS() {
        var number = (<HTMLInputElement>document.getElementById('numberTxt')).value.toString(); /* iOS: ensure number is actually a string */
        var message = (<HTMLInputElement>document.getElementById('messageTxt')).value;
        console.log("number=" + number + ", message= " + message);

        //CONFIGURATION
        var options = {
            replaceLineBreaks: false, // true to replace \n by a new line, false by default
            android: {
                intent: 'INTENT'  // send SMS with the native android SMS messaging
                //intent: '' // send SMS without opening any other app, require : android.permission.SEND_SMS and android.permission.READ_PHONE_STATE
            }
        };

        var successMsg = function () { alert('Message sent successfully'); };
        var errorMsg = function (e) { alert('Message Failed:' + e); };

        var success = function (hasPermission) {
            if (hasPermission) {
                this.sms.send(number, message, options, successMsg, errorMsg);
            }
            else if (!hasPermission) {
                this.sms.requestPermission(function () {
                    console.log('[OK] Permission accepted')
                }, function (error) {
                    console.info('[WARN] Permission not accepted')
                    // Handle permission not accepted
                })
            }
            else {
                console.log('[WARN] Permission needed for SMS')
                // show a helpful message to explain why you need to require the permission to send a SMS
            }
        };
        var error = function (e) { alert('Something went wrong:' + e); };
        this.sms.hasPermission(this.sendSMS, error);

    }

}




