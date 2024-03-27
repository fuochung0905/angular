import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { GetAllproductComponent } from './component/get-allproduct/get-allproduct.component';
import { DetailproductComponent } from './component/detailproduct/detailproduct.component';
import { UserCartComponent } from './component/user-cart/user-cart.component';

const routes: Routes = [
  {path:'home',component:GetAllproductComponent},
  {path:'userCart',component:UserCartComponent},
  {path:'product/:id',component:DetailproductComponent},
  { path: '', component: UserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
