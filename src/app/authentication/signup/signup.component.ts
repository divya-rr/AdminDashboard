import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  show:boolean = false;


  showPassword() {
    this.show = !this.show;
  }
  isLoading:boolean = false;
  load(): void {
    this.isLoading = true;
  

  }

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient, private authService: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  userForm = this.fb.group(
    {
      firstName: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
      lastName: ['', [Validators.pattern('^[a-zA-Z]+$')]],


      email: [
        '',
        [
          Validators.required,
          Validators.email,

        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z0-9$@$!%*?&]{8,}'
          ),
        ],
      ],
      isDeleted:false

    },

  );
  get email() {
    return this.userForm.get('email')
  }
  get password() {
    return this.userForm.get('password')
  }
  get firstName() {
    return this.userForm.get('firstName')
  }
  get lastName() {
    return this.userForm.get('lastName')
  }

  submit(userForm: FormGroup) {
    if (userForm.valid) {
      this.userForm.patchValue({
        isDeleted:false
      })
      this.authService.signUp(userForm.value).subscribe(
        response => {
          this.isLoading = true
          setTimeout(() => {
            this.isLoading = false
            this.toastr.success("Account created")
            this.router.navigate(['../login'])
          }, 1000);
          console.log(response);




        }
        , errorMessage => {
          this.isLoading = true
          setTimeout(() => {
            this.isLoading = false
            this.toastr.error(errorMessage.statusText)
          }, 1000);
          console.log(errorMessage);


        })



      console.log(userForm.value);
      localStorage.setItem('signedInUser', JSON.stringify(userForm.value))



    } else {
      //this.validateAllFormFields(userForm);
    }
  }

 



}
