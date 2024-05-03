import { Component } from '@angular/core';
import { UserCartDto } from 'src/app/dto/UserCartDto.model';
import { AdminService } from '../../service/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-cancel',
  templateUrl: './order-cancel.component.html',
  styleUrls: ['./order-cancel.component.css']
})
export class OrderCancelComponent {
  history: UserCartDto[] = [];
  selected!:boolean;
  SelectId: number | null = null;
  orders : any= {
    id:''
  };

  constructor(private adminServe: AdminService,
    private router:Router) { }
  ngOnInit(): void {
    this.getHistoryOrderTransport();
  }
  getHistoryOrderTransport(): void {
    this.adminServe.getHistoryOrderCancel().subscribe(res => {
    this.history=res;
    console.log(this.history);
    });
  };
  onCheckboxChange(id:number){
    
    if (this.SelectId = id) {
      this.orders.id=id;
     }
  }

  displayedColumns: string[] = [ 'ảnh', 'ten', 'bienthe','gia','soluong','tennguoidung','diachi'];
      dataSource = this.history;
}
