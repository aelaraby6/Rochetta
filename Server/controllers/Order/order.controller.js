import { BadRequestError, NotFoundError } from "../../Errors/error.js";
import { Cart } from "../../models/Cart/cart.model.js";
import { Order } from "../../models/Order/order.model.js";
import Product from "../../models/Product/product.model.js";
import User from "../../models/User/user.model.js";

export const CreateOrderController = async (req, res, next) => {
  try {
    const { address } = req.body;
    if (
      !address ||
      typeof address !== "string" ||
      address.trim().length === 0
    ) {
      throw new BadRequestError(
        "Address is required and must be a non-empty string"
      );
    }

    const userId = req.user._id;
    const user = await User.findOne({ _id: userId, is_deleted: false });
    if (!user) throw new NotFoundError("User not found");

    const cart = await Cart.findOne({
      user: userId,
      is_deleted: false,
    }).populate("items.product");
    if (!cart) throw new NotFoundError("Cart not found");
    if (!cart.items || cart.items.length === 0)
      throw new BadRequestError("Cart is empty");

    // Build order items from cart items (ensure we store product id, quantity and price)
    const orderItems = cart.items.map((it) => ({
      product: it.product._id ? it.product._id : it.product,
      quantity: it.quantity,
      price: it.price,
    }));

    // Compute total: prefer cart.total_price if present
    const totalPrice =
      typeof cart.total_price === "number" && cart.total_price > 0
        ? cart.total_price
        : orderItems.reduce((s, it) => s + (it.price ?? 0) * it.quantity, 0);

    const newOrder = new Order({
      user: userId,
      items: orderItems,
      total: totalPrice,
      address,
    });

    await newOrder.save();
    await newOrder.populate("items.product", "name price stock stripsPerBox");

    // clear cart
    cart.items = [];
    cart.total_price = 0;
    await cart.save();

    // return created order and the updated (now empty) cart
    return res
      .status(201)
      .json({ message: "Order created successfully", order: newOrder, cart });
  } catch (error) {
    next(error);
  }
};

// Get All Orders
export const GetUserOrdersController = async (req, res, next) => {
  try {
    const userId = req.user._id;

    const orders = await Order.find({ user: userId, is_deleted: false })
      .populate("items.product", "name price stock stripsPerBox") // <<< هنا
      .sort({ createdAt: -1 });

    res.status(200).json({
      message: "User orders fetched successfully",
      orders,
    });
  } catch (error) {
    next(error);
  }
};

// Cancel Order
export const CancelOrderController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const order = await Order.findOne({
      _id: id,
      user: userId,
      is_deleted: false,
    });
    if (!order) throw new NotFoundError("Order not found");

    if (order.status === "canceled") {
      return res.status(400).json({ message: "Order already canceled" });
    }

    order.status = "canceled";
    await order.save();

    res.status(200).json({ message: "Order canceled successfully", order });
  } catch (error) {
    next(error);
  }
};
