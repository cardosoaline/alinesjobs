import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatosRoutingModule } from './candidatos-routing.module';
import { CandidatoFormComponent } from './candidato-form/candidato-form.component';
import { CandidatoListComponent } from './candidato-list/candidato-list.component';


@NgModule({
  declarations: [CandidatoFormComponent, CandidatoListComponent],
  imports: [
    CommonModule,
    CandidatosRoutingModule
  ]
})
export class CandidatosModule { }
