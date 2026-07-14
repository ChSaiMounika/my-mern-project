import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Public Routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected Route (for testing)
router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    success: true,
    message: "Welcome!",
    user: req.user,
  });
});

export default router;