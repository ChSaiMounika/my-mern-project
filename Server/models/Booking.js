import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    temple: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Temple",
      required: true,
    },

    bookingDate: {
      type: Date,
      required: true,
    },

    slot: {
      type: String,
      required: true,
    },

    persons: {
      type: Number,
      default: 1,
    },

    status: {
      type: String,
      default: "Booked",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Booking", bookingSchema);