import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-get-detail-category',
  templateUrl: './get-detail-category.component.html',
  styleUrls: ['./get-detail-category.component.css']
})
export class GetDetailCategoryComponent {
id:any=this.activeRouter.snapshot.params['id'];
category:any={
  id:'',
  name:''
};
categoryDto:any={
  name:''
};
categories:any=[];

constructor(private adminService:AdminService,
  private activeRouter:ActivatedRoute,
  private _snackBar: MatSnackBar){

}
getDetailCategory(){
  this.adminService.getCategoryById(this.id).subscribe((res)=>{
  this.category=res;
  });
};
updateCategory():void{
  if(!this.categoryDto.name){
    this.categoryDto.name=this.category.name;
  }
  this.adminService.updateCategory(this.id,this.categoryDto).subscribe((res)=>{
    this._snackBar.open('Thêm thành công', 'Đóng', {
      duration: 3000, // Độ dài của snack bar (milliseconds)
      horizontalPosition: 'center', // Vị trí ngang ('start' | 'center' | 'end' | 'left' | 'right')
      verticalPosition: 'bottom', // Vị trí dọc ('top' | 'bottom')
      panelClass: ['mat-snack-bar-custom'], // Các lớp CSS tùy chỉnh (optional)
    });
    location.reload();
  });
};
ngOnInit(): void {
  this.adminService.getAllCategories().subscribe(ca => {
    // Lấy sản phẩm đầu tiên từ danh sách sản phẩm
    this.categories = ca;
    
  });
  this.getDetailCategory();
}
deleteCategory(categoryId: any): void {
  this.adminService.deleteCategoryById(categoryId).subscribe(
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
