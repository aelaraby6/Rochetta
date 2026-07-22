import { RefreshCcw } from "lucide-react";
import { useGetProductsQuery } from "../../../features/products/store/productsApi";
import ProductCard from "../../../features/products/ui/ProductCard/ProductCard";

export default function TopProducts() {
  const { data: productsData, isLoading } = useGetProductsQuery({
    limit: 12,
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
        // snap for swipe
        <div
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 
                     [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {productsToShow.length > 0 ? (
            productsToShow.map((product) => (
              <div
                key={product._id}
                className="snap-start shrink-0 w-[75%] sm:w-[45%] md:w-[30%] lg:w-[20%]"
              >
                <ProductCard
                  product={product}
                  className="w-full h-full mx-auto"
                />
              </div>
            ))
          ) : (
            <div className="w-full text-center text-gray-500 py-10 text-xl font-semibold">
              No products found.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
