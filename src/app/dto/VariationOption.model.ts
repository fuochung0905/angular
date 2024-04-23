export class VariationOptionDto{
    id:number;
    value:string;
    variationId:number;
    checked:boolean;
    
    constructor(){
            this.id=0;
            this.value='';
            this.variationId=0;
            this.checked=false;
        }
}