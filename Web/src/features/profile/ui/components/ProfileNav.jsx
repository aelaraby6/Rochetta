import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function ProfileNav() {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    {
      label: "Account Settings",
      path: "/profile/personal-info",
      subItems: [
        { label: "Personal Information", path: "/profile/personal-info" },
        { label: "Address Book", path: "/profile/address-book" },
        { label: "Payment Methods", path: "/profile/payment-methods" },
      ],
    },
    {
      label: "Purchases",
      path: "/profile/orders",
      subItems: [
        { label: "Order Status & History", path: "/profile/orders" },
        { label: "Buy It Again", path: "/profile/buy-again" },
      ],
    },
    {
      label: "My Prescriptions",
      path: "/profile/prescriptions",
    },
    {
      label: "Saved Items",
      path: "/profile/wishlist",
    },
  ];

  const isPathActive = (item) => {
    if (item.subItems) {
      return (
        currentPath === item.path ||
        item.subItems.some((sub) => currentPath === sub.path)
      );
    }
    return currentPath === item.path;
  };

  return (
    <nav className="relative z-50">
      <ul className="flex flex-wrap gap-6 sm:gap-8">
        {navItems.map((item, index) => {
          const isActive = isPathActive(item);
          const hasDropdown = item.subItems && item.subItems.length > 0;

          return (
            <li key={index} className="group relative">
              <Link
                to={item.path}
                className={`py-4 flex items-center gap-1 font-bold text-sm sm:text-lg transition-colors whitespace-nowrap ${
                  isActive
                    ? "text-green-700 dark:text-green-500 border-b-4 border-green-700 dark:border-green-500"
                    : "text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 border-b-4 border-transparent"
                }`}
              >
                {item.label}
                {hasDropdown && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 group-hover:rotate-180 ${
                      isActive ? "text-green-700" : "text-gray-400"
                    }`}
                  />
                )}
              </Link>

              {hasDropdown && (
                <div className="absolute left-0 top-full hidden group-hover:block pt-1 w-56 z-50">
                  <div className="bg-white dark:bg-[#1e1e1e] rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {item.subItems.map((sub, subIndex) => (
                      <Link
                        key={subIndex}
                        to={sub.path}
                        className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                          currentPath === sub.path
                            ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-500"
                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                        }`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
