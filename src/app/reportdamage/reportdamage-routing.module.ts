import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportdamagePage } from './reportdamage.page';

const routes: Routes = [
  {
    path: '',
    component: ReportdamagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportdamagePageRoutingModule {}
