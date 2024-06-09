import { Component } from '@angular/core';
import { UserDto } from 'src/app/dto/UserDto.model';
import { UserService } from '../../service/user.service';
import { FormBuilder, FormGroup, NgControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  userForm!:FormGroup;
userDto:UserDto;
selectedFile!: File | '';
imagePreView!: String | ArrayBuffer | null ;
constructor(private userService:UserService,
  private router:Router,
  private fb :FormBuilder,
  private _snackBar: MatSnackBar

){
  this.userDto=new UserDto();
}
ngOnInit(): void {
  this.getCurrentUser();
  this.userForm=this.fb.group({
    phoneNumber: ['', [
      Validators.required,
      Validators.pattern('^(086|096|097|098|032|033|034|035|036|037|038|039|089|090|093|070|079|077|076|078|088|091|094|083|084|085|081|082)[0-9]{7}$')
    ]]
  });
 this.getCurrentUser();
}
updateInfor():void{
  if (this.userForm.invalid) {
    return;
  }
  this.userService.updateUserInfor(this.userDto).subscribe((res)=>{
    this._snackBar.open('Thêm sản phẩm thành công', 'Đóng', {
      duration: 3000, // Độ dài của snack bar (milliseconds)
      horizontalPosition: 'center', // Vị trí ngang ('start' | 'center' | 'end' | 'left' | 'right')
      verticalPosition: 'bottom', // Vị trí dọc ('top' | 'bottom')
      panelClass: ['mat-snack-bar-custom'], // Các lớp CSS tùy chỉnh (optional)
    });
    location.reload();
  })
}
updateUser():void{
  if(this.userForm.valid){
    const formData :FormData=new FormData();
    formData.append('file',this.selectedFile);
this.userService.updateUser(formData).subscribe(
(res)=>{
location.reload();
 
},(error)=>{
  this._snackBar.open('Thêm sản phẩm thành công', 'Đóng', {
    duration: 3000, // Độ dài của snack bar (milliseconds)
    horizontalPosition: 'center', // Vị trí ngang ('start' | 'center' | 'end' | 'left' | 'right')
    verticalPosition: 'bottom', // Vị trí dọc ('top' | 'bottom')
    panelClass: ['mat-snack-bar-custom'], // Các lớp CSS tùy chỉnh (optional)
  });
  location.reload();
}
);
  }
  else{
    for(const i in this.userForm.controls){
      this.userForm.controls[i].markAsDirty();
      this.userForm.controls[i].updateValueAndValidity();
    }
  }
};
getCurrentUser(){
this.userService.getCurrentUser().subscribe((res)=>{
  this.userDto=res;
  console.log(this.userDto);
});
};
onFileSelected(event:any){
  this.selectedFile=event.target.files[0];
  this.PreViewImage();

};
PreViewImage(){
  if (this.selectedFile) {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreView = reader.result;
    };
    reader.readAsDataURL(this.selectedFile);
  }
};

}