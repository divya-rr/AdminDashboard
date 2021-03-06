import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { GuardGuard } from '../guards/guard.guard';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: "", component:LoginComponent },
  {path:"signup",canActivate:[GuardGuard],component:SignupComponent},
  {path:"login",canActivate:[GuardGuard],component:LoginComponent}
  
  


]

@NgModule({
  declarations: [
    LoginComponent,SignupComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule,RouterModule.forChild(routes),MatProgressSpinnerModule,HttpClientModule
  ]
})

export class AuthenticationModule { }
