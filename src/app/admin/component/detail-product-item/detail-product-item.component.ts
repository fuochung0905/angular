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
  productUpdateItem: any ={
  exportPrice: ''
};
id: any = this.activeRouter.snapshot.params['id'];

detailProductItemForm!: FormGroup;
productItemDto: ProductItemDto;
constructor(
  private adminService : AdminService,
  private router : Router,
  private fb : FormBuilder,
  private activeRouter : ActivatedRoute,) {
    this.productItemDto = new ProductItemDto();
};

ngOnInt(){
  this.id = this.activeRouter.snapshot.params['id'];
  this.getDetailProductItem();
  this.detailProductItemForm = this.fb.group({
    price: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
  })
}
// updateDetailProductItem(){
//   if(!this.productUpdateItem.exportPrice){
//     this.productUpdateItem.exportPrice = this.productItemDto.
//   }
// }
getDetailProductItem(){
  this.id = this.activeRouter.snapshot.params['id'];
  this.adminService.getProductItemDetail(this.id).subscribe(
    (res) => {
      this.productItemDto = res;
      console.log(res);
    }
  )
}
}
