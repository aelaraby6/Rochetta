import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShoppingCart, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { useGetProductByIdQuery } from "../../store/productsApi";
import { useAddToCartMutation } from "../../../cart/store/cartApi";
import { optimizeCloudinaryUrl } from "../../../../utils/productUtils";
import stripImage from "../../../../assets/strip.webp";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const {
    data: response,
    isLoading: isFetching,
    isError,
  } = useGetProductByIdQuery(id);
  const [addToCart, { isLoading: isAdding }] = useAddToCartMutation();

  const [addingUnit, setAddingUnit] = useState(null);

  const product = response?.data;

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

  const stock =
    product.stock !== undefined ? product.stock : product.pieces || 0;
  const description = product.description || product.desc || "";
  const outOfStock = stock <= 0;
  const isRoshetta = product.requires_prescription || product.IsRoshetta;
  const hasStrips = product.has_strips || product.stripsPerBox > 0;
  const stripsPerBox = product.strip_count || product.stripsPerBox || 1;

  const optimizedImage =
    optimizeCloudinaryUrl(product.image) || "/placeholder.png";

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
    <div className="max-w-6xl mx-auto mt-28 px-4 sm:px-6 lg:px-8 mb-20 text-black dark:text-white transition-colors duration-300">
      <div className="flex flex-col md:flex-row gap-10 bg-white dark:bg-[#2c2c2c] p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800">
        <div className="w-full md:w-1/2 flex justify-center items-center bg-white rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
          <img
            src={optimizedImage}
            alt={product.name}
            className="max-h-[320px] w-auto object-contain"
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-3xl font-black text-green-700 dark:text-green-400 mb-6">
            ${product.price}
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed whitespace-pre-wrap">
            {description}
          </p>

          <div className="mb-8 border-t border-gray-200 dark:border-gray-700 pt-6">
            <p className="text-lg mb-2 flex items-center gap-2">
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                Available Stock:{" "}
              </span>
              <span
                className={`font-bold ${!outOfStock ? "text-green-700 dark:text-green-400" : "text-red-600"}`}
              >
                {stock} pieces
              </span>
            </p>
            {isRoshetta && (
              <p className="text-red-700 dark:text-red-400 font-bold bg-red-50 dark:bg-red-900/20 inline-block px-4 py-1.5 rounded-lg mt-2 border border-red-200 dark:border-red-800">
                ⚠️ Requires Medical Prescription
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            <div className="flex flex-1 gap-3">
              <button
                aria-label={`Add one box of ${product.name} to cart`}
                className="flex-1 bg-green-700 hover:bg-green-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-transform active:scale-95 shadow-md flex justify-center items-center gap-2 text-lg"
                onClick={() => handleAddToCart("box")}
                disabled={outOfStock || isAdding || isRoshetta}
              >
                {isAdding && addingUnit === "box" ? (
                  <Loader2
                    className="w-6 h-6 animate-spin"
                    aria-hidden="true"
                  />
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
                  aria-label={`Add one strip of ${product.name} to cart`}
                  className="flex-1 bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400 dark:hover:bg-green-900/50 disabled:opacity-50 disabled:cursor-not-allowed font-bold py-4 rounded-xl transition-transform active:scale-95 shadow-sm flex justify-center items-center gap-2 text-lg border border-green-200 dark:border-green-800"
                  onClick={() => handleAddToCart("strip")}
                  disabled={outOfStock || isAdding || isRoshetta}
                >
                  {isAdding && addingUnit === "strip" ? (
                    <Loader2
                      className="w-6 h-6 animate-spin"
                      aria-hidden="true"
                    />
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
        </div>
      </div>
    </div>
  );
}
