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
  variationDto:VariationDto;
  lisCategory:CategoryDto[]=[];
  listVariation:VariationDto[]=[];
  constructor(private adminservice:AdminService,
    private router:Router,
    private _snackBar: MatSnackBar,
    private activeRouter:ActivatedRoute
    ){
      this.variationDto= new VariationDto();
  }
  ngOnInit(){
    this.id=this.activeRouter.snapshot.params['id'];
    this.getAllCategories();
    this.getAllVariationByCategory();
  };
  getAllCategories(){
    this.adminservice.getAllCategories().subscribe((res)=>{
      this.lisCategory=res;
    })
  };
  getAllVariationByCategory(){
    this.id=this.activeRouter.snapshot.params['id'];
    this.adminservice.getAllVariationByCategoryt(this.id).subscribe((res)=>{
      this.listVariation=res;
      console.log(this.listVariation);
    })
  };
  createVariation(){
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