import { useEffect, useState } from "react";
import api from "../services/api";

function AdminBookings() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getBookings();
  }, []);

  const getBookings = async () => {
    try {
      const res = await api.get("/bookings");
      setBookings(res.data.data || res.data.bookings || []);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">

      <h2>All Bookings</h2>

      {bookings.length === 0 ? (
        <p>No bookings available</p>
      ) : (

        bookings.map((booking) => (
          <div className="card p-3 mb-3" key={booking._id}>

            <h4>
              Temple: {booking.temple?.name || "Temple"}
            </h4>

            <p>
              User: {booking.user?.name || "User"}
            </p>

            <p>
              Date: {new Date(booking.bookingDate).toDateString()}
            </p>

            <p>
              Slot: {booking.slot}
            </p>

            <p>
              Persons: {booking.persons}
            </p>

            <p>
              Status: {booking.status}
            </p>

          </div>
        ))
      )}

    </div>
  );
}

export default AdminBookings;