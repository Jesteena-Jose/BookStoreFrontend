import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../Services/admin.service';
import { UsersService } from '../Services/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private usersservice:UsersService,private route:Router){}
  canActivate():boolean {
    if(this.usersservice.checktoken()){
      return true
    }else{
      this.route.navigateByUrl('/Login')
      return false
    }
  }
 
  
}
