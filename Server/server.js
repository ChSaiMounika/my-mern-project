import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dns from "dns";

import connectDB from "./config/db.js";

import authRoutes from "./routes/userRoutes.js";
import templeRoutes from "./routes/templeRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

dotenv.config();

dns.setServers(["1.1.1.1", "8.8.8.8"]);

connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Serve Images
app.use("/images", express.static("images"));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/temples", templeRoutes);
app.use("/api/bookings", bookingRoutes);

app.get("/", (req, res) => {
  res.send("Server Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});