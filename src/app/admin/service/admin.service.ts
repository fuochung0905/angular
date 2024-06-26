import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from 'src/app/storage/user-storage.service';
import { Product } from '../component/putproduct/product.model';
import { CategoryDto } from 'src/app/dto/CategoryDto.model';
import { VariationDto } from 'src/app/dto/VariationDto.model';
import { VariationOptionDto } from 'src/app/dto/VariationOption.model';
import { ProductItemVariationDto } from 'src/app/dto/ProductItemVariationDto.model';
import { UpdateOrderStatus } from 'src/app/dto/UpdateOrderStatus.model';
import { PaymentDto } from 'src/app/dto/PaymentDto.model';
import { PaymentTypeDto } from 'src/app/dto/PaymentTypeDto.model';
import { ProductItemDto } from 'src/app/dto/ProductItemDto.model';
const BASIC_URL = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  constructor(private http: HttpClient) { }
  addCategory(categoryDto: CategoryDto): Observable<any> {
    return this.http.post(BASIC_URL + '/api/admin/category/createNewCategory', categoryDto, {
      headers: this.createAuthorizationHeader()
    });
  };

  getAllCategories(): Observable<any> {
    return this.http.get(BASIC_URL + '/api/admin/category/', {
      headers: this.createAuthorizationHeader()
    });
  };
  getAdminUserById(userId: number): Observable<any> {
    return this.http.get(BASIC_URL + `/api/admin/user/${userId}`, {
      headers: this.createAuthorizationHeader()
    })
  }
  addProduct(productDto: FormData): Observable<any> {
    return this.http.post(BASIC_URL + '/api/admin/product/createNewProduct', productDto, {
      headers: this.createAuthorizationHeader()
    });
  };
  addProductItem(productItemDto: FormData): Observable<any> {
    return this.http.post(BASIC_URL + '/api/admin/productItem/createNewProductItem', productItemDto, {
      headers: this.createAuthorizationHeader()
    });
  };
  addVariation(variationdto: VariationDto): Observable<any> {
    return this.http.post(BASIC_URL + '/api/admin/variation/createNewVariation', variationdto, {
      headers: this.createAuthorizationHeader()
    });
  };
  addVariationOption(variationOptionDto: VariationOptionDto): Observable<any> {
    return this.http.post(BASIC_URL + '/api/admin/variation_option/createNewVariationOption', variationOptionDto, {
      headers: this.createAuthorizationHeader()
    });
  };
  addVariationOptionForProductItem(productItemVariationDtos: ProductItemVariationDto[]): Observable<any> {
    return this.http.post(BASIC_URL + '/api/admin/productItem/addVariation', productItemVariationDtos, {
      headers: this.createAuthorizationHeader()
    });
  };

  addPayment(paymentDto: PaymentDto): Observable<any> {
    return this.http.post(BASIC_URL + '/api/admin/payment', paymentDto, {
      headers: this.createAuthorizationHeader()
    })
  };
  addPaymentType(paymentTypeDto: PaymentTypeDto): Observable<any> {
    return this.http.post(BASIC_URL + '/api/admin/paymentType/', paymentTypeDto, {
      headers: this.createAuthorizationHeader()
    })
  };
  getAllDelivery(): Observable<any> {
    return this.http.get(BASIC_URL + '/api/admin/delivery/', {
      headers: this.createAuthorizationHeader()
    })
  };
  getAllPayment(): Observable<any> {
    return this.http.get(BASIC_URL + '/api/admin/payment/', {
      headers: this.createAuthorizationHeader()
    })
  };
  getAllPaymentType(): Observable<any> {
    return this.http.get(BASIC_URL + '/api/admin/paymentType/', {
      headers: this.createAuthorizationHeader()
    })
  };
  getAllPaymentTypeByPayment(paymentTypeId: number): Observable<any> {
    return this.http.get(BASIC_URL + `/api/admin/paymentType/payment/${paymentTypeId}`, {
      headers: this.createAuthorizationHeader()
    });
  };
  getAllVariationByProduct(productId: any): Observable<any> {
    return this.http.get(BASIC_URL + `/api/admin/variation/product/${productId}`, {
      headers: this.createAuthorizationHeader()
    })
  };
  getAllProductItemByProduct(productId: any): Observable<any> {
    return this.http.get(BASIC_URL + `/api/admin/productItem/product/${productId}`, {
      headers: this.createAuthorizationHeader()
    });
  };
  getAllVariationOptionByProduct(productId: any): Observable<any> {
    return this.http.get(BASIC_URL + `/api/admin/variation_option/product/${productId}`, {
      headers: this.createAuthorizationHeader()
    })
  };

  getProductByProductItem(productItemId: any): Observable<any> {
    return this.http.get(BASIC_URL + `/api/admin/product/productItem/${productItemId}`, {
      headers: this.createAuthorizationHeader()
    });
  };
  getProductItemById(productItemId: any): Observable<any> {
    return this.http.get(BASIC_URL + `/api/admin/productItem/${productItemId}`, {
      headers: this.createAuthorizationHeader()
    })
  }
  getAllVariationByCategoryt(categoryId: any): Observable<any> {
    return this.http.get(BASIC_URL + `/api/admin/variation/category/${categoryId}`, {
      headers: this.createAuthorizationHeader()
    })
  };
  private createAuthorizationHeader(): HttpHeaders {
    const token = UserStorageService.getToken();
    console.log(token);
    return new HttpHeaders().set('Authorization', 'Bearer ' + token);
  };

  getAllProduct(): Observable<any> {
    const token = UserStorageService.getToken();
    return this.http.get(BASIC_URL + '/api/admin/product/', {
      headers: this.createAuthorizationHeader()
    });
  };
  getCategoryById(categoryId: any): Observable<any> {
    return this.http.get(BASIC_URL + `/api/admin/category/${categoryId}`, {
      headers: this.createAuthorizationHeader()
    });
  }
  getOrderDetailById(orderDetailId: number): Observable<any> {
    return this.http.get(BASIC_URL + `/api/admin/order-detail/${orderDetailId}`, {
      headers: this.createAuthorizationHeader()
    })
  };
  updateCategory(categoryId: any, categoryDto: any): Observable<any> {
    return this.http.post(BASIC_URL + `/api/admin/category/updateCategory/${categoryId}`, categoryDto, {
      headers: this.createAuthorizationHeader()
    });
  };
  updateProductItem(productItemId:number,productItemdto:ProductItemDto):Observable<any>{
    return this.http.put(BASIC_URL+`/api/admin/productItem/updateProductItem/${productItemId}`,productItemdto,{
      headers:this.createAuthorizationHeader()
    });
  };
  getProductById(productId: any): Observable<any> {
    return this.http.get(BASIC_URL + `/api/admin/product/${productId}`, {
      headers: this.createAuthorizationHeader()
    });
  };

  getProductItemDetail(productItemId: any): Observable<any> {
    return this.http.get(BASIC_URL+ `/api/admin/productItem/${productItemId}`, {
      headers: this.createAuthorizationHeader()
    });
  }
  getProductImageById(productId: number): Observable<string> {
    return this.http.get<string>(`${BASIC_URL}/${productId}/image`);
  };
  getCountOrdered(): Observable<any> {
    return this.http.get(BASIC_URL + '/api/admin/order/getCountOrdered', {
      headers: this.createAuthorizationHeader()
    });
  };
  getTotalRevenueToday(): Observable<any> {
    return this.http.get(BASIC_URL + '/api/admin/order/getTotalRevenueToday', {
      headers: this.createAuthorizationHeader()
    });
  };
  getTotalRevenueOfMonth(month: number, year: number, active: boolean): Observable<number> {
    return this.http.get<number>(BASIC_URL + `/api/admin/order/total-revenue-of-month?month=${month}&year=${year}&active=${active}`);
  };
  getCurrentLogin(): Observable<any> {
    return this.http.get('http://localhost:8080/api/admin/user/current', {
      headers: this.createAuthorizationHeader()
    });
  };
  deleteProductById(productId: any): Observable<any> {
    return this.http.delete(BASIC_URL + `/api/admin/product/${productId}`, {
      headers: this.createAuthorizationHeader()
    });
  };
  deleteProductItemVariationOption(productItemVariationId: number): Observable<any> {
    return this.http.delete(BASIC_URL + `/api/admin/product_item_variation_option/${productItemVariationId}`, {
      headers: this.createAuthorizationHeader()
    });
  };
  deleteCategoryById(categoryId: any): Observable<any> {
    return this.http.delete(BASIC_URL + `/api/admin/category/deleteProduct/${categoryId}`, {
      headers: this.createAuthorizationHeader()
    });
  };

  deleteProductItem(productItemId:number):Observable<any>{
    return this.http.delete(BASIC_URL+`/api/admin/productItem/deleteProductItem/${productItemId}`,{
      headers:this.createAuthorizationHeader()
    });
  };


  logout(): Observable<any> {
    const tokens = this.createAuthorizationHeader();
    console.log(tokens);
    const token = UserStorageService.getToken();
    return this.http.get(BASIC_URL + '/logout', {
      headers: this.createAuthorizationHeader()
    });
  };

  updateProducts(productId: any, dto: any): Observable<any> {
    return this.http.post(BASIC_URL + `/api/admin/product/updateProduct/${productId}`, dto, {
      headers: this.createAuthorizationHeader()
    });
  };
  updateProductItemVariatonOption(productItemVariationId: number, productItemVariation: ProductItemVariationDto): Observable<any> {
    return this.http.post(BASIC_URL + `/api/admin/product_item_variation_option/${productItemVariationId}`, productItemVariation, {
      headers: this.createAuthorizationHeader()
    })
  }
  createVariation(variationDto: any): Observable<any> {
    return this.http.post(BASIC_URL + '/api/admin/variation/createNewVariation', variationDto, {
      headers: this.createAuthorizationHeader()
    });
  };
  getAllVariation(): Observable<any> {
    return this.http.get(BASIC_URL + '/api/admin/variation/', {
      headers: this.createAuthorizationHeader()
    });
  };
  getAllVariationOPtion(): Observable<any> {
    return this.http.get(BASIC_URL + '/api/admin/variation_option/', {
      headers: this.createAuthorizationHeader()
    });
  };
  getImage(imageName: any): Observable<any> {
    return this.http.get(BASIC_URL + `/api/admin/images/${imageName}`,
      {
        headers: this.createAuthorizationHeader()
      }
    );
  };
  getAllVariationOptionWithColorByProduct(productId: number): Observable<any> {
    return this.http.get(BASIC_URL + `/api/admin/variation_option/color/product/${productId}`, {
      headers: this.createAuthorizationHeader()
    });
  };
  getAllVariationOptionWithSizeByProduct(productId: number): Observable<any> {
    return this.http.get(BASIC_URL + `/api/admin/variation_option/size/product/${productId}`, {
      headers: this.createAuthorizationHeader()
    });
  };
  getAllVariationOptionWithSizeByProductItem(productItemId: number): Observable<any> {
    return this, this.http.get(BASIC_URL + `/api/admin/variation_option/productItem/${productItemId}`, {
      headers: this.createAuthorizationHeader()
    });
  };
  getAllProductItemVariationOptionByProductItem(productItemId: number): Observable<any> {
    return this.http.get(BASIC_URL + `/api/admin/product_item_variation_option/productItem/${productItemId}`, {
      headers: this.createAuthorizationHeader()
    });
  };
  getHistoryOrder(): Observable<any> {
    return this.http.get(BASIC_URL + '/api/admin/order/history', {
      headers: this.createAuthorizationHeader()
    });
  };
  getHistoryOrderApproved(): Observable<any> {
    return this.http.get(BASIC_URL + '/api/admin/order/historyApproved', {
      headers: this.createAuthorizationHeader()
    });
  };
  getHistoryOrderDelivered(): Observable<any> {
    return this.http.get(BASIC_URL + '/api/admin/order/historyDelivered', {
      headers: this.createAuthorizationHeader()
    });
  };
  getHistoryOrderCancel(): Observable<any> {
    return this.http.get(BASIC_URL + '/api/admin/order/historyCancel', {
      headers: this.createAuthorizationHeader()
    });
  };
  getHistoryOrderTransport(): Observable<any> {
    return this.http.get(BASIC_URL + '/api/admin/order/historyTransport', {
      headers: this.createAuthorizationHeader()
    });
  };
  getHistoryOrderChoxacnhan(): Observable<any> {
    return this.http.get(BASIC_URL + '/api/admin/order/historyOrdered', {
      headers: this.createAuthorizationHeader()
    });
  };
  getAllUser(): Observable<any> {
    return this.http.get(BASIC_URL + '/api/admin/user/', {
      headers: this.createAuthorizationHeader()
    })
  };
  getUserById(userId: number): Observable<any> {
    return this.http.get(BASIC_URL + `/api/admin/user/${userId}`, {
      headers: this.createAuthorizationHeader()
    });
  };
  getTotalAmountByUser(userId: number): Observable<any> {
    return this.http.get(BASIC_URL + `/api/admin/order/totalAmount/user/${userId}`, {
      headers: this.createAuthorizationHeader()
    });
  };
  getHistoryOrderByUser(userId: number): Observable<any> {
    return this.http.get(BASIC_URL + `/api/admin/order/historyOrderByUser/${userId}`, {
      headers: this.createAuthorizationHeader()
    });
  };
  updateHistoryOrderChoxacnhan(UpdateOrderStatus: any): Observable<any> {
    return this.http.post(BASIC_URL + '/api/admin/order/orderedToApproval', UpdateOrderStatus, {
      headers: this.createAuthorizationHeader()
    });
  };
  updateApprovalToTransport(UpdateOrderStatus: any): Observable<any> {
    return this.http.post(BASIC_URL + '/api/admin/order/approvalToTransport', UpdateOrderStatus, {
      headers: this.createAuthorizationHeader()
    });
  };
  updateTransportToDelivered(UpdateOrderStatus: any): Observable<any> {
    return this.http.post(BASIC_URL + '/api/admin/order/transportToDelivered', UpdateOrderStatus, {
      headers: this.createAuthorizationHeader()
    });
  };
  deleteUserById(userId: number): Observable<any> {
    return this.http.delete(BASIC_URL + `/api/admin/user/delete/${userId}`, {
      headers: this.createAuthorizationHeader()
    });
  };
}




