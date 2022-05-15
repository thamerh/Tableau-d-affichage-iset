import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Carte = db.define("carte_etudiant",{

    cin:{
        type: DataTypes.STRING,
        primaryKey: true
    },
    num_insc: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    lib_class:{
        type: DataTypes.STRING
    }
},{

    tableName: 'carte_etudiant'
});

export default Carte;