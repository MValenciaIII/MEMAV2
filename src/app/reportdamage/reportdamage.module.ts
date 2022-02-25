import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportdamagePageRoutingModule } from './reportdamage-routing.module';

import { ReportdamagePage } from './reportdamage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportdamagePageRoutingModule
  ],
  declarations: [ReportdamagePage]
})
export class ReportdamagePageModule {}
