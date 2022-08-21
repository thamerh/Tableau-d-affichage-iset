import DocumentStudents from '../models/DocumentStudentModel.js';
import Affiche from "../models/AfficheModel.js";
import Document_Admin from '../models/DocumentAdminModel.js';
// image Upload
import multer  from 'multer';
import path from 'path';




// main work

// 1. create affiche

export const addAffiche = async (req, res) => {
   
    try {
        let info = {
            image: req.file.path,
            title: req.body.title,
            price: req.body.price,
            description: req.body.description,
            published: req.body.published ? req.body.published : false
        }
    
        const affiche = await Affiche.create(info);
        res.status(200).send(affiche);
        console.log(affiche);
    
    } catch (error){
        console.log(error);
        return res.status(404).json({msg: "problem"});

    } 
    // const affiche = await Affiche.create(info)
    // res.status(200).send(affiche)
    // console.log(affiche)

}



// 2. get all affiches
export const getAllAffiches = async ( req, res) => {

    let affiche = await Affiche.findAll({})
    res.status(200).send(affiche)
    console.log(affiche)
 


}

// 8. get document Admin
export const getAllDocument = async ( req, res) => {
    try {
        let document = await Document_Admin.findAll({});
               res.status(200).send(document);
               console.log(document);
        
         } catch (error){
             console.log(error);
             return res.status(404).json({msg: "problem"});
     
         } 


}

// 3. get single Affiche

export const getOneAffiche = async (req, res) => {

    let id = req.params.id
    let affiche = await Affiche.findOne({ where: { id: id }})
    res.status(200).send(affiche)

}

// 4. update Affiche

export const updateAffiche = async (req, res) => {

    let id = req.params.id

    const affiche = await Affiche.update(req.body, { where: { id: id }})

    res.status(200).send(affiche)
   

}

// 5. delete affiche by id

export const deleteAffiche = async (req, res) => {

    let id = req.params.id
    
    await Affiche.destroy({ where: { id: id }} )

    res.status(200).send('Affiche is deleted !')

}

// 6. get published affiche

export const getPublishedAffiche = async (req, res) => {

    const affiche =  await Affiche.findAll({ where: { published: true }})

    res.status(200).send(affiche)

}


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

export const upload = multer({
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

// 7. Add Document student 

export const DocumentForAdmin= async (req, res) => {
   
    try {

        let info = {
            image: req.file.path,
            title: req.body.title,
            name: req.body.name

        }
    const affiche = await DocumentStudents.create(info);
        res.status(200).send(affiche);
        console.log(affiche);
    
    } catch (error){
        console.log(error);
        return res.status(404).json({msg: "problem"});

    } 
}
// 8. delete Document by id

export const deleteDocument = async (req, res) => {

    let id = req.params.id
    
    await Document_Admin.destroy({ where: { id: id }} )

    res.status(200).send('Document is deleted !')

}
