import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { TableComponent } from './components/table/table.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';

import { TreeSelectModule } from 'primeng/treeselect';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressBarModule } from 'primeng/progressbar';
export class AppModule {}

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TableModule,
    HttpClientModule,
    TreeSelectModule,
    ProgressBarModule,
    BrowserAnimationsModule,
    DropdownModule,
    FormsModule
  ]
})
export class DashboardModule { }
