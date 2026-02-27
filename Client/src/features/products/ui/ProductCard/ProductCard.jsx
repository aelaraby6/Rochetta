import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShoppingCart, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { useDeleteProductMutation } from "../../store/productsApi";
import { useAddToCartMutation } from "../../../cart/store/cartApi";
import stripImage from "../../../../assets/strip.webp";

import { optimizeCloudinaryUrl } from "../../../../utils/productUtils";

export default function ProductCard({ product, priority }) {
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
      className={`flex flex-col justify-between h-full p-4 rounded-xl transition-all duration-300 bg-white dark:bg-gray-800 shadow-sm hover:shadow-xl ${product.requires_prescription || product.IsRoshetta ? "border-2 border-red-500 shadow-[0_0_6px_rgba(220,53,69,0.8)]" : "border border-transparent dark:border-gray-700"}`}
    >
      <Link
        to={`/product/${product._id}`}
        className="md:h-50 mb-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100 dark:border-gray-700 flex justify-center items-center"
      >
        <img
          src={optimizedImage}
          alt={product.name}
          className="max-w-full max-h-full object-contain"
          loading={priority ? "eager" : "lazy"}
          fetchpriority={priority ? "high" : "auto"}
          decoding="async"
        />
      </Link>

      <div className="flex flex-col flex-grow justify-center">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
          {formatPieces(stock)} pieces in stock
        </p>
        <h4 className="font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 hover:text-green-600 transition-colors">
          <Link to={`/product/${product._id}`}>{product.name}</Link>
        </h4>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">
          {description}
        </p>

        {(product.requires_prescription || product.IsRoshetta) && (
          <p className="text-red-600 dark:text-red-400 text-sm font-bold mb-2">
            Needs Prescription
          </p>
        )}

        <div className="flex justify-between items-center mt-auto pt-2">
          <p className="text-2xl font-black text-gray-900 dark:text-white">
            ${product.price}
          </p>

          {!isAdmin && (
            <div className="flex gap-2">
              {hasStrips && (
                <button
                  aria-label={`Add one strip of ${product.name} to cart`}
                  className="w-11 h-11 rounded-full bg-green-700 hover:bg-green-800 disabled:bg-gray-400 flex justify-center items-center transition-transform active:scale-95"
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
                      className="w-5 h-5 text-white animate-spin"
                      aria-hidden="true"
                    />
                  ) : (
                    <img
                      src={stripImage}
                      alt="strip icon"
                      className="w-8 h-8 object-contain"
                    />
                  )}
                </button>
              )}
              <button
                aria-label={`Add one box of ${product.name} to cart`}
                className="w-11 h-11 rounded-full border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white disabled:border-gray-400 disabled:text-gray-400 transition-all active:scale-95 flex justify-center items-center"
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
                    className="w-5 h-5 animate-spin"
                    aria-hidden="true"
                  />
                ) : (
                  <ShoppingCart className="w-5 h-5" aria-hidden="true" />
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      {isAdmin && (
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex gap-2">
          <button
            onClick={() => navigate(`/admin/edit-product/${product._id}`)}
            className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg text-sm font-bold transition-colors"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="flex-1 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white py-2 rounded-lg text-sm font-bold transition-colors flex justify-center items-center"
          >
            {isDeleting ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              "Delete"
            )}
          </button>
        </div>
      )}
    </div>
  );
}
