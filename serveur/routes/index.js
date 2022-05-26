import express from "express";
import { RegisterEtu,LoginEtu,LogoutEtu } from "../controllers/Etudiants.js";
import { RegisterChef,LoginChef,LogoutChef,getNomDep } from "../controllers/ChefDep.js";
import { LoginAdmin,RegisterAdmin,LogoutAdmin, AddCarteEtu,AddChefAutorization,AddAdminAutorization} from "../controllers/Admin.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshTokenChef, refreshTokenEtu, refreshTokenAdmin} from "../controllers/RefreshToken.js";
import { addAffiche,getAllAffiches,getOneAffiche,updateAffiche,deleteAffiche,getPublishedAffiche,upload} from "../controllers/AfficheController.js";
import {addAfficheChef, uploadChef,getAllAffichesChef,getOneAfficheChef,updateAfficheChef,deleteAfficheChef } from "../controllers/ChefAffich.js"


const router = express.Router();

router.post('/RegisterEtu', RegisterEtu);
router.post('/RegisterChef', RegisterChef);
router.post('/RegisterAdmin', RegisterAdmin);
router.post('/LoginEtu', LoginEtu);
router.post('/LoginAdmin', LoginAdmin);
router.post('/LoginChef', LoginChef);
router.get('/tokenEtu', refreshTokenEtu);
router.get('/tokenChef', refreshTokenChef);
router.get('/tokenAdmin', refreshTokenAdmin);
router.delete('/logoutEtu', LogoutEtu);
router.delete('/LogoutChef', LogoutChef);
router.delete('/LogoutAdmin', LogoutAdmin);
router.post('/addAffiche' , upload , addAffiche);
router.get('/allAffiches', getAllAffiches );
router.get('/published', getPublishedAffiche);
router.get('/:id',getOneAffiche);
router.put('/:id', updateAffiche);
router.delete('/:id', deleteAffiche);
router.post('/AddCarteEtu', AddCarteEtu);
router.post('/AddChefAutorization', AddChefAutorization );
router.post('/AddAdminAutorization', AddAdminAutorization );
router.post('/addAfficheChef' , uploadChef, addAfficheChef);
router.post('/allAffichesChef', getAllAffichesChef );
router.get('/AffichChef/:id',getOneAfficheChef);
router.put('/AffichChef/:id', updateAfficheChef);
router.delete('/AffichChef/:id', deleteAfficheChef);
router.get('/getNomDep/:name',getNomDep);

export default router;