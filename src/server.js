import "dotenv/config";
import app from "./app.js";
import logger from "./utils/logger.js";

const PORT = process.env.PORT || 5000;
const APP_NAME = process.env.APP_NAME || "Food Ordering Backend";

app.listen(PORT, () => {
  logger.info("=".repeat(50));
  logger.info(` ${APP_NAME} started successfully`);
  logger.info(` Server: http://localhost:${PORT}`);
  logger.info(` Environment: ${process.env.NODE_ENV}`);
  logger.info(` API: http://localhost:${PORT}/api/${process.env.API_VERSION}`);
  logger.info("=".repeat(50));
});