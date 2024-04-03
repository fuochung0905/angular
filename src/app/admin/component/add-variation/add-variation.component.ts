import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-add-variation',
  templateUrl: './add-variation.component.html',
  styleUrls: ['./add-variation.component.css']
})
export class AddVariationComponent  {
   productIdString: string = this.routerActive.snapshot.params['id'];
  selectedVariationId: any | null = null;
  productVariation: { productId: number | null, variationId: number |null } = {
    productId: null,
    variationId: null
};
   size:any='size';
   color:any='color';
   isAdded:boolean=true;
   
  variationsByCategory!: any[];
  variationsByProduct!:any[];
  id:any = this.routerActive.snapshot.params['id'];
  constructor(private router:ActivatedRoute,
    private routerActive:ActivatedRoute,
    private adminService: AdminService) { 
    }
    ngOnInit(){
     this.getAllVariationCategory();
     this.getAllVariationProduct();
    };
  
  
    updateSelectedVariation(variationId:number){
      this.selectedVariationId=variationId;
    }
   
    getAllVariationCategory(): void {
      this.variationsByCategory = [];
      this.adminService.getAllVariationCategory(this.id).subscribe(res => {
        res.forEach((element: any) => {
          this.variationsByCategory.push(element);
          console.log(this.variationsByCategory);
        });
      });
    };
    getAllVariationProduct(): void {
      this.variationsByProduct = [];
      this.adminService.getAllVariationProduct(this.id).subscribe(res => {
        res.forEach((element: any) => {
          this.variationsByProduct.push(element);
          console.log(this.variationsByProduct);
        });
      });
    };
    addVariationProduct():void{
      this.adminService.addVariationToProduct(this.productVariation).subscribe((res)=>{
        console.log('add successfully',res);
      },
      (error)=>{
        console.log('add fail',error);
      })
    };
    isVariationInProduct(vp: any, vc: any): boolean {
      // Kiểm tra xem biến thể vp có thuộc sản phẩm vc không
      return vp.id === vc.id;
  }
  
    updateIsAddedToFalse(){
      this.isAdded=false;
    };
    updateIsAddedToTrue(){
      this.isAdded=true;
    };
    checkAndUpdateIsAddedToTrue(vari:any){
      for(let vp of this.variationsByProduct){
        if(vp.id ===vari){
          this.isAdded=true;
          break;
        }
      }
    }
    submitForm():void{
      if (this.selectedVariationId !== null) {
        this.productVariation.variationId=parseInt(this.selectedVariationId,10);
        this.productVariation.productId=parseInt(this.productIdString,10)
        this.adminService.addVariationToProduct(this.productVariation).subscribe(
          (res) => {
            console.log('Add variation to product success:', res);
            console.log(this.productVariation);
            location.reload();
            // Xử lý khi service trả về kết quả thành công
          },
          (error) => {
            console.error('Add variation to product error:', error);
            // Xử lý khi có lỗi từ service
          }
        );
      } else {
        console.log("No variation selected");
        // Xử lý trường hợp khi không có địa chỉ nào được chọn
      }
    };

    removeForm():void{
      if (this.selectedVariationId !== null) {
        this.productVariation.variationId=parseInt(this.selectedVariationId,10);
        this.productVariation.productId=parseInt(this.productIdString,10)
        this.adminService.removeVariationToProduct(this.productVariation).subscribe(
          (res) => {
            console.log('remove variation to product success:', res);
            console.log(this.productVariation);
            location.reload();
            // Xử lý khi service trả về kết quả thành công
          },
          (error) => {
            console.error('remove variation to product error:', error);
            // Xử lý khi có lỗi từ service
          }
        );
      } else {
        console.log("No variation selected");
        // Xử lý trường hợp khi không có địa chỉ nào được chọn
      }
    };
    checkVariations(id:number):boolean{
      console.log(id);
      for (let innerItem of this.variationsByProduct) {
        if (innerItem.id === id) {
          this.isAdded = true; // Nếu tìm thấy phần tử tương đương, đặt isAdded thành true và thoát vòng lặp
          break;
        }
      }
     return this.isAdded;
    }
  }

