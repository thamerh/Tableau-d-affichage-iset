import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Document_Admin = db.define('DocumentAdmin',{
  
    image: {
        type: DataTypes.STRING
    },
    title: {
        type: DataTypes.STRING

    },
    name: {
        type: DataTypes.STRING
    },
},{
    freezeTableName:true
});

export default Document_Admin;