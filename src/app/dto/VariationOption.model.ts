export class VariationOptionDto{
    id:number;
    value:string;
    variationId:number;
    constructor( id:number,
        value:string,
        variationId:number){
            this.id=id;
            this.value=value;
            this.variationId=variationId;
        }
}