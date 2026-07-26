import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    quantity: { type: Number, required: true, min: 1 },
    price: { type: Number, required: true, min: 0 },
  },
  { _id: false }
);

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    items: {
      type: [orderItemSchema],
      required: true,
      validate: {
        validator: (items) => items.length > 0,
        message: "Order must contain at least one item.",
      },
    },
    total: { type: Number, required: true, min: 0 },
    status: {
      type: String,
      enum: ["pending", "shipped", "delivered", "canceled"],
      default: "pending",
      index: true,
    },
    address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String },
      phone: { type: String },
    },
    shippedAt: { type: Date },
    deliveredAt: { type: Date },
    canceledAt: { type: Date },
    is_deleted: { type: Boolean, default: false, select: false },
  },
  {
    timestamps: true,
  }
);


orderSchema.index({ user: 1, status: 1 });

export const Order = mongoose.model("Order", orderSchema);