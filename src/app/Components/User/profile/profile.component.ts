import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ShippingAddressService } from 'src/app/Services/shipping-address.service';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = JSON.parse(localStorage.getItem('user') || '{}')
  addId = 0;
  addresses:any[]=[];

  constructor(private fb: FormBuilder,private addressservice:ShippingAddressService,private userservice:UsersService) {
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

  UpdateForm = this.fb.group({
    UserId:this.user.UserId,
    Name:[null,[Validators.required,Validators.minLength(3)]],
    Email: [null, [Validators.required, Validators.email]],
    Password: this.user.Password,
    ActiveStatus:this.user.ActiveStatus,
    PhoneNo: [null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
  })

  get Email(){
    return this.UpdateForm.get('Email')
  }
  get Name(){
    return this.UpdateForm.get('Name')
  }
  get PhoneNo(){
    return this.UpdateForm.get('PhoneNo')
  }

  handleUpdate(){
    this.UpdateForm.value.UserId=this.user.UserId
    this.UpdateForm.value.ActiveStatus=this.user.ActiveStatus
    this.UpdateForm.value.Password=this.user.Password
    this.user=this.UpdateForm.value
    console.log(this.user)
    this.userservice.updateUser(this.user.UserId,this.UpdateForm.value).subscribe((data)=>{
      console.log(data)
      this.user=this.UpdateForm.value
      localStorage.setItem('user',JSON.stringify(this.UpdateForm.value))
    })
  }

}
