import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule } from '@angular/router';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GetAllproductComponent } from './component/get-allproduct/get-allproduct.component';
import { DetailproductComponent } from './component/detailproduct/detailproduct.component';
import { UserRoutingModule } from './user-routing.module';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

}
