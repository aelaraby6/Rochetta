import { Link } from "react-router-dom";

export default function SubNavbar() {
  return (
    <nav className="fixed top-16 w-full z-40 bg-gray-50 dark:bg-[#1e1e1e] border-b border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-300">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="flex justify-center md:justify-start gap-2 w-full">
          <Link
            to="/category/pain-relief"
            className="px-3 whitespace-nowrap py-1.5 rounded-md text-sm md:text-base font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            Pain Relief
          </Link>
          <Link
            to="/category/cold-and-flu"
            className="px-3 whitespace-nowrap py-1.5 rounded-md text-sm md:text-base font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            Cold and Flu
          </Link>
          <Link
            to="/category/diabetes-care"
            className="px-3 whitespace-nowrap py-1.5 rounded-md text-sm md:text-base font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            Diabetes Care
          </Link>
          <Link
            to="/category/first-aid"
            className="px-3 whitespace-nowrap py-1.5 rounded-md text-sm md:text-base font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            First Aid
          </Link>
        </div>

        <div className="hidden md:block bg-green-700 dark:bg-green-800 text-white px-5 py-2 rounded-lg text-sm font-bold whitespace-nowrap shadow-sm w-full md:w-auto text-center border border-green-600">
          Free Shipping Order By August
        </div>
      </div>
    </nav>
  );
}
