import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient) { }
  getbestbooks():Observable<any>{
    return this.http.get<any>(`http://localhost:58884/api/bestbook`)
  }
  getbooks():Observable<any>{
    return this.http.get<any>(`http://localhost:58884/api/book`)
  }
  getBookById(BookId:any):Observable<any>{
    return this.http.get<any>(`http://localhost:58884/api/book?BookId=${BookId}`)
  }
  getBookByCategory(CategoryId:any):Observable<any>{
    return this.http.get<any>(`http://localhost:58884/api/book?CategoryId=${CategoryId}`)
  }
  getBookByTitle(Title:any):Observable<any>{
    return this.http.get<any>(`http://localhost:58884/api/book?Title=${Title}`)
  }
  getBookByAuthor(Author:any):Observable<any>{
    return this.http.get<any>(`http://localhost:58884/api/book?Author=${Author}`)
  }
  getBookByISBN(ISBN:any):Observable<any>{
    return this.http.get<any>(`http://localhost:58884/api/book?ISBN=${ISBN}`)
  }
  addbook(book:any):Observable<any>{
    return this.http.post<any>(`http://localhost:58884/api/book`,book)
  }
  updatebook(BookId:any,book:any):Observable<any>{
    return this.http.put<any>(`http://localhost:58884/api/book?BookId=${BookId}`,book)
  }
  deletebook(BookId:any):Observable<any>{
    return this.http.delete<any>(`http://localhost:58884/api/book?BookId=${BookId}`)
  }
}
