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
  status={UserId:0,ActiveStatus:null}

  constructor(private fb: FormBuilder,private userservice:UsersService) { 
    this.userservice.getUsers().subscribe((data: any) => {
      this.users = data
    })
  }

  ngOnInit(): void {
  }

  handlestatus(UserId:any,status:any){
    this.status.UserId=UserId
    this.status.ActiveStatus=status
    this.userservice.updatestatus(this.status).subscribe((data:any)=>{
      console.log(data)
      this.userservice.getUsers().subscribe((data: any) => {
        this.users = data
      })
    })
  }

}
