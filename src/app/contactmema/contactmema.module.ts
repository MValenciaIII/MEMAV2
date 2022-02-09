import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactmemaPageRoutingModule } from './contactmema-routing.module';

import { ContactmemaPage } from './contactmema.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactmemaPageRoutingModule
  ],
  declarations: [ContactmemaPage]
})
export class ContactmemaPageModule {}
