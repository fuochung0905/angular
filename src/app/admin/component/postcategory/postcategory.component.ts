import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserStorageService } from 'src/app/storage/user-storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryDto } from 'src/app/dto/CategoryDto.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogExistsComponent } from '../dialog-exists/dialog-exists.component';

@Component({
  selector: 'app-postcategory',
  templateUrl: './postcategory.component.html',
  styleUrls: ['./postcategory.component.css']
})
export class PostcategoryComponent {
  categories:any=[];
  categoryDto:CategoryDto;
  categoryForm:FormGroup;


  constructor(private adminservice:AdminService,
    private router:Router,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog,
    ){
      this.categoryDto= new CategoryDto();
      this.categoryForm = this.formBuilder.group({
        name: ['', Validators.required]
      });
  }
  ngOnInit(): void {
    this.adminservice.getAllCategories().subscribe((res) => {
      this.categories = res;
      
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogExistsComponent, {
      width: '250px',
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'OK') {
        location.reload();
      } else {
      
      }
    });
  }
  postcategory(){
    if (this.categoryForm.invalid) {
      return;
    }
    this.adminservice.addCategory(this.categoryDto).subscribe(
      (res) => {
        if (res instanceof ErrorEvent) {
          console.error('Lỗi xảy ra:', res.error.message);
          // Xử lý lỗi từ mạng hoặc client-side
        } else if (res.status === 404) {
          this.openDialog();
        } else {
          this._snackBar.open('Thêm thành công', 'Đóng', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            panelClass: ['mat-snack-bar-custom'],
          });
          this.router.navigateByUrl('admin/add-category');
          window.location.reload();
        }
      },
      (error) => {
        console.error('Lỗi xảy ra:', error);
        // Xử lý lỗi từ mạng hoặc server-side
        this._snackBar.open('Tên loại sản phẩm đã tồn tại', 'Đóng', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          panelClass: ['mat-snack-bar-custom'],
        });
      }
    );
  
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
