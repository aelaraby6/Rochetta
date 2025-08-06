import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginImg from "../../assets/Auth/login.jpg";
import "./Signup.css"; 

export default function Login({ setCartItems, setUser, setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const admin = JSON.parse(localStorage.getItem("adminAccount"));
    const usersList = JSON.parse(localStorage.getItem("usersList")) || [];

    const isAdmin =
      admin && username === admin.username && password === admin.password;

    const isUser = usersList.find(
      (user) => user.username === username && user.password === password
    );

    const userData = isAdmin
      ? { ...admin }
      : isUser
      ? { ...isUser }
      : null;

    if (!userData) {
      setError("Invalid username or password");
      return;
    }

    setError("");
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("isLoggedIn", "true");
    setUser(userData);
    setIsLoggedIn(true);

    const savedCart =
      JSON.parse(localStorage.getItem(`cartItems_${userData.username}`)) || [];
    setCartItems(savedCart);

    navigate("/profile");
  };

  return (
    <div className="container-fluid d-flex flex-column flex-md-row min-vh-100 bg-light">
      {/* Left Side - Form */}
      <div className="col-12 col-md-6 d-flex flex-column justify-content-center px-4 py-5 position-relative">
        <a
          href="#"
          className="position-absolute top-0 start-0 m-4 fs-4 fw-bold text-success text-decoration-none"
        >
          PharmaXpress
        </a>

        <div className="text-center">
          <h1 className="display-5 fw-bold mb-2">Welcome Back</h1>
          <p className="text-muted mb-4">Login to your account</p>
        </div>

        <form
          className="mx-auto bg-white p-4 rounded shadow w-100"
          style={{ maxWidth: "600px" }}
          onSubmit={handleLogin}
        >
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Email / Username
            </label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Enter your username or email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <div className="form-text text-danger">{error}</div>}
          </div>

          <button type="submit" className="btn btn-success w-100">
            Login
          </button>
        </form>
      </div>

      {/* Right Side - Image */}
      <div className="d-none d-md-flex col-md-6 align-items-center justify-content-center bg-success position-relative text-white">
        <div
          className="bubble top-right"
          style={{
            width: "6rem",
            height: "6rem",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #c88a10, #f6c72e)",
            position: "absolute",
            top: "1rem",
            right: "1rem",
            zIndex: 1,
          }}
        ></div>

        <div
          className="bubble bottom-left"
          style={{
            width: "6rem",
            height: "6rem",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #c88a10, #f6c72e)",
            position: "absolute",
            bottom: "1rem",
            left: "1rem",
            zIndex: 1,
          }}
        ></div>

        <img
          src={LoginImg}
          alt="login"
          className="img-fluid rounded shadow"
          style={{ maxWidth: "90%", zIndex: 2 }}
        />
      </div>
    </div>
  );
}
