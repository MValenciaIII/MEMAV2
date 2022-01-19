import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherAlertSettingsPage } from './weather-alert-settings.page';

const routes: Routes = [
  {
    path: '',
    component: WeatherAlertSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherAlertSettingsPageRoutingModule {}
