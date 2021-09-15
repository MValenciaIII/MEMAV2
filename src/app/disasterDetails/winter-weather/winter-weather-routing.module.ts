import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WinterWeatherPage } from './winter-weather.page';

const routes: Routes = [
  {
    path: '',
    component: WinterWeatherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WinterWeatherPageRoutingModule {}
