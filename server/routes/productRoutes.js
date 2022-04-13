import express from "express";
import { createProduct, getAllProduct } from "../controllers/productController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

const router = express.Router()

router.route("/").get(getAllProduct).post(admin, protect, createProduct)

export default router