import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  info!: User




  signUp(userDetails: any) {
    return this.http.post('http://localhost:4000/createUser', userDetails, { responseType: 'text' })
  }


  login(email: any, password: string) {
    return this.http.post('http://localhost:4000/login', { email, password }, { responseType: 'text' })


  }



  isLoggedIn() {
    return !!localStorage.getItem('loggedInUser')
  }


}
