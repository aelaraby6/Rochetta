import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShoppingCart, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { useDeleteProductMutation } from "../../store/productsApi";
import { useAddToCartMutation } from "../../../cart/store/cartApi";
import stripImage from "../../../../assets/strip.webp";

import { optimizeCloudinaryUrl } from "../../../../utils/productUtils";

export default function ProductCard({ product, priority, className = "" }) {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const isAdmin = user?.role === "admin";

  const [deleteProduct, { isLoading: isDeleting }] = useDeleteProductMutation();
  const [addToCart, { isLoading: isAdding }] = useAddToCartMutation();

  const [addingUnit, setAddingUnit] = useState(null);

  const stock =
    product.stock !== undefined ? product.stock : product.pieces || 0;
  const description = product.description || product.desc || "";
  const hasStrips = product.has_strips || product.stripsPerBox > 0;
  const stripsPerBox = product.strip_count || product.stripsPerBox || 1;
  const outOfStock = stock === 0;

  const formatPieces = (value) =>
    Number.isInteger(value) ? value : Number(value).toFixed(2);

  const optimizedImage =
    optimizeCloudinaryUrl(product.image) || "/placeholder.png";

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteProduct(product._id).unwrap();
        toast.success("Product deleted successfully");
      } catch (err) {
        toast.error("Failed to delete product", err);
      }
    }
  };

  const handleAddToCart = async (unit) => {
    if (!isAuthenticated) {
      toast.error("Please login to add items");
      return;
    }
    setAddingUnit(unit);
    let qtyToSend = 1;
    if (unit === "strip" && hasStrips && stripsPerBox > 0) {
      qtyToSend = Number((1 / Math.max(1, stripsPerBox)).toFixed(6));
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
          {formatPieces(stock)} pieces in stock
        </p>

        <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-1 line-clamp-2 hover:text-green-600 transition-colors">
          <Link to={`/product/${product._id}`}>{product.name}</Link>
        </h4>

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

          {!isAdmin && (
            <div className="flex gap-1">
              {hasStrips && (
                <button
                  aria-label={`Add one strip of ${product.name} to cart`}
                  className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-green-700 hover:bg-green-800 disabled:bg-gray-400 flex justify-center items-center transition-transform active:scale-95"
                  disabled={
                    outOfStock ||
                    isAdding ||
                    product.requires_prescription ||
                    product.IsRoshetta
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
                  product.IsRoshetta
                }
                onClick={() => handleAddToCart("box")}
              >
                {isAdding && addingUnit === "box" ? (
                  <Loader2
                    className="w-4 h-4 animate-spin"
                    aria-hidden="true"
                  />
                ) : (
                  <ShoppingCart className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      {isAdmin && (
        <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700 flex gap-2">
          <button
            onClick={() => navigate(`/dashboard/products/edit/${product._id}`)}
            className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-1.5 rounded-md text-xs font-bold transition-colors"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="flex-1 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white py-1.5 rounded-md text-xs font-bold transition-colors flex justify-center items-center"
          >
            {isDeleting ? (
              <Loader2 className="w-3 h-3 animate-spin" />
            ) : (
              "Delete"
            )}
          </button>
        </div>
      )}
    </div>
  );
}
