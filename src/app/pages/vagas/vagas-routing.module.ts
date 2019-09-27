import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VagaListComponent } from './vaga-list/vaga-list.component';
import { VagaFormComponent } from './vaga-form/vaga-form.component';

const routes: Routes = [
  { path: "", component: VagaListComponent },
  { path: "new", component: VagaFormComponent },
  { path: ":id/edit", component: VagaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VagasRoutingModule { }
