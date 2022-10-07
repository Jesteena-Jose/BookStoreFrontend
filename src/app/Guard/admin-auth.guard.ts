import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../Services/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private route:Router,private adminservice:AdminService){}
  canActivate():boolean {
    if(this.adminservice.checkadmin()){
      return true
    }else{
      this.route.navigateByUrl('/AdminLogin')
      return false
    }
  }
  
}
