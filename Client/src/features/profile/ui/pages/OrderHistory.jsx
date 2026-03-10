import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Package, Calendar, DollarSign, XCircle, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import {
  useGetOrdersQuery,
  useCancelOrderMutation,
} from "../../../orders/store/ordersApi";

export default function OrderHistory() {
  const { user } = useSelector((state) => state.auth);
  const { data: response, isLoading } = useGetOrdersQuery(undefined, {
    skip: !user,
    refetchOnMountOrArgChange: true,
  });
  const [cancelOrderMutation] = useCancelOrderMutation();

  const [activeTab, setActiveTab] = useState("history");
  const [statusFilter, setStatusFilter] = useState("all");
  const [timeFilter, setTimeFilter] = useState("6_months");
  const [cancellingId, setCancellingId] = useState(null);

  const orders = response?.orders || [];

  const filteredOrders = useMemo(() => {
    let result = [...orders];

    if (statusFilter !== "all") {
      result = result.filter((order) => order.status === statusFilter);
    }

    const now = new Date();
    if (timeFilter === "6_months") {
      const sixMonthsAgo = new Date(now.setMonth(now.getMonth() - 6));
      result = result.filter(
        (order) => new Date(order.createdAt || order.date) >= sixMonthsAgo
      );
    } else if (timeFilter === "30_days") {
      const thirtyDaysAgo = new Date(now.setDate(now.getDate() - 30));
      result = result.filter(
        (order) => new Date(order.createdAt || order.date) >= thirtyDaysAgo
      );
    }

    return result.sort(
      (a, b) =>
        new Date(b.createdAt || b.date) - new Date(a.createdAt || a.date)
    );
  }, [orders, statusFilter, timeFilter]);

  const handleCancelOrder = async (orderId) => {
    if (!window.confirm("Are you sure you want to cancel this order?")) return;
    setCancellingId(orderId);
    try {
      await cancelOrderMutation(orderId).unwrap();
      toast.success("Order cancelled successfully");
    } catch (err) {
      toast.error(err.data?.message || "Failed to cancel order");
    } finally {
      setCancellingId(null);
    }
  };

  const formatPrice = (n) => (Math.round(Number(n || 0) * 100) / 100).toFixed(2);
  const formatQty = (n) =>
    Number.isInteger(Number(n)) ? String(n) : Number(n).toFixed(2);

  return (
    <div className="animate-in fade-in duration-300">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        Order Status & History
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        View complete order information and tracking details.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-1">
          <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
            Show
          </label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full bg-white dark:bg-[#252525] border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg p-3 outline-none focus:border-green-600 font-medium appearance-none"
          >
            <option value="all">All orders</option>
            <option value="pending">Pending orders</option>
            <option value="shipped">Shipped orders</option>
            <option value="delivered">Delivered orders</option>
            <option value="canceled">Canceled orders</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
            From
          </label>
          <select
            value={timeFilter}
            onChange={(e) => setTimeFilter(e.target.value)}
            className="w-full bg-white dark:bg-[#252525] border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg p-3 outline-none focus:border-green-600 font-medium appearance-none"
          >
            <option value="30_days">Last 30 days</option>
            <option value="6_months">Last 6 months</option>
            <option value="all_time">All time</option>
          </select>
        </div>
      </div>

      {isLoading ? (
        <div className="flex flex-col justify-center items-center py-20 text-green-600">
          <Loader2 className="w-10 h-10 animate-spin mb-4" />
        </div>
      ) : filteredOrders.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center bg-gray-50 dark:bg-[#252525] rounded-2xl border border-gray-100 dark:border-gray-800">
          <Package className="w-12 h-12 text-gray-300 dark:text-gray-600 mb-4" />
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            No orders found
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Try adjusting your filters or place a new order.
          </p>
        </div>
      ) : (
        <div className="grid gap-6">
          {filteredOrders.map((order) => {
            const total =
              order.total ??
              order.items?.reduce(
                (s, it) => s + (it.price ?? 0) * (it.quantity ?? it.NOI ?? 0),
                0
              );
            const isCancellingThis = cancellingId === order._id;

            return (
              <div
                key={order._id}
                className="bg-white dark:bg-[#252525] border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-md"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-gray-100 dark:border-gray-800 pb-4">
                  <div>
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-wider block mb-1">
                      Order #{String(order._id).slice(-6).toUpperCase()}
                    </span>
                    <div className="flex items-center gap-2 text-gray-900 dark:text-white font-semibold">
                      <Calendar className="w-4 h-4 text-green-600" />
                      {new Date(order.createdAt || order.date).toLocaleDateString(
                        "en-GB",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end gap-1 text-2xl font-black text-green-600 dark:text-green-400">
                      <DollarSign className="w-5 h-5 -mr-1" />
                      {formatPrice(total)}
                    </div>
                    <span
                      className={`text-xs font-bold px-2 py-1 rounded-md uppercase ${
                        order.status === "delivered"
                          ? "bg-green-100 text-green-700"
                          : order.status === "canceled"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {order.status || "Pending"}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <ul className="divide-y divide-gray-100 dark:divide-gray-800">
                    {(order.items || []).map((item, i) => (
                      <li key={i} className="py-3 flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center shrink-0">
                          <Package className="w-6 h-6 text-gray-400" />
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-gray-900 dark:text-white line-clamp-1">
                            {item.product?.name || item.name || "Product"}
                          </p>
                          <p className="text-sm font-medium text-gray-500">
                            Qty: {formatQty(item.quantity ?? item.NOI ?? 0)}
                          </p>
                        </div>
                        <div className="font-bold text-gray-700 dark:text-gray-300">
                          ${formatPrice(item.price)}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {order.status !== "canceled" &&
                  order.status !== "delivered" && (
                    <div className="flex justify-end pt-4">
                      <button
                        onClick={() => handleCancelOrder(order._id)}
                        disabled={isCancellingThis}
                        className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg font-bold disabled:opacity-50"
                      >
                        {isCancellingThis ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <XCircle className="w-5 h-5" />
                        )}
                        Cancel Order
                      </button>
                    </div>
                  )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}