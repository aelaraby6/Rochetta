import { Router } from "express";
import { checkRole } from "../../middleware/check_roles.middleware.js";
import { authMiddleware } from "../../middleware/auth.middlware.js";
import {
  createCategoryController,
  deleteCategoryController,
  getAllCategoriesController,
  getOneCategoryController,
  updateCategoryController,
} from "../../controllers/Category/category.controller.js";

const router = Router();

// Admin Routes
router.post(
  "/",
  authMiddleware,
  checkRole(["admin"]),
  createCategoryController
);

router.delete(
  "/:id",
  authMiddleware,
  checkRole(["admin"]),
  deleteCategoryController
);

router.patch(
  "/:id",
  authMiddleware,
  checkRole(["admin"]),
  updateCategoryController
);

// User Routes
router.get("/", getAllCategoriesController);
router.get("/:id", getOneCategoryController);

export { router as CategoryRouter };
