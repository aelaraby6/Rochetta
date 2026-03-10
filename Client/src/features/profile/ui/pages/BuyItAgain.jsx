import { useState } from "react";
import { Link } from "react-router-dom";
import {
  RotateCcw,
  Package,
  ShoppingCart,
  CheckCircle,
  Trash2,
} from "lucide-react";
import toast from "react-hot-toast";

export default function BuyItAgain() {
  const [savedOrders, setSavedOrders] = useState([
    {
      _id: "RTN-554433",
      title: "Monthly Diabetes & BP Meds",
      savedDate: "2026-02-15T10:30:00Z",
      total: 125.5,
      items: [
        { name: "Glucophage 1000mg - 30 Tabs", qty: 2 },
        { name: "Concor 5mg - 30 Tabs", qty: 1 },
        { name: "Aspirin Protect 100mg", qty: 1 },
      ],
    },
    {
      _id: "RTN-998877",
      title: "Vitamins & Supplements",
      savedDate: "2026-01-20T14:20:00Z",
      total: 45.0,
      items: [
        { name: "Vitamin C 1000mg Effervescent", qty: 2 },
        { name: "Omega 3 Fish Oil - 60 Caps", qty: 1 },
      ],
    },
  ]);

  const [isAddingAll, setIsAddingAll] = useState(null);

  const handleAddEntireOrderToCart = async (orderId) => {
    setIsAddingAll(orderId);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("All items added to your cart successfully!");
    } catch (error) {
      toast.error("Failed to add items to cart." ,error);
    } finally {
      setIsAddingAll(null);
    }
  };

  const handleRemoveSavedOrder = (orderId) => {
    if (window.confirm("Are you sure you want to remove this saved order?")) {
      setSavedOrders((prev) => prev.filter((o) => o._id !== orderId));
      toast.success("Saved order removed");
    }
  };

  return (
    <div
      className="animate-in fade-in duration-300 focus-visible:outline-none"
      tabIndex="-1"
    >
      <div className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2 flex items-center gap-3">
          <RotateCcw
            className="w-8 h-8 text-green-600 dark:text-green-500"
            aria-hidden="true"
          />
          Buy It Again
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Reorder your saved routine purchases with a single click.
        </p>
      </div>

      {savedOrders.length === 0 ? (
        <div className="bg-gray-50 dark:bg-[#252525] rounded-[2rem] border border-gray-100 dark:border-gray-800 p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
          <div className="w-24 h-24 bg-white dark:bg-[#1e1e1e] rounded-full flex items-center justify-center shadow-sm mb-6">
            <RotateCcw
              className="w-12 h-12 text-gray-300 dark:text-gray-600"
              aria-hidden="true"
            />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            No saved orders yet
          </h3>
          <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-8">
            You haven't saved any orders. Check the "Save this cart" option
            during checkout to create your first routine order.
          </p>
          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold py-3.5 px-8 rounded-xl transition-all active:scale-95 shadow-md"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {savedOrders.map((order) => (
            <div
              key={order._id}
              className="bg-white dark:bg-[#252525] border border-gray-200 dark:border-gray-700 rounded-2xl p-6 transition-all hover:shadow-md flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4 border-b border-gray-100 dark:border-gray-800 pb-4 gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {order.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    Saved on:{" "}
                    {new Date(order.savedDate).toLocaleDateString("en-GB", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <button
                  onClick={() => handleRemoveSavedOrder(order._id)}
                  className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors"
                  aria-label="Delete saved order"
                >
                  <Trash2 className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              <div className="flex-grow mb-6">
                <ul className="space-y-3">
                  {order.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                      <div className="w-8 h-8 bg-gray-50 dark:bg-[#1e1e1e] rounded-lg flex items-center justify-center shrink-0 border border-gray-100 dark:border-gray-800">
                        <Package
                          className="w-4 h-4 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <span className="font-bold text-gray-900 dark:text-white">
                        x{item.qty}
                      </span>
                      <span className="text-gray-600 dark:text-gray-300 line-clamp-1">
                        {item.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-100 dark:border-gray-800">
                <div className="text-left w-full sm:w-auto">
                  <span className="block text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider mb-0.5">
                    Estimated Total
                  </span>
                  <span className="text-2xl font-black text-gray-900 dark:text-white">
                    ${order.total.toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={() => handleAddEntireOrderToCart(order._id)}
                  disabled={isAddingAll === order._id}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-green-700 hover:bg-green-800 disabled:bg-green-500 text-white rounded-xl font-bold transition-transform active:scale-95 shadow-md focus:outline-none focus:ring-2 focus:ring-green-600"
                >
                  {isAddingAll === order._id ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Adding...
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" aria-hidden="true" />
                      Add All to Cart
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
