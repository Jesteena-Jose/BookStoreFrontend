import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CouponService } from 'src/app/Services/coupon.service';
import { OrderItemService } from 'src/app/Services/order-item.service';
import { OrderService } from 'src/app/Services/order.service';
import { ShippingAddressService } from 'src/app/Services/shipping-address.service';
import { UserCartService } from 'src/app/Services/user-cart.service';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit {

  conformstatus = false;
  addressId = 0;
  date: Date = new Date();
  order = { TotalPrice: 0, OrderStatus: "Shipped", DeliveryDate: this.date, AddressId: 0, UserId: null }
  addresses: any[] = [];
  books: any[] = [];
  sum = 0;
  imageurl = "../../../../assets/images/"
  orderitem = { BookId: 0, OrderId: 0 }
  user = JSON.parse(localStorage.getItem('user') || '{}')
  userId = this.user.UserId;
  coupons:any[]=[];


  constructor(private addressservice: ShippingAddressService, private usercartservice: UserCartService, private router: Router, private orderservice: OrderService, private orderitemservice: OrderItemService,private couponservice:CouponService) {
    this.usercartservice.getbooks(this.userId).subscribe((data: any) => {
      this.books = data
      console.log(data)
      this.books.forEach(value => {
        this.sum += value.book.Price
        // console.log(this.sum)
      });
      console.log(this.sum)
    });
    this.addressservice.getaddress(this.userId).subscribe((data: any) => {
      this.addresses = data
    })
    this.couponservice.getcouponsbyuser(this.userId).subscribe((data:any)=>{
      this.coupons=data
    })

  }

  ngOnInit(): void {
  }

  placeorder() {
    if (this.addressId == 0) {
      alert("select an address")
    }
    else {
      this.date.setDate(this.date.getDate() + 7);
      console.log(this.date);
      this.order.DeliveryDate = this.date;
      this.order.TotalPrice = this.sum;
      this.order.UserId = this.userId;
      this.order.AddressId = this.addressId;
      console.log(this.order)

      this.orderservice.addorder(this.order).subscribe((data: any) => {
        console.log(data)
        this.orderitem.OrderId = data;
        this.books.forEach(value => {
          this.orderitem.BookId = value.book.BookId
          this.orderitemservice.addorderitem(this.orderitem).subscribe((data) => {
            console.log(data)
            this.books.forEach(element => {

              this.usercartservice.deletebook(element.UserCart.UserCartId).subscribe((response: any) => {
                console.log(response)
                this.usercartservice.getbooks(this.userId).subscribe((data: any) => {
                  this.books = data
                  console.log(data)
                  this.sum = 0
                  this.books.forEach(value => {
                    this.sum += value.book.Price
                    // console.log(this.sum)
                  });
                  console.log(this.sum)
                });

              })
            });
            this.router.navigateByUrl('/Order')
          })
        });
      })
    }

  }

  getdiscount(discountamount:any,couponId:any){
    this.sum-=discountamount;
    alert("Coupon Used")
    this.coupons=[];
    this.couponservice.deletecoupon(couponId).subscribe((data)=>{
      console.log(data)
    })
  }

}
