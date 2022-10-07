import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { UsersService } from 'src/app/Services/users.service';
@Component({
  selector: 'app-adminuser',
  templateUrl: './adminuser.component.html',
  styleUrls: ['./adminuser.component.css']
})
export class AdminuserComponent implements OnInit {

  users:any[]=[];

  constructor(private fb: FormBuilder,private userservice:UsersService) { 
    this.userservice.getUsers().subscribe((data: any) => {
      this.users = data
    })
  }

  ngOnInit(): void {
  }

}
