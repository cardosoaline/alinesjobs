import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'auth', loadChildren: './pages/auth/auth.module#AuthModule' },
  { path: 'vagas', loadChildren: './pages/vagas/vagas.module#VagasModule' },
  { path: 'candidatos', loadChildren: './pages/candidatos/candidatos.module#CandidatosModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
