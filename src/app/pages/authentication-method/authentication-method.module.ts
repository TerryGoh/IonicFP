import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthenticationMethodPageRoutingModule } from './authentication-method-routing.module';

import { AuthenticationMethodPage } from './authentication-method.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthenticationMethodPageRoutingModule
  ],
  declarations: [AuthenticationMethodPage]
})
export class AuthenticationMethodPageModule {}
