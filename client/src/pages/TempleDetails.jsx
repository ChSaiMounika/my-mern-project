import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getTempleById } from "../services/templeService";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

function TempleDetails() {
  const { id } = useParams();
  const [temple, setTemple] = useState(null);

  useEffect(() => {
    const fetchTemple = async () => {
      try {
        const data = await getTempleById(id);
        setTemple(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTemple();
  }, [id]);

  if (!temple) {
    return (
      <div className="container text-center py-5">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="container py-5">

      <div className="card shadow-lg border-0 rounded-4">

        <img
          src={
            temple.image ||
            "https://via.placeholder.com/1200x500?text=Temple"
          }
          alt={temple.name}
          style={{
            height: "450px",
            objectFit: "cover",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
          }}
        />

        <div className="card-body p-5">

          <h1 className="fw-bold mb-4">
            {temple.name}
          </h1>

          <p className="fs-5">
            <FaMapMarkerAlt color="#F97316" /> {temple.location}
          </p>

          <p className="fs-5">
            <FaClock color="#F97316" /> {temple.timings}
          </p>

          <h3 className="text-warning fw-bold">
            ₹ {temple.ticketPrice}
          </h3>

          <hr />

          <p className="text-muted fs-5">
            {temple.description}
          </p>

          <Link
            to={`/booking/${temple._id}`}
            className="btn btn-warning btn-lg mt-3 text-white"
          >
            Book Now
          </Link>

        </div>

      </div>

    </div>
  );
}

export default TempleDetails;