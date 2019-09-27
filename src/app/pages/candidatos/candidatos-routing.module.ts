import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatoListComponent } from './candidato-list/candidato-list.component';
import { CandidatoFormComponent } from './candidato-form/candidato-form.component';


const routes: Routes = [
  { path: "", component: CandidatoListComponent },
  { path: "new", component: CandidatoFormComponent },
  { path: ":id/edit", component: CandidatoFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatosRoutingModule { }
