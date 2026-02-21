import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/NavBar/Header";
import SubNavbar from "./components/SubNavBar/SubNavbar";
import ProtectedRoute from "./components/layouts/ProtectedRoute";

import LandingPage from "./pages/Home/landingPage";
import Cart from "./features/cart/ui/Cart";
import ProductDetails from "./features/products/ui/ProductDetails/ProductDetails";
import CategoryView from "./features/products/ui/CategoryView";
import Login from "./features/auth/ui/Login";
import Signup from "./features/auth/ui/signup";
import Profile from "./pages/Profile/Profile";
import NotFound from "./pages/Errors/NotFound";

import AdminAddProduct from "./features/admin/AdminAddProduct";
import AdminEditProduct from "./features/admin/AdminEditProduct";

function App() {
  const { darkMode } = useSelector((state) => state.ui);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const location = useLocation();
  const hideNavbarPaths = ["/login", "/signup"];
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Toaster position="top-center" reverseOrder={false} />

      {!shouldHideNavbar && (
        <>
          <Navbar />
          <SubNavbar />
        </>
      )}

      <main
        className={`flex-grow w-full flex flex-col ${!shouldHideNavbar ? "pt-[112px]" : ""}`}
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/category/:slug" element={<CategoryView />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/add-product"
            element={
              <ProtectedRoute>
                <AdminAddProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/edit-product/:id"
            element={
              <ProtectedRoute>
                <AdminEditProduct />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
