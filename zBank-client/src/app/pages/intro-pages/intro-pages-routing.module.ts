import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroPagesPage } from './intro-pages.page';

const routes: Routes = [
  {
    path: '',
    component: IntroPagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroPagesPageRoutingModule {}
