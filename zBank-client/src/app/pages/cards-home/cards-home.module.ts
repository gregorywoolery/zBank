import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardsHomePageRoutingModule } from './cards-home-routing.module';

import { CardsHomePage } from './cards-home.page';
import { SwiperModule } from 'swiper/angular'
import { BankCardComponentModule } from 'src/app/components/bank-card/bank-card.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardsHomePageRoutingModule,
    SwiperModule,
    BankCardComponentModule
  ],
  declarations: [CardsHomePage]
})
export class CardsHomePageModule { }
