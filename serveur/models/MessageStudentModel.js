import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

    const MessageStudent = db.define("messagestudent", {
        name: {
            type: DataTypes.STRING,

        },
       cin: {
            type: DataTypes.STRING,

        },
        message: {
            type: DataTypes.TEXT,
        },
        classe: {
             type: DataTypes.STRING,
 
         }       
        });

 export default  MessageStudent;