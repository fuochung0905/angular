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
constructor(private adminService:AdminService,
  private activeRouter:ActivatedRoute
){
  this.orderDetailDto=new OrderDetailDto();
}
ngOnInit(): void {
  this.id=this.activeRouter.snapshot.params['id'];
 this.getOrderDetailById();
}
getOrderDetailById(){
  this.id=this.activeRouter.snapshot.params['id'];
  this.adminService.getOrderDetailById(this.id).subscribe((res)=>{
    this.orderDetailDto=res;
  })
}
}
