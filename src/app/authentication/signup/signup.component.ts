import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router) { }

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
     
    },

  );
  get email(){
    return this.userForm.get('email')
  }
  get password(){
    return this.userForm.get('password')
  }
  get firstName(){
    return this.userForm.get('firstName')
  }
  get lastName(){
    return this.userForm.get('lastName')
  }

  submit(userForm: FormGroup) {
    if (userForm.valid) {
     console.log(userForm.value);
     localStorage.setItem('signedInUser',JSON.stringify(userForm.value))
     this.router.navigateByUrl('/login')

     
    } else {
       //this.validateAllFormFields(userForm);
    }
  }

  show = false;
 

  showPassword() {
    this.show = !this.show;
  }



}
