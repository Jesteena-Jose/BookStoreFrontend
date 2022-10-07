import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderItemService } from 'src/app/Services/order-item.service';

@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.component.html',
  styleUrls: ['./vieworder.component.css']
})
export class VieworderComponent implements OnInit {

  Id:any
  orders:any[]=[];
  imageurl="../../../../assets/images/"
  constructor(private activatedroute:ActivatedRoute,private orderitemservice:OrderItemService) {
    this.Id=this.activatedroute.snapshot.paramMap.get('Id')
    this.orderitemservice.getorderbyId(this.Id).subscribe((data)=>{
      this.orders=data;
    })
   }

  ngOnInit(): void {
  }

}
