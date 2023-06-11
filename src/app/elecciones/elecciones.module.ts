import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EleccionesRoutingModule } from './elecciones-routing.module';
import { EleccionesComponent } from './elecciones.component';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    EleccionesComponent
  ],
  imports: [
    CommonModule,
    EleccionesRoutingModule,

    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule, 
    MatIconModule, 
    MatSelectModule,
    MatGridListModule, 
    MatTableModule
  ]
})
export class EleccionesModule { }
