import express from "express";
import cors from "cors";
import helmet from "helmet";
import morganMiddleware from "./middleware/morgan.middleware.js";
import errorHandler from "./middleware/error.middleware.js";
import indexRoutes from "./routes/index.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import restaurantRoutes from "./routes/restaurant.routes.js";

const app = express();
app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);


app.use(morganMiddleware);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Food Ordering Backend is running.",
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString(),
  });
});

app.use(`/api/${process.env.API_VERSION}`, indexRoutes);
app.use(`/api/${process.env.API_VERSION}/categories`, categoryRoutes);
app.use(`/api/${process.env.API_VERSION}/restaurants`, restaurantRoutes);

// 404 Middleware
app.use((req, res, next) => {
  const error = new Error(`Route ${req.method} ${req.originalUrl} not found`);
  error.statusCode = 404;
  next(error);
});

app.use(errorHandler);

export default app;