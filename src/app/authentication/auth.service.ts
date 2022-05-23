import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  info!:User


  login(email:any,password:string){
  this.info=JSON.parse(localStorage.getItem('signedInUser')||'')
  if((email==this.info.email && password==this.info.password) ){
   
    localStorage.setItem('loggedInUser',this.info.email)
    return of({email,password})
  }
    return throwError('You are not allowed to login.   Invalid credentials!!!!')
  

}
      isLoggedIn() {
        return !!localStorage.getItem('loggedInUser')
       }
  

}
