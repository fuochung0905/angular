export class ProductDto{
     id:number;
     categoryId:number;
     productName:string;
     description:string;
     image:string;
     quantity:number;
     price:number;
     constructor(){
            this.id=0;
            this.categoryId=0;
            this.description='';
            this.productName='';
            this.image='';
            this.quantity=0;
            this.price=0;
        }
}