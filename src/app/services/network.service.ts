import {Injectable} from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import {AlertController } from '@ionic/angular';
export enum ConnectionStatusEnum {
    Online,
    Offline
}
@Injectable({
    providedIn: 'root'
})
export class NetworkService {
    constructor(public network:Network,private alertController:AlertController) 
    { 
       console.log('Hello NetworkProvider Provider');
       this.previousStatus = ConnectionStatusEnum.Online;
       this.online=true;
     }
    previousStatus;
    public online:boolean = false;
    
    public initializeNetworkEvents(): void {
        this.network.onDisconnect().subscribe(() => {
            if (this.previousStatus === ConnectionStatusEnum.Online) {
             this.presentNetworkMsg();
                this.online=false;
            }
            this.previousStatus = ConnectionStatusEnum.Offline;
        });
        this.network.onConnect().subscribe(() => {
            if (this.previousStatus === ConnectionStatusEnum.Offline) {
                 this.online=true;
            }
            this.previousStatus = ConnectionStatusEnum.Online;
        });
    }
    /*Network Message*/
 async presentNetworkMsg() {
    const alert = await this.alertController.create({
      header: 'No Internet Connection',
      message: '<img src="assets/images/no-wifi.svg"><br/><label>Please check your internet settings.</label>',
      cssClass:'presentnetworkmsgcss',
      buttons: [{
      text:'OK'
    }]
    });
    await alert.present();
  }
}