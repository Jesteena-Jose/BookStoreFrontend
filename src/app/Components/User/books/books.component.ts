import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/Services/books.service';
import { CategoryService } from 'src/app/Services/category.service';
import { UserCartService } from 'src/app/Services/user-cart.service';
import { WishlistService } from 'src/app/Services/wishlist.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books:any[]=[];
  title:any=null;
  cat:any=null;
  isbn:any=null;
  author:any=null;
  categories:any[]=[];
  books2:any[]=[];
  books1:any[]=[];
  books3:any[]=[];
  books4:any[]=[];
  bookmerge1:any[]=[];
  bookmerge2:any[]=[];
  imageurl="../../../../assets/images/"
  user=JSON.parse(localStorage.getItem('user') || '{}')
  wishlist={BookId:null,UserId:this.user.UserId}
  cart={BookId:null,UserId:this.user.UserId}
  constructor(private router:Router, private bookservice: BooksService,private categoryservice:CategoryService,private wishlistservice:WishlistService,private usercartservice:UserCartService) {
    this.bookservice.getbooks().subscribe((data: any) => {
      this.books = data
      console.log(data)
    })
    this.categoryservice.getCategories().subscribe((data:any)=>{
      this.categories=data
    })
   }

  ngOnInit(): void {
  }

  getCategoryBooks(CategoryId:any){
    this.bookservice.getBookByCategory(CategoryId).subscribe((response)=>{
      console.log(response)
      this.books=response
    });
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

  bookdetailhandler(id:any){
    console.log(id);
    this.router.navigate(['Bookdetail',id])
  }

  addWishlist(BookId:any){
    this.wishlist.BookId=BookId;
    console.log(this.wishlist);
    this.wishlistservice.addbooks(this.wishlist).subscribe((response) => {
      console.log(response)
    })
    alert("Book added to wishlist");

  }
  addCart(BookId:any){
    this.cart.BookId=BookId;
    console.log(this.cart);
    this.usercartservice.addbooks(this.cart).subscribe((response) => {
      console.log(response)
    })
    alert("Book added to Cart");

  }

}
