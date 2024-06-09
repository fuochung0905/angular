import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { ColorSize } from 'src/app/dto/ColorSize.model';
import { ProductDto } from 'src/app/dto/ProductDto.model';
import { ProductItemDto } from 'src/app/dto/ProductItemDto.model';
import { ProductItemVariationOptionDto } from 'src/app/dto/ProductItemVariationOptionDto.model';
import { ReviewDto } from 'src/app/dto/ReviewDto.model';
import { UserDto } from 'src/app/dto/UserDto.model';
import { VariationDto } from 'src/app/dto/VariationDto.model';
import { VariationOptionDto } from 'src/app/dto/VariationOption.model';
import { UserStorageService } from 'src/app/storage/user-storage.service';
import { DialogNotQuantityComponent } from 'src/app/user/component/dialog-not-quantity/dialog-not-quantity.component';
import { UserService } from 'src/app/user/service/user.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {
  cartCount: number = 0;
  isUserLoggedIn:boolean=UserStorageService.isUserLogggedIn();
  isAdminLoggedIn:boolean=UserStorageService.isUserLogggedIn();
  userDto:UserDto;
  sumRating! :number;
  countReview!:number;
  listVariation: VariationDto[] = [];
  listvariationOption: VariationOptionDto[] = [];
  allVariationOption: VariationOptionDto[] = [];
  listProductItem: ProductItemDto[] = [];
  listProductItemVariationOption:ProductItemVariationOptionDto[]=[];
  product: ProductDto;
  rating!:number;
  listReviewDto: ReviewDto[] = [];
  variations: any = [];
  colorId!: number;
  showsize:boolean=false;
  sizeId!: number;
  colorSize: ColorSize;
  selectedVariationSizeId: any | null = null;
  selectedVariationColorId: any | null = null;
  id: any = this.route.snapshot.params['id'];
  renderedIds: any[] = [];
  constructor(private route: ActivatedRoute,
    private userService: UserService,
    private dialog: MatDialog,
    private router: Router) {
    this.id = this.route.snapshot.params['id'];
    this.colorSize = new ColorSize();
    this.product = new ProductDto();
    this.userDto=new UserDto();
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getProductDetails();
    this.getAllVariationOptionByProduct();
    this.getAllVairationByProduct();
    this.getAllProductItemByProduct();
    this.getAllVariationOption();
    this.getAllReviewByProduct();
    this.getCurrentUser();
    this.getCartCount();
    this.getRatingProductId();
    this.router.events.subscribe(event=>{
      this.isUserLoggedIn=UserStorageService.isUserLogggedIn();
    });
    this.router.events.subscribe(event=>{
      this.isAdminLoggedIn=UserStorageService.isAdminLogggedIn();
    });
  
   
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
  getAllReviewByProduct() {
    this.id = this.route.snapshot.params['id'];
    this.userService.getAllReviewByProduct(this.id).subscribe((res) => {
      this.listReviewDto = res;
      console.log(this.listReviewDto);
    })
  }
  isAlreadyRendered(idColor: any): boolean {
    return this.renderedIds.includes(idColor);
}

addToRendered(idColor: any): void {
    this.renderedIds.push(idColor);
}
  updateSelectedVariationSize(variationId: number) {
    this.selectedVariationSizeId = variationId;
  };
  updateSelectedVariationColor(variationId: number) {
    this.selectedVariationColorId = variationId;
  }
  addOrder(): void {
    if(this.isUserLoggedIn){
      this.colorSize.idColor = this.sizeId;
      this.colorSize.variationOptionId = this.colorId;
      this.userService.addCart(this.colorSize).subscribe((res) => {
        if(res.message==='not quantity'){
          this.openDialog();
         }
         if(res.message==='Thêm thành công'){
          this.getCartCount();
          this.router.navigateByUrl('/order');
       
         }
      },
        (error) => {
          if(error.message==='not quantity'){
            this.openDialog();
           }
           if(error.message==='Thêm thành công'){
            this.getCartCount();
            this.router.navigateByUrl('/order');
           }
        })
    }
    else{
      this.router.navigateByUrl('login');
    }

  };

  addCart(): void {
    if(this.isUserLoggedIn){
      this.colorSize = new ColorSize();
      this.colorSize.idColor = this.sizeId;
      this.colorSize.variationOptionId = this.colorId;
      this.colorSize.quantity = 1;
      this.userService.addCart(this.colorSize).subscribe((res) => {
        if(res.message==='User not found'){
          this.router.navigateByUrl('login');
        }
        if(res.message==='not quantity'){
          this.openDialog();
        }
        this.getCartCount();
      },
        (error) => {
          if(error.message==='User not found'){
            this.router.navigateByUrl('login');
          }
          if(error.message==='not quantity'){
            this.openDialog();
           }
           this.getCartCount();
        })
    }
    else{
      this.router.navigateByUrl('login');
    }
    
  };

  getProductDetails(): void {
    this.userService.getProductsById(this.id).subscribe((product) => {
      this.product = product;
    },
      (error) => {
      }
    );
  };
  getAllVariationOptionByProduct() {
    this.id = this.route.snapshot.params['id'];
    this.userService.getAllVariationoPtionByProduct(this.id).subscribe((res) => {
      this.listvariationOption = res;

    });
  };
  getAllVairationByProduct() {
    this.id = this.route.snapshot.params['id'];
    this.userService.getAllVariationProduct(this.id).subscribe((res) => {
      this.listVariation = res;

    })
  };
  getAllProductItemByProduct() {
    this.id = this.route.snapshot.params['id'];
    this.userService.getUserAllProductItemByProduct(this.id).subscribe((res) => {
      this.listProductItem = res;
      console.log(res);
    })
  };

  getAllVariationOption() {
    this.userService.getAllVariationOption().subscribe((res) => {
      this.allVariationOption = res;
      console.log(res);
    })
  };
  handleRadioButtonClick(selectedValue: number) {
    this.showsize=true;
    this.selectedVariationColorId = selectedValue;
    this.sizeId = selectedValue;
    this.userService.getUserProductItemById(selectedValue).subscribe((res) => {
      this.product = res;
    });
    this.getAllProductItemVariationByProductItem();
   
    
  };

  getAllProductItemVariationByProductItem(){
    this.userService.getAllProductItemVariationOptionByProductItem(this.sizeId).subscribe((res)=>{
      this.listProductItemVariationOption=res;
      
    });
  };
  handleRadiobuttonColor(selectedValue: number) {
    this.selectedVariationSizeId = selectedValue;
    this.selectedVariationColorId;
    this.colorId = selectedValue;
  
    this.userService.getProductClickColor(this.selectedVariationColorId, this.selectedVariationSizeId).subscribe((res) => {
      this.product = res;
    })

  };
  getRatingProductId(): number {
    this.id = this.route.snapshot.params['id'];
  
    // Make both HTTP requests
    forkJoin([
      this.userService.getSumRatingByProductId(this.id),
      this.userService.getCountReviewByProductId(this.id)
    ]).subscribe(([sumRating, countReview]) => {
      // Both requests have completed, update the values and calculate rating
      this.sumRating = sumRating;
      this.countReview = countReview;
      if (this.countReview === 0) {
        this.rating = 0;
      } else {
        this.rating = this.sumRating / this.countReview;
      }
  
    });
  
    // Return the current value of this.rating, which might not be calculated yet
    return this.rating;
  }
  getCurrentUser(){
    this.userService.getCurrentUser().subscribe((res)=>{
        this.userDto=res;
    })
  }
  logout(){
    this.userService.logout().subscribe((res)=>{
      UserStorageService.signOut();
      this.router.navigateByUrl('login');
    })
  };
  getCartCount(){
    this.userService.getCartCountItem().subscribe((res:number)=>{
       this.cartCount = res;
       console.log(res);
    })
  };
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogNotQuantityComponent, {
      width: '250px',
    });
  }
}
