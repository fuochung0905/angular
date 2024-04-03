import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PostcategoryComponent } from './component/postcategory/postcategory.component';
import { PostproductComponent } from './component/postproduct/postproduct.component';
import { PutproductComponent } from './component/putproduct/putproduct.component';
import { DetailProductComponent } from './component/detail-product/detail-product.component';
import { VariationComponent } from './component/variation/variation.component';
import { AddVariationComponent } from './component/add-variation/add-variation.component';

const routes: Routes = [
{ path: '', component: AdminComponent ,
children:[
  {path:'postproduct',component:PostproductComponent},
  {path:'product/:id',component:DetailProductComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'postcategory',component:PostcategoryComponent},
  {path:'list-product',component:PutproductComponent},
  {path:'createvariation',component:VariationComponent},
  {path:'variationproduct/:id',component:AddVariationComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
