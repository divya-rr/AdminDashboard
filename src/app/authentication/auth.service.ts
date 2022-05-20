import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  info!:User

  login(emailOrdob:any,password:string){
  this.info=JSON.parse(localStorage.getItem('signedInUser')||'')
  if((emailOrdob==this.info.email && password==this.info.password) || (password==this.info.password) ){
    localStorage.setItem('token',emailOrdob)
    return of({emailOrdob,password})
  }
    return throwError('You are not allowed to login.Invalid credentials!!!!')
  

}
      isLoggedIn() {
        return !!localStorage.getItem('token')
       }
  

}
