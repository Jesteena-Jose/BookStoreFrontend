import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './Components/Admin/adminhome/adminhome.component';
import { AdmincategoryComponent } from './Components/Admin/admincategory/admincategory.component';
import { AdminbookComponent } from './Components/Admin/adminbook/adminbook.component';
import { AdminorderComponent } from './Components/Admin/adminorder/adminorder.component';
import { AdmincouponComponent } from './Components/Admin/admincoupon/admincoupon.component';
import { AdminuserComponent } from './Components/Admin/adminuser/adminuser.component';
import { AdminviewcouponComponent } from './Components/Admin/adminviewcoupon/adminviewcoupon.component';
import { AdminloginComponent } from './Components/Admin/adminlogin/adminlogin.component';
import { HomeComponent } from './Components/User/home/home.component';
import { BooksComponent } from './Components/User/books/books.component';
import { OrdersComponent } from './Components/User/orders/orders.component';
import { ProfileComponent } from './Components/User/profile/profile.component';
import { WishlistComponent } from './Components/User/wishlist/wishlist.component';
import { CartComponent } from './Components/User/cart/cart.component';
import { BookdetailComponent } from './Components/User/bookdetail/bookdetail.component';
import { RegisterComponent } from './Components/User/register/register.component';
import { LoginComponent } from './Components/User/login/login.component';
import { VieworderComponent } from './Components/User/vieworder/vieworder.component';
import { PlaceorderComponent } from './Components/User/placeorder/placeorder.component';
import { AuthGuard } from './Guard/auth.guard';
import { AdminAuthGuard } from './Guard/admin-auth.guard';

const routes:Routes=[
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Adminhome',component:AdminhomeComponent},
  {path:'Admincategory',component:AdmincategoryComponent,canActivate:[AdminAuthGuard]},
  {path:'Adminbook',component:AdminbookComponent,canActivate:[AdminAuthGuard]},
  {path:'Adminuser',component:AdminuserComponent,canActivate:[AdminAuthGuard]},
  {path:'Adminorder',component:AdminorderComponent,canActivate:[AdminAuthGuard]},
  {path:'Admincoupon',component:AdmincouponComponent,canActivate:[AdminAuthGuard]},
  {path:'Adminviewcoupon',component:AdminviewcouponComponent,canActivate:[AdminAuthGuard]},
  {path:'AdminLogin',component:AdminloginComponent},
  {path:'Home',component:HomeComponent},
  {path:'Books',component:BooksComponent,canActivate:[AuthGuard]},
  {path:'Order',component:OrdersComponent,canActivate:[AuthGuard]},
  {path:'Profile',component:ProfileComponent,canActivate:[AuthGuard]},
  {path:'Wishlist',component:WishlistComponent,canActivate:[AuthGuard]},
  {path:'Cart',component:CartComponent,canActivate:[AuthGuard]},
  {path:'Bookdetail/:Id',component:BookdetailComponent,canActivate:[AuthGuard]},
  {path:'Register',component:RegisterComponent},
  {path:'Login',component:LoginComponent},
  {path:'ViewOrder/:Id',component:VieworderComponent,canActivate:[AuthGuard]},
  {path:'Placeorder',component:PlaceorderComponent,canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
