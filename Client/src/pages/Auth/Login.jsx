// src/pages/Auth/Login.jsx
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/ContextObjects";
import "./Login.css";
import LoginImg from "../../assets/Auth/login.png";

export default function Login() {
  const navigate = useNavigate();
  const { login, state: authState } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const result = await login(formData.email, formData.password);
    if (result.success) {
      navigate("/");
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <div className="shadow p-4 login-card">
        <div className="row g-0 align-items-center">
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src={LoginImg}
              alt="Login"
              className="img-fluid login-image"
              style={{
                maxWidth: "85%",
                borderRadius: "20px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            />
          </div>
          <div className="col-md-6">
            <div className="card-body p-3">
              <h2 className="card-title text-center mb-4 login-title">
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
                {error && (
                  <div className="mb-3 text-danger text-center">{error}</div>
                )}
                <button
                  type="submit"
                  className="btn w-100 btn-success text-white d-flex justify-content-center align-items-center"
                  disabled={authState.loading}
                >
                  {authState.loading ? (
                    <div
                      className="spinner-border spinner-border-sm text-light"
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    "Login"
                  )}
                </button>
              </form>
              <p className="mt-3 text-center">
                Don’t have an account?{" "}
                <a href="/signup" className="signup-link">
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
