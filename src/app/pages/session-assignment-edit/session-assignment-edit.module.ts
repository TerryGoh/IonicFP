import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SessionAssignmentEditPageRoutingModule } from './session-assignment-edit-routing.module';

import { SessionAssignmentEditPage } from './session-assignment-edit.page';
import {ComponentsModule} from '../../components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SessionAssignmentEditPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SessionAssignmentEditPage]
})
export class SessionAssignmentEditPageModule {}
