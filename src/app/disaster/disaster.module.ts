import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisasterPageRoutingModule } from './disaster-routing.module';

import { DisasterPage } from './disaster.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisasterPageRoutingModule
  ],
  declarations: [DisasterPage]
})
export class DisasterPageModule {}
