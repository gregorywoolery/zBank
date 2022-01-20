import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bank-cards',
    pathMatch: 'full'
  },
  {
    path: 'bank-cards',
    loadChildren: () => import('./pages/bank-cards/bank-cards.module').then(m => m.BankCardsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
