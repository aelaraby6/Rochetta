import { Router } from "express";
import { authMiddleware } from "../../middleware/auth.middlware.js";
import { GetUserProfileController } from "../../controllers/User/user.controller.js";

const router = Router();

router.use(authMiddleware);

router.get("/me", GetUserProfileController);

export { router as UserRouter };
