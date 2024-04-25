export class UserCartDto{
    id:number;
     quantity:number;
     price:number;
     color:string;
     size:string;
     productName:string;
    image:string;
    idColor:number;
    idSize:number;
    constructor( ){
        this.id=0;
        this.quantity=0;
        this.price=0;
        this.color='';
        this.size='';
        this.productName='';
        this.image='';
        this.idColor=0;
        this.idSize=0;
       }
}