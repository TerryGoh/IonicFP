import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopoverParticipantViewPageRoutingModule } from './popover-participant-view-routing.module';

import { PopoverParticipantViewPage } from './popover-participant-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopoverParticipantViewPageRoutingModule
  ],
  declarations: [PopoverParticipantViewPage]
})
export class PopoverParticipantViewPageModule {}
