import restaurants from "../data/restaurants.json" with { type: "json" };
import restaurantDetails from "../data/restaurant-details.json" with { type: "json" };
import logger from "../utils/logger.js";

export const getAllRestaurantsService = async ({ page = 1, limit = 10, category, search, }) => {
    logger.info("Retrieving restaurants from data source.");

    let filteredRestaurants = [...restaurants];

    // Show only open restaurants
    filteredRestaurants = filteredRestaurants.filter(
        (restaurant) => restaurant.isOpen
    );

    // Filter by category
    if (category) {
        filteredRestaurants = filteredRestaurants.filter(
            (restaurant) => restaurant.categoryId === category
        );
    }

    // Search by restaurant name or cuisine
    if (search) {
        const keyword = search.toLowerCase();

        filteredRestaurants = filteredRestaurants.filter(
            (restaurant) =>
                restaurant.name.toLowerCase().includes(keyword) ||
                restaurant.cuisine.some((item) =>
                    item.toLowerCase().includes(keyword)
                )
        );
    }

    // Highest rated first
    filteredRestaurants.sort(
        (a, b) => b.rating.value - a.rating.value
    );

    // Pagination
    const total = filteredRestaurants.length;
    const currentPage = Number(page);
    const pageLimit = Number(limit);

    const startIndex = (currentPage - 1) * pageLimit;
    const endIndex = startIndex + pageLimit;

    return {
        page: currentPage,
        limit: pageLimit,
        total,
        totalPages: Math.ceil(total / pageLimit),
        hasNext: endIndex < total,
        hasPrevious: currentPage > 1,
        restaurants: filteredRestaurants.slice(startIndex, endIndex),
    };
};

export const getRestaurantBySlugService = async (slug) => {
    logger.info(`Fetching restaurant details for: ${slug}`);

    const restaurant = restaurantDetails.find(
        (restaurant) => restaurant.slug === slug
    );

    if (!restaurant) {
        const error = new Error("Restaurant not found.");
        error.statusCode = 404;
        throw error;
    }

    return restaurant;
};