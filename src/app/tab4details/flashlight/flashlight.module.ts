import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlashlightPageRoutingModule } from './flashlight-routing.module';
import { Flashlight } from '@ionic-native/flashlight'
import { FlashlightPage } from './flashlight.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlashlightPageRoutingModule
  ],
  declarations: [FlashlightPage]
})
export class FlashlightPageModule {}
