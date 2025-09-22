import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import LoginImg from "../../assets/Auth/login.png";

export default function Login({ setIsLoggedIn, setUser }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:4000/api/auth/login",
        formData
      );

      const { data, token } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("isLoggedIn", "true");

      setUser(data);
      setIsLoggedIn(true);

      navigate("/");
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message ||
          "Invalid email or password. Please try again."
      );
    } finally {
      setLoading(false);
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
              className="img-fluid"
              style={{
                maxWidth: "85%",
                borderRadius: "20px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            />
          </div>
          <div className="col-md-6">
            <div className="card-body p-3">
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
                {error && (
                  <div className="mb-3 text-danger text-center">{error}</div>
                )}
                <button
                  type="submit"
                  className="btn w-100 btn-success text-white d-flex justify-content-center align-items-center"
                  disabled={loading}
                >
                  {loading ? (
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
