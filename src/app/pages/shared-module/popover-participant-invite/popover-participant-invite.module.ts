import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopoverParticipantInvitePageRoutingModule } from './popover-participant-invite-routing.module';

import { PopoverParticipantInvitePage } from './popover-participant-invite.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //Filter

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    PopoverParticipantInvitePageRoutingModule
  ],
  declarations: [PopoverParticipantInvitePage]
})
export class PopoverParticipantInvitePageModule {}
