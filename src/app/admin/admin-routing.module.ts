import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PostcategoryComponent } from './component/postcategory/postcategory.component';
import { PostproductComponent } from './component/postproduct/postproduct.component';
import { PutproductComponent } from './component/putproduct/putproduct.component';

const routes: Routes = [
{ path: '', component: AdminComponent },
{path:'postproduct',component:PostproductComponent},
{path:'dashboard',component:DashboardComponent},
{path:'postcategory',component:PostcategoryComponent},
{path:'putproduct',component:PutproductComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
