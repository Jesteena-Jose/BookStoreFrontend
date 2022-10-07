import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  login(login:any):Observable<any>{
    return this.http.post<any>(`http://localhost:58884/api/admin`,login)
  }
  checkadmin(): boolean {
    if(localStorage.getItem('admin')){
      return true
    }else{
      return false
    }
  }
  logout(){
    localStorage.clear()
  }
}
