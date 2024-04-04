import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-detail-category',
  templateUrl: './get-detail-category.component.html',
  styleUrls: ['./get-detail-category.component.css']
})
export class GetDetailCategoryComponent {
id:any=this.activeRouter.snapshot.params['id'];

constructor(private adminService:AdminService,
  private activeRouter:ActivatedRoute){

}
getDetailCategory(){
  
}
}
