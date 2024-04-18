import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserStorageService } from 'src/app/storage/user-storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryDto } from 'src/app/dto/CategoryDto.model';

@Component({
  selector: 'app-postcategory',
  templateUrl: './postcategory.component.html',
  styleUrls: ['./postcategory.component.css']
})
export class PostcategoryComponent {
  categories:any=[];
  categoryDto:CategoryDto;


  constructor(private adminservice:AdminService,
    private router:Router,
    private _snackBar: MatSnackBar
    ){
      this.categoryDto= new CategoryDto();
  }
  ngOnInit(): void {
    this.adminservice.getAllCategories().subscribe(products => {
      // Lấy sản phẩm đầu tiên từ danh sách sản phẩm
      this.categories = products;
      
    });
  }
  postcategory(){
    this.adminservice.addCategory(this.categoryDto).subscribe((res)=>
    {
      this._snackBar.open('Thêm thành công', 'Đóng', {
        duration: 3000, // Độ dài của snack bar (milliseconds)
        horizontalPosition: 'center', // Vị trí ngang ('start' | 'center' | 'end' | 'left' | 'right')
        verticalPosition: 'bottom', // Vị trí dọc ('top' | 'bottom')
        panelClass: ['mat-snack-bar-custom'], // Các lớp CSS tùy chỉnh (optional)
      });
          this.router.navigateByUrl('admin/add-category');
          window.location.reload();
    },
    (error)=>{
      this._snackBar.open('Thêm thất bại', 'Đóng', {
        duration: 3000, // Độ dài của snack bar (milliseconds)
        horizontalPosition: 'center', // Vị trí ngang ('start' | 'center' | 'end' | 'left' | 'right')
        verticalPosition: 'bottom', // Vị trí dọc ('top' | 'bottom')
        panelClass: ['mat-snack-bar-custom'], // Các lớp CSS tùy chỉnh (optional)
      });
    })
  
  };

  deleteCategory(categoryId: any): void {
    this.adminservice.deleteCategoryById(categoryId).subscribe(
      () => {
        this._snackBar.open('Xóa thành công', 'Đóng', {
          duration: 3000, // Độ dài của snack bar (milliseconds)
          horizontalPosition: 'center', // Vị trí ngang ('start' | 'center' | 'end' | 'left' | 'right')
          verticalPosition: 'bottom', // Vị trí dọc ('top' | 'bottom')
          panelClass: ['mat-snack-bar-custom'], // Các lớp CSS tùy chỉnh (optional)
        });
        location.reload();
      },
      error => {
        console.error('Error deleting product: ', error);
        // Xử lý lỗi nếu có
      }
    );
  };
  displayedColumns: string[] = ['id','name','Thao tác'];
  dataSource = this.categories;
  }
