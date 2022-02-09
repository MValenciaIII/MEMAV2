import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoweroutagesPageRoutingModule } from './poweroutages-routing.module';

import { PoweroutagesPage } from './poweroutages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoweroutagesPageRoutingModule
  ],
  declarations: [PoweroutagesPage]
})
export class PoweroutagesPageModule {}
