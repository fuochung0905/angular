export class OrderDto{
      id:number;
     quantity:number;
     size :string;
    color :string;
     price:number;
    addressUser:string;
   productId:number;
   constructor(){
this.id=0;
this.quantity=0;
this.size='';
this.color='';
this.price=0;
this.addressUser='';
this.productId=0;;
  }
}