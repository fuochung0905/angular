export class UserCartDto{
    id:number;
     quantity:number;
     price:number;
     color:string;
     size:string;
     productName:string;
    image:string;
    constructor( id:number,
        quantity:number,
        price:number,
        color:string,
        size:string,
        productName:string,
       image:string){
        this.id=id;
        this.quantity=quantity;
        this.price=price;
        this.color=color;
        this.size=size;
        this.productName=productName;
        this.image=image;
       }
}