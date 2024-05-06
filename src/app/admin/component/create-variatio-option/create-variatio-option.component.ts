import { Component } from '@angular/core';
import { VariationDto } from 'src/app/dto/VariationDto.model';
import { VariationOptionDto } from 'src/app/dto/VariationOption.model';
import { AdminService } from '../../service/admin.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-variatio-option',
  templateUrl: './create-variatio-option.component.html',
  styleUrls: ['./create-variatio-option.component.css']
})
export class CreateVariatioOptionComponent {
  variationOption:VariationOptionDto;
  listVariation:VariationDto[]=[];
  listVariationOpiton:VariationOptionDto[]=[];
  constructor(private adminservice:AdminService,
    private router:Router,
    private _snackBar: MatSnackBar
    ){
      this.variationOption= new VariationOptionDto();
  }
  ngOnInit(){
    this.getAllVariation();
    this.getAllVariationOption();
  };
  getAllVariation(){
    this.adminservice.getAllVariation().subscribe((res)=>{
      this.listVariation=res;
      console.log(this.listVariation);
    })
  };
  getAllVariationOption(){
    this.adminservice.getAllVariationOPtion().subscribe((res)=>{
      this.listVariationOpiton=res;
    })
  }
  createVariationOption(){
    this.adminservice.addVariationOption(this.variationOption).subscribe((res)=>
    {
      this._snackBar.open('Thêm thành công', 'Đóng', {
        duration: 3000, // Độ dài của snack bar (milliseconds)
        horizontalPosition: 'center', // Vị trí ngang ('start' | 'center' | 'end' | 'left' | 'right')
        verticalPosition: 'bottom', // Vị trí dọc ('top' | 'bottom')
        panelClass: ['mat-snack-bar-custom'], // Các lớp CSS tùy chỉnh (optional)
      });
      this.getAllVariationOption();
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
  displayedColumns: string[] = ['Loại sản phẩm','Tên phân loại','Giá trị'];
  dataSource = this.listVariationOpiton;
}
