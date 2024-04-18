export class AddressDto {
      id:number;
      street: string;
      city: number;
      state: string;
      country:string;
      userId:number;
      isDefine:boolean;
  
    constructor(id: number, street: string, city: number, state: string, country: string, userId: number, isDefine: boolean) {
      this.id = id;
      this.street = street;
      this.city = city;
      this.state = state;
      this.country=country;
      this.userId=userId;
      this.isDefine=isDefine;
    }
  }
  