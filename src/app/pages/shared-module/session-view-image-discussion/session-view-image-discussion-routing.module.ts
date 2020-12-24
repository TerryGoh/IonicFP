import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionViewImageDiscussionPage } from './session-view-image-discussion.page';

const routes: Routes = [
  {
    path: '',
    component: SessionViewImageDiscussionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionViewImageDiscussionPageRoutingModule {}
