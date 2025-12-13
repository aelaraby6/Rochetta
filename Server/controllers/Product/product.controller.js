import Product from "../../models/Product/product.model.js";
import { Category } from "../../models/Category/category.model.js";
import { BadRequestError, NotFoundError } from "../../Errors/error.js";
import { validateObjectId } from "../../utils/validateObjectId.js";
import cloudinary from "../../config/cloudinary.js";
import streamifier from "streamifier";

export const createProductController = async (req, res, next) => {
  try {
    const data = req.body;

    if (!req.file) throw new BadRequestError("Product image is required");

    if (!data.category) throw new BadRequestError("Category is required");
    validateObjectId(data.category, "category id");

    const categoryExists = await Category.findById(data.category);
    if (!categoryExists) throw new BadRequestError("Category not found");

    const uploadStream = () =>
      new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "products" },
          (error, result) => (error ? reject(error) : resolve(result))
        );
        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });

    const result = await uploadStream();

    const newProduct = new Product({
      ...data,
      image: result.secure_url,
    });

    await newProduct.save();
    await newProduct.populate("category");

    res.status(201).json({
      message: "Product created successfully",
      data: newProduct,
    });
  } catch (error) {
    next(error);
  }
};

export const GetAllProductsController = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const sortBy = req.query.sort || "createdAt";
    const sortOrder = req.query.order === "asc" ? 1 : -1;

    if (isNaN(page) || page < 1)
      throw new BadRequestError("Invalid page number");
    if (isNaN(limit) || limit < 1 || limit > 100)
      throw new BadRequestError("Limit must be between 1 and 100");

    const filters = { is_deleted: false };

    // Filter by name if provided
    if (req.query.name) {
      filters.name = { $regex: req.query.name, $options: "i" };
    }

    // Filter by top_selling if provided
    if (req.query.top_selling !== undefined) {
      filters.top_selling = req.query.top_selling === "true";
    }

    const products = await Product.find(filters)
      .skip(skip)
      .limit(limit)
      .sort({ [sortBy]: sortOrder })
      .select("-is_deleted -__v")
      .populate("category");

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

export const GetOneProductController = async (req, res, next) => {
  try {
    const { id } = req.params;
    validateObjectId(id, "product id");

    const product = await Product.findOne({ _id: id, is_deleted: false })
      .select("-is_deleted -__v")
      .populate("category");

    if (!product) throw new NotFoundError("Product not found");

    res.json({
      message: "Product fetched successfully",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

export const DeleteProductController = async (req, res, next) => {
  try {
    const { id } = req.params;
    validateObjectId(id, "product id");

    const product = await Product.findByIdAndUpdate(
      id,
      { is_deleted: true },
      { new: true }
    ).select("-__v");
    if (!product) throw new NotFoundError("Product not found");

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    next(error);
  }
};


export const updateProductController = async (req, res, next) => {
  try {
    const { id } = req.params;
    validateObjectId(id, "product id");

    // ensure there's something to update
    // note: when using multipart, req.body values are strings
    const body = { ...req.body };

    // if file is present, upload to cloudinary and set image url into body
    if (req.file) {
      const uploadStream = () =>
        new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { folder: "products" },
            (error, result) => (error ? reject(error) : resolve(result))
          );
          streamifier.createReadStream(req.file.buffer).pipe(stream);
        });

      const result = await uploadStream();
      body.image = result.secure_url;
    }

    if (!body || Object.keys(body).length === 0)
      throw new BadRequestError("Update data is required");

    // convert numeric/string fields if needed (optional)
    if (body.price) body.price = Number(body.price);
    if (body.stock) body.stock = Number(body.stock);
    if (body.strip_count) body.strip_count = Number(body.strip_count);
    if (typeof body.has_strips !== "undefined")
      body.has_strips = body.has_strips === "true" || body.has_strips === true;
    if (typeof body.requires_prescription !== "undefined")
      body.requires_prescription =
        body.requires_prescription === "true" ||
        body.requires_prescription === true;

    if (body.category) {
      validateObjectId(body.category, "category id");
      const categoryExists = await Category.findById(body.category);
      if (!categoryExists) throw new BadRequestError("Category not found");
    }

    const product = await Product.findOneAndUpdate(
      { _id: id, is_deleted: false },
      { $set: body },
      { new: true, runValidators: true }
    )
      .select("-is_deleted -__v")
      .populate("category");

    if (!product) throw new NotFoundError("Product not found");

    res.json({
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};
