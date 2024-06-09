import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryDto } from 'src/app/dto/CategoryDto.model';
import { UserDto } from 'src/app/dto/UserDto.model';
import { UserStorageService } from 'src/app/storage/user-storage.service';
import { UserService } from 'src/app/user/service/user.service';

@Component({
  selector: 'app-layout-app',
  templateUrl: './layout-app.component.html',
  styleUrls: ['./layout-app.component.css']
})
export class LayoutAppComponent {
  cartCount: number = 0;
  products: any[] = [];
  panelOpenState = false;
  productName:string='';
  userDto:UserDto;
  isUserLoggedIn:boolean=UserStorageService.isUserLogggedIn();
  isAdminLoggedIn:boolean=UserStorageService.isUserLogggedIn();
  categoryDto: CategoryDto[] = [];
  constructor(private userService: UserService,
    private router: Router) {
      this.userDto=new UserDto();
  }
  ngOnInit(): void {
    this.getAllProduct();
    this.getAllCategory();
    this.getCartCount();
    this.getCurrentUser();
    this.router.events.subscribe(event=>{
      this.isUserLoggedIn=UserStorageService.isUserLogggedIn();
    });
    this.router.events.subscribe(event=>{
      this.isAdminLoggedIn=UserStorageService.isAdminLogggedIn();
    });
  }
  getAllProduct(): void {
    this.products = [];
    this.userService.getAllProducts().subscribe(res => {
      res.forEach((element: any) => {
        this.products.push(element);
      });
    });
  };
  getAllCategory() {
    this.userService.getAllCategory().subscribe((res) => {
      this.categoryDto = res;
    })
  };
  getProductByCategory(id: number) {
    this.userService.getAllProductByCategory(id).subscribe((res) => {
      this.products = res;
    })
  };
  checkUser(){
    if(this.isUserLoggedIn){
      this.router.navigateByUrl('userCart');
    }
    else{
      if(this.isAdminLoggedIn){
        this.router.navigateByUrl('login');
      }
      else{
        this.router.navigateByUrl('login');
      }
      this.router.navigateByUrl('login');
    }
  }
  logout(){
    this.userService.logout().subscribe((res)=>{
      UserStorageService.signOut();
      this.router.navigateByUrl('login');
    })
  };
  getCurrentUser(){
    this.userService.getCurrentUser().subscribe((res)=>{
        this.userDto=res;
        console.log(res);
    })
  }
  getCartCount(){
    this.userService.getCartCountItem().subscribe((res:number)=>{
       this.cartCount = res;
       console.log(res);
    })
  }
  searchProductName(){
    this.userService.getProductBySearchLikeName(this.productName).subscribe((res)=>{
      this.products=res;
      console.log(res);
    })
  }
}
