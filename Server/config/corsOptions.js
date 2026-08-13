export const corsOptions = {
  origin:
    "https://rochetta-a1ce.vercel.app" ||
    "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};
