export class ProductItemVariationDto{
 productItemId:number;
     variationOptionId:number;
     constructor(productItemId:number,variationOptionId:number){
        this.productItemId=productItemId;
        this.variationOptionId=variationOptionId;
     }
}