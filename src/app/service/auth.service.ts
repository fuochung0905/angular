import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UserStorageService } from '../storage/user-storage.service';

const BASIC_URL="http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private userstorage:UserStorageService) { }
  register(signupRequest :any):Observable<any>{
    return this.http.post(BASIC_URL+"/api/v1/auth/register",signupRequest);
  }
  login(email: string, password: string): any {
    const signinRequest = { email, password };
    return this.http.post(BASIC_URL + '/api/v1/auth/login', signinRequest).pipe(
      map((res: any) => {
        
        const token=res.token;
        
        const role=res.role;
        const userid=res.userId;
        const tk={token}
        if (token) {
          const user={ userid,role}
          this.userstorage.saveUser(user);
          this.userstorage.saveToken(token);
          return true; // Trả về true để biểu thị đăng nhập thành công
        } else {
          return false; // Trả về false nếu không có token trong phản hồi
        }
   
      }),
    
    );
  }
}
