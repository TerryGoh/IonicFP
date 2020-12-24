import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopoverParticipantInvitePage } from './popover-participant-invite.page';

const routes: Routes = [
  {
    path: '',
    component: PopoverParticipantInvitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopoverParticipantInvitePageRoutingModule {}
