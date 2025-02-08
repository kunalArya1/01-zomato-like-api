import { Router } from "express";
import {
  createRestaurant,
  deleteRestaurantById,
  filterRestaurantsByRating,
  readAllRestaurants,
  readRestaurant,
  readRestaurantsByCuisine,
  searchRestaurantsByLocation,
  updateRestaurantById,
} from "../controllers/restaurant.controllers";

const router = Router();

router.route("/").get();
router.route("/add-restaturant").post(createRestaurant);
router.route("/res-details").get(readRestaurant);
router.route("/all-res-detials").get(readAllRestaurants);
router.route("/res-by-cuisne").get(readRestaurantsByCuisine);
router.route("/update-res").post(updateRestaurantById);
router.route("/delete-res-by-id").get(deleteRestaurantById);
router.route("/res-by-location").get(searchRestaurantsByLocation);
router.route("/filter-res-by-rating").get(filterRestaurantsByRating);

export default router;
