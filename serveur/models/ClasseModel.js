import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Classe= db.define('classe',{
    lib_class:{
        type: DataTypes.STRING
    },
    nom_dep:{
        type: DataTypes.STRING
    }
},{
    freezeTableName:true
});

export default Classe;