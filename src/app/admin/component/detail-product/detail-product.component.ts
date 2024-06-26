import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../service/admin.service';


@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {
  productUpdate:any={
    productName:'',
    description:'',
    exportPrice:'',
    quantity:''
  };
  id:any = this.routerActive.snapshot.params['id'];
  dto:any={
    productId:'',
    productName:'',
    description:''
  }
  constructor(private routerActive:ActivatedRoute,
    private router:Router,
    private adminServie:AdminService){

  }
  ngOnInit(){
    
    this.getProductDetails();
  };
  updateProduct(){
    if(!this.productUpdate.productName){
      this.productUpdate.productName=this.dto.productName;
    }
    if(!this.productUpdate.description){
      this.productUpdate.description=this.dto.description;
    }
    this.adminServie.updateProducts(this.id, this.productUpdate)
      .subscribe(
        response => {
          console.log('Data updated successfully:', response);
          // Cập nhật thành công, xử lý nếu cần
        },
        error => {
          console.error('Error updating data:', error);
          // Xử lý lỗi nếu có
        }
      );
  }

  getProductDetails(): void {
    this.adminServie.getProductById(this.id)
      .subscribe((product )=> {
       this.dto=product;
       console.log(product);
      },
      (error)=>{
        console.log('fail',error);
      }
      );
  };
 
}
