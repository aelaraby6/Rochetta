import rateLimit from "express-rate-limit";

// Signup limiter
export const signupLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: {
    status: 429,
    error: "Too many signup attempts, please try again later",
  },
  standardHeaders: true,
  legacyHeaders: false,
});
