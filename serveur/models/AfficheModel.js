import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

    const Affiche = db.define("affiche", {
        image: {
            type: DataTypes.STRING
        },
        title: {
            type: DataTypes.STRING,

        },
        description: {
            type: DataTypes.TEXT
        },
        published: {
            type: DataTypes.BOOLEAN
        }
       
        });

 export default  Affiche;

