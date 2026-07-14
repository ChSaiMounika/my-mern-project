import api from "./api";

// Create Booking
export const createBooking = async (bookingData) => {
  const response = await api.post("/bookings", bookingData);
  return response.data;
};

// Get My Bookings
export const getMyBookings = async () => {
  const response = await api.get("/bookings");
  return response.data;
};