import { Router } from "express";
import { AuthRouter } from "../modules/auth/auth.routes.js";
import { CartRouter } from "../modules/cart/cart.routes.js";
import { CategoryRouter } from "../modules/category/category.routes.js";
import { ChatRouter } from "../modules/chat/chat.routes.js";
import { DashboardRouter } from "../modules/dashboard/dashboard.routes.js";
import { NotificationRouter } from "../modules/notification/notification.routes.js";
import { OrderRouter } from "../modules/order/order.routes.js";
import { ProductRouter } from "../modules/product/product.routes.js";
import { ReviewRouter } from "../modules/review/review.routes.js";
import { UserRouter } from "../modules/user/user.routes.js";

const router = Router();

router.use("/auth", AuthRouter);
router.use("/cart", CartRouter);
router.use("/categories", CategoryRouter);
router.use("/chat", ChatRouter);
router.use("/dashboard", DashboardRouter);
router.use("/notifications", NotificationRouter);
router.use("/order", OrderRouter);
router.use("/products", ProductRouter);
router.use("/reviews", ReviewRouter);
router.use("/user", UserRouter);

export { router as ApiRouter };
