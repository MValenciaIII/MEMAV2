import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisasterPage } from './disaster.page';

const routes: Routes = [
  {
    path: '',
    component: DisasterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisasterPageRoutingModule {}
