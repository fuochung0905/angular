export class UserDto{
    id:number;
    firstName:string;
  lastName:string;
    email:string;
     phoneNumber:string;
     role:string;
     image:string;
     imageUser:string;
 constructor(){
   this.id=0;
   this.firstName='';
   this.lastName='';
   this.email='';
   this.phoneNumber='';
   this.role='';
   this.image='';
   this.imageUser='';
 }
   
}