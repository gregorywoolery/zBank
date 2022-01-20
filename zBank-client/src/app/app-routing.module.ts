import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cards-home',
    pathMatch: 'full'
  },
  {
    path: 'bank-cards',
    loadChildren: () => import('./pages/bank-cards/bank-cards.module').then(m => m.BankCardsPageModule)
  },
  {
    path: 'cards-home',
    loadChildren: () => import('./pages/cards-home/cards-home.module').then(m => m.CardsHomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
