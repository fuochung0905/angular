import { Component } from '@angular/core';
import { UserCartDto } from 'src/app/dto/UserCartDto.model';
import { AdminService } from '../../service/admin.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-in-transport',
  templateUrl: './in-transport.component.html',
  styleUrls: ['./in-transport.component.css']
})
export class InTransportComponent {
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
    this.adminServe.getHistoryOrderTransport().subscribe(res => {
    this.history=res;
    console.log(this.history);
    });
  };
  onCheckboxChange(id:number){
    if (this.SelectId = id) {
      this.orders.id=id;
     }
  };
  updateTransportToDelivered(){
    this.adminServe.updateTransportToDelivered(this.orders).subscribe((res)=>{
      this.getHistoryOrderTransport();
    },
  (error)=>{
    location.reload();
  })
  }

  displayedColumns: string[] = ['id', 'ảnh', 'ten','tennguoidung','thaotac'];
      dataSource = this.history;

}
