import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserCartDto } from 'src/app/dto/UserCartDto.model';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-order-all',
  templateUrl: './order-all.component.html',
  styleUrls: ['./order-all.component.css']
})
export class OrderAllComponent {
[x: string]: any;
  history: UserCartDto[] = [];
  constructor(private adminServe: AdminService,
    private router:Router) { }
    ngOnInit(): void {
      this.getHistoryOrder();
    }
      getHistoryOrder(): void {
        this.adminServe.getHistoryOrder().subscribe(res => {
        this.history=res;
        console.log(this.history);
        });
      };
      onCheckboxChange(id:number,event:any){
        
      }
      displayedColumns: string[] = [ 'ảnh', 'ten', 'bienthe','gia','soluong','tennguoidung','diachi','thanhtoan','thaotac'];
      dataSource = this.history;
  
    }

