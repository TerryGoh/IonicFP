import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SessionAssignmentCreatePageRoutingModule } from './session-assignment-create-routing.module';

import { SessionAssignmentCreatePage } from './session-assignment-create.page';
import { ReactiveFormsModule } from '@angular/forms';
import {ComponentsModule} from '../../components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SessionAssignmentCreatePageRoutingModule,
    ComponentsModule
  ],
  declarations: [SessionAssignmentCreatePage]
})
export class SessionAssignmentCreatePageModule {}
