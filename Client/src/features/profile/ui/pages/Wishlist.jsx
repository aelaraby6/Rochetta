import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Trash2, Package } from "lucide-react";
import toast from "react-hot-toast";

export default function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([
    {
      _id: "prd_1",
      name: "Panadol Extra Advance - 24 Tablets",
      price: 5.99,
      image: "/placeholder.png",
      inStock: true,
      category: "Pain Relief",
    },
    {
      _id: "prd_2",
      name: "Vitamin C 1000mg Effervescent",
      price: 12.5,
      image: "/placeholder.png",
      inStock: true,
      category: "Vitamins",
    },
    {
      _id: "prd_3",
      name: "Omron M3 Blood Pressure Monitor",
      price: 65.0,
      image: "/placeholder.png",
      inStock: false,
      category: "Medical Devices",
    },
  ]);

  const handleRemove = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item._id !== id));
    toast.success("Item removed from wishlist");
  };

  const handleAddToCart = (item) => {
    if (!item.inStock) {
      toast.error("This item is currently out of stock");
      return;
    }
    toast.success("Item added to cart successfully");
  };

  return (
    <div className="animate-in fade-in duration-300">
      <div className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2 flex items-center gap-3">
          <Heart className="w-8 h-8 text-green-600 dark:text-green-500 fill-current" />
          Saved Items
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Products you've saved to review or purchase later.
        </p>
      </div>

      {wishlistItems.length === 0 ? (
        <div className="bg-gray-50 dark:bg-[#252525] rounded-3xl border border-gray-100 dark:border-gray-800 p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
          <div className="w-24 h-24 bg-white dark:bg-[#1e1e1e] rounded-full flex items-center justify-center shadow-sm mb-6">
            <Heart className="w-12 h-12 text-gray-300 dark:text-gray-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Your wishlist is empty
          </h3>
          <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-8">
            You haven't saved any items yet. Browse our categories and click the
            heart icon to save items you love.
          </p>
          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold py-3.5 px-8 rounded-xl active:scale-95 shadow-md"
          >
            Explore Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <div
              key={item._id}
              className="bg-white dark:bg-[#252525] border border-gray-100 dark:border-gray-800 rounded-2xl p-4 flex flex-col h-full duration-300 hover:shadow-lg hover:border-green-300 dark:hover:border-green-700/50 group"
            >
              <div className="relative mb-4 h-48 bg-gray-50 dark:bg-[#1e1e1e] rounded-xl p-4 flex items-center justify-center overflow-hidden">
                <button
                  onClick={() => handleRemove(item._id)}
                  className="absolute top-3 right-3 p-2 bg-white dark:bg-gray-800 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors shadow-sm z-10"
                  aria-label="Remove from wishlist"
                >
                  <Trash2 className="w-4 h-4" />
                </button>

                {item.image === "/placeholder.png" ? (
                  <Package className="w-20 h-20 text-gray-300 dark:text-gray-700" />
                ) : (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal transition-transform duration-500 group-hover:scale-105"
                  />
                )}

                {!item.inStock && (
                  <div className="absolute inset-0 bg-white/60 dark:bg-black/60 backdrop-blur-[1px] flex items-center justify-center">
                    <span className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold px-4 py-1.5 rounded-lg text-sm uppercase tracking-wider">
                      Out of Stock
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-col flex-grow">
                <span className="text-xs font-bold text-green-600 dark:text-green-500 uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <Link
                  to={`/product/${item._id}`}
                  className="font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                >
                  {item.name}
                </Link>
                <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100 dark:border-gray-800">
                  <span className="text-xl font-black text-gray-900 dark:text-white">
                    ${item.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => handleAddToCart(item)}
                    disabled={!item.inStock}
                    className="w-10 h-10 rounded-xl bg-green-700 hover:bg-green-800 disabled:bg-gray-300 dark:disabled:bg-gray-700 text-white flex justify-center items-center active:scale-95 disabled:cursor-not-allowed"
                    aria-label="Add to cart"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
