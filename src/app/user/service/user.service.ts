import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserStorageService } from 'src/app/storage/user-storage.service';
import { ProductVariationOptionDto } from 'src/app/dto/ProductVariationOptionDto.model';
import { productClickColor } from 'src/app/dto/productClickColor.model';
import { ColorSize } from 'src/app/dto/ColorSize.model';
import { UserDto } from 'src/app/dto/UserDto.model';
import { ReviewDto } from 'src/app/dto/ReviewDto.model';

const BASIC_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

 
 
  addAddress(address:any):Observable<any>{
    return this.httpClient.post(BASIC_URL+'/api/user/address/createNewAddress',address,{
      headers:this.createAuthorizationHeader()
    });
  };
  addCart(colorSize:ColorSize):Observable<any>{
    return this.httpClient.post(BASIC_URL + '/api/user/cart/add',colorSize,{
      headers: this.createAuthorizationHeader()
    })
  };
  addOrder(OrderRequest :any):Observable<any>{
    return this.httpClient.post(BASIC_URL+'/api/user/order/createNewOrder',OrderRequest,{
      headers:this.createAuthorizationHeader()
    });
  };
  addReview(reviewDto:FormData):Observable<any>{
    return this.httpClient.post(BASIC_URL+'/api/user/review/createNewReview',reviewDto,{
      headers:this.createAuthorizationHeader()
    });
  };
  removeCart(colorSize:ColorSize):Observable<any>{
    return this.httpClient.post(BASIC_URL + '/api/user/cart/remove',colorSize,{
      headers: this.createAuthorizationHeader()
    })
  };
  getAllReviewByProduct(productId:number):Observable<any>{
    return this.httpClient.get(BASIC_URL+`/api/user/review/product/${productId}`,{
      headers:this.createAuthorizationHeader()
    })
  }
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
  getAllProducts(): Observable<any> {

    return this.httpClient.get(BASIC_URL + '/api/user/product/', {
      headers: this.createAuthorizationHeader()
    });
  };
  getAllProductByCategory(categoryId:number):Observable<any>{
    return this.httpClient.get(BASIC_URL+`/api/user/product/category/${categoryId}`, {
      headers: this.createAuthorizationHeader()
    })
  }
  getAllCategory():Observable<any>{
    return this.httpClient.get(BASIC_URL+'/api/user/category/',{
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
 
  getAllAddress():Observable<any>{
    return this.httpClient.get(BASIC_URL+'/api/user/address/',{
      headers: this.createAuthorizationHeader()
    });
  };

  private createAuthorizationHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', 'Bearer ' + UserStorageService.getToken());
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
 

  getSumRatingByProductId(productId:number):Observable<any>{
    return this.httpClient.get(BASIC_URL+`/api/user/review/sumRating/product/${productId}`,{
      headers:this.createAuthorizationHeader()
    });
  };

  getCountReviewByProductId(productId:number):Observable<any>{
    return this.httpClient.get(BASIC_URL+`/api/user/review/countRating/product/${productId}`,{
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

 
  getHistoryOrderApproved():Observable<any>{
    return this.httpClient.get(BASIC_URL+'/api/user/order/historyApproved',{
      headers:this.createAuthorizationHeader()
    });
  };
  getHistoryOrderDelivered():Observable<any>{
    return this.httpClient.get(BASIC_URL+'/api/user/order/historyDelivered',{
      headers:this.createAuthorizationHeader()
    });
  };
  getHistoryOrderCancel():Observable<any>{
    return this.httpClient.get(BASIC_URL+'/api/user/order/historyCancel',{
      headers:this.createAuthorizationHeader()
    });
  };
  getHistoryOrderTransport():Observable<any>{
    return this.httpClient.get(BASIC_URL+'/api/user/order/historyTransport',{
      headers:this.createAuthorizationHeader()
    });
  };
  getHistoryOrderChoxacnhan():Observable<any>{
    return this.httpClient.get(BASIC_URL+'/api/user/order/historyOrdered',{
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
getAllProductItemVariationOptionByProductItem(productItemId:number):Observable<any>{
  return this.httpClient.get(BASIC_URL+`/api/user/product-item-variation-option/productItem/${productItemId}`,{
    headers:this.createAuthorizationHeader()
  });
};
updateUserInfor(userDto:UserDto):Observable<any>{
  return this.httpClient.post(BASIC_URL+'/api/user/information/',userDto,{
    headers:this.createAuthorizationHeader()
  });
};
updateUser(updateUser:FormData):Observable<any>{
  return this.httpClient.post(BASIC_URL+'/api/user/information/update',updateUser,{
    headers: this.createAuthorizationHeader()
  });
};
updateAddressIsDefine(AddressDto:any):Observable<any>{
  return this.httpClient.post(BASIC_URL+'/api/user/address/updateIsDefine',AddressDto,{
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

}
