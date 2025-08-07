import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile({
  setCartItems,
  user,
  setUser,
  setIsLoggedIn,
}) {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      const orderKey = `orders_${user.username}`;
      const storedOrders = JSON.parse(localStorage.getItem(orderKey)) || [];
      setOrders(storedOrders);
    }
  }, [navigate, user]);

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    setUser(null);
    setIsLoggedIn(false);
    setCartItems([]);
    navigate("/login");
  };

  const handleCancelOrder = (index) => {
    const updatedOrders = [...orders];
    updatedOrders.splice(index, 1);
    const orderKey = `orders_${user.username}`;
    localStorage.setItem(orderKey, JSON.stringify(updatedOrders));
    setOrders(updatedOrders);
  };

  const handleResetOrders = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) return;
    const orderKey = `orders_${storedUser.username}`;
    localStorage.removeItem(orderKey);
    setOrders([]);
    alert("All orders have been cleared!");
  };

  if (!user) return null;

  return (
    <div className="container my-5">
      <div className="card shadow-lg border-0 p-4">
        <h2 className="text-center mb-4 text-success fw-bold">
          Welcome, {user.name}
        </h2>

        <div className="row g-4 mb-4">
            <div className="bg-light rounded p-3 h-100">
              <h5 className="text-success mb-3">Contact Info</h5>
              <p><strong>Email:</strong> {user.email}</p>
            </div>
        </div>

        <hr />

        <h4 className="text-success text-center mb-4">Your Orders</h4>

        {orders.length === 0 ? (
          <p className="text-center text-muted">You have no orders yet.</p>
        ) : (
          orders.map((order, index) => {
            const total = order.items.reduce(
              (acc, item) => acc + item.price * item.NOI,
              0
            );

            return (
              <div
                key={index}
                className="card mb-3 border-success border-2 shadow-sm"
              >
                <div className="card-body">
                  <p className="mb-2">
                    <strong>Date:</strong>{" "}
                    {new Date(order.date).toLocaleString("en-GB")}
                  </p>

                  <ul className="list-group mb-3">
                    {order.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="list-group-item d-flex justify-content-between align-items-center"
                      >
                        <span>{item.name} (x{item.NOI})</span>
                        <span>${item.price.toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="d-flex justify-content-between align-items-center">
                    <strong className="text-success">Total: ${total.toFixed(2)}</strong>
                    <button
                      className="btn btn-outline-success btn-sm"
                      onClick={() => handleCancelOrder(index)}
                    >
                      Cancel Order
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}

        <div className="d-flex flex-column gap-3 mt-4">
          <button
            className="btn btn-outline-success"
            onClick={handleResetOrders}
          >
            Reset All Orders
          </button>

          <button className="btn btn-success" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
