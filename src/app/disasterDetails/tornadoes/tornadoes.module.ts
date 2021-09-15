import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TornadoesPageRoutingModule } from './tornadoes-routing.module';

import { TornadoesPage } from './tornadoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TornadoesPageRoutingModule
  ],
  declarations: [TornadoesPage]
})
export class TornadoesPageModule {}
