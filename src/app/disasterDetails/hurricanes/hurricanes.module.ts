import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HurricanesPageRoutingModule } from './hurricanes-routing.module';

import { HurricanesPage } from './hurricanes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HurricanesPageRoutingModule
  ],
  declarations: [HurricanesPage]
})
export class HurricanesPageModule {}
