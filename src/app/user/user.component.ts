import { AfterViewInit, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Router, RouterModule } from '@angular/router';
import { UserStorageService } from '../storage/user-storage.service';
import { UserService } from './service/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements AfterViewInit{
  cartCount: number = 0;
  panelOpenState = false;
  isUserLoggedIn:boolean=UserStorageService.isUserLogggedIn();
  constructor(private router:Router,
    private userService:UserService ){
  }
  ngOninit(){
  
    this.router.events.subscribe(event=>{
      this.isUserLoggedIn=UserStorageService.isUserLogggedIn();
    
    });
  };
  ngAfterViewInit() {
    // Gọi hàm này khi component đã được render hoàn tất
    this.getCartCount();
  }
  logout(){
    this.userService.logout().subscribe((res)=>{
      UserStorageService.signOut();
      this.router.navigateByUrl('login');
    })
  };
  getCartCount(){
    this.userService.getCartCountItem().subscribe((res:number)=>{
       this.cartCount = res;
    })
  }
 
}
