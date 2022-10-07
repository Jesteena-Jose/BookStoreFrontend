import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  addorder(order:any):Observable<any>{
    return this.http.post<any>(`http://localhost:58884/api/order`,order)
  }
  deleteorder(OrderId:any):Observable<any>{
    return this.http.delete<any>(`http://localhost:58884/api/order?OrderId=${OrderId}`)
  }
}
