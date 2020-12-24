import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MainHeaderComponent} from './components/main-header/main-header.component'
import {SessionHeaderPage} from './components/session-header/session-header.page'
@NgModule({
    declarations: [MainHeaderComponent,SessionHeaderPage],
    imports:[IonicModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports:[MainHeaderComponent,SessionHeaderPage]
   
  })
  export class ComponentsModule {}