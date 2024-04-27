import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { UserCartDto } from 'src/app/dto/UserCartDto.model';

@Component({
  selector: 'app-history-order',
  templateUrl: './history-order.component.html',
  styleUrls: ['./history-order.component.css']
})
export class HistoryOrderComponent {
  history: UserCartDto[] = [];
  historyApproved: UserCartDto[] = [];
  historyTransport: UserCartDto[] = [];
  historyDelivered: UserCartDto[] = [];
  historyCancel: UserCartDto[] = [];
  historyChoxacnhan: UserCartDto[] = [];
  constructor(private userService: UserService,
    private router:Router) { }
  ngOnInit(): void {
    this.getHistoryOrder();
    this.getHistoryCancel();
    this.getHistoryDelivered();
    this.getHistoryOrderApproved();
    this.getHistoryChoxacnhan();
    this.getHistoryTransport();
  }
  getHistoryOrder(): void {
    this.userService.getHistoryOrder().subscribe(res => {
    this.history=res;
    console.log(this.history);
    });
  };
  tinhtich(so1:number,so2:number):number{
    return so1*so2;
  }
  getHistoryOrderApproved(){
    this.userService.getHistoryOrderApproved().subscribe(res => {
      this.historyApproved=res;
      console.log(this.history);
      });
  }
  getHistoryChoxacnhan(){
    this.userService.getHistoryOrderChoxacnhan().subscribe(res => {
      this.historyChoxacnhan=res;
      console.log(this.history);
      });
  }
  getHistoryTransport(){
    this.userService.getHistoryOrderTransport().subscribe(res => {
      this.historyTransport=res;
      console.log(this.history);
      });
  }
  getHistoryDelivered(){
    this.userService.getHistoryOrderDelivered().subscribe(res => {
      this.historyDelivered=res;
      console.log(this.history);
      });
  }
  getHistoryCancel(){
    this.userService.getHistoryOrderCancel().subscribe(res => {
      this.historyCancel=res;
      console.log(this.history);
      });
  }
 
}
