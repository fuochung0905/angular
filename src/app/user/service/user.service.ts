import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserStorageService } from 'src/app/storage/user-storage.service';

const BASIC_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<any> {

    return this.httpClient.get(BASIC_URL + '/api/user/product/', {
      headers: this.createAuthorizationHeader()
    });
  };
  getProductsById(productId:any): Observable<any> {
   console.log(productId);
    return this.httpClient.get(BASIC_URL+`/api/user/product/${productId}`, {
      headers: this.createAuthorizationHeader()
    });
  };
  private createAuthorizationHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', 'Bearer ' + UserStorageService.getToken());
  };
   addCart(productId:any,cartDto:any):Observable<any>{
    return this.httpClient.put(BASIC_URL + `/api/user/cart/add/${productId}`,cartDto,{
      headers: this.createAuthorizationHeader()
    })
  };
  getAllUserCart(): Observable<any> {

    return this.httpClient.get(BASIC_URL + '/api/user/cart/', {
      headers: this.createAuthorizationHeader()
    });
  };
}
