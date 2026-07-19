import { Loader2, CheckCircle } from "lucide-react";

export default function CartSummary({
  cartItems,
  cartTotal,
  onCreateOrder,
  isOrdering,
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 sticky top-24">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
        Order Summary
      </h2>

      <div className="flex justify-between items-center mb-4 text-gray-600 dark:text-gray-400">
        <span>Total Items</span>
        <span className="font-semibold text-gray-900 dark:text-white">
          {cartItems.length} Unique
        </span>
      </div>

      <div className="flex justify-between items-center mb-6 pt-4 border-t border-gray-100 dark:border-gray-700">
        <span className="text-lg font-bold text-gray-900 dark:text-white">
          Subtotal
        </span>
        <span className="text-2xl font-black text-green-600 dark:text-green-400">
          ${cartTotal.toFixed(2)}
        </span>
      </div>

      <button
        onClick={onCreateOrder}
        disabled={isOrdering}
        className="w-full bg-green-700 hover:bg-green-800 disabled:bg-green-500 text-white font-bold py-4 rounded-xl transition-transform active:scale-95 flex justify-center items-center gap-2 shadow-md"
      >
        {isOrdering ? (
          <Loader2 className="w-6 h-6 animate-spin" aria-hidden="true" />
        ) : (
          <>
            <CheckCircle className="w-5 h-5" aria-hidden="true" />
            Checkout
          </>
        )}
      </button>

      <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400 flex flex-col gap-1">
        <span>Secure checkout</span>
        <span>2-days return policy</span>
      </div>
    </div>
  );
}
