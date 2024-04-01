import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {
  address:any={
    street:'',
    city:'',
    state:'',
    country:''
  };
  constructor(private userService:UserService,
    private router:Router){
  }
  addAddress():void{
    this.userService.addAddress(this.address).subscribe((res)=>{
      console.log('add successfully',res);
      this.router.navigateByUrl('user/order');
    })
  };
}
