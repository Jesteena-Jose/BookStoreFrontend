import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private http:HttpClient) { }
  getcouponsbyuser(UserId:any):Observable<any>{
    return this.http.get<any>(`http://localhost:58884/api/coupon?UserId=${UserId}`)
  }
  getcoupons():Observable<any>{
    return this.http.get<any>(`http://localhost:58884/api/coupon`)
  }
  addcoupon(coupon:any):Observable<any>{
    return this.http.post<any>(`http://localhost:58884/api/coupon`,coupon)
  }
  deletecoupon(couponId:any):Observable<any>{
    return this.http.delete<any>(`http://localhost:58884/api/coupon?CouponId=${couponId}`)
}
}