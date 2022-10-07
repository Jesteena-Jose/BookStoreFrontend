import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  getCategories():Observable<any>{
    return this.http.get<any>('http://localhost:58884/api/category')
  }
  addcategory(data:any):Observable<any>{
    return this.http.post<any>('http://localhost:58884/api/category',data)
  }
  editcategory(CategoryId:any,data:any):Observable<any>{
    return this.http.put<any>(`http://localhost:58884/api/category?CategoryId=${CategoryId}`,data)
  }
  deletecategory(CategoryId:any):Observable<any>{
    return this.http.delete<any>(`http://localhost:58884/api/category?CategoryId=${CategoryId}`)
  }
}
