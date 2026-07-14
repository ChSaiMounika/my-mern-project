import express from "express";

import {
  createBooking,
  getBookings,
  getBookingById,
  updateBooking,
  deleteBooking,
} from "../controllers/bookingController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Create Booking
router.post("/", authMiddleware, createBooking);

// Get All Bookings
router.get("/", authMiddleware, getBookings);

// Get Single Booking
router.get("/:id", authMiddleware, getBookingById);

// Update Booking
router.put("/:id", authMiddleware, updateBooking);

// Delete Booking
router.delete("/:id", authMiddleware, deleteBooking);

export default router;