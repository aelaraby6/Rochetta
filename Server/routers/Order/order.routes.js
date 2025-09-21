import { Router } from "express";
import { authenticateToken } from "../../middlewares/authenticate_token.middlware.js";
import { CreateOrderController, GetUserOrdersController,CancelOrderController} from "../../controllers/Order/order.controller.js";

const router = Router();

router.use(authenticateToken);

router.post("/create-order", CreateOrderController);
router.get("/", GetUserOrdersController);
router.patch("/:id/cancel", CancelOrderController);

export { router as OrderRouter };
