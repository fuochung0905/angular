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
    importPrice:'',
    exportPrice:'',
    quantity:''
  };
  id:any = this.routerActive.snapshot.params['id'];
  dto:any={
    productId:'',
    productName:'',
    description:'',
    importPrice:'',
    exportPrice:'',
    quantity:''
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
    if(!this.productUpdate.importPrice){
      this.productUpdate.importPrice=this.dto.importPrice;
    }
    if(!this.productUpdate.exportPrice){
      this.productUpdate.exportPrice=this.dto.exportPrice;
    }
    if(!this.productUpdate.quantity){
      this.productUpdate.quantity=this.dto.quantity;
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
        product.processImage = 'data:image/jpeg;base64,' + product.byteImage;
       this.dto=product;
       console.log(product);
      },
      (error)=>{
        console.log('fail',error);
      }
      );
  }
}
