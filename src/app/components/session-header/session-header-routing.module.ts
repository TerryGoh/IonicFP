import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionHeaderPage } from './session-header.page';

const routes: Routes = [
  {
    path: '',
    component: SessionHeaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionHeaderPageRoutingModule {}
