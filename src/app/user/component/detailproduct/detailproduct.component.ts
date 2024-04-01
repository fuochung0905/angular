import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent {
  product:any={

  };
  cartDto:any={
    colo:'',
    size:''

  }
   id :any = this.route.snapshot.params['id'];
  constructor(private route: ActivatedRoute ,
    private userService:UserService,
    private router:Router) {
     }
     ngOnInit(): void {
     this.getProductDetails();
    }
    addCart(productId:any):void{
      this.userService.addCart(productId,this.cartDto).subscribe((res)=>{
          console.log('Success',res);
      },
      (error)=>{
        console.log('Fail',error);
      })
    }
    addOrder(productId:any):void{
      this.userService.addCart(productId,this.cartDto).subscribe((res)=>{
         this.router.navigateByUrl('user/order');
      },
      (error)=>{
        console.log('Fail',error);
      })
    }
  getProductDetails(): void {
    this.userService.getProductsById(this.id)
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
