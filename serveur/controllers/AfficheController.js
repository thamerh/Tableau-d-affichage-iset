
import Affiche from "../models/AfficheModel.js";
// image Upload
import multer  from 'multer';
import path from "path";




// main work

// 1. create affiche

export const addAffiche = async (req, res) => {

    try {
        await Affiche.create({       
       image:req.file.path,
       title:req.body.title,
       description:req.body.description
        });
        res.json({msg: "Affiche created"});
    } catch (error){
        console.log(error);
        return res.status(404).json({msg: "problem"});

    } 
    // const affiche = await Affiche.create(info)
    // res.status(200).send(affiche)
    // console.log(affiche)

}



// 2. get all affiches

export const getAllAffiches = async (req, res) => {

    let affiches = await Affiche.findAll({})
    res.status(200).send(affiches)

}

// 3. get single product

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

    const affiches =  await Affiche.findAll({ where: { published: true }})

    res.status(200).send(affiches)

}

// 7. connect one to many relation Affiche and Reviews

// const getProductReviews =  async (req, res) => {

//     const id = req.params.id

//     const data = await Product.findOne({
//         include: [{
//             model: Review,
//             as: 'review'
//         }],
//         where: { id: id }
//     })

//     res.status(200).send(data)

// }


// 8. Upload Image Controller

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
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

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
}).single('image');




