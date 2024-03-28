import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user/service/user.service';
import { AdminService } from '../../service/admin.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {
  myForm!:FormGroup;
  productId: any;
  productUpdate:any={
    productName:'',
    description:'',
    importPrice:'',
    exportPrice:'',
    quantity:''
  };
  id:any = this.routerActive.snapshot.params['id'];
  productDto:any={
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
    this.adminServie.updateProduct(this.id, this.productUpdate)
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
       this.productDto=product;
       console.log(product);
      },
      (error)=>{
        console.log('fail',error);
      }
      );
  }

}
