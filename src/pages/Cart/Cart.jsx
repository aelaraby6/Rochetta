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

    const orderKey = `orders_${storedUser.username}`;
    const existingOrders = JSON.parse(localStorage.getItem(orderKey)) || [];

    const newOrder = {
      date: new Date().toISOString(),
      items: cartItems,
    };

    const updatedOrders = [...existingOrders, newOrder];
    localStorage.setItem(orderKey, JSON.stringify(updatedOrders));

    setCartItems([]);
    localStorage.setItem("cart", JSON.stringify([]));

    alert("✅ تم إنشاء الطلب بنجاح!");
  };

  return (
    <div className=" container" style={{ marginTop: "90px" }}>
      <h3>Your Cart</h3>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div
              key={`${item.id}-${item.isStrip ? "strip" : "box"}-${index}`}
              className="d-flex justify-content-between align-items-center border-bottom py-2"
            >
              <div>
                <h5>
                  {item.name}{" "}
                  <span className="text-muted fs-6">
                    ({item.pieces} available)
                  </span>
                </h5>

                {item.stripsPerBox > 0 ? (
                  <p>
                    {item.NOI} strip(s)
                    {item.NOI % item.stripsPerBox === 0 &&
                      ` = ${item.NOI / item.stripsPerBox} box(es)`}
                    <br />${item.price} × {item.NOI} = ${item.price * item.NOI}
                  </p>
                ) : (
                  <p>
                    ${item.price} × {item.NOI} = ${item.price * item.NOI}
                  </p>
                )}
              </div>
              <div>
                <button
                  className="btn btn-sm btn-success me-2"
                  onClick={() => handleAdd(item)}
                >
                  +
                </button>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => handleRemove(item)}
                >
                  -
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(item)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          <div className="mt-3 text-end">
            <h5>Total: ${totalPrice.toFixed(2)}</h5>
            <button className="btn btn-danger mt-2" onClick={handleClearCart}>
              Clear Cart
            </button>
            {cartItems.length > 0 && (
              <div className="text-end mt-3">
                <button className="btn btn-success" onClick={handleCreateOrder}>
                  Create Order
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
