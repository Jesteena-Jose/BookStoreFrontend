import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrls: ['./adminnavbar.component.css']
})
export class AdminnavbarComponent implements OnInit {

  loginValue:any
  constructor(private adminservice:AdminService) {
    this.loginValue = this.adminservice.checkadmin()
   }

  ngOnInit(): void {
  }
  logout() {
    this.adminservice.logout()
  }

}
