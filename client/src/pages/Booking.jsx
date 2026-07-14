import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../services/api";

function Booking() {

  const navigate = useNavigate();
  const location = useLocation();

  const temple = {
  _id: window.location.pathname.split("/").pop()
};

  const [bookingData, setBookingData] = useState({
    bookingDate: "",
    slot: "",
    persons: 1,
  });

  const handleChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };


  const handleBooking = async (e) => {
    e.preventDefault();

    try {

      const token = localStorage.getItem("token");

      const data = {
        temple: temple._id,
        bookingDate: bookingData.bookingDate,
        slot: bookingData.slot,
        persons: bookingData.persons,
      };


      await api.post("/bookings", data, {
        headers: {
          Authorization: token,
        },
      });


      alert("Booking Successful 🎉");

      navigate("/mybookings");


    } catch (error) {

      console.log(error);
      alert(
        error.response?.data?.message ||
        "Booking Failed"
      );

    }
  };


  return (
    <div className="container mt-5">

      <h2>
        Book Darshan Ticket
      </h2>


      <h4>Temple Booking</h4>

      <form onSubmit={handleBooking}>


        <div className="mb-3">

          <label>
            Booking Date
          </label>

          <input
            type="date"
            name="bookingDate"
            className="form-control"
            onChange={handleChange}
            required
          />

        </div>



        <div className="mb-3">

          <label>
            Select Slot
          </label>

          <select
            name="slot"
            className="form-control"
            onChange={handleChange}
            required
          >

            <option value="">
              Select Time
            </option>

            <option>
              6:00 AM - 8:00 AM
            </option>

            <option>
              10:00 AM - 12:00 PM
            </option>

            <option>
              4:00 PM - 6:00 PM
            </option>

          </select>

        </div>



        <div className="mb-3">

          <label>
            Number of Persons
          </label>

          <input
            type="number"
            name="persons"
            min="1"
            className="form-control"
            value={bookingData.persons}
            onChange={handleChange}
          />

        </div>


        <button className="btn btn-success">
          Confirm Booking
        </button>


      </form>


    </div>
  );
}

export default Booking;