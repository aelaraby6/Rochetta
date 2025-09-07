import Product from "../../models/Product/product.model.js";
import { BadRequestError } from "../../Errors/error.js";
import { validateObjectId } from "../../utils/validateObjectId.js";

// Create Product
export const createProductController = async (req, res, next) => {
  try {
    const data = req.body;

    const newProduct = new Product({
      ...data,
    });

    await newProduct.save();

    if (!newProduct) throw new BadRequestError("Product not created");

    res.status(201).json({
      message: "Product created successfully",
      data: newProduct,
    });
  } catch (error) {
    next(error);
  }
};

// Get All Products
export const GetAllProductsController = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const sortBy = req.query.sort || "createdAt";
    const sortOrder = req.query.order === "asc" ? 1 : -1;

    // validation
    if (isNaN(page) || page < 1) {
      throw new BadRequestError("Invalid page number");
    }

    if (isNaN(limit) || limit < 1 || limit > 100) {
      throw new BadRequestError("Limit must be between 1 and 100");
    }

    const filters = {};

    filters.is_deleted = false;

    if (req.query.name) {
      if (typeof req.query.name !== "string") {
        throw new BadRequestError("Name filter must be a string");
      }
      filters.name = { $regex: req.query.name, $options: "i" };
    }

    const products = await Product.find(filters)
      .skip(skip)
      .limit(limit)
      .sort({ [sortBy]: sortOrder })
      .select("-is_deleted -__v");

    const total = await Product.countDocuments(filters);

    res.json({
      message: "Products fetched successfully",
      page,
      total,
      totalPages: Math.ceil(total / limit),
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

// Get One Product
export const GetOneProductController = async (req, res, next) => {
  try {
    const { id } = req.params;

    validateObjectId(id, "product id");

    const product = await Product.findOne({
      _id: id,
      is_deleted: false,
    }).select("-is_deleted -__v");

    if (!product) {
      throw new NotFoundError("Product not found");
    }

    res.json({
      message: "Product fetched successfully",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

// Delete Product
export const DeleteProductController = async (req, res, next) => {
  try {
    const { id } = req.params;

    validateObjectId(id, "product id");

    const product = await Product.findByIdAndUpdate(
      id,
      { is_deleted: true },
      { new: true }
    ).select("-__v");

    if (!product) {
      throw new NotFoundError("Product not found");
    }

    res.json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

// Update Product
export const updateProductController = async (req, res, next) => {
  try {
    const { id } = req.params;

    validateObjectId(id, "product id");

    if (!req.body || Object.keys(req.body).length === 0) {
      throw new BadRequestError("Update data is required");
    }

    const product = await Product.findOneAndUpdate(
      { _id: id, is_deleted: false },
      { $set: req.body },
      {
        new: true,
        runValidators: true,
      }
    ).select("-is_deleted -__v");

    if (!product) {
      throw new NotFoundError("Product not found");
    }

    res.json({
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};
