import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { UserCartDto } from 'src/app/dto/UserCartDto.model';
import { ColorSize } from 'src/app/dto/ColorSize.model';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent {
  carts: UserCartDto[] = [];
  colorSize:ColorSize;
  constructor(private userService: UserService,
    private router:Router) {
      this.colorSize= new ColorSize();
     }
  ngOnInit(): void {
    this.getAllProduct();
  }
  getAllProduct(): void {
    
    this.userService.getAllUserCart().subscribe(res => {
      this.carts=res;
    });
  };
  addCart(idColor:number,idSize:number){
    this.colorSize= new ColorSize();
    this.colorSize.idColor=idSize;
    this.colorSize.variationOptionId=idColor;
    this.colorSize.quantity=1;

    this.userService.addCart(this.colorSize).subscribe((res)=>{
 
    },
    (error)=>{
    this.getAllProduct();
    })
  };
  removeCart(idColor:number,idSize:number){
    this.colorSize= new ColorSize();
    this.colorSize.idColor=idSize;
    this.colorSize.variationOptionId=idColor;

    this.userService.removeCart(this.colorSize).subscribe((res)=>{
    
    },
    (error)=>{
    this.getAllProduct();
    })
  };
}
