import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from 'src/app/storage/user-storage.service';
import { Product } from '../component/putproduct/product.model';
const BASIC_URL="http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  constructor(private http:HttpClient) { }
  addCategory(categoryDto:any):Observable<any>{
      return this.http.post(BASIC_URL+'/api/admin/category/create', categoryDto, {
        headers:  this.createAuthorizationHeader()
      });
  };
  getAllCategories():Observable<any>{
      return this.http.get(BASIC_URL+'/api/admin/category/', {
        headers:this.createAuthorizationHeader()
      });
  };
  addProduct(productDto:any):Observable<any>{
      return this.http.post(BASIC_URL+'/api/admin/product/create', productDto, {
        headers:  this.createAuthorizationHeader()
      });
  };
  private createAuthorizationHeader():HttpHeaders{
    const token=UserStorageService.getToken();
    console.log(token);
    return new HttpHeaders().set('Authorization','Bearer '+token);
  };

  getAllProduct():Observable<any>{
    const token = UserStorageService.getToken();
      return this.http.get(BASIC_URL+'/api/admin/product/', {
        headers:  this.createAuthorizationHeader()
      });
  };

  getProductById(productId: any): Observable<any> {
    return this.http.get(BASIC_URL + `/api/admin/product/${productId}`, {
      headers: this.createAuthorizationHeader()
    });
  };

  getProductImageById(productId: number): Observable<string> {
    return this.http.get<string>(`${BASIC_URL}/${productId}/image`);
  };

  deleteProductById(productId: any): Observable<any> {
    return this.http.delete(BASIC_URL + `/api/admin/product/${productId}`, {
      headers: this.createAuthorizationHeader()
    });
  };
  logout():Observable<any>{
    const tokens=this.createAuthorizationHeader();
    console.log(tokens);
    const token = UserStorageService.getToken();
      return this.http.get(BASIC_URL+'/logout', {
        headers:this.createAuthorizationHeader()
      });
  };
 
  updateProducts(productId: any, dto:any): Observable<any>{
return this.http.post(BASIC_URL + `/api/admin/product/${productId}`,dto, {
  headers: this.createAuthorizationHeader()
});
};
};


  
 /* getProductById(Id: number): Observable<Product[]> {
    const url = `${BASIC_URL+'/api/admin/product/'}/${Id}`;
    return this.http.get(BASIC_URL+'/api/admin/product/');
    
  }*/



