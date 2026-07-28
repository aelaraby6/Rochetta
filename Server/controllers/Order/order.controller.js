import { BadRequestError, NotFoundError, ConflictError, InternalServerError } from "../../utils/errors.js";
import { Cart } from "../../models/Cart/cart.model.js";
import { Order } from "../../models/Order/order.model.js";
import User from "../../models/User/user.model.js";
import Product from "../../models/Product/product.model.js";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import { getOrderConfirmationTemplate } from "../../utils/email.js";
import { checkAndNotifyLowStock } from "../../services/notification.service.js";

export const CreateOrderController = async (req, res, next) => {
  const session = await mongoose.startSession();

  try {
    const { items, address } = req.body;
    const userId = req.user._id;

    const productIds = items.map((item) => item.product);
    const products = await Product.find({
      _id: { $in: productIds },
      is_deleted: false,
    });

    if (products.length !== productIds.length) {
      throw new NotFoundError("One or more products not found");
    }

    for (const item of items) {
      const product = products.find((p) => p._id.toString() === item.product);
      if (product.stock < item.quantity) {
        throw new ConflictError(`Stock insufficient for product: ${product.name}`);
      }
    }

    let total = 0;
    const orderItems = [];
    for (const item of items) {
      const product = products.find((p) => p._id.toString() === item.product);
      total += product.price * item.quantity;
      orderItems.push({
        product: product._id,
        quantity: item.quantity,
        price: product.price,
      });
    }

    session.startTransaction();

    const [newOrder] = await Order.create(
      [
        {
          user: userId,
          items: orderItems,
          total,
          address,
          status: "pending",
        },
      ],
      { session }
    );

    const updatedProducts = [];
    for (const item of items) {
      const updatedProduct = await Product.findOneAndUpdate(
        { _id: item.product, stock: { $gte: item.quantity } },
        { $inc: { stock: -item.quantity } },
        { new: true, session }
      );
      if (!updatedProduct) {
        throw new ConflictError("Stock became insufficient during transaction processing");
      }
      updatedProducts.push(updatedProduct);
    }

    const cart = await Cart.findOne({ user: userId, is_deleted: false });
    if (cart) {
      cart.items = [];
      cart.total_price = 0;
      await cart.save({ session });
    }

    await session.commitTransaction();
    session.endSession();

    // Check and notify low stock for products after successful checkout transaction
    for (const prod of updatedProducts) {
      checkAndNotifyLowStock(prod).catch((err) =>
        console.error("Low stock check error from order placement:", err.message)
      );
    }

    const user = await User.findById(userId);

    if (user && user.email) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const populatedOrder = await Order.findById(newOrder._id).populate("items.product", "name price");

      transporter.sendMail({
        from: `"Rochetta 💊" <${process.env.EMAIL_USER}>`,
        to: user.email,
        subject: "Order Confirmation - Rochetta",
        html: getOrderConfirmationTemplate(user.name, populatedOrder),
      }).catch((err) => {
        console.error("Order confirmation email failed:", err.message);
      });
    }

    return res.status(201).json({
      message: "Order created successfully",
      order: newOrder,
    });
  } catch (error) {
    // Rollback transaction on failure
    if (session.inTransaction()) {
      await session.abortTransaction();
    }
    session.endSession();


    if (error.statusCode && error.statusCode !== 500) {
      return next(error);
    }
    return next(new InternalServerError("Order Failed: " + error.message));
  }
};

export const GetUserOrdersController = async (req, res, next) => {
  try {
    const userId = req.user._id;

    const orders = await Order.find({ user: userId, is_deleted: false })
      .populate("items.product", "name price stock stripsPerBox")
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
  const session = await mongoose.startSession();
  try {
    const { id } = req.params;
    const userId = req.user._id;

    session.startTransaction();

    const order = await Order.findOne({
      _id: id,
      user: userId,
      is_deleted: false,
    }).session(session);
    if (!order) throw new NotFoundError("Order not found");

    if (order.status === "canceled") {
      return res.status(400).json({ message: "Order already canceled" });
    }

    for (const it of order.items) {
      const prodId = it.product?._id ? it.product._id : it.product;
      if (!prodId) continue;

      await Product.findByIdAndUpdate(
        prodId,
        { $inc: { stock: it.quantity || 0 } },
        { session }
      );
    }

    order.status = "canceled";
    order.is_deleted = true;

    await order.save({ session, validateBeforeSave: false });

    await session.commitTransaction();
    session.endSession();

    await order.populate("items.product", "name price stock stripsPerBox");

    return res.status(200).json({ message: "Order canceled and removed", order });
  } catch (error) {
    if (session.inTransaction()) {
      await session.abortTransaction();
    }
    session.endSession();
    next(error);
  }
};

// Get All Orders 
export const GetAllOrdersAdminController = async (req, res, next) => {
  try {
    const { status, minTotal, maxTotal, startDate, endDate, search } = req.query;

    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const skip = (page - 1) * limit;

    let query = { is_deleted: false };

    if (status) {
      query.status = status;
    }

    if (minTotal || maxTotal) {
      query.total = {};
      if (minTotal) query.total.$gte = parseFloat(minTotal);
      if (maxTotal) query.total.$lte = parseFloat(maxTotal);
    }

    if (startDate || endDate) {
      query.createdAt = {};
      if (startDate) query.createdAt.$gte = new Date(startDate);
      if (endDate) query.createdAt.$lte = new Date(endDate);
    }

    if (search) {
      const searchOrConditions = [];

      if (mongoose.Types.ObjectId.isValid(search)) {
        searchOrConditions.push({ _id: search });
      }

      const matchedUsers = await User.find({
        $or: [
          { name: { $regex: search, $options: "i" } },
          { email: { $regex: search, $options: "i" } },
        ],
      }).select("_id");

      if (matchedUsers.length > 0) {
        searchOrConditions.push({ user: { $in: matchedUsers.map((u) => u._id) } });
      }

      const matchedProducts = await Product.find({
        name: { $regex: search, $options: "i" },
      }).select("_id");

      if (matchedProducts.length > 0) {
        searchOrConditions.push({ "items.product": { $in: matchedProducts.map((p) => p._id) } });
      }

      searchOrConditions.push(
        { "address.street": { $regex: search, $options: "i" } },
        { "address.city": { $regex: search, $options: "i" } }
      );

      query.$or = searchOrConditions;
    }

    const totalOrders = await Order.countDocuments(query);
    const orders = await Order.find(query)
      .populate("user", "name email")
      .populate("items.product", "name price stock stripsPerBox")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalPages = Math.ceil(totalOrders / limit);

    return res.status(200).json({
      message: "Orders fetched successfully by admin",
      data: {
        orders,
        pagination: {
          totalOrders,
          totalPages,
          currentPage: page,
          limit,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

// Get Order by ID 
export const GetOrderByIdAdminController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const order = await Order.findOne({ _id: id, is_deleted: false })
      .populate("user", "name email")
      .populate("items.product", "name price stock stripsPerBox");

    if (!order) {
      throw new NotFoundError("Order not found");
    }

    return res.status(200).json({
      message: "Order fetched successfully by admin",
      order,
    });
  } catch (error) {
    next(error);
  }
};

// Update Order Status 
export const UpdateOrderStatusAdminController = async (req, res, next) => {
  const session = await mongoose.startSession();
  try {
    const { id } = req.params;
    const { status } = req.body;

    session.startTransaction();

    const order = await Order.findOne({ _id: id, is_deleted: false }).session(session);
    if (!order) {
      throw new NotFoundError("Order not found");
    }

    if (order.status === "canceled") {
      throw new BadRequestError("Cannot update status of a canceled order");
    }

    if (order.status === status) {
      return res.status(400).json({ message: `Order status is already ${status}` });
    }

    if (status === "canceled") {
      for (const it of order.items) {
        const prodId = it.product?._id ? it.product._id : it.product;
        if (!prodId) continue;
        await Product.findByIdAndUpdate(
          prodId,
          { $inc: { stock: it.quantity || 0 } },
          { session }
        );
      }
      order.canceledAt = new Date();
    } else if (status === "shipped") {
      order.shippedAt = new Date();
    } else if (status === "delivered") {
      order.deliveredAt = new Date();
    }

    order.status = status;
    await order.save({ session, validateBeforeSave: false });

    await session.commitTransaction();
    session.endSession();

    await order.populate("user", "name email");
    await order.populate("items.product", "name price stock stripsPerBox");

    return res.status(200).json({
      message: "Order status updated successfully",
      order,
    });
  } catch (error) {
    if (session.inTransaction()) {
      await session.abortTransaction();
    }
    session.endSession();
    next(error);
  }
};

