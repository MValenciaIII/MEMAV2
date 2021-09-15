import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EarthquakesPageRoutingModule } from './earthquakes-routing.module';

import { EarthquakesPage } from './earthquakes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EarthquakesPageRoutingModule
  ],
  declarations: [EarthquakesPage]
})
export class EarthquakesPageModule {}
