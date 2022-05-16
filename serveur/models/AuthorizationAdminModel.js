import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const AuthorizationAdmin = db.define("previlege",{

    cin:{
        type: DataTypes.STRING,
        primaryKey: true
    },
    code_previlege: {
        type: DataTypes.STRING,
        primaryKey: true
    }
},{

    tableName: 'previlege'
});

export default AuthorizationAdmin;