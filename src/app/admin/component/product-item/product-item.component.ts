import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { VariationDto } from 'src/app/dto/VariationDto.model';
import { VariationOptionDto } from 'src/app/dto/VariationOption.model';
import { ProductItemDto } from 'src/app/dto/ProductItemDto.model';

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
 
  listVariationOptionId:any[]=[];
 listVariationOption:VariationOptionDto[]=[];
  listProductItem:ProductItemDto[]=[];
  idColor:any;

 
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
    this.id=this.activeRouter.snapshot.params['id'];
    this.getAllVariationOptionWithColorByProduct();
    this.productItemForm=this.fb.group({
      productId: [''],
      // qyt_stock: ['',[Validators.required, Validators.pattern('^[0-9]*$')]],
      price: ['',[Validators.required, Validators.pattern('^[0-9]*$')]],
      idColor:['']
    });

    this.getAllProductItemByProduct();
  };

getAllProductItemByProduct(){
  this.id=this.activeRouter.snapshot.params['id'];
  this.adminService.getAllProductItemByProduct(this.id).subscribe((res)=>{
this.listProductItem=res;
  });
};
updateVariationOptions(event: any) {
  const selectedValue = event.value;
 this.idColor=selectedValue;
}

  addProduct():void{
    if (this.productItemForm.invalid) {
      return;
    }
    if(this.productItemForm.valid){
      const formData :FormData=new FormData();
      formData.append('file',this.selectedFile);
      formData.append('productId',this.id);
      // formData.append('qyt_stock',this.productItemForm.get('qyt_stock')?.value);
      formData.append('price',this.productItemForm.get('price')?.value);
      formData.append('idColor',this.idColor);
this.adminService.addProductItem(formData).subscribe(
  (res)=>{
     
  },(error)=>{
   console.log(this.listVariationOptionId);
    this._snackBar.open('Thêm sản phẩm thành công', 'Đóng', {
      duration: 3000, // Độ dài của snack bar (milliseconds)
      horizontalPosition: 'center', // Vị trí ngang ('start' | 'center' | 'end' | 'left' | 'right')
      verticalPosition: 'bottom', // Vị trí dọc ('top' | 'bottom')
      panelClass: ['mat-snack-bar-custom'], // Các lớp CSS tùy chỉnh (optional)
    });
    this.getAllProductItemByProduct();
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
  getAllVariationOptionWithColorByProduct(){
    this.id=this.activeRouter.snapshot.params['id'];
    this.adminService.getAllVariationOptionWithColorByProduct(this.id).subscribe((res)=>{
      this.listVariationOption=res;
    });
  };
  deleteProductItem(id:number){
    this.adminService.deleteProductItem(id).subscribe((res)=>{
      this.getAllProductItemByProduct();
    })
  }
  pageVariationOption(){
    this.router.navigateByUrl("/admin/add-variation-option");
  }
  displayedColumns: string[] = ['avatar','gia','soluong','mausac','Thao tác'];
  dataSource = this.listProductItem;
}
