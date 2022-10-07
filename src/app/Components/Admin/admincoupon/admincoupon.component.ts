import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CouponService } from 'src/app/Services/coupon.service';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-admincoupon',
  templateUrl: './admincoupon.component.html',
  styleUrls: ['./admincoupon.component.css']
})
export class AdmincouponComponent implements OnInit {

  users:any[]=[];
  admin = JSON.parse(localStorage.getItem('admin') || '{}')
  AdminId = this.admin.AdminId;
  constructor(private couponservice:CouponService,private fb: FormBuilder,private userservice:UsersService,private router:Router) { 
    this.userservice.getUsers().subscribe((data: any) => {
      this.users = data
    })
  }
  couponForm = this.fb.group({
    CouponCode:null,
    UserId:null,
    DiscountAmount:null,
    AdminId:this.AdminId
  })

  get CouponCode(){
    return this.couponForm.get('CouponCode')
  }
  get UserId(){
    return this.couponForm.get('UserId')
  }
  get DiscountAmount(){
    return this.couponForm.get('DiscountAmount')
  }

  ngOnInit(): void {
  }
  onFormSubmit(){
    this.couponservice.addcoupon(this.couponForm.value).subscribe((data)=>{
      console.log(data)
      this.router.navigateByUrl("Adminviewcoupon")
    })
  }

}
