import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { GetAllproductComponent } from './component/get-allproduct/get-allproduct.component';
import { DetailproductComponent } from './component/detailproduct/detailproduct.component';
import { FormsModule } from '@angular/forms';
import { UserCartComponent } from './component/user-cart/user-cart.component'; // Import FormsModule


@NgModule({
  declarations: [
    UserComponent,
    GetAllproductComponent,
    DetailproductComponent,
    UserCartComponent,
   
  ],
  imports: [
    CommonModule,
    UserRoutingModule, 
    FormsModule
  ]
})
export class UserModule { }
