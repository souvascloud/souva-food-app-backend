import { Router } from "express";
import { getAllRestaurants, getRestaurantBySlug,} from "../controllers/restaurant.controller.js";

const router = Router();

router.get("/", getAllRestaurants);

router.get("/:slug", getRestaurantBySlug);

export default router;