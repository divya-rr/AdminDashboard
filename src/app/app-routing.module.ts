import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"dashboard",loadChildren:()=>import('./core/core.module').then(m=>m.CoreModule)},
  {path:"",loadChildren:()=>import('./authentication/authentication.module').then(m=>m.AuthenticationModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
