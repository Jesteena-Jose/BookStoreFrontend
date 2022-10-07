import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loginResponse=''
  loginClass=''

  constructor(private route:Router,private fb: FormBuilder,private userservice:UsersService) { }

  registerForm = this.fb.group({
    Name:[null,[Validators.required,Validators.minLength(3)]],
    Email: [null, [Validators.required, Validators.email]],
    Password: [null, [Validators.required, Validators.minLength(6)]],
    ActiveStatus:"active",
    PhoneNo: [null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
  })

  ngOnInit(): void {
  }

  get Email(){
    return this.registerForm.get('Email')
  }
  get Password(){
    return this.registerForm.get('Password')
  }
  get Name(){
    return this.registerForm.get('Name')
  }
  get PhoneNo(){
    return this.registerForm.get('PhoneNo')
  }

  onFormSubmit(){
    console.log(this.registerForm.value)
    this.userservice.addUser(this.registerForm.value).subscribe(
    (response)=>{
      console.log(response)
      this.route.navigateByUrl('/Login')
    },
    (error)=>{
      this.loginResponse='Sorry, '+error.error.message
      console.log(this.loginResponse)
      this.loginClass='alert-danger'
    }
    )

  }

}
