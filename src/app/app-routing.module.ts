import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EleccionesComponent } from './elecciones/elecciones.component';

const routes: Routes = [
  {
    path:"elecciones",
    component:EleccionesComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
