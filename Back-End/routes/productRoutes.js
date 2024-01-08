import express from "express";
import {
  deleteProduct,
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../controllers/productController.js";
import Verification from "../Middleware/jwt.js";

const router = express.Router();
router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", Verification.verifyLogin, createProduct);
router.delete("/:id", Verification.verifyLogin, deleteProduct);
router.put("/:id", Verification.verifyLogin, updateProduct);

export default router;
