import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [{ path: '', redirectTo: 'home', pathMatch: 'full' }, 
  {path:'dashboard',component:DashboardComponent},
  {path:'home', component:HomeComponent},
  {path:'table',component:TableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
