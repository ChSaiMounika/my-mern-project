import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function AdminDashboard() {

  const [temple, setTemple] = useState({
    name: "",
    location: "",
    description: "",
    timings: "",
    ticketPrice: "",
    image: ""
  });

  const handleChange = (e) => {
    setTemple({
      ...temple,
      [e.target.name]: e.target.value
    });
  };


  const addTemple = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const res = await api.post(
        "/temples",
        temple,
        {
          headers: {
            Authorization: token
          }
        }
      );

      alert("Temple Added Successfully ✅");

      setTemple({
        name: "",
        location: "",
        description: "",
        timings: "",
        ticketPrice: "",
        image: ""
      });

    } catch (error) {
      console.log(error);
      alert("Failed to add temple ❌");
    }
  };


  return (
    <div className="container mt-5">

      <h2 className="mb-4">
        <Link to="/admin/bookings" className="btn btn-primary">
          View Bookings
        </Link>
      </h2>

      <form onSubmit={addTemple}>

        <input
          className="form-control mb-3"
          name="name"
          placeholder="Temple Name"
          value={temple.name}
          onChange={handleChange}
        />


        <input
          className="form-control mb-3"
          name="location"
          placeholder="Location"
          value={temple.location}
          onChange={handleChange}
        />


        <textarea
          className="form-control mb-3"
          name="description"
          placeholder="Description"
          value={temple.description}
          onChange={handleChange}
        />


        <input
          className="form-control mb-3"
          name="timings"
          placeholder="Timings"
          value={temple.timings}
          onChange={handleChange}
        />


        <input
          className="form-control mb-3"
          name="ticketPrice"
          placeholder="Ticket Price"
          value={temple.ticketPrice}
          onChange={handleChange}
        />


        <input
          className="form-control mb-3"
          name="image"
          placeholder="Image URL"
          value={temple.image}
          onChange={handleChange}
        />


        <button className="btn btn-primary">
          Add Temple
        </button>

      </form>

    </div>
  );
}

export default AdminDashboard;