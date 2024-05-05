import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryDto } from 'src/app/dto/CategoryDto.model';

@Component({
  selector: 'app-postproduct',
  templateUrl: './postproduct.component.html',
  styleUrls: ['./postproduct.component.css']
})
export class PostproductComponent {
  productForm!:FormGroup;
  listOfCategories:CategoryDto[]=[];
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
    
    });
    
    this.getAllCategories();
  };
  getAllCategories(){
    this.adminService.getAllCategories().subscribe(res=>
    {
     this.listOfCategories=res;
     console.log(this.listOfCategories);
    })
  };
  addProduct():void
  {
   
    if(this.productForm.valid){
      const formData :FormData=new FormData();
      formData.append('file',this.selectedFile);
      formData.append('categoryId',this.productForm.get('categoryId')?.value);
      formData.append('productName',this.productForm.get('productName')?.value);
      formData.append('description',this.productForm.get('description')?.value);
    
this.adminService.addProduct(formData).subscribe(
  (res)=>{
     
  },(error)=>{
    console.log(formData.append);

    this._snackBar.open('Thêm sản phẩm thành công', 'Đóng', {
      duration: 3000, // Độ dài của snack bar (milliseconds)
      horizontalPosition: 'center', // Vị trí ngang ('start' | 'center' | 'end' | 'left' | 'right')
      verticalPosition: 'bottom', // Vị trí dọc ('top' | 'bottom')
      panelClass: ['mat-snack-bar-custom'], // Các lớp CSS tùy chỉnh (optional)
    });
     this.router.navigateByUrl('admin/dashboard');
  }
)
    }
    else{
      for(const i in this.productForm.controls){
        this.productForm.controls[i].markAsDirty();
        this.productForm.controls[i].updateValueAndValidity();
      }
    }
  };
}
