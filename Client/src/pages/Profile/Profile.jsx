// src/pages/Profile/Profile.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";

export default function Profile({ setCartItems, user, setUser, setIsLoggedIn, setProducts }) {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  // ---- helpers to format numbers (fix floating point noise) ----
  const round2 = (n) => {
    const num = Number(n || 0);
    // round to 2 decimals reliably
    return Math.round(num * 100) / 100;
  };

  const formatQty = (n) => {
    const v = round2(Number(n || 0));
    return Number.isInteger(v) ? String(v) : v.toFixed(2);
  };

  const formatPrice = (n) => {
    const v = round2(Number(n || 0));
    // always show 2 decimals for prices
    return v.toFixed(2);
  };
  // --------------------------------------------------------------

  useEffect(() => {
    const currentUser = user || JSON.parse(localStorage.getItem("user"));
    if (!currentUser) {
      navigate("/login");
      return;
    }
    setUser(currentUser);

    const fetchOrders = async () => {
      try {
        const res = await api.get("/order");
        if (res?.data?.orders) {
          setOrders(res.data.orders);
          return;
        }
      } catch (err) {
        console.warn("Failed to fetch orders from API, falling back to localStorage.", err);
      }

      // fallback to localStorage format (old behaviour)
      const orderKey = `orders_${currentUser.username || currentUser.email}`;
      const storedOrders = JSON.parse(localStorage.getItem(orderKey)) || [];
      setOrders(storedOrders);
    };

    fetchOrders();
  }, [navigate, user, setUser]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    setUser(null);
    setIsLoggedIn(false);
    setCartItems([]);
    navigate("/");
  };

  const handleCancelOrder = async (orderIdOrIndex) => {
    const isLocalFallback =
      typeof orderIdOrIndex === "number" ||
      !orders.some((o) => o._id === orderIdOrIndex);

    if (isLocalFallback) {
      try {
        const currentUser = user || JSON.parse(localStorage.getItem("user"));
        const orderKey = `orders_${currentUser?.email || currentUser?.username}`;
        const storedOrders = JSON.parse(localStorage.getItem(orderKey)) || [];
        const idx = Number(orderIdOrIndex);
        if (!Number.isNaN(idx) && idx >= 0 && idx < storedOrders.length) {
          storedOrders.splice(idx, 1);
          localStorage.setItem(orderKey, JSON.stringify(storedOrders));
          setOrders(storedOrders);
        } else {
          setOrders((prev) => prev.filter((_, i) => i !== idx));
        }
      } catch (err) {
        console.error("Error removing local order:", err);
        alert("Failed to cancel local order");
      }
      return;
    }

    const orderId = orderIdOrIndex;
    try {
      const res = await api.patch(`/order/${orderId}/cancel`);
      const updatedOrder = res.data?.order;

      if (updatedOrder?.items && typeof setProducts === "function") {
        setProducts((prevProducts) => {
          const next = prevProducts.map((p) => ({ ...p }));
          for (const it of updatedOrder.items) {
            const prodId = it.product?._id ? it.product._id : it.product;
            const qty = it.quantity || 0;
            if (!prodId || qty <= 0) continue;
            const idx = next.findIndex((p) => p._id === prodId || p.id === prodId);
            if (idx !== -1) {
              next[idx].pieces = (next[idx].pieces ?? next[idx].stock ?? 0) + qty;
            }
          }
          return next;
        });
      }

      setOrders((prev) => prev.filter((o) => o._id !== orderId));

      try {
        const currentUser = user || JSON.parse(localStorage.getItem("user"));
        const orderKey = `orders_${currentUser?.email || currentUser?.username}`;
        const stored = JSON.parse(localStorage.getItem(orderKey)) || [];
        const cleaned = stored.filter((st) => {
          if (st._id && st._id === orderId) return false;
          if (st.date && updatedOrder?.createdAt) {
            const stTime = new Date(st.date).getTime();
            const updTime = new Date(updatedOrder.createdAt).getTime();
            if (!Number.isNaN(stTime) && stTime === updTime) return false;
          }
          return true;
        });
        localStorage.setItem(orderKey, JSON.stringify(cleaned));
      } catch (e) {
        console.warn("Could not clean localStorage orders:", e);
      }
    } catch (err) {
      console.error("❌ Error cancelling order:", err);
      alert(err.response?.data?.message || "Failed to cancel order");
    }
  };

  if (!user) return null;

  // hide canceled orders
  const visibleOrders = orders.filter((o) => o?.status !== "canceled");

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <h2 className="text-center text-success fw-bold">Welcome to your profile</h2>

      <hr />
      <h4 className="text-success text-center mb-4">Your Orders</h4>

      {visibleOrders.length === 0 ? (
        <p className="text-center">You have no orders yet.</p>
      ) : (
        visibleOrders.map((order) => {
          const originalIdx = orders.findIndex(
            (o) =>
              (o._id && order._id && o._id === order._id) ||
              (o.date && order.date && new Date(o.date).getTime() === new Date(order.date).getTime())
          );

          const total =
            order.total ??
            order.items?.reduce((s, it) => s + (it.price ?? 0) * (it.quantity ?? it.NOI ?? 0), 0);

          return (
            <div key={order._id ?? originalIdx} className="card mb-3 border-success border-2 shadow-sm">
              <div className="card-body">
                <p className="mb-2">
                  <strong>Date:</strong> {new Date(order.createdAt || order.date).toLocaleString("en-GB")}
                </p>
                <ul className="list-group mb-3">
                  {(order.items || []).map((item, i) => {
                    const qtyRaw = item.quantity ?? item.NOI ?? 0;
                    return (
                      <li key={i} className="list-group-item d-flex justify-content-between align-items-center land">
                        <span>{item.product?.name || item.name || "Unknown"} (x{formatQty(qtyRaw)})</span>
                        <span>${formatPrice(item.price ?? 0)}</span>
                      </li>
                    );
                  })}
                </ul>
                <div className="d-flex justify-content-between align-items-center">
                  <strong className="text-success">Total: ${formatPrice(total)}</strong>
                  {order.status !== "canceled" && order._id && (
                    <button
                      className="btn btn-outline-success btn-sm"
                      onClick={() => handleCancelOrder(order._id ?? originalIdx)}
                    >
                      Cancel Order
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })
      )}

      <div className="d-flex gap-3 mt-4 justify-content-center">
        <button className="btn btn-success" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}
