import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#084235] dark:bg-[#052820] text-white py-12 transition-colors duration-300 mt-auto w-full">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-['Pacifico'] text-3xl text-[#f4a460] mb-4 tracking-wide">
              Rochetta
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Your go-to pharmacy marketplace for fast, reliable, and affordable
              healthcare products.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h5 className="uppercase font-bold mb-4 tracking-wider text-gray-100">
              Quick Links
            </h5>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-[#f4a460] hover:underline transition-colors font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="text-gray-300 hover:text-[#f4a460] hover:underline transition-colors font-medium"
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="text-gray-300 hover:text-[#f4a460] hover:underline transition-colors font-medium"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-gray-300 hover:text-[#f4a460] hover:underline transition-colors font-medium"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h5 className="uppercase font-bold mb-4 tracking-wider text-gray-100">
              Contact Us
            </h5>
            <div className="space-y-3 text-gray-300 text-sm w-full">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Mail className="w-5 h-5 text-[#f4a460]" />
                <span>support@rochetta.com</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Phone className="w-5 h-5 text-[#f4a460]" />
                <span dir="ltr">+20 100 123 4567</span>
              </div>
            </div>

            <div className="flex gap-5 mt-6">
              <a
                href="#"
                className="text-gray-300 hover:text-[#f4a460] transition-all transform hover:scale-110"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#f4a460] transition-all transform hover:scale-110"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#f4a460] transition-all transform hover:scale-110"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600/50 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-400 font-medium">
            &copy; {new Date().getFullYear()} Rochetta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
