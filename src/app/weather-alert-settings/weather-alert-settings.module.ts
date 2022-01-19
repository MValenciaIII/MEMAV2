import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeatherAlertSettingsPageRoutingModule } from './weather-alert-settings-routing.module';

import { WeatherAlertSettingsPage } from './weather-alert-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeatherAlertSettingsPageRoutingModule
  ],
  declarations: [WeatherAlertSettingsPage]
})
export class WeatherAlertSettingsPageModule {}
