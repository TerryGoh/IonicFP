import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SessionViewImageDiscussionPageRoutingModule } from './session-view-image-discussion-routing.module';

import { SessionViewImageDiscussionPage } from './session-view-image-discussion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SessionViewImageDiscussionPageRoutingModule
  ],
  declarations: [SessionViewImageDiscussionPage]
})
export class SessionViewImageDiscussionPageModule {}
