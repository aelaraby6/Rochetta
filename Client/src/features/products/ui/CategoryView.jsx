import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { PlusCircle } from "lucide-react";
import { useGetProductsQuery } from "../store/productsApi";
import ProductList from "./ProductList/ProductList";

const categoryDetails = {
  "cold-and-flu": {
    title: "Cold and Flu",
    desc: "Cold and Flu products help relieve common symptoms such as nasal congestion, cough, fever, and headache. For best results, combine medication with rest and adequate hydration.",
  },
  "diabetes-care": {
    title: "Diabetes Care",
    desc: "Diabetes care products support blood sugar monitoring and management. They include glucose meters, test strips, and supplements that help maintain a healthy lifestyle.",
  },
  "first-aid": {
    title: "First Aid",
    desc: "First aid products include bandages, antiseptics, and wound care essentials that provide quick treatment for minor injuries and help prevent infections.",
  },
  "pain-relief": {
    title: "Pain Relief",
    desc: "Pain relief products help reduce mild to moderate pain such as headaches, muscle aches, and joint pain. Always follow the recommended dosage.",
  },
};

export default function CategoryView() {
  const { slug } = useParams();
  const { searchTerm } = useSelector((state) => state.ui);
  const { user } = useSelector((state) => state.auth);
  const isAdmin = user?.role === "admin";

  const {
    data: productsResponse,
    isLoading,
    isError,
  } = useGetProductsQuery(100);

  const details = categoryDetails[slug] || {
    title: "Category",
    desc: "Explore our products.",
  };
  const originalTitle = details.title;

  const filteredProducts = useMemo(() => {
    if (!productsResponse?.data) return [];
    return productsResponse.data.filter(
      (p) => p.category?.name === originalTitle || p.category === originalTitle,
    );
  }, [productsResponse, originalTitle]);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-64 dark:text-white">
        Loading...
      </div>
    );
  if (isError)
    return (
      <div className="text-red-500 text-center mt-10">
        Error loading products.
      </div>
    );

  return (
    <div className="flex justify-center items-center px-4 w-full">
      <div className="w-full mt-20 mb-10 p-8 rounded-2xl bg-white dark:bg-[#2c2c2c] text-black dark:text-[#f1f1f1] shadow-lg transition-all duration-300">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h3 className="font-bold text-2xl mb-3 border-l-4 border-green-500 pl-3">
              {details.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              {details.desc}
            </p>
          </div>

          {isAdmin && (
            <Link
              to="/admin/add-product"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all shadow-md shrink-0"
            >
              <PlusCircle className="w-5 h-5" />
              Add New Product
            </Link>
          )}
        </div>

        <ProductList products={filteredProducts} searchTerm={searchTerm} />
      </div>
    </div>
  );
}
