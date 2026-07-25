import { Router } from "express";
import { authMiddleware } from "../../middleware/auth.middlware.js";
import { validate } from "../../middleware/validate.middleware.js";
import {
  createReviewSchema,
  updateReviewSchema,
} from "../../validations/Review/review.validation.js";
import {
  createReviewController,
  getAllReviewsController,
  getOneReviewController,
  updateReviewController,
  deleteReviewController,
} from "../../controllers/Review/review.controller.js";

const router = Router();

// Public/User get routes
router.get("/", getAllReviewsController);
router.get("/:id", getOneReviewController);

// Authenticated routes
router.post("/", authMiddleware, validate(createReviewSchema), createReviewController);
router.patch("/:id", authMiddleware, validate(updateReviewSchema), updateReviewController);
router.delete("/:id", authMiddleware, deleteReviewController);

export { router as ReviewRouter };
