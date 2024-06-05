import { Component, Inject } from '@angular/core';
import { UserDto } from 'src/app/dto/UserDto.model';
import { AdminService } from '../../service/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent {
userDto:UserDto;
id:any;
constructor(private adminservice:AdminService,public dialogRef: MatDialogRef<DetailUserComponent>,
  @Inject(MAT_DIALOG_DATA) private data: any,
  private router:Router,
  private _snackBar: MatSnackBar,
  private activeRouter:ActivatedRoute
  ){
  this.userDto= new UserDto();
}
ngOnInit(): void {
 this.getUserById();
}
getUserById(){
this.adminservice.getUserById(this.data.id).subscribe((res)=>{
  this.userDto=res;
})
}
onCancelClick(): void {
  this.dialogRef.close();
}
}
