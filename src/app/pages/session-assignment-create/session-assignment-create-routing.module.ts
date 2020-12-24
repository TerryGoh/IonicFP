import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionAssignmentCreatePage } from './session-assignment-create.page';

const routes: Routes = [
  {
    path: '',
    component: SessionAssignmentCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionAssignmentCreatePageRoutingModule {}
