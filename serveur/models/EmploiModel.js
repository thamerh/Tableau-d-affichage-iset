import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

    const Emplois = db.define("EmploiTemps", {
        image: {
            type: DataTypes.STRING
        },
        department: {
            type: DataTypes.STRING
        },
        classe: {
            type: DataTypes.STRING
        }
    },{

        tableName: 'EmploiTemps'
        });

 export default  Emplois ;