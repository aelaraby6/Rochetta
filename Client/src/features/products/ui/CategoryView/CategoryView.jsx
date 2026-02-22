import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { PlusCircle, Loader2 } from "lucide-react";
import { useGetProductsQuery } from "../../store/productsApi";  
import ProductList from "../ProductList/ProductList";

const categoryDetails = {
  "cold-and-flu": {
    title: "Cold and Flu",
    desc: "Cold and Flu products help relieve common symptoms such as nasal congestion, cough, fever, and headache.",
  },
  "diabetes-care": {
    title: "Diabetes Care",
    desc: "Diabetes care products support blood sugar monitoring and management. They include glucose meters, test strips, and supplements.",
  },
  "first-aid": {
    title: "First Aid",
    desc: "First aid products include bandages, antiseptics, and wound care essentials that provide quick treatment for minor injuries.",
  },
  "pain-relief": {
    title: "Pain Relief",
    desc: "Pain relief products help reduce mild to moderate pain such as headaches, muscle aches, and joint pain.",
  },
};

export default function CategoryView() {
  const { slug } = useParams();
  const { searchTerm } = useSelector((state) => state.ui);
  const { user } = useSelector((state) => state.auth);
  const isAdmin = user?.role === "admin";

  const details = categoryDetails[slug] || {
    title: "Category",
    desc: "Explore our products.",
  };

  const {
    data: productsResponse,
    isLoading,
    isError,
  } = useGetProductsQuery({
    limit: 20,
    categoryName: details.title,
    search: searchTerm,
  });

  const products = productsResponse?.data || [];

  return (
    <div className="flex justify-center items-center px-4 w-full">
      <div className="w-full mt-20 mb-10 p-8 rounded-2xl bg-white dark:bg-[#2c2c2c] text-black dark:text-[#f1f1f1] shadow-lg transition-all duration-300">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="font-bold text-2xl mb-3 border-l-4 border-green-500 pl-3">
              {details.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              {details.desc}
            </p>
          </div>

          {isAdmin && (
            <Link
              to="/admin/add-product"
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all shadow-md shrink-0"
            >
              <PlusCircle className="w-5 h-5" aria-hidden="true" />
              Add New Product
            </Link>
          )}
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64 text-green-600">
            <Loader2 className="w-10 h-10 animate-spin" aria-hidden="true" />
          </div>
        ) : isError ? (
          <div className="text-red-500 text-center mt-10 text-xl font-bold">
            Error loading products.
          </div>
        ) : (
          <ProductList products={products} />
        )}
      </div>
    </div>
  );
}
