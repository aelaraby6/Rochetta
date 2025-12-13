import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext, CartContext } from "../../context/ContextObjects";
import "./Header.css";

export default function Header({
  darkMode,
  setDarkMode,
  searchTerm,
  setSearchTerm,
}) {
  const { state: authState } = useContext(AuthContext);
  const { cartCount } = useContext(CartContext);
  const count = cartCount;
  const user = authState.user;

  return (
    <nav className="navbar navbar-expand-lg navbar-light px-4 fixed-top shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand rochetta-font fs-3" to="/">
          Rochetta
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
          <form className="d-flex flex-grow-1 my-2 my-lg-0 me-lg-3">
            <input
              className="form-control search-input"
              type="search"
              placeholder="Search medicine, medical products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark fs-5 me-lg-2" to="/cart">
                <i className="bi bi-cart"></i>
                {count > 0 && (
                  <span className="badge bg-danger ms-2">
                    {count.toFixed(2)}
                  </span>
                )}
              </Link>
            </li>

            <li className="nav-item">
              <button
                className="btn btn-toggle-mode btn-sm btn-outline-secondary w-100 w-lg-auto me-lg-3 mt-2 mt-lg-0"
                onClick={() => setDarkMode((prev) => !prev)}
              >
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </li>

            <li className="nav-item d-flex flex-column flex-lg-row gap-2 ms-2 mt-2 mt-lg-0">
              {user ? (
                <Link className="nav-link text-dark" to="/profile">
                  <i className="bi bi-person-circle fs-5"></i>
                </Link>
              ) : (
                <>
                  <Link className="nav-link text-dark auth-link" to="/login">
                    Login
                  </Link>
                  <Link className="nav-link text-dark auth-link" to="/signup">
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
