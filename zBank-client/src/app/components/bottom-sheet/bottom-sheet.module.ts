import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BottomSheetPageRoutingModule } from './bottom-sheet-routing.module';

import { BottomSheetPage } from './bottom-sheet.page';
import { TransactionComponentModule } from '../transaction/transaction.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BottomSheetPageRoutingModule,
    TransactionComponentModule
  ],
  declarations: [BottomSheetPage]
})
export class BottomSheetPageModule { }
