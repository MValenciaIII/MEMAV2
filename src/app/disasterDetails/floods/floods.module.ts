import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FloodsPageRoutingModule } from './floods-routing.module';

import { FloodsPage } from './floods.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FloodsPageRoutingModule
  ],
  declarations: [FloodsPage]
})
export class FloodsPageModule {}
