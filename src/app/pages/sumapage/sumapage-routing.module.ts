import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SumapagePage } from './sumapage.page';

const routes: Routes = [
  {
    path: '',
    component: SumapagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SumapagePageRoutingModule {}
