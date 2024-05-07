import { AfterViewInit, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Router, RouterModule } from '@angular/router';
import { UserStorageService } from '../storage/user-storage.service';
import { UserService } from './service/user.service';
import { UserDto } from '../dto/UserDto.model';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements AfterViewInit{
  cartCount: number = 0;
  panelOpenState = false;
  userDto:UserDto;
  isUserLoggedIn:boolean=UserStorageService.isUserLogggedIn();
  constructor(private router:Router,
    private userService:UserService ){
      this.userDto=new UserDto();
  }
  ngOninit(){
    this.getCurrentUser();
  
    this.router.events.subscribe(event=>{
      this.isUserLoggedIn=UserStorageService.isUserLogggedIn();
    
    });
  };
  ngAfterViewInit() {
    // Gọi hàm này khi component đã được render hoàn tất
    this.getCartCount();
    this.getCurrentUser();
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
  getCurrentUser(){
    this.userService.getCurrentUser().subscribe((res)=>{
        this.userDto=res;
    
    })
  }
 
}
