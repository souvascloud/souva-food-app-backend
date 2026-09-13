import logger from "../utils/logger.js";
import { getAllCategoriesService } from "../services/category.service.js";

export const getAllCategories = async (req, res, next) => {
    try {
        logger.info("Fetching all food categories.");
        const activeCategories = await getAllCategoriesService();

        return res.status(200).json({
            success: true,
            message: "Categories fetched successfully.",
            count: activeCategories.length,
            data: activeCategories,
        });

    } catch (error) {
        logger.error(`Failed to fetch categories: ${error.message}`);
        next(error);
    }
};
