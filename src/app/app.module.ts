import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Json in ionic storage
import { IonicStorageModule } from '@ionic/storage';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
//Call Api
import { HTTP } from '@ionic-native/http/ngx';
//Camera
import { Camera } from '@ionic-native/camera/ngx';

//Image
import { Base64 } from '@ionic-native/base64/ngx';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';

//Network
import { Network } from '@ionic-native/network/ngx';

//Image Compress
import {NgxImageCompressService} from 'ngx-image-compress';

//Email Composer
import {EmailComposer} from '@ionic-native/email-composer/ngx';

import {DatePicker} from '@ionic-native/date-picker/ngx';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule,ReactiveFormsModule,NgxIonicImageViewerModule,IonicStorageModule.forRoot() ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Base64,
    Network,
    HTTP,NgxImageCompressService,
    EmailComposer,
    DatePicker,
    DatePipe,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
