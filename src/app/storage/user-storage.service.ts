
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
const TOKEN='e-com-token';
const USER='e-com-user';
const BASIC_URL = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor(private httpClient:HttpClient,
    
    private router:Router) { }
  public saveToken(token:string):void{
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN,token);
  }
  public saveUser(user:any): void{
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(USER,JSON.stringify(user));

  }
  static getToken():any{
    return localStorage.getItem(TOKEN);
  }
  static getUser(): any {
    const userString = localStorage.getItem(USER);
    if (userString) {
      return JSON.parse(userString);
    }
    return null;
  }
  private createAuthorizationHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', 'Bearer ' + UserStorageService.getToken());
  };
  static getUserId():string{
    const user=this.getUser();
    if(user==null){
      return '';
    }
    return user.userId;
  }
  static getUserRole():string{
    const user=this.getUser();
    if(user==null){
      return '';
    }
    const role:string=user.role;
    return role;
  }
  static isAdminLogggedIn():boolean{
    if(this.getToken===null){
      return false;
    }
    const role:string=this.getUserRole();
    return role=='Admin';
  }
  static isUserLogggedIn():boolean{
    if(this.getToken===null){
      return false;
    }
    const role:string=this.getUserRole();
    return role=='User';
  }
  static signOut():void{
    window.localStorage.removeItem(USER);
    window.localStorage.removeItem(TOKEN);
  }
  getAllProducts(): Observable<any> {
    return this.httpClient.get(BASIC_URL + '/api/v1/auth/');
  };
 
}
