import { Router } from "express";
import { checkRole } from "../../middlewares/check_roles.middleware.js";
import { authenticateToken } from "../../middlewares/authenticate_token.middlware.js";
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
  authenticateToken,
  checkRole(["admin"]),
  createCategoryController
);

router.delete(
  "/:id",
  authenticateToken,
  checkRole(["admin"]),
  deleteCategoryController
);

router.patch(
  "/:id",
  authenticateToken,
  checkRole(["admin"]),
  updateCategoryController
);

// User Routes
router.get("/", getAllCategoriesController);
router.get("/:id", getOneCategoryController);

export { router as CategoryRouter };
