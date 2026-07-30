import mongoose from "mongoose";
import { Cart } from "../../models/Cart/cart.model.js";
import Product from "../../models/Product/product.model.js";
import { BadRequestError } from "../../utils/errors.js";

// Get Cart
export const GetUserCartController = async (req, res, next) => {
  try {
    const user = req.user;
    let cart = await Cart.findOne({
      user: user._id,
      is_deleted: false,
    }).populate("items.product");

    if (!cart) {
      try {
        cart = new Cart({ user: user._id, items: [], total_price: 0 });
        await cart.save();
        await cart.populate("items.product");
        return res
          .status(201)
          .json({ message: "Cart created successfully", data: cart });
      } catch (error) {
        // Handle concurrent creation race condition
        if (error.code === 11000) {
          cart = await Cart.findOne({
            user: user._id,
            is_deleted: false,
          }).populate("items.product");
        } else {
          throw error;
        }
      }
    }

    return res
      .status(200)
      .json({ message: "Cart found successfully", data: cart });
  } catch (error) {
    next(error);
  }
};

export const AddToCartController = async (req, res, next) => {
  const session = await mongoose.startSession();
  try {
    const userId = req.user._id;
    const { productId, quantity } = req.body;
    const qty = quantity || 1;

    session.startTransaction();

    // Atomically decrement stock if sufficient 
    const product = await Product.findOneAndUpdate(
      { _id: productId, is_deleted: false, stock: { $gte: qty } },
      { $inc: { stock: -qty } },
      { new: true, session }
    );

    if (!product) {
      // Check if product exists to throw accurate error
      const productExists = await Product.findOne({ _id: productId, is_deleted: false }).session(session);

      if (!productExists) {
        throw new BadRequestError("Product not found");
      } else {
        throw new BadRequestError("Not enough stock available");
      }
    }

    // Find or create the user's cart 
    let userCart = await Cart.findOne({ user: userId, is_deleted: false }).session(session);

    if (!userCart) {
      userCart = new Cart({
        user: userId,
        items: [{ product: productId, quantity: qty, price: product.price }],
        total_price: product.price * qty,
      });
      await userCart.save({ session });
    } else {
      const existingItem = userCart.items.find(
        (it) => it.product.toString() === productId
      );
      if (existingItem) {
        existingItem.quantity += qty;
      } else {
        userCart.items.push({
          product: productId,
          quantity: qty,
          price: product.price,
        });
      }
      userCart.total_price += product.price * qty;
      await userCart.save({ session });
    }

    await session.commitTransaction();
    session.endSession();

    await userCart.populate("items.product");

    return res
      .status(201)
      .json({ message: "Product added to cart successfully", data: userCart });

  } catch (error) {
    if (session.inTransaction()) {
      await session.abortTransaction();
    }
    session.endSession();
    next(error);
  }
};

export const RemoveFromCartController = async (req, res, next) => {
  const session = await mongoose.startSession();
  try {
    const userId = req.user._id;
    const { productId } = req.params;

    session.startTransaction();

    const cart = await Cart.findOne({ user: userId, is_deleted: false }).session(session);
    if (!cart) throw new BadRequestError("Cart not found");

    const idx = cart.items.findIndex(
      (it) => it.product.toString() === productId
    );
    if (idx === -1) throw new BadRequestError("Product not found in cart");

    const item = cart.items[idx];

    // Atomically increment product stock 
    await Product.findOneAndUpdate(
      { _id: productId },
      { $inc: { stock: item.quantity } },
      { session }
    );

    cart.total_price -= item.price * item.quantity;
    if (cart.total_price < 0) cart.total_price = 0;

    cart.items.splice(idx, 1);
    await cart.save({ session });

    await session.commitTransaction();
    session.endSession();

    await cart.populate("items.product");

    return res
      .status(200)
      .json({ message: "Product removed from cart successfully", data: cart });
  } catch (error) {
    if (session.inTransaction()) {
      await session.abortTransaction();
    }
    session.endSession();
    next(error);
  }
};

export const UpdateCartQuantityController = async (req, res, next) => {
  const session = await mongoose.startSession();
  try {
    const userId = req.user._id;
    const { productId } = req.params;
    const { quantity } = req.body;

    if (!quantity || quantity < 1)
      throw new BadRequestError("Quantity must be at least 1");

    session.startTransaction();

    const cart = await Cart.findOne({ user: userId, is_deleted: false }).session(session);

    if (!cart) throw new BadRequestError("Cart not found");

    const existingItem = cart.items.find(
      (it) => it.product.toString() === productId
    );

    if (!existingItem) throw new BadRequestError("Product not found in cart");

    const product = await Product.findOne({
      _id: productId,
      is_deleted: false,
    }).session(session);

    if (!product) throw new BadRequestError("Product not found");

    const diff = quantity - existingItem.quantity;

    if (diff !== 0) {
      if (diff > 0) {
        // Atomically decrement stock if enough stock is available 
        const updatedProduct = await Product.findOneAndUpdate(
          { _id: productId, is_deleted: false, stock: { $gte: diff } },
          { $inc: { stock: -diff } },
          { new: true, session }
        );

        if (!updatedProduct) {
          throw new BadRequestError("Not enough stock available");
        }
      } else {
        // Atomically increment stock 
        await Product.findOneAndUpdate(
          { _id: productId },
          { $inc: { stock: -diff } },
          { session }
        );
      }
    }

    // update totals
    const oldTotal = existingItem.price * existingItem.quantity;
    existingItem.price = product.price; // Update item price to current product price to prevent discrepancy
    const newTotal = product.price * quantity;
    existingItem.quantity = quantity;
    cart.total_price = cart.total_price - oldTotal + newTotal;

    if (cart.total_price < 0) cart.total_price = 0;

    await cart.save({ session });

    await session.commitTransaction();
    session.endSession();

    await cart.populate("items.product");

    return res
      .status(200)
      .json({ message: "Cart item updated successfully", data: cart });
  } catch (error) {
    if (session.inTransaction()) {
      await session.abortTransaction();
    }
    session.endSession();
    next(error);
  }
};

export const ClearCartController = async (req, res, next) => {
  const session = await mongoose.startSession();
  try {
    const userId = req.user._id;

    session.startTransaction();

    const cart = await Cart.findOne({
      user: userId,
      is_deleted: false,
    }).session(session);

    if (!cart) throw new BadRequestError("Cart not found");

    // return stock for all items
    for (const item of cart.items) {
      await Product.findOneAndUpdate(
        { _id: item.product },
        { $inc: { stock: item.quantity } },
        { session }
      );
    }

    cart.items = [];
    cart.total_price = 0;
    await cart.save({ session });

    await session.commitTransaction();
    session.endSession();

    await cart.populate("items.product");

    return res
      .status(200)
      .json({ message: "Cart cleared successfully", data: cart });
  } catch (error) {
    if (session.inTransaction()) {
      await session.abortTransaction();
    }
    session.endSession();
    next(error);
  }
};

