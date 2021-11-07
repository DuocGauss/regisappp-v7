import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SumapagePageRoutingModule } from './sumapage-routing.module';

import { SumapagePage } from './sumapage.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SumapagePageRoutingModule,
    ComponentsModule
  ],
  declarations: [SumapagePage]
})
export class SumapagePageModule {}
