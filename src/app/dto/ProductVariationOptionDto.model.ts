export class ProductVariationOptionDto{
    productId:number;
    variationOptionId:number;
    constructor(productId:number){
         this.productId=productId;
         this.variationOptionId=0;
       }
}