import { Category } from "../../models/Category/category.model.js";
import { BadRequestError, NotFoundError } from "../../Errors/error.js";
import { validateObjectId } from "../../utils/validateObjectId.js";
import { PRODUCT_CATEGORIES } from "../../utils/constants.js";

export const createCategoryController = async (req, res, next) => {
  try {
    const data = req.body;

    if (!data.name) {
      throw new BadRequestError("Category name is required");
    }

    if (!PRODUCT_CATEGORIES.includes(data.name)) {
      throw new BadRequestError(
        `Category must be one of: ${PRODUCT_CATEGORIES.join(", ")}`
      );
    }

    const existingCategory = await Category.findOne({ name: data.name });

    if (existingCategory) {
      throw new BadRequestError("Category is Already Exist");
    }

    const newCategory = new Category({
      ...data,
    });

    await newCategory.save();

    res.status(201).json({
      message: "Category created successfully",
      data: newCategory,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllCategoriesController = async (req, res, next) => {
  try {
    const categories = await Category.find().select("-__v");

    res.json({
      message: "Categories fetched successfully",
      total: categories.length,
      data: categories,
    });
  } catch (error) {
    next(error);
  }
};

export const getOneCategoryController = async (req, res, next) => {
  try {
    const { id } = req.params;

    validateObjectId(id, "category id");

    const category = await Category.findById(id).select("-__v");

    if (!category) {
      throw new NotFoundError("Category not found");
    }

    res.json({
      message: "Category fetched successfully",
      data: category,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteCategoryController = async (req, res, next) => {
  try {
    const { id } = req.params;

    validateObjectId(id, "category id");

    const category = await Category.findByIdAndDelete(id).select("-__v");

    if (!category) {
      throw new NotFoundError("Category not found");
    }

    res.json({
      message: "Category deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const updateCategoryController = async (req, res, next) => {
  try {
    const { id } = req.params;

    validateObjectId(id, "category id");

    if (!req.body || Object.keys(req.body).length === 0) {
      throw new BadRequestError("Update data is required");
    }

    if (req.body.name && !PRODUCT_CATEGORIES.includes(req.body.name)) {
      throw new BadRequestError(
        `Category must be one of: ${PRODUCT_CATEGORIES.join(", ")}`
      );
    }

    let updateData = { ...req.body };

    const category = await Category.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    ).select("-__v");

    if (!category) {
      throw new NotFoundError("Category not found");
    }

    res.json({
      message: "Category updated successfully",
      data: category,
    });
  } catch (error) {
    next(error);
  }
};
