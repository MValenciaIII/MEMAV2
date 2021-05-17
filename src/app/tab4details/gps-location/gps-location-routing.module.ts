import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { GpsLocationPage } from './gps-location.page';

const routes: Routes = [
  {
    path: '',
    component: GpsLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GpsLocationPageRoutingModule {}
