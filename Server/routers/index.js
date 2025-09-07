import { Router } from "express";
import { AuthRouter } from "./Auth/auth.routes.js";
import { ProductRouter } from "./Product/product.routes.js";

const router = Router();

router.use("/auth", AuthRouter);
router.use("/products", ProductRouter);

export { router as ApiRouter };
