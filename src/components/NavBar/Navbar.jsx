import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar({
  count,
  darkMode,
  setDarkMode,
  user,
  searchTerm,
  setSearchTerm,
}) {
  return (
    <nav
      style={{ backgroundColor: "green" }}
      className="navbar navbar-expand-lg navbar-dark px-4 fixed-top"
    >
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand rochetta-font fs-3" to="/">
          Rochetta
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Search */}
          <form className="d-flex flex-grow-1 my-2 my-lg-0 me-lg-3">
            <input
              className="form-control"
              type="search"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>

          {/* Links */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link me-lg-2" to="/cart">
                Cart
                {count > 0 && (
                  <span className="badge bg-danger ms-2">{count}</span>
                )}
              </Link>
            </li>

            <li className="nav-item">
              <button
                className="btn btn-sm btn-outline-light w-100 w-lg-auto me-lg-3 mt-2 mt-lg-0"
                onClick={() => setDarkMode((prev) => !prev)}
              >
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </li>

            <li className="nav-item d-flex flex-column flex-lg-row gap-2 mt-2 mt-lg-0">
              {user ? (
                <Link className="nav-link" to="/profile">
                  <i className="bi bi-person-circle fs-5"></i>
                </Link>
              ) : (
                <>
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                  <Link className="nav-link" to="/signup">
                    Signup
                  </Link>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
