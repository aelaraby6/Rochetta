import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import api from "../api"; 
import { mapProduct, getStripsPerBox } from "../utils/productUtils";

export const useCartActions = (updateProductStock) => {
  const { dispatch, state } = useContext(CartContext);
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"; 

  const fetchCart = async () => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const res = await api.get("/cart/get-user-cart");
      dispatch({
        type: "FETCH_CART_SUCCESS",
        payload: res.data.data.items || [],
      });
    } catch (err) {
      console.error("Error fetching cart:", err);
      dispatch({
        type: "CART_OPERATION_FAILURE",
        payload: "Failed to fetch cart",
      });
    }
  };

  const addItemToCart = async (product, addQty = 1, unit = "box") => {
    const id = product._id;
    const stripsPerBox = getStripsPerBox(product);

    if (!isLoggedIn) {
      console.warn("User not logged in, using local cart logic.");
      return;
    }

    dispatch({ type: "SET_LOADING", payload: true });
    try {
      let qtyToSend = addQty;
      if (unit === "strip" && stripsPerBox > 0) {
        qtyToSend = Number(
          ((1 / Math.max(1, stripsPerBox)) * addQty).toFixed(6)
        );
      }

      const res = await api.post("/cart/add-to-cart", {
        productId: id,
        quantity: qtyToSend,
      });

      dispatch({
        type: "UPDATE_CART_SUCCESS",
        payload: res.data.data.items || [],
      });

      const prodRes = await api.get(`/products/${id}`);
      const updatedProduct = mapProduct(prodRes.data.data); 

      if (updateProductStock) {
          updateProductStock(id, updatedProduct);
      }
    } catch (err) {
      console.error("Error adding to server cart:", err);
      dispatch({
        type: "CART_OPERATION_FAILURE",
        payload: err.response?.data?.message || "Failed to add item",
      });
    }
  };


  return { state, fetchCart, addItemToCart };
};
