import { Component } from '@angular/core';
import { UserDto } from 'src/app/dto/UserDto.model';
import { AdminService } from '../../service/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailUserComponent } from '../detail-user/detail-user.component';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent {
listUser:UserDto[]=[];
constructor(private dialog: MatDialog,
  private adminService:AdminService){

}
ngOnInit(): void {
this.getAllUser();
}
getAllUser(){
this.adminService.getAllUser().subscribe((res)=>{
  this.listUser=res;
})
}

openDialog(id: number): void {
  const dialogRef = this.dialog.open(DetailUserComponent, {
    width: '700px',
    height:'500px',
    data: { id: id } 
  });

 
  dialogRef.afterClosed().subscribe(result => {
    if (result === 'OK') {
      this.dialog.closeAll();
    }
  });
}

displayedColumns: string[] = ['Avatar','Họ','Tên','SDT','Thao tác'];
dataSource = this.listUser;

}
