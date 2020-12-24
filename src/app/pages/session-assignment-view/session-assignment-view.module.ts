import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SessionAssignmentViewPageRoutingModule } from './session-assignment-view-routing.module';
import { SessionAssignmentViewPage } from './session-assignment-view.page';
import {ComponentsModule} from '../../components.module';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SessionAssignmentViewPageRoutingModule,
    NgxIonicImageViewerModule,
    ComponentsModule
  ],
  declarations: [SessionAssignmentViewPage]
})
export class SessionAssignmentViewPageModule {}
