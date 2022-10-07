import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {

  constructor(private http:HttpClient) { }
  getcartitems(CartId:any):Observable<any>{
    return this.http.get<any>(`http://localhost:58884/api/cartitem?CartId=${CartId}`)
  }
  addcartitem(Cartitem:any):Observable<any>{
    return this.http.post<any>(`http://localhost:58884/api/cartitem`,Cartitem)
  }
  deletecartitem(Cartitemid:any):Observable<any>{
    return this.http.delete<any>(`http://localhost:58884/api/cartitem?CartItemId=${Cartitemid}`)
  }
}
