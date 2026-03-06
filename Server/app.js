import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import { corsOptions } from "./config/corsOptions.js";
import globalErrorHandler from "./middleware/global_error_handler.middleware.js";
import { ApiRouter } from "./routers/index.js";
import { notFoundMiddleware } from "./middleware/not_found.middleware.js";
import { swaggerUi, swaggerSpec } from "./utils/swagger.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors(corsOptions));
app.use(helmet());
app.use(compression());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


// Health Check
app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.use("/api", ApiRouter);

// 404
app.use(notFoundMiddleware);

// Global Error Handler
app.use(globalErrorHandler);

export default app;