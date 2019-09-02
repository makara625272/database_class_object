import { MySQL } from "./MySQL.js";
import { Oracle } from "./Oracle.js";
import { SQL_server } from "./SQL_server.js";


const MySQL1 = new MySQL;
const Oracle1 = new Oracle;
const SQL_server1 = new SQL_server;
console.log("MySQL.js");
MySQL1.setName("MySQL");
MySQL1.getName();
MySQL1.setTool("Toole");
MySQL1.getTool();
console.log("Oracle.js");
Oracle1.setCompany("Company");
Oracle1.getCompny();
Oracle1.setBrand("Brand");
Oracle1.getBrand();
console.log("SQL_server.js");
SQL_server1. query();
SQL_server1.setPrice("1000$");
SQL_server1.getPrice();