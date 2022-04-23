import express from "express";
import { RegisterEtu,LoginEtu,LogoutEtu } from "../controllers/Etudiants.js";
import { RegisterChef,LoginChef,LogoutChef } from "../controllers/ChefDep.js";
import { LoginAdmin,RegisterAdmin,LogoutAdmin } from "../controllers/Admin.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshTokenEtu } from "../controllers/RefreshToken.js";

const router = express.Router();

router.post('/RegisterEtu', RegisterEtu);
router.post('/RegisterChef', RegisterChef);
router.post('/RegisterAdmin', RegisterAdmin);
router.post('/LoginEtu', LoginEtu);
router.post('/LoginAdmin', LoginAdmin);
router.post('/LoginChef', LoginChef);
router.get('/tokenEtu', refreshTokenEtu);
router.delete('/logoutEtu', LogoutEtu);
router.delete('/LogoutChef', LogoutChef);
router.delete('/LogoutAdmin', LogoutAdmin);

export default router;