import { Router } from "express";
import { authMiddleware } from "../../middleware/auth.middlware.js";
import { checkRole } from "../../middleware/check_roles.middleware.js";
import {
  CreateOrderController,
  GetUserOrdersController,
  CancelOrderController,
  GetAllOrdersAdminController,
  GetOrderByIdAdminController,
  UpdateOrderStatusAdminController,
  PaymobWebhookController
} from "../../controllers/Order/order.controller.js";
import { validate } from "../../middleware/validate.middleware.js";
import { CreateOrderSchema, UpdateOrderStatusSchema } from "../../validations/Order/order.validation.js";

const router = Router();

// Paymob webhook is called externally by Paymob (no user authentication JWT)
router.post("/webhook/paymob", PaymobWebhookController);

router.use(authMiddleware);

router.post("/create-order", validate(CreateOrderSchema), CreateOrderController);
router.get("/", GetUserOrdersController);
router.patch("/:id/cancel", CancelOrderController);

router.get("/all-orders", checkRole(["admin", "super_admin"]), GetAllOrdersAdminController);
router.get("/:id", checkRole(["admin", "super_admin"]), GetOrderByIdAdminController);
router.patch("/:id/status", checkRole(["admin", "super_admin"]), validate(UpdateOrderStatusSchema), UpdateOrderStatusAdminController);

export { router as OrderRouter };
