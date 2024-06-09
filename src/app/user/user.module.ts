import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { UserCartComponent } from './component/user-cart/user-cart.component'; // Import FormsModule
import { ShowlistproductsComponent } from './component/showlistproducts/showlistproducts.component';
import { OrderComponent } from './component/order/order.component';
import { AddressComponent } from './component/address/address.component';
import { HistoryOrderComponent } from './component/history-order/history-order.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogorderComponent } from './component/dialogorder/dialogorder.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { UpdateUserComponent } from './component/update-user/update-user.component';
import { ReviewProductComponent } from './component/review-product/review-product.component';
import { NotPhoneNumberComponent } from './component/not-phone-number/not-phone-number.component';
import { DialogNotQuantityComponent } from './component/dialog-not-quantity/dialog-not-quantity.component';
import { DialogNotOrderComponent } from './component/dialog-not-order/dialog-not-order.component';
import { DetailOrderComponent } from './component/detail-order/detail-order.component';
import { PaymentSuccessfullyComponent } from './component/payment-successfully/payment-successfully.component';
import { OrderSuccessComponent } from './component/order-success/order-success.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    UserComponent,
    UserCartComponent,
    ShowlistproductsComponent,
    OrderComponent,
    AddressComponent,
    HistoryOrderComponent,
    DialogorderComponent,
    UpdateUserComponent,
    ReviewProductComponent,
    NotPhoneNumberComponent,
    DialogNotQuantityComponent,
    DialogNotOrderComponent,
    DetailOrderComponent,
    PaymentSuccessfullyComponent,
    OrderSuccessComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatTableModule, 
    MatTabsModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule
    
  ]
})
export class UserModule { }
