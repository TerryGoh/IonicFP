import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SessionInitiatePageRoutingModule } from './session-initiate-routing.module';

import { SessionInitiatePage } from './session-initiate.page';

import { ReactiveFormsModule } from '@angular/forms';
import {ComponentsModule} from '../../components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SessionInitiatePageRoutingModule,
    ComponentsModule
  ],
  declarations: [SessionInitiatePage]
})
export class SessionInitiatePageModule {}
