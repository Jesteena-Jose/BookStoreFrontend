import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginClass=''
  loginResponse=''
  constructor(private fb: FormBuilder,private userservice:UsersService,private route:Router) { }

  loginForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(6)]]
  })

  ngOnInit(): void {
  }

  get email(){
    return this.loginForm.get('email')
  }
  get password(){
    return this.loginForm.get('password')
  }
  onFormSubmit() {
    this.userservice.login(this.loginForm.value).subscribe(
    (response) =>{
      console.log(response);
      this.loginClass='alert-success'
      this.loginResponse='Login Successfull, Thank You'
      localStorage.setItem('token','123')
      localStorage.setItem('user',JSON.stringify(response))
      this.route.navigateByUrl('/Home')
    },
    (error)=>{
      this.loginClass='alert-danger'
      this.loginResponse='Login failed, Try again'
    }
    )
  }

}
