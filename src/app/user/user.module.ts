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
    NotPhoneNumberComponent
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
    MatExpansionModule
    
  ]
})
export class UserModule { }
