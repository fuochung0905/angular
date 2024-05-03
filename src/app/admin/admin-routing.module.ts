import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PostcategoryComponent } from './component/postcategory/postcategory.component';
import { PostproductComponent } from './component/postproduct/postproduct.component';
import { PutproductComponent } from './component/putproduct/putproduct.component';
import { DetailProductComponent } from './component/detail-product/detail-product.component';

import { AddVariationComponent } from './component/add-variation/add-variation.component';
import { GetDetailCategoryComponent } from './component/get-detail-category/get-detail-category.component';
import { ProductItemComponent } from './component/product-item/product-item.component';
import { CreateVariationComponent } from './component/create-variation/create-variation.component';
import { CreateVariatioOptionComponent } from './component/create-variatio-option/create-variatio-option.component';
import { CreatePIVariationComponent } from './component/create-pivariation/create-pivariation.component';
import { OrderAllComponent } from './component/order-all/order-all.component';
import { OrderWaitAcceptComponent } from './component/order-wait-accept/order-wait-accept.component';
import { OrderTransportComponent } from './component/order-transport/order-transport.component';
import { InTransportComponent } from './component/in-transport/in-transport.component';
import { OrderCompleteComponent } from './component/order-complete/order-complete.component';
import { OrderCancelComponent } from './component/order-cancel/order-cancel.component';

const routes: Routes = [
{ path: '', component: AdminComponent ,
children:[
  {path:'add-product',component:PostproductComponent},
  {path:'add-variation/category/:id',component:CreateVariationComponent},
  {path:'add-variation-option',component:CreateVariatioOptionComponent},
  {path:'variation-option/:id',component:CreatePIVariationComponent},
  {path:'product/productItem/:id',component:ProductItemComponent},
  {path:'product/:id',component:DetailProductComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'add-category',component:PostcategoryComponent},
  {path:'list-product',component:PutproductComponent},
  {path:'variationproduct/:id',component:AddVariationComponent},
  {path:'category/:id',component:GetDetailCategoryComponent},
  {path:'orderAll',component:OrderAllComponent},
  {path:'order-wait-accept',component:OrderWaitAcceptComponent},
  {path:'order-wait-transport',component:OrderTransportComponent},
  {path:'order-in-transport',component:InTransportComponent},
  {path:'order-complete',component:OrderCompleteComponent},
  {path:'order-cancle',component:OrderCancelComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
