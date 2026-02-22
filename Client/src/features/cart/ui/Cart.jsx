import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  ArrowLeft,
  Loader2,
  CheckCircle,
} from "lucide-react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  useGetCartQuery,
  useRemoveFromCartMutation,
  useClearCartMutation,
  useCreateOrderMutation,
  useAddToCartMutation,
  useUpdateCartItemMutation,
} from "../store/cartApi";

export default function Cart() {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const { data: cartData, isLoading: isCartLoading } = useGetCartQuery(
    undefined,
    {
      skip: !isAuthenticated,
    },
  );
  const [removeFromCart] = useRemoveFromCartMutation();
  const [clearCart, { isLoading: isClearingCart }] = useClearCartMutation();
  const [createOrder, { isLoading: isOrdering }] = useCreateOrderMutation();
  const [addToCart] = useAddToCartMutation();
  const [updateCartItem] = useUpdateCartItemMutation();

  const [activeAction, setActiveAction] = useState({ id: null, type: null });

  const cartItems = cartData?.data?.items || [];

  const cartTotal = cartItems.reduce((acc, item) => {
    const price = Number(item.price ?? item.product?.price ?? 0);
    const qty = item.quantity ?? item.NOI ?? 1;
    return acc + price * qty;
  }, 0);

  const handleCreateOrder = async () => {
    try {
      await createOrder({ address: "Default Address" }).unwrap();
      await clearCart().unwrap();
      toast.success("Order created successfully!");
      navigate("/profile");
    } catch (err) {
      toast.error(err.data?.message || "Failed to create order");
    }
  };

  const handleIncrement = async (item, isStripItem, stripsPerBox) => {
    const id = item.product?._id || item._id;
    const addQty = isStripItem
      ? Number((1 / Math.max(1, stripsPerBox)).toFixed(6))
      : 1;

    setActiveAction({ id, type: "inc" });
    try {
      await addToCart({ productId: id, quantity: addQty }).unwrap();
      toast.success("Quantity updated");
    } catch (err) {
      toast.error("Failed to increase quantity", err);
    } finally {
      setActiveAction({ id: null, type: null });
    }
  };

  const handleDecrement = async (item, isStripItem, stripsPerBox) => {
    const id = item.product?._id || item._id;
    const currentQty = item.quantity ?? item.NOI ?? 1;
    const subQty = isStripItem
      ? Number((1 / Math.max(1, stripsPerBox)).toFixed(6))
      : 1;
    const newQty = Number((currentQty - subQty).toFixed(6));

    setActiveAction({ id, type: "dec" });
    try {
      if (newQty < subQty) {
        await removeFromCart(id).unwrap();
        toast.success("Item removed from cart");
      } else {
        await updateCartItem({ productId: id, quantity: newQty }).unwrap();
        toast.success("Quantity updated");
      }
    } catch (err) {
      toast.error("Failed to decrease quantity", err);
    } finally {
      setActiveAction({ id: null, type: null });
    }
  };

  const handleRemove = async (id) => {
    setActiveAction({ id, type: "rem" });
    try {
      await removeFromCart(id).unwrap();
      toast.success("Item removed");
    } catch (err) {
      toast.error("Failed to remove item", err);
    } finally {
      setActiveAction({ id: null, type: null });
    }
  };

  if (isCartLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Loader2 className="w-12 h-12 animate-spin text-green-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center flex justify-center items-center gap-3">
          <ShoppingCart className="w-8 h-8 text-green-600" aria-hidden="true" />
          Your Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 text-center shadow-sm border border-gray-100 dark:border-gray-700 max-w-2xl mx-auto">
            <ShoppingCart
              className="w-20 h-20 text-gray-300 dark:text-gray-600 mx-auto mb-6"
              aria-hidden="true"
            />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              Browse products and add them to your cart.
            </p>
            <Link
              to="/category/pain-relief"
              className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-xl transition-all active:scale-95"
            >
              <ArrowLeft className="w-5 h-5" aria-hidden="true" />
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-grow w-full lg:w-2/3">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                {cartItems.map((item) => {
                  const product = item.product || item;
                  const id = product._id;
                  const qty = item.quantity ?? item.NOI ?? 1;
                  const stripsPerBox = Number(
                    product.stripsPerBox || product.strip_count || 0,
                  );
                  const isStripItem = item.unit === "strip" && stripsPerBox > 0;
                  const unitPrice = Number(product.price ?? 0);
                  const subtotal = (unitPrice * qty).toFixed(2);
                  const stockAvailable = product.pieces ?? product.stock ?? 0;

                  let qtyDisplay = "";
                  if (isStripItem) {
                    const boxes = Math.floor(qty / stripsPerBox);
                    const strips = Math.round(qty % stripsPerBox);
                    if (boxes > 0 && strips > 0)
                      qtyDisplay = `${boxes} box + ${strips} strip`;
                    else if (boxes > 0)
                      qtyDisplay = `${boxes} box${boxes > 1 ? "es" : ""}`;
                    else qtyDisplay = `${strips} strip${strips > 1 ? "s" : ""}`;
                  } else {
                    const num = Math.round(qty * 100) / 100;
                    qtyDisplay = Number.isInteger(num)
                      ? `${num} box${num > 1 ? "es" : ""}`
                      : `${num.toFixed(2)} box`;
                  }

                  const isIncLoading =
                    activeAction.id === id && activeAction.type === "inc";
                  const isDecLoading =
                    activeAction.id === id && activeAction.type === "dec";
                  const isRemLoading =
                    activeAction.id === id && activeAction.type === "rem";
                  const actionInProgress =
                    isIncLoading || isDecLoading || isRemLoading;

                  return (
                    <div
                      key={id}
                      className={`flex flex-col sm:flex-row items-center gap-4 p-4 border-b border-gray-100 dark:border-gray-700 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors ${actionInProgress ? "opacity-70 pointer-events-none" : ""}`}
                    >
                      <Link
                        to={`/product/${id}`}
                        className="w-24 h-24 flex-shrink-0 bg-gray-50 dark:bg-gray-700 rounded-xl p-2 border border-gray-100 dark:border-gray-600"
                        aria-label={`View details of ${product.name}`}
                      >
                        <img
                          src={product.image || "/placeholder.png"}
                          alt={product.name}
                          className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal"
                        />
                      </Link>

                      <div className="flex-grow text-center sm:text-left">
                        <Link
                          to={`/product/${id}`}
                          className="text-lg font-bold text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors"
                        >
                          {product.name}
                        </Link>
                        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-1">
                          {product.desc || product.description}
                        </div>

                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-3">
                          <div className="flex items-center gap-2">
                            <button
                              aria-label={`Increase quantity of ${product.name}`}
                              onClick={() =>
                                handleIncrement(item, isStripItem, stripsPerBox)
                              }
                              disabled={
                                stockAvailable <= qty || actionInProgress
                              }
                              className="w-8 h-8 flex justify-center items-center rounded-lg border border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                              {isIncLoading ? (
                                <Loader2
                                  className="w-4 h-4 animate-spin"
                                  aria-hidden="true"
                                />
                              ) : (
                                <Plus className="w-4 h-4" aria-hidden="true" />
                              )}
                            </button>
                            <div className="min-w-[4rem] text-center font-bold text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 py-1 px-2 rounded-lg text-sm">
                              {qtyDisplay}
                            </div>
                            <button
                              aria-label={`Decrease quantity of ${product.name}`}
                              onClick={() =>
                                handleDecrement(item, isStripItem, stripsPerBox)
                              }
                              disabled={actionInProgress}
                              className="w-8 h-8 flex justify-center items-center rounded-lg border border-yellow-600 text-yellow-600 hover:bg-yellow-50 dark:hover:bg-yellow-900/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                              {isDecLoading ? (
                                <Loader2
                                  className="w-4 h-4 animate-spin"
                                  aria-hidden="true"
                                />
                              ) : (
                                <Minus className="w-4 h-4" aria-hidden="true" />
                              )}
                            </button>
                          </div>
                          <div className="text-gray-900 dark:text-gray-300 font-semibold">
                            ${unitPrice.toFixed(2)}{" "}
                            <span className="text-sm text-gray-500 font-normal">
                              each
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto mt-4 sm:mt-0 gap-4">
                        <div className="text-right">
                          <div className="text-xl font-bold text-gray-900 dark:text-white">
                            ${subtotal}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {stockAvailable} in stock
                          </div>
                        </div>
                        <button
                          aria-label={`Remove ${product.name} from cart`}
                          onClick={() => handleRemove(id)}
                          disabled={actionInProgress}
                          className="text-red-500 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          {isRemLoading ? (
                            <Loader2
                              className="w-5 h-5 animate-spin"
                              aria-hidden="true"
                            />
                          ) : (
                            <Trash2 className="w-5 h-5" aria-hidden="true" />
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-between items-center mt-6">
                <button
                  aria-label="Clear all items from cart"
                  disabled={isClearingCart}
                  onClick={async () => {
                    try {
                      await clearCart().unwrap();
                      toast.success("Cart cleared");
                    } catch (e) {
                      toast.error("Failed to clear cart", e);
                    }
                  }}
                  className="flex items-center gap-2 text-red-600 hover:text-red-800 font-semibold px-4 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isClearingCart ? (
                    <Loader2
                      className="w-4 h-4 animate-spin"
                      aria-hidden="true"
                    />
                  ) : (
                    <Trash2 className="w-4 h-4" aria-hidden="true" />
                  )}
                  Clear Cart
                </button>
                <Link
                  to="/category/pain-relief"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-semibold transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-1/3">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Order Summary
                </h2>

                <div className="flex justify-between items-center mb-4 text-gray-600 dark:text-gray-400">
                  <span>Total Items</span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {cartItems.length} Unique
                  </span>
                </div>

                <div className="flex justify-between items-center mb-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    Subtotal
                  </span>
                  <span className="text-2xl font-black text-green-600 dark:text-green-400">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={handleCreateOrder}
                  disabled={isOrdering}
                  className="w-full bg-green-700 hover:bg-green-800 disabled:bg-green-500 text-white font-bold py-4 rounded-xl transition-transform active:scale-95 flex justify-center items-center gap-2 shadow-md"
                >
                  {isOrdering ? (
                    <Loader2
                      className="w-6 h-6 animate-spin"
                      aria-hidden="true"
                    />
                  ) : (
                    <>
                      <CheckCircle className="w-5 h-5" aria-hidden="true" />
                      Checkout
                    </>
                  )}
                </button>

                <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400 flex flex-col gap-1">
                  <span>Secure checkout</span>
                  <span>2-days return policy</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
