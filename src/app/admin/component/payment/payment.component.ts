import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentDto } from 'src/app/dto/PaymentDto.model';
import { AdminService } from '../../service/admin.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  listPaymentDto:PaymentDto[]=[];
  paymentDto:PaymentDto;
  paymentForm:FormGroup;

  constructor(private adminservice:AdminService,
    private router:Router,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
    ){
      this.paymentDto= new PaymentDto();
      this.paymentForm = this.formBuilder.group({
        name: ['', Validators.required]

      });
  }
  ngOnInit(): void {
   this.getAllPayment();
  }
  addPayment(){
    if (this.paymentForm.invalid) {
      return;
    }
    console.log(this.paymentDto);
    this.adminservice.addPayment(this.paymentDto).subscribe((res)=>{
      this.getAllPayment();
    },
  (error)=>{
    this.getAllPayment();
  })
  };
  getAllPayment(){
    this.adminservice.getAllPayment().subscribe((res)=>{
      this.listPaymentDto=res;
    })
  };

  deleteCategory(categoryId: any): void {
   
  };
  displayedColumns: string[] = ['id','name','Thao tác'];
  dataSource = this.listPaymentDto;
}
