import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-putproduct',
  templateUrl: './putproduct.component.html',
  styleUrls: ['./putproduct.component.css']
})
export class PutproductComponent implements OnInit{
  product!: any[];
  productId!: number;


  
  constructor(
    private router:ActivatedRoute,
  
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.adminService.getAllProduct().subscribe(products => {
      // Lấy sản phẩm đầu tiên từ danh sách sản phẩm
      this.product = products;
      this.processImages();
    });
  }

  processImages(): void {
    this.product.forEach(products => {
      products.processImage = 'data:image/jpeg;base64,' + products.byteImage;
    });
  }

  

  deleteProduct(productId: any): void {
    this.adminService.deleteProductById(productId).subscribe(
      () => {
        console.log('Product deleted successfully');
        this.product = this.product.filter(product => product.id !== productId);
        // Thực hiện các hành động sau khi xóa sản phẩm thành công nếu cần
      },
      error => {
        console.error('Error deleting product: ', error);
        // Xử lý lỗi nếu có
      }
    );
  }

  /*getProductImage(): void {
    this.adminService.getProductImageById(this.productId).subscribe((product)
      => {
        product.processImage = 'data:image/jpeg;base64,' + product.byteImage;
        this.product = product;
        console.log(product);
      },
      (error) => {
        console.error('Error fetching product image:', error);
      }
    );
  }*/

 

  /*getProduct(): void {
    const Id = this.router.snapshot.paramMap.get('Id');
    if (Id !== null) {
      this.adminService.getAllProduct()
        .subscribe(product => this.product = product);
    }
  }*/

  


}
