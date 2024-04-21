export class ProductDto{
     id:number;
     categoryId:number;
     productName:string;
     description:string;
     constructor(){
            this.id=0;
            this.categoryId=0;
            this.description='';
            this.productName='';
        }
}