import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postcategory',
  templateUrl: './postcategory.component.html',
  styleUrls: ['./postcategory.component.css']
})
export class PostcategoryComponent {
categoryDto :any={
  name:''
};

  constructor(private adminservice:AdminService,
    private fb :FormBuilder,
    private router:Router
    ){

  }
  ngOninit():void{
  
  
  }
  postcategory(){
 
    this.adminservice.addCategory(this.categoryDto).subscribe((res)=>
    {
    
        console.log("Add category successfully",res);
          this.router.navigateByUrl('admin/dashboard');
     
    })
  
  }
  }
