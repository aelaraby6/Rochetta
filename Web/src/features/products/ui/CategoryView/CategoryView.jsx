import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Loader2, SlidersHorizontal } from "lucide-react";
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
      toast(
        "Please search for a specific disease or medicine to filter on them",
        {
          icon: "💡",
          duration: 5000,
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        },
      );
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
    <div className="w-full px-4 sm:px-6 lg:px-8 mt-10 mb-12 max-w-screen-2xl mx-auto">
      <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
        <h2 className="font-bold text-3xl md:text-4xl mb-3 capitalize text-gray-900 dark:text-white border-l-4 border-green-500 pl-4">
          {currentCategory.name}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl pl-4">
          {currentCategory.description}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="w-full lg:w-64 shrink-0">
          <div
            className="bg-white dark:bg-[#2c2c2c] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 sticky top-35"
            onClick={handleFilterInteraction}
          >
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
              <SlidersHorizontal className="w-5 h-5 text-green-600 dark:text-green-400" />
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                Filters
              </h3>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-900 dark:text-gray-200 uppercase tracking-wider">
                  Sort By Price
                </label>
                <select
                  value={sortPrice}
                  onChange={(e) =>
                    handleFilterChange("sortPrice", e.target.value)
                  }
                  className="w-full px-4 py-3 rounded-xl text-sm font-medium border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer text-gray-700 dark:text-gray-200"
                >
                  <option value="">Relevance</option>
                  <option value="asc">Low to High</option>
                  <option value="desc">High to Low</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-900 dark:text-gray-200 uppercase tracking-wider">
                  Minimum Rating
                </label>
                <select
                  value={minRating}
                  onChange={(e) =>
                    handleFilterChange("minRating", e.target.value)
                  }
                  className="w-full px-4 py-3 rounded-xl text-sm font-medium border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer text-gray-700 dark:text-gray-200"
                >
                  <option value="">All Ratings</option>
                  <option value="4">4+ Stars</option>
                  <option value="3">3+ Stars</option>
                </select>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1">
          {isProductsLoading ? (
            <div className="flex justify-center items-center h-64 text-green-600">
              <Loader2 className="w-10 h-10 animate-spin" />
            </div>
          ) : isProductsError ? (
            <div className="text-red-500 text-center mt-10 text-xl font-bold bg-red-50 dark:bg-red-900/20 p-6 rounded-2xl">
              Error loading products. Please try again later.
            </div>
          ) : (
            <div
              className={`transition-opacity duration-300 ${
                isFetching ? "opacity-50 pointer-events-none" : "opacity-100"
              }`}
            >
              <div className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                Showing {products.length} products
              </div>
              <ProductList products={products} />

              {totalPages > 1 && (
                <div className="mt-10 flex justify-center">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
