import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) { }
  getbooks(UserId:any):Observable<any>{
    return this.http.get<any>(`http://localhost:58884/api/wishlist?UserId=${UserId}`)
  }
  addbooks(wishlist:any):Observable<any>{
    return this.http.post<any>(`http://localhost:58884/api/wishlist`,wishlist)
  }
  deletebook(WishlistId:any):Observable<any>{
    return this.http.get<any>(`http://localhost:58884/api/wishlist?WishlistId=${WishlistId}`)
  }
}
