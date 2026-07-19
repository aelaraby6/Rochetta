import { Loader2 } from "lucide-react";
import { useProductDetailsLogic } from "../../hooks/useProductDetailsLogic";
import ProductGallery from "./components/ProductGallery";
import ProductInfo from "./components/ProductInfo";
import ProductActions from "./components/ProductActions";

export default function ProductDetails() {
  const {
    product,
    isFetching,
    isError,
    stock,
    description,
    outOfStock,
    isRoshetta,
    hasStrips,
    optimizedImage,
    isAdding,
    addingUnit,
    handleAddToCart,
    navigate,
  } = useProductDetailsLogic();

  if (isFetching) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Loader2 className="w-12 h-12 animate-spin text-green-700" />
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="mt-40 text-center dark:text-white">
        <p className="text-2xl mb-4 font-semibold">Product not found</p>
        <button
          className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
          onClick={() => navigate(-1)}
        >
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-28 px-4 sm:px-6 lg:px-8 mb-20 text-black dark:text-white transition-colors duration-300">
      <div className="flex flex-col md:flex-row gap-10 bg-white dark:bg-[#2c2c2c] p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800">
        <ProductGallery
          optimizedImage={optimizedImage}
          productName={product.name}
        />

        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <ProductInfo
            name={product.name}
            price={product.price}
            description={description}
            stock={stock}
            outOfStock={outOfStock}
            isRoshetta={isRoshetta}
          />

          <ProductActions
            productName={product.name}
            outOfStock={outOfStock}
            isRoshetta={isRoshetta}
            hasStrips={hasStrips}
            isAdding={isAdding}
            addingUnit={addingUnit}
            handleAddToCart={handleAddToCart}
            navigate={navigate}
          />
        </div>
      </div>
    </div>
  );
}
