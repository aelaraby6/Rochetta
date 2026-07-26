import { Router } from "express";
import { validate } from "../../middleware/validate.middleware.js";
import { checkRole } from "../../middleware/check_roles.middleware.js";
import { authMiddleware } from "../../middleware/auth.middlware.js";
import { uploadSingle } from "../../middleware/upload.middleware.js";
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


router.post(
  "/",
  authMiddleware,
  checkRole(["admin"]),
  uploadSingle("image"),
  validate(CreateProductSchema),
  createProductController
);

router.delete(
  "/:id",
  authMiddleware,
  checkRole(["admin"]),
  DeleteProductController
);
router.patch(
  "/:id",
  authMiddleware,
  checkRole(["admin"]),
  uploadSingle("image"), 
  validate(UpdateProductSchema),
  updateProductController
);

router.get("/", GetAllProductsController);
router.get("/:id", GetOneProductController);

export { router as ProductRouter };
