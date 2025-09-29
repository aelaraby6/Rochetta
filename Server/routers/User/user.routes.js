import { Router } from "express";
import { authenticateToken } from "../../middlewares/authenticate_token.middlware.js";
import { GetUserProfileController } from "../../controllers/User/user.controller.js";

const router = Router();

router.use(authenticateToken);

router.get("/me", GetUserProfileController);

export { router as UserRouter };
