import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from 'src/app/storage/user-storage.service';
import { Product } from '../component/putproduct/product.model';
import { CategoryDto } from 'src/app/dto/CategoryDto.model';
import { VariationDto } from 'src/app/dto/VariationDto.model';
import { VariationOptionDto } from 'src/app/dto/VariationOption.model';
import { ProductItemVariationDto } from 'src/app/dto/ProductItemVariationDto.model';
const BASIC_URL="http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  constructor(private http:HttpClient) { }
  addCategory(categoryDto:CategoryDto):Observable<any>{
      return this.http.post(BASIC_URL+'/api/admin/category/createNewCategory', categoryDto, {
        headers:  this.createAuthorizationHeader()
      });
  };
  
  getAllCategories():Observable<any>{
      return this.http.get(BASIC_URL+'/api/admin/category/', {
        headers:this.createAuthorizationHeader()
      });
  };
  addProduct(productDto:FormData):Observable<any>{
      return this.http.post(BASIC_URL+'/api/admin/product/createNewProduct', productDto, {
        headers:  this.createAuthorizationHeader()
      });
  };
  addProductItem(productItemDto:FormData):Observable<any>{
    return this.http.post(BASIC_URL+'/api/admin/productItem/createNewProductItem', productItemDto, {
      headers:  this.createAuthorizationHeader()
    });
};
addVariation(variationdto:VariationDto):Observable<any>{
  return this.http.post(BASIC_URL+'/api/admin/variation/createNewVariation',variationdto,{
    headers:this.createAuthorizationHeader()
  });
};
addVariationOption(variationOptionDto:VariationOptionDto):Observable<any>{
  return this.http.post(BASIC_URL+'/api/admin/variation_option/createNewVariationOption',variationOptionDto,{
    headers:this.createAuthorizationHeader()
  });
};
addVariationOptionForProductItem(productItemVariationDtos:ProductItemVariationDto[]):Observable<any>{
  return this.http.post(BASIC_URL+'/api/admin/productItem/addVariation',productItemVariationDtos,{
    headers:this.createAuthorizationHeader()
  });
};
getAllVariationByProduct(productId:any):Observable<any>{
  return this.http.get(BASIC_URL+`/api/admin/variation/product/${productId}`,{
    headers:this.createAuthorizationHeader()
  })
};
getAllProductItemByProduct(productId:any):Observable<any>{
  return this.http.get(BASIC_URL+`/api/admin/productItem/product/${productId}`,{
    headers:this.createAuthorizationHeader()
  });
};
getAllVariationOptionByProduct(productId:any):Observable<any>{
  return this.http.get(BASIC_URL+`/api/admin/variation_option/product/${productId}`,{
    headers:this.createAuthorizationHeader()
  })
};

getProductByProductItem(productItemId:any):Observable<any>{
  return this.http.get(BASIC_URL+`/api/admin/product/productItem/${productItemId}`,{
    headers:this.createAuthorizationHeader()
  });
};
getProductItemById(productItemId:any):Observable<any>{
  return this.http.get(BASIC_URL+`/api/admin/productItem/${productItemId}`,{
    headers:this.createAuthorizationHeader()
  })
}
getAllVariationByCategoryt(categoryId:any):Observable<any>{
  return this.http.get(BASIC_URL+`/api/admin/variation/category/${categoryId}`,{
    headers:this.createAuthorizationHeader()
  })
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
  getCategoryById(categoryId:any):Observable<any>{
    return this.http.get(BASIC_URL+`/api/admin/category/${categoryId}`,{
      headers:this.createAuthorizationHeader()
    });
  }
updateCategory(categoryId:any,categoryDto:any):Observable<any>{
 return this.http.post(BASIC_URL+`/api/admin/category/updateCategory/${categoryId}`,categoryDto,{
    headers:this.createAuthorizationHeader()
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
  deleteProductItemVariationOption(productItemVariationId:number):Observable<any>{
    return this.http.delete(BASIC_URL + `/api/admin/product_item_variation_option/${productItemVariationId}`, {
      headers: this.createAuthorizationHeader()
    });
  };
  deleteCategoryById(categoryId: any): Observable<any> {
    return this.http.delete(BASIC_URL + `/api/admin/category/deleteProduct/${categoryId}`, {
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
return this.http.post(BASIC_URL + `/api/admin/product/updateProduct/${productId}`,dto, {
  headers: this.createAuthorizationHeader()
});
};
updateProductItemVariatonOption(productItemVariationId:number,productItemVariation:ProductItemVariationDto):Observable<any>{
  return this.http.post(BASIC_URL+ `/api/admin/product_item_variation_option/${productItemVariationId}`,productItemVariation, {
    headers: this.createAuthorizationHeader()
  })
}
  createVariation(variationDto:any):Observable<any>{
    return this.http.post(BASIC_URL+'/api/admin/variation/createNewVariation',variationDto,{
      headers:this.createAuthorizationHeader()
    });
  };
  getAllVariation():Observable<any>{
    return this.http.get(BASIC_URL+'/api/admin/variation/',{
      headers:this.createAuthorizationHeader()
    });
  };
  getImage(imageName:any):Observable<any>{
    return this.http.get(BASIC_URL+`/api/admin/images/${imageName}`,
      {
        headers:this.createAuthorizationHeader()
      }
    );
  };
  getAllVariationOptionWithColorByProduct(productId:number):Observable<any>{
    return this.http.get(BASIC_URL+ `/api/admin/variation_option/color/product/${productId}`, {
      headers: this.createAuthorizationHeader()
    });
  };
  getAllVariationOptionWithSizeByProduct(productId:number):Observable<any>{
    return this.http.get(BASIC_URL+ `/api/admin/variation_option/size/product/${productId}`, {
      headers: this.createAuthorizationHeader()
    });
  };
getAllVariationOptionWithSizeByProductItem(productItemId:number):Observable<any>{
  return this,this.http.get(BASIC_URL+`/api/admin/variation_option/productItem/${productItemId}`, {
    headers: this.createAuthorizationHeader()
  });
};
getAllProductItemVariationOptionByProductItem(productItemId:number):Observable<any>{
  return this.http.get(BASIC_URL+`/api/admin/product_item_variation_option/productItem/${productItemId}`, {
    headers: this.createAuthorizationHeader()
  });
};
getHistoryOrder():Observable<any>{
  return this.http.get(BASIC_URL+'/api/admin/order/history',{
    headers:this.createAuthorizationHeader()
  });
};
getHistoryOrderApproved():Observable<any>{
  return this.http.get(BASIC_URL+'/api/admin/order/historyApproved',{
    headers:this.createAuthorizationHeader()
  });
};
getHistoryOrderDelivered():Observable<any>{
  return this.http.get(BASIC_URL+'/api/admin/order/historyTransport',{
    headers:this.createAuthorizationHeader()
  });
};
getHistoryOrderCancel():Observable<any>{
  return this.http.get(BASIC_URL+'/api/admin/order/historyDelivered',{
    headers:this.createAuthorizationHeader()
  });
};
getHistoryOrderTransport():Observable<any>{
  return this.http.get(BASIC_URL+'/api/admin/order/historyCancel',{
    headers:this.createAuthorizationHeader()
  });
};
getHistoryOrderChoxacnhan():Observable<any>{
  return this.http.get(BASIC_URL+'/api/admin/order/historyOrdered',{
    headers:this.createAuthorizationHeader()
  });
};


}




