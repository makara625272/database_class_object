import Database from "./Database.js";
export class MySQL extends Database{
    setTool(tool){
        this.mTool = tool;
    }
    getTool(){
        console.log(this.mTool);
    }
}