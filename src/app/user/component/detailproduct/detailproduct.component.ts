import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { VariationOptionDto } from 'src/app/dto/VariationOption.model';
import { ProductDto } from 'src/app/dto/ProductDto.model';
import { VariationDto } from 'src/app/dto/VariationDto.model';
import { ProductItemDto } from 'src/app/dto/ProductItemDto.model';
import { ProductVariationOptionDto } from 'src/app/dto/ProductVariationOptionDto.model';
import { ColorSize } from 'src/app/dto/ColorSize.model';
import { ReviewDto } from 'src/app/dto/ReviewDto.model';
import { ProductItemVariationOptionDto } from 'src/app/dto/ProductItemVariationOptionDto.model';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent {
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
    private router: Router) {
    this.id = this.route.snapshot.params['id'];
    this.colorSize = new ColorSize();
    this.product = new ProductDto();
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getProductDetails();
    this.getAllVariationOptionByProduct();
    this.getAllVairationByProduct();
    this.getAllProductItemByProduct();
    this.getAllVariationOption();
    this.getAllReviewByProduct();
    this.getRatingProductId();
  
   
  };
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
    this.colorSize.idColor = this.sizeId;
    this.colorSize.variationOptionId = this.colorId;
    this.userService.addCart(this.colorSize).subscribe((res) => {
      this.router.navigateByUrl('/order');

    },
      (error) => {
        this.router.navigateByUrl('/order');
      })
  };
  addCart(): void {
    this.colorSize = new ColorSize();
    this.colorSize.idColor = this.sizeId;
    this.colorSize.variationOptionId = this.colorId;
    this.colorSize.quantity = 1;
    this.userService.addCart(this.colorSize).subscribe((res) => {

    },
      (error) => {

      })
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


}
