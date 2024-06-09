import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

import { UserCartComponent } from './component/user-cart/user-cart.component';
import { OrderComponent } from './component/order/order.component';
import { AddressComponent } from './component/address/address.component';
import { HistoryOrderComponent } from './component/history-order/history-order.component';
import { UpdateUserComponent } from './component/update-user/update-user.component';
import { ReviewProductComponent } from './component/review-product/review-product.component';
import { DetailOrderComponent } from './component/detail-order/detail-order.component';
import { PaymentSuccessfullyComponent } from './component/payment-successfully/payment-successfully.component';
import { OrderSuccessComponent } from './component/order-success/order-success.component';

const routes: Routes = [
  {path:'',component:UserComponent,
children:[
  {path:'address',component:AddressComponent},
  {path:'userCart',component:UserCartComponent},
  {path:'order',component:OrderComponent},
  {path:'historyOrder',component:HistoryOrderComponent},
  {path:'userInfor',component:UpdateUserComponent},
  {path:'reviewProduct/:id',component:ReviewProductComponent},
  {path:'detailOrder/:id',component:DetailOrderComponent},
  {path:'paymentSuccessfully',component:PaymentSuccessfullyComponent},
  {path:'order-success',component:OrderSuccessComponent}
]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
