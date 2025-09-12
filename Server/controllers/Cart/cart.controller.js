import { Cart } from "../../models/Cart/cart.model.js";
import Product from "../../models/Product/product.model.js";
import { BadRequestError } from "../../Errors/error.js";

// Get Cart
export const GetUserCartController = async (req, res, next) => {
  try {
    const user = req.user;

    let cart = await Cart.findOne({ user: user._id, is_deleted: false });

    if (!cart) {
      cart = new Cart({
        user: user._id,
        items: [],
        total_price: 0,
      });

      await cart.save();

      return res.status(201).json({
        message: "Cart created successfully",
        data: cart,
      });
    }

    res.status(200).json({
      message: "Cart found successfully",
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};

// Add To Cart
export const AddToCartController = async (req, res, next) => {
  try {
    const user = req.user;
    const userId = user._id;
    const { productId, quantity } = req.body;

    const product = await Product.findOne({
      _id: productId,
      is_deleted: false,
    });

    if (!product) throw new BadRequestError("Product not found");

    const userCart = await Cart.findOne({ user: userId, is_deleted: false });

    if (!userCart) {
      const newCart = new Cart({
        user: userId,
        items: [
          {
            product: productId,
            quantity: quantity || 1,
            price: product.price,
          },
        ],
        total_price: product.price * (quantity || 1),
      });

      await newCart.save();
      return res
        .status(201)
        .json({ message: "Product added to cart successfully", data: newCart });
    }

    userCart.total_price < 0
      ? (userCart.total_price = 0)
      : userCart.total_price;

    const existingItem = userCart.items.find(
      (item) => item.product.toString() === productId
    );

    if (existingItem) {
      existingItem.quantity += quantity || 1;
      userCart.total_price += product.price * (quantity || 1);
    } else {
      userCart.items.push({
        product: productId,
        quantity: quantity || 1,
        price: product.price,
      });

      userCart.total_price += product.price * (quantity || 1);
    }

    await userCart.save();

    res
      .status(201)
      .json({ message: "Product added to cart successfully", data: userCart });
  } catch (error) {
    next(error);
  }
};

// Remove From Cart
export const RemoveFromCartController = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const { productId } = req.params;

    const cart = await Cart.findOne({ user: userId, is_deleted: false });

    if (!cart) {
      throw new BadRequestError("Cart not found");
    }

    const existingItemIndex = cart.items.findIndex(
      (item) => item.product.toString() === productId
    );

    if (existingItemIndex === -1) {
      throw new BadRequestError("Product not found in cart");
    }

    const existingItem = cart.items[existingItemIndex];
    const itemTotalPrice = existingItem.price * existingItem.quantity;

    cart.total_price -= itemTotalPrice;

    cart.total_price < 0 ? (cart.total_price = 0) : cart.total_price;

    cart.items.splice(existingItemIndex, 1);

    await cart.save();

    return res.status(200).json({
      message: "Product removed from cart successfully",
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};

// Update Product Quantity
export const UpdateCartQuantityController = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const { productId } = req.params;
    const { quantity } = req.body;

    if (!quantity || quantity < 1) {
      throw new BadRequestError("Quantity must be at least 1");
    }

    const cart = await Cart.findOne({ user: userId, is_deleted: false });

    if (!cart) {
      throw new BadRequestError("Cart not found");
    }

    const existingItem = cart.items.find(
      (item) => item.product.toString() === productId
    );

    if (!existingItem) {
      throw new BadRequestError("Product not found in cart");
    }

    const product = await Product.findOne({
      _id: productId,
      is_deleted: false,
    });

    if (!product) {
      throw new BadRequestError("Product not found");
    }

    const oldItemTotal = existingItem.price * existingItem.quantity;
    const newItemTotal = product.price * quantity;

    existingItem.quantity = quantity;
    cart.total_price = cart.total_price - oldItemTotal + newItemTotal;

    cart.total_price < 0 ? (cart.total_price = 0) : cart.total_price;

    await cart.save();

    return res.status(200).json({
      message: "Cart item updated successfully",
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};

// Clear Cart
export const ClearCartController = async (req, res, next) => {
  try {
    const userId = req.user._id;

    const cart = await Cart.findOne({ user: userId, is_deleted: false });

    if (!cart) {
      throw new BadRequestError("Cart not found");
    }

    cart.items = [];
    cart.total_price = 0;

    await cart.save();

    return res.status(200).json({
      message: "Cart cleared successfully",
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};
