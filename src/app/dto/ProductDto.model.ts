export class ProductDto{
     id:number;
     categoryId:number;
     productName:string;
     description:string;
     constructor(id:number,
        categoryId:number,
        productName:string,
        description:string){
            this.id=id;
            this.categoryId=categoryId;
            this.description=description;
            this.productName=productName;
        }
}