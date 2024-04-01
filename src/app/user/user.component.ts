import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Router, RouterModule } from '@angular/router';
import { UserStorageService } from '../storage/user-storage.service';
import { UserService } from './service/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  isUserLoggedIn:boolean=UserStorageService.isUserLogggedIn();
  constructor(private router:Router,
    private userService:UserService
   ){
  };
  ngOninit(){
    this.router.events.subscribe(event=>{
      this.isUserLoggedIn=UserStorageService.isUserLogggedIn();
    })
  };
  logout(){
    this.userService.logout().subscribe((res)=>{
      UserStorageService.signOut();
      this.router.navigateByUrl('login');
    })
    
  }
 
}
