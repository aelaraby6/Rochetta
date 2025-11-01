// src/components/Admin/AdminNav.jsx

import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/ContextObjects";

const AdminNav = () => {
  const location = useLocation();
  const { logout } = useContext(AuthContext);

  // Helper: check if the path is active
  const isPathActive = (path) => {
    if (path === "/admin") {
      return (
        location.pathname === "/profile" || location.pathname === "/profile/"
      );
    }
    return location.pathname.includes(path);
  };

  return (
    <div className="d-flex justify-content-center align-items-center gap-3 mb-4 p-3 bg-light rounded shadow-sm">
      <Link
        to="/profile"
        className={`btn btn-sm ${
          isPathActive("/admin") ? "btn-success" : "btn-outline-success"
        }`}
      >
        <i className="bi bi-speedometer2 me-2"></i>Dashboard Overview
      </Link>
      <Link
        to="/profile/users"
        className={`btn btn-sm ${
          isPathActive("/users") ? "btn-success" : "btn-outline-success"
        }`}
      >
        <i className="bi bi-people me-2"></i>User Manager
      </Link>
      <Link
        to="/profile/orders"
        className={`btn btn-sm ${
          isPathActive("/orders") ? "btn-success" : "btn-outline-success"
        }`}
      >
        <i className="bi bi-cart-check me-2"></i>Order Manager
      </Link>
      {/* Logout button */}
      <button
        className="btn btn-sm btn-outline-danger ms-auto"
        onClick={logout}
      >
        <i className="bi bi-box-arrow-right me-2"></i>Logout
      </button>
    </div>
  );
};

export default AdminNav;
