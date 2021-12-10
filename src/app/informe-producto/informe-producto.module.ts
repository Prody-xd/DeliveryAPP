import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformeProductoPageRoutingModule } from './informe-producto-routing.module';

import { InformeProductoPage } from './informe-producto.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformeProductoPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [InformeProductoPage]
})
export class InformeProductoPageModule {}
