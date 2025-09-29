import { Router } from "express";
import { authenticateToken } from "../../middlewares/authenticate_token.middlware.js";
import {
  AddToCartController,
  ClearCartController,
  GetUserCartController,
  RemoveFromCartController,
  UpdateCartQuantityController,
} from "../../controllers/Cart/cart.controller.js";

const router = Router();

router.use(authenticateToken);

router.get("/get-user-cart", GetUserCartController);
router.post("/add-to-cart", AddToCartController);
router.delete("/clear-cart", ClearCartController);
router.delete("/:productId", RemoveFromCartController);
router.patch("/:productId", UpdateCartQuantityController);

export { router as CartRouter };
