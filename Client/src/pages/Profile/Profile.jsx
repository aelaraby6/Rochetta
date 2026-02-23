import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  User,
  LogOut,
  Package,
  Calendar,
  DollarSign,
  XCircle,
  Loader2,
  ShoppingBag,
} from "lucide-react";
import toast from "react-hot-toast";
import { logout } from "../../features/auth/store/authSlice";
import {
  useGetOrdersQuery,
  useCancelOrderMutation,
} from "../../features/orders/store/ordersApi";

const round2 = (n) => Math.round(Number(n || 0) * 100) / 100;
const formatQty = (n) =>
  Number.isInteger(round2(n)) ? String(round2(n)) : round2(n).toFixed(2);
const formatPrice = (n) => round2(n).toFixed(2);

export default function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const {
    data: response,
    isLoading,
    isError,
  } = useGetOrdersQuery(undefined, {
    skip: !user,
    refetchOnMountOrArgChange: true,
  });
  const [cancelOrderMutation, { isLoading: isCancelling }] =
    useCancelOrderMutation();

  const [orders, setOrders] = useState([]);
  const [cancellingId, setCancellingId] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    if (response?.orders) {
      setOrders(response.orders);
    } else if (isError) {
      console.warn("API failed, using local storage fallback.");
      const orderKey = `orders_${user.username || user.email}`;
      const storedOrders = JSON.parse(localStorage.getItem(orderKey)) || [];
      setOrders(storedOrders);
    }
  }, [response, isError, user, navigate]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleCancelOrder = async (orderIdOrIndex) => {
    if (!window.confirm("Are you sure you want to cancel this order?")) return;

    setCancellingId(orderIdOrIndex);
    const isLocalFallback =
      typeof orderIdOrIndex === "number" ||
      !orders.some((o) => o._id === orderIdOrIndex);

    if (isLocalFallback) {
      try {
        const orderKey = `orders_${user?.email || user?.username}`;
        const storedOrders = JSON.parse(localStorage.getItem(orderKey)) || [];
        const idx = Number(orderIdOrIndex);
        if (!Number.isNaN(idx) && idx >= 0 && idx < storedOrders.length) {
          storedOrders.splice(idx, 1);
          localStorage.setItem(orderKey, JSON.stringify(storedOrders));
          setOrders([...storedOrders]);
          toast.success("Order cancelled successfully");
        } else {
          setOrders((prev) => prev.filter((_, i) => i !== idx));
          toast.success("Order cancelled successfully");
        }
      } catch (err) {
        toast.error("Failed to cancel local order", err);
      } finally {
        setCancellingId(null);
      }
      return;
    }

    try {
      await cancelOrderMutation(orderIdOrIndex).unwrap();
      setOrders((prev) => prev.filter((o) => o._id !== orderIdOrIndex));

      const orderKey = `orders_${user?.email || user?.username}`;
      const stored = JSON.parse(localStorage.getItem(orderKey)) || [];
      const cleaned = stored.filter((st) => st._id !== orderIdOrIndex);
      localStorage.setItem(orderKey, JSON.stringify(cleaned));
      toast.success("Order cancelled successfully");
    } catch (err) {
      toast.error(err.data?.message || "Failed to cancel order");
    } finally {
      setCancellingId(null);
    }
  };

  if (!user) return null;

  const visibleOrders = orders.filter((o) => o?.status !== "canceled");

  return (
    <div className="max-w-6xl mx-auto mt-24 px-4 sm:px-6 lg:px-8 mb-20 w-full transition-colors duration-300">
      <div className="bg-white dark:bg-[#1e1e1e] rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 p-8 mb-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

        <div className="flex flex-col md:flex-row items-center gap-6 z-10">
          <div className="w-28 h-28 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-800 shrink-0">
            <User className="w-14 h-14" aria-hidden="true" />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-1 tracking-tight">
              {user.name || user.username || "Valued Customer"}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 font-medium mb-2">
              {user.email}
            </p>
            <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300">
              <ShoppingBag
                className="w-4 h-4 text-green-600"
                aria-hidden="true"
              />
              {visibleOrders.length} Active Orders
            </div>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="z-10 inline-flex items-center gap-2 px-6 py-3 bg-red-50 dark:bg-red-900/20 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/40 rounded-xl font-bold transition-all active:scale-95"
        >
          <LogOut className="w-5 h-5" aria-hidden="true" />
          Sign Out
        </button>
      </div>

      <div className="bg-white dark:bg-[#1e1e1e] rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 md:p-10 min-h-[500px]">
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
              <Package
                className="w-7 h-7 text-green-600 dark:text-green-500"
                aria-hidden="true"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Order History
            </h2>
          </div>
        </div>

        {isLoading ? (
          <div className="flex flex-col justify-center items-center py-20 text-green-600">
            <Loader2
              className="w-10 h-10 animate-spin mb-4"
              aria-hidden="true"
            />
            <p className="font-medium text-gray-500 dark:text-gray-400">
              Loading your orders...
            </p>
          </div>
        ) : visibleOrders.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-24 h-24 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
              <Package
                className="w-12 h-12 text-gray-300 dark:text-gray-600"
                aria-hidden="true"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              No orders found
            </h3>
            <p className="text-gray-500 dark:text-gray-400 max-w-sm">
              Looks like you haven't placed any orders yet. Start exploring our
              products!
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {visibleOrders.map((order) => {
              const originalIdx = orders.findIndex(
                (o) =>
                  (o._id && order._id && o._id === order._id) ||
                  (o.date &&
                    order.date &&
                    new Date(o.date).getTime() ===
                      new Date(order.date).getTime()),
              );

              const total =
                order.total ??
                order.items?.reduce(
                  (s, it) => s + (it.price ?? 0) * (it.quantity ?? it.NOI ?? 0),
                  0,
                );
              const orderId = order._id ?? originalIdx;
              const isCancellingThis = cancellingId === orderId;

              return (
                <div
                  key={orderId}
                  className="group bg-gray-50 dark:bg-[#252525] border border-gray-200 dark:border-gray-700 rounded-2xl p-6 transition-all duration-300 hover:shadow-md hover:border-green-300 dark:hover:border-green-700/50"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Order #{String(orderId).slice(-6).toUpperCase()}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-900 dark:text-white font-semibold">
                        <Calendar
                          className="w-4 h-4 text-green-600"
                          aria-hidden="true"
                        />
                        {new Date(
                          order.createdAt || order.date,
                        ).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">
                        Total Amount
                      </p>
                      <div className="flex items-center justify-end gap-1 text-2xl font-black text-green-600 dark:text-green-400">
                        <DollarSign
                          className="w-6 h-6 -mr-1"
                          aria-hidden="true"
                        />
                        {formatPrice(total)}
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-[#1e1e1e] rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden mb-6">
                    <ul className="divide-y divide-gray-100 dark:divide-gray-800">
                      {(order.items || []).map((item, i) => {
                        const qtyRaw = item.quantity ?? item.NOI ?? 0;
                        const itemName =
                          item.product?.name || item.name || "Unknown Product";
                        return (
                          <li
                            key={i}
                            className="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-[#252525] transition-colors"
                          >
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center p-2 shrink-0">
                                <Package
                                  className="w-6 h-6 text-gray-400"
                                  aria-hidden="true"
                                />
                              </div>
                              <div>
                                <p className="font-bold text-gray-900 dark:text-white line-clamp-1">
                                  {itemName}
                                </p>
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                  Qty: {formatQty(qtyRaw)}
                                </p>
                              </div>
                            </div>
                            <div className="font-bold text-gray-700 dark:text-gray-300 whitespace-nowrap">
                              ${formatPrice(item.price ?? 0)}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {order.status !== "canceled" &&
                    order.status !== "delivered" &&
                    order._id && (
                      <div className="flex justify-end pt-2 border-t border-gray-200 dark:border-gray-700">
                        <button
                          onClick={() => handleCancelOrder(orderId)}
                          disabled={isCancellingThis || isCancelling}
                          className="flex items-center gap-2 px-5 py-2.5 border-2 border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl font-bold transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isCancellingThis ? (
                            <Loader2
                              className="w-5 h-5 animate-spin"
                              aria-hidden="true"
                            />
                          ) : (
                            <XCircle className="w-5 h-5" aria-hidden="true" />
                          )}
                          {isCancellingThis ? "Cancelling..." : "Cancel Order"}
                        </button>
                      </div>
                    )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
