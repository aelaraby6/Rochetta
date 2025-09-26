import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import axios from "axios";
import SignUpImg from "../../assets/Auth/signup.png";

export default function Signup({ setUser, setIsLoggedIn, setCartItems }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
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

    try {
      setLoading(true);

      const res = await axios.post("http://localhost:4000/api/auth/signup", {
        name,
        email,
        password,
      });

      const { data, token } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("isLoggedIn", "true");

      setUser(data);
      setIsLoggedIn(true);
      setCartItems([]);

      navigate("/profile");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Signup failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container d-flex align-items-center justify-content-center">
      <div className="shadow p-4 signup-card ">
        <div className="row g-0 align-items-center ">
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
              <h2
                className="card-title text-success text-center mb-4"
                
              >
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
                    "Create Account"
                  )}
                </button>
              </form>
              <p className="mt-3 text-center">
                Already have an account?{" "}
                <a
                  href="/login"
                  style={{textDecoration: "underline" }}
                  className=" text-success"
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
