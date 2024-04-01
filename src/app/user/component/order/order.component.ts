import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  selectedAddressId: any | null = null;
  diachi:any={
    id:''
  }
  selectedOrderId:any|null=null;
  dathang:any={
    cartid:'',
    message:''
  }
 
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
  constructor(private userService: UserService,
    private router:Router) { }
    
  ngOnInit(): void {
    this.getAllCart();
    this.getCurrentUser();
     this.getAddressCurretUser();
    this.getListAddresCurrentUser();
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
    this.listAddress = [];
    this.userService.getListAddresCurrentUser().subscribe(res => {
      res.forEach((element: any) => {
        this.listAddress.push(element);
      });
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
      this.address=res;
    });
  };
  getAllAddress():void{
    this.userService.getAllAddress().subscribe((res)=>{
      console.log(res);
    })
  }
  getAllCart(): void {
    this.carts = [];
    this.userService.getAllUserCart().subscribe(res => {
      res.forEach((element: any) => {
        element.proImage = 'data:image/jpeg;base64,' + element.image;
        this.carts.push(element);
      });
    });
  };
submitOrder(){
  if (this.selectedOrderId !== null) {
    this.dathang.cartid=this.selectedOrderId;
 
    this.userService.addOrder(this.dathang).subscribe(
      (res) => {
        console.log('Update success:', res.message);
       location.reload()
        // Xử lý khi service trả về kết quả thành công
      },
      (error) => {
        console.error('order error:', error);
        // Xử lý khi có lỗi từ service
      }
    );
  } else {
    console.log("No cart selected");
    // Xử lý trường hợp khi không có địa chỉ nào được chọn
  }
};
updateSelectedOrder(cartid:number){
  this.selectedOrderId=cartid;
}
  updateSelectedAddress(addressId: number) {
    // Cập nhật selectedAddressId khi người dùng chọn một địa chỉ mới
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
          // Xử lý khi service trả về kết quả thành công
        },
        (error) => {
          console.error('Update error:', error);
          // Xử lý khi có lỗi từ service
        }
      );
    } else {
      console.log("No address selected");
      // Xử lý trường hợp khi không có địa chỉ nào được chọn
    }
  };
  reloadPage() {
    this.router.navigateByUrl('user/order', { skipLocationChange: true }).then(() => {
      this.router.navigate([this.router.url]);
    });
  }
}
