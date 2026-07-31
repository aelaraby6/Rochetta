import { Link } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import DesktopNav from "./components/DesktopNav";
import MobileMenu from "./components/MobileMenu";

export default function Header() {
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

          <div className="hidden md:flex flex-1 w-full mx-6 lg:mx-12">
            <SearchBar id="desktop-search" />
          </div>

          <DesktopNav />
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
