import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const CarteEtudiant = db.define('CarteEtudiant',{
   
    numinscrit:{
        type: DataTypes.STRING
    }
},
{
    freezeTableName:true
});

export default CarteEtudiant;