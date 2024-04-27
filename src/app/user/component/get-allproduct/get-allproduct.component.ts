import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { CategoryDto } from 'src/app/dto/CategoryDto.model';

@Component({
  selector: 'app-get-allproduct',
  templateUrl: './get-allproduct.component.html',
  styleUrls: ['./get-allproduct.component.css']
})
export class GetAllproductComponent implements OnInit {
  products: any[] = [];
  categoryDto:CategoryDto[]=[];
  constructor(private userService: UserService,
    private router:Router) {
    
     }
  ngOnInit(): void { 
    this.getAllProduct();
    this.getAllCategory();
  }
  getAllProduct(): void {
    this.products = [];
    this.userService.getAllProducts().subscribe(res => {
      res.forEach((element: any) => {
        this.products.push(element);
      });
    });
  };
  getAllCategory(){
    this.userService.getAllCategory().subscribe((res)=>{
this.categoryDto=res;
    })
  };
  getProductByCategory(id:number){
this.userService.getAllProductByCategory(id).subscribe((res)=>{
  this.products=res;
})
  }
 
  
}
