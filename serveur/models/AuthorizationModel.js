import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Authorization = db.define("donnes_dotorisation",{

    cin:{
        type: DataTypes.STRING,
        primaryKey: true
    },
    code_dautorisation: {
        type: DataTypes.STRING,
        primaryKey: true
    }
},{

    tableName: 'donnes_dotorisation'
});

export default Authorization;