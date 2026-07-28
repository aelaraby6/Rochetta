import { X, Loader2, Package, Pill } from "lucide-react";
import { useGetProductByIdQuery } from "../../../products/api/productsApi";

export default function ProductDetailsModal({ isOpen, onClose, productId }) {
  const { data, isLoading, error } = useGetProductByIdQuery(productId, {
    skip: !productId || !isOpen,
  });

  if (!isOpen) return null;

  const product = data?.data;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-white dark:bg-[#1e1e1e] rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Product Details</h2>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-[#165938]" />
              <p className="mt-4 text-gray-500">Loading details...</p>
            </div>
          ) : error || !product ? (
            <div className="text-center py-12 text-red-500">Failed to load product details.</div>
          ) : (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                {/* Product Image */}
                <div className="w-40 h-40 shrink-0 rounded-xl bg-gray-100 dark:bg-gray-800 overflow-hidden border border-gray-200 dark:border-gray-700">
                  {product.image ? (
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <Package className="w-12 h-12" />
                    </div>
                  )}
                </div>

                {/* Main Info */}
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{product.name}</h3>
                    <p className="text-sm text-[#288657] font-medium mt-1">{product.category?.name || "Uncategorized"}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-semibold">
                      💰 EGP {product.price}
                    </span>
                    <span className={`px-3 py-1 rounded-lg text-sm font-semibold ${product.stock > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                      📦 Stock: {product.stock}
                    </span>
                    <span className={`px-3 py-1 rounded-lg text-sm font-semibold ${product.is_active ? "bg-blue-100 text-blue-700" : "bg-gray-200 text-gray-600"}`}>
                      {product.is_active ? "Active" : "Inactive"}
                    </span>
                  </div>

                  {product.requires_prescription && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-50 text-red-600 border border-red-200 rounded-lg text-xs font-semibold">
                      <Pill className="w-3 h-3" /> Requires Prescription
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="bg-gray-50 dark:bg-[#252525] p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Description</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {product.description || "No description provided."}
                </p>
              </div>

              {/* Strips Info (If applicable) */}
              {product.has_strips && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-[#252525] p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                    <span className="text-xs text-gray-500 block">Strips Count</span>
                    <span className="text-lg font-bold text-gray-900 dark:text-white">{product.strip_count}</span>
                  </div>
                  <div className="bg-gray-50 dark:bg-[#252525] p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                    <span className="text-xs text-gray-500 block">Strips Per Box</span>
                    <span className="text-lg font-bold text-gray-900 dark:text-white">{product.strips_per_box}</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}