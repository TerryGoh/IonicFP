import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SessionHeaderPageRoutingModule } from './session-header-routing.module';

import { SessionHeaderPage } from './session-header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SessionHeaderPageRoutingModule
  ],
  declarations: [SessionHeaderPage]
})
export class SessionHeaderPageModule {}
