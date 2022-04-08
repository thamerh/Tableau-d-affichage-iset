import Etudiants from "../models/EtudiantsModel.js";
import CarteEtudiant from "../models/CarteEtudiant.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const RegisterEtu = async(req, res) => {
    const { name, email,numinscrit, password, confPassword } = req.body;
    console.log({
        attributes:['numinscrit']})
        console.log( req.body.numinscrit)
    const carteEtudiant = await CarteEtudiant.findAll(req.body.numinscrit);
 console.log(JSON.stringify(carteEtudiant))
    if (carteEtudiant) {
    if(password !== confPassword) return res.status(400).json({msg: "Password and Confirm Password is not compatible"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await Etudiants.create({
            name: name,
            email: email,
            password: hashPassword,
            numinscrit:numinscrit
        });
        res.json({msg: "Register secessuful"});
    } catch (error) {
        console.log(error);
    }
    }else{
        return res.status(404).json({msg: "numero insecrit not found for fix the problem go to Iset for Register"});
    }
    
}

export const Login = async(req, res) => {
    try {
        const user = await Users.findAll({
            where:{
                email: req.body.email
            }
        });
        const match = await bcrypt.compare(req.body.password, user[0].password);
        if(!match) return res.status(400).json({msg: "Wrong Password"});
        const userId = user[0].id;
        const name = user[0].name;
        const email = user[0].email;
        const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '20s'
        });
        const refreshToken = jwt.sign({userId, name, email}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '1d'
        });
        await Users.update({refresh_token: refreshToken},{
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

export const Logout = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const user = await Users.findAll({
        where:{
            refresh_token: refreshToken
        }
    });
    if(!user[0]) return res.sendStatus(204);
    const userId = user[0].id;
    await Users.update({refresh_token: null},{
        where:{
            id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}