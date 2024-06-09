import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
countOrdered!:number;
totalRevenueToday!:number;
totalRevenueOfMonth!: number;
constructor(private adminService:AdminService){

}
ngOnInit(){
  this.getCountOrdered();
  this.getTotalRevenueToday();
  const today = new Date();
  const month = today.getMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0
  const year = today.getFullYear();
  this.loadTotalRevenueOfMonth(month, year, true);
}
getTotalRevenueToday(){
  this.adminService.getTotalRevenueToday().subscribe((res)=>{
    this.totalRevenueToday=res;
    console.log(res);
  })
}
getCountOrdered(){
  this.adminService.getCountOrdered().subscribe((res)=>{
    this.countOrdered=res;
  })
}
loadTotalRevenueOfMonth(month: number, year: number, active: boolean): void {
  this.adminService.getTotalRevenueOfMonth(month, year, active)
    .subscribe(data => {
      this.totalRevenueOfMonth = data;
    });
}
}
