import { Router } from "express";
import { signupLimiter } from "../../middlewares/rate_limiter.middleware.js";
import { SignUpController } from "../../controllers/Auth/auth.controller.js";
import { SignUpSchema } from "../../validations/Auth/auth.validation.js";
import { validate } from "../../middlewares/validate.middleware.js";

const router = Router();



router.post("/signup", signupLimiter, validate(SignUpSchema), SignUpController);

export { router as AuthRouter };
