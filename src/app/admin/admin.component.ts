import { Component } from '@angular/core';
import { UserStorageService } from '../storage/user-storage.service';
import { Router } from '@angular/router';  
import { AdminService } from './service/admin.service';

@Component({ 
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  token:any=UserStorageService.getToken;
  constructor(private router:Router,
   private adminService:AdminService){

  };
  isAdminLoggedIn:boolean=UserStorageService.isAdminLogggedIn();
  ngOninit(){
    this.router.events.subscribe(event=>{
      this.isAdminLoggedIn=UserStorageService.isAdminLogggedIn();
    })
  };
  logout():void{
   this.adminService.logout().subscribe((res)=>{
    UserStorageService.signOut();
    this.router.navigateByUrl('login');
   })
  }
}
