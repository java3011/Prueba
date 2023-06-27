import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { LoginComponent } from './pages/login/login.component';
import { HomePriComponent } from './pages/home-pri/home-pri.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:'signin', component:SigninComponent},
  {path:'login', component:LoginComponent},
  {path:'private', component:HomePriComponent, canActivate: [AuthGuard]},
  {path:'admin', component: AdminComponent},// canActivate: RoleGuard, data: { expectedRole: 'admin' }},
  {path: '**', redirectTo:'' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
