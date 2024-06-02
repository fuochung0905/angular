import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { UserCartDto } from 'src/app/dto/UserCartDto.model';
import { ColorSize } from 'src/app/dto/ColorSize.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExceptionCartDto } from 'src/app/dto/ExceptionCartDto.model';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent {
  carts: UserCartDto[] = [];
  exceptionCartDto:ExceptionCartDto;
  colorSize:ColorSize;
  constructor(private userService: UserService,
    private router:Router,
    private _snackBar: MatSnackBar) {
      this.exceptionCartDto= new ExceptionCartDto();
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
      console.log(res.message);
    },
    (error)=>{
      console.log(error.message);
    })
  };
  removeCart(idColor:number,idSize:number){
    this.colorSize= new ColorSize();
    this.colorSize.idColor=idSize;
    this.colorSize.variationOptionId=idColor;
    this.colorSize.quantity=1;
    this.userService.removeCart(this.colorSize).subscribe((res)=>{
     console.log("chạy vào đây");
    },
    (error)=>{
      this.getAllProduct();
    })
  };
  deleteCartById(cartId:number){
    this.userService.deleteCartDetailById(cartId).subscribe((res)=>{
      this.getAllProduct();
    })
  }
}
