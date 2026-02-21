import { useMemo } from "react";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductList({ searchTerm, products = [] }) {
  const filteredProducts = useMemo(() => {
    if (!searchTerm) return products;
    const term = searchTerm.toLowerCase();
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        (product.desc && product.desc.toLowerCase().includes(term)) ||
        (product.description &&
          product.description.toLowerCase().includes(term)),
    );
  }, [products, searchTerm]);

  return (
    <div className="w-full">
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
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
