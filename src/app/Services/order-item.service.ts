import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {

  constructor(private http: HttpClient) { }
  getAllOrdersAdmin(): Observable<any> {
    return this.http.get<any>('http://localhost:58884/api/orderitem')
  }
  addorderitem(orderitem: any): Observable<any> {
    return this.http.post<any>('http://localhost:58884/api/orderitem', orderitem)
  }
  getallorders(UserId:any):Observable<any>{
    return this.http.get<any>(`http://localhost:58884/api/orderitem?UserId=${UserId}`)
  }
  getneworders(UserId:any):Observable<any>{
    return this.http.get<any>(`http://localhost:58884/api/orderitem?UserId=${UserId}&Status=1`)
  }
  getorderbyId(OrderId:any):Observable<any>{
    return this.http.get<any>(`http://localhost:58884/api/orderitem?OrderId=${OrderId}`)
  }
}
