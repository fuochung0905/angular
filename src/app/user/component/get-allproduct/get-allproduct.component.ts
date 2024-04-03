import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-allproduct',
  templateUrl: './get-allproduct.component.html',
  styleUrls: ['./get-allproduct.component.css']
})
export class GetAllproductComponent implements OnInit {
  products: any[] = [];
  constructor(private userService: UserService,
    private router:Router) { }
  ngOnInit(): void { 
    this.getAllProduct();
  }
  getAllProduct(): void {
    this.products = [];
    this.userService.getAllProducts().subscribe(res => {
      res.forEach((element: any) => {
        element.processImage = 'data:image/jpeg;base64,' + element.byteImage;
        this.products.push(element);
      });
    });
  };
 
  
}
