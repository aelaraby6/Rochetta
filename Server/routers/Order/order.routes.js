import { Router } from "express";
import { authMiddleware } from "../../middleware/auth.middlware.js";
import { CreateOrderController, GetUserOrdersController, CancelOrderController } from "../../controllers/Order/order.controller.js";
import { validate } from "../../middleware/validate.middleware.js";
import { CreateOrderSchema } from "../../validations/Order/order.validation.js";

const router = Router();

router.use(authMiddleware);

router.post("/create-order", validate(CreateOrderSchema), CreateOrderController);
router.get("/", GetUserOrdersController);
router.patch("/:id/cancel", CancelOrderController);

export { router as OrderRouter };
