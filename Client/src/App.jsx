import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/NavBar/Header";
import SubNavbar from "./components/SubNavBar/SubNavbar";
import AppRouter from "./app/router/AppRouter";

export default function App() {
  const { darkMode } = useSelector((state) => state.ui);
  const location = useLocation();

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
        <AppRouter />
      </main>
    </div>
  );
}
