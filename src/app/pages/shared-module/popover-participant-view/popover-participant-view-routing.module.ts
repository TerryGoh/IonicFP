import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopoverParticipantViewPage } from './popover-participant-view.page';

const routes: Routes = [
  {
    path: '',
    component: PopoverParticipantViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopoverParticipantViewPageRoutingModule {}
