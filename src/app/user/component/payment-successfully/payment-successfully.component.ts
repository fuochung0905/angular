import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { OrderRequest } from 'src/app/dto/OrderRequest.mode';

@Component({
  selector: 'app-payment-successfully',
  templateUrl: './payment-successfully.component.html',
  styleUrls: ['./payment-successfully.component.css']
})
export class PaymentSuccessfullyComponent implements OnInit{
  status!: string;
  orderRequest:OrderRequest;
  orderInfo!: string;
  totalPrice!: string;
  paymentTime!: string;
  transactionId!: string;
  deliveryId!:String;
  knownPrefix: string = 'Thanh toan hoa don :';
  remainingString!: string;

  constructor(private route: ActivatedRoute,
              private userService:UserService,
              private router:Router) { 
                this.orderRequest= new OrderRequest();

   }
  getRemainingString(fullString: string, prefix: string): string {
    if (fullString.startsWith(prefix)) {
      return fullString.slice(prefix.length);
    }
    return '';
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.status = params['status'];
      this.orderInfo = params['orderInfo'];
      this.totalPrice = params['totalPrice'];
      this.paymentTime = params['paymentTime'];
      this.transactionId = params['transactionId'];
    });

    if(this.status){
      let num: number = Number(this.orderInfo);
      this.orderRequest.cartid=num;
      this.orderRequest.paymentId=2;
      console.log(this.orderRequest);
      this.userService.addOrder(this.orderRequest).subscribe(
        (res) => {
       
        },
        (error) => {
          
        }
      );
    }

  }
  handlerButtonOrdered(){
    this.router.navigateByUrl('/historyOrder');
  }
  handleButton(){
    this.router.navigateByUrl('');
  }
}
