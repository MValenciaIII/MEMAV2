import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FloodsPage } from './floods.page';

const routes: Routes = [
  {
    path: '',
    component: FloodsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FloodsPageRoutingModule {}
