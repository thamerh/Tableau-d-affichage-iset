import Etudiants from "../models/EtudiantsModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import AfficheChef from "../models/AfficheChefModel.js";
import Affiche from "../models/AfficheModel.js";
import Carte from "../models/CarteModel.js"
import Classe from "../models/ClasseModel.js"
import Emplois from '../models/EmploiModel.js'
import DocumentStudents from '../models/DocumentStudentModel.js'
import Document_Admin from '../models/DocumentAdminModel.js'
import MessageStudent from '../models/MessageStudentModel.js'

export const RegisterEtu = async(req, res) => {
    const { name, email,num_insc,cin, password, confPassword } = req.body;
    if(password !== confPassword) return res.status(400).json({msg: "Password and Confirm Password is not compatible"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await Etudiants.create({       
            name: name,
            email: email,
            num_insc: num_insc,
            cin: cin, 
            password: hashPassword,
        });
        res.json({msg: "Register secessuful"});
    } catch (error) {
        console.log(error);
        return res.status(404).json({msg: "you have an count already or numero insecrit not found for fix the problem go to Iset for Register"});

    } 
}

export const LoginEtu = async(req, res) => {
   
    try {
        const etudiant = await Etudiants.findAll({
            where:{
                email: req.body.email
            }
     
        });
       
        const match = await bcrypt.compare(req.body.password, etudiant[0].password);
        console.log(match)
        if(!match) return res.status(400).json({msg: "Wrong Password"});
        const userId = etudiant[0].id;
        const name = etudiant[0].name;
        const email = etudiant[0].email;
        const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '20s'
        });
        const refreshToken = jwt.sign({userId, name, email}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '1d'
        });
        await Etudiants.update({refresh_token: refreshToken},{
            where:{
                id: userId
            }
        });
        res.cookie('refreshToken', refreshToken,{
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.json({ accessToken });
    } catch (error) {
        res.status(404).json({msg:"please register "});
    }
}

export const LogoutEtu = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const etudiant = await Etudiants.findAll({
        where:{
            refresh_token: refreshToken
        }
    });
    if(!etudiant[0]) return res.sendStatus(204);
    const userId = etudiant[0].id;
    await Etudiants.update({refresh_token: null},{
        where:{
            id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}
// / 2. get all affiches student

export const getAllAffichesStudent = async ( req, res) => {
    try {
        let tha= req.params.ClasseStudent;
        let nom_dep = req.params.nom_dep;
        let all="All";
        let afficheChefAll = await AfficheChef.findAll({ where: { department:nom_dep ,    classe:[tha, all]}});
        let afficheAdmin = await Affiche.findAll({})
        const affiche =  Object.assign(afficheChefAll, afficheAdmin );
          res.status(200).send(affiche);
          
   
    } catch (error){
        console.log(error);
        return res.status(404).json({msg: "problem"});

    } 

}

// // 3. get single Affiche student

export const getOneAfficheStudents = async (req, res) => {
const id = req.params.id;
const afficheChef = await AfficheChef.findAll({ where: { id:id }});
const afficheAdmin = await Affiche.findAll({where: { id:id }});
const affiche = Object.assign(afficheChef,afficheAdmin );
res.status(200).send(affiche[0])
}
//4 get department and class by name student
export const getNomDepClass = async(req, res)=>{
  try {
    
    let name = req.params.name
    const cin = await Etudiants.findAll({
        where:{
            name: name
        },
        attributes: ["cin"]
    });
    const classe = await Carte.findAll({
        where:{
            cin: cin[0].dataValues.cin
        },
        attributes: ["lib_class"]
    });
    const nomDep = await Classe.findAll({
        where:{
            lib_class: classe[0].dataValues.lib_class
        },
        attributes: ["nom_dep"]
    });
    

    res.status(200).send({classe:classe[0].dataValues.lib_class, dep:nomDep[0].dataValues.nom_dep}); 

} catch (error){
    console.log(error);
    return res.status(404).json({msg: "problem"});

} }
// 5. get  Emplois Student

export const getEmploiStudent = async ( req, res) => {

    try {
        let tha= req.params.ClasseStudent;
        let nom_dep = req.params.nom_dep;
        let all="All";
        let affiche = await Emplois.findAll({ where: { department:nom_dep ,classe:[tha, all]}})
          res.status(200).send(affiche)
          console.log(affiche)
   
    } catch (error){
        console.log(error);
        return res.status(404).json({msg: "problem"});

    } 

}
// 6. get single emplois

export const getOneEmploiStudent = async (req, res) => {

    let id = req.params.id
    let affiche = await Emplois.findOne({ where: {id:id }})
    res.status(200).send(affiche)

}
//7 .Downolods file
export const DownolodsFile = async (req, res)=>{
    let file = req.params.file
    let imgFolder ="Images/"
    res.download(imgFolder.concat(file));
    
}
// 8. Add Document student 

export const addDocumentForStudent = async (req, res) => {
   
    try {

        let info = {
            image: req.file.path,
            title: req.body.title,
            name: req.body.name

        }
    const affiche = await Document_Admin.create(info);
        res.status(200).send(affiche);
        console.log(affiche);
    
    } catch (error){
        console.log(error);
        return res.status(404).json({msg: "problem"});

    } 
}
// 9. delete document student by id

export const DeleteDocumentStudent = async (req, res) => {

    let id = req.params.id
    
    await DocumentStudents.destroy({ where: { id: id }} )

    res.status(200).send('Affiche is deleted !')

}

// 9. get document by name

export const DocumentOneStudent = async (req, res) => {
    try {
        let name = req.params.name;
        let affiche = await DocumentStudents.findAll({ where: { name: name }})
          res.status(200).send(affiche)
          console.log(affiche)
   
    } catch (error){
        console.log(error);
        return res.status(404).json({msg: "problem"});

    } 

}
//10.Add message from contact screen student 
export const addMessageStudent = async (req, res) => {
    try {

        let info = {
            name: req.body.name,
            cin : req.body.cin,
            message: req.body.message,
            classe: req.body.classe
        }
    const Message = await MessageStudent.create(info);
        res.status(200).send(Message);
        console.log(Message);
    
    } catch (error){
        console.log(error);
        return res.status(404).json({msg: "problem"});

    } 
}

