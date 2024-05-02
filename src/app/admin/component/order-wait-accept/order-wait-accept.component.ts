import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserCartDto } from 'src/app/dto/UserCartDto.model';
import { AdminService } from '../../service/admin.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryDto } from 'src/app/dto/CategoryDto.model';

@Component({
  selector: 'app-order-wait-accept',
  templateUrl: './order-wait-accept.component.html',
  styleUrls: ['./order-wait-accept.component.css']
})
export class OrderWaitAcceptComponent {
  [x: string]: any;
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
      this.getHistoryOrderChoxacnhan();
    }
    getHistoryOrderChoxacnhan(): void {
        this.adminServe.getHistoryOrderChoxacnhan().subscribe(res => {
        this.history=res;
        console.log(this.history);
        });
      };
     /* onCheckboxChange(id:number){
        this.SelectId = id;
       
      }*/
      onCheckboxChange(orderId: number) {
       
        if (this.SelectId = orderId) {
          console.log('Selected order ID:', orderId);
        }
        
      }


      duyetDonHang() {
      
        } 
    
      displayedColumns: string[] = ['id', 'ảnh', 'ten', 'bienthe','gia','soluong','tennguoidung','diachi','thaotac'];
      dataSource = this.history;
  }
