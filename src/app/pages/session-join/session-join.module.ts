import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SessionJoinPageRoutingModule } from './session-join-routing.module';

import { SessionJoinPage } from './session-join.page';
import {ComponentsModule} from '../../components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SessionJoinPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SessionJoinPage]
})
export class SessionJoinPageModule {}
