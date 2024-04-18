export class OrderDto{
      id:number;
     quantity:number;
     size :string;
    color :string;
     price:string;
    addressUser:string;
   productId:string;
   constructor(id:number,
    quantity:number,
    size :string,
   color :string,
    price:string,
   addressUser:string,
  productId:string){
this.id=id;
this.quantity=quantity;
this.size=size;
this.color=color;
this.price=price;
this.addressUser=addressUser;
this.productId=productId;
  }
}