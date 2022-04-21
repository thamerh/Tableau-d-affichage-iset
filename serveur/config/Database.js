
import {Sequelize} from "sequelize";

const db = new Sequelize('data_base_project','root','',{
    host: "localhost",
    dialect: "mysql"
});

export default db;