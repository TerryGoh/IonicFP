import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionJoinPage } from './session-join.page';

const routes: Routes = [
  {
    path: '',
    component: SessionJoinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionJoinPageRoutingModule {}
