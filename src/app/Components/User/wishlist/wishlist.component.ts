import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserCartService } from 'src/app/Services/user-cart.service';
import { WishlistService } from 'src/app/Services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  user=JSON.parse(localStorage.getItem('user') || '{}')
  userId=this.user.UserId;
  books:any[]=[];
  imageurl="../../../../assets/images/"
  cart={BookId:null,UserId:this.user.UserId}
  constructor(private router:Router,private wishlistservice:WishlistService,private usercartservice:UserCartService) {
    this.wishlistservice.getbooks(this.userId).subscribe((data: any) => {
      this.books = data
      console.log(data)
    })
   }

  ngOnInit(): void {
  }
  bookdetailhandler(id:any){
    console.log(id);
    this.router.navigate(['Bookdetail',id])
  }

  addCart(BookId:any){
    this.cart.BookId=BookId;
    console.log(this.cart);
    this.usercartservice.addbooks(this.cart).subscribe((response) => {
      console.log(response)
    })
    this.router.navigateByUrl('/Cart');

  }

}
