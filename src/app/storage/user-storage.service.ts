
import { Injectable } from '@angular/core';
const TOKEN='e-com-token';
const USER='e-com-user';
@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() { }
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
}
