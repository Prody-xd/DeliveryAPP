import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformeProductoPage } from './informe-producto.page';

const routes: Routes = [
  {
    path: '',
    component: InformeProductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformeProductoPageRoutingModule {}
