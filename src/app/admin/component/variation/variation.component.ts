import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-variation',
  templateUrl: './variation.component.html',
  styleUrls: ['./variation.component.css']
})
export class VariationComponent {
  listOfCategories:any=[];
  variation:any={
    id:'',
    name:'',
    value:'',
    categoryId:''
  };
  constructor(private adminService:AdminService,
    private router:Router){
  };
  ngOnInit(){
    this.getAllCategories();
  };
  getAllCategories(){
    this.adminService.getAllCategories().subscribe(res=>
    {
     this.listOfCategories=res;
    })
  };
  addVariation():void{
    this.adminService.createVariation(this.variation).subscribe((res)=>{
      this.router.navigateByUrl('list-product');
      console.log("create successfully",res);
    },
    (error)=>{
      console.log("create fail",error);
    })
  }

}
