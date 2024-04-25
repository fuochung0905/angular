import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserStorageService } from 'src/app/storage/user-storage.service';
import { ProductVariationOptionDto } from 'src/app/dto/ProductVariationOptionDto.model';
import { productClickColor } from 'src/app/dto/productClickColor.model';
import { ColorSize } from 'src/app/dto/ColorSize.model';

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
  getCurrentUser():Observable<any>{
    return this.httpClient.get(BASIC_URL+'/api/user/currentUser/',{
      headers: this.createAuthorizationHeader()
    });
  };
  addAddress(address:any):Observable<any>{
    return this.httpClient.post(BASIC_URL+'/api/user/address/createNewAddress',address,{
      headers:this.createAuthorizationHeader()
    });
  };
  addOrder(OrderRequest :any):Observable<any>{
    return this.httpClient.post(BASIC_URL+'/api/user/order/createNewOrder',OrderRequest,{
      headers:this.createAuthorizationHeader()
    });
  };
  getListAddresCurrentUser():Observable<any>{
    return this.httpClient.get(BASIC_URL+'/api/user/address/',{
      headers:this.createAuthorizationHeader()
    })
  };
  getAddressCurretUser():Observable<any>{
    return this.httpClient.get(BASIC_URL+'/api/user/order/currentAddress',{
      headers:this.createAuthorizationHeader()
    });
  };
  updateAddressIsDefine(AddressDto:any):Observable<any>{
    return this.httpClient.post(BASIC_URL+'/api/user/address/updateIsDefine',AddressDto,{
      headers: this.createAuthorizationHeader()
    });
  };
  getAllAddress():Observable<any>{
    return this.httpClient.get(BASIC_URL+'/api/user/address/',{
      headers: this.createAuthorizationHeader()
    });
  };

  private createAuthorizationHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', 'Bearer ' + UserStorageService.getToken());
  };
   addCart(colorSize:ColorSize):Observable<any>{
    return this.httpClient.post(BASIC_URL + '/api/user/cart/add',colorSize,{
      headers: this.createAuthorizationHeader()
    })
  };
  removeCart(colorSize:ColorSize):Observable<any>{
    return this.httpClient.post(BASIC_URL + '/api/user/cart/remove',colorSize,{
      headers: this.createAuthorizationHeader()
    })
  };
  getUserProductItemById(productItemId:number):Observable<any>{
    return this.httpClient.get(BASIC_URL +`/api/user/productItem/${productItemId}`,{
      headers:this.createAuthorizationHeader()
    });
  };
  getProductClickColor(colorId:number,variationOptionId:number):Observable<any>{
    return this.httpClient.get(BASIC_URL+`/api/user/product/variationOption/${variationOptionId}/${colorId}`,{
      headers:this.createAuthorizationHeader()
    });
  };
  getAllUserCart(): Observable<any> {
    return this.httpClient.get(BASIC_URL + '/api/user/cart/', {
      headers: this.createAuthorizationHeader()
    });
  };
 

  logout():Observable<any>{
    const tokens=this.createAuthorizationHeader();
    console.log(tokens);
    const token = UserStorageService.getToken();
      return this.httpClient.get(BASIC_URL+'/logout', {
        headers:this.createAuthorizationHeader()
      });
  };
  getCartCountItem():Observable<any>{
    return this.httpClient.get(BASIC_URL+'/api/user/cart/count',{
      headers:this.createAuthorizationHeader()
    });
  };
  getHistoryOrder():Observable<any>{
    return this.httpClient.get(BASIC_URL+'/api/user/order/history',{
      headers:this.createAuthorizationHeader()
    });
  };
  getAllVariationProduct(productId:number):Observable<any>{
    return this.httpClient.get(BASIC_URL+`/api/user/variation/product/${productId}`,{
      headers:this.createAuthorizationHeader()
    });
  };
  getAllVariationoPtionByProduct(productId:any):Observable<any>{
    return this.httpClient.get(BASIC_URL+`/api/user/variationOption/product/${productId}`, {
      headers: this.createAuthorizationHeader()
    });
  };
  getUserAllProductItemByProduct(productId:any):Observable<any>{
    return this.httpClient.get(BASIC_URL+`/api/user/productItem/product/${productId}`, {
      headers: this.createAuthorizationHeader()
    });
  };
getAllVariationOption():Observable<any>{
 return this.httpClient.get(BASIC_URL+'/api/user/variationOption/',{
    headers: this.createAuthorizationHeader()
  });
};
}
