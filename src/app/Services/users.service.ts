import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  getUsers(): Observable<any> {
    return this.http.get<any>('http://localhost:58884/api/user')
  }
  addUser(user: any): Observable<any> {
    return this.http.post<any>('http://localhost:58884/api/user', user)
  }
  updateUser(UserId: any, user: any): Observable<any> {
    return this.http.put<any>(`http://localhost:58884/api/user?UserId=${UserId}`,user)
  }
  updatestatus(status:any): Observable<any> {
    return this.http.post<any>(`http://localhost:58884/api/statuschange`,status)
  }
  login(data:any): Observable<any> {
    console.log(data)
    return this.http.post<any>(`http://localhost:58884/api/login`,data)
  }
  checktoken(): boolean {
    if(localStorage.getItem('token')){
      return true
    }else{
      return false
    }
  }
  logout(){
    localStorage.clear()
  }
}