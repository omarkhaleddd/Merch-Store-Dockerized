import express from "express";

import upload from "../middleware/upload.js";
import { verifyJWT } from "../middleware/verifyJWT.js";
import { addProduct, getProduct, getProducts } from "../controller/productController.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/getProduct/:id", getProduct);
router.post("/addProduct",upload.array("images"), addProduct);
// router.put("/updateProduct/:id", verifyJWT(["admin"]),upload.array("images"), updateProduct);
// router.delete("/deleteProduct/:id", verifyJWT(["admin"]), deleteProduct);
// router.delete("/deleteProducts", deleteProducts);

export default router