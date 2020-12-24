import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionInitiatePage } from './session-initiate.page';

const routes: Routes = [
  {
    path: '',
    component: SessionInitiatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionInitiatePageRoutingModule {}
