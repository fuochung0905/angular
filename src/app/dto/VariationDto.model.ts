export class VariationDto{
    id:number;
    name:string;
    categoryId:number;
    categoryName:string;
    constructor(){
            this.id=0;
            this.name='';
            this.categoryId=0;
            this.categoryName='';
        }
}