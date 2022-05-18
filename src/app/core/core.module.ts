import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppMaterialModule } from '../app-material/app-material.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
    { path: "", component:DashboardComponent },
    


]

@NgModule({
  declarations: [SidebarComponent,HeaderComponent,DashboardComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),AppMaterialModule
  ]
})
export class CoreModule { }