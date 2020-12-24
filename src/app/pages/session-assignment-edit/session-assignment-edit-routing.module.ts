import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionAssignmentEditPage } from './session-assignment-edit.page';

const routes: Routes = [
  {
    path: '',
    component: SessionAssignmentEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionAssignmentEditPageRoutingModule {}
