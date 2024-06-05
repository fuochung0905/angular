import { Component } from '@angular/core';
import { UserCartDto } from 'src/app/dto/UserCartDto.model';
import { AdminService } from '../../service/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-complete',
  templateUrl: './order-complete.component.html',
  styleUrls: ['./order-complete.component.css']
})
export class OrderCompleteComponent {
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
    this.adminServe.getHistoryOrderDelivered().subscribe(res => {
    this.history=res;
    console.log(this.history);
    });
  };
  onCheckboxChange(id:number){
    
    if (this.SelectId = id) {
      this.orders.id=id;
     }
  }

  displayedColumns: string[] = [ 'ảnh', 'ten', 'tennguoidung','thanhtoan','thaotac'];
      dataSource = this.history;
}
