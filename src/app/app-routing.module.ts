import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { ShowlistproductsComponent } from './user/component/showlistproducts/showlistproducts.component';
import { LayoutAppComponent } from './component/layout-app/layout-app.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:'',component:AppComponent,
    children:[
      {path:'login',component:LoginComponent},
      {path:'',component:LayoutAppComponent},
      {path:'signup',component:SignupComponent},
    ]
  },
 
  // {path:'home',component:ShowlistproductsComponent},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
