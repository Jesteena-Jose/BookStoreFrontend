import { Component, OnInit } from '@angular/core';
import { OrderItemService } from 'src/app/Services/order-item.service';

@Component({
  selector: 'app-adminorder',
  templateUrl: './adminorder.component.html',
  styleUrls: ['./adminorder.component.css']
})
export class AdminorderComponent implements OnInit {

  orders:any[]=[];
  constructor(private orderitemservice:OrderItemService) { 
    this.orderitemservice.getAllOrdersAdmin().subscribe((data: any) => {
      this.orders = data
      console.log(this.orders);
    })
  }

  ngOnInit(): void {
  }

}
