import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { GetAllproductComponent } from './component/get-allproduct/get-allproduct.component';
import { DetailproductComponent } from './component/detailproduct/detailproduct.component';
import { ShowlistproductsComponent } from './component/showlistproducts/showlistproducts.component';


@NgModule({
  declarations: [
    UserComponent,
    GetAllproductComponent,
    DetailproductComponent,
    ShowlistproductsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
