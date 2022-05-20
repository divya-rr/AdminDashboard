import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppMaterialModule } from '../app-material/app-material.module';
import { SidebarComponent } from './sidebar/sidebar.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { ChartComponent } from './chart/chart.component';
import { MediaComponent } from './media/media.component';
import { HeaderComponent } from './header/header.component';



const routes: Routes = [
    { path: "", component:DashboardComponent },
    
    


]

@NgModule({
  declarations: [SidebarComponent,DashboardComponent,MainComponent,ChartComponent,MediaComponent,HeaderComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),AppMaterialModule
  ]
})
export class CoreModule { }