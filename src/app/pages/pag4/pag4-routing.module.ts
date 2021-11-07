import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pag4Page } from './pag4.page';

const routes: Routes = [
  {
    path: '',
    component: Pag4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pag4PageRoutingModule {}
