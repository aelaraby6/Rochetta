import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import api from "../../api";
import { CartContext, ProductContext } from "../../context/ContextObjects";
import { mapProduct } from "../../utils/productUtils";
export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products } = useContext(ProductContext);
  const { handleAdd } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    let mounted = true;
    const local = products.find((item) => item._id === id || item.id === id);
    if (local) {
      setProduct(local);
      setLoading(false);
      return;
    }
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/products/${id}`);
        const p = res.data?.data;
        if (!p) throw new Error("Product not found from API");
        if (!mounted) return; 
        setProduct(mapProduct(p));
      } catch (err) {
        console.error("Failed to load product:", err);
        setError("Product not found");
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchProduct();
    return () => {
      mounted = false;
    };
  }, [id, products]);
  if (loading)
    return <p style={{ marginTop: 150, textAlign: "center" }}>Loading...</p>;
  if (error || !product)
    return (
      <div style={{ marginTop: 150, textAlign: "center" }}>
        <p>Product not found</p>
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>
          Go back
        </button>
      </div>
    );
  return (
    <div
      style={{ marginTop: "120px", marginLeft: "20px" }}
      className="row w-75"
    >
      <div className="col-md-6">
        <img
          src={product.image || "/placeholder.png"}
          alt={product.name}
          className="img-fluid"
          style={{
            maxHeight: 440,
            objectFit: "contain",
            background: "transparent",
          }}
        />
      </div>
      <div className="col-md-6">
        <h2>{product.name}</h2>
        <p className="fs-4 fw-bold">${product.price}</p>
        <p>{product.desc}</p>
        <p>
          <strong>Available:</strong>
          {product.pieces}pieces
        </p>
        {product.IsRoshetta && (
          <p className="text-danger">Requires prescription</p>
        )}
        <div className="d-flex gap-2">
          <button
            className="btn btn-success"
            onClick={() => handleAdd(product)}
            disabled={product.pieces <= 0 || product.IsRoshetta}
          >
            Add to Cart
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
