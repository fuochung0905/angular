export class ProductItemVariationOptionDto{
     productItemId:number;
    idColor:number;
     variationOptionId:number;
     value:string;
   quantity:number;
     id:number;
     constructor(){
        this.id=0;
        this.idColor=0;
        this.productItemId=0;
        this.quantity=0;
        this.value='';
        this.variationOptionId=0;
     }
}