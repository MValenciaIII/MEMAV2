import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSupplyPageRoutingModule } from './add-supply-routing.module';

import { AddSupplyPage } from './add-supply.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSupplyPageRoutingModule
  ],
  declarations: [AddSupplyPage]
})
export class AddSupplyPageModule {}
