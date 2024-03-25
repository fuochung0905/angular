import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserStorageService } from 'src/app/storage/user-storage.service';
const BASIC_URL="http://localhost:8080";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  http: any;

  constructor(private httpCient:HttpClient) { }
  getAllProducts():Observable<any>{
    const token = UserStorageService.getToken();
      return this.http.get(BASIC_URL+'/api/user/productn', {
        headers:  this.createAuthorizationHeader()
      });
  }
  private createAuthorizationHeader():HttpHeaders{
    return new HttpHeaders().set('Authorization','Bearer '+UserStorageService.getToken());
  }
  
}
