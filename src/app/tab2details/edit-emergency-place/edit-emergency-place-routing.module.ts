import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditEmergencyPlacePage } from './edit-emergency-place.page';

const routes: Routes = [
  {
    path: '',
    component: EditEmergencyPlacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditEmergencyPlacePageRoutingModule {}
