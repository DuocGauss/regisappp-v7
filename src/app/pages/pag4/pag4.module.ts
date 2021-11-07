import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pag4PageRoutingModule } from './pag4-routing.module';

import { Pag4Page } from './pag4.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pag4PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Pag4Page]
})
export class Pag4PageModule {}
