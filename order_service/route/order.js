import express from "express";
import { addOrder , getOrder , getOrders , deleteOrder } from "../controller/orderController.js";
const router = express.Router();

router.get("/", getOrders);
router.get("/getOrder/:id", getOrder);
router.post("/addOrder",addOrder);
router.delete("/deleteOrder/:id",deleteOrder);

export default router