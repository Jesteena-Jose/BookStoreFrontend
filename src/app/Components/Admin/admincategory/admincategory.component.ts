import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-admincategory',
  templateUrl: './admincategory.component.html',
  styleUrls: ['./admincategory.component.css']
})
export class AdmincategoryComponent implements OnInit {

  imageurl="../../../../assets/images/"
  categories: any[] = [];
  CatId=0;

  constructor(private categoryservice: CategoryService, private router: Router, private fb: FormBuilder) {
    this.categoryservice.getCategories().subscribe((data: any) => {
      this.categories = data
    })
  }

  CategoryForm = this.fb.group({
    categoryName:null,
    image: null,
    status: null,
    position: null,
    description: null
  })

  get categoryName() {
    return this.CategoryForm.get('categoryName')
  }

  get image() {
    return this.CategoryForm.get('image')
  }

  get status() {
    return this.CategoryForm.get('status')
  }

  get position() {
    return this.CategoryForm.get('position')
  }
  get description() {
    return this.CategoryForm.get('description')
  }

  ngOnInit(): void {
  }
  public navigateToSection(section: string,Id:any) {
    this.CatId=Id;
    window.location.hash = '';
    window.location.hash = section;
  }

  onFormAdd(){
    this.categoryservice.addcategory(this.CategoryForm.value).subscribe(
      (response)=>
      {
      console.log(response)
      this.categoryservice.getCategories().subscribe((data: any) => {
        this.categories = data
      });
      this.navigateToSection('',0);
      });
  }

  onFormEdit(CategoryId:any){
    this.categoryservice.editcategory(CategoryId,this.CategoryForm.value).subscribe(
      (response)=>
      {
      console.log(response)
      this.categoryservice.getCategories().subscribe((data: any) => {
        this.categories = data
      });
      this.navigateToSection('',0)
      }
    );
  }

  deleteCategory(CategoryId:any){
    this.categoryservice.deletecategory(CategoryId).subscribe((response)=>{
      console.log(response)
      this.categoryservice.getCategories().subscribe((data: any) => {
        this.categories = data
      });
    });
    
  }

}
