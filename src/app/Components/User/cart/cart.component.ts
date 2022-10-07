import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserCartService } from 'src/app/Services/user-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  books: any[] = [];
  sum = 0;
  imageurl="../../../../assets/images/"
  user = JSON.parse(localStorage.getItem('user') || '{}')
  userId = this.user.UserId;
  constructor(private usercartservice: UserCartService, private router: Router) {
    this.usercartservice.getbooks(this.userId).subscribe((data: any) => {
      this.books = data
      console.log(data)
      this.books.forEach(value => {
        this.sum += value.book.Price
        // console.log(this.sum)
      });
      console.log(this.sum)
    });
  }

  ngOnInit(): void {
  }

  removecart(UserCartId: any) {
    this.usercartservice.deletebook(UserCartId).subscribe((response: any) => {
      console.log(response)
      this.usercartservice.getbooks(this.userId).subscribe((data: any) => {
        this.books = data
        console.log(data)
        this.sum=0
        this.books.forEach(value => {
          this.sum += value.book.Price
          // console.log(this.sum)
        });
        console.log(this.sum)
      });

    })
  }

  placeorder(){
    console.log(this.user.ActiveStatus)
    if(this.user.ActiveStatus=="Active"){
    this.router.navigateByUrl("Placeorder")
    }
    else{
      alert("You are currently deactivated by admin")
    }
  }

}
