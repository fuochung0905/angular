import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-get-allproduct',
  templateUrl: './get-allproduct.component.html',
  styleUrls: ['./get-allproduct.component.css']
})
export class GetAllproductComponent implements OnInit{
products: any[]=[];
constructor(private userservice:UserService){

}
ngOnInit(){
  this.getAllProduct();
};
getAllProduct(){
this.products=[];
this.userservice.getAllProducts().subscribe(res=>{
  res.forEach((element :any) => {
    console.log(element);
    element.processImage='data:image/jpeg;base64,'+element.byteImage;
    this.products.push(element);
  });
})
};
}
