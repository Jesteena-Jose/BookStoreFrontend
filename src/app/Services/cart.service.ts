import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
  getcart():Observable<any>{
    return this.http.get<any>(`http://localhost:58884/api/cart`)
  }
  addcart(cart:any):Observable<any>{
    return this.http.post<any>(`http://localhost:58884/api/cart`,cart)
  }
}
