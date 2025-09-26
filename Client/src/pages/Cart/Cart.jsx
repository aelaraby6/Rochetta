import Footer from "../../components/Footer/footer";
import { useNavigate } from "react-router-dom";
import api from "../../api";

export default function Cart({
  cartItems,
  handleAdd,
  handleRemove,
  handleDelete,
  handleClearCart,
  setCartItems
}) {
  const navigate = useNavigate();

  // ---------- FIXED Total calculation ----------
  const totalPrice = cartItems.reduce((acc, item) => {
    const price = Number(item.price ?? item.product?.price ?? 0);
    const qty = Number(item.quantity ?? item.NOI ?? 1);
    return acc + price * qty;
  }, 0);

  const handleCreateOrder = async () => {
  try {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      alert("Please login to place an order.");
      return;
    }

    const address = "Default Address"; 

    await api.post("/order/create-order", { address });

    setCartItems([]);
    localStorage.setItem("cart", JSON.stringify([]));

    navigate("/profile");
  } catch (err) {
    console.error("Error creating order:", err);
    alert(err.response?.data?.message || err.message || "Failed to create order");
  }
};


  return (
    <>
      <div
        // style={{
        //   backgroundColor: "#f9fafb",
        //   minHeight: "100vh",
        //   display: "flex",
        //   flexDirection: "column",
        // }}
        className=" cart-item p-3 d-flex flex-column"
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
                {cartItems.map((item, index) => {
                  const id = item?._id || item?.product?._id || index;
                  const product = item.product || item;
                  const qty = item.quantity ?? item.NOI ?? 1;
                  const pieces = product.pieces ?? product.stock ?? 0;

                  return (
                    <div
                      key={`${id}-${index}`}
                      className="cart-item d-flex justify-content-between align-items-center"
                      style={{
                        backgroundColor: "#fff",
                        padding: 20,
                        borderRadius: 10,
                        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                      }}
                    >
                      <div>
                        <h5 className="mb-2">
                          {product.name}{" "}
                          <span className="text-muted fs-6">({pieces} available)</span>
                        </h5>
                        <p className="mb-0 text-secondary">
                          {product.stripsPerBox > 0 ? (
                            <>
                              {qty} strip(s)
                              {qty % product.stripsPerBox === 0 && ` = ${qty / product.stripsPerBox} box(es)`}
                              <br />
                              <span className="fw-bold text-dark">
                                ${item.price ?? product.price} × {qty} = ${( (Number(item.price ?? product.price)) * Number(qty) ).toFixed(2)}
                              </span>
                            </>
                          ) : (
                            <span className="fw-bold text-dark">
                              ${item.price ?? product.price} × {qty} = ${( (Number(item.price ?? product.price)) * Number(qty) ).toFixed(2)}
                            </span>
                          )}
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <button
                          className="btn btn-sm btn-outline-success me-2"
                          onClick={() => handleAdd(item)}
                          disabled={qty >= pieces || pieces === 0}
                        >
                          +
                        </button>
                        <button
                          className="btn btn-sm btn-outline-warning me-2"
                          onClick={() => handleRemove(item)}
                          disabled={qty <= 1 || pieces === 0}
                        >
                          -
                        </button>
                        <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(item)}>
                          🗑
                        </button>
                      </div>
                    </div>
                  );
                })}
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
                    <button className="btn btn-outline-danger px-4" onClick={handleClearCart}>
                      Clear Cart
                    </button>
                    {cartItems.length > 0 && (
                      <button className="btn btn-success px-4" onClick={handleCreateOrder}>
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
