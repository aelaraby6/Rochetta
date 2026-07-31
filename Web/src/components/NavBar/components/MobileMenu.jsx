import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Menu, X } from "lucide-react";
import { toggleTheme } from "../../../features/uiSlice/uiSlice";
import CartBadge from "./CartBadge";
import SearchBar from "./SearchBar";

export default function MobileMenu() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const darkMode = useSelector((state) => state.ui.darkMode);

  return (
    <>
      <div className="md:hidden flex items-center gap-4">
        <CartBadge />
        <button
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen(!isOpen)}
          className="text-white"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="w-7 h-7" aria-hidden="true" />
          ) : (
            <Menu className="w-7 h-7" aria-hidden="true" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-green-800 dark:bg-green-950 px-4 pt-4 pb-6 space-y-4 border-t border-green-600 dark:border-green-800 shadow-xl z-40">
          <SearchBar id="mobile-search" />

          <div className="flex flex-col gap-4 pt-2">
            <Link
              to="/"
              className="text-white font-medium text-lg"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <button
              onClick={() => {
                dispatch(toggleTheme());
                setIsOpen(false);
              }}
              className="text-left text-green-200 font-medium text-lg"
            >
              Toggle {darkMode ? "Light" : "Dark"} Mode
            </button>

            {isAuthenticated ? (
              <Link
                to="/profile"
                className="text-white font-medium text-lg"
                onClick={() => setIsOpen(false)}
              >
                Profile
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-white font-bold text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="text-green-800 bg-white inline-block text-center py-2 rounded-lg font-bold text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
