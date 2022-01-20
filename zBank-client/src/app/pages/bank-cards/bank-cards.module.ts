import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BankCardsPageRoutingModule } from './bank-cards-routing.module';

import { BankCardsPage } from './bank-cards.page';
import { TransactionComponent } from 'src/app/components/transaction/transaction.component';
import { TransactionComponentModule } from 'src/app/components/transaction/transaction.module';
import { BankCardComponentModule } from 'src/app/components/bank-card/bank-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BankCardsPageRoutingModule,
    TransactionComponentModule,
    BankCardComponentModule
  ],
  declarations: [BankCardsPage]
})
export class BankCardsPageModule { }
