import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserCartService {

  constructor(private http:HttpClient) { }
  getbooks(UserId:any):Observable<any>{
    return this.http.get<any>(`http://localhost:58884/api/usercart?UserId=${UserId}`)
  }
  addbooks(usercart:any):Observable<any>{
    return this.http.post<any>(`http://localhost:58884/api/usercart`,usercart)
  }
  deletebook(UserCartId:any):Observable<any>{
    return this.http.delete<any>(`http://localhost:58884/api/usercart?UserCartId=${UserCartId}`)
  }
}
