import { Cart } from "../../models/Cart/cart.model.js";
import Product from "../../models/Product/product.model.js";
import { BadRequestError } from "../../Errors/error.js";

// Get Cart
export const GetUserCartController = async (req, res, next) => {
  try {
    const user = req.user;
    let cart = await Cart.findOne({
      user: user._id,
      is_deleted: false,
    }).populate("items.product");

    if (!cart) {
      cart = new Cart({ user: user._id, items: [], total_price: 0 });
      await cart.save();
      await cart.populate("items.product");
      return res
        .status(201)
        .json({ message: "Cart created successfully", data: cart });
    }

    return res
      .status(200)
      .json({ message: "Cart found successfully", data: cart });
  } catch (error) {
    next(error);
  }
};

// Add To Cart
export const AddToCartController = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const { productId, quantity } = req.body;
    const qty = quantity || 1;

    const product = await Product.findOne({
      _id: productId,
      is_deleted: false,
    });

    if (!product) throw new BadRequestError("Product not found");

    if (product.stock < qty)
      throw new BadRequestError("Not enough stock available");

    let userCart = await Cart.findOne({ user: userId, is_deleted: false });

    if (!userCart) {
      userCart = new Cart({
        user: userId,
        items: [{ product: productId, quantity: qty, price: product.price }],
        total_price: product.price * qty,
      });
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
    }

    product.stock -= qty;
    await product.save();
    await userCart.save();
    await userCart.populate("items.product");

    return res
      .status(201)
      .json({ message: "Product added to cart successfully", data: userCart });
  } catch (error) {
    next(error);
  }
};

// Remove From Cart (delete item completely)
export const RemoveFromCartController = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const { productId } = req.params;

    const cart = await Cart.findOne({ user: userId, is_deleted: false });
    if (!cart) throw new BadRequestError("Cart not found");

    const idx = cart.items.findIndex(
      (it) => it.product.toString() === productId
    );
    if (idx === -1) throw new BadRequestError("Product not found in cart");

    const item = cart.items[idx];
    const product = await Product.findOne({
      _id: productId,
      is_deleted: false,
    });
    if (product) {
      product.stock += item.quantity; // return all quantity to stock
      await product.save();
    }

    cart.total_price -= item.price * item.quantity;
    if (cart.total_price < 0) cart.total_price = 0;

    cart.items.splice(idx, 1);
    await cart.save();
    await cart.populate("items.product");

    return res
      .status(200)
      .json({ message: "Product removed from cart successfully", data: cart });
  } catch (error) {
    next(error);
  }
};

// Update Product Quantity (set a new quantity)
export const UpdateCartQuantityController = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const { productId } = req.params;
    const { quantity } = req.body;

    if (!quantity || quantity < 1)
      throw new BadRequestError("Quantity must be at least 1");

    const cart = await Cart.findOne({ user: userId, is_deleted: false });

    if (!cart) throw new BadRequestError("Cart not found");

    const existingItem = cart.items.find(
      (it) => it.product.toString() === productId
    );

    if (!existingItem) throw new BadRequestError("Product not found in cart");

    const product = await Product.findOne({
      _id: productId,
      is_deleted: false,
    });

    if (!product) throw new BadRequestError("Product not found");

    const diff = quantity - existingItem.quantity;

    if (diff > 0 && product.stock < diff)
      throw new BadRequestError("Not enough stock available");

    // apply stock change
    product.stock -= diff;
    await product.save();

    // update totals
    const oldTotal = existingItem.price * existingItem.quantity;
    const newTotal = product.price * quantity;
    existingItem.quantity = quantity;
    cart.total_price = cart.total_price - oldTotal + newTotal;

    if (cart.total_price < 0) cart.total_price = 0;

    await cart.save();
    await cart.populate("items.product");

    return res
      .status(200)
      .json({ message: "Cart item updated successfully", data: cart });
  } catch (error) {
    next(error);
  }
};

// Clear Cart
export const ClearCartController = async (req, res, next) => {
  try {
    const userId = req.user._id;

    const cart = await Cart.findOne({
      user: userId,
      is_deleted: false,
    }).populate("items.product");
    
    if (!cart) throw new BadRequestError("Cart not found");

    // return stock for all items
    for (const item of cart.items) {
      const prod = await Product.findById(item.product._id);
      if (prod) {
        prod.stock += item.quantity;
        await prod.save();
      }
    }

    cart.items = [];
    cart.total_price = 0;
    await cart.save();
    await cart.populate("items.product");

    return res
      .status(200)
      .json({ message: "Cart cleared successfully", data: cart });
  } catch (error) {
    next(error);
  }
};
