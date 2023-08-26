import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MaterialComponent } from './material/material.component';

const routes: Routes = [
  {
    path:'dashboard', component:DashboardComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'material',component:MaterialComponent
  }
  
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
