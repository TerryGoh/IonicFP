import { Injectable } from '@angular/core';
import {ToastController,AlertController,LoadingController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

constructor(private nativeHttp:HTTP,private toastCtrl: ToastController,private alertController:AlertController,public loadingController: LoadingController,private storage:Storage) {}

 public data:any;
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


}
