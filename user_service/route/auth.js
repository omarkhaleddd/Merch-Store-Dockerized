import express from "express";
import {Register ,Login , Logout} from "../controller/authController.js";

const router = express.Router();

router.post("/login",Login);
router.post("/register",Register);
router.post("/logout",Logout);

export default router