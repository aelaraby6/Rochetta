import { BadRequestError } from "../Errors/error.js";

export const validate = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      return next(new BadRequestError(error.details.map((err) => err.message)));
    }

    req.body = value;
    next();
  };
};
