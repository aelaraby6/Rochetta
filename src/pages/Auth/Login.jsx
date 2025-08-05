import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({setCartItems ,setUser ,setIsLoggedIn}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

const handleLogin = (e) => {
  e.preventDefault();

  const admin = JSON.parse(localStorage.getItem("adminAccount"));

  const isAdmin = admin && username === admin.username && password === admin.password;

  const userData = isAdmin
    ? { ...admin }
    : { username, password, role: "user" };

  localStorage.setItem("user", JSON.stringify(userData));
  localStorage.setItem("isLoggedIn", "true");

  setUser(userData);
  setIsLoggedIn(true);

  const savedCart = JSON.parse(localStorage.getItem(`cartItems_${userData.username}`)) || [];
  setCartItems(savedCart);

  navigate("/profile");
};




  return (
    <div style={{marginTop:"130px"}} className="container d-flex justify-content-center align-items-center ">
  <div className="w-50">
    <h2 className="text-center mb-4">Login</h2>
    <form onSubmit={handleLogin}>
      <div className="mb-3">
        <label className="form-label">Username:</label>
        <input
          type="text"
          className="form-control"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Password:</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Login
      </button>
    </form>
  </div>
</div>

  );
}
