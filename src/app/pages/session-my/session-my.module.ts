import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SessionMyPageRoutingModule } from './session-my-routing.module';

import { SessionMyPage } from './session-my.page';

import {ComponentsModule} from '../../components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SessionMyPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SessionMyPage]
})
export class SessionMyPageModule {}
