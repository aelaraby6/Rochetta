import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Search, ShoppingCart, User, Moon, Sun, Menu, X } from "lucide-react";
import { toggleTheme, setSearchTerm } from "../../features/uiSlice/uiSlice";
import { useGetCartQuery } from "../../features/cart/store/cartApi";
import { useDebounce } from "../../hooks/useDebounce";

export default function Header() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { darkMode, searchTerm } = useSelector((state) => state.ui);

  const [localSearch, setLocalSearch] = useState(searchTerm);
  const debouncedSearch = useDebounce(localSearch, 500);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { data: cartData } = useGetCartQuery(undefined, {
    skip: !isAuthenticated,
  });
  const cartItems = cartData?.data?.items || [];
  const cartCount = cartItems.length;

  useEffect(() => {
    dispatch(setSearchTerm(debouncedSearch));
  }, [debouncedSearch, dispatch]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-green-700 dark:bg-green-900 text-white shadow-md transition-colors duration-300">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            aria-label="Rochetta Home"
            className="font-['Pacifico'] text-3xl tracking-wide text-white flex-shrink-0 hover:opacity-90 transition-opacity"
          >
            Rochetta
          </Link>

          <div className="hidden md:flex flex-1 w-full mx-6 lg:mx-12 relative">
            <label htmlFor="desktop-search" className="sr-only">
              Search products
            </label>
            <input
              id="desktop-search"
              type="text"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              placeholder="Search medicine, medical products..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white dark:bg-[#1e1e1e] text-gray-900 dark:text-white focus:ring-2 focus:ring-green-400 outline-none border-none transition-all shadow-inner"
            />
            <Search
              className="absolute left-3 top-3 w-5 h-5 text-gray-400"
              aria-hidden="true"
            />
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="font-medium text-white hover:text-green-200 transition-colors"
            >
              Home
            </Link>

            <Link
              to="/cart"
              aria-label={`View Cart, ${cartCount} items`}
              className="relative text-white hover:text-green-200 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" aria-hidden="true" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-green-700">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
              onClick={() => dispatch(toggleTheme())}
              className="p-2 rounded-lg text-white hover:bg-green-600 dark:hover:bg-green-800 transition-all"
            >
              {darkMode ? (
                <Sun className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Moon className="w-5 h-5" aria-hidden="true" />
              )}
            </button>

            {isAuthenticated ? (
              <Link
                to="/profile"
                aria-label="User Profile"
                className="text-white hover:text-green-200 transition-colors"
              >
                <User className="w-6 h-6" aria-hidden="true" />
              </Link>
            ) : (
              <div className="flex items-center gap-4">
                <Link
                  to="/login"
                  className="font-bold text-white hover:text-green-200 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="font-bold bg-white text-green-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors shadow-sm"
                >
                  Signup
                </Link>
              </div>
            )}
          </div>

          <div className="md:hidden flex items-center gap-4">
            <Link
              to="/cart"
              aria-label={`View Cart, ${cartCount} items`}
              className="relative text-white"
            >
              <ShoppingCart className="w-6 h-6" aria-hidden="true" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-green-700">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-7 h-7" aria-hidden="true" />
              ) : (
                <Menu className="w-7 h-7" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-green-800 dark:bg-green-950 px-4 pt-2 pb-4 space-y-4 border-t border-green-600 dark:border-green-800 shadow-xl">
          <div className="relative">
            <label htmlFor="mobile-search" className="sr-only">
              Search products
            </label>
            <input
              id="mobile-search"
              type="text"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white dark:bg-[#1e1e1e] text-gray-900 dark:text-white outline-none"
            />
            <Search
              className="absolute left-3 top-3 w-5 h-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <div className="flex flex-col gap-4 pt-2">
            <Link
              to="/"
              className="text-white font-medium text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <button
              onClick={() => {
                dispatch(toggleTheme());
                setIsMobileMenuOpen(false);
              }}
              className="text-left text-green-200 font-medium text-lg"
            >
              Toggle Theme
            </button>
            {isAuthenticated ? (
              <Link
                to="/profile"
                className="text-white font-medium text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Profile
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-white font-bold text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="text-green-800 bg-white inline-block text-center py-2 rounded-lg font-bold text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
