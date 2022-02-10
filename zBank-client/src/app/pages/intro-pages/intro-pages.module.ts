import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroPagesPageRoutingModule } from './intro-pages-routing.module';

import { IntroPagesPage } from './intro-pages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroPagesPageRoutingModule
  ],
  declarations: [IntroPagesPage]
})
export class IntroPagesPageModule {}
