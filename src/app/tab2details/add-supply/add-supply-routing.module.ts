import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSupplyPage } from './add-supply.page';

const routes: Routes = [
  {
    path: '',
    component: AddSupplyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSupplyPageRoutingModule {}
