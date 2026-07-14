import express from "express";
import {
  createTemple,
  getTemples,
  getTemple,
  updateTemple,
  deleteTemple,
} from "../controllers/templeController.js";

import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

const router = express.Router();

// ======================
// Public Routes
// ======================

// Get all temples
router.get("/", getTemples);

// Get a single temple
router.get("/:id", getTemple);

// ======================
// Admin-Only Routes
// ======================

// Create a temple
router.post("/", authMiddleware, adminMiddleware, createTemple);

// Update a temple
router.put("/:id", authMiddleware, adminMiddleware, updateTemple);

// Delete a temple
router.delete("/:id", authMiddleware, adminMiddleware, deleteTemple);

export default router;