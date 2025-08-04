import { Link } from "react-router-dom";

export default function Navbar({ count, darkMode, setDarkMode ,user  }) {


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Epharma
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link me-2" to="/cart">
                Cart
                {count > 0 && (
                  <span className="badge bg-danger ms-2">{count}</span>
                )}
              </Link>
            </li>

            <li>
              <button
                className="btn btn-sm btn-outline-light me-3 mt-1"
                onClick={() => setDarkMode((prev) => !prev)}
              >
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </li>

            <li className="nav-item">
              {user ? (
                <Link className="nav-link" to="/profile">
                  <i className="bi bi-person-circle fs-5"></i>{" "}
                </Link>
              ) : (
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
