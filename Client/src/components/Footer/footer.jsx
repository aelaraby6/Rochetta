import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; 

export default function Footer() {
  return (
    <footer className="footer-container text-white py-4 mt-5">
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold" style={{ color: "#f4a460" }}>
              PharmaXpress
            </h4>
            <p style={{ fontSize: "0.9rem" }}>
              Your go-to pharmacy marketplace for fast, reliable, and affordable healthcare products.
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="footer-link">Home</Link>
              </li>
              <li>
                <Link to="/cart" className="footer-link">Cart</Link>
              </li>
              <li>
                <Link to="/profile" className="footer-link">Profile</Link>
              </li>
              <li>
                <Link to="/login" className="footer-link">Login</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase mb-3">Contact Us</h5>
            <p>Email: support@pharmaxpress.com</p>
            <p>Phone: +20 100 123 4567</p>
            <div className="social-icons mt-3">
              <a href="#" className="me-3 footer-icon"><i className="bi bi-facebook"></i></a>
              <a href="#" className="me-3 footer-icon"><i className="bi bi-twitter"></i></a>
              <a href="#" className="footer-icon"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>

        <hr className="border-top" />
        <p className="text-center small mb-0">
          &copy; {new Date().getFullYear()} PharmaXpress. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
