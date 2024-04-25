import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { VariationOptionDto } from 'src/app/dto/VariationOption.model';
import { ProductDto } from 'src/app/dto/ProductDto.model';
import { VariationDto } from 'src/app/dto/VariationDto.model';
import { ProductItemDto } from 'src/app/dto/ProductItemDto.model';
import { ProductVariationOptionDto } from 'src/app/dto/ProductVariationOptionDto.model';
import { ColorSize } from 'src/app/dto/ColorSize.model';

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
  colorId!:number;
  sizeId!:number;
colorSize:ColorSize;
  selectedVariationSizeId: any | null = null;
  selectedVariationColorId: any | null = null;
   id :any = this.route.snapshot.params['id'];
  constructor(private route: ActivatedRoute ,
    private userService:UserService,
    private router:Router) {
      this.id  = this.route.snapshot.params['id'];
      this.colorSize= new ColorSize();
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
    addOrder():void{
      this.colorSize.idColor=this.sizeId;
      this.colorSize.variationOptionId=this.colorId;
      this.userService.addCart(this.colorSize).subscribe((res)=>{
       this.router.navigateByUrl('/order');

      },
      (error)=>{
        this.router.navigateByUrl('/order');
      })
    };
    addCart():void{
      this.colorSize= new ColorSize();
      this.colorSize.idColor=this.sizeId;
      this.colorSize.variationOptionId=this.colorId;
      this.colorSize.quantity=1;
      this.userService.addCart(this.colorSize).subscribe((res)=>{
          console.log('Success',res);
          console.log(this.colorSize);
      },
      (error)=>{
        console.log(this.colorSize);
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
  
    });
  };
    getAllVairationByProduct(){
      this.id=this.route.snapshot.params['id'];
      this.userService.getAllVariationProduct(this.id).subscribe((res)=>{
        this.listVariation=res;
     
      })
    };
    getAllProductItemByProduct(){
      this.id=this.route.snapshot.params['id'];
      this.userService.getUserAllProductItemByProduct(this.id).subscribe((res)=>{
      this.listProductItem=res;
    
      })
    };
   
    getAllVariationOption(){
      this.userService.getAllVariationOption().subscribe((res)=>{
      this.allVariationOption=res;
    
      })
    };
    handleRadioButtonClick(selectedValue:number){
      this.selectedVariationColorId=selectedValue;
      this.sizeId=selectedValue;
      console.log(this.sizeId);
        this.userService.getUserProductItemById(selectedValue).subscribe((res)=>{
          this.product=res;
        });
    };
    handleRadiobuttonColor(selectedValue:number){
      this.selectedVariationSizeId=selectedValue;
      this.selectedVariationColorId;
      this.colorId=selectedValue;
      console.log(this.colorId);
    this.userService.getProductClickColor(this.selectedVariationColorId,this.selectedVariationSizeId).subscribe((res)=>{
      this.product=res;
    })
    };
    

}
