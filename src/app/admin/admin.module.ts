import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PostcategoryComponent } from './component/postcategory/postcategory.component';
import {  RouterModule } from '@angular/router';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostproductComponent } from './component/postproduct/postproduct.component';
import { PutproductComponent } from './component/putproduct/putproduct.component';
import { DetailProductComponent } from './component/detail-product/detail-product.component';
import { AddVariationComponent } from './component/add-variation/add-variation.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { GetDetailCategoryComponent } from './component/get-detail-category/get-detail-category.component';
import { ProductItemComponent } from './component/product-item/product-item.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { CreateVariationComponent } from './component/create-variation/create-variation.component';
import { CreateVariatioOptionComponent } from './component/create-variatio-option/create-variatio-option.component';
import { CreatePIVariationComponent } from './component/create-pivariation/create-pivariation.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { OrderAllComponent } from './component/order-all/order-all.component';
import { OrderWaitAcceptComponent } from './component/order-wait-accept/order-wait-accept.component';
import { OrderAcceptComponent } from './component/order-accept/order-accept.component';
import { OrderTransportComponent } from './component/order-transport/order-transport.component';
import { OrderCompleteComponent } from './component/order-complete/order-complete.component';
import { OrderCancelComponent } from './component/order-cancel/order-cancel.component';
import { InTransportComponent } from './component/in-transport/in-transport.component';
import { UserInformationComponent } from './component/user-information/user-information.component';
import { DetailUserComponent } from './component/detail-user/detail-user.component';
import { HistoryUserOrderComponent } from './component/history-user-order/history-user-order.component';
import { PaymentComponent } from './component/payment/payment.component';
import { PaymentTypeComponent } from './component/payment-type/payment-type.component';
import { DetailOrderComponent } from './component/detail-order/detail-order.component';
import { DetailProductItemComponent } from './component/detail-product-item/detail-product-item.component';
import { DialogExistsComponent } from './component/dialog-exists/dialog-exists.component';



@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    PostcategoryComponent,
    PostproductComponent,
    PutproductComponent,
    DetailProductComponent,

    AddVariationComponent,
    GetDetailCategoryComponent,
    ProductItemComponent,
    CreateVariationComponent,
    CreateVariatioOptionComponent,
    CreatePIVariationComponent,
    OrderAllComponent,
    OrderWaitAcceptComponent,
    OrderAcceptComponent,
    OrderTransportComponent,
    OrderCompleteComponent,
    OrderCancelComponent,
    InTransportComponent,
    UserInformationComponent,
    DetailUserComponent,
    HistoryUserOrderComponent,
    PaymentComponent,
    PaymentTypeComponent,
    DetailOrderComponent,
    DetailProductItemComponent,
    DialogExistsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule  ,
    MatAutocompleteModule,
    CdkTreeModule,
    MatTableModule,
    CdkTableModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatExpansionModule,
    MatCheckboxModule,
  ]
})
export class AdminModule { }
