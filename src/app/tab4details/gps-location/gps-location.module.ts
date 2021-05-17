import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GpsLocationPageRoutingModule } from './gps-location-routing.module';

import { GpsLocationPage } from './gps-location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GpsLocationPageRoutingModule
  ],
  declarations: [GpsLocationPage]
})
export class GpsLocationPageModule {}
