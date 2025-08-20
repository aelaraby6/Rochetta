import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import SignUpImg from "../../assets/Auth/signup.jpg";

export default function Signup({ setUser, setIsLoggedIn, setCartItems }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  // basic validation
  const name = formData.name.trim();
  const email = formData.email.trim().toLowerCase();
  const password = formData.password;
  const confirmPassword = formData.confirmPassword;

  if (!name || !email || !password || !confirmPassword) {
    setError("Please fill all fields");
    return;
  }

  if (password !== confirmPassword) {
    setError("Passwords do not match");
    return;
  }

  // users array in localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // prevent duplicate email
  const exists = users.some((u) => u.email === email);
  if (exists) {
    setError("An account with this email already exists");
    return;
  }

  // create new user object (store minimal safe data)
  const newUserAccount = {
    name,
    email,
    password,
    role: "user",
  };

  // save to users array
  users.push(newUserAccount);
  localStorage.setItem("users", JSON.stringify(users));

  // create user-specific cart key and init it
  const userCartKey = `cart_${email}`;
  localStorage.setItem(userCartKey, JSON.stringify([]));

  // set logged-in user (public profile)
  const loggedInUser = { name, email, role: "user" };
  localStorage.setItem("user", JSON.stringify(loggedInUser));
  localStorage.setItem("isLoggedIn", "true");

  // keep component state in sync
  setUser(loggedInUser);
  setIsLoggedIn(true);
  setCartItems([]); // sync with the empty cart we just created

  // go to profile
  navigate("/profile");
};


  return (
    <div className="container-fluid d-flex flex-column flex-md-row min-vh-100">
      <div className="col-12 col-md-6 d-flex flex-column justify-content-center px-4 py-5 position-relative">
        <a
          href="#"
          className="position-absolute top-0 start-0 m-4 fs-4 fw-bold text-success text-decoration-none"
        >
          PharmaXpress
        </a>

        <div className="text-center">
          <h1 className="display-5 fw-bold mb-2">Create An Account</h1>
          <p className="text-muted mb-4">Start your shopping journey today</p>
        </div>

        <form
          className="mx-auto p-4 rounded shadow w-100 card"
          style={{ maxWidth: "600px" }}
          onSubmit={handleSubmit}
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {error && <div className="form-text text-danger">{error}</div>}
          </div>

          <button type="submit" className="btn btn-success w-100">Create Account</button>
        </form>
      </div>

      <div className="d-none d-md-flex col-md-6 align-items-center justify-content-center bg-success position-relative text-white">
        <div className="bubble top-right"></div>
        <div className="bubble bottom-left"></div>
        <img
          src={SignUpImg}
          alt="signup"
          className="img-fluid rounded shadow"
          style={{ maxWidth: "90%", zIndex: 2 }}
        />
      </div>
    </div>
  );
}
