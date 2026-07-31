import { X, Package, MapPin, User, Calendar, CreditCard } from "lucide-react";
import { useGetOrderByIdQuery } from "../api/ordersApi";

export default function OrderDetailsModal({ isOpen, onClose, orderId }) {
  const { data, isLoading, isError } = useGetOrderByIdQuery(orderId, {
    skip: !orderId,
  });

  if (!isOpen) return null;

  const order = data?.order;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div
        className="bg-white dark:bg-[#1e1e1e] w-full max-w-3xl rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-5 border-b border-gray-100 dark:border-gray-800">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Order Details
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar">
          {isLoading ? (
            <div className="flex items-center justify-center py-10">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#288657]"></div>
            </div>
          ) : isError || !order ? (
            <div className="text-center py-10 text-red-500">
              Failed to load order details.
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 bg-gray-50 dark:bg-[#252525] p-4 rounded-xl">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Order ID
                  </p>
                  <p className="font-mono font-semibold text-gray-900 dark:text-white">
                    #{order._id}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Date
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {new Date(order.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                    <User className="w-4 h-4 text-[#288657]" /> Customer Info
                  </h3>
                  <div className="bg-gray-50 dark:bg-[#252525] p-4 rounded-xl text-sm">
                    <p className="font-medium text-gray-900 dark:text-white">
                      {order.user?.name}
                    </p>
                    <p className="text-gray-500 mt-1">{order.user?.email}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                    <MapPin className="w-4 h-4 text-[#288657]" /> Shipping
                    Address
                  </h3>
                  <div className="bg-gray-50 dark:bg-[#252525] p-4 rounded-xl text-sm">
                    {typeof order.address === "string" ? (
                      <p className="text-gray-700 dark:text-gray-300">
                        {order.address}
                      </p>
                    ) : (
                      <>
                        <p className="text-gray-700 dark:text-gray-300">
                          {order.address?.street}
                        </p>
                        <p className="text-gray-500 mt-1">
                          {order.address?.city} {order.address?.postalCode}
                        </p>
                        {order.address?.phone && (
                          <p className="text-gray-500 mt-1">
                            📞 {order.address.phone}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                  <Package className="w-4 h-4 text-[#288657]" /> Order Items
                </h3>
                <div className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 dark:bg-[#252525] text-gray-600 dark:text-gray-400">
                      <tr>
                        <th className="px-4 py-3 font-medium">Product</th>
                        <th className="px-4 py-3 font-medium text-center">
                          Qty
                        </th>
                        <th className="px-4 py-3 font-medium text-right">
                          Price
                        </th>
                        <th className="px-4 py-3 font-medium text-right">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                      {order.items?.map((item) => (
                        <tr
                          key={item._id}
                          className="bg-white dark:bg-[#1e1e1e]"
                        >
                          <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                            {item.product?.name || "Deleted Product"}
                          </td>
                          <td className="px-4 py-3 text-center text-gray-600 dark:text-gray-300">
                            x{item.quantity}
                          </td>
                          <td className="px-4 py-3 text-right text-gray-600 dark:text-gray-300">
                            ${item.price?.toFixed(2)}
                          </td>
                          <td className="px-4 py-3 text-right font-medium text-gray-900 dark:text-white">
                            ${(item.quantity * item.price).toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-gray-100 dark:border-gray-800">
                <div className="w-full sm:w-1/2 space-y-2">
                  <div className="flex justify-between items-center text-lg font-bold text-gray-900 dark:text-white">
                    <span className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-[#288657]" /> Total
                      Amount
                    </span>
                    <span>${order.total?.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
