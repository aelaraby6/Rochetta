// src/pages/CategoryLinks/ColdandFlu.jsx
import React, { useContext, useMemo } from "react";
import ProductList from "../../components/ProductList/ProductList";
import "./productStyle.css";
import {
  AuthContext,
  CartContext,
  ProductContext,
} from "../../context/ContextObjects";
function ColdandFlu({ searchTerm }) {
  const { state: authState } = useContext(AuthContext);
  const {
    products,
    categories,
    handleAddNewProduct,
    handleDeleteProduct,
    handleUpdate,
    newProduct,
    setNewProduct,
    editedProduct,
    setEditedProduct,
    editingProductId,
    setEditingProductId,
    handleEdit,
    handleCancelEdit,
  } = useContext(ProductContext);
  const { handleAdd } = useContext(CartContext);
  const categorySlug = "Cold and Flu";
  const filteredProducts = useMemo(() => {
    const categoryFilter = products.filter((p) => {
      const categoryMatch =
        (p.category && p.category.name === categorySlug) ||
        p.category === categorySlug;
      return categoryMatch;
    });
    if (!searchTerm) return categoryFilter;
    const term = searchTerm.toLowerCase();
    return categoryFilter.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        (product.desc && product.desc.toLowerCase().includes(term))
    );
  }, [products, searchTerm]);
  const isAdmin = authState.user && authState.user.role === "admin";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="productStyle"
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "8px 8px 12px rgba(0,0,0,0.08)";
        }}
      >
        <div className="desc-section">
          <h3 className="desc-title">Cold and Flu</h3>
          <p className="desc-text">
            Cold and Flu products help relieve common symptoms such as nasal
            congestion, cough, fever, and headache. For best results, combine
            medication with rest and adequate hydration.
          </p>
        </div>
        <ProductList
          searchTerm={searchTerm}
          products={filteredProducts}
          user={isAdmin ? authState.user : null}
          handleAdd={handleAdd}
          handleEdit={handleEdit}
          handleDeleteProduct={handleDeleteProduct}
          handleUpdate={handleUpdate}
          editingProductId={editingProductId}
          editedProduct={editedProduct}
          setEditedProduct={setEditedProduct}
          setEditingProductId={setEditingProductId}
          handleCancelEdit={handleCancelEdit}
          newProduct={newProduct}
          setNewProduct={setNewProduct}
          handleAddNewProduct={handleAddNewProduct}
          categories={categories}
        />
      </div>
    </div>
  );
}
export default ColdandFlu;
