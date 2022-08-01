export class Product {
    constructor(public productId:number,
        public sku: string,
        public name:string,
        public description:string,
        public unitprice:number,
        public imageurl:string,
        public unitsInStrock:number,
        public dateCreated:Date,
        public lastUpdated:Date,
        public categoryId:number
    ){}
}
