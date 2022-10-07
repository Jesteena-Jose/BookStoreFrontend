import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/Services/books.service';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-adminbook',
  templateUrl: './adminbook.component.html',
  styleUrls: ['./adminbook.component.css']
})
export class AdminbookComponent implements OnInit {

  books: any[] = [];
  EditBookId = 0;
  categories:any[]=[];
  imageurl="../../../../assets/images/"

  constructor(private fb: FormBuilder, private bookservice: BooksService,private categoryservice:CategoryService) {
    this.bookservice.getbooks().subscribe((data: any) => {
      this.books = data
      console.log(data)
    })
    this.categoryservice.getCategories().subscribe((data:any)=>{
      this.categories=data
    })
  }

  BookForm = this.fb.group({
    CategoryId: null,
    Title: null,
    Author: null,
    ISBN: null,
    Year: null,
    Price: null,
    Description: null,
    Position: null,
    Status: null,
    Image: null
  })


  get CategoryId() {
    return this.BookForm.get('CategoryId')
  }
  get Title() {
    return this.BookForm.get('Title')
  }
  get Author() {
    return this.BookForm.get('Author')
  }
  get ISBN() {
    return this.BookForm.get('ISBN')
  }
  get Year() {
    return this.BookForm.get('Year')
  }
  get Price() {
    return this.BookForm.get('Price')
  }
  get Description() {
    return this.BookForm.get('Description')
  }
  get Position() {
    return this.BookForm.get('Position')
  }
  get Status() {
    return this.BookForm.get('Status')
  }
  get Image() {
    return this.BookForm.get('Image')
  }

  ngOnInit(): void {
  }

  public navigateToSection(section: string, bookId: any) {
    this.EditBookId = bookId;
    window.location.hash = '';
    window.location.hash = section;
  }

  onFormAdd(){
    this.bookservice.addbook(this.BookForm.value).subscribe(
      (response)=>
      {
      console.log(response)
      this.bookservice.getbooks().subscribe((data: any) => {
        this.books = data
      });
      this.navigateToSection('',0);
      });
  }

  onFormEdit(BookId:any){
    this.bookservice.updatebook(BookId,this.BookForm.value).subscribe(
      (response)=>
      {
      console.log(response)
      this.bookservice.getbooks().subscribe((data: any) => {
        this.books = data
      });
      this.navigateToSection('',0)
      }
    );
  }

  deleteBook(BookId:any){
    this.bookservice.deletebook(BookId).subscribe((response)=>{
      console.log(response)
      this.bookservice.getbooks().subscribe((data: any) => {
        this.books = data
      });
    });
    
  }

  getCategoryBooks(CategoryId:any){
    this.bookservice.getBookByCategory(CategoryId).subscribe((response)=>{
      console.log(response)
      this.books=response
    });
  }

}
