import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VagasRoutingModule } from './vagas-routing.module';
import { VagaFormComponent } from './vaga-form/vaga-form.component';
import { VagaListComponent } from './vaga-list/vaga-list.component';


@NgModule({
  declarations: [VagaFormComponent, VagaListComponent],
  imports: [
    CommonModule,
    VagasRoutingModule
  ]
})
export class VagasModule { }
