import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExtremeHeatPage } from './extreme-heat.page';

const routes: Routes = [
  {
    path: '',
    component: ExtremeHeatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExtremeHeatPageRoutingModule {}
