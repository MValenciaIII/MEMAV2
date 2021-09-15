import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExtremeHeatPageRoutingModule } from './extreme-heat-routing.module';

import { ExtremeHeatPage } from './extreme-heat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExtremeHeatPageRoutingModule
  ],
  declarations: [ExtremeHeatPage]
})
export class ExtremeHeatPageModule {}
