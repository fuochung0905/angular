export class ProductItemVariationDto{
 productItemId:number;
     variationOptionId:number;
     constructor(productItemId:number){
        this.productItemId=productItemId;
        this.variationOptionId=0;
     }
}