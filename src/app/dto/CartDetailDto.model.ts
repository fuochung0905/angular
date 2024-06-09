export class CartDetailDto{
    id:number;
    quantity:number;
    price:number
    productName:string;
    color:string;
    size:string;
constructor(){
  this.id=0;
  this.quantity=0;
  this.price=0;
  this.color='';
  this.size='';
  this.productName='';
}
}