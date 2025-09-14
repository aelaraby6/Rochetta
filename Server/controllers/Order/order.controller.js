import { BadRequestError, NotFoundError } from "../../Errors/error.js";
import { Cart } from "../../models/Cart/cart.model.js";
import { Order } from "../../models/Order/order.model.js";
import Product from "../../models/Product/product.model.js";
import User from "../../models/User/user.model.js";

// Create Order
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

    const cart = await Cart.findOne({ user: userId, is_deleted: false });
    if (!cart) throw new NotFoundError("Cart not found");
    if (cart.items.length === 0) throw new BadRequestError("Cart is empty");

    const products = await Product.find({
      is_deleted: false,
      _id: { $in: cart.items.map((item) => item.product) },
    });

    for (const product of products) {
      const cartProduct = cart.items.find(
        (item) => item.product.toString() === product._id.toString()
      );
      if (product.stock < cartProduct.quantity) {
        throw new BadRequestError(`Product ${product.name} is out of stock`);
      }
    }

    await Promise.all(
      products.map((product) => {
        const cartProduct = cart.items.find(
          (item) => item.product.toString() === product._id.toString()
        );
        product.stock -= cartProduct.quantity;
        return product.save();
      })
    );

    const totalPrice = cart.items.reduce((sum, item) => {
      const product = products.find(
        (p) => p._id.toString() === item.product.toString()
      );
      return sum + product.price * item.quantity;
    }, 0);

    const newOrder = new Order({
      user: userId,
      items: cart.items,
      total: totalPrice,
      address,
    });
    await newOrder.save();

    cart.items = [];
    cart.total_price = 0;
    await cart.save();

    res
      .status(201)
      .json({ message: "Order created successfully", order: newOrder });
  } catch (error) {
    next(error);
  }
};

// Get All Orders
export const GetUserOrdersController = async (req, res, next) => {
  try {
    const userId = req.user._id;

    const orders = await Order.find({ user: userId, is_deleted: false }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      message: "User orders fetched successfully",
      orders,
    });
  } catch (error) {
    next(error);
  }
};
