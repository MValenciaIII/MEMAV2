import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditEmergencyPlacePageRoutingModule } from './edit-emergency-place-routing.module';

import { EditEmergencyPlacePage } from './edit-emergency-place.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditEmergencyPlacePageRoutingModule
  ],
  declarations: [EditEmergencyPlacePage]
})
export class EditEmergencyPlacePageModule {}
