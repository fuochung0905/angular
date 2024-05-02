import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReviewDto } from 'src/app/dto/ReviewDto.model';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-review-product',
  templateUrl: './review-product.component.html',
  styleUrls: ['./review-product.component.css']
})
export class ReviewProductComponent {
  reviewDto:ReviewDto;
  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
private userService:UserService) {
    this.reviewDto= new ReviewDto();
    
  }
  addReview(){
      this.reviewDto.orderId=this.data.id;
      this.userService.addReview(this.reviewDto).subscribe((res)=>{
        console.log('success');
      });
  };

}
