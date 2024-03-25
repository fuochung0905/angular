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
      email: [null],
      password: [null]
    });
  }
  login(){
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
            this.router.navigateByUrl('admin/dashboard');
            console.log(UserStorageService.isAdminLogggedIn())
          }
          else
          if(UserStorageService.isUserLogggedIn()){
            this.router.navigateByUrl('home');
          }
       
          console.log('Login successfully:', res);
        },
        (error: any) => {
          console.log('Login fail:', error);
        }
      );
    }
  }  
  // addCategory(categoryDto:any):Observable<any>{
  //   return this.http.post('',categoryDto,{
  //     headers:this.createAuthorizationHeader(),
  //   })
  // }
  // private createAuthorizationHeader():HttpHeaders{
  //   return new HttpHeaders().set('Authorization','Bearer '+UserStorageService.getToken());
  // }

}
