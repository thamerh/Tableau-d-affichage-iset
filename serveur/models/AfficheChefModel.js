import { Sequelize } from "sequelize";
import db from "../config/Database.js";



const { DataTypes } = Sequelize;

    const AfficheChef = db.define("affichesChef", {
        image: {
            type: DataTypes.STRING
        },
        title: {
            type: DataTypes.STRING,

        },
        description: {
            type: DataTypes.TEXT
        },
        department: {
            type: DataTypes.STRING
        },
        classe: {
            type: DataTypes.STRING
        }
       },{

           tableName: 'affichesChef'
       });

 export default  AfficheChef;