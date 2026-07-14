import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaClock, FaStar } from "react-icons/fa";

function TempleCard({ temple }) {
  return (
    <div className="temple-card">

      <div className="image-container">
        <img
          src={temple.image}
          alt={temple.name}
          className="temple-image"
          onError={(e) => {
            e.target.src = "/images/tirupati.jpg";
          }}
        />
      </div>

      <div className="temple-content">
        <h3>{temple.name}</h3>

        <p>
          <FaMapMarkerAlt /> {temple.location}
        </p>

        <p>
          <FaClock /> {temple.timings}
        </p>

        <p>
          <FaStar /> ₹{temple.ticketPrice}
        </p>

        <Link to={`/temple/${temple._id}`} className="btn">
          View Details
        </Link>
      </div>

    </div>
  );
}

export default TempleCard;