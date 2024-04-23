import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { VariationOptionDto } from 'src/app/dto/VariationOption.model';
import { ProductDto } from 'src/app/dto/ProductDto.model';
import { VariationDto } from 'src/app/dto/VariationDto.model';
import { ProductItemDto } from 'src/app/dto/ProductItemDto.model';
import { ProductVariationOptionDto } from 'src/app/dto/ProductVariationOptionDto.model';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent {
  listVariation:VariationDto[]=[];
 
  listvariationOption:VariationOptionDto[]=[];
  allVariationOption:VariationOptionDto[]=[];
  listProductItem:ProductItemDto[]=[];
  product:ProductDto;
  variations:any=[];
  listProductVariationOption:ProductVariationOptionDto[]=[];
  productVariationOptionDto:ProductVariationOptionDto;

  selectedVariationSizeId: any | null = null;
  selectedVariationColorId: any | null = null;
   id :any = this.route.snapshot.params['id'];
  constructor(private route: ActivatedRoute ,
    private userService:UserService,
    private router:Router) {
      this.id  = this.route.snapshot.params['id'];
      this.productVariationOptionDto=new ProductVariationOptionDto( this.id );
  this.product= new ProductDto();
     }
     ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];
     this.getProductDetails();
   this.getAllVariationOptionByProduct();
   this.getAllVairationByProduct();
   this.getAllProductItemByProduct();
   this.getAllVariationOption();
    };
    updateSelectedVariationSize(variationId:number){
      this.selectedVariationSizeId=variationId;
    };
    updateSelectedVariationColor(variationId:number){
      this.selectedVariationColorId=variationId;
    }

    addCart():void{
      this.userService.addCart(this.listProductVariationOption).subscribe((res)=>{
          console.log('Success',res);
      },
      (error)=>{
        console.log(this.listProductVariationOption);
        console.log('Fail',error);
      })
    };

  getProductDetails(): void {
    this.userService.getProductsById(this.id)
      .subscribe((product )=> {
       this.product=product;
       console.log(product);
      },
      (error)=>{
        console.log('fail',error);
      }
      );
  };
  getAllVariationOptionByProduct(){
    this.id=this.route.snapshot.params['id'];
    this.userService.getAllVariationoPtionByProduct(this.id).subscribe((res)=>{
    this.listvariationOption=res;
    console.log(this.listvariationOption);
    });
  };
    getAllVairationByProduct(){
      this.id=this.route.snapshot.params['id'];
      this.userService.getAllVariationProduct(this.id).subscribe((res)=>{
        this.listVariation=res;
        console.log(this.allVariationOption);
      })
    };
    getAllProductItemByProduct(){
      this.id=this.route.snapshot.params['id'];
      this.userService.getUserAllProductItemByProduct(this.id).subscribe((res)=>{
      this.listProductItem=res;
      console.log(this.listProductItem);
      })
    };
    updateVariationOptions(event: any) {
      const selectedValue = event.value;
      if (selectedValue) {
        const productVariationOption = new ProductVariationOptionDto(this.id);
        productVariationOption.variationOptionId = selectedValue;
        this.listProductVariationOption.push(productVariationOption);
      }
    };
    getAllVariationOption(){
      this.userService.getAllVariationOption().subscribe((res)=>{
      this.allVariationOption=res;
      console.log(this.allVariationOption);
      })
    };
    handleRadioButtonClick(selectedValue:number){
      this.selectedVariationColorId=selectedValue;
        this.userService.getUserProductItemById(selectedValue).subscribe((res)=>{
          this.product=res;
         
        });
    };
    handleRadiobuttonColor(selectedValue:number){
      this.selectedVariationSizeId=selectedValue;
      this.selectedVariationColorId;
    this.userService.getProductClickColor(this.selectedVariationColorId,this.selectedVariationSizeId).subscribe((res)=>{
      this.product=res;
    })

    };
    

}
