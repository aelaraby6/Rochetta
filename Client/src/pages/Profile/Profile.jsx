// Profile.jsx (كامل)
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../../api";

export default function Profile({ setCartItems, user, setUser, setIsLoggedIn }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [orders, setOrders] = useState([]);
  const [address, setAddress] = useState("");

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

  // Confirm order form (if user navigated from cart)
  const handleCreateOrderFromProfile = async () => {
    try {
      if (!address.trim()) {
        alert("Please enter your delivery address.");
        return;
      }

      const res = await api.post("/order/create-order", { address });
      const newOrder = res?.data?.order;

      // update local state + localStorage so it looks like old system
      const storedUser = JSON.parse(localStorage.getItem("user"));
      const orderKey = `orders_${storedUser.email}`;
      const existingOrders = JSON.parse(localStorage.getItem(orderKey)) || [];

      // build localOrder from server order if available, otherwise fallback
      let localOrder;
      if (newOrder) {
        localOrder = {
          date: newOrder.createdAt || new Date().toISOString(),
          items:
            (newOrder.items &&
              newOrder.items.map((it) => ({
                id: it.product?._id || it.product,
                name: it.product?.name || it.name || "",
                price: it.price,
                NOI: it.quantity,
                pieces: it.product?.stock ?? 0,
                stripsPerBox: it.product?.stripsPerBox ?? 0,
                isStrip: false,
              }))) ||
            [],
        };
      } else {
        // shouldn't happen often — but fallback
        alert("Order created but server didn't return order body. Using fallback.");
        localOrder = { date: new Date().toISOString(), items: [] };
      }

      const updatedOrders = [localOrder, ...existingOrders];
      localStorage.setItem(orderKey, JSON.stringify(updatedOrders));
      setOrders(updatedOrders);

      // clear cart UI
      setCartItems([]);
      localStorage.setItem("cart", JSON.stringify([]));
      setAddress("");
      alert("Order created successfully!");
    } catch (err) {
      console.error("Error creating order:", err);
      alert(err.response?.data?.message || "Failed to create order");
    }
  };

  const handleCancelOrder = async (orderId) => {
    try {
    await api.patch(`/order/${orderId}/cancel`);
    setOrders((prevOrders) =>
      prevOrders.filter((order) => order._id !== orderId)
    );
  } catch (err) {
    console.error("❌ Error cancelling order:", err);
  }
  };

  if (!user) return null;

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <h2 className="text-center text-success fw-bold">Welcome to your profile</h2>

      {/* If we came from cart show small form to confirm address */}
      {location.state?.fromCart && (
        <div className="card p-3 mt-4 shadow-sm">
          <h5>Complete Your Order</h5>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Enter delivery address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <button className="btn btn-success" onClick={handleCreateOrderFromProfile}>
            Confirm Order
          </button>
        </div>
      )}

      <hr />
      <h4 className="text-success text-center mb-4">Your Orders</h4>
      {orders.length === 0 ? (
        <p className="text-center">You have no orders yet.</p>
      ) : (
        orders.map((order, idx) => {
          const total = order.total ?? order.items?.reduce((s, it) => s + (it.price ?? 0) * (it.quantity ?? it.NOI ?? 0), 0);
          return (
            <div key={order._id ?? idx} className="card mb-3 border-success border-2 shadow-sm">
              <div className="card-body">
                <p className="mb-2">
                  <strong>Date:</strong> {new Date(order.createdAt || order.date).toLocaleString("en-GB")}
                </p>
                <ul className="list-group mb-3">
                  {(order.items || []).map((item, i) => (
                    <li key={i} className="list-group-item d-flex justify-content-between align-items-center land">
                      <span>{item.product?.name || item.name || "Unknown"} (x{item.quantity ?? item.NOI ?? 0})</span>
                      <span>${(item.price ?? 0).toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
                <div className="d-flex justify-content-between align-items-center">
                  <strong className="text-success">Total: ${total.toFixed(2)}</strong>
                  {order.status !== "canceled" && order._id && (
                    <button className="btn btn-outline-success btn-sm" onClick={() => handleCancelOrder(order._id)}>
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
