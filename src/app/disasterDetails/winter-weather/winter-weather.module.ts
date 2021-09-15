import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WinterWeatherPageRoutingModule } from './winter-weather-routing.module';

import { WinterWeatherPage } from './winter-weather.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WinterWeatherPageRoutingModule
  ],
  declarations: [WinterWeatherPage]
})
export class WinterWeatherPageModule {}
