import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionAssignmentChatPage } from './session-assignment-chat.page';

const routes: Routes = [
  {
    path: '',
    component: SessionAssignmentChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionAssignmentChatPageRoutingModule {}
