import mongoose from "mongoose";
import { PRODUCT_CATEGORIES } from "../../utils/constants.js";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      required: true,
      enum: [...PRODUCT_CATEGORIES],
    },
    image: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    requires_prescription: {
      type: Boolean,
      default: false,
    },
    has_strips: {
      type: Boolean,
      default: false,
    },
    strip_count: {
      type: Number,
      default: 0,
      min: 0,
    },
    is_deleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
