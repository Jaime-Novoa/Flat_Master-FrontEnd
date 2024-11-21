import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { PagoComponent } from './components/pago/pago.component';
import { ApartamentoComponent } from './components/apartamento/apartamento.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { LoginComponent } from './authentication/login/login.component';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  //{path: '',component: SignupComponent},
  {path: 'pagos',component: PagoComponent},
  {path: 'usuarios', component: UsuarioComponent},
  {path: 'apartamentos', component: ApartamentoComponent},
  {path: 'signup',component: SignupComponent},
  {path: 'login',component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'logout',component: AppComponent},
  {path: 'menu',component: MenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
