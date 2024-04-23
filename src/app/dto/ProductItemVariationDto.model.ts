export class ProductItemVariationDto{
 productItemId:number;
     variationOptionId:number;
     quantity:number;
     idColor:number;
     value:string;
     id:number;
     constructor(productItemId:number){
        this.productItemId=productItemId;
        this.variationOptionId=0;
        this.quantity=0;
        this.idColor=0;
        this.value='';
        this.id=0;
     }
}