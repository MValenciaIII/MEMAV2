import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HurricanesPage } from './hurricanes.page';

const routes: Routes = [
  {
    path: '',
    component: HurricanesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HurricanesPageRoutingModule {}
