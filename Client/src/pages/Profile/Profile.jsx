import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile({
  setCartItems,
  user,
  setUser,
  setProducts,
  setIsLoggedIn,
}) {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    let currentUser = user || JSON.parse(localStorage.getItem("user"));
    if (!currentUser) {
      navigate("/login");
      return;
    }
    setUser(currentUser);
    const orderKey = `orders_${currentUser.username || currentUser.email}`;
    const storedOrders = JSON.parse(localStorage.getItem(orderKey)) || [];
    setOrders(storedOrders);
  }, [navigate, user, setUser]);

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
    setUser(null);
    setCartItems([]);
    navigate("/login");
  };

  const handleCancelOrder = (index) => {
    const orderToCancel = orders[index];
    let storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    storedProducts = storedProducts.map((prod) => {
      const canceledItem = orderToCancel.items.find((i) => i.id === prod.id);
      if (canceledItem) {
        return { ...prod, pieces: prod.pieces + canceledItem.NOI };
      }
      return prod;
    });
    localStorage.setItem("products", JSON.stringify(storedProducts));
    const updatedOrders = [...orders];
    updatedOrders.splice(index, 1);
    const orderKey = `orders_${user.username || user.email}`;
    localStorage.setItem(orderKey, JSON.stringify(updatedOrders));
    setOrders(updatedOrders);
    setProducts(storedProducts);
  };

  const handleResetOrders = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) return;
    const orderKey = `orders_${storedUser.username || storedUser.email}`;
    localStorage.removeItem(orderKey);
    setOrders([]);
    alert("All orders have been cleared!");
  };

  if (!user) return null;

  return (
    <>
      <div style={{ marginTop: "100px" }} className="container">
        <div className=" border-0 p-4">
          {/* Welcome Message */}
          <h2 className="text-center mb-4 text-success fw-bold">
            Welcome to your profile 
          </h2>

          {/* Contact Info */}
          <div className="row g-4 mb-4">
            <div className="bg-light rounded p-3 h-100 land shadow-sm">
              <h5 className="text-success mb-3">Contact Info</h5>
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
            </div>
          </div>
        </div>

        <hr />
        <h4 className="text-success text-center mb-4">Your Orders</h4>
        {orders.length === 0 ? (
          <p className="text-center">You have no orders yet.</p>
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
                        className="list-group-item d-flex justify-content-between align-items-center land"
                      >
                        <span>
                          {item.name} (x{item.NOI})
                        </span>
                        <span>${item.price.toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="d-flex justify-content-between align-items-center">
                    <strong className="text-success">
                      Total: ${total.toFixed(2)}
                    </strong>
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
        <div className="d-flex gap-3 mt-4 justify-content-center">
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
    </>
  );
}
