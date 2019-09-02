import Database from "./Database.js";
export class SQL_server extends Database{
    setPrice(price){
        this.mPrice = price;
    }
    getPrice(){
        console.log(this.mPrice);
    }
}