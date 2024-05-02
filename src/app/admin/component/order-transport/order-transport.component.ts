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

  [x: string]: any;
  history: UserCartDto[] = [];

  constructor(private adminServe: AdminService,
    private router:Router,
    private fb :FormBuilder,
    private _snackBar: MatSnackBar
  ) { }
  ngOnInit(): void {
    this.getHistoryOrderTransport();
  }

  getHistoryOrderTransport(): void {
    this.adminServe.getHistoryOrderTransport().subscribe(res => {
    this.history=res;
    console.log(this.history);
    });
  };
  onCheckboxChange(id:number,event:any){
    
   
  }

  displayedColumns: string[] = ['id', 'ảnh', 'ten', 'bienthe','gia','soluong','tennguoidung','diachi','thaotac'];
      dataSource = this.history;

}
