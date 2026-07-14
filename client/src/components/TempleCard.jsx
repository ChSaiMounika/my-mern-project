import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaClock, FaStar } from "react-icons/fa";

function TempleCard({ temple }) {
  return (
    <div className="temple-card">

      <div className="image-container">
        <img
          src={
            temple.image ||
            "https://via.placeholder.com/500x300?text=Temple"
          }
          alt={temple.name}
          className="temple-image"
        />

        <div className="rating">
          <FaStar /> 4.9
        </div>
      </div>

      <div className="temple-content">

        <h3>{temple.name}</h3>

        <p>
          <FaMapMarkerAlt className="icon" />
          {temple.location}
        </p>

        <p>
          <FaClock className="icon" />
          {temple.timings}
        </p>

        <div className="price-row">

          <div>
            <small>Starting From</small>

            <h4>₹{temple.ticketPrice}</h4>
          </div>

          <Link
            to={`/temple/${temple._id}`}
            className="details-btn"
          >
            View Details
          </Link>

        </div>

      </div>

    </div>
  );
}

export default TempleCard;