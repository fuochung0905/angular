import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  id :any = this.routerActive.snapshot.params['id'];
  product:any={
    productId:'',
    productName:'',
    description:'',
    importPrice:'',
    exportPrice:'',
    quantity:''


  }
  constructor(private routerActive:ActivatedRoute,
    private FB:FormBuilder,
    private adminServie:AdminService){

  }
  ngOnInit(){
    this.myForm=this.FB.group({
      categoryId:[null],
      productName:[null],
      description:[null],
      importPrice:[null],
      exportPrice:[null],
      quantity:[null]
    })
    this.getProductDetails();
  };
  addProduct(){
    
  }

  getProductDetails(): void {
    this.adminServie.getProductById(this.id)
      .subscribe((product )=> {
        product.processImage = 'data:image/jpeg;base64,' + product.byteImage;
       this.product=product;
       console.log(product);
      },
      (error)=>{
        console.log('fail',error);
      }
      );
  }

}
