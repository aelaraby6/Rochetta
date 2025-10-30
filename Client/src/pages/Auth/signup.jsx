// src/pages/Auth/Signup.jsx
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { AuthContext } from "../../context/ContextObjects";
import SignUpImg from "../../assets/Auth/signup.png";

export default function Signup() {
  const navigate = useNavigate();
  const { signup, state: authState } = useContext(AuthContext);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const result = await signup(
      name.trim(),
      email.trim().toLowerCase(),
      password
    );
    if (result.success) {
      navigate("/profile");
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="signup-container d-flex align-items-center justify-content-center">
      <div className="shadow p-4 signup-card">
        <div className="row g-0 align-items-center">
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src={SignUpImg}
              alt="Sign Up"
              className="img-fluid"
              style={{
                maxWidth: "95%",
                height: "400px",
                borderRadius: "20px",
                objectFit: "cover",
                boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
              }}
            />
          </div>
          <div className="col-md-6">
            <div className="card-body p-3">
              <h2 className="card-title text-success text-center mb-4">
                Create An Account
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-control"
                    value={formData.confirmPassword}
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
                    "Create Account"
                  )}
                </button>
              </form>
              <p className="mt-3 text-center">
                Already have an account?{" "}
                <a
                  href="/login"
                  style={{ textDecoration: "underline" }}
                  className="text-success"
                >
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
