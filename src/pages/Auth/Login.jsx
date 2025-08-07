import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import LoginImg from "../../assets/Auth/login.jpg";

export default function Login({ setUser, setIsLoggedIn }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ name: "User", email: formData.email });
    setIsLoggedIn(true);
    navigate("/");
  };

  return (
    <div style={{height:"100vh"}} className="login-container d-flex align-items-center justify-content-center card ">
      <div className="card shadow p-4 login-card">
        <div className="row g-0 align-items-center">
          <div className="col-md-6">
            <img
              src={LoginImg}
              alt="Login"
              className="img-fluid rounded-start"
            />
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
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
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
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
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
                <button
                  type="submit"
                  className="btn w-100 btn-success text-white"
                >
                  Login
                </button>
              </form>
              <p className="mt-3 text-center">
                Don’t have an account?{" "}
                <a
                  href="/signup"
                  style={{ color: "green", textDecoration: "underline" }}
                >
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
