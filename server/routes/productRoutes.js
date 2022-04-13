import express from "express";
import { createProduct, getAllProduct, updateProduct } from "../controllers/productController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

const router = express.Router()

router.route("/").get(getAllProduct).post(admin, protect, createProduct)
router.route("/:id").put(admin, protect, updateProduct)

export default router