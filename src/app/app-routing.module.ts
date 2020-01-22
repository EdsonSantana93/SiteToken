import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListagemComponent } from './listagem/listagem.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
{path: '', component: InicioComponent},
{path: 'login', component: LoginComponent},
{path: 'listagem', component: ListagemComponent},
{path: 'inicio', component: InicioComponent},
{path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
