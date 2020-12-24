import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
     { 
       path: 'main',
      children: [
      {
        path: '',
        loadChildren: () => import('../pages/main/main.module').then( m => m.MainPageModule)
      },


    ]
    },
    
    { 
      path: 'session-view',
     children: [
      {
        path: 'session-my',
        loadChildren: () => import('../pages/session-my/session-my.module').then( m => m.SessionMyPageModule)
      },
      {
        path: 'session-initiate',
        loadChildren: () => import('../pages/session-initiate/session-initiate.module').then( m => m.SessionInitiatePageModule)
      },
      {
        path: 'session-join',
        loadChildren: () => import('../pages/session-join/session-join.module').then( m => m.SessionJoinPageModule)
      },
      {
        path: 'session-header/:id',
        loadChildren: () => import('../components/session-header/session-header.module').then( m => m.SessionHeaderPageModule)
      },        
      
      {
        path: 'session-view/:id',
        loadChildren: () => import('../pages/session-view/session-view.module').then( m => m.SessionViewPageModule)
      },
      {
        path: 'session-assignment-create/:id',
        loadChildren: () => import('../pages/session-assignment-create/session-assignment-create.module').then( m => m.SessionAssignmentCreatePageModule)
      },
      {
        path: 'session-assignment-view/:id/:asgmtid',
        loadChildren: () => import('../pages/session-assignment-view/session-assignment-view.module').then( m => m.SessionAssignmentViewPageModule)
      },
      {
        path: 'session-assignment-edit/:id/:asgmtid',
        loadChildren: () => import('../pages/session-assignment-edit/session-assignment-edit.module').then( m => m.SessionAssignmentEditPageModule)
      },
      {
        path: 'session-assignment-chat/:id',
        loadChildren: () => import('../pages/session-assignment-chat/session-assignment-chat.module').then( m => m.SessionAssignmentChatPageModule)
      },
    ]
    },
    { 
      path: 'support',
     children: [
      {
        path: 'logout',
        loadChildren: () => import('../pages/logout/logout.module').then( m => m.LogoutPageModule)
      },
    ]
    },
      {
        path: '',
        redirectTo: '/tabs/main',
        pathMatch: 'full'
      }
    ]
  },
  
  {
    path: '',
    //redirectTo: '/tabs/main',//temporary
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
