import categories from "../data/categories.json" with { type: "json" };
import logger from "../utils/logger.js";

export const getAllCategoriesService = async () => {
  logger.info("Retrieving categories from data source.");

  const activeCategories = categories
    .filter((category) => category.isActive)
    .sort((a, b) => a.displayOrder - b.displayOrder);

  return activeCategories;
};