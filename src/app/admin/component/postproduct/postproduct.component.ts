import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private router:Router,
    private _snackBar: MatSnackBar){

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
      categoryId: [''],
      productName: [''],
      description: [''],
      importPrice: [''],
      exportPrice: [''],
      quantity: ['']
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
      this._snackBar.open('Thêm sản phẩm thành công', 'Đóng', {
        duration: 3000, // Độ dài của snack bar (milliseconds)
        horizontalPosition: 'center', // Vị trí ngang ('start' | 'center' | 'end' | 'left' | 'right')
        verticalPosition: 'bottom', // Vị trí dọc ('top' | 'bottom')
        panelClass: ['mat-snack-bar-custom'], // Các lớp CSS tùy chỉnh (optional)
      });
      this.router.navigateByUrl('admin/dashboard');
  },
  (error)=>{
    this._snackBar.open('Thêm sản phẩm thất bại', 'Đóng', {
      duration: 3000, // Độ dài của snack bar (milliseconds)
      horizontalPosition: 'end', // Vị trí ngang ('start' | 'center' | 'end' | 'left' | 'right')
      verticalPosition: 'top', // Vị trí dọc ('top' | 'bottom')
      panelClass: ['mat-snack-bar-custom'], // Các lớp CSS tùy chỉnh (optional)
    });
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
