import ProductCard from "../ProductCard/ProductCard";

export default function ProductList({ products = [] }) {
  return (
    <div className="w-full">
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <ProductCard
              key={product._id}
              product={product}
              priority={index < 4}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 text-gray-500 dark:text-gray-400 text-xl font-semibold">
          No products found.
        </div>
      )}
    </div>
  );
}
