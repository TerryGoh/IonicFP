import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationMethodPage } from './authentication-method.page';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationMethodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationMethodPageRoutingModule {}
