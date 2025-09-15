import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:4000/api/auth/login", formData);

      //get data from backend
      const { data, token } = res.data;

      //store token in local storage
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
    }
  };

  return (
    <div
      style={{ height: "100vh" }}
      className="login-container d-flex align-items-center justify-content-center "
    >
      <div className=" shadow p-4 login-card">
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
                {error && (
                  <div className="mb-3 text-danger text-center">{error}</div>
                )}
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
