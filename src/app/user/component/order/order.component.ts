import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogorderComponent } from '../dialogorder/dialogorder.component';
import { NotPhoneNumberComponent } from '../not-phone-number/not-phone-number.component';
import { DialogNotOrderComponent } from '../dialog-not-order/dialog-not-order.component';
import { PaymentDto } from 'src/app/dto/PaymentDto.model';
import { PaymentTypeDto } from 'src/app/dto/PaymentTypeDto.model';
import { OrderRequest } from 'src/app/dto/OrderRequest.mode';
import { OrderedRequest } from 'src/app/dto/OrderedRequest.model';
import { CartDetailDto } from 'src/app/dto/CartDetailDto.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  checkCartButton:boolean=false;
  checkPaymentButton:boolean=false;
  checkDeliveryButton:boolean=false;
  link:String='';
  priceDelivery!:number;
  orderedRequest:OrderedRequest;
  selectedAddressId: any | null = null;
  listpaymentType:PaymentTypeDto[]=[];
  listPayment:PaymentDto[]=[];
  cartDetailDto:CartDetailDto;
    diachi:any={
    id:''
  }

  selectedOrderId:any|null=null;
  dathang:OrderRequest;
  carts: any[] = [];
  listAddress:any[]=[];
  user:any={
    email:'',
    phoneNumber:'',
    firstName:'',
    lastName:''
  };
  isClicked: boolean = false;
  handleClick() {
    this.isClicked = !this.isClicked; // Đảo ngược trạng thái isClicked
  }
  address:any={
    street:'',
    city:'',
    state:'',
    country:''
  };
  selectedPaymentId!: number;
  selectedPaymentTypeId!:number;
  selectedDeliveryId!:number;

  constructor(private userService: UserService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private router:Router) { 
      this.dathang= new OrderRequest();
      this.orderedRequest=new OrderedRequest();
      this.cartDetailDto= new CartDetailDto();
    }
    
  ngOnInit(): void {
    this.getAllCart();
    this.getCurrentUser();
     this.getAddressCurretUser();
    this.getListAddresCurrentUser();
    this.getAllPayment();
  
  }

  
  handlePaymentSelection(selectId:number){
    this.checkPaymentButton=true;
    this.selectedPaymentId = selectId;
    console.log(this.selectedPaymentId);
    this.userService.getAllPaymentTypeByPaymentId(this.selectedPaymentId).subscribe((res)=>{
      this.listpaymentType=res;
    })
  }
  handleCartId(selectCartId:number){
    this.checkCartButton=true;
    this.dathang.cartid=selectCartId;
    this.orderedRequest.cartId=selectCartId;
    this.userService.getCartDetailById(selectCartId).subscribe(
      (res) => {
        this.cartDetailDto=res
      
      },
      (error) => {
      
      }
    );
    console.log(selectCartId);

  }
  handleDelivery(){
    this.priceDelivery=20000;
    this.checkDeliveryButton=true;
  }
  handlePaymentTypeSelection(IdSelected:number){
    this.selectedPaymentId=0;
    this.checkPaymentButton=true;
    this.selectedPaymentTypeId=IdSelected;
    this.orderedRequest.id=this.dathang.cartid;
    console.log(this.orderedRequest);
    this.userService.addPaymentOrder(this.orderedRequest).subscribe( (res) => {
        
      if(res){
        if(res==="user not address"){
          this.openDialog();
        }
        if(res==="user not phoneNumber"){
            this.openDialog2();
        }
        if(res==="not quantity"){
          this.openDialog3();
        }
      }
      this.link=res;
    },
    (error) => {
      this.link=error;
    });
  }
 
  tinhtich(so1:number,so2:number):number{
    return so1*so2;
  }
  openDialog2():void{
    const dialogRef = this.dialog.open(NotPhoneNumberComponent, {
      width: '250px',
    });


    dialogRef.afterClosed().subscribe(result => {
      if (result === 'OK') {
        this.router.navigateByUrl('/user/userInfor');
      } else {
       this.dialog.closeAll();
      }
    });
  }
  orderDetail(id:Number){
    this.router.navigateByUrl(`/admin/detailOrder/${id}`);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogorderComponent, {
      width: '250px',
    });
   

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'OK') {
        this.router.navigateByUrl('/user/address');
      } else {
       this.dialog.closeAll();
      }
    });
  }




  openDialog3(): void {
    const dialogRef = this.dialog.open(DialogNotOrderComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'OK') {
        this.router.navigateByUrl('/userCart');
      } else {
       this.dialog.closeAll();
      }
    });
  }
  
  OpenMore() {
    var elm = document.querySelector('.more-address') as HTMLElement;
    if (elm) {
      elm.style.visibility = 'visible';
      elm.style.opacity = '1';
      elm.style.right = '10%';
    } else {
      console.error('Element with class "more-address" not found');
    }
  }
  CloseMore() {
    var elm = document.querySelector('.more-address') as HTMLElement;
    if (elm) {
        elm.style.visibility = 'hidden';
        elm.style.opacity = '0';
        elm.style.right = '-100%'; // Di chuyển phần tử ra khỏi màn hình
        location.reload();
    } else {
        console.error('Element with class "more-address" not found');
    }
}
  getListAddresCurrentUser():void{
    this.userService.getListAddresCurrentUser().subscribe(res => {
   this.listAddress=res;
    });
  }

  getCurrentUser():void{
    this.userService.getCurrentUser().subscribe((res)=>{
      this.user=res;
      console.log(res);
    });
  };
  getAddressCurretUser():void{
    this.userService.getAddressCurretUser().subscribe((res)=>{
      if(res){
        // if( res.message==='User does not have an address yet'){
       
        //   this.router.navigateByUrl('/user/address');
        // }
        // else{

        // }
       this.address=res;
    
      }
      
    });
  };
  getAllPayment(){
    this.userService.getAllPayment().subscribe((res)=>{
      this.listPayment=res;
    })
  }
  getAllAddress():void{
    this.userService.getAllAddress().subscribe((res)=>{
      console.log(res);
    })
  }
  getAllCart(): void {
    this.carts = [];
    this.userService.getAllUserCart().subscribe(res => {
     this.carts=res;
    });
  };
submitOrder(){
  if (this.selectedOrderId !== null ) {
    this.dathang.cartid=this.selectedOrderId;

    this.dathang.paymentId=this.selectedPaymentId;
    if(this.selectedPaymentId==null){
      this.dathang.paymentId=0;
    }
    if(this.selectedPaymentTypeId==null){
      this.dathang.paymentTypeId=0;
    }
    this.dathang.paymentTypeId=this.selectedPaymentTypeId;
    console.log(this.dathang);
    this.userService.addOrder(this.dathang).subscribe(
      (res) => {
        
        if(res){
          if(res.message==="user not address"){
            this.openDialog();
          }
          if(res.message==="user not phoneNumber"){
              this.openDialog2();
          }
          if(res.message==="not quantity"){
            this.openDialog3();
          }
        }
      },
      (error) => {
          this.router.navigateByUrl('/user/order-success');
      }
    );
  } else {
    console.log("No cart selected");
  
  }
};
updateSelectedOrder(cartid:number){
  this.selectedOrderId=cartid;
}
  updateSelectedAddress(addressId: number) {

    this.selectedAddressId = addressId;
  };

  submitForm() {
    if (this.selectedAddressId !== null) {
      this.diachi.id=this.selectedAddressId;
      console.log(this.diachi);
      this.userService.updateAddressIsDefine(this.diachi).subscribe(
        (res) => {
          console.log('Update success:', res);
          this.reloadPage();
         
        },
        (error) => {
          console.error('Update error:', error);
        
        }
      );
    } else {
      console.log("No address selected");
 
    }
  };

  reloadPage() {
    this.router.navigateByUrl('user/order', { skipLocationChange: true }).then(() => {
      this.router.navigate([this.router.url]);
    });
  };
  displayedColumns: string[] = ['thaotac','anh','ten','phanloai','soluong','gia','tongtien'];
  dataSource = this.carts;
}
