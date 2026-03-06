import { Router } from "express";
import { authMiddleware } from "../../middleware/auth.middlware.js";
import { CreateOrderController, GetUserOrdersController,CancelOrderController} from "../../controllers/Order/order.controller.js";

const router = Router();

router.use(authMiddleware);

router.post("/create-order", CreateOrderController);
router.get("/", GetUserOrdersController);
router.patch("/:id/cancel", CancelOrderController);

export { router as OrderRouter };
