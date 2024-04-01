import { Component } from '@angular/core';
import { UserStorageService } from './storage/user-storage.service';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';
  isAdminLoggedIn:boolean=UserStorageService.isAdminLogggedIn();
  isUserLoggedIn:boolean=UserStorageService.isUserLogggedIn();
  token:any=UserStorageService.getToken();
  userId:string=UserStorageService.getUserId();
  user:any=UserStorageService.getUser();
  userRole:string=UserStorageService.getUserRole();
  constructor(private router:Router){
  }
  ngOninit(){
    this.router.events.subscribe(event=>{
      this.isAdminLoggedIn=UserStorageService.isAdminLogggedIn();
      this.isUserLoggedIn=UserStorageService.isUserLogggedIn();
    })
  }
}
