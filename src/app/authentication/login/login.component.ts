import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService: AuthService, private toastr: ToastrService, private router: Router) { }

  showEmail:boolean = true
  error :string= ""
  show:boolean = false
  changeField() {
    console.log()
    this.showEmail = !this.showEmail
  }

  ngOnInit(): void {
  }
  loginForm = this.fb.group({

    password: ['', [Validators.required,Validators.pattern(
      '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z0-9$@$!%*?&]{8,}'
    )]],

    email: ['', [Validators.required,Validators.email]]

  })
  showPassword() {
    this.show = !this.show

  }
  login() {

    if (!this.loginForm.valid) {
      alert('All the details are required')
    }
    else {
      const email = this.loginForm.value.email
      const password = this.loginForm.value.password

      this.authService.login(email, password).subscribe(
        response => {
          this.isLoading = true;
          setTimeout( () => {this.isLoading = false
            this.router.navigate(['../dashboard'])}, 3000 );
        

         
        }
        , errorMessage => {
          this.isLoading = true;
          setTimeout( () => {this.isLoading = false
            this.toastr.error(this.error)}, 2000 );
        

          this.error = errorMessage
          //this.toastr.error(this.error)

        })
    }
  }
  get email(){
    return this.loginForm.get('email')
  }
  get password(){
    return this.loginForm.get('password')
  }


  isLoading = false;
  load() : void {
    this.isLoading = true;
    setTimeout( () => {this.isLoading = false
     }, 7000 );
  
  }

}
