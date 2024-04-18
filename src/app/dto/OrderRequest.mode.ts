export  class OrderRequest{
    cartid:number;
     message:string;
     constructor(cartid:number,message:string){
        this.cartid=cartid;
        this.message=message;
     }
}