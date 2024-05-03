import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserCartDto } from 'src/app/dto/UserCartDto.model';
import { AdminService } from '../../service/admin.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryDto } from 'src/app/dto/CategoryDto.model';

@Component({
  selector: 'app-order-transport',
  templateUrl: './order-transport.component.html',
  styleUrls: ['./order-transport.component.css']
})
export class OrderTransportComponent {
  history: UserCartDto[] = [];
  selected!:boolean;
  SelectId: number | null = null;
  orders : any= {
    id:''
  };

  constructor(private adminServe: AdminService,
    private router:Router,
    private fb :FormBuilder,
    private _snackBar: MatSnackBar
  ) { }
  ngOnInit(): void {
    this.getHistoryOrderTransport();
  }

  getHistoryOrderTransport(): void {
    this.adminServe.getHistoryOrderApproved().subscribe(res => {
    this.history=res;
    console.log(this.history);
    });
  };
  onCheckboxChange(orderId: number) {
       
    if (this.SelectId = orderId) {
     this.orders.id=orderId;
    }
    
  }
  UpdateApprovalToTransport(){
    this.adminServe.updateApprovalToTransport(this.orders).subscribe((res)=>{
      location.reload();
    },
    (error)=>{
      location.reload();
    })
  }

  displayedColumns: string[] = ['id', 'ảnh', 'ten', 'bienthe','gia','soluong','tennguoidung','diachi','thaotac'];
      dataSource = this.history;

}
