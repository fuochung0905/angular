import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { GetAllproductComponent } from './component/get-allproduct/get-allproduct.component';
import { DetailproductComponent } from './component/detailproduct/detailproduct.component';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { UserCartComponent } from './component/user-cart/user-cart.component'; // Import FormsModule
=======
import { ShowlistproductsComponent } from './component/showlistproducts/showlistproducts.component';
>>>>>>> 79e0b856e021f615957cf8bb2167be110c331f96


@NgModule({
  declarations: [
    UserComponent,
    GetAllproductComponent,
    DetailproductComponent,
<<<<<<< HEAD
    UserCartComponent,
   
=======
    ShowlistproductsComponent
>>>>>>> 79e0b856e021f615957cf8bb2167be110c331f96
  ],
  imports: [
    CommonModule,
    UserRoutingModule, 
    FormsModule
  ]
})
export class UserModule { }
