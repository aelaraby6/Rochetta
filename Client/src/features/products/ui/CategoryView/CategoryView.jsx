import { useParams, Link, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { PlusCircle, Loader2 } from "lucide-react";
import {
  useGetProductsQuery,
  useGetCategoryBySlugQuery,
} from "../../store/productsApi";
import ProductList from "../ProductList/ProductList";
import Pagination from "../../../../components/ui/Pagination";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../../uiSlice/uiSlice";
import { useEffect } from "react";

export default function CategoryView() {
  const { slug } = useParams(); 
  const [searchParams, setSearchParams] = useSearchParams();
  const { user } = useSelector((state) => state.auth);
  const isAdmin = user?.role === "admin";
  const { searchTerm } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

useEffect(() => {
  dispatch(setSearchTerm(""));
}, [slug, dispatch]);

  const currentPage = parseInt(searchParams.get("page")) || 1;
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
    },
    { skip: !currentCategory },
  );

  const products = productsResponse?.data || [];
  const totalPages = productsResponse?.totalPages || 1;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setSearchParams({ page: page.toString() });
      window.scrollTo({ top: 0, behavior: "smooth" });
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
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="font-bold text-2xl mb-3 border-l-4 border-green-500 pl-3 capitalize">
              {currentCategory.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              {currentCategory.description}
            </p>
          </div>

          {isAdmin && (
            <Link
              to="/admin/add-product"
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2"
            >
              <PlusCircle className="w-5 h-5" /> Add New Product
            </Link>
          )}
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
            className={`transition-opacity duration-300 ${isFetching ? "opacity-50" : "opacity-100"}`}
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
