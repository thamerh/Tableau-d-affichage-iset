import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

    const MessageChef = db.define("MessageChef", {
        name: {
            type: DataTypes.STRING,

        },
        message: {
            type: DataTypes.TEXT,
        },
        departement: {
             type: DataTypes.STRING,
 
         }       
        });

 export default  MessageChef;