import { RefreshCcw } from "lucide-react";
import { useGetProductsQuery } from "../../../features/products/store/productsApi";
import ProductCard from "../../../features/products/ui/ProductCard/ProductCard";
export default function TopProducts() {
  const { data: productsData, isLoading } = useGetProductsQuery({
    limit: 4,
    top_selling: true,
  });
  const productsToShow = productsData?.data || [];

  return (
    <div className="w-full px-4 sm:px-8 lg:px-12 py-16">
      <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
        Top Selling Products
      </h3>

      {isLoading ? (
        <div className="text-center py-10 text-green-600 font-bold flex justify-center items-center gap-2">
          <RefreshCcw className="w-6 h-6 animate-spin" /> Loading products...
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-8">
          {productsToShow.length > 0 ? (
            productsToShow.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                className="w-full max-w-85 mx-auto"
              />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 py-10 text-xl font-semibold">
              No products found.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
