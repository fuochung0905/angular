export class VariationOptionDto{
    id:number;
    value:string;
    variationId:number;
    checked:boolean;
    variationName:string;
    categoryName:string;
    constructor(){
            this.id=0;
            this.value='';
            this.variationId=0;
            this.variationName='';
            this.categoryName='';
            this.checked=false;
        }
}