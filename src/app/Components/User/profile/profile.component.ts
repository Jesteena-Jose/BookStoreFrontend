import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ShippingAddressService } from 'src/app/Services/shipping-address.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = JSON.parse(localStorage.getItem('user') || '{}')
  addId = 0;
  addresses:any[]=[];

  constructor(private fb: FormBuilder,private addressservice:ShippingAddressService) {
    this.addressservice.getaddress(this.user.UserId).subscribe((data: any) => {
      this.addresses = data
    });
   }

  AddressForm = this.fb.group({
    HouseNo: null,
    City: null,
    State: null,
    Country: null,
    Pincode: null,
    UserId: this.user.UserId
  })

  get HouseNo() {
    return this.AddressForm.get('HouseNo')
  }
  get City() {
    return this.AddressForm.get('City')
  }
  get State() {
    return this.AddressForm.get('State')
  }
  get Country() {
    return this.AddressForm.get('Country')
  }
  get Pincode() {
    return this.AddressForm.get('Pincode')
  }

  ngOnInit(): void {
  }

  public navigateToSection(section: string, Id: any) {
    this.addId = Id;
    window.location.hash = '';
    window.location.hash = section;
  }
  onFormAdd(){
    this.addressservice.addaddress(this.AddressForm.value).subscribe(
      (response)=>
      {
      console.log(response)
      this.addressservice.getaddress(this.user.UserId).subscribe((data: any) => {
        this.addresses = data
      });
      this.navigateToSection('',0);
      });
  }
  onFormEdit(AddressId:any){
    this.addressservice.editaddress(AddressId,this.AddressForm.value).subscribe(
      (response)=>
      {
      console.log(response)
      this.addressservice.getaddress(this.user.UserId).subscribe((data: any) => {
        this.addresses = data
      });
      this.navigateToSection('',0);
      });
  }

}
