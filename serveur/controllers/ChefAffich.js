import AfficheChef from "../models/AfficheChefModel.js";
import Emplois from '../models/EmploiModel.js'
// image Upload
import multer from 'multer';
import path from "path" ;



// main work

// 1. Add affiche

export const addAfficheChef = async (req, res) => {
   
    try {

        let info = {
            image: req.file.path,
            title: req.body.title,
            description: req.body.description,
            department: req.body.department,
            classe: req.body.classe

        }
    
        const affiche = await AfficheChef.create(info);
        res.status(200).send(affiche);
        console.log(affiche);
    
    } catch (error){
        console.log(error);
        return res.status(404).json({msg: "problem"});

    } 
}



// 2. get all affiches

export const getAllAffichesChef = async ( req, res) => {

    try {

        let nom_dep = req.params.nom_dep;
        let affiche = await AfficheChef.findAll({ where: { department:nom_dep }})
          res.status(200).send(affiche)
          console.log(affiche)
        //   return res.status(200).json({affiche});
   
    } catch (error){
        console.log(error);
        return res.status(404).json({msg: "problem"});

    } 

}

// 3. get single Affiche

export const getOneAfficheChef = async (req, res) => {

    let id = req.params.id
    let affiche = await AfficheChef.findOne({ where: { id: id }})
    res.status(200).send(affiche)

}

// 4. update Affiche

export const updateAfficheChef = async (req, res) => {

    let id = req.params.id

    const affiche = await AfficheChef.update(req.body, { where: { id: id }})

    res.status(200).send(affiche)
   

}

// 5. delete affiche by id

export const deleteAfficheChef = async (req, res) => {

    let id = req.params.id
    
    await AfficheChef.destroy({ where: { id: id }} )

    res.status(200).send('Affiche is deleted !')

}


// 1. Add Emploi

export const addEmploi = async (req, res) => {
   
    try {

        let info = {
            image: req.file.path,
            department: req.body.department,
            classe: req.body.classe

        }
    
        const affiche = await Emplois.create(info);
        res.status(200).send(affiche);
        console.log(affiche);
    
    } catch (error){
        console.log(error);
        return res.status(404).json({msg: "problem"});

    } 
}

// 2. get all Emplois

export const getAllEmplois = async ( req, res) => {

    try {

        let nom_dep = req.params.nom_dep;
        let affiche = await Emplois.findAll({ where: { department:nom_dep }})
          res.status(200).send(affiche)
          console.log(affiche)
        //   return res.status(200).json({affiche});
   
    } catch (error){
        console.log(error);
        return res.status(404).json({msg: "problem"});

    } 

}
// 3. get single emplois

export const getOneEmploi = async (req, res) => {

    let id = req.params.id
    let affiche = await Emplois.findOne({ where: { id: id }})
    res.status(200).send(affiche)

}

// 4. update emploi

export const updateEmploiChef = async (req, res) => {

    let id = req.params.id
    const affiche = await  Emplois.update(req.body, { where: { id: id }})
    res.status(200).send(affiche)
}

// 5. delete affiche by id

export const deleteEmploiChef = async (req, res) => {

    let id = req.params.id
    
    await Emplois.destroy({ where: { id: id }} )

    res.status(200).send('Affiche is deleted !')

}

// 8. Upload Image Controller

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

export const uploadChef = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))

        if( mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
}).single('image')