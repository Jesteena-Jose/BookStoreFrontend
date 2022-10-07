import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/User/home/home.component';
import { WishlistComponent } from './Components/User/wishlist/wishlist.component';
import { AdminhomeComponent } from './Components/Admin/adminhome/adminhome.component';
import { AdminnavbarComponent } from './Components/Admin/adminnavbar/adminnavbar.component';
import { AdmincategoryComponent } from './Components/Admin/admincategory/admincategory.component';
import { AdminbookComponent } from './Components/Admin/adminbook/adminbook.component';
import { AdminuserComponent } from './Components/Admin/adminuser/adminuser.component';
import { AdminorderComponent } from './Components/Admin/adminorder/adminorder.component';
import { AdmincouponComponent } from './Components/Admin/admincoupon/admincoupon.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminloginComponent } from './Components/Admin/adminlogin/adminlogin.component';
import { AdminviewcouponComponent } from './Components/Admin/adminviewcoupon/adminviewcoupon.component';
import { NavbarComponent } from './Components/User/navbar/navbar.component';
import { BooksComponent } from './Components/User/books/books.component';
import { OrdersComponent } from './Components/User/orders/orders.component';
import { ProfileComponent } from './Components/User/profile/profile.component';
import { CartComponent } from './Components/User/cart/cart.component';
import { BookdetailComponent } from './Components/User/bookdetail/bookdetail.component';
import { RegisterComponent } from './Components/User/register/register.component';
import { LoginComponent } from './Components/User/login/login.component';
import { VieworderComponent } from './Components/User/vieworder/vieworder.component';
import { PlaceorderComponent } from './Components/User/placeorder/placeorder.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WishlistComponent,
    AdminhomeComponent,
    AdminnavbarComponent,
    AdmincategoryComponent,
    AdminbookComponent,
    AdminuserComponent,
    AdminorderComponent,
    AdmincouponComponent,
    AdminloginComponent,
    AdminviewcouponComponent,
    NavbarComponent,
    BooksComponent,
    OrdersComponent,
    ProfileComponent,
    CartComponent,
    BookdetailComponent,
    RegisterComponent,
    LoginComponent,
    VieworderComponent,
    PlaceorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
