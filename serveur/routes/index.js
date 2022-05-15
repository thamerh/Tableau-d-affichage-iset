import express from "express";
import { RegisterEtu,LoginEtu,LogoutEtu } from "../controllers/Etudiants.js";
import { RegisterChef,LoginChef,LogoutChef } from "../controllers/ChefDep.js";
import { LoginAdmin,RegisterAdmin,LogoutAdmin, AddCarteEtu  } from "../controllers/Admin.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshTokenChef, refreshTokenEtu, refreshTokenAdmin} from "../controllers/RefreshToken.js";
import { addAffiche,getAllAffiches,getOneAffiche,updateAffiche,deleteAffiche,getPublishedAffiche,upload} from "../controllers/AfficheController.js";


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

export default router;