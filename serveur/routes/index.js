import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { RegisterEtu,LoginEtu,LogoutEtu } from "../controllers/Etudiants.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/RegisterEtu', RegisterEtu);
router.post('/login', Login);
router.post('/loginEtu', LoginEtu);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
router.delete('/logoutEtu', LogoutEtu);

export default router;