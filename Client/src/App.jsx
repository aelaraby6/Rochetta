// src/App.jsx

import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Navbar from "./components/NavBar/Header";
import Cart from "./pages/Cart/Cart";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Login from "./pages/Auth/Login";
import Profile from "./pages/Profile/Profile";
import SubNavbar from "./components/SubNavBar/SubNavbar";
import LandingPage from "./pages/Home/landingPage";
import PainRelief from "./pages/CategoryLinks/PainRelief";
import ColdandFlu from "./pages/CategoryLinks/ColdandFlu";
import FirstAid from "./pages/CategoryLinks/FirstAid";
import DiabetesCare from "./pages/CategoryLinks/DiabetesCare";
import Signup from "./pages/Auth/signup";
import NotFound from "./pages/Errors/NotFound";
import "./App.css";
import { AuthContext, CartContext } from "./context/ContextObjects";
import AdminDashboard from "./pages/Admin/AdminDashboard";

function App() {
  const { state: authState } = useContext(AuthContext);
  const { cartCount } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const location = useLocation();
  const hideNavbarPaths = ["/login", "/signup"];
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  useEffect(() => {
    if (!localStorage.getItem("firstRunDone")) {
      localStorage.removeItem("products");
      localStorage.removeItem("cart");
      localStorage.setItem("firstRunDone", "true");
    }
  }, []);

  return (
    <div className={!shouldHideNavbar ? "pt-5" : ""}>
      {!shouldHideNavbar && (
        <>
          <Navbar
            count={cartCount}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            user={authState.user}
            isLoggedIn={authState.isLoggedIn}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          <SubNavbar />
        </>
      )}

      <div
        className={
          !shouldHideNavbar ? "mt-4 container-fluid p-0" : "container-fluid p-0"
        }
      >
        <Routes>
          // <Route path="/admin/*" element={<AdminDashboard />} />
          <Route path="/" element={<LandingPage searchTerm={searchTerm} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/*" element={<Profile />} />
          <Route
            path="/category/pain-relief"
            element={<PainRelief searchTerm={searchTerm} />}
          />
          <Route
            path="/category/cold-and-flu"
            element={<ColdandFlu searchTerm={searchTerm} />}
          />
          <Route
            path="/category/first-aid"
            element={<FirstAid searchTerm={searchTerm} />}
          />
          <Route
            path="/category/diabetes-care"
            element={<DiabetesCare searchTerm={searchTerm} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
