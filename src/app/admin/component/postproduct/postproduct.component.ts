import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-postproduct',
  templateUrl: './postproduct.component.html',
  styleUrls: ['./postproduct.component.css']
})
export class PostproductComponent {

  listOfCategories:any=[];
  selectedFile: File | null | undefined;
  imagePreView: String | ArrayBuffer | null | undefined;

  productDto:any={
    categoryId:'',
    productName:'',
    description:'',
    importPrice:'',
    exportPrice:'',
    quantity:'',
    image:null

  };
  constructor(private adminService:AdminService,
    private router:Router){

  };
onFileSelected(event:any){
  this.selectedFile=event.target.files[0];
  this.PreViewImage();

};
PreViewImage(){
  if (this.selectedFile) {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreView = reader.result;
    };
    reader.readAsDataURL(this.selectedFile);
  }
};
  ngOnInit(){
    this.getAllCategories();
  };
  getAllCategories(){
    this.adminService.getAllCategories().subscribe(res=>
    {
     this.listOfCategories=res;
    })
  };
  addProduct(){
    this.productDto.image=this.selectedFile;
    this.adminService.addProduct(this.productDto).subscribe(
      (response) => {
        console.log('Product added successfully:', response);
        // Reset the form after successfully adding the product
       this.router.navigateByUrl('admin/dashboard');
      },
      (error) => {
        console.error('Failed to add product:', error);
      }
    );
  };
}
