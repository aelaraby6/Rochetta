import { Link } from "react-router-dom";
import { ShoppingCart, ArrowLeft } from "lucide-react";

export default function EmptyCart() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 text-center shadow-sm border border-gray-100 dark:border-gray-700 max-w-2xl mx-auto">
      <ShoppingCart
        className="w-20 h-20 text-gray-300 dark:text-gray-600 mx-auto mb-6"
        aria-hidden="true"
      />
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Your cart is empty
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        Browse products and add them to your cart.
      </p>
      <Link
        to="/category/pain-relief"
        className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-xl transition-all active:scale-95"
      >
        <ArrowLeft className="w-5 h-5" aria-hidden="true" />
        Continue Shopping
      </Link>
    </div>
  );
}
