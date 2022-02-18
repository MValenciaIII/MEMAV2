import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountyemaPage } from './countyema.page';

const routes: Routes = [
  {
    path: '',
    component: CountyemaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountyemaPageRoutingModule {}
