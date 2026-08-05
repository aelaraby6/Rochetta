import { Link, useLocation } from "react-router-dom";

export default function ProfileNav() {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { label: "Personal Information", path: "/profile/personal-info" },
    { label: "Orders", path: "/profile/orders" },
    { label: "Saved Items", path: "/profile/wishlist" },
  ];

  return (
    <nav className="relative z-50">
      <ul className="flex flex-wrap gap-6 sm:gap-8">
        {navItems.map((item, index) => {
          const isActive = currentPath === item.path;

          return (
            <li key={index} className="relative">
              <Link
                to={item.path}
                className={`py-4 flex items-center gap-1 font-bold text-sm sm:text-lg transition-colors whitespace-nowrap ${
                  isActive
                    ? "text-green-700 dark:text-green-500 border-b-4 border-green-700 dark:border-green-500"
                    : "text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 border-b-4 border-transparent"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
