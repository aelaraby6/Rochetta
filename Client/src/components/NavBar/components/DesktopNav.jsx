import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { User } from "lucide-react";
import CartBadge from "./CartBadge";
import ThemeToggle from "./ThemeToggle";

export default function DesktopNav() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div className="hidden md:flex items-center gap-6">
      <Link
        to="/"
        className="font-medium text-white hover:text-green-200 transition-colors"
      >
        Home
      </Link>

      <CartBadge />
      <ThemeToggle />

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
  );
}
