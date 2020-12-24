import { Component, OnInit } from '@angular/core';
import {ModalpopupPage} from '../../modalpopup/modalpopup.page';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {}

  OpenModal() {
    this.modalController.create({component:ModalpopupPage}).then((modalElement)=>{
      modalElement.present();
    })
  }

}
