import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="bg-[#191919] text-white h-screen flex flex-col justify-center items-center text-center p-5">
      <h1 className="text-[6rem] font-bold text-green-600 leading-none">404</h1>
      <h2 className="text-3xl md:text-4xl mb-3 font-semibold mt-4">
        Oops! Page Not Found
      </h2>
      <p className="max-w-md mb-8 text-gray-300 text-lg">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-green-600 text-[#191919] px-8 py-3 rounded-xl font-bold transition-all duration-300 hover:bg-white active:scale-95 shadow-lg"
      >
        Back to Home
      </Link>
    </div>
  );
}
