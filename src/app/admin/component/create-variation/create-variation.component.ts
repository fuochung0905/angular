import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryDto } from 'src/app/dto/CategoryDto.model';
import { VariationDto } from 'src/app/dto/VariationDto.model';

@Component({
  selector: 'app-create-variation',
  templateUrl: './create-variation.component.html',
  styleUrls: ['./create-variation.component.css']
})
export class CreateVariationComponent {
  id:any;
  categoryDto:CategoryDto;
  variationDto:VariationDto;
  lisCategory:CategoryDto[]=[];
  listVariation:VariationDto[]=[];
  constructor(private adminservice:AdminService,
    private router:Router,
    private _snackBar: MatSnackBar,
    private activeRouter:ActivatedRoute
    ){
      this.variationDto= new VariationDto();
      this.categoryDto= new CategoryDto();
  }
  ngOnInit(){
    this.id=this.activeRouter.snapshot.params['id'];
    this.getAllCategories();
    this.getAllVariationByCategory();
    this.getCategoryById();
  };
  getAllCategories(){
    this.adminservice.getAllCategories().subscribe((res)=>{
      this.lisCategory=res;
    })
  };
  getCategoryById(){
    this.id=this.activeRouter.snapshot.params['id'];
    this.adminservice.getCategoryById(this.id).subscribe((res)=>{
      this.categoryDto=res;
    })
  }
  getAllVariationByCategory(){
    this.id=this.activeRouter.snapshot.params['id'];
    this.adminservice.getAllVariationByCategoryt(this.id).subscribe((res)=>{
      this.listVariation=res;
      console.log(this.listVariation);
    })
  };
  createVariation(){
    this.id=this.activeRouter.snapshot.params['id'];
    this.variationDto.categoryId=this.id;
    this.adminservice.addVariation(this.variationDto).subscribe((res)=>
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
      console.log(this.variationDto);
      this._snackBar.open('Thêm thất bại', 'Đóng', {
        duration: 3000, // Độ dài của snack bar (milliseconds)
        horizontalPosition: 'center', // Vị trí ngang ('start' | 'center' | 'end' | 'left' | 'right')
        verticalPosition: 'bottom', // Vị trí dọc ('top' | 'bottom')
        panelClass: ['mat-snack-bar-custom'], // Các lớp CSS tùy chỉnh (optional)
      });
    })
  
  };
  displayedColumns: string[] = ['id','Loại sản phẩm','Tên phân loại','Thao tác'];
  dataSource = this.listVariation;
}
