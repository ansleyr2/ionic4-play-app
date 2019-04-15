import { Component, Input, ViewChild } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'modal-page',
  templateUrl: 'modalPage.component.html'
})
export class ModalPage {

  // "value" passed in componentProps
  @Input() name: String;

  constructor(navParams: NavParams, public modalController: ModalController) {
    // componentProps can also be accessed at construction time using NavParams
  }

  closeModal(){
    this.modalController.dismiss();
  }

}