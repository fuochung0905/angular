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
  productForm!:FormGroup;
  listOfCategories:any=[];
  selectedFile!: File | '';
  imagePreView!: String | ArrayBuffer | null ;


  constructor(private adminService:AdminService,
    private fb :FormBuilder,
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
    this.productForm=this.fb.group({
      categoryId:[null],
      productName:[null],
      description:[null],
      importPrice:[null],
      exportPrice:[null],
      quantity:[null]
    });
    
    this.getAllCategories();
  };
  getAllCategories(){
    this.adminService.getAllCategories().subscribe(res=>
    {
     this.listOfCategories=res;
    })
  };
  addProduct():void{
    if(this.productForm.valid){
      const formData :FormData=new FormData();
      formData.append('image',this.selectedFile);
      formData.append('categoryId',this.productForm.get('categoryId')?.value);
      formData.append('productName',this.productForm.get('productName')?.value);
      formData.append('description',this.productForm.get('description')?.value);
      formData.append('importPrice',this.productForm.get('importPrice')?.value);
      formData.append('exportPrice',this.productForm.get('exportPrice')?.value);
      formData.append('quantity',this.productForm.get('quantity')?.value);
this.adminService.addProduct(formData).subscribe(
  (res)=>{
      console.log('thêm thành công',res);
      this.router.navigateByUrl('admin/dashboard');
  },
  (error)=>{
    console.log('thêm thất bại',error);
  }
)
    }
    else{
      for(const i in this.productForm.controls){
        this.productForm.controls[i].markAsDirty();
        this.productForm.controls[i].updateValueAndValidity();
      }
    }
    this.adminService.addProduct(this.productForm.value).subscribe(
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
