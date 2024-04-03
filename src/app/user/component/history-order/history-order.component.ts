import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history-order',
  templateUrl: './history-order.component.html',
  styleUrls: ['./history-order.component.css']
})
export class HistoryOrderComponent {
  history: any[] = [];
  constructor(private userService: UserService,
    private router:Router) { }
  ngOnInit(): void {
    this.getHistoryOrder();
  }
  getHistoryOrder(): void {
    this.history = [];
    this.userService.getHistoryOrder().subscribe(res => {
      res.forEach((element: any) => {
        element.processImage = 'data:image/jpeg;base64,' + element.byteImage;
        this.history.push(element);
      });
    });
  };
}
