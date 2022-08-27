import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const DocumentStudents = db.define('DocumentStudent',{
  
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

export default DocumentStudents;