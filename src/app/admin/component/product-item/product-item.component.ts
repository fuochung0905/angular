import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { VariationDto } from 'src/app/dto/VariationDto.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  id:any=this.activeRouter.snapshot.params['id'];
  selectedFile!: File | '';
  imagePreView!: String | ArrayBuffer | null ;
  productItemForm!:FormGroup;
  listVariation:VariationDto[]=[];
  panelOpenState = false;

  constructor(private adminService:AdminService,
    private fb :FormBuilder,
    private router:Router,
    private _snackBar: MatSnackBar,
    private activeRouter:ActivatedRoute,){
     
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
    this.productItemForm=this.fb.group({
      productId: [''],
      qyt_stock: [''],
      price: [''],
    });
    this.getAllVariationByProduct();
  };
  getAllVariationByProduct(){
    this.adminService.getAllVariationByProduct(this.id).subscribe((res)=>{
      this.listVariation=res;
    })
  }

  addProduct():void{
    if(this.productItemForm.valid){
      const formData :FormData=new FormData();
      formData.append('file',this.selectedFile);
      formData.append('productId',this.id);
      formData.append('qyt_stock',this.productItemForm.get('qyt_stock')?.value);
      formData.append('price',this.productItemForm.get('price')?.value);
this.adminService.addProductItem(formData).subscribe(
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
      for(const i in this.productItemForm.controls){
        this.productItemForm.controls[i].markAsDirty();
        this.productItemForm.controls[i].updateValueAndValidity();
      }
    }
  };
}
