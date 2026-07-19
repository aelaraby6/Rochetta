import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

export const useCartLogic = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const { data: cartData, isLoading: isCartLoading } = useGetCartQuery(
    undefined,
    {
      skip: !isAuthenticated,
    }
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

  const handleClearCart = async () => {
    try {
      await clearCart().unwrap();
      toast.success("Cart cleared");
    } catch (e) {
      toast.error("Failed to clear cart", e);
    }
  };

  return {
    isCartLoading,
    cartItems,
    cartTotal,
    activeAction,
    isClearingCart,
    isOrdering,
    handleCreateOrder,
    handleIncrement,
    handleDecrement,
    handleRemove,
    handleClearCart,
  };
};
