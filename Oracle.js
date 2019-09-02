import Database from "./Database.js";
export class Oracle extends Database{
    setBrand(brand){
        this.mBrand = brand;
    }
    getBrand(){
        console.log(this.mBrand);
    }
}