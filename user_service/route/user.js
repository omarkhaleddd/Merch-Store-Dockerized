import express from "express";
import {getUser ,getUsers} from "../controller/userController.js";
import { verifyJWT  } from "../middleware/verifyJWT.js";

const router = express.Router();

router.get("/getUser",getUser);
router.get("/getUsers",getUsers);

export default router