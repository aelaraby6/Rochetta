import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile({setCartItems ,user, setUser, setIsLoggedIn}) {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }else {
      const orderKey = `orders_${user.username}`;
      const storedOrders = JSON.parse(localStorage.getItem(orderKey)) || [];
      setOrders(storedOrders);
    }
  }, [navigate,user]);

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


  if (!user) return null;

  return (
    <div className="container mt-5 text-center">
      <h2> Welcome, {user.username}</h2>

      <p className="mt-4">
         Your purchases will be shown here (يمكنك إضافة قائمة لاحقًا)
      </p>
      <hr className="my-4" />
      <h4 className="text-center"> طلباتك السابقة</h4>

      {orders.length === 0 ? (
        <p className="text-center text-muted">لا يوجد طلبات حالية.</p>
      ) : (
        orders.map((order, index) => {
          const total = order.items.reduce(
            (acc, item) => acc + item.price * item.NOI,
            0
          );

          return (
            <div key={index} className="border rounded p-3 mb-3">
              <p className="mb-2">
                <strong> التاريخ:</strong>{" "}
                {new Date(order.date).toLocaleString("en-GB")}
              </p>

              <ul className="list-group mb-2">
                {order.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="list-group-item d-flex justify-content-between"
                  >
                    <span>
                      {item.name} ({item.NOI})
                    </span>
                    <span> price: ${item.price}</span>
                  </li>
                ))}
              </ul>

              <p className="text-end fw-bold">الإجمالي: ${total.toFixed(2)}</p>
              <button
  className="btn btn-outline-danger btn-sm mt-2"
  onClick={() => handleCancelOrder(index)}
>
   Cancel Order
</button>

            </div>
          );
        })
      )}
      <div className=" d-flex justify-content-center flex-column gap-5">
        <button
          className="btn btn-outline-danger "
          onClick={() => {
            const storedUser = JSON.parse(localStorage.getItem("user"));
            if (!storedUser) return;

            const orderKey = `orders_${storedUser.username}`;
            localStorage.removeItem(orderKey);

            setOrders([]);

            alert(" تم مسح كل الطلبات!");
          }}
        >
           Reset Orders
        </button>

        <button className="btn btn-danger " onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}
