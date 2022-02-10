import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing-page',
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
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'landing-page',
    loadChildren: () => import('./pages/landing-page/landing-page.module').then(m => m.LandingPagePageModule)
  },
  {
    path: 'verifyotp',
    loadChildren: () => import('./pages/verifyotp/verifyotp.module').then( m => m.VerifyotpPageModule)
  },
  {
    path: 'intro-pages',
    loadChildren: () => import('./pages/intro-pages/intro-pages.module').then( m => m.IntroPagesPageModule)
  },
  {
    path: 'bottom-sheet',
    loadChildren: () => import('./components/bottom-sheet/bottom-sheet.module').then( m => m.BottomSheetPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
