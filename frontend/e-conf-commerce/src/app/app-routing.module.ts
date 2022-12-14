import { NgModule } from '@angular/core';
import { LoginModule } from './autenticacao/login/login.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'login'},
  {
    path: 'login',
    loadChildren: () => import('./autenticacao/login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
