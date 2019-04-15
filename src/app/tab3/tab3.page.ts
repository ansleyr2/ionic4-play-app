import { AppServiceService } from './../app-service.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoadingController } from '@ionic/angular';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  providers: [AppServiceService]
})
export class Tab3Page {
  data: any;

  constructor(public http: HttpClient,
    public loadingController: LoadingController, private service: AppServiceService) {

  }


  /*clicked(event?: any) {
    //console.log("clicked..");
    this.presentLoading().then(() => {
      let connectionUrl = "https://jsonplaceholder.typicode.com/users";
      let connection = this.http.get(connectionUrl);
      connection.subscribe(result => {
        //console.log(result);
        this.loadingController.dismiss().then(()=>{
          if(event){
            event.target.complete();
          }
          this.data = result;
        });
      });
    });



  }*/

  clicked(event?: any){
    console.log("Service call...");
    this.service.getData().subscribe(results => {
      this.data = results;
    });

  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'please wait...'
    });
    await loading.present();
  }

  doRefresh(event) {
    console.log('Begin async operation');

    /*setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);*/

    this.clicked(event);
  }
}
