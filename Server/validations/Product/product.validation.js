import Joi from "joi";
import { PRODUCT_CATEGORIES } from "../../utils/constants.js";

export const CreateProductSchema = Joi.object({
  name: Joi.string().min(1).max(200).required().messages({
    "string.base": "Name must be a string",
    "string.empty": "Name is required",
    "string.min": "Name must be at least 1 character",
    "string.max": "Name must be less than or equal to 200 characters",
    "any.required": "Name is required",
  }),

  description: Joi.string().min(5).max(1000).required().messages({
    "string.base": "Description must be a string",
    "string.empty": "Description is required",
    "string.min": "Description must be at least 5 characters",
    "string.max": "Description must be less than or equal to 1000 characters",
    "any.required": "Description is required",
  }),

  price: Joi.number().min(0).required().messages({
    "number.base": "Price must be a number",
    "number.min": "Price cannot be negative",
    "any.required": "Price is required",
  }),

  category: Joi.string()
    .valid(...PRODUCT_CATEGORIES)
    .required()
    .messages({
      "any.only":
        "Category must be one of: Pain Relief, Cold and Flu, Diabetes Care, First Aid",
      "any.required": "Category is required",
    }),

  image: Joi.string()
    .uri()
    .pattern(/\.[a-zA-Z0-9]+$/)
    .required()
    .messages({
      "string.empty": "Image is required",
      "string.uri": "Image must be a valid URL",
      "string.pattern.base": "Image must have a valid file extension",
      "any.required": "Image is required",
    }),

  stock: Joi.number().min(0).required().messages({
    "number.base": "Stock must be a number",
    "number.min": "Stock cannot be negative",
    "any.required": "Stock is required",
  }),

  requires_prescription: Joi.boolean().default(false).messages({
    "boolean.base": "Requires_prescription must be true or false",
  }),

  has_strips: Joi.boolean().default(false).messages({
    "boolean.base": "Has_strips must be true or false",
  }),

  strip_count: Joi.number().min(0).default(0).messages({
    "number.base": "Strip_count must be a number",
    "number.min": "Strip_count cannot be negative",
  }),
});

export const UpdateProductSchema = Joi.object({
  name: Joi.string().min(1).max(200).messages({
    "string.base": "Name must be a string",
    "string.empty": "Name cannot be empty",
    "string.min": "Name must be at least 1 character",
    "string.max": "Name must be less than or equal to 200 characters",
  }),

  description: Joi.string().min(5).max(1000).messages({
    "string.base": "Description must be a string",
    "string.empty": "Description cannot be empty",
    "string.min": "Description must be at least 5 characters",
    "string.max": "Description must be less than or equal to 1000 characters",
  }),

  price: Joi.number().min(0).messages({
    "number.base": "Price must be a number",
    "number.min": "Price cannot be negative",
  }),

  category: Joi.string()
    .valid(...PRODUCT_CATEGORIES)
    .messages({
      "any.only":
        "Category must be one of: Pain Relief, Cold and Flu, Diabetes Care, First Aid",
    }),

  image: Joi.string()
    .uri()
    .pattern(/\.[a-zA-Z0-9]+$/)
    .messages({
      "string.empty": "Image cannot be empty",
      "string.uri": "Image must be a valid URL",
      "string.pattern.base": "Image must have a valid file extension",
    }),

  stock: Joi.number().min(0).messages({
    "number.base": "Stock must be a number",
    "number.min": "Stock cannot be negative",
  }),

  requires_prescription: Joi.boolean().messages({
    "boolean.base": "Requires_prescription must be true or false",
  }),

  has_strips: Joi.boolean().messages({
    "boolean.base": "Has_strips must be true or false",
  }),

  strip_count: Joi.number().min(0).messages({
    "number.base": "Strip_count must be a number",
    "number.min": "Strip_count cannot be negative",
  }),
})
  .min(1)
  .messages({
    "object.min": "At least one field must be provided for update",
  });
