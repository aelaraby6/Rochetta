import { verifyToken } from "../services/jwt.service.js";
import User from "../models/User/user.model.js";
import { UnAuthorizedError } from "../utils/errors.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      throw new UnAuthorizedError("Token not provided");
    }

    const decoded = verifyToken(token);

    const user = await User.findById(decoded.id).select("-password -refresh_token");

    if (!user || user.is_deleted || !user.is_active) {
      throw new UnAuthorizedError("Invalid or expired token");
    }
    
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};