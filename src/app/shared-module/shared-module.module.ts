import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomListComponent } from '../custom-list/custom-list.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [CustomListComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    CustomListComponent,
    IonicModule
  ]
})
export class SharedModuleModule { }
