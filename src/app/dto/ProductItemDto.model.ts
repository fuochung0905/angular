export class ProductItemDto{
    id:number;
    qyt_stock:number;
    productItemImage:string;
     price:number;
     productId:number;
     constructor( ){
            this.id=0;
            this.price=0;
            this.productId=0;
            this.qyt_stock=0;
            this.productItemImage='';
         }
}