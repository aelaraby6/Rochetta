import { useState } from "react";
import {
  Loader2,
  CheckCircle,
  MapPin,
  Phone,
  CreditCard,
  Banknote,
} from "lucide-react";

export default function CartSummary({
  cartItems,
  cartTotal,
  onCreateOrder,
  isOrdering,
}) {
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [formData, setFormData] = useState({
    street: "",
    city: "",
    phone: "",
    paymentMethod: "COD",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProceed = () => {
    setShowCheckoutForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateOrder(formData);
  };

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

      {!showCheckoutForm ? (
        <button
          onClick={handleProceed}
          className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-4 rounded-xl transition-transform active:scale-95 flex justify-center items-center gap-2 shadow-md"
        >
          <CheckCircle className="w-5 h-5" aria-hidden="true" />
          Proceed to Checkout
        </button>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-4 border-t border-gray-100 dark:border-gray-700 pt-4 mt-4"
        >
          <div>
            <div className="flex items-center gap-2 mb-1 text-gray-700 dark:text-gray-300">
              <MapPin className="w-4 h-4" />
              <label className="text-sm font-medium">Street Address</label>
            </div>
            <input
              type="text"
              name="street"
              required
              value={formData.street}
              onChange={handleChange}
              className="w-full p-2.5 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                City
              </label>
              <input
                type="text"
                name="city"
                required
                value={formData.city}
                onChange={handleChange}
                className="w-full p-2.5 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2.5 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="pt-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Payment Method
            </label>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="COD"
                  checked={formData.paymentMethod === "COD"}
                  onChange={handleChange}
                  className="w-4 h-4 text-green-600 focus:ring-green-500"
                />
                <Banknote className="w-5 h-5 text-gray-500" />
                <span className="text-gray-900 dark:text-white font-medium text-sm">
                  Cash on Delivery
                </span>
              </label>

              <label className="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={formData.paymentMethod === "card"}
                  onChange={handleChange}
                  className="w-4 h-4 text-green-600 focus:ring-green-500"
                />
                <CreditCard className="w-5 h-5 text-gray-500" />
                <span className="text-gray-900 dark:text-white font-medium text-sm">
                  Credit Card (Paymob)
                </span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={isOrdering}
            className="w-full mt-4 bg-green-700 hover:bg-green-800 disabled:bg-green-500 text-white font-bold py-3.5 rounded-xl transition-transform active:scale-95 flex justify-center items-center gap-2 shadow-md"
          >
            {isOrdering ? (
              <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
            ) : (
              "Confirm Order"
            )}
          </button>

          <button
            type="button"
            onClick={() => setShowCheckoutForm(false)}
            className="w-full mt-2 py-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"
          >
            Back to Summary
          </button>
        </form>
      )}

      <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400 flex flex-col gap-1">
        <span>Secure checkout</span>
        <span>2-days return policy</span>
      </div>
    </div>
  );
}
