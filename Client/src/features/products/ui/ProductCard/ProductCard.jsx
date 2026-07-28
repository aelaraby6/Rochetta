import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShoppingCart, Loader2, Star } from "lucide-react";
import toast from "react-hot-toast";
import { useAddToCartMutation } from "../../../cart/store/cartApi";
import stripImage from "../../../../assets/strip.webp";
import { optimizeCloudinaryUrl } from "../../../../utils/productUtils";

export default function ProductCard({ product, priority, className = "" }) {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const [addToCart, { isLoading: isAdding }] = useAddToCartMutation();
  const [addingUnit, setAddingUnit] = useState(null);

  const baseStock =
    product.stock !== undefined ? product.stock : product.pieces || 0;
  const description = product.description || product.desc || "";
  const hasStrips = product.has_strips || product.stripsPerBox > 0;
  const stripsPerBox =
    product.strips_per_box || product.strip_count || product.stripsPerBox || 1;
  const outOfStock = baseStock === 0;

  const rating = product.rating || product.ratingsAverage || 0;
  const reviewsCount = product.ratingsQuantity || product.numReviews || 0;

  let displayStock = `${baseStock} items`;
  if (hasStrips && stripsPerBox > 0) {
    const boxes = Math.floor(baseStock / stripsPerBox);
    const remainingStrips = baseStock % stripsPerBox;
    displayStock =
      remainingStrips > 0
        ? `${boxes} Boxes & ${remainingStrips} Strips`
        : `${boxes} Boxes`;
  }

  const optimizedImage =
    optimizeCloudinaryUrl(product.image) || "/placeholder.png";

  const handleAddToCart = async (unit) => {
    if (!isAuthenticated) {
      toast.error("Please login to add items");
      return;
    }
    setAddingUnit(unit);

    let qtyToSend = 1;
    if (hasStrips && stripsPerBox > 0) {
      qtyToSend = unit === "box" ? stripsPerBox : 1;
    }

    try {
      await addToCart({ productId: product._id, quantity: qtyToSend }).unwrap();
      toast.success("Item added to cart!");
    } catch (err) {
      toast.error(err.data?.message || "Failed to add item");
    } finally {
      setAddingUnit(null);
    }
  };

  return (
    <div
      className={`flex flex-col justify-between h-full p-3 rounded-xl duration-300 bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg ${
        product.requires_prescription || product.IsRoshetta
          ? "border border-red-500 shadow-[0_0_4px_rgba(220,53,69,0.5)]"
          : "border border-gray-100 dark:border-gray-700"
      } ${className}`}
    >
      <Link
        to={`/product/${product._id}`}
        className="h-32 sm:h-36 mb-3 p-2 rounded-lg bg-white border border-gray-50 dark:border-gray-700 flex justify-center items-center overflow-hidden"
      >
        <img
          src={optimizedImage}
          alt={product.name}
          className="max-w-full max-h-full object-contain"
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
        />
      </Link>

      <div className="flex flex-col grow justify-center">
        <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-1 font-medium">
          {displayStock} in stock
        </p>

        <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-1 line-clamp-2 hover:text-green-600 transition-colors">
          <Link to={`/product/${product._id}`}>{product.name}</Link>
        </h4>

        <div className="flex items-center gap-1 mb-1">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-3 h-3 ${
                  star <= rating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300 dark:text-gray-600"
                }`}
              />
            ))}
          </div>
          <span className="text-[10px] text-gray-500 dark:text-gray-400">
            ({reviewsCount})
          </span>
        </div>

        <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-2 line-clamp-1">
          {description}
        </p>

        {(product.requires_prescription || product.IsRoshetta) && (
          <p className="text-red-600 dark:text-red-400 text-[11px] font-bold mb-2">
            Needs Prescription
          </p>
        )}

        <div className="flex justify-between items-center mt-auto pt-2 border-t border-gray-50 dark:border-gray-700 gap-1">
          <p className="text-md font-black text-gray-900 dark:text-white">
            ${product.price}
          </p>

          <div className="flex gap-1">
            {hasStrips && (
              <button
                aria-label={`Add one strip of ${product.name} to cart`}
                className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-green-700 hover:bg-green-800 disabled:bg-gray-400 flex justify-center items-center transition-transform active:scale-95"
                disabled={
                  outOfStock ||
                  isAdding ||
                  product.requires_prescription ||
                  product.IsRoshetta ||
                  baseStock < 1
                }
                onClick={() => handleAddToCart("strip")}
              >
                {isAdding && addingUnit === "strip" ? (
                  <Loader2
                    className="w-4 h-4 text-white animate-spin"
                    aria-hidden="true"
                  />
                ) : (
                  <img
                    src={stripImage}
                    alt="strip icon"
                    className="w-5 h-5 md:w-7 md:h-7 object-contain"
                  />
                )}
              </button>
            )}
            <button
              aria-label={`Add one box of ${product.name} to cart`}
              className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white disabled:border-gray-400 disabled:text-gray-400 active:scale-95 flex justify-center items-center transition-colors"
              disabled={
                outOfStock ||
                isAdding ||
                product.requires_prescription ||
                product.IsRoshetta ||
                (hasStrips ? baseStock < stripsPerBox : baseStock < 1)
              }
              onClick={() => handleAddToCart("box")}
            >
              {isAdding && addingUnit === "box" ? (
                <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
              ) : (
                <ShoppingCart
                  className="w-4 h-4 md:w-5 md:h-5"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
