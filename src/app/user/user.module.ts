import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { GetAllproductComponent } from './component/get-allproduct/get-allproduct.component';
import { DetailproductComponent } from './component/detailproduct/detailproduct.component';
import { FormsModule } from '@angular/forms';
import { UserCartComponent } from './component/user-cart/user-cart.component'; // Import FormsModule
<<<<<<< HEAD
import { ShowlistproductsComponent } from './component/showlistproducts/showlistproducts.component';
=======

import { ShowlistproductsComponent } from './component/showlistproducts/showlistproducts.component';
import { OrderComponent } from './component/order/order.component';
import { AddressComponent } from './address/address.component';

>>>>>>> 816c564ed275975dceaec41dcbcf1ee17655e97c



@NgModule({
  declarations: [
    UserComponent,
    GetAllproductComponent,
    DetailproductComponent,
    UserCartComponent,
<<<<<<< HEAD
    ShowlistproductsComponent
=======
    ShowlistproductsComponent,
    
           OrderComponent,
           AddressComponent

>>>>>>> 816c564ed275975dceaec41dcbcf1ee17655e97c
  ],
  imports: [
    CommonModule,
    UserRoutingModule, 
    FormsModule
    
  ]
})
export class UserModule { }
