import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useGetProductByIdQuery } from "../store/productsApi";
import { useAddToCartMutation } from "../../cart/store/cartApi";
import { optimizeCloudinaryUrl } from "../../../utils/productUtils";

export function useProductDetailsLogic() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const {
    data: response,
    isLoading: isFetching,
    isError,
  } = useGetProductByIdQuery(id);
  const [addToCart, { isLoading: isAdding }] = useAddToCartMutation();

  const [addingUnit, setAddingUnit] = useState(null);

  const product = response?.data;

  const stock =
    product?.stock !== undefined
      ? product.stock.toFixed(2)
      : product?.pieces?.toFixed(2) || 0;
  const description = product?.description || product?.desc || "";
  const outOfStock = stock <= 0;
  const isRoshetta = product?.requires_prescription || product?.IsRoshetta;
  const hasStrips = product?.has_strips || product?.stripsPerBox > 0;
  const stripsPerBox = product?.strip_count || product?.stripsPerBox || 1;

  const optimizedImage = product
    ? optimizeCloudinaryUrl(product.image) || "/placeholder.png"
    : "/placeholder.png";

  const handleAddToCart = async (unit) => {
    if (!isAuthenticated) {
      toast.error("Please login to add items");
      return;
    }
    setAddingUnit(unit);
    let qtyToSend = 1;
    if (unit === "strip" && hasStrips && stripsPerBox > 0) {
      qtyToSend = Number((1 / Math.max(1, stripsPerBox)).toFixed(2));
    }
    try {
      await addToCart({ productId: product._id, quantity: qtyToSend }).unwrap();
      toast.success("Item added to cart!");
    } catch (err) {
      toast.error(err.data?.message || "Failed to add item");
    } finally {
      setAddingUnit(null);
    }
  };

  return {
    product,
    isFetching,
    isError,
    stock,
    description,
    outOfStock,
    isRoshetta,
    hasStrips,
    optimizedImage,
    isAdding,
    addingUnit,
    handleAddToCart,
    navigate,
  };
}
