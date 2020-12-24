import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionAssignmentViewPage } from './session-assignment-view.page';

const routes: Routes = [
  {
    path: '',
    component: SessionAssignmentViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionAssignmentViewPageRoutingModule {}
