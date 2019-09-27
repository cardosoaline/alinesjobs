import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroFormComponent } from './cadastro-form/cadastro-form.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  { path: "login", component: LoginFormComponent },
  { path: "new", component: CadastroFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
