import { Component, OnInit } from '@angular/core';
import { CouponService } from 'src/app/Services/coupon.service';

@Component({
  selector: 'app-adminviewcoupon',
  templateUrl: './adminviewcoupon.component.html',
  styleUrls: ['./adminviewcoupon.component.css']
})
export class AdminviewcouponComponent implements OnInit {

  coupons:any[]=[];
  constructor(private couponservice:CouponService) {
    this.couponservice.getcoupons().subscribe((data)=>{
      this.coupons=data
    })
   }

  ngOnInit(): void {
  }

}
