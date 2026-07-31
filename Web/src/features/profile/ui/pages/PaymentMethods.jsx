import { Plus, HelpCircle } from "lucide-react";

export default function PaymentMethods() {
  return (
    <div className="animate-in fade-in duration-300">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Payment methods
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Securely add and store your payment methods for convenient checkout.
        </p>
      </div>

      <div className="bg-white dark:bg-[#252525] rounded-3xl border border-gray-100 dark:border-gray-800 p-8 shadow-sm">
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
            Credit/debit cards
          </h3>
          <div className="border border-gray-300 dark:border-gray-700 rounded-xl p-4 text-gray-600 dark:text-gray-400 font-medium bg-gray-50 dark:bg-[#1e1e1e]">
            No Cards on file.
          </div>
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Gift cards
            </h3>
            <HelpCircle className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors" />
          </div>
          <div className="border border-gray-300 dark:border-gray-700 rounded-xl p-4 text-gray-600 dark:text-gray-400 font-medium bg-gray-50 dark:bg-[#1e1e1e]">
            No Cards on file.
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 border-t border-gray-100 dark:border-gray-800 pt-8">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold py-3.5 px-6 rounded-full active:scale-95 shadow-md">
            <Plus className="w-5 h-5" />
            Add a new payment card
          </button>

          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-2 border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white text-gray-900 dark:text-white font-bold py-3 px-6 rounded-full active:scale-95">
            <Plus className="w-5 h-5" />
            Add a new gift card
          </button>
        </div>
      </div>
    </div>
  );
}
