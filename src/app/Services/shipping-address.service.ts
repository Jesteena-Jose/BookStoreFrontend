import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShippingAddressService {

  constructor(private http:HttpClient) { }
  getaddress(UserId:any):Observable<any>{
    return this.http.get<any>(`http://localhost:58884/api/shippingaddress?UserId=${UserId}`)
  }
  addaddress(address:any):Observable<any>{
    return this.http.post<any>(`http://localhost:58884/api/shippingaddress`,address)
  }
  editaddress(AddressId:any,address:any):Observable<any>{
    return this.http.put<any>(`http://localhost:58884/api/shippingaddress?AddressId=${AddressId}`,address)
  }
  
}
