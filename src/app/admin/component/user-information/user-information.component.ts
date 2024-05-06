import { Component } from '@angular/core';
import { UserDto } from 'src/app/dto/UserDto.model';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent {
listUser:UserDto[]=[];
constructor(private adminService:AdminService){

}
ngOnInit(): void {
this.getAllUser();
}
getAllUser(){
this.adminService.getAllUser().subscribe((res)=>{
  this.listUser=res;
})
}
displayedColumns: string[] = ['Avatar','Họ','Tên','Tên tài khoản','SDT','Thao tác'];
dataSource = this.listUser;

}
