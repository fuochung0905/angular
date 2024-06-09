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
id:any=this.activeRouter.snapshot.params['id'];
productItemDto:ProductItemDto;

constructor(
  private adminService : AdminService,
  private router : Router,
  private fb : FormBuilder,
  private activeRouter : ActivatedRoute,) {
    this.productItemDto = new ProductItemDto();
};

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
  if(!this.detailProductItemForm.price){
    this.detailProductItemForm.price=this.productItemDto.price;
  }
 
  // this.adminService.updateP(this.id, this.productUpdate)
  //   .subscribe(
  //     response => {
  //       console.log('Data updated successfully:', response);
  //       // Cập nhật thành công, xử lý nếu cần
  //     },
  //     error => {
  //       console.error('Error updating data:', error);
  //       // Xử lý lỗi nếu có
  //     }
  //   );
}
}
