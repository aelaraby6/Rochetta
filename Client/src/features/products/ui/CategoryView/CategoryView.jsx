import { useState, useEffect } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { PlusCircle, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { useGetCategoryBySlugQuery } from "../../../admin/categories/api/categoriesApi";
import { useGetProductsQuery } from "../../api/productsApi";
import ProductList from "../ProductList/ProductList";
import Pagination from "../../../../components/ui/Pagination";
import { setSearchTerm } from "../../../uiSlice/uiSlice";

export default function CategoryView() {
  const { slug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const { searchTerm } = useSelector((state) => state.ui);

  const [hasShownToast, setHasShownToast] = useState(false);

  useEffect(() => {
    dispatch(setSearchTerm(""));
  }, [slug, dispatch]);

  const currentPage = parseInt(searchParams.get("page")) || 1;
  const sortPrice = searchParams.get("sortPrice") || "";
  const minRating = searchParams.get("minRating") || "";
  const ITEMS_PER_PAGE = 20;

  const {
    data: categoryResponse,
    isLoading: isCategoryLoading,
    isError: isCategoryError,
  } = useGetCategoryBySlugQuery(slug);
  const currentCategory = categoryResponse?.data;

  const {
    data: productsResponse,
    isLoading: isProductsLoading,
    isError: isProductsError,
    isFetching,
  } = useGetProductsQuery(
    {
      limit: ITEMS_PER_PAGE,
      page: currentPage,
      categoryName: currentCategory?.name, 
      search: searchTerm,
      sortPrice,
      minRating,
    },
    { skip: !currentCategory },
  );

  const products = productsResponse?.data || [];
  const totalPages = productsResponse?.pagination?.totalPages || 1;
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      const newParams = new URLSearchParams(searchParams);
      newParams.set("page", page.toString());
      setSearchParams(newParams);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleFilterChange = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    newParams.set("page", "1");
    setSearchParams(newParams);
  };

  const handleFilterInteraction = () => {
    if (!hasShownToast) {
      toast("Please search for a specific disease or medicine to filter on them", {
        icon: "💡",
        duration: 5000,
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      setHasShownToast(true);
    }
  };

  if (isCategoryLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-green-600">
        <Loader2 className="w-10 h-10 animate-spin" />
      </div>
    );
  }

  if (isCategoryError || !currentCategory) {
    return (
      <div className="text-center mt-24 text-red-500 font-bold text-xl">
        Category not found!
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center px-4 w-full">
      <div className="w-full mt-20 mb-10 p-8 rounded-2xl bg-white dark:bg-[#2c2c2c] text-black dark:text-[#f1f1f1] shadow-lg">
        {/* Header & Filters */}
        <div className="mb-8 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6">
          <div className="flex-1">
            <h2 className="font-bold text-2xl mb-3 border-l-4 border-green-500 pl-3 capitalize">
              {currentCategory.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              {currentCategory.description}
            </p>
          </div>

          {/* Filters Container */}
          <div
            className="flex flex-wrap items-center gap-3 w-full xl:w-auto"
            onClick={handleFilterInteraction}
          >
            <select
              value={sortPrice}
              onChange={(e) => handleFilterChange("sortPrice", e.target.value)}
              className="px-4 py-2 rounded-xl text-sm font-medium border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
            >
              <option value="">Price: Default</option>
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>

            <select
              value={minRating}
              onChange={(e) => handleFilterChange("minRating", e.target.value)}
              className="px-4 py-2 rounded-xl text-sm font-medium border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
            >
              <option value="">Rating: All</option>
              <option value="4">4+ Stars</option>
              <option value="3">3+ Stars</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {isProductsLoading ? (
          <div className="flex justify-center items-center h-64 text-green-600">
            <Loader2 className="w-10 h-10 animate-spin" />
          </div>
        ) : isProductsError ? (
          <div className="text-red-500 text-center mt-10 text-xl font-bold">
            Error loading products.
          </div>
        ) : (
          <div
            className={`transition-opacity duration-300 ${
              isFetching ? "opacity-50" : "opacity-100"
            }`}
          >
            <ProductList products={products} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
}
