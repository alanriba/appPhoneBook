import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modulos
import { SharedModule } from '../shared/shared.module';
import { PrincipalComponent } from './principal/principal.component';

// Pipes
import { FiltrosPipe } from '../pipes/filtros.pipe';



@NgModule({
  declarations: [
    PrincipalComponent,
    FiltrosPipe
  ],
  exports: [
    PrincipalComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,

  ]
})
export class PagesModule { }
