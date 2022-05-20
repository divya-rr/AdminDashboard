import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: "", component:LoginComponent },
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent}
  
  


]

@NgModule({
  declarations: [
    LoginComponent,SignupComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule,RouterModule.forChild(routes)
  ]
})

export class AuthenticationModule { }
