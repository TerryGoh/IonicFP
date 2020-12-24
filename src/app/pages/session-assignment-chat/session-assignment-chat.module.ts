import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SessionAssignmentChatPageRoutingModule } from './session-assignment-chat-routing.module';

import { SessionAssignmentChatPage } from './session-assignment-chat.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SessionAssignmentChatPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SessionAssignmentChatPage]
})
export class SessionAssignmentChatPageModule {}
