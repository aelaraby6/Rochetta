import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import LoginImg from "../../assets/Auth/login.jpg";

export default function Login({ setIsLoggedIn, setUser }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedAdmin = JSON.parse(localStorage.getItem("adminAccount"));
    const storedUserAccount = JSON.parse(localStorage.getItem("userAccount"));

    let role = "";
    let name = "";
    let isValid = false;

    if (
      storedAdmin &&
      formData.email === storedAdmin.username &&
      formData.password === storedAdmin.password
    ) {
      role = "admin";
      name = "Admin";
      isValid = true;
    } else if (
      storedUserAccount &&
      formData.email === storedUserAccount.email &&
      formData.password === storedUserAccount.password
    ) {
      role = "user";
      name = storedUserAccount.name;
      isValid = true;
    }

    if (!isValid) {
      setError("Invalid email or password. Please try again.");
      return;
    }

    const loggedInUser = {
      name,
      email: formData.email,
      role,
    };

    localStorage.setItem("user", JSON.stringify(loggedInUser));
    localStorage.setItem("isLoggedIn", "true");

    setUser(loggedInUser);
    setIsLoggedIn(true);

    navigate("/");
  };

  return (
    <div
      style={{ height: "100vh" }}
      className="login-container d-flex align-items-center justify-content-center card"
    >
      <div className="card shadow p-4 login-card">
        <div className="row g-0 align-items-center">
          <div className="col-md-6">
            <img src={LoginImg} alt="Login" className="img-fluid rounded-start" />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h2
                className="card-title text-center mb-4"
                style={{ color: "green" }}
              >
                Welcome Back!
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                {error && <div className="mb-3 text-danger text-center">{error}</div>}
                <button type="submit" className="btn w-100 btn-success text-white">
                  Login
                </button>
              </form>
              <p className="mt-3 text-center">
                Don’t have an account?{" "}
                <a href="/signup" style={{ color: "green", textDecoration: "underline" }}>
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
