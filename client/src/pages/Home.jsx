import { useEffect, useState } from "react";
import { getAllTemples } from "../services/templeService";
import TempleCard from "../components/TempleCard";
import { FaSearch } from "react-icons/fa";

function Home() {
  const [temples, setTemples] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchTemples = async () => {
      try {
        const response = await getAllTemples();
        setTemples(response.data || []);
      } catch (error) {
        console.error("Error fetching temples:", error);
      }
    };

    fetchTemples();
  }, []);

  const filteredTemples = temples.filter(
    (temple) =>
      temple.name.toLowerCase().includes(search.toLowerCase()) ||
      temple.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <section className="hero-section">
        <div className="container text-center">
          <h1>Book Temple Darshan Online</h1>

          <p>
            Reserve your darshan tickets quickly, securely and peacefully.
          </p>

          <div className="search-box">
            <FaSearch className="search-icon" />

            <input
              type="text"
              placeholder="Search Temple..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <a href="#temples" className="explore-btn">
            Explore Temples
          </a>
        </div>
      </section>

      <section id="temples" className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Popular Temples</h2>

          <p className="text-muted">
            Explore India's famous temples.
          </p>
        </div>

        <div className="row">
          {filteredTemples.length > 0 ? (
            filteredTemples.map((temple) => (
              <div
                className="col-lg-4 col-md-6 mb-4"
                key={temple._id}
              >
                <TempleCard temple={temple} />
              </div>
            ))
          ) : (
            <div className="text-center">
              <h4>No temples found.</h4>
            </div>
          )}
        </div>
      </section>

      <section className="why-section">
        <div className="container">
          <h2 className="text-center mb-5">
            Why Choose DarshanEase?
          </h2>

          <div className="row text-center">

            <div className="col-md-3">
              <h1>⚡</h1>
              <h5>Fast Booking</h5>
              <p>Book within minutes.</p>
            </div>

            <div className="col-md-3">
              <h1>🔒</h1>
              <h5>Secure Login</h5>
              <p>Protected with JWT.</p>
            </div>

            <div className="col-md-3">
              <h1>🎫</h1>
              <h5>Easy Booking</h5>
              <p>Simple booking process.</p>
            </div>

            <div className="col-md-3">
              <h1>🛕</h1>
              <h5>Top Temples</h5>
              <p>Most visited temples.</p>
            </div>

          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="row text-center">

            <div className="col-md-4">
              <h2>6+</h2>
              <p>Temples</p>
            </div>

            <div className="col-md-4">
              <h2>100+</h2>
              <p>Bookings</p>
            </div>

            <div className="col-md-4">
              <h2>24×7</h2>
              <p>Support</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Home;