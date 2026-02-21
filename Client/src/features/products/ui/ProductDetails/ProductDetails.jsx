import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShoppingCart, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { useGetProductByIdQuery } from "../../store/productsApi";
import { useAddToCartMutation } from "../../../cart/store/cartApi";

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

  const product = response?.data;

  if (isFetching) {
    return (
      <div className="flex justify-center items-center mt-40">
        <Loader2 className="w-12 h-12 animate-spin text-green-600" />
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

  const handleAddToCart = async () => {
    if (!isAuthenticated) {
      toast.error("Please login to add items");
      return;
    }
    try {
      await addToCart({ productId: product._id, quantity: 1 }).unwrap();
      toast.success("Item added to cart!");
    } catch (err) {
      toast.error(err.data?.message || "Failed to add item");
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-28 px-4 sm:px-6 lg:px-8 mb-20 text-black dark:text-white transition-colors duration-300">
      <div className="flex flex-col md:flex-row gap-10 bg-white dark:bg-[#2c2c2c] p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800">
        <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-50 dark:bg-[#1e1e1e] rounded-2xl p-8">
          <img
            src={product.image || "/placeholder.png"}
            alt={product.name}
            className="max-h-[440px] w-auto object-contain bg-transparent mix-blend-multiply dark:mix-blend-normal"
            loading="lazy"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">{product.name}</h2>
          <p className="text-3xl font-black text-green-600 dark:text-green-400 mb-6">
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
                className={`font-bold ${!outOfStock ? "text-green-600 dark:text-green-400" : "text-red-500"}`}
              >
                {stock} pieces
              </span>
            </p>
            {isRoshetta && (
              <p className="text-red-600 dark:text-red-400 font-bold bg-red-50 dark:bg-red-900/20 inline-block px-4 py-1.5 rounded-lg mt-2 border border-red-200 dark:border-red-800">
                ⚠️ Requires Medical Prescription
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            <button
              className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-xl transition-transform active:scale-95 shadow-md flex justify-center items-center gap-2 text-lg"
              onClick={handleAddToCart}
              disabled={outOfStock || isAdding || isRoshetta}
            >
              {isAdding ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                <>
                  <ShoppingCart className="w-6 h-6" />{" "}
                  {outOfStock ? "Out of Stock" : "Add to Cart"}
                </>
              )}
            </button>
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
