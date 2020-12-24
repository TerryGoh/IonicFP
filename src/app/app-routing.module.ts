import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',//Place Login here
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'session-initiate',
    loadChildren: () => import('./pages/session-initiate/session-initiate.module').then( m => m.SessionInitiatePageModule)
  },
  {
    path: 'session-join',
    loadChildren: () => import('./pages/session-join/session-join.module').then( m => m.SessionJoinPageModule)
  },
  {
    path: 'session-my',
    loadChildren: () => import('./pages/session-my/session-my.module').then( m => m.SessionMyPageModule)
  },
  {
    path: 'session-view/:id',
    loadChildren: () => import('./pages/session-view/session-view.module').then( m => m.SessionViewPageModule)
  },
  {
    path: 'session-assignment-create/:id',
    loadChildren: () => import('./pages/session-assignment-create/session-assignment-create.module').then( m => m.SessionAssignmentCreatePageModule)
  },
  {
    path: 'session-assignment-view/:id/:asgmtid',
    loadChildren: () => import('./pages/session-assignment-view/session-assignment-view.module').then( m => m.SessionAssignmentViewPageModule)
  },
  {
    path: 'session-assignment-edit/:id/:asgmtid',
    loadChildren: () => import('./pages/session-assignment-edit/session-assignment-edit.module').then( m => m.SessionAssignmentEditPageModule)
  },
  {
    path: 'session-header/:id',
    loadChildren: () => import('./components/session-header/session-header.module').then( m => m.SessionHeaderPageModule)
  },
  {
    path: 'popover-participant-view',
    loadChildren: () => import('./pages/shared-module/popover-participant-view/popover-participant-view.module').then( m => m.PopoverParticipantViewPageModule)
  },
  {
    path: 'popover-participant-invite',
    loadChildren: () => import('./pages/shared-module/popover-participant-invite/popover-participant-invite.module').then( m => m.PopoverParticipantInvitePageModule)
  },
  {
    path: 'session-assignment-chat/:id',
    loadChildren: () => import('./pages/session-assignment-chat/session-assignment-chat.module').then( m => m.SessionAssignmentChatPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./pages/logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'session-view-image-discussion',
    loadChildren: () => import('./pages/shared-module/session-view-image-discussion/session-view-image-discussion.module').then( m => m.SessionViewImageDiscussionPageModule)
  },
  {
    path: 'authentication-method',
    loadChildren: () => import('./pages/authentication-method/authentication-method.module').then(m => m.AuthenticationMethodPageModule)
  },
];
@NgModule({
  imports: [ 
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
