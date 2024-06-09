import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReviewDto } from 'src/app/dto/ReviewDto.model';
import { UserService } from '../../service/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-review-product',
  templateUrl: './review-product.component.html',
  styleUrls: ['./review-product.component.css']
})
export class ReviewProductComponent {

  selectedFile!: File | '';
  imagePreView!: String | ArrayBuffer | null ;
  reviewForm!:FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
private userService:UserService,
private fb :FormBuilder) {

    
  }
  ngOnInit(){
    this.reviewForm=this.fb.group({
      rating: [''],
      orderId: [''],
      comment: [''],
    
    });
    
   
  };
  onFileSelected(event:any){
    this.selectedFile=event.target.files[0];
    this.PreViewImage();
  
  };
  PreViewImage(){
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreView = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  };
  // addReview(){
  //     this.reviewDto.orderId=this.data.id;
  //     this.userService.addReview(this.reviewDto).subscribe((res)=>{
  //       console.log('success');
  //     });
  // };
  
  addReview():void
  {
   
    if(this.reviewForm.valid){
      const formData :FormData=new FormData();
      formData.append('file',this.selectedFile);
      formData.append('orderId',this.data.id);
      formData.append('rating',this.reviewForm.get('rating')?.value);
      formData.append('comment',this.reviewForm.get('comment')?.value);
    
this.userService.addReview(formData).subscribe(
  (res)=>{
     
  },(error)=>{
location.reload();
    
  }
)
    }
    else{
      for(const i in this.reviewForm.controls){
        this.reviewForm.controls[i].markAsDirty();
        this.reviewForm.controls[i].updateValueAndValidity();
      }  
    }
  };
}
