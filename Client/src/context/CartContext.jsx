
import React, {
  useReducer,
  useMemo,
  useEffect,
  useCallback,
  useContext,
} from "react";
import { cartReducer, initialCartState } from "./cartReducer";
import { AuthContext } from "./ContextObjects";
import { ProductContext } from "./ContextObjects";
import { CartContext } from "./ContextObjects";

import api from "../api";

export const CartProvider = ({ children }) => {
  const { state: authState } = useContext(AuthContext);
  const { getStrips, updateProductInList } = useContext(ProductContext);

  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  const looksLikeBackendId = (id) =>
    typeof id === "string" && /^[0-9a-fA-F]{24}$/.test(id); 

  const fetchCart = useCallback(async () => {
    if (!authState.isLoggedIn) return;
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const res = await api.get("/cart/get-user-cart");
      dispatch({
        type: "UPDATE_CART_SUCCESS",
        payload: res.data.data.items || [],
      });
    } catch (err) {
      console.error("Error fetching cart:", err);
      dispatch({
        type: "CART_OPERATION_FAILURE",
        payload: "Failed to fetch cart",
      });
    }
  }, [authState.isLoggedIn, dispatch]); 

  useEffect(() => {
    if (authState.isLoggedIn) {
      fetchCart();
    } else {
      dispatch({ type: "LOGOUT_CLEAR" });
    }
  }, [authState.isLoggedIn, fetchCart, dispatch]); 

  const handleAdd = useCallback(
    async (itemOrProduct, addQty = 1, options = {}) => {
      const product = itemOrProduct.product
        ? itemOrProduct.product
        : itemOrProduct;
      const id = product._id;
      const stripsPerBox = getStrips(product);
      const unit = options.unit || "box";
      const qty = Number(addQty || 1);

      if (authState.isLoggedIn && looksLikeBackendId(id)) {
        dispatch({ type: "SET_LOADING", payload: true });
        try {
          let qtyToSend = qty;
          if (unit === "strip" && stripsPerBox > 0) {
            qtyToSend = Number(
              ((1 / Math.max(1, stripsPerBox)) * qty).toFixed(6)
            );
          }
          if (qtyToSend <= 0)
            qtyToSend = Number((1 / Math.max(1, stripsPerBox)).toFixed(6));

          const res = await api.post("/cart/add-to-cart", {
            productId: id,
            quantity: qtyToSend,
          });
          dispatch({
            type: "UPDATE_CART_SUCCESS",
            payload: res.data.data.items || [],
          }); 
          const prodRes = await api.get(`/products/${id}`);
          updateProductInList(id, prodRes.data.data);
        } catch (err) {
          console.error("Error adding to server cart:", err);
          dispatch({
            type: "CART_OPERATION_FAILURE",
            payload: err.response?.data?.message || "Failed to add item",
          });
        }
      } else {
        console.warn("Using local cart logic (not implemented here yet).");
      }
    },
    [authState.isLoggedIn, getStrips, updateProductInList, dispatch]
  ); 

  const handleDelete = useCallback(
    async (item) => {
      const pid = item.product?._id ?? item._id ?? item.id;

      if (authState.isLoggedIn && looksLikeBackendId(pid)) {
        dispatch({ type: "SET_LOADING", payload: true });
        try {
          const res = await api.delete(`/cart/${pid}`);
          dispatch({
            type: "UPDATE_CART_SUCCESS",
            payload: res.data.data.items || [],
          });

          const prodRes = await api.get(`/products/${pid}`);
          updateProductInList(pid, prodRes.data.data);
        } catch (err) {
          console.error("Error deleting server item:", err);
          dispatch({
            type: "CART_OPERATION_FAILURE",
            payload: err.response?.data?.message || "Failed to delete item",
          });
        }
      } else {
        console.warn("Using local delete logic (not implemented here yet).");
      }
    },
    [authState.isLoggedIn, updateProductInList, dispatch]
  ); 

  const handleRemove = useCallback(
    async (item) => {
      const pid = item.product?._id ?? item._id ?? item.id;
      const product = item.product ?? item;
      const stripsPerBox = getStrips(product);
      const unit = item.unit || (stripsPerBox > 0 ? "strip" : "box");

      if (authState.isLoggedIn && looksLikeBackendId(pid)) {
        dispatch({ type: "SET_LOADING", payload: true });
        try {
          const serverItem = state.items.find(
            (ci) => String(ci.product?._id ?? ci._id ?? ci.id) === String(pid)
          );
          const currentQty = Number(
            serverItem?.quantity ?? serverItem?.NOI ?? 0
          );

          const delta =
            unit === "strip" && stripsPerBox > 0
              ? 1 / Math.max(1, stripsPerBox)
              : 1;
          const newQty = Number((currentQty - delta).toFixed(6));

          if (newQty < delta) {
            await handleDelete(item);
            return;
          }

          const res = await api.patch(`/cart/${pid}`, { quantity: newQty });
          dispatch({
            type: "UPDATE_CART_SUCCESS",
            payload: res.data.data.items || [],
          });

        } catch (err) {
          console.error("Error removing server item:", err);
          dispatch({
            type: "CART_OPERATION_FAILURE",
            payload: err.response?.data?.message || "Failed to remove item",
          });
        }
      } else {
        console.warn("Using local remove logic (not implemented here yet).");
      }
    },
    [authState.isLoggedIn, state.items, getStrips, handleDelete, dispatch]
  );

  const handleClearCart = useCallback(async () => {
    if (!authState.isLoggedIn) {
      dispatch({ type: "CLEAR_CART_SUCCESS", payload: [] });
      return;
    }

    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const res = await api.delete("/cart/clear-cart");
      dispatch({
        type: "CLEAR_CART_SUCCESS",
        payload: res.data.data.items || [],
      });

      const productsRes = await api.get("/products?limit=100");
      (productsRes.data?.data || []).forEach((p) =>
        updateProductInList(p._id, p)
      );
    } catch (err) {
      console.error("Error clearing cart:", err);
      dispatch({
        type: "CART_OPERATION_FAILURE",
        payload: err.response?.data?.message || "Failed to clear cart",
      });
    }
  }, [authState.isLoggedIn, updateProductInList, dispatch]); 

  const cartCount = useMemo(() => {
    return state.items.reduce((a, c) => a + (c.quantity ?? c.NOI ?? 0), 0);
  }, [state.items]);

  const cartTotal = useMemo(() => {
    return state.items.reduce(
      (a, c) => a + c.price * (c.quantity ?? c.NOI ?? 0),
      0
    );
  }, [state.items]);

  const contextValue = useMemo(
    () => ({
      cartItems: state.items,
      cartCount,
      cartTotal,
      handleAdd,
      handleRemove,
      handleDelete,
      handleClearCart,
      isLoading: state.isLoading,
    }),
    [
      state.items,
      cartCount,
      cartTotal,
      handleAdd,
      handleRemove,
      handleDelete,
      handleClearCart,
      state.isLoading,
    ]
  );

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};
