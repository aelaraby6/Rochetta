import { Router } from "express";
import { validate } from "../../middlewares/validate.middleware.js";
import { checkRole } from "../../middlewares/check_roles.middleware.js";
import { authenticateToken } from "../../middlewares/authenticate_token.middlware.js";
import upload from "../../middlewares/upload.middleware.js";
import {
  CreateProductSchema,
  UpdateProductSchema,
} from "../../validations/Product/product.validation.js";
import {
  createProductController,
  DeleteProductController,
  GetAllProductsController,
  GetOneProductController,
  updateProductController,
} from "../../controllers/Product/product.controller.js";

const router = Router();

// Admin Routes
router.post(
  "/",
  authenticateToken,
  checkRole(["admin"]),
  upload.single("image"),
  validate(CreateProductSchema),
  createProductController
);

router.delete(
  "/:id",
  authenticateToken,
  checkRole(["admin"]),
  DeleteProductController
);
router.patch(
  "/:id",
  authenticateToken,
  checkRole(["admin"]),
  validate(UpdateProductSchema),
  updateProductController
);

// User Routes
router.get("/", GetAllProductsController);
router.get("/:id", GetOneProductController);

export { router as ProductRouter };
