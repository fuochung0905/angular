import { Component } from '@angular/core';
import { ProductItemDto } from 'src/app/dto/ProductItemDto.model';

@Component({
  selector: 'app-detail-product-item',
  templateUrl: './detail-product-item.component.html',
  styleUrls: ['./detail-product-item.component.css']
})
export class DetailProductItemComponent {
id:any;
productItemDto:ProductItemDto;
constructor(){
  this.productItemDto=new ProductItemDto();
}
}
