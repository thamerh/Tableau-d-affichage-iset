import Admin from "../models/AdminModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Carte from "../models/CarteModel.js";
import Authorization from "../models/AuthorizationModel.js"



export const RegisterAdmin = async(req, res) => {
    const { name, email,cin,code_previlege,password, confPassword } = req.body;
    if(password !== confPassword) return res.status(400).json({msg: "Password and Confirm Password is not compatible"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await Admin.create({       
            name: name,
            email: email,
            cin: cin, 
            code_previlege: code_previlege,
            password: hashPassword
        });
        res.json({msg: "Register secessuful"});
    } catch (error) {
        console.log(error);
        return res.status(404).json({msg: "you have an acount it has the same email already or is Wrong in your information"});

    } 
}

export const LoginAdmin = async(req, res) => {
   
    try {
        const admin = await Admin.findAll({
            where:{
                email: req.body.email
            }
     
        });
       
        const match = await bcrypt.compare(req.body.password, admin[0].password);
        console.log(match)
        if(!match) return res.status(400).json({msg: "Wrong Password"});
        const userId = admin[0].id;
        const name = admin[0].name;
        const email = admin[0].email;
        const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '20s'
        });
        const refreshToken = jwt.sign({userId, name, email}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '1d'
        });
        await Admin.update({refresh_token: refreshToken},{
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

export const LogoutAdmin = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const admin = await Admin.findAll({
        where:{
            refresh_token: refreshToken
        }
    });
    if(!admin[0]) return res.sendStatus(204);
    const userId = admin[0].id;
    await Admin.update({refresh_token: null},{
        where:{
            id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}

export const AddCarteEtu = async(req, res) => {
    const { cin,num_insc,lib_class} = req.body;
    try {
        await Carte.create({       
            cin:cin, 
            num_insc: num_insc,
            lib_class: lib_class
        });
        res.json({msg: "Carte etudiant adding secessuful"});
    } catch (error) {
        console.log(error);
        return res.status(404).json({msg: "etudiant alredy exist"});

    } 
}

export const AddChefAutorization = async(req, res) => {
    const { cin,code_dautorisation} = req.body;
    try {
        await Authorization.create({       
            cin:cin, 
            code_dautorisation: code_dautorisation
        });
        res.json({msg: "information chef adding secessuful"});
    } catch (error) {
        console.log(error);
        return res.status(404).json({msg: "Chef alredy exist"});

    } 
}


