import logger from "../utils/logger.js";
import { getAllRestaurantsService  , getRestaurantBySlugService} from "../services/restaurant.service.js";

export const getAllRestaurants = async (req, res, next) => {
    try {
        logger.info("Fetching restaurants.");

        const { page = 1, limit = 10, category, search } = req.query;

        const result = await getAllRestaurantsService({
            page,
            limit,
            category,
            search,
        });

        return res.status(200).json({
            success: true,
            message: "Restaurants fetched successfully.",
            ...result,
        });
    } catch (error) {
        logger.error(`Failed to fetch restaurants: ${error.message}`);
        next(error);
    }
};
export const getRestaurantBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;

    logger.info(`Fetching restaurant: ${slug}`);

    const restaurant = await getRestaurantBySlugService(slug);

    return res.status(200).json({
      success: true,
      message: "Restaurant fetched successfully.",
      data: restaurant,
    });
  } catch (error) {
    logger.error(`Failed to fetch restaurant: ${error.message}`);
    next(error);
  }
};