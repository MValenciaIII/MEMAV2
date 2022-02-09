import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemawebsitePageRoutingModule } from './memawebsite-routing.module';

import { MemawebsitePage } from './memawebsite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemawebsitePageRoutingModule
  ],
  declarations: [MemawebsitePage]
})
export class MemawebsitePageModule {}
