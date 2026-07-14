import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top shadow-sm">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand fw-bold" to="/">
          🛕 <span>DarshanEase</span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            {/* My Bookings */}
            {token && (
              <li className="nav-item">
                <Link className="nav-link" to="/my-bookings">
                  My Bookings
                </Link>
              </li>
            )}

            {/* Admin Dashboard */}
            {role === "admin" && (
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  Admin Dashboard
                </Link>
              </li>
            )}

            {!token ? (
              <>
                <li className="nav-item ms-2">
                  <Link
                    className="btn btn-outline-warning px-4"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>

                <li className="nav-item ms-2">
                  <Link
                    className="btn btn-warning text-white px-4"
                    to="/register"
                  >
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item ms-2">
                <button
                  className="btn btn-danger px-4"
                  onClick={logout}
                >
                  Logout
                </button>
              </li>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

