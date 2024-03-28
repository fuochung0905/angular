import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent {
  carts: any[] = [];
  constructor(private userService: UserService,
    private router:Router) { }
  ngOnInit(): void {
    this.getAllProduct();
  }
  getAllProduct(): void {
    this.carts = [];
    this.userService.getAllUserCart().subscribe(res => {
      res.forEach((element: any) => {
        element.proImage = 'data:image/jpeg;base64,' + element.image;
        this.carts.push(element);
      });
    });
  };
}
