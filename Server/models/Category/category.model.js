import mongoose from "mongoose";
import { PRODUCT_CATEGORIES } from "../../utils/constants.js";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Category name is required"],
      trim: true,
      unique: true,
      enum: {
        values: PRODUCT_CATEGORIES,
        message:
          "Category must be one of: Pain Relief, Cold and Flu, Diabetes Care, First Aid",
      },
    },
    description: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export const Category = mongoose.model("Category", categorySchema);
