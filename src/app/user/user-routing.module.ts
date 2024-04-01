import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { GetAllproductComponent } from './component/get-allproduct/get-allproduct.component';
import { DetailproductComponent } from './component/detailproduct/detailproduct.component';
import { UserCartComponent } from './component/user-cart/user-cart.component';
import { OrderComponent } from './component/order/order.component';
import { AddressComponent } from './address/address.component';

const routes: Routes = [
  {path:'',component:UserComponent,
children:[
  {path:'home',component:GetAllproductComponent},
  {path:'address',component:AddressComponent},
  {path:'userCart',component:UserCartComponent},
  {path:'order',component:OrderComponent},
  {path:'product/:id',component:DetailproductComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
