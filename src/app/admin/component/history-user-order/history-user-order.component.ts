import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { ActivatedRoute } from '@angular/router';
import { UserCartDto } from 'src/app/dto/UserCartDto.model';

@Component({
  selector: 'app-history-user-order',
  templateUrl: './history-user-order.component.html',
  styleUrls: ['./history-user-order.component.css']
})
export class HistoryUserOrderComponent {
totalAmount!:number;
id:any;
listUserCartDto:UserCartDto[]=[];
constructor(private adminService:AdminService,
  private routerActive:ActivatedRoute
){

}
ngOnInit(){
  this.id = this.routerActive.snapshot.params['id'];
    this.getTotalAmount();
    this.getHistoryOrderByUser();
};
getTotalAmount(){
this.id = this.routerActive.snapshot.params['id'];
  this.adminService.getTotalAmountByUser(this.id).subscribe((res)=>{
    this.totalAmount=res;
    console.log(this.totalAmount)
  });
};
getHistoryOrderByUser(){
  this.id = this.routerActive.snapshot.params['id'];
  this.adminService.getHistoryOrderByUser(this.id).subscribe((res)=>{
    this.listUserCartDto=res;
  });
};
displayedColumns: string[] = [ 'ảnh', 'ten', 'bienthe','gia','soluong','thaotac'];
dataSource = this.listUserCartDto;

}
