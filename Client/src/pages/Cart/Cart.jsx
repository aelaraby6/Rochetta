// src/pages/Cart/Cart.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/footer";
import api from "../../api";
import "./Cart.css";

export default function Cart({
  cartItems,
  handleAdd,
  handleRemove,
  handleDelete,
  handleClearCart,
  setCartItems,
}) {
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((acc, item) => {
    const product = item.product ?? item;
    const qty = Number(item.quantity ?? item.NOI ?? 1); // quantity in boxes (possibly fractional)
    const unitPrice = Number(item.price ?? product.price ?? 0); // price per box
    return acc + unitPrice * qty;
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
      alert(
        err.response?.data?.message || err.message || "Failed to create order"
      );
    }
  };

  return (
    <>
      <div className="cart-page">
        <div
          className="container"
          style={{ paddingTop: 80, paddingBottom: 40 }}
        >
          <h2 className="cart-title text-center mb-4"> Your Shopping Cart</h2>

          {cartItems.length === 0 ? (
            <div className="empty-cart card text-center p-5 mx-auto shadow-sm">
              <h4 className="mb-3">Your cart is empty</h4>
              <p className="text-muted mb-4">
                Browse products and add them to your cart.
              </p>
              <Link to="/category/pain-relief" className="btn btn-success px-4">
                Continue Shopping
              </Link>
            </div>
                    ) : (
            <div className="row d-flex justify-content-center align-items-center gx-4">
              {/* Single column: items then summary stacked under them */}
              <div className="col-8">
                {/* Items card */}
                <div className="card items-card p-3 mb-4 shadow-sm">
                  {cartItems.map((item, idx) => {
                    const id =
                      item?._id || item?.product?._id || `local-${idx}`;
                    const product = item.product || item;
                    const qty = item.quantity ?? item.NOI ?? 1;
                    const stripsPerBox = Number(
                      product.stripsPerBox || product.strip_count || 0
                    );
                    const isStripItem =
                      item.unit === "strip" && stripsPerBox > 0;

                    const unitPrice = isStripItem
                      ? Number(product.price ?? item.price ?? 0)
                      : Number(item.price ?? product.price ?? 0);

                    const subtotal = (unitPrice * qty).toFixed(2);

                    const qtyDisplay = isStripItem
                      ? (() => {
                          const boxes = Math.floor(qty / stripsPerBox);
                          const strips = Math.round(qty % stripsPerBox);
                          if (boxes > 0 && strips > 0)
                            return `${boxes} box + ${strips} strip`;
                          if (boxes > 0)
                            return `${boxes} box${boxes > 1 ? "s" : ""}`;
                          return `${strips} strip${strips > 1 ? "s" : ""}`;
                        })()
                      : (() => {
                          const num = Math.round(qty * 100) / 100;
                          return Number.isInteger(num)
                            ? `${num} box${num > 1 ? "s" : ""}`
                            : `${num.toFixed(2)} box`;
                        })();

                    const pieces = product.pieces ?? product.stock ?? 0;

                    return (
                      <div
                        key={id}
                        className="cart-row d-flex align-items-center"
                      >
                        <div className="thumb me-3">
                          <Link
                            to={`/product/${product._id ?? product.id ?? ""}`}
                          >
                            <img
                              src={product.image || "/placeholder.png"}
                              alt={product.name}
                              className="img-fluid"
                            />
                          </Link>
                        </div>

                        <div className="flex-grow-1">
                          <Link
                            to={`/product/${product._id ?? product.id ?? ""}`}
                            className="item-name"
                          >
                            {product.name}
                          </Link>
                          <div className="text-muted small">
                            {product.desc && product.desc.substring(0, 80)}
                          </div>

                          <div className="d-flex align-items-center mt-2 gap-3">
                            <div className="qty-control d-flex align-items-center">
                              <button
                                className="btn btn-sm btn-outline-success"
                                onClick={() =>
                                  handleAdd(item, 1, {
                                    unit: isStripItem ? "strip" : "box",
                                  })
                                }
                                disabled={
                                  (item.unit === "box" &&
                                    (item.product?.pieces ??
                                      item.product?.stock ??
                                      0) <= (item.quantity ?? 0)) ||
                                  false
                                }
                                aria-label={`increase ${product.name}`}
                              >
                                <i className="bi bi-plus-lg"></i>
                              </button>
                              <div className="qty-badge mx-2">{qtyDisplay}</div>
                              <button
                                className="btn btn-sm btn-outline-warning"
                                onClick={() => handleRemove(item)}
                                disabled={(item.quantity ?? 1) <= 1}
                                aria-label={`decrease ${product.name}`}
                              >
                                <i className="bi bi-dash-lg"></i>
                              </button>
                            </div>

                            <div className="price-info">
                              <strong>${unitPrice.toFixed(2)}</strong>{" "}
                              <span className="text-muted">each</span>
                            </div>

                            <div className="ms-auto text-end">
                              <div className="subtotal fw-bold">
                                ${subtotal}
                              </div>
                              <div className="text-muted small">
                                {Number((pieces ?? 0).toFixed(2))} pieces
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="ms-3 actions">
                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => {
                              if (window.confirm("Remove this item from cart?"))
                                handleDelete(item);
                            }}
                            title="Remove"
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* controls under the list */}
                <div className="d-flex justify-content-between mb-4">
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => {
                      if (window.confirm("Clear cart?")) handleClearCart();
                    }}
                  >
                    Clear Cart
                  </button>

                  <Link
                    to="/category/pain-relief"
                    className="btn btn-outline-secondary"
                  >
                    Continue Shopping
                  </Link>
                </div>

                {/* Summary CARD now placed below the items */}
                <div className="card summary-card p-3 shadow-sm ">
                  <h5 className="mb-3">Order Summary</h5>
                  <div className="d-flex justify-content-between mb-2">
                    <div className="text-muted">Items</div>
                    <div>
                      {cartItems.reduce(
                        (a, c) => a + Number(c.quantity ?? c.NOI ?? 1),
                        0
                      )}
                    </div>
                  </div>

                  <div className="d-flex justify-content-between mb-2">
                    <div className="text-muted">Subtotal</div>
                    <div>${totalPrice.toFixed(2)}</div>
                  </div>

                  <div className="d-grid">
                    <button
                      className="btn btn-success btn-lg"
                      onClick={handleCreateOrder}
                    >
                      Order — ${totalPrice.toFixed(2)}
                    </button>
                  </div>

                  <div className="mt-3 text-center">
                    <small className="text-muted">
                      Secure checkout • 2-days return
                    </small>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      <Footer />
    </>
  );
}
