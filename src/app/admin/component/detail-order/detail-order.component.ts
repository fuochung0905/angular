import { Component } from '@angular/core';
import { OrderDetailDto } from 'src/app/dto/OrderDetailDto.model';
import { AdminService } from '../../service/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-order',
  templateUrl: './detail-order.component.html',
  styleUrls: ['./detail-order.component.css']
})
export class DetailOrderComponent {
  id:any;
orderDetailDto:OrderDetailDto;
orders : any= {
  id:''
};
constructor(private adminService:AdminService,
  private activeRouter:ActivatedRoute
){
  this.orderDetailDto=new OrderDetailDto();
}
ngOnInit(): void {
  this.id=this.activeRouter.snapshot.params['id'];
 this.getOrderDetailById();
}
duyetDonHang() {
  this.orders.id=this.id;
  this.adminService.updateHistoryOrderChoxacnhan(this.orders).subscribe((res)=>{
    this.getOrderDetailById();
  },
  (error)=>{
    this.getOrderDetailById();
  });
};
chuyenDenDonViVanChuyenDonHang() {
  this.orders.id=this.id;
  this.adminService.updateApprovalToTransport(this.orders).subscribe((res)=>{
    this.getOrderDetailById();
  },
  (error)=>{
    this.getOrderDetailById();
  });
};
donHangNguoiNhanDaNhan() {
  this.orders.id=this.id;
  this.adminService.updateTransportToDelivered(this.orders).subscribe((res)=>{
    this.getOrderDetailById();
  },
  (error)=>{
    this.getOrderDetailById();
  });
};
getOrderDetailById(){
  this.id=this.activeRouter.snapshot.params['id'];
  this.adminService.getOrderDetailById(this.id).subscribe((res)=>{
    this.orderDetailDto=res;
  })
}
}
