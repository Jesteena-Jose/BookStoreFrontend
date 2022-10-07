import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  loginClass=''
  loginResponse=''
  constructor(private fb: FormBuilder,private adminservice:AdminService,private route:Router) { }

  ngOnInit(): void {
  }

  loginForm = this.fb.group({
    Username: [null, [Validators.required, Validators.email]],
    Password: [null, [Validators.required, Validators.minLength(6)]]
  })

  get Username(){
    return this.loginForm.get('Username')
  }
  get Password(){
    return this.loginForm.get('Password')
  }

  onFormSubmit() {
    this.adminservice.login(this.loginForm.value).subscribe(
    (response) =>{
      console.log(response);
      this.loginClass='alert-success'
      this.loginResponse='Login Successfull, Thank You'
      localStorage.setItem('admin',JSON.stringify(response))
      this.route.navigateByUrl('/Adminhome')
    },
    (error)=>{
      this.loginClass='alert-danger'
      this.loginResponse='Login failed, Try again'
    }
    )
  }

}
