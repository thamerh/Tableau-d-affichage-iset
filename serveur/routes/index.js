import express from "express";
import { RegisterEtu,LoginEtu,LogoutEtu } from "../controllers/Etudiants.js";
import { RegisterChef,LoginChef,LogoutChef } from "../controllers/ChefDep.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.post('/RegisterEtu', RegisterEtu);
router.post('/RegisterChef', RegisterChef);
router.post('/loginEtu', LoginEtu);
router.post('/LoginChef', LoginChef);
router.get('/token', refreshToken);
router.delete('/logoutEtu', LogoutEtu);
router.delete('/LogoutChef', LogoutChef);

export default router;