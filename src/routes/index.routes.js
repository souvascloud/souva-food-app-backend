import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Food Ordering API",
    version: process.env.API_VERSION,
  });
});

export default router;