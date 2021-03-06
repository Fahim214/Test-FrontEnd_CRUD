import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  updateProduct,
} from "../controllers/productController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getAllProduct).post(admin, protect, createProduct);
router
  .route("/:id")
  .put(admin, protect, updateProduct)
  .delete(protect, admin, deleteProduct);

export default router;
