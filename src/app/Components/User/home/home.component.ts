import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BooksService } from 'src/app/Services/books.service';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title:any=null;
  cat:any=null;
  isbn:any=null;
  author:any=null;
  categories:any[]=[];
  books:any[]=[];
  books2:any[]=[];
  books1:any[]=[];
  books3:any[]=[];
  books4:any[]=[];
  bookmerge1:any[]=[];
  bookmerge2:any[]=[];
  bestbooks:any[]=[];
  imageurl="../../../../assets/images/"
  constructor(private categoryservice: CategoryService,private bookservice:BooksService) { 
    this.categoryservice.getCategories().subscribe((data: any) => {
      this.categories = data
    })
    this.bookservice.getbestbooks().subscribe((data)=>{
      this.bestbooks=data
    })
  }

  ngOnInit(): void {
  }

  Search(){
    if(this.title!=null){
      this.bookservice.getBookByTitle(this.title).subscribe((data: any) => {
        this.books1=data;
      })
    }
    if(this.cat!=null){
      this.bookservice.getBookByCategory(this.cat).subscribe((data: any) => {
        this.books2=data;
      })
    }
    if(this.isbn!=null){
      this.bookservice.getBookByISBN(this.isbn).subscribe((data: any) => {
        this.books3=data;
        console.log(this.books3)
      })
    }
    if(this.author!=null){
      this.bookservice.getBookByAuthor(this.author).subscribe((data: any) => {
        this.books4=data;
      })
    }
    this.bookmerge1=this.books1.concat(this.books2);
    this.bookmerge2=this.books4.concat(this.books3);
    this.books=this.bookmerge1.concat(this.bookmerge2);
  }

  

  @ViewChild('widgetsContent', { read: ElementRef })
  public widgetsContent!: ElementRef<any>;
  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 150), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 150), behavior: 'smooth' });
  }

}
