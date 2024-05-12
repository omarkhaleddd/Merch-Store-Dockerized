import express from "express";
import {getUser ,getUsers} from "../controller/userController.js";

const router = express.Router();

router.get("/getUser/:id",getUser);
router.get("/getUsers",getUsers);

export default router