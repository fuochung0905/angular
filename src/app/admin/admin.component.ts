import { Component } from '@angular/core';
import { UserStorageService } from '../storage/user-storage.service';
import { Router } from '@angular/router';  
import { AdminService } from './service/admin.service';
import { ElementRef } from '@angular/core';
import { UserDto } from '../dto/UserDto.model';

@Component({ 
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  token:any=UserStorageService.getToken;
  panelOpenState = false;
  userDto :UserDto;
  constructor(private router:Router,
   private adminService:AdminService, 
   private elementRef: ElementRef){
    this.userDto= new UserDto();
  };

  isAdminLoggedIn:boolean=UserStorageService.isAdminLogggedIn();
  isSidebarCollapsed: boolean = false;

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
  ngOnInit(): void{
    this.getCurrentLogin();
    this.router.events.subscribe(event=>{
      this.isAdminLoggedIn=UserStorageService.isAdminLogggedIn();
    })
  };
  logout():void{
   this.adminService.logout().subscribe((res)=>{
    UserStorageService.signOut();
    this.router.navigateByUrl('login');
   })
  };
  getCurrentLogin(){
    this.adminService.getCurrentLogin().subscribe((res)=>{
    this.userDto=res;
    console.log(res);
    })
  };
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
