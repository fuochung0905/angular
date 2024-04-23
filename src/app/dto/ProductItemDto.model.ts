export class ProductItemDto{
    id:number;
    qyt_stock:number;
    image:string;
     price:number;
     productId:number;
     idColor:number;
     constructor( ){
            this.id=0;
            this.price=0;
            this.productId=0;
            this.qyt_stock=0;
            this.image='';
            this.idColor=0;
         }
}