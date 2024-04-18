export class ProductItemDto{
    id:number;
    qyt_stock:number;
    productItemImage:string;
     price:number;
     productId:number;
     constructor( id:number,
        qyt_stock:number,
        productItemImage:string,
         price:number,
         productId:number){
            this.id=id;
            this.price=price;
            this.productId=productId;
            this.qyt_stock=qyt_stock;
            this.productItemImage=productItemImage;
         }
}