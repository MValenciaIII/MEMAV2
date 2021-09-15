import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadiologicalPageRoutingModule } from './radiological-routing.module';

import { RadiologicalPage } from './radiological.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadiologicalPageRoutingModule
  ],
  declarations: [RadiologicalPage]
})
export class RadiologicalPageModule {}
