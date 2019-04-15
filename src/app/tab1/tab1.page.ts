import { Component } from '@angular/core';

import { ModalController, ActionSheetController } from '@ionic/angular';
import { ModalPage } from '../modalPage/modalPage.component';

import { AppServiceService } from './../app-service.service';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [AppServiceService]
})
export class Tab1Page {
  name: String;
  data: any;

  constructor(public modalController: ModalController,
    public actionSheetController: ActionSheetController,
    private service: AppServiceService){

  }

  ngAfterViewInit(){
    this.getDataById();
  }

  async displayModal(){
      const modal = await this.modalController.create({
        component: ModalPage,
        componentProps: { name: this.name }
      });
      return await modal.present();
    }
  //}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Actions',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  getDataById(){
    this.service.getDataById("1").subscribe(result =>{
      this.data = result;
    });
  }

}
