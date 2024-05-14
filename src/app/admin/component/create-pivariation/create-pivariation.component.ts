import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductDto } from 'src/app/dto/ProductDto.model';
import { ProductItemDto } from 'src/app/dto/ProductItemDto.model';
import { VariationDto } from 'src/app/dto/VariationDto.model';
import { VariationOptionDto } from 'src/app/dto/VariationOption.model';
import { ProductItemVariationDto } from 'src/app/dto/ProductItemVariationDto.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-pivariation',
  templateUrl: './create-pivariation.component.html',
  styleUrls: ['./create-pivariation.component.css']
})
export class CreatePIVariationComponent {
  updatequantityForm!:FormGroup;
  id:any;
  panelOpenState = false;
  
productItemDto:ProductItemDto;
  productDto:ProductDto;
  listVariationOptionId:any[]=[];
  variationOptionId:any;
 
  listproductItemVariationOption:ProductItemVariationDto[]=[];
productItemVariationOption:ProductItemVariationDto;
updateProductItemVariation:ProductItemVariationDto;
  listVariation:VariationDto[]=[];
  listProductItemVariationOptionByProductItem:ProductItemVariationDto[]=[];
  listVariationOptionWithSizeByProductItem:VariationOptionDto[]=[];
  listVariationOptionByProduct:VariationOptionDto[]=[];
  listVariationOptionWithSize:VariationOptionDto[]=[];
  constructor(private adminService:AdminService,
    private router:Router,
    private _snackBar: MatSnackBar,
    private fb :FormBuilder,
    private activeRouter:ActivatedRoute,){
     this.productDto=new ProductDto();
     this.productItemDto= new ProductItemDto();
     this.id=this.activeRouter.snapshot.params['id'];
     this.productItemVariationOption=new ProductItemVariationDto(this.id);
     this.updateProductItemVariation=new ProductItemVariationDto(this.id);
  };
  ngOnInit(){
    this.id=this.activeRouter.snapshot.params['id'];
this.getProductByProductItem();
this.getProductItem();
this.getAllVariationOptionWithSize();
this.getAllProuctItemVariationOptionByProductItem();
this.updatequantityForm=this.fb.group({
  
  quantity: ['',[Validators.required, Validators.pattern('^[0-9]*$')]]
  
});
  }
  getProductByProductItem(){
    this.id=this.activeRouter.snapshot.params['id'];
    this.adminService.getProductByProductItem(this.id).subscribe((res)=>{
      this.productDto=res;
    })
  };
 
  getProductItem(){
    this.id=this.activeRouter.snapshot.params['id'];
    this.adminService.getProductItemById(this.id).subscribe((res)=>{
      this.productItemDto=res;
      console.log(this.productItemDto);
    })
  };
addProductItemVariationOption(){
  this.adminService.addVariationOptionForProductItem(this.listproductItemVariationOption).subscribe((res)=>{
    this._snackBar.open('Xóa thành công', 'Đóng', {
      duration: 3000, // Độ dài của snack bar (milliseconds)
      horizontalPosition: 'center', // Vị trí ngang ('start' | 'center' | 'end' | 'left' | 'right')
      verticalPosition: 'bottom', // Vị trí dọc ('top' | 'bottom')
      panelClass: ['mat-snack-bar-custom'], // Các lớp CSS tùy chỉnh (optional)
    });
    this.getAllProuctItemVariationOptionByProductItem();
  },(error)=>{
    console.log(this.listproductItemVariationOption);
    this.getAllProuctItemVariationOptionByProductItem();
  })
};
getAllVariationOptionWithSize(){
  this.id=this.activeRouter.snapshot.params['id'];
  this.adminService.getAllVariationOptionWithSizeByProduct(this.id).subscribe((res)=>{
    this.listVariationOptionWithSize=res;
  });
};

onCheckboxChange(itemId:number, event:any){
  if(event.checked){
    const newProductItemVariationOption = new ProductItemVariationDto(this.id);
    newProductItemVariationOption.variationOptionId = itemId;
    this.listproductItemVariationOption.push(newProductItemVariationOption);
  }
};
getAllProuctItemVariationOptionByProductItem():void{
  this.id=this.activeRouter.snapshot.params['id'];
this.adminService.getAllProductItemVariationOptionByProductItem(this.id).subscribe((res)=>{
  this.listProductItemVariationOptionByProductItem=res;
});
};
deleteProductItemVariationOption(productItemVariationId:number){
  this.adminService.deleteProductItemVariationOption(productItemVariationId).subscribe((res)=>{
    console.log("success",res);
    location.reload();
  })
}
displayedColumns: string[] = ['productItemId','idColor','value','quantity','Thao tác'];
dataSource = this.listProductItemVariationOptionByProductItem;

updateQuantity(id:number){
  if (this.updatequantityForm.invalid) {
    return;
  }
this.adminService.updateProductItemVariatonOption(id,this.updateProductItemVariation).subscribe((res)=>{
  console.log("success",res);
  location.reload();
})
}
}
