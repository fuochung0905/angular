import { Component } from '@angular/core';
import { UserStorageService } from '../storage/user-storage.service';
import { Router } from '@angular/router';  
import { AdminService } from './service/admin.service';
import { ElementRef } from '@angular/core';

@Component({ 
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  token:any=UserStorageService.getToken;
  panelOpenState = false;
  constructor(private router:Router,
   private adminService:AdminService, private elementRef: ElementRef){

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
  toggleSubMenu(event: Event){
    const clickedItem = (event.target as HTMLElement).closest('.item');
    if (clickedItem) {
      const subMenu = clickedItem.querySelector('.sub-menu');
      const subBtn = clickedItem.querySelector('.sub-btn');
      if (subMenu) {
        subMenu.classList.toggle('active');
      }
      if (subBtn) {
        subBtn.classList.toggle('active');
      }
    }
  }
}
