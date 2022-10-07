import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/Services/books.service';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {

  book:any={};
  Id:any
  imageurl="../../../../assets/images/"
  constructor(private bookservice:BooksService,private activatedroute:ActivatedRoute) { 
    this.Id=this.activatedroute.snapshot.paramMap.get('Id')
    this.bookservice.getBookById(this.Id).subscribe((data: any) => {
      this.book = data
      console.log(this.book)
    })
  }

  ngOnInit(): void {
  }

}
