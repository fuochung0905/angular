export  class OrderRequest{
    cartid:number;
     message:string;
     paymentId:number;
     paymentTypeId:number;

     constructor(){
        this.cartid=0;
        this.message='';
        this.paymentId=0;
        this.paymentTypeId=0;

     }
}