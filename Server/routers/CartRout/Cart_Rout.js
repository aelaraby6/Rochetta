// import express from "express";
// import Cart from "../models/Cart.js";
// import Product from "../models/Product.js";

// const router = express.Router();

// // ✅ Add to cart
// router.post("/add", async (req, res) => {
//   const { userId, productId, quantity } = req.body;

//   let cart = await Cart.findOne({ userId });

//   if (!cart) {
//     cart = new Cart({ userId, items: [] });
//   }

//   const product = await Product.findById(productId);
//   if (!product) return res.status(404).json({ message: "Product not found" });

//   const existingItem = cart.items.find(
//     (item) => item.productId.toString() === productId
//   );

//   if (existingItem) {
//     existingItem.quantity += quantity || 1;
//   } else {
//     cart.items.push({ productId, quantity: quantity || 1 });
//   }

//   await cart.save();
//   res.json({ message: "Product added to cart", cart });
// });

// // ✅ Increase quantity
// router.put("/increase", async (req, res) => {
//   const { userId, productId } = req.body;

//   const cart = await Cart.findOne({ userId });
//   if (!cart) return res.status(404).json({ message: "Cart not found" });

//   const item = cart.items.find((i) => i.productId.toString() === productId);
//   if (item) item.quantity++;

//   await cart.save();
//   res.json({ message: "Quantity increased", cart });
// });

// // ✅ Decrease quantity
// router.put("/decrease", async (req, res) => {
//   const { userId, productId } = req.body;

//   const cart = await Cart.findOne({ userId });
//   if (!cart) return res.status(404).json({ message: "Cart not found" });

//   const item = cart.items.find((i) => i.productId.toString() === productId);
//   if (item && item.quantity > 1) item.quantity--;
//   else cart.items = cart.items.filter((i) => i.productId.toString() !== productId);

//   await cart.save();
//   res.json({ message: "Quantity decreased", cart });
// });

// // ✅ Delete item
// router.delete("/remove", async (req, res) => {
//   const { userId, productId } = req.body;

//   const cart = await Cart.findOne({ userId });
//   if (!cart) return res.status(404).json({ message: "Cart not found" });

//   cart.items = cart.items.filter((i) => i.productId.toString() !== productId);

//   await cart.save();
//   res.json({ message: "Item removed", cart });
// });

// // ✅ Get cart
// router.get("/:userId", async (req, res) => {
//   const cart = await Cart.findOne({ userId: req.params.userId }).populate("items.productId");
//   if (!cart) return res.json({ cart: [] });
//   res.json({ cart: cart.items });
// });

// export default router;
