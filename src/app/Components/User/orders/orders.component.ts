import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderItemService } from 'src/app/Services/order-item.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders:any[]=[];
  imageurl="../../../../assets/images/"

  user = JSON.parse(localStorage.getItem('user') || '{}')
  userId = this.user.UserId;
  constructor(private orderitemservice:OrderItemService,private router:Router) { 
    this.orderitemservice.getallorders(this.userId).subscribe((data)=>{
      this.orders=data
    })
  }

  ngOnInit(): void {
  }
  vieworder(orderId:any){
    this.router.navigate(['ViewOrder',orderId])
  }

  newOrders(){
    this.orderitemservice.getneworders(this.userId).subscribe((data)=>{
      this.orders=data;
    })
  }
  allOrders(){
    this.orderitemservice.getallorders(this.userId).subscribe((data)=>{
      this.orders=data
    })
  }

}
