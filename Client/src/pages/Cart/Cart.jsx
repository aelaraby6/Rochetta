import Footer from "../../components/Footer/footer";

export default function Cart({
  cartItems,
  handleAdd,
  handleRemove,
  handleDelete,
  handleClearCart,
  setCartItems,
}) {
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.NOI,
    0
  );

  const handleCreateOrder = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) return;

    const orderKey = `orders_${storedUser.email}`;
    const existingOrders = JSON.parse(localStorage.getItem(orderKey)) || [];

    const newOrder = {
      date: new Date().toISOString(),
      items: cartItems,
    };

    const updatedOrders = [...existingOrders, newOrder];
    localStorage.setItem(orderKey, JSON.stringify(updatedOrders));

    setCartItems([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#f9fafb",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Page Content */}
        <div
          className="container"
          style={{
            marginTop: "80px",
            maxWidth: "900px",
            padding: "30px",
            flex: 1,
          }}
        >
          <h2 className="mb-4 fw-bold text-center">🛒 Your Shopping Cart</h2>

          {cartItems.length === 0 ? (
            <div className="text-center py-5 bg-white rounded shadow-sm">
              <p className="fs-5 text-muted">Your cart is empty.</p>
            </div>
          ) : (
            <>
              <div className="d-flex flex-column gap-3">
                {cartItems.map((item, index) => (
                  <div
                    key={`${item.id}-${
                      item.isStrip ? "strip" : "box"
                    }-${index}`}
                    className="d-flex justify-content-between align-items-center"
                    style={{
                      backgroundColor: "#ffffff",
                      padding: "20px",
                      borderRadius: "10px",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                    }}
                  >
                    <div>
                      <h5 className="mb-2">
                        {item.name}{" "}
                        <span className="text-muted fs-6">
                          ({item.pieces} available)
                        </span>
                      </h5>
                      <p className="mb-0 text-secondary">
                        {item.stripsPerBox > 0 ? (
                          <>
                            {item.NOI} strip(s)
                            {item.NOI % item.stripsPerBox === 0 &&
                              ` = ${item.NOI / item.stripsPerBox} box(es)`}{" "}
                            <br />
                            <span className="fw-bold text-dark">
                              ${item.price} × {item.NOI} = $
                              {item.price * item.NOI}
                            </span>
                          </>
                        ) : (
                          <span className="fw-bold text-dark">
                            ${item.price} × {item.NOI} = $
                            {item.price * item.NOI}
                          </span>
                        )}
                      </p>
                    </div>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-sm btn-outline-success me-2"
                        onClick={() => handleAdd(item)}
                        disabled={item.NOI >= item.pieces || item.pieces === 0}
                      >
                        +
                      </button>
                      <button
                        className="btn btn-sm btn-outline-warning me-2"
                        onClick={() => handleRemove(item)}
                        disabled={item.NOI <= 1 || item.pieces === 0}
                      >
                        -
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDelete(item)}
                      >
                        🗑
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="card mt-4 border-0"
                style={{
                  borderRadius: "12px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.08)",
                }}
              >
                <div className="card-body text-end">
                  <h5 className="fw-bold">Total: ${totalPrice.toFixed(2)}</h5>
                  <div className="d-flex justify-content-end gap-2 mt-3">
                    <button
                      className="btn btn-outline-danger px-4"
                      onClick={handleClearCart}
                    >
                      Clear Cart
                    </button>
                    {cartItems.length > 0 && (
                      <button
                        className="btn btn-success px-4"
                        onClick={handleCreateOrder}
                      >
                        Create Order
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
}
