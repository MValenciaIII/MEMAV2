import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemawebsitePage } from './memawebsite.page';

const routes: Routes = [
  {
    path: '',
    component: MemawebsitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemawebsitePageRoutingModule {}
