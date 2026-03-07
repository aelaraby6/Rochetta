import { Router } from "express";
import { authMiddleware } from "../../middleware/auth.middlware.js";
import { GetUserProfileController, UpdateAvatarController, UpdateProfileController } from "../../controllers/User/user.controller.js";
import { processImage, uploadSingle } from "../../middleware/upload.middleware.js";
import { updateProfileSchema } from "../../validations/User/user.validation.js";
import { validate } from "../../middleware/validate.middleware.js";

const router = Router();

router.use(authMiddleware);

router.get("/me", GetUserProfileController);

router.patch("/update-avatar",
    authMiddleware,
    uploadSingle("avatar"),
    processImage({ width: 300, height: 300 }),
    UpdateAvatarController);

router.patch(
    "/update-profile",
    validate(updateProfileSchema),
    UpdateProfileController
);


export { router as UserRouter };
