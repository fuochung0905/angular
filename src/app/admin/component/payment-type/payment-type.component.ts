import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentTypeDto } from 'src/app/dto/PaymentTypeDto.model';
import { AdminService } from '../../service/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-payment-type',
  templateUrl: './payment-type.component.html',
  styleUrls: ['./payment-type.component.css']
})
export class PaymentTypeComponent {
  id:any;
  listPaymentTypeDto:PaymentTypeDto[]=[];
  paymentTypeDto:PaymentTypeDto;
  paymentTypeForm:FormGroup;

  constructor(private adminservice:AdminService,
    private router:Router,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private activeRouter:ActivatedRoute
    ){
      this.paymentTypeDto= new PaymentTypeDto();
      this.paymentTypeForm = this.formBuilder.group({
        value: ['', Validators.required]
      });
  }
  ngOnInit(): void {
    this.id=this.activeRouter.snapshot.params['id'];
   this.getAllPaymentTypeByPayment();
  }
  addPaymentType(){
    if (this.paymentTypeForm.invalid) {
      return;
    }
    this.id=this.activeRouter.snapshot.params['id'];
    this.paymentTypeDto.paymentId=this.id;
    this.paymentTypeDto.image='';
    console.log(this.paymentTypeDto);
    this.adminservice.addPaymentType(this.paymentTypeDto).subscribe((res)=>{
      this.getAllPaymentTypeByPayment();
    },
  (error)=>{
    this.getAllPaymentTypeByPayment();
  })
  };
  getAllPaymentTypeByPayment(){
    this.id=this.activeRouter.snapshot.params['id'];
    this.adminservice.getAllPaymentTypeByPayment(this.id).subscribe((res)=>{
      console.log(res);
      this.listPaymentTypeDto=res;
    })
  };

  deleteCategory(categoryId: any): void {
   
  };
  displayedColumns: string[] = ['id','value','Thao tác'];
  dataSource = this.listPaymentTypeDto;
}
