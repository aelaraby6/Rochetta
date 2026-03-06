import { BadRequestError, NotFoundError,ConflictError  } from "../../utils/errors.js";
import { generateToken } from "../../services/jwt.service.js";
import User from "../../models/User/user.model.js";
import {
  ComparePassword,
  hashPassword,
} from "../../services/password.service.js";
import nodemailer from "nodemailer";
import { getWelcomeTemplate } from "../../utils/email.js"


const formatUserResponse = (user) => {
  const { name, email } = user.toObject();
  return { name, email };
};


// Register
export const RegisterController = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const normalizedEmail = email.toLowerCase();

    const existingUser = await User.findOne({ email: normalizedEmail });

    if (existingUser?.is_active && !existingUser?.is_deleted) {
      throw new ConflictError("Email already exists");
    }

    const hashedPassword = await hashPassword(password);

    const savedUser = existingUser?.is_deleted
      ? await User.findByIdAndUpdate(
        existingUser._id,
        {
          name,
          password: hashedPassword,
          role: DEFAULT_ROLE,
          is_deleted: false,
          is_active: true,
        },
        { new: true }
      )
      : await User.create({
        name,
        email: normalizedEmail,
        password: hashedPassword,
      });

    const token = generateToken(savedUser._id, savedUser.role);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // Send welcome email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    transporter.sendMail({
      from: `"Rochetta 💊" <${process.env.EMAIL_USER}>`,
      to: savedUser.email,
      subject: "Welcome to Rochetta!",
      html: getWelcomeTemplate(savedUser.name),
    }).catch((err) => {
      console.error("Welcome email failed:", err.message);
    });

    return res.status(201).json({
      message: existingUser?.is_deleted
        ? "Account reactivated successfully"
        : "Registered successfully",
      data: formatUserResponse(savedUser),
    });
  } catch (error) {
    next(error);
  }
};

// Login 
export const LoginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const normalizedEmail = email.toLowerCase();

    const user = await User.findOne({ email: normalizedEmail }).select("+password");

    if (!user || user.is_deleted || !user.is_active) {
      throw new NotFoundError("Invalid email or password");
    }

    const isMatch = await ComparePassword(password, user.password);

    if (!isMatch) {
      throw new BadRequestError("Invalid email or password");
    }

    const token = generateToken(user._id, user.role);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      message: "Logged in successfully",
      data: formatUserResponse(user),
    });
  } catch (error) {
    next(error);
  }
};

// Logout
export const LogoutController = async (req, res, next) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    return res.status(200).json({
      message: "Logged out successfully",
    });
  } catch (error) {
    next(error);
  }
};