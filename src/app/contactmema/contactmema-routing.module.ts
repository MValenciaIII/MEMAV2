import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactmemaPage } from './contactmema.page';

const routes: Routes = [
  {
    path: '',
    component: ContactmemaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactmemaPageRoutingModule {}
