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
import { checkRole } from "../../middleware/check_roles.middleware.js";

const router = Router();

router.use(authMiddleware);


router.get("/", checkRole(["admin", "super_admin"]), getAllReviewsController);
router.get("/:id", checkRole(["admin", "super_admin"]), getOneReviewController);

router.post("/", validate(createReviewSchema), createReviewController);
router.patch("/:id", validate(updateReviewSchema), updateReviewController);
router.delete("/:id", deleteReviewController);

export { router as ReviewRouter };
