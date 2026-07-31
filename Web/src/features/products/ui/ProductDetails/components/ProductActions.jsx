import { ShoppingCart, Loader2 } from "lucide-react";
import stripImage from "../../../../../assets/strip.webp";

export default function ProductActions({
  productName,
  outOfStock,
  isRoshetta,
  hasStrips,
  isAdding,
  addingUnit,
  handleAddToCart,
  navigate,
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-auto">
      <div className="flex flex-1 gap-3">
        <button
          aria-label={`Add one box of ${productName} to cart`}
          className="flex-1 bg-green-700 hover:bg-green-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-transform active:scale-95 shadow-md flex justify-center items-center gap-2 text-lg"
          onClick={() => handleAddToCart("box")}
          disabled={outOfStock || isAdding || isRoshetta}
        >
          {isAdding && addingUnit === "box" ? (
            <Loader2 className="w-6 h-6 animate-spin" aria-hidden="true" />
          ) : (
            <>
              <ShoppingCart className="w-6 h-6" aria-hidden="true" />
              <span className="hidden sm:inline">Add Box</span>
              <span className="sm:hidden">Box</span>
            </>
          )}
        </button>

        {hasStrips && (
          <button
            aria-label={`Add one strip of ${productName} to cart`}
            className="flex-1 bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400 dark:hover:bg-green-900/50 disabled:opacity-50 disabled:cursor-not-allowed font-bold py-4 rounded-xl transition-transform active:scale-95 shadow-sm flex justify-center items-center gap-2 text-lg border border-green-200 dark:border-green-800"
            onClick={() => handleAddToCart("strip")}
            disabled={outOfStock || isAdding || isRoshetta}
          >
            {isAdding && addingUnit === "strip" ? (
              <Loader2 className="w-6 h-6 animate-spin" aria-hidden="true" />
            ) : (
              <>
                <img
                  src={stripImage}
                  alt="strip icon"
                  className="w-8 h-8 object-contain"
                />
                <span className="hidden sm:inline">Add Strip</span>
                <span className="sm:hidden">Strip</span>
              </>
            )}
          </button>
        )}
      </div>

      <button
        className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 font-bold rounded-xl transition-colors text-lg"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </div>
  );
}
