import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { UserStorageService } from 'src/app/storage/user-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!:FormGroup;
 

  constructor(private auth:AuthService,
            private fb:FormBuilder,
            private router:Router){}
  ngOnInit(){
    this.loginForm= new FormGroup({
      email:new FormControl(),
      password:new FormControl()
    });
    this.loginForm=this.fb.group({
      email:  ['',Validators.required],
      password:  ['',Validators.required]
    });
  }
  login(){
    if (this.loginForm.invalid) {
      return;
    }
    if (this.loginForm.valid) { // Kiểm tra xem form có hợp lệ không
      const email = this.loginForm.get('email')!.value;
      const password = this.loginForm.get('password')!.value;
      this.auth.login(email, password).subscribe(
        (res: any) => {
          const role :string=UserStorageService.getUserRole();
          console.log(role);
          const user:any=UserStorageService.getUser();
          console.log(user);
         const test:boolean=UserStorageService.isAdminLogggedIn();
         console.log(test);
          if(UserStorageService.isAdminLogggedIn()){
            this.router.navigateByUrl('admin/list-product');
            console.log(UserStorageService.isAdminLogggedIn())
          }
          else
          if(UserStorageService.isUserLogggedIn()){
            this.router.navigateByUrl('');
          }
       
          console.log('Login successfully:', res);
        },
        (error: any) => {
          console.log('Login fail:', error);
        }
      );
    }
  }  


}
