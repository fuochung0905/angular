import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductDto } from 'src/app/dto/ProductDto.model';
import { ProductItemDto } from 'src/app/dto/ProductItemDto.model';
import { VariationDto } from 'src/app/dto/VariationDto.model';
import { VariationOptionDto } from 'src/app/dto/VariationOption.model';
import { ProductItemVariationDto } from 'src/app/dto/ProductItemVariationDto.model';

@Component({
  selector: 'app-create-pivariation',
  templateUrl: './create-pivariation.component.html',
  styleUrls: ['./create-pivariation.component.css']
})
export class CreatePIVariationComponent {
  id:any;
  panelOpenState = false;
productItemDto:ProductItemDto;
  productDto:ProductDto;
  listVariationOptionId:any[]=[];
  variationOptionId:any;
  listproductItemVariationOption:ProductItemVariationDto[]=[];
productItemVariationOption:ProductItemVariationDto;
  listVariation:VariationDto[]=[];
  listVariationOptionByProduct:VariationOptionDto[]=[];
  constructor(private adminService:AdminService,
    private router:Router,
    private _snackBar: MatSnackBar,
    private activeRouter:ActivatedRoute,){
     this.productDto=new ProductDto();
     this.productItemDto= new ProductItemDto();
     this.id=this.activeRouter.snapshot.params['id'];
     this.productItemVariationOption=new ProductItemVariationDto(this.id);
  };
  ngOnInit(){
    this.id=this.activeRouter.snapshot.params['id'];
this.getProductByProductItem();
this.getProductItem();
this.getAllVariationByProduct();
this.getAllVariationOptionByProduct();
  }
  getProductByProductItem(){
    this.id=this.activeRouter.snapshot.params['id'];
    this.adminService.getProductByProductItem(this.id).subscribe((res)=>{
      this.productDto=res;
    })
  };
  getAllVariationByProductItem(){
    this.adminService.getAllVariationOptionByProduct(this.id).subscribe((res)=>{

    })
  }
  getProductItem(){
    this.id=this.activeRouter.snapshot.params['id'];
    this.adminService.getProductItemById(this.id).subscribe((res)=>{
      this.productItemDto=res;
      console.log(this.productItemDto);
    })
  };
  getAllVariationByProduct(){
    this.id=this.activeRouter.snapshot.params['id'];
    this.adminService.getAllVariationByProduct(this.id).subscribe((res)=>{
      this.listVariation=res;
      console.log(this.listVariation);
    })
  };
getAllVariationOptionByProduct(){
  this.id=this.activeRouter.snapshot.params['id'];
  this.adminService.getAllVariationOptionByProduct(this.id).subscribe((res)=>{
this.listVariationOptionByProduct=res;
console.log(this.listVariationOptionByProduct);
  });
};
updateVariationOptions(event: any) {
  const selectedValue = event.value;
  if (selectedValue) {
    const newProductItemVariationOption = new ProductItemVariationDto(this.id);
    newProductItemVariationOption.variationOptionId = selectedValue;
    this.listproductItemVariationOption.push(newProductItemVariationOption);
  }
}
addProductItemVariationOption(){
  this.adminService.addVariationOptionForProductItem(this.listproductItemVariationOption).subscribe((res)=>{
    this._snackBar.open('Xóa thành công', 'Đóng', {
      duration: 3000, // Độ dài của snack bar (milliseconds)
      horizontalPosition: 'center', // Vị trí ngang ('start' | 'center' | 'end' | 'left' | 'right')
      verticalPosition: 'bottom', // Vị trí dọc ('top' | 'bottom')
      panelClass: ['mat-snack-bar-custom'], // Các lớp CSS tùy chỉnh (optional)
    });

  },(error)=>{
    console.log(this.listproductItemVariationOption);
  })
}



}
