import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, RouteConfigLoadEnd, Router } from '@angular/router';
import { AdminService } from '../../service/admin.service';
import { ProductItemDto } from 'src/app/dto/ProductItemDto.model';

@Component({
  selector: 'app-detail-product-item',
  templateUrl: './detail-product-item.component.html',
  styleUrls: ['./detail-product-item.component.css']
})
export class DetailProductItemComponent {
  detailProductItemForm:any={
    price:'',
   
  };
  capnhatProductItem:ProductItemDto;
id:any=this.activeRouter.snapshot.params['id'];
productItemDto:ProductItemDto;

constructor(
  private adminService : AdminService,
  private router : Router,
  private fb : FormBuilder,

  private activeRouter : ActivatedRoute,) {
    this.productItemDto = new ProductItemDto();
   this.capnhatProductItem= new ProductItemDto();
}

ngOnInit(){
  this.id = this.activeRouter.snapshot.params['id'];
  this.getDetailProductItem();
  this.detailProductItemForm = this.fb.group({
    price: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
  })
}

getDetailProductItem(){
  this.id = this.activeRouter.snapshot.params['id'];
  this.adminService.getProductItemDetail(this.id).subscribe(
    (res) => {
      this.productItemDto = res;
      console.log(res);
    },
    (error)=>{
      this.productItemDto = error;
      console.log(error);
    }
  
  )
}
updateProduct(){
  if(this.detailProductItemForm.invalid){
    return ;
  }
  if(!this.detailProductItemForm.price){
    this.detailProductItemForm.price=this.productItemDto.price;
  }
 
  this.adminService.updateProductItem(this.id, this.capnhatProductItem)
    .subscribe(
      response => {
       this.router.navigateByUrl('/admin/list-product')
      },
      error => {
        console.error('Error updating data:', error);
        // Xử lý lỗi nếu có
      }
    );
}
}
