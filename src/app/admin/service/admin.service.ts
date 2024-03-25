import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from 'src/app/storage/user-storage.service';
const BASIC_URL="http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  constructor(private http:HttpClient) { }
  addCategory(categoryDto:any):Observable<any>{
    console.log(categoryDto);
    const token = UserStorageService.getToken();
    console.log(token);
      return this.http.post(BASIC_URL+'/api/admin/category/create', categoryDto, {
        headers:  this.createAuthorizationHeader()
      });
  }
  getAllCategories():Observable<any>{
    const token = UserStorageService.getToken();
      return this.http.get(BASIC_URL+'/api/admin/category/', {
        headers:  this.createAuthorizationHeader()
      });
  }
  addProduct(productDto:any):Observable<any>{
    console.log(productDto);
    const token = UserStorageService.getToken();
    console.log(token);
      return this.http.post(BASIC_URL+'/api/admin/product/create', productDto, {
        headers:  this.createAuthorizationHeader()
      });
  }
  private createAuthorizationHeader():HttpHeaders{
    return new HttpHeaders().set('Authorization','Bearer '+UserStorageService.getToken());
  }
}
