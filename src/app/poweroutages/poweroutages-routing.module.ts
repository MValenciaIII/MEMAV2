import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoweroutagesPage } from './poweroutages.page';

const routes: Routes = [
  {
    path: '',
    component: PoweroutagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoweroutagesPageRoutingModule {}
