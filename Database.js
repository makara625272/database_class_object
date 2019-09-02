export default class Database{
    setName(name){
        this.mName = name;
    }
    getName(){
        console.log(this.mName);
    }
    setCompany(company){
        this.mCompany = company;
    }
    getCompny(){
        console.log(this.mCompany);
    }
    query(){
        console.log("My query");
    }
}