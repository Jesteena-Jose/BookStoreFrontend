import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loginValue:any
  constructor(private usersservice:UsersService) {
    this.loginValue = this.usersservice.checktoken()
   }

  ngOnInit(): void {
  }

  logout() {
    this.usersservice.logout()
  }

}
